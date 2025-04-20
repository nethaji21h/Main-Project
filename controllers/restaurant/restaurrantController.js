const express =require ('express')

const Restaurant =require ('../Models/restaurantModel')

const restaurantList = []
let currentId  = 1 

exports.makeRestaurant =  (req,res) =>{
    const { Name ,Address,Location, ContactNumber,Rating,Fooditems}= req.body 
    const newRestaurant = {id: currentId++,Name,Address,Location, ContactNumber,Rating,Fooditems}

    restaurantList.push (newRestaurant)

    res.status (201).json (newRestaurant)

}
exports.getallRestaurants = (req,res)=>{
    const{search} =req.query
    if (search ){
        const  filterRestaurant = Restaurantes.filter(Restaurant=> Restaurant.Name.toLowerCase().includes(search.toLowerCase()) ||Restaurant.Address.toLowerCase().includes(search.toLowerCase()) || Restaurant .Location.toLowerCase().includes(search.toLowerCase()) || Restaurant.ContactNumber.toLowerCase().includes(search.toLowerCase()) || Restaurant.Rating.toString().toLowerCase().includes(search.toLowerCase()) || Restaurant.Fooditems.toString().toLowerCase().includes(search.toLowerCase())) 

    return res.json (filterRestaurant)
    }
    res.json (restaurantList)

}
exports.getRestaurantById = (req,res)=>{
    const Restaurant = restaurantList.find (R =>R.id === parseInt (req.params.id))
    if (!Restaurant)
        return res.status (404).send ("Restaurant not found")
    res.json (Restaurant)

}

exports.updateRestaurantById = (req,res)=>{
    const Restaurant = RestaurantList .find (R =>R.id === parseInt(req.params.id))
     if (!Restaurant ) return res.status (404).send ("Restaurant not found")
        const {Name ,Address,Location,ContactNumber,Rating,Fooditems} =req.body
        if (Name) {
            Restaurant.Name =Name
        }
        if (Address) {
            Restaurant.Address = Address

        }
        if (Location ){
            Restaurant.Location = Location
        }
        if (ContactNumber){
            Restaurant.ContactNumber = ContactNumber

        }
        if (Rating) {
            Restaurant.Rating =Rating
        }
        if (Fooditems ) {
            Restaurant.Fooditems = Fooditems
        }
        res.json (Restaurant)

}
exports . partiallyUpdateRestaurantById = (req,res)=>{
    const Restaurant = RestaurantList .find (R => R.id === parseInt (req.params.id))
    if (Name !== undefined) {
        Restaurant.Name = Name
    }
 if (Adderess !== undefined){
    Restaurant.Address = Address
 }
  if (Location !== undefined){
    Restaurant.Location = Location
  }
  if (ContactNumber !== undefined){
    Restaurant.ContactNumber =ContactNumber
  }
    if (Rating !== undefined){
        Restaurant.Rating = Rating

    }
    res.json (Restaurant)

}
exports.deleteRestaurantById = (req,res)=>{
    const space = RestauarantList.findIndex ( (R) => {
        return R.id === parseInt (req.params.id)

    })
    if (space  === -1) {
        return res.status (404).send ("Restaurant not found")
    }
    RestaurantList.splice (space,1)
    res.status (204).send ()

}
