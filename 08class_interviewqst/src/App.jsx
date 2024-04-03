import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () =>{
    setCount(count +1)
    setCount(count +1)
    setCount(count +1)
    setCount(count +1)
    setCount(count +1)

    // consider the two scenario the above and the below what happen with the above and the below

    
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
    <h1>chai aur code </h1>
      <h1>count {count} </h1>
      <button onClick={() => incrementCount()}> add button</button>
    </>
  )
}

export default App
