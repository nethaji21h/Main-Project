
const express = require('express');
const app =express ()
const cors =require ('cors');

const mongoose =require ('mongoose')
const dotenv = require ('dotenv')
const bycrypt = require('bycrypt')
const jwt   = require ('jsonwebtoken')


app.use (express.json ())

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
 