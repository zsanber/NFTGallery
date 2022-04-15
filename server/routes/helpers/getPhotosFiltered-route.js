const express=require('express')
const router=express.Router()

export const {getPhotosFiltered}=require('../../controllers/helpers/getPhotosFiltered-controller')


router.route('/categ/:id').get(getPhotosFiltered)