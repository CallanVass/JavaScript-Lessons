import { EntryModel, closeConnection, CategoryModel } from "./db.js"

const categories = [
    {
      "name": "Food"
    },
    {
      "name": "Gaming"
    },
    {
      "name": "Coding"
    },
    {
      "name": "Other"
    }
]

await CategoryModel.deleteMany()
console.log('Deleted all categories!')
const cats = await CategoryModel.insertMany(categories)
console.log('Added categories!')

const entries = [
    // Get the 0th element of cats
    {category: cats[0], content: "Pizza is yummy!"},
    {category: cats[2], content: "Coding is fun!"},
    {category: cats[1], content: "Skyrim is for the Nords!"}
]



await EntryModel.deleteMany()
console.log('Deleted all entries!')
await EntryModel.insertMany(entries)
console.log('Added entries!')


closeConnection()