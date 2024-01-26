import express from 'express'
import { CategoryModel } from './db.js'
// Default export is anonymous, so an arbitrary name entryRoutes chosen
import entryRoutes from './routes/entry_routes.js'

// Instance of application
const app = express()

app.use(express.json())

// HTTP request (GET)
app.get('/', (req, res) => {
    res.send({ info: "Journal API" })
})

// TODO: Move Categories to routes folder
// TODO: Complete categories CRUD
// TODO: ADVANCED: Modify "GET /categories/id" to embed an array of all the entries in that category

// HTTP request (GET)
app.get('/categories', async (req, res) => {
    res.status(201).send(await CategoryModel.find())
})

// Calculator ED Challenge
app.get('/calculator/:num1/:operator/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const operator = req.params.operator

    let result;
    switch (operator) {
        case "add":
            result = num1 + num2
            break
        case "subtract":
            result = num1 - num2
            break
        case "multiply":
            result = num1 * num2
            break
        case "divide":
            result = num1 / num2
            break
        default:
            return res.status(404).send({error: "Invalid operator."})

    }
    res.send({ result })
})


app.use('/entries', entryRoutes)


// Start server, listen for connections on this port
app.listen(4001)
