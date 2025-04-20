
const express = require('express')
const foodList = require('../modeles/foodListmodel')
const search = require('../Routes/fooditemsRouter/foodAllitemes')
const router = express.Router()

const foodList = []
const currentId = 1

// post 
exports.createFood = (req, res) => {
    const { Name, Description, Price, Catagory, Type, Restaurant } = req.body
    const newFood = { id: currentId++, Name, Description, Price, Catagory, Type, Restaurant }

    foodList.push(newFood)

    res.status(201).json(newFood)
}
exports.getAllFoods = (req, res) => {
    const { search } = req.query
    if (search) {
        const filterFood = foods.filter(food => food.Name.toLowerCase().includes(search.toLowerCase()) || food.Description.toLowerCase().includes(search.toLowerCase()) || food.Catagory.toLowerCase().includes(search.toLowerCase()) || food.Type.toLowerCase().includes(search.toLowerCase()) || food.Price.toLowerCase().includes(search.toLowerCase()) || food.Restaurant.toLowerCase().includes(search.toLowerCase()))

        return res.json(filterFood)
    }
    res.json(foodList)
}
//search in food item by id
exports.getFoodById = (req, res) => {
    const food = foodList.find(f => f.id === parseInt(req.params.id))
    if (!food)
        return res.status(404).send("Food item is not found")
    res.json(food)

}
exports.updateFoodById = (req, res) => {
    const food = foodList.find((f) => { return f.id === parseInt(req.params.id) })

    if (!food) return res.status(404).send("Food item not found")
    const { Name, Catagory, Price, Type, Restaurant, Description } = req.body

    if (Name) {
        food.Name = Name
    }
    if (Price) {
        food.Price = Price
    }
    if (Catagory) {
        food.Catagory = Catagory
    }
    if (Description) {
        food.Description = Description
    }
    if (Type) {
        food.Type = Type
    }
    if (Restaurant) {
        food.Restaurant = Restaurant
    }
    res.json(food)
}
exports.partiallyUpdateFoodById = (req, res) => {
    const food = foodList.find((f => { return f.id === parseInt(res.params.id) }))
    if (Name !== undefined) {
        food.Name = Name
    }
    if (Catagory !== undefined) {
        food.Catagory = Catagory
    }
    if (Price !== undefined) {
        food.Price = Price
    }
    if (Type !== undefined) {
        food.Type = Type
    }
    if (Description !== undefined) {
        food.Description = Description
    }
    res.json(food)

}
exports.deleteFoodById = (req,res) => {
    const empty = foodList.findIndex((f) => {
        return f.id === parseInt(req.params.id)
    })
    if (empty === -1) {
        return res.status(404).send("food not found")
    }
    foodList.splice(empty, 1)
    res.status(204).send()
}





