const express=require('express')
const router=express.Router();

const {register}=require('../../controllers/auth/register-controller')

router.route('/register').post(register)

module.exports = router;