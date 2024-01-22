import express from 'express'

const categories = ["Food", "Gaming", "Coding", "Other"]

const entries = [
    {category: "Food", content: "Pizza is yummy!"},
    {category: "Codeing", content: "Coding is fun!"},
    {category: "Gaming", content: "Skyrim is for the Nords!"}

]


// Instance of application
const app = express()

// HTTP request (GET)
app.get('/', (req, res) => {
    res.send({ info: "Journal API" })
})

app.get('/categories', (req, res) => {
    res.status(201).send(categories)
})

app.get('/entries', (req, res) => {
    res.status(201).send(entries)
})

app.post('/entries', (req, res) => {
    // Get entry data from the request
    // Validate
    // Create a new entry object
    // Push the new entry to the array
    // Respond with 201 and the created entry
})

// Start server, listen for connections on this port
app.listen(4001)
