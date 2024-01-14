import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str+= "!@#$%^&*()_+"
    
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='bg-gray-700 text-white flex flex-col gap-2 justify-center rounded-lg p-5 text-center'>
      <h1 className='font-semibold text-lg my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type = "text" 
        value = {password}
        className = 'outline-none w-full py-1 px-3 text-black'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-600 px-3 py-0.5 shirk-0 shadow-lg font-medium'>
          COPY
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id="length" />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
          name="" 
          id="number" />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          name="" 
          id="char" />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
