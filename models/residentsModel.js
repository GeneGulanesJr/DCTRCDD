const mongoose=require('mongoose')
const Schema=mongoose.Schema

const residentsSchema= new Schema({
    // residents details
    name:String,
    dateOfAdmission:String,
    dateOfBirth:String,
    cellPhoneNumber:String,
    phoneNumber:String,
    guardianNumber:String,
    // additional  details
    gender:String,
    email:String,
    civilStatus:String,
    natureOfAdmission:String,
    educationalAttainment:String,
    religion:String,
    address:String,
    // more info
    income:Number,
    typeOfUse:String,
    costSharing:String,
    patientStatus:String
})



const residentsModel= mongoose.model('residentsModel', residentsSchema)
module.exports =residentsModel
