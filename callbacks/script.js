// function adder(x, y, cb) {
//     cb(x + y)
// }

// adder(10, 5, result => console.log(result))
// console.log("Done")
function getJoke() {
    return new Promise ((resolve, reject) => {
        try {
            // 2.Create the XHR
            const req = new XMLHttpRequest()
            // 3.Add listener for when the response is recieved and parsed
            // 9.Listener callback is triggered, which in turn calls cd, passing the joke
            req.addEventListener("load", event => resolve(event.target.response.joke))
            // 4.Open the URL with the appropriate http request verb
            req.open("Get", "https://icanhazdadjoke.com/")
            // 5.Open Accept header so server gives us JSON
            req.setRequestHeader("Accept", "application/json")
            // 6.Set responseType so XHR object parses the JSON
            req.responseType = "json"
            // 7.Send the request, the immediately return from getJoke (i.e don't wait!)
            req.send()
            }
        catch (e) {
            reject(e)
        }
        })
}

async function fetchJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await res.json()
    return data.joke
        // .then ((res) => res.json())
        // .then((data) => console.log(data))
}
// Displays joke 
fetchJoke().then((joke) => console.log(joke))

// 1.Call getJoke and pass a callback function
// 10.Callback is called via cb in the load listener in getJoke, recieving the joke

// let jokes = []

// getJoke()
//     .then(joke => {
//         joke.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         joke.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         jokes.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         jokes.push(joke)
//         console.log(jokes)
//     })

// const jokePromises = []

// for (let i = 0; i < 3; i++) {
//     jokePromises.push(getJoke())
// }

// Promise.all(jokePromises)
//     .then(jokes => console.log(jokes))
//     .catch(err => console.error(err))



// 8.getJoke returned immediately, so log out message
console.log("Request sent!")