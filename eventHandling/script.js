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

function challengeOne() {
    const form = document.querySelector("form")
    const outputElement = document.querySelector("#output")
  

    form.addEventListener("submit", event => {
      event.preventDefault()
  

      const name = document.getElementById("name").value
      const language = document.getElementById("language").value
      const cohort = document.getElementById("cohort").value
  
      const outputText = `Hello ${name}, hope you are enjoying learning about ${language} in ${cohort}`
  
      outputElement.textContent = outputText
    })
}

function challengeTwo() {
    let bodySelector = document.querySelector("body")
    
    let button = document.querySelector("#change-theme")
    button.addEventListener("click", () => {
        bodySelector.classList.toggle("darkmode")

        const isDarkMode = bodySelector.classList.contains("darkmode")
        button.textContent = isDarkMode ? "Dark Mode" : "Light Mode"
    })

}

function challengeThree() {

}    

function activity() {
    challengeOne()
    challengeTwo()
    challengeThree()
}