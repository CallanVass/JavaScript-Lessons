// // CHALLENGE 1
// function findAllAnchors() {
// 	let allAnchors = nil
// 	return allAnchors
// }

// function findFirstH3() {
// 	let firstH3 = document.querySelector("h3")
// 	return firstH3
// }

// function findAllTextBlocks() {
// 	// There is a class called 'text-block'
// 	let textBlocks = document.querySelector(".text-block")
// 	return textBlocks
// }

// function findAllNestedParagraphs() {
// 	// There is a div with the id "zen-requirements"
// 	// return all the paragraph elements inside that div
// 	let zenRequirementParagraphs = document.querySelectorAll("#zen-requirements > p")
// 	return zenRequirementParagraphs
// }

// function findTheFooter() {
// 	let footer = document.querySelector("footer")
// 	return footer
// }

// console.log(findFirstH3())
// console.log(findAllTextBlocks())
// console.log(findAllNestedParagraphs())
// console.log(findTheFooter())


// // CHALLENGE 2

// function activity() {
//     // 1. Anchor code here
//     const anchor = document.querySelector("p")
//     anchor.innerHTML = 'This page is used for practicing <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">DOM manipulation</a>'

//     // 2. List Item code here
//     let ul = document.querySelector("ul")
//     let li1 = ul.children[3]
//     ul.removeChild(li1)

//     // 3. Form code here
//     let placeholder = document.querySelector("form > input")
//     placeholder.placeholder = "Name:"

//     // 4. Paragraph code here
//     let divSelector = document.querySelector("#question")
//     let newP = document.createElement("p")
//     newP.innerHTML = "42"
//     divSelector.appendChild(newP)
// }

// // Don't remove this
// activity()


// CHALLENGE 3

function addEventListeners() {
    // Don't Change this function.
    let darkModeButton = document.getElementById("dark-mode")
    let lightModeButton = document.getElementById("light-mode")
    // When the buttons are clicked, they call the respective function
    darkModeButton.addEventListener('click', changeToDarkMode)
    lightModeButton.addEventListener('click', changeToLightMode)
}

function changeToDarkMode() {
    // Modify the body's class list to change the page to dark mode
}

function changeToLightMode() {
    // Modify the body's class list to change the page to light mode
}

function changeBulletsToSquares() {
    // change the bullet cirlces to squares
}

function changeFontSizeAndColour() {
    // Change the body font styles
}

// Do not change this function
function activity() {
    addEventListeners()
    changeBulletsToSquares()
    changeFontSizeAndColour()
}