require('dotenv').config();
const express=require('express')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const morgan=require('morgan')


const auth = require('./routes/auth')
const categ = require('./routes/categ')

const app=express()

app.use(cors())
app.use(express.json)

app.use(express.static("build"))

app.use(fileUpload({useTempFiles:true}))
app.use(morgan('dev'))

app.use('/auth',auth)
app.use('/categ',categ)

const port= 5000

app.listen(port,()=>console.log(`Server running on port ${port}`))

