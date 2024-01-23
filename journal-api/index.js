import express from 'express'
import mongoose from 'mongoose'

const categories = ["Food", "Gaming", "Coding", "Other"]

const entries = [
    {category: "Food", content: "Pizza is yummy!"},
    {category: "Coding", content: "Coding is fun!"},
    {category: "Gaming", content: "Skyrim is for the Nords!"}

]

// Mongoose Connection String (with connection to journal db)
mongoose.connect()
    .then(m => console.log(m.connection.readyState === 1 ? 'MongoDB connected!' : 'Mongoose connection failed!'))
    .catch(err => console.log(err))


const entriesSchema = new mongoose.Schema({
    category: {type: String, required: true},
    content: {type: String, required: true}
})

const EntryModel = mongoose.model('Entry', entriesSchema)

// Instance of application
const app = express()

app.use(express.json())

// HTTP request (GET)
app.get('/', (req, res) => {
    res.send({ info: "Journal API" })
})

// HTTP request (GET)
app.get('/categories', (req, res) => {
    res.status(201).send(categories)
})

// HTTP request (GET)
app.get('/entries', (req, res) => {
    res.status(201).send(entries)
})

// Get One Entry
app.get('/entries/:id', (req, res) => {
    const entry = entries[req.params.id - 1]
    if (entry) {
        res.send(entry)
    } else {
        res.status(404).send( {error: "Entry not found!"})
    }
})

// HTTP request (POST)
app.post('/entries', async (req, res) => {
    try {
    // Get entry data from the request
    // console.log(req.body)
    // TODO: Validate
    // Create a new entry object
    // Push the new entry to the array
    // entries.push(req.body)
    const insertedEntry = await EntryModel.create(req.body)
    // Respond with 201 and the created entry
    res.status(201).send(insertedEntry)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})


// Start server, listen for connections on this port
app.listen(4001)