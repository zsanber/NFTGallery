const express=require('express')
const router=express.Router();

export const {verifyUser} = require('../../controllers/auth/verifyUser-controller')

router.route('/confirm/:confirmationCode').get(verifyUser)

module.exports = router;