const mysql =require('mysql');
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)

export const createPost= async (req,res)=>{
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