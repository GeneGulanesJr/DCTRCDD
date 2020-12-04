const userRouter=require('express')()
const userController= require('../controller/userController') 


// business user
userRouter.post('/register-user',userController.register)
userRouter.post('/login-user',userController.login )

userRouter.get('/update-user/:id',userController.updateUser )
userRouter.get('/single-user/:id',userController.singleUser )
userRouter.get('/delete-user/:id',userController.deleteUser )
userRouter.get('/all-user',userController.allUser )
userRouter.get('/welcome',userController.welcome )
module.exports=userRouter

