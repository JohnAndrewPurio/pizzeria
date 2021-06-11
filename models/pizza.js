const {Schema, model} = require('mongoose')

const PizzaSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    ingredients: {
        type: [String],
        required: true,
    }

}, {timestamps: true,})

const PizzaModel = new model("Pizza", PizzaSchema)

module.exports = PizzaModel