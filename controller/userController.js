const bcrypt =require('bcryptjs')
const validator=require('../validator/validattor')

const userModel=require('../models/userModel')

const jwt =require ('jsonwebtoken')

// create  user 
const userRegister=(req, res)=>{
    const {
    name,
    email,
    password,
    confirmPassword
    }=req.body
    const register=validator.register({ name,email,password,confirmPassword })
    if(!register.isValid){
        return res.status(400).json(register.err)
    }
    else{
        userModel.findOne({email:email})
        .then(user=>{
            if(user){
                return res.status(400).json({massage:"User all ready exist"})
            }
            if(!user){
                bcrypt.genSalt(10, function(err, salt) {
                    if(err){
                        return res.status(500).json({massage:"Server error occurred", err:err})
                    }
                    console.log('hello world')
                    bcrypt.hash(password, salt, function(err, hash) {
                        
                        if(err){
                            return res.status(500).json({massage:"Server error occurred while password hashing", err:err})
                        }else{
                            const newBusiness= new userModel({
                                name:req.body.name,
                                email:req.body.email,
                                password:hash,
                                isActive:false,
                                admin:false
                            })
                            .save()
                            .then(data=>{
                                return res.status(200).json({massage:"Register successfully !", data})
                            })
                            .catch(err=>{
                                console.log(err)
                                return res.status(500).json({massage:"Error occurred ", err:err})
                            })
                        }
                    });
                });
            }
        })
        .catch(err=>{
                return res.status(400).json({massage:"Error occurred", err:err})
        })
    }
}

// get all  user 
const allUser=(req, res)=>{
    userModel.find()
    .then(user=>{
        res.status(201).json({user:user})
    })
    .catch(err=>{
        return res.status({err:err})
    })
}
// get single user by params id 
const singleUser=(req, res)=>{
    const id=req.params.id
    userModel.findById(id, (err, user)=>{
        if(err){
            res.status(500).json({massage:"Server error occurred", err:err})
        }else{
            res.status(200).json({user:user})
        }
    })
}
// updateuser 
const updateUser=(req, res)=>{
    console.log('its working ')
    userModel.findById(req.params.id)
    .then(user=>{
        user.isActive=!user.isActive
        user.save()
        .then(user=>{
            console.log("updated")
            return res.status(200).json({massage:"user update success full", user})
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({massage:"server error occurred "})
        })
    })
}
// delete user 
const deleteUser=(req, res)=>{
    console.log("deleting")
      userModel.findByIdAndRemove(req.params.id, (error, data)=>{
        if(error){
            console.log("error in deleting yo!");
            res.json({error:error})
        }
            res.status(200).json({massage:"Deleted successfully !", data});
    });
}
const login=(req, res)=>{

    const  loginValidate=validator.login(req.body)
    if(!loginValidate.isValid){
        res.status(400).json(loginValidate.err)
        return
    }else{
        userModel.findOne({email:req.body.email})
        .then(data=>{
            console.log(data)
            if(!data){
                res.status(400).json({massage:"User Not Found "})
                return
            }
            console.log(data.isActive)
            if(!data.isActive){
                console.log('working')
                return res.status(400).json({massage:"Your account is deactivated by admin . Please contact  to admin"})
            }
            bcrypt.compare(req.body.password, data.password)
            .then(reesult=>{
                if(!reesult){
                    res.status(404).json({massage:"Wrong password"})
                }
                if(reesult){
                    const token=jwt.sign({name:data.name,admin:data.admin, email:data.email, type:data.type, _id:data._id},'secret', {expiresIn:'4h'})

                    res.status(200).json({massage:"Login successfully", token:token})
                }
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json(err)
        })
    }
}

// test 
const welcome= (req, res)=>{
    res.json({massage:"welcome to our applicaiton "})
}

module.exports={
    register:userRegister,
    allUser:allUser,
    singleUser:singleUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    login:login,
    welcome:welcome
}