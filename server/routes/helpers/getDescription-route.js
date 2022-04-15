const express=require('express')
const router=express.Router()

export const {getDescription}=require('../../controllers/helpers/getDescription-controller')


router.route('/:id').get(getDescription)




//nem jó!