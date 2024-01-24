import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Reads .env and sets up environment variables
dotenv.config()

try {
    // Mongoose Connection String (with connection to journal db)
    const m = await mongoose.connect(process.env.DB_URI)
    console.log(m.connection.readyState === 1 ? 'MongoDB connected!' : 'Mongoose connection failed!')
} catch (e) {
    console.log(e)
}

const closeConnection = () => { 
    console.log('Mongoose connection closed...')
    mongoose.disconnect()
}

// Attach sigterm handler to process. When we end the program, it disconnects from Mongoose db
// process.on('SIGINT', () => {
//     console.log('Mongoose disconnecting ...')
//     mongoose.disconnect()
// })

const categoriesSchema = new mongoose.Schema({
    name: {type: String, required: true},

})

const CategoryModel = mongoose.model('Category', categoriesSchema)

const entriesSchema = new mongoose.Schema({
    category: {type: String, required: true},
    content: {type: String, required: true}
})

const EntryModel = mongoose.model('Entry', entriesSchema)

export { closeConnection, EntryModel, CategoryModel }
