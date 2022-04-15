const express=require('express')
const router=express.Router();

export const {login}=require('../../controllers/auth/login-controller')

router.route('/login').post(login)

module.exports = router;