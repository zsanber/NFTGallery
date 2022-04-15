const mysql =require('mysql');
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)



export const getPhoto=(req,res)=>{ //querie done
    const {id}=req.params
    db.query(`select i.user_iduser,i.idimage,i.title,i.link,i.description, u.username,c.name ctg_name,i.categorie_idcategorie,i.idimage from user u,image i,categorie c
    where u.iduser=i.user_iduser and i.categ_id=c.idcategorie and i.idimage=${id}`,(err,results)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(results)
        })
    }