
function adder(a, b) {
    return a + b
}
async function addPromise(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        const answer = adder(x, y)
        return answer
    } else {
        throw("x and y must be a number")
    }

}

// First version
// addPromise(10, 20)
//     .then((value) => {
//         adderPromise(value, 100)
//             .then(answer => console.log(answer))
//     })
//     .catch((err) => console.error(err))

// Second version
async function awaitFunction() {
    const value = await addPromise(10, 20)
    console.log(value)
}

    // .then((value) => addPromise(value, 78))
    // .then(answer=> console.log(answer))
    // .catch((err) => console.error(err))

addPromise(50, 100.65).
    then((value) => console.log(value)).
    catch((err) => console.error(err))

awaitFunction()
console.log("Not waiting for resolve!")
