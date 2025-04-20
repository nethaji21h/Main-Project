
const express = require('express');
const app =express ()
const cors =require ('cors');

const mongoose =require ('mongoose')
const dotenv = require ('dotenv')
const bcrypt =require ('bcrypt')
const jwt   = require ('jsonwebtoken')

 app.dotenv.config ()
 
 app.use (express.json ())

const signupAuth = require ('./Routes/signupAuth');
const singupUser = require('./controllers/authcontrollers/singupController');
app.use ('/api',singupUser)


const loginAuth = require ('../Routes/UserRouter/loginAuth')
const userLogin = require ('../controllers/loginController')

app.use ('/api',userLogin)

const restaurantRoutes =  require ('./Routes/Restaurantlist/restaurantRouter')


mongoose.connect ('mongodb+srv://rahulkainakary21:XrGnVda364dPlRbS@cluster0.nnasubq.mongodb.net/')
.then ( (res)=>{
      console.log("db connection successfully")
}  )
.catch ((Error)=>{
      console.log(Error)
} )

const PORT = process.env.PORT || 3007 

app.listen(PORT, () => {
      console.log(`Example app listening on port ${port}`)
    })
 