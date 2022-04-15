const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)


export const checkUsername=(req,res)=>{ //querie done
    console.log('post....',req.body)
    const {username} = req.body
    db.query('select count(*) nr from user where username=?',[username],(err,result) => {
        res.send(result)
    })

}