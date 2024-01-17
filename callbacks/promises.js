
function adder(a, b) {
    return a + b
}
function addPromise(x, y) {
    return new Promise( (resolve, reject) => {
        if (typeof x === "number" && typeof y === "number") {
            const answer = adder(x, y)
            resolve(answer)
        } else {
            reject("x and y must be a number")
        }
    })
}

// First version
// addPromise(10, 20)
//     .then((value) => {
//         adderPromise(value, 100)
//             .then(answer => console.log(answer))
//     })
//     .catch((err) => console.error(err))

// Second version
addPromise(10, 20)
    .then((value) => addPromise(value, 78))
    .then(answer=> console.log(answer))
    .catch((err) => console.error(err))

addPromise(50, 100.65).
    then((value) => console.log(value)).
    catch((err) => console.error(err))

console.log("Not waiting for resolve!")
