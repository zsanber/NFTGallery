const express=require('express')
const router=express.Router()

const {login,register,checkUsername,checkEmail,verifyUser}=require('../../controllers/auth/authController')

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/checkUsername').post(checkUsername)
router.route('/checkEmail').post(checkEmail)
router.route('/confirm/:confirmationCode').get(verifyUser)

module.exports=router