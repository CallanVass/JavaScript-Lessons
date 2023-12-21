// Calculator

// function addTwo(num1, num2) {
//     return num1 + num2
// }
// function subtractTwo(num1, num2) {
//     return num1 - num2
// }
// function divideTwo(num1, num2) {
//     return num1 / num2
// }
// function multiplyTwo(num1, num2) {
//     return num1 * num2
// }
// function calculate(num1, num2, operation){
//     const allowedValues = ["add", "subtract", "muliply", "divide"]
//     if (allowedValues.includes(operation)) {
        
//     } else {
//         throw "invalid operation"
//     }
//     switch (operation) {
//         case "add":
//             return addTwo(num1, num2)
//         case "subtract":
//             return subtractTwo(num1, num2)
//         case "multiply":
//             return multiplyTwo(num1, num2)
//         case "divide":
//             return divideTwo(num1, num2)
//     }

//  }
//  console.log(calculate(100, 2, "divide"))

// Recursive function (function that calls itself)

// function factorial(num) {
//     if (num <= 1) {
//       return 1;
//     }
//     return num * factorial(num - 1);
//   }
  
//   console.log(factorial(4)); // 24
  

// // This
//   function capitalise(value) {
//     // iterate over a list
//     // for each item, capitalise the first letter
//     newArr = value.map(capitaliseList)
//     return newArr
// }

// function capitaliseList(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1)
// }
// // Is the same as this
// function capitalise(value) {
//     return value.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   }

// console.log(capitalise(["selfish", "singer", "woman", "hello"]))

// function isNumber(value) {
//     trueOrFalse = value.filter(num => typeof num === "number")
//     if (trueOrFalse.length > 0) {
//         return true
//         } else {
//             return false
//         }
    
//   }

// console.log(isNumber(["selfish", "singer", "woman", "hello"]))

// function addSuffix(suffix) {
//     return function (string) {
//         return string + suffix
//     }
// }
// makeItNice = addSuffix(", hello world")

// console.log(makeItNice("well"))

console.log(this)
  
