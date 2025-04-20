

const express =require ('expresss')
const Router = express. Router ()

const singupUser = require  ('../controllers/authcontrollers/signupController')

Router.post  ('/',singupUser)






moodule.exprots = Router;
