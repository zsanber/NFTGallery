const express=require('express')
const router=express.Router();

export const {checkUsername} = require('../../controllers/auth/checkUserName-controller')

router.route('/checkUsername').post(checkUsername)

module.exports = router;