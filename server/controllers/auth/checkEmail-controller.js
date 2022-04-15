const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)

export const checkEmail=(req,res)=>{ //querie done
    console.log('post....',req.body)
    const {email} = req.body
    db.query('select count(*) nr from user where email=?',[email],(err,result) => {
        res.send(result)
    })
}