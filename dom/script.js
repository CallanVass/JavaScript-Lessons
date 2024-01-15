console.log("Hello World!")
// // getElementById is the old way of getting elements (before ES6 (2015))
// // const el = document.querySelectorAll('li')
// // console.log(el)

// // el.innerHTML = 'Hey <span style="color: red">World!</span>'

// // Programatically/Dynamically add an element to the DOM
// const newDiv = document.createElement("div")
// console.log(newDiv)
// // Insert created element into the DOM
// document.body.appendChild(newDiv)
// // OR
// document.body.insertBefore(newDiv, document.querySelector("ul"))

// // Add content to div (Add any changes before insertion^, though.)
// newDiv.id = "spam"
// newDiv.innerHTML = '<h3>Awesome Content!</h3>'
// newDiv.style.color = "blue"

// Concatonate html of document.body
// const myColor = "blue"
// document.body.innerHTML += `<div id="spam" style="color: ${myColor}"><h3>Awesome Content!</h3></div>`


// Dynamically generate HTML content from this data
const items = [
    "Adding to the DOM",
    "Querying the DOM",
    "Changing the DOM",
    "Event Listener"
]

const ul = document.querySelector("ul")

// for (let item of items) {
//     // One way to do it
//     ul.innerHTML += `<li>${item}</li>`

//     // Another way to do it
//     // const newLi = document.createElement("li")
//     // newLi.innerText = item
//     // ul.appendChild(newLi)
// }

// Another way to do it
const lis = items.map(item => `<li>${item}</li>`)
console.log(lis)
ul.innerHTML += lis.join("")