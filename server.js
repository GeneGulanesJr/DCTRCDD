const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors')
const app=express();
const PORT=process.env.PORT || 5000;
const morgan =require('morgan')

const userRouter=require('./routers/userRouter')
const residentsRouter = require('./routers/residentRouter')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

// connect database

mongoose.connect('mongodb+srv://gene:1600062@projectmanagement.uf8ag.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true, useFindAndModify:false, useUnifiedTopology:true})
.then(()=>{
	console.log("mongodb connected successfull ")
})
.catch(err=>{
	console.log(err)
})


// using route in app
app.use(userRouter)
app.use(residentsRouter)


app.listen(PORT , ()=>{
	console.log(`server started on port no : ${PORT}`)
})