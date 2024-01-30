// import React, { useState } from 'react'
// // use = a hook

// const ShowCount = ({ value }) => {
//     return <p>You have clicked {value} times</p>

// }

// const App = () => {
//     // let count = 0
//     let [count, setCount] = useState(0)

//   return (
//     <>
//     <h1>State</h1>
//     <ShowCount value={count}/>
//     <button onClick={() => setCount(count + 1)}>Click Me!</button>
//     {// on = eventListener
//     }
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'
import Bitcoinindex from './Bitcoinindex'
// use = a hook


const App = () => {
  return (
    <>
    <h1>Bitcoin Index</h1>
    <Bitcoinindex />
    </>
  )
}

export default App