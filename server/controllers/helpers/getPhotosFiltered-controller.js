const mysql =require('mysql');
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)


export const getPhotosFiltered=(req,res)=>{ //querie done
    const {id}=req.params//categ_id
    db.query(`select i.idimage,i.title,i.link,i.description, u.username,c.name ctg_name,i.categorie_idcategorie,i.idimage from user u,image i,categorie c
    where u.iduser=i.user_iduser and i.categorie_idcategorie=c.idcategorie and i.categorie_idcategorie=${id}`,(err,results)=>{
    if(err)
        console.log(err)
    else
        res.status(200).send(results)
    })
}