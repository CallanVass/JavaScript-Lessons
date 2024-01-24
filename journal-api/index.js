import express from 'express'
import { EntryModel, CategoryModel } from './db.js'


const categories = ["Food", "Gaming", "Coding", "Other"]

// Instance of application
const app = express()

app.use(express.json())

// HTTP request (GET)
app.get('/', (req, res) => {
    res.send({ info: "Journal API" })
})

// HTTP request (GET)
app.get('/categories', async (req, res) => {
    res.status(201).send(await CategoryModel.find())
})

// HTTP request (GET)
app.get('/entries', async (req, res) => {
    res.status(201).send(await EntryModel.find({}))
})

// Get One Entry
app.get('/entries/:id', async (req, res) => {
    const entry = await EntryModel.findById(req.params.id)
    console.log(entry)
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
    res.status(200).send(insertedEntry)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})



// HTTP method (POST)
app.put('/entries/:id', async (req, res) => {
    try {
        const updatedEntry = await EntryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (updatedEntry) {
            res.send(updatedEntry)
        } else {
            res.status(500).send({error: 'Entry not found'})
        }
        
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})


// HTTP method (DELETE)
app.delete('/entries/:id', async (req, res) => {
    try {
        const deletedEntry = await EntryModel.findByIdAndDelete(req.params.id, req.body, { new: true })
        if (deletedEntry) {
            res.sendStatus(204)
        } else {
            res.status(500).send({error: 'Entry not found'})
        }
        
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})





// Start server, listen for connections on this port
app.listen(4001)
