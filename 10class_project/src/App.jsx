import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // these are things requred to change time to time so we are taking its state 
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //usecallback is an hook just like useState its work is same but here we 
  // pass function with some dependencies i.e  useCallback(fn [dependencies ]) see below 

  const passwodGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&J*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)


    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  // useEffect() is a hook we should know we will use here 

  useEffect(() => {
    passwodGenerator()
  }, [length, numberAllowed, charAllowed, passwodGenerator])

  //useRef() is another hook we are using to copy the password to clipboard

  const copyRef = useRef(null)

  const copypasswordtoclipboard = useCallback(()=>{
    copyRef.current?.select() //this is used only to show the selected area 
    copyRef.current?.setSelectionRange(0, 9) // this is to use the selection range for copy
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-ld px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-center text-white  my-3'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='Password' readOnly ref={copyRef} />
          <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white shrink-0 py-0.5 px-3 ' >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} /><label>length: {length} </label>
            <div
              className='flex items-center gap-x-1'><input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed((prev) => !prev); }} /> <label htmlFor="numberInput"> Numbers</label>
            </div>
            <div className='flex items-center gap-x-1' > <input type="checkbox" defaultChecked={charAllowed}
              id='charaterInput' onChange={() => { setCharAllowed((prev) => !prev); }} /> <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
