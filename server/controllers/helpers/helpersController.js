const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)

const createPhoto= async (req,res)=>{
    console.log(req.body)
    const {title,categ_id,story,user_id}=req.body
    const {image}=req.files
    const fileTypes=['image/jpeg','image/png','image/jpg']
    const fileSize=1024
    if(!fileTypes.includes(image.mimetype)) return res.send('Image format not suported: jpg, png, jpeg');
    if(image.size/1024>fileSize) return res.send(`image should be less than ${fileSize}kb`)
    const cloudFile=await upload(image.tempFilePath)
    console.log(cloudFile)


    let actDate=new Date()
    actDate=actDate.toISOString().split('T')[0] + ' ' + actDate.toTimeString().split(' ')[0];
    console.log(actDate)
    db.query('insert into posts (user_id,title,categ_id,body,image,created_at,image_id) values (?,?,?,?,?,?,?)',
        [user_id,title,categ_id,story,cloudFile.url,actDate,cloudFile.public_id],
        (err,result)=>{
            if(err){
                console.log('Error inser:',err)
                res.send({message:`Error-insert:${err}`})
            }
            if(result){
                console.log('Sikeres insert:',result.insertId)
                res.send({message:`Sikeres publikálás!`})
            }
        }
    )

}

const deletePhoto=(req,res) => {
    const {id,imageId}=req.params;
    cloudinary.uploader.destroy(imageId)
    db.query('delete from image where idimage=?',[id],
        (err, result)=>{
            if(err){
                res.send({message:`Nem sikerült a törlés!-${err}`})
            }
            if(result){
                res.send({message:`Sikeres törlés!`})
            }
        }
    )
}



const getPhoto=(req,res)=>{ //querie done
    const {id}=req.params
    db.query(`select i.user_iduser,i.idimage,i.title,i.link,i.description, u.username,c.name ctg_name,i.categorie_idcategorie,i.idimage from user u,image i,categorie c
    where u.iduser=i.user_iduser and i.categ_id=c.idcategorie and i.idimage=${id}`,(err,results)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(results)
        })
    }

    const getPhotos=(req,res)=>{ //querie done
        db.query(`select i.idimage, i.title, i.link, i.description, u.username, c.name ctg_name,i.categorie_idcategorie,i.idimage from user u,image i,categorie c 
        where u.iduser=i.user_iduser and i.categorie_idcategorie=c.idcategorie`,(err,results)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(results)
        })
    }

    const getPhotosFiltered=(req,res)=>{ //querie done
        const {id}=req.params//categ_id
        db.query(`select i.idimage,i.title,i.link,i.description, u.username,c.name ctg_name,i.categorie_idcategorie,i.idimage from user u,image i,categorie c
        where u.iduser=i.user_iduser and i.categorie_idcategorie=c.idcategorie and i.categorie_idcategorie=${id}`,(err,results)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(results)
        })
    }
    

module.exports = {createPhoto,deletePhoto,getPhoto,getPhotos,getPhotosFiltered}