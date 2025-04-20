
const express = require('express')
const user = require('../modeles/userInfo')

const bcrypt = require('bcrypt')


const singupUser = async (req, res) => {
    const { Name, email, password, MobileNumber, ConfirmationPassword } = req.body

    try {


        if (!Name || !email || !password || !MobileNumber || !ConfirmationPassword) {

            return res.status(400).json({ message: 'Please fill all fields' });
        }

        if (password !== ConfirmationPassword) {
            return res.status(400).json({ Error: "Password and Confirmation password does't match" })
        }

        const userExisting = await user.findOne({ email, MobileNumber })
        if (userExisting) {
            return res.status(400).json({ Error: "user already exist" })
        }


        const hashedpassword = await bcrypt.hash(password, 10)

        const hashedconfirmationpassword = await bcrypt.hash(ConfirmationPassword, 10)

        const newUserid = await user.create({ Name, email, password: hashedpassword, MobileNumber, ConfirmationPassword: hashedconfirmationpassword })

        return res.status(200).json({ message: 'User created successfully', newUserid })

    } catch (Error) {
        return res.status(500).json({ Error: "Internal server error due to developer code running error" })

    }

}

module.exports = singupUser