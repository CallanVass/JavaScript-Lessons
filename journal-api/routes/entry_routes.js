import { EntryModel} from '../db.js'
import { Router } from 'express'


// Create a blueprint for Router that will run our routes
const router = Router()

// HTTP request (GET)
router.get('/', async (req, res) => {
    // Populate() modifies the original query so everything can be nested inside. Take it off to see what happens if you're curious.
    res.status(201).send(await EntryModel.find().populate('category'))
})

// Get One Entry
router.get('/:id', async (req, res) => {
    const entry = await EntryModel.findById(req.params.id).populate('category')
    console.log(entry)
    if (entry) {
        res.send(entry)
    } else {
        res.status(404).send( {error: "Entry not found!"})
    }
})

// HTTP method (POST)
router.post('/', async (req, res) => {
    try {
    // Extract category from the body. If it exists, return category object
    // const cat = await CategoryModel.findOne({ name: req.body.category}) **Doing it this way is in Matt's REPO**
    const insertedEntry = await EntryModel.create(req.body)
    // Respond with 201 and the created entry
    res.status(200).send(insertedEntry)
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})



// HTTP method (PUT)
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

// Export router (defualt since it's one)
export default router
