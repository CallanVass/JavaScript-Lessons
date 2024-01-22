import express from 'express'

const categories = ["Food", "Gaming", "Coding", "Other"]

const entries = [
    {category: "Food", content: "Pizza is yummy!"},
    {category: "Coding", content: "Coding is fun!"},
    {category: "Gaming", content: "Skyrim is for the Nords!"}

]


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
app.post('/entries', (req, res) => {
    // Get entry data from the request
    console.log(req.body)
    // TODO: Validate
    // Create a new entry object
    // Push the new entry to the array
    entries.push(req.body)
    // Respond with 201 and the created entry
    res.status(201).send(entries[entries.length - 1])
})


// Start server, listen for connections on this port
app.listen(4001)
