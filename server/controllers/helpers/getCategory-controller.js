const mysql =require('mysql');
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)

export const getCategory=(req,res)=>{ //querie done
    db.query(`select idcategorie,name from categorie order by name `,(err,results)=>{
    if(err)
        console.log(err)
    else
        res.status(200).send(results)
    })
}