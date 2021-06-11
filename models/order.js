const {Schema, SchemaTypes, model} = require('mongoose')

const OrderSchema = new Schema({
    orderItem: {
        type: SchemaTypes.ObjectId,
        ref: 'OrderItem'
    }
}, {timestamps: true,})

const OrderModel = new model("Order", OrderSchema)

module.exports = OrderModel