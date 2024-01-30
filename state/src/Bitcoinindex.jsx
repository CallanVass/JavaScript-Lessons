import React, { useEffect, useState } from 'react'

const Bitcoinindex = () => {
    let [price, setPrice] = useState("")

    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice/AUD")
        .then(res => res.json())
        .then(data => setPrice(data.bpi.AUD.rate))
    }, [])

    return (
    <>
    {/* Variable needs to be a state or a prop so it re renders when it changes */}
    <p>Current Price (AUD): {price}</p>
    </>
  )
}

export default Bitcoinindex