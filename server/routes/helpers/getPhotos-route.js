const express=require('express')
const router=express.Router()

export const {getPhotos}=require('../../controllers/helpers/getPhotos-controller')


router.route('/').get(getPhotos)