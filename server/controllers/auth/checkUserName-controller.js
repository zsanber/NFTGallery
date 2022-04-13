const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)


export const checkUsername=(req,res)=>{
    console.log('post....',req.body)
    const {username} = req.body
    db.query('select count(*) nr from users where username=?',[username],(err,result) => {
        res.send(result)
    })

}