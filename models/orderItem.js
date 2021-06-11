const {Schema, SchemaTypes, model} = require('mongoose')

const OrderItemSchema = new Schema({
    pizza: {
        type: SchemaTypes.ObjectId,
        ref: 'Pizza'
    },

    quantity: {
        type: Number,
        required: true,
    }
}, {timestamps: true,})

const OrderItemModel = new model("OrderItem", OrderItemSchema)

module.exports = OrderItemModel