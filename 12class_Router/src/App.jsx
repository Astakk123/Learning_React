import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compontents/Header/Header'
import Home from './compontents/Home/Home'
import Footer from './compontents/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header />
    <Home/>
    <Footer/> */}
    {/* not returning anything here we are directly going to the main.jsx */}
    </>
  )
}

export default App
