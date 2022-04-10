const mysql =require('mysql');
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)
const {myToken}=require('../models/token')
const sendConfirmationEmail = require('../models/sendConfirmationEmail')

const bcrypt =require('bcryptjs');

const saltRounds=10

const register=(req,res)=>{
    
    const {username,email,password}=req.body
    bcrypt.hash(password,saltRounds,(err,hashedPw)=>{
        if(err) console.log(err)
        const regDate=new Date()
        const regDateStr=regDate.getFullYear()+'.'+(regDate.getMonth()+1)+'.'+regDate.getDate()
        const token=myToken()
        db.query('insert into user (username,email,password,created_at,status,confirmationCode) values (?,?,?,?,?,?)',
            [username,email,hashedPw,regDateStr,'pending','user',token],(err,result) => {
                if(err) {
                    console.log('insert error:',err)
                    res.send({message:`Error-insert:${err}`})
                }
                if(result){
                    console.log('Sikeres insert!',result.insertId)
                    
                    
                    //email küldés
                    sendConfirmationEmail(username,email,token)
                    res.send({message:'Kérlek nézd meg az email fiókodat!'})
                }
            })
    })
}

const login=(req,res)=>{
    console.log('post....',req.body)
    const {email,password} = req.body
    db.query('select iduser,password,username,status from user where email=?',[email],(err,result) => {
        if(err)
            res.send({"message":err})
        if(result.length==1){
            bcrypt.compare(password,result[0].password,
                (error,resultCompare) => {
                    if(resultCompare)
                        if(result[0].status=='active')
                            res.send({message:"sikeres bejelentkezés!", username:result[0].username,userId:result[0].id})
                        else
                            res.status(401).send({message:"Az email üzeneteid között megtalálod az aktiváló linket!"})
                    else
                        res.status(401).send({message:"hibás email/jelszó páros!"})
                })
        }else
            res.status(401).send({message:"nem létező email cím!"})
    })
}



module.exports ={login,register}