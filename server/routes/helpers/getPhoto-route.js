const express=require('express')
const router=express.Router()

export const {getPhoto}=require('../../controllers/helpers/getPhoto-controller')


router.route('/:id').get(getPhoto)