// function adder(x, y, cb) {
//     cb(x + y)
// }

// adder(10, 5, result => console.log(result))
// console.log("Done")
function getJoke(cb) {
    // 2.Create the XHR
    const req = new XMLHttpRequest()
    // 3.Add listener for when the response is recieved and parsed
    // 9.Listener callback is triggered, which in turn calls cd, passing the joke
    req.addEventListener("load", event => cb(event.target.response))
    // 4.Open the URL with the appropriate http request verb
    req.open("Get", "https://icanhazdadjoke.com/")
    // 5.Open Accept header so server gives us JSON
    req.setRequestHeader("Accept", "application/json")
    // 6.Set responseType so XHR object parses the JSON
    req.responseType = "json"
    // 7.Send the request, the immediately return from getJoke (i.e don't wait!)
    req.send()
}

// 1.Call getJoke and pass a callback function
// 10.Callback is called via cb in the load listener in getJoke, recieving the joke
getJoke(joke => console.log(joke))

// 8.getJoke returned immediately, so log out message
console.log("Request sent!")