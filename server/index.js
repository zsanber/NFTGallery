require('dotenv').config();
const express=require('express')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const morgan=require('morgan')

//authentication fetching

const email=require('./routes/auth/checkEmail-route')
const username=require('./routes/auth/checkUsername-route')
const login=require('./routes/auth/login-route')
const register=require('./routes/auth/register-route')
const verify=require('./routes/auth/verify-route')


//helpers fetching

const create=require('./routes/helpers/createPhoto-route')
const trash=require('./routes/helpers/deletePhoto-route')
const admin=require('./routes/helpers/getAdminPage-route')
const category=require('./routes/helpers/getCategory-route')
const description=require('./routes/helpers/getDescription-route')
const photo=require('./routes/helpers/getPhoto-route')
const photos=require('./routes/helpers/getPhotos-route')
const filtered=require('./routes/helpers/getPhotosFiltered-route')






const app=express()

app.use(cors())
app.use(express.json)

app.use(express.static("build"))

app.use(fileUpload({useTempFiles:true}))
app.use(morgan('dev'))


//authentication using 
app.use('/email',email)
app.use('/username',username)
app.use('/login',login)
app.use('/register',register)
app.use('/verify',verify)


//helpers using
app.use('/create',create)
app.use('/trash',trash)
app.use('/admin',admin)
app.use('/category',category)
app.use('/description',description)
app.use('/photo',photo)
app.use('/photos',photos)
app.use('/filtered',filtered)



const port= 5000

app.listen(port,()=>console.log(`Server running on port ${port}`))

