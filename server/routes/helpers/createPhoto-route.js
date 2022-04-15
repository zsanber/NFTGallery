const express=require('express')
const router=express.Router()

export const {createPhoto}=require('../../controllers/helpers/createPhoto-controller')


router.route('/').post(createPhoto)