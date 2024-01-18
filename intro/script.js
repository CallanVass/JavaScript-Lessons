// console.log("Hello world!")

// const maxTemp = 28
// console.log(maxTemp)
// maxTemp = 30
// console.log(maxTemp)

// var x = "Sarah"

// {
//     console.log(x)
//     console.log(42)
//     let y = 5
// }
// console.log(y)

// let str = "Hello World!"

// console.log(str.slice(2))
// console.log(str.replaceAll("o", "---"))
// let name = "Callan"

// console.log(`Hello, ${name}!`)
// let james = `Hello, ${name}!`
// console.log(james)

// console.log(Math.floor(3 / 2))

// let x = 5
// console.log(x++) // post increment
// console.log(++x) // pre increment
// Increment X
// x++
// Also x-- for decrament
// console.log(x)

// console.log("123" == 123) // type coercion
// console.log("123" === 123) // type coercion (strict comparison - stops type coercion)

// let x = 5

// console.log(typeof x) // type of data in variable

// person = {
//     name: "John", // creating an object
//     age: 26
// }
// let key = "name"
// console.log(person.age) // calling the object
// console.log(person[key]) // calling the object


// x = [1, 2, 3, true, "Hello"]

// console.log(x[x.length-1])

// function add(x, y) { // define a function
//     return x + y
// }




// const add = (x, y) => x + y // Arrowhead function
// const square = x => x ** 2 // With one parameter, the parentheses can be omitted
// const double = x => x * 2 


// console.log(add(10, 45))
// console.log(square(10))

// const numbers = [12, 13, 56, 43, 21, 2]
// const result = numbers.map(x => x ** 2) // Replace the paremeter directly with the arrow function
// console.log(result)



// // Destructuring
// const people = ["Matt", "Callan", "Sarah"]

// // const [,first, second] = people // Providing the comma skips an index. Multiple commas can be provided
// const [first, second, ...others] = people
// // const first = people[0]
// // const second = people[1]

// console.log(first, second, others)

// const bobBirds = ["Robin", "Crow"]
// const sallyBirds = ["Bluejay", "Cardinal"]

// const allBirds = [...bobBirds, ...sallyBirds, "Kookaburra"] // Expansion operator (concatenate arrays)


// console.log(allBirds)
// console.log(bobBirds)

// const me = {
//     name: "Callan", age: 51, favouriteColour: "Purple"
// }
// const me2 = { ...me, favouriteColour: "Blue" }

// console.log(me)
// console.log(me2)

// Print array
function createNewArray() {
    const arr = ["Callan", "Simon", "Neil", "James"]
    let newArr = []
    for (let name of arr) {
        newArr.push(name)
    }
    console.log(arr)
    console.log(newArr)
    

}


// ARRAYS
// push()
// pop()
// splice()
// slice()
// concat()
// filter()
// map()
// replace()
// forEach()
// indexOf()
// reverse()
let fruits = ['apple', 'banana', 'orange']
let aFruits = fruits.filter(fruit => fruit.includes('apple'))
let differentFruits = fruits.map(fruit => fruit.replace("apple", "Apple"))
let emptyFruit = []
let bananaIndex = fruits.indexOf('orange')
fruits.forEach(fruit => emptyFruit.push(fruit))
let reversedFruits = fruits.reverse()

let slicedFruit = fruits.slice(1, 2)
let combinedFruits = fruits.concat(slicedFruit)

// while (true) {
//     fruits.splice(2, 0, 'grape')
//     console.log(fruits)
// }
console.log(fruits)
console.log(slicedFruit)
console.log(combinedFruits)
console.log(aFruits)
console.log(differentFruits)
console.log(emptyFruit)
console.log(bananaIndex)
console.log(reversedFruits)


OBJECTS


