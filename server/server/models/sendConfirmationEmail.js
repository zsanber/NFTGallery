const configNodemailer=require('./configNodemailer')


const sendConfirmationEmail=(username,email,token) => {
    console.log(configNodemailer.user)
    console.log('sendConfirmationEmail-ckeck:',username,email,token)
    configNodemailer.transport.sendMail({
        from:configNodemailer.user,
        to:email,
        subject:"Please confirm your account",
        html:`<div>
                <h1>Email confirmation</h1>
                <h2>Hello ${username} !</h2>
                <p>Thank you for...</p>
                <a href="http://localhost:3000/confirm/${token}">Click here</a>
            </div>
        `
    },(err,success)=>{
        if(err) {
             console.log(err,email,username,token)
        }
        else
            console.log("email sent succesfully",email,"-",username,token)
        }
    )
}

module.exports =sendConfirmationEmail