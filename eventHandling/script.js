// function challengeOne() {
//     let button = document.querySelector("#challenge-one")
//     button.addEventListener("click", event => {
//         event.preventDefault()
//         console.log("Hello World!")
//     })
// }

// function challengeTwo() {
//     let button = document.querySelector("#challenge-two")
//     let ul = document.querySelector("ul")
//     button.addEventListener("click", event => {
//         event.preventDefault()
//         ul.innerHTML += `<li>New List Item</li>`
//     })
// }


// function challengeThree() {
//     const colours = ['rgb(238, 130, 238)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)']
//     // Capture current background color
//     // find index in array and set new color to that
//     let button = document.querySelector("#challenge-three")
    
//     button.addEventListener("click", event => {
//         event.preventDefault()
//         let colourCounter = 0
//         for (let colour in colours) {
//             console.log(colourCounter)
//             colourCounter += 1
//         }
        
//         // let currentColour = button.style.backgroundColor
//         // let currentIndex = colours.indexOf(currentColour)
//         // let nextIndex = (currentIndex + 1) % colours.length
//         // button.style.backgroundColour = colours[nextIndex]
//         })
// }

// function activity() {
//     challengeOne()
//     challengeTwo()
//     challengeThree()
// }




// function challengeOne() {
//     const form = document.querySelector("form")
//     const outputElement = document.querySelector("#output")
  

//     form.addEventListener("submit", event => {
//       event.preventDefault()
  

//       const name = document.getElementById("name").value
//       const language = document.getElementById("language").value
//       const cohort = document.getElementById("cohort").value
  
//       const outputText = `Hello ${name}, hope you are enjoying learning about ${language} in ${cohort}`
  
//       outputElement.textContent = outputText
//     })
// }

// function challengeTwo() {
//     let bodySelector = document.querySelector("body")
    
//     let button = document.querySelector("#change-theme")
//     button.addEventListener("click", () => {
//         bodySelector.classList.toggle("darkmode")

//         const isDarkMode = bodySelector.classList.contains("darkmode")
//         button.textContent = isDarkMode ? "Dark Mode" : "Light Mode"
//     })

// }

// function challengeThree() {
//     function drag(dragevent) {
//         dragevent.dataTransfer.setData("text", dragevent.target.id)
//     }
//     function drop(dropevent) {
//         dropevent.preventDefault()
//         let data = dropevent.dataTransfer.getData("text")
//         let child = document.getElementById(data)
//         dropevent.target.appendChild(child)
//         if (dropevent.target.id == "to") {
//             child.style.backgroundColor = "green"
//         } else {
//             child.style.backgroundColor = "red"
//         }
//     }

//     function allowDrop(allowdropevent) {
//         allowdropevent.preventDefault()
//     }

//     let divs = document.querySelectorAll(".drag")
//     for (div of divs) {
//         div.addEventListener("dragover", allowDrop)
//         div.addEventListener("drop", drop)
//         console.log(div)
//     }

//     document.getElementById("dragger").addEventListener('dragstart', drag)
// }    

// function activity() {
//     challengeOne()
//     challengeTwo()
//     challengeThree()
// }





function challengeOne() {
    function changeValue(value) {
        // This is the callback function for the event handler
        // It should increment the value in the <p> by value
    }
    // Challenge 1: Add an event listener to each button that invokes
    // the changeValue handler function with the correct value for the button
}

function challengeTwo() {
    function changeValue(event) {
        // This is the callback function for the event handler
        // It should either increment the value, decrement the value,
        // or stop changing the value in the <p> based on the button that is clicked

    }
    // Challenge 2: Use the event target to determine the value on the button
    // that triggered the click event. Add that value to the current value
    // in the paragraph and update what is shown on the page.
    // When the Stop button is clicked, the event handlers should all be removed.
}


function activity() {
    challengeOne()
    challengeTwo()
}