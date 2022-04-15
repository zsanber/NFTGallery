const mysql =require('mysql');
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)

export const deletePhoto=(req,res) => {
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