import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#606c38')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          className='outline-none px-5 py-2 rounded-full  shadow-lg text-white font-semibold'
          style={{backgroundColor: '#d90429'}}
          onClick={() => {setColor('#d90429')}}>
            Red
          </button>
          <button 
          className='outline-none px-5 py-2 rounded-full  shadow-lg text-white font-semibold'
          style={{backgroundColor: '#e76f51'}}
          onClick = {() => {setColor('#e76f51')}}>
            Orange
          </button>
          <button 
          className='outline-none px-5 py-2 rounded-full  shadow-lg text-white font-semibold'
          style={{backgroundColor: '#ffc300'}}
          onClick = {() => {setColor('#ffc300')}}>
            Yellow
          </button>
          <button 
          className='outline-none px-5 py-2 rounded-full  shadow-lg text-white font-semibold'
          style={{backgroundColor: '#588157'}}
          onClick={() => {setColor('#588157')}}>
            Green
          </button>
          <button 
          className='outline-none px-5 py-2 rounded-full  shadow-lg text-white font-semibold'
          style={{backgroundColor: '#023e8a'}}
          onClick = {() => {setColor('#023e8a')}}>
            Blue
          </button>
          <button 
          className='outline-none px-5 py-2 rounded-full  shadow-lg text-white font-semibold'
          style={{backgroundColor: '#4B0082'}}
          onClick = {() => {setColor('#4B0082')}}>
            Indigo
          </button>
          <button 
          className='outline-none px-5 py-2 rounded-full  shadow-lg text-white font-semibold'
          style={{backgroundColor: '#3a0ca3'}}
          onClick = {() => {setColor('#3a0ca3')}}>
            Violet
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
