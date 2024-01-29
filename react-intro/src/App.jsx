import './App.css'
import Greeting from './Greeting'

function App() {
  return (
    <>
        <h1>Hello</h1>
        <Greeting foo="bar" name="Callan" />
        <Greeting abc="123" age={51} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero natus laudantium non reprehenderit et quo error vitae aperiam deserunt voluptatibus. Sapiente odio nulla, tempore fuga enim voluptates doloribus reiciendis.</p>
    </>
  )
}

export default App
