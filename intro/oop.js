// Python
// class Foo:
//     pass

// x = Foo()


// function Person(name, age) {
//     this.name = name
//     this.age = age

//     this.greet = () => (
//         console.log(`${this.name} is ${this.age} years old`)
//     )
// 

// callan.greet()}

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }

// const callan = new Person("Callan", 25)
// // person.name = "Callan"

// callan.age = 20

// // console.log(callan)
// // console.log(typeof person)

// callan.greet()



class Rectangle { // Superclass
    #width // Private properties - best practice regardless of having either getter or setter
    #height // Take the hash off a private property and the validation will go through the setter
    constructor(width, height) {
        this.#width = width
        this.#height = height
}

    get width() { return this.#width }

    set width(value) { 
        if (typeof value == 'number') {
            this.#width = value
        } else {
            // Raise an exception
        }
        
    }

    get area() {
        return this.#width * this.#height
    }

}

const rect = new Rectangle(10, 20)
// rect.width = 5

// Python Inheritance
// class Square(Rectangle):

class Square extends Rectangle { // Inherited class from Rectangle
    
    constructor() {
        super(size, size) // Call super class constructor
    }
}

const sq = new Square(size=20)

console.log(rect.width) // calling getter function doesn't need area()
console.log(sq.area)