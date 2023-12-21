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

function sayHi(name) {
    console.log("hi", name);
  }
  
  function greet(name, callback) {
    callback(name);
  } 
  
  greet("Emma", sayHi);