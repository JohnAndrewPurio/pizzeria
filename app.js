const express = require('express')
const connectToDB = require('./helperFunctions/connectToDB')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = 4000
const apiRouter = require('./routes/api')

connectToDB('pizzeria')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Okay')
})

app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})