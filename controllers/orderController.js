const {connection} = require('mongoose')
const OrderModel = require('../models/order')

async function addOrder(schema) {
    const orderItem = await connection.collection('orderItems').findOne({})

    try {
        const order = new OrderModel(schema)
        const savedOrder = await order.save()

        return savedOrder
    } catch(error) {
        return error
    }
}

async function getListOfOrder(id = {}) {
    try {
        const orders = await connection.collection('pizzas').find(id).toArray()

        return pizzas    
    } catch (error) {
        return error
    }
} 

module.exports = {
    addOrder, getListOfOrder
}