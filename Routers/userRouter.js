const router=require('express').Router()
const userController=require('../Controllers/userController')

router.get('/signup',userController.signup)
router.post('/login')






module.exports=router