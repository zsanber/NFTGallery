const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)

export const login=(req,res)=>{
    console.log('post....',req.body)
    const {email,password} = req.body
    db.query('SELECT iduser,password,username,status FROM user WHERE email=?',[email],(err,result) => {
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