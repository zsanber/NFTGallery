const express=require('express')
const router=express.Router();

const {getPhotos}=require('../controllers/categ')

router.route('/').get(getCateg)

module.exports = router;