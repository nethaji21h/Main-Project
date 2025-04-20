
const express = require('express')
const user = require('../modeles/userInfo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userLogin = async (req, res) => {
    const { email, Password } = req.body

    try {
        if (!email || !Password) {
            return res.status(400).json({ Error: "Please fill all requried " })

        }
        const userExisting = await user.findOne({ email, })
        if (!userExisting) {
            return res.status(400).json({ Error: " Invalid  Email id" })

        }
        const ispasswordCorrect = await bcrypt.compare(Password, userExisting.Password)
        if (!ispasswordCorrect) {
            return res.status(400).json({ Error: "Invalid Password" })

        }
        //i dont know jwt token creating and putting the code here
        const token = jwt.sign({ id: userExisting._id }, process.env.JWT_SECRET, { expiresIn: '7d' })


        res.status(200).json({
            message: 'Login successful',
            user: {
                id: userExisting._id,
                name: userExisting.name,
                email: userExisting.email,
            },
            token: token
        })



    } catch (Error) {
        return res.status(500).jsoon({ Error: "Internal server error duet to developer code running error" })


    }

}

module.exports = userLogin 