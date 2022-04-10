const express=require('express')
const router=express.Router();

const {getCateg}=require('../controllers/categ')

router.route('/').get(getCateg)

module.exports = router;