const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)


export const verifyUser=(req,res)=>{ //querie done
    console.log('verify user')
    const confirmationCode= req.params.confirmationCode
    db.query('SELECT count(*) nr from user where confirmationCode=?',[confirmationCode], (error, results)=> {
        if(error)
            res.status(404).send({message:`Error-activation failed:${error}`})
        if(results.nr==0)
            res.status(404).send({ message: "User Not found." });
        //update: pending->active
        db.query('update user set status=? where confirmationCode=?',['active',confirmationCode],(err,result)=>{    //this is a callback function :what we want to do after insert
            if(err){
                console.log(`Error-activation failed:${err}`)
                res.send({message:`Error-activation failed:${err}`})
            }
            if(result){
                console.log('Sikeres fiok aktiválás!')
                res.send({message:"Sikeres fiok aktiválás!"})  
            }
        })     
    });

}