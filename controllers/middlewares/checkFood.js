
const checkFood = (req, res, next) => {
    const { Name, Description, Type, Catagory, Price, Restaurant } = req.body

    if (!Name || !Description || !Type || !Price || !Catagory || !Restaurant) {
        return res.status(400).send(" All are required ")
    }
    next()
}

const checkRestaurant = (req, res, next) => {
    const { Name, Address, Location, ContactNumber, Rating, Fooditems } = req.body
    if (!Name || !Address || !Location || !ContactNumber || !Rating || !Fooditems) {
        return res.status(400).send("All are required")

    }
    next()
}

module.exports = { checkFood, checkRestaurant }

