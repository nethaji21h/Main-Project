
const Router =express . Router()

const { checkRestaurant } = require('../../controllers/middlewares/checkFood')
const restaurantController =require ('../controllers/restaurantControllers')
const restaurantList  = require ('../models/restaurantModel')


Router.post ('/', checkRestaurant.  restaurantControllers.makeRestaurant)

Router.get ('/',CheckRestaurant.restaurantControllers.getallRestaurants)

Router.get ('/:id',checkRestaurant.restaurantControllers.getRestauranById) 

Router.put ('/:id',checkRestaurant.restaurantControllers.updateRestaurantById)

Router.patch ('/:id',checkRestaurant.RestaurantContollers.partiallyUpdateRestaurantById)

Router.delete ('/:id', checkRestaurant.RestaurantContollers.deleteRestaurantById )

module.exports = Routes
