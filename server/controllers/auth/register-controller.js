const mysql =require('mysql');
const configDb=require('../../configDb')
const db=mysql.createConnection(configDb)
const {myToken}=require('../encryption/token')

const bcrypt =require('bcryptjs');

const saltRounds=10

export const register=(req,res)=>{
    console.log('post....',req.body)
    const {username,email,password}=req.body
    bcrypt.hash(password,saltRounds,(err,hashedPw)=>{
        if(err) console.log(err)
        const regDate=new Date()
        const regDateStr=regDate.getFullYear()+'.'+(regDate.getMonth()+1)+'.'+regDate.getDate()
        const token=myToken()
        //querie done
        db.query('INSERT INTO user (username,email,password,created_at,status,confirmationCode) VALUES (?,?,?,?,?,?)',
            [username,email,hashedPw,regDateStr,'pending','user',token],(err,result) => {
                if(err) {
                    console.log('insert error:',err)
                    res.send({message:`Error-insert:${err}`})
                }
                if(result){
                    console.log('Sikeres insert!',result.insertId)
                    //email küldés TwilioSendGrid segítségével
                    const msg = {
                        to: (email),
                        from: process.env.VERIFIED_EMAIL, // Use the email address or domain you verified above
                        subject: 'Email Activation',
                        text: 'and easy to do anywhere, even with Node.js',
                        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                      };
                      //ES8
                      (async () => {
                        try {
                          await sgMail.send(msg);
                        } catch (error) {
                          console.error(error);
                      
                          if (error.response) {
                            console.error(error.response.body)
                          }
                        }
                      })();
                    sendConfirmationEmail(username,email,token)
                    res.send({message:'Kattintson az emailben érkezett aktiváló linkre!'})
                }
            })
    })
}
