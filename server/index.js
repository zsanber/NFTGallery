require('dotenv').config();
const express=require('express')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const morgan=require('morgan')




const app=express()

app.use(cors())
app.use(express.json)

app.use(express.static("build"))

app.use(fileUpload({useTempFiles:true}))
app.use(morgan('dev'))



const port= 5000

app.listen(port,()=>console.log(`Server running on port ${port}`))

