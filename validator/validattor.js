const validator=require('validator')
const registervalidator =(info)=>{


    const err={}
    if(!info.name){
        err.name="Name Required"
    }
    if(!info.email){
        err.email="Email Required"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password Required"
    } else if(info.password.length <6){
        err.password="Password Length should be greater then 6 Character"
    }
    if(!info.confirmPassword){
        err.confirmPassword="Confirm Password Required"
    }else  if(info.confirmPassword !== info.password){
        err.confirmPassword="Both Password Are Different"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}




const loginValidator =(info)=>{

    let err={}
    if(!info.email){
        err.email="Email Required"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password Required"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}




const residentsValidator =(residents)=>{

    let err={}
    if(!residents.name){
        err.name="First name is Required"
    }
    if(!residents.dateOfAdmission){
        err.dateOfAdmission="Date of admission is Required"
    }
    if(!residents.dateOfBirth){
        err.dateOfBirth="Date of birth is Required"
    }
    if(!residents.cellPhoneNumber){
        err.cellPhoneNumber="Cell phone number is  Required"
    }
    if(!residents.phoneNumber){
        err.phoneNumber="Phone number is  Required"
    }
    if(!residents.guardianNumber){
        err.guardianNumber="Guardian  number is  Required"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}



module.exports ={
    login:loginValidator,
    register:registervalidator,
    residentsValidator:residentsValidator
}