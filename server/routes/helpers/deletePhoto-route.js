const express=require('express')
const router=express.Router()

export const {deletePhoto}=require('../../controllers/helpers/deletePhoto-controller')


router.route('/:id/:imageId').delete(deletePhoto)