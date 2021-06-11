const {connection} = require('mongoose')
const PizzaModel = require('../models/pizza')

async function addPizza(schema) {
    try {
        const pizza = new PizzaModel(schema)
        const savedPizza = await pizza.save()

        return savedPizza
    } catch(error) {
        return error
    }
}

async function getListOfPizza(ingredients = {}) {
    try {
        const pizzas = await connection.collection('pizzas').find(ingredients).toArray()

        return pizzas    
    } catch (error) {
        return error
    }
} 

module.exports = {
    addPizza, getListOfPizza
}