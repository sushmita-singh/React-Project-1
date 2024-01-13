import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

let myObj = {
  name: 'Sushmita',
  age: 27,
  address: {
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India'
  }
}

const myArr = [2, 5, 6, 5, 8];

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='text-3xl bg-green-300 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card 
        myArr={myArr}
        imgSrc = "https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, libero!"
        name="Sushmita"
        address={myObj.address}
        designation="Software Engineer"
      />
    </>
  )
}

export default App
