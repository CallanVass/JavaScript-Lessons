import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchMaterial = () => {
    const [name, setName] = useState("Callan")
    const [num, setNum] = useState(1)
    const berry = "Juniper"

    function nameFunction() {
        if (num === 0) {
            setNum(1)
            setName("Sarah")
        } else if (num === 1) {
            setNum(0)
            setName("Callan")
        }
    }
// WATCH PROPS LESSION FROM NET NINJA
  return (
    <>
    <NavBar name={berry}/>
    <section>
        <h1>Some {name}</h1>
        <button onClick={nameFunction}>Click Me to change name!</button>
        <p>This data is sent to you by Isaac</p>
    </section>

    <section>
        <h1>Another Kind Of Data</h1>
        <p>This data is sent to you by Zander</p>
    </section>

    <section>
        <h1>Wow, a Kind Of Data</h1>
        <p>This data is sent to you by Thalia</p>
    </section>

    <section>
        <h1>Talk Them Kind Of Data</h1>
        <p>This data is sent to you by Athea</p>
    </section>
    </>
  )
}

export default SearchMaterial