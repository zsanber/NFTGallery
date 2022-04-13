const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)

export const checkEmail=(req,res)=>{
    console.log('post....',req.body)
    const {email} = req.body
    db.query('select count(*) nr from users where email=?',[email],(err,result) => {
        res.send(result)
    })
}