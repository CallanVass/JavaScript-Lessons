// A callback is a function that you pass as a parameter to another function

// Simple callback function

// function simpleCallBack(callback) {

//     callback()
// }

// simpleCallBack(function() {
//     console.log("Callback function executed!")
// })

// Another simple callback function

// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     // Call the provided callback function directly
//     callback()
    
//   }
  
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
  
//   // Example usage:
//   greet("John", sayGoodbye);

// function sayHi(name) {
//     console.log("hi", name);
//   }
  
//   function greet(name, callback) {
//     callback(name);
//   } 
  
//   greet("Emma", sayHi);

// function capitaliseFirst(value) {
//     return value.charAt(0).toUpperCase() + value.slice(1)
//  }

// function capitaliseFirst(strings) {
//     return strings.map((string) => string[0].toUpperCase() + string.slice(1))
//  }

//  function getTheNumbers(list) {
//     return list.filter((string) => typeof string === "number")
//   }

//   function shortestToLongest(list) {
//     return list.sort((val1, val2) => val1.length - val2.length)
//   }

// console.log(capitaliseFirst("one day i will rule the world".split(" ")).join(" "))
