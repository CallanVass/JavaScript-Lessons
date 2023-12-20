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

function factorial(num) {
    if (num <= 1) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  
  console.log(factorial(4)); // 24
  

