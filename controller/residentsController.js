const residentsModel= require('../models/residentsModel')
const validator= require('../validator/validattor')

const createResidents=(req,res)=>{
    // const verify= validator.residentsValidator(req.body)
    // if(!verify.isValid){
    //     return res.status(400).json(verify.err)
    // }
    console.log(req.body)
    new residentsModel ({...req.body})
    .save((err, clients)=>{
        if(err){
            return res.json({massage:"error ", err:err})
        }else {
            return res.status(200).json({massage:"Resident added successfull", clients:clients})
        }
    })
}

const getAllResidents=(req, res)=>{
    residentsModel.find()
    .then(residents=>{
        res.status(200).json({residents:residents})
    })
    .catch(err=>{
        res.status(500).json({massage:"server error occurd"})
    })
}
const editResidents= (req, res)=>{
    residentsModel.findByIdAndUpdate(req.params.id, {...req.body} , (err, result)=>{
        if(err){
            console.log(err)
            return res.status({massage:"server erroro occured ! "})
        }
        console.log(result)
        return res.status(200).json({massage:"Updated successfull !", result:result})
    })
}
const deleteResidents=(req, res)=>{
    residentsModel.findByIdAndDelete(req.params.id)
    .then(deletedResidents=>{
        // console.log(deletedResidents)
        return res.status(200).json({massage:"Residents  updated successfull ! "})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({massage:"server erroro occured"})
    })
}

const getSingleResidents=(req, res)=>{
    residentsModel.findById(req.params.id)
    .then(resident=>{
        if(!resident){
            return res.status(400).json({massage:"Residents not found !"})
        }
        return res.status(200).json({massage:"Resident's founded ! ", resident:resident})
    })
    .catch(err=>{
        console.log(err)

        return res.status(500).json({massage:"Server error occured "})
    })
}
const countGender=(req, res)=>{
    residentsModel.find()
    .then(allResident=>{
        let adultMale=0
        let minorMale=0
        let adultFemale=0
        let minorFemale=0
        allResident.filter(singleResident=>{
            console.log(singleResident.gender)
            if(singleResident.gender=== 'Adult Female'){
                adultFemale=adultFemale+1
            }
            if(singleResident.gender==='Minor Female'){
                minorFemale=minorFemale+1
            }
            if(singleResident.gender==='Adult Male'){
                adultMale=adultMale+1
            }
            if(singleResident.gender==='Minor Male'){
                minorMale=minorMale+1
            }
        })
        res.status(200).json({adultFemale,minorFemale, adultMale, minorMale})
    })
}
const assending=(req, res)=>{
    residentsModel.find()
    .then(allResident=>{            
            let field='name';
            const sorted=allResident.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()))
            console.log(sorted)
            console.log(allResident)
            res.status(200).json(sorted)

    })
}

const dessending=(req, res)=>{
    residentsModel.find()
    .then(allResident=>{            
            let field='name';
            const sorted=allResident.sort((a, b) => (b[field] || "").toString().localeCompare((a[field] || "").toString()))
            console.log(sorted)
            console.log(allResident)
            res.status(200).json(sorted)

    })
}
const search=(req, res)=>{
    residentsModel.find()
    .then(allResident=>{
        let result=[]
        if(req.body.text===''){
           return res.status(200).json(allResident)
        }
        // search by name
        allResident.forEach(single=>{
            let piceName= single.name.split(' ')
            piceName.forEach(singleName=>{
                if(singleName.toLocaleLowerCase()===req.body.text.toLocaleLowerCase()){
                    return result.push(single)
                }
            })
        })

        // search by address
            allResident.forEach(single=>{
                let piceAddress= single.address.split(' ')
                console.log(piceAddress)
                piceAddress.forEach(singleAddress=>{
                    if(singleAddress.toLocaleLowerCase()===req.body.text.toLocaleLowerCase()){
                        return result.push(single)
                    }
                })
            })
            // sort by patientStatus
            allResident.forEach(single=>{
                if(single.patientStatus.toLocaleLowerCase()===req.body.text.toLocaleLowerCase()){
                    result.push(single)
                }
            })
            // sort by gender
            allResident.forEach(single=>{
                if(single.gender.toLocaleLowerCase()===req.body.text.toLocaleLowerCase()){
                    result.push(single)
                }
            })
            // search by email
            allResident.forEach(single=>{
                if(single.email.toLocaleLowerCase()===req.body.text.toLocaleLowerCase()){
                    result.push(single)
                }
            })
        return res.status(200).json(result)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massage:"server error"})
    })
}
module.exports={
    createResidents, 
    editResidents, 
    deleteResidents,
    getSingleResidents,
    getAllResidents ,
    countGender,
    assending,
    dessending,
    search
}