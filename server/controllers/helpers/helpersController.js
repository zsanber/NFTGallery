const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)


// Photo upload
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
    db.query('insert into image (user_iduser,title,categ_idcategorie,description,link,created_at,image_id) values (?,?,?,?,?,?,?)',
        [user_id,title,categ_id,story,cloudFile.url,actDate,cloudFile.public_id],
        (err,result)=>{
            if(err){
                console.log('Error insert:',err)
                res.send({message:`Error-insert:${err}`})
            }
            if(result){
                console.log('Successful insert:',result.insertId)
                res.send({message:`Upload done!`})
            }
        }
    )

}
// Photo update
const updatePhoto=(req,res) => {
    const {id}=req.params;
    console.log('put:',req.body)
    const {title,categ_id,story}=req.body
    let actDate=new Date()
    actDate=actDate.toISOString().split('T')[0] + ' ' + actDate.toTimeString().split(' ')[0];
    db.query('update image set title=?, categorie_idcategorie=?, description=? , updated_at=? where idimage=?',
        [title,categ_id,story,actDate,id],
        (err, result)=>{
            if(err){
                res.send({message:`Failed to change data!-${err}`})
            }
            if(result){
                res.send({message:`CHANGE is ready!`})
            }
        }
    )
}
// Photo delete
const deletePhoto=(req,res) => {
    const {id,imageId}=req.params;
    //cloudinary.uploader.destroy(imageId)
    db.query('delete from image where idimage=?',[id],
        (err, result)=>{
            if(err){
                res.send({message:`DELETE failed!-${err}`})
            }
            if(result){
                res.send({message:`Successful DELETE`})
            }
        }
    )
}


// See 1 photo
const getPhoto=(req,res)=>{ //querie done
    const {id}=req.params
    db.query(`select i.user_iduser,i.idimage,i.title,i.link,i.description, u.username,c.name ctg_name,i.categorie_idcategorie,i.idimage from user u,image i,categorie c
    where u.iduser=i.user_iduser and i.categorie_idcategorie=c.idcategorie and i.idimage=${id}`,(err,results)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(results)
        })
    }
//See all photo
    const getPhotos=(req,res)=>{ //querie done
        db.query(`select i.idimage, i.title, i.link, i.description, u.username, c.name ctg_name,i.categorie_idcategorie,i.idimage from user u,image i,categorie c 
        where u.iduser=i.user_iduser and i.categorie_idcategorie=c.idcategorie`,(err,results)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(results)
        })
    }
//See all images by category
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
//See all user by admin
    const getUsersByAdmin=(req,res)=>{
        db.query(`select u.iduser, u.username, u.email, u.created_at, u.updated_at, u.role from user u`, (err,results)=>{
            if(err)
                console.log(err)
            else
                res.status(200).send(results)
        })
    }

//Delete user by admin
    const deleteUserByAdmin=(req,res)=>{
        const {id}=req.params;
        db.query('delete from user where iduser=?',[id],
        (err, result)=>{
            if(err){
                res.send({message:`DELETE failed!-${err}`})
            }
            if(result){
                res.send({message:`Successful DELETE`})
            }
        }
    )
    }

    

module.exports = {createPhoto,updatePhoto,deletePhoto,getPhoto,getPhotos,getPhotosFiltered,getUsersByAdmin, deleteUserByAdmin}