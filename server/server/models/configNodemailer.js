const nodemailer=require('nodemailer')
require('dotenv').config();

const authConfig = {
    secret:process.env.SECRET,
    user: process.env.USER,
    pass: process.env.PASS
  };


const user=authConfig.user
const pass=authConfig.pass
//email service configuration
const transport=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:user,
        pass:pass
    },
    tls:{
        rejectUnauthorized:false
    }
})
module.exports = {transport,user,pass}