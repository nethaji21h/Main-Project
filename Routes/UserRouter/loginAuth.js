
const express =require ('express')
const Router = express .Router ()

const userLogin = require ('../controllers/loginController')

Router.post ('/login',userLogin)


module.exprots = Router

