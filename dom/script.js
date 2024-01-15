console.log("Hello World!")
// getElementById is the old way of getting elements (before ES6 (2015))
// const el = document.querySelectorAll('li')
// console.log(el)

// el.innerHTML = 'Hey <span style="color: red">World!</span>'

// Programatically/Dynamically add an element to the DOM
const newDiv = document.createElement("div")
console.log(newDiv)
// Insert created element into the DOM
document.body.appendChild(newDiv)
// OR
document.body.insertBefore(newDiv, document.querySelector("ul"))

// Add content to div (Add any changes before insertion, though.)
newDiv.innerHTML = '<h3>Awesome Content!</h3>'
