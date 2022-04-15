const express=require('express')
const router=express.Router()

const {getCategory}=require('../../controllers/helpers/categoryController')

router.route('/').get(getCategory)

module.exports=router