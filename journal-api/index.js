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
// TODO: ADVANCED: Add a route /categories/:cat_id/entries that returns all entries in the given category

// HTTP request (GET)
app.get('/categories', async (req, res) => {
    res.status(201).send(await CategoryModel.find())
})

app.use('/entries', entryRoutes)


// Start server, listen for connections on this port
app.listen(4001)
