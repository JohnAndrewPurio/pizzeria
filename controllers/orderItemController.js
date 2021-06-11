const {connection, mongo} = require('mongoose')
const OrderItemModel = require('../models/orderItem')

async function addOrderItem({pizza, quantity}) {
    const schema = {
        pizza: await connection.collection.findOne({name: pizza}),
        quantity: quantity
    }

    try {
        const orderItem = new OrderItemModel(schema)
        const savedOrderItem = await orderItem.save()

        return savedOrderItem
    } catch(error) {
        return error
    }
}

async function getOrderItem(orderId) {
    const id = mongo.ObjectID(orderId)

    try {
        const orderItem = await connection.collection('orderItems').findOne({_id: id})

        return orderItem  
    } catch (error) {
        return error
    }
} 

module.exports = {
    addOrderItem, getOrderItem
}
