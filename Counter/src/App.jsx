import { useState } from 'react'
import './App.css'

function App() {

    const [counter, setCounter] = useState(0)

    const addValue = () => {
      setCounter((prevCounter) => prevCounter + 1);
    }

    const removeValue = () => {
      setCounter((prevCounter) => prevCounter - 1);
    }

   return (
    <>
      <h1>Counter App React</h1>  
      <h2>Counter Value : {counter} </h2>
      <button
        onClick={addValue}
      >Add Value</button> {"   "}
      <button
        onClick={removeValue}
      >Remove Value</button>
      {/* <p>Footer: </p> */}
    </>
  )
}

export default App
