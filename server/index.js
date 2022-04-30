require('dotenv').config();
const express=require('express')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const morgan=require('morgan')

const photos=require('./routes/helpers/helpersRoute')
const category=require('./routes/helpers/categoryRoute')
const authRoute=require('./routes/auth/authRoute')


const app=express()

app.use(cors())
app.use(express.json())

app.use(express.static("build"))

app.use(fileUpload({useTempFiles:true}))
app.use(morgan('dev'))


app.use('/photos',photos)
app.use('/category',category)
//console.log('process...: ',process.env)
app.use('/authRoute',authRoute)


const port=process.env.PORT ||5000

app.listen(port,()=>console.log(`Server running on port ${port}`))


module.exports = app; //for testing
