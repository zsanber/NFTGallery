const express=require('express')
const router=express.Router();

export const {getCategory}=require('../../controllers/helpers/getCategory-controller')

router.route('/').get(getCategory)

