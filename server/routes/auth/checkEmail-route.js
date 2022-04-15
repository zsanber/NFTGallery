const express=require('express')
const router=express.Router();

export const {checkEmail} = require('../../controllers/auth/checkEmail-controller')

router.route('/checkEmail').post(checkEmail)

module.exports = router;