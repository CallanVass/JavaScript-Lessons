function Greeting({ name="None", age }) {
    console.log()
    // Destructure props so we don't have to use props.name
    // const  = props
    return (
    <>
        <p>Bonjour, {name}</p>
        <p>Your age is: {age}</p>
    </>
    )
}

export default Greeting