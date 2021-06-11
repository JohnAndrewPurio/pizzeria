const express = require('express')
const router = express.Router()
const { getListOfPizza, addPizza } = require('../controllers/pizzaController')
const { addOrder, getListOfOrder } = require('../controllers/orderController')
const { addOrderItem } = require('../controllers/orderItemController')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router
    .route('/pizzas')
    .get(getPizzasHandler)
    .post(addPizzasHandler)

router
    .route('/orders')
    .get(getOrdersHandler)
    .post(addOrderHandler)

async function getPizzasHandler(request, response) {
    const params = request.query

    console.log(params)

    const content = await getListOfPizza(params)

    response.send(content)
}

async function addPizzasHandler(request, response) {
    const params = request.body

    const content = await addPizza(params)

    response.send(content)
}

async function getOrdersHandler() {
    const params = request.query

    const content = await getListOfOrder()

    response.send(content)
}

async function addOrderHandler(request, response) {
    const params = request.body

    const orderItem = await addOrderItem(params)
    const content = await addOrder(orderItem)

    response.send(content)
}

module.exports = router