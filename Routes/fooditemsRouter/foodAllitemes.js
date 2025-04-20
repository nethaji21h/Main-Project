

const Router = express . Router ()

const foodListControllers = require ('../controllers/foodItems/foodListControllers')
const checkFood = require('../../controllers/middlewares/checkFood')
 const  foodList = require ('../models/foodListMdodel') 

Router . post ('/', checkFood. foodListControllers.createFood  )

Router. post ('/',checkFood. foodListControllers.getAllFoods)

Router. get ('/:id' ,checkFood. foodListControllers.getfoodById)

Router. put ('/:id', checkFood.foodListControllers.updateFoodById )

Router. patch ('/:id', checkFood.foodListControllers.partiallyUpdateFoodById)

Router. delete ('/:id', checkFood.foodListControllers. deleteFoodById  )



module .exports = Routes;
