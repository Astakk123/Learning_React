import { useState } from 'react' // this is only useful here 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-6 py-2'>

          <button onClick={()=>setColor("red")} className=" border-black border-solid border-4 outline-none text-black rounded-full px-8 py-1" style={{ backgroundColor: "red" }}>red</button>

          <button onClick={()=>setColor("green")}className=" border-black border-solid border-4 outline-none text-black rounded-full px-5 py-1" style={{ backgroundColor: "green" }}>green</button>

          <button onClick={()=>setColor("purple")}className=" border-black border-solid border-4 text-black rounded-full px-5 py-1" style={{ backgroundColor: "purple" }}>Purple</button>

          <button onClick={()=>setColor("white")}className="  border-black border-solid border-4 text-black rounded-full px-5 py-1" style={{ backgroundColor: "white" }}>White</button>

          <button onClick={()=>setColor("yellow")}className=" outline-none text-black border-black border-solid border-4  rounded-full px-5 py-1" style={{ backgroundColor: "yellow" }}>Yellow</button>

        </div>
      </div>

    </div>

  )
}

export default App
