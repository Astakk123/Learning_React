import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// now we import the return card to render it on ui

import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)
  // declaring object for the card  same can be done for array also but here we are doing object
  let myObj = {
    username: "Asta",
    "Roll number": 12,
  }
let yourObj = {
  username: 'manmath'
}
  return (

    <>
      <h1 className='bg-green-400 text-black mb-2 rounded-xl p-5 font-bold '>Tailwind test</h1>

      {/* running card */}
      {/* In this card what ever we give it will be shown in the props and hence we can show it in the ui */}
      {/* but if that is direct value then ok otherwise if that is an object and array then we have to declare  
        it before the retun in the function and then we should use that in the card execution in the retun 
        of the function  */}

      {/* <Card Username="Astakar" touch='clilc khere'  />
      <Card Username="Astakar" touch='clilc khere'  /> */}
      <Card  someuser={myObj}  btn="click here" />
      <Card someuser={yourObj} btn="touch here"  />





      

      {/* this two time written card will show two card which is written once in our component card.jsx
        but it has same value and we want to change to do that props come to play */}

      {/* the below is the card we are going to use as component so we will create another file and use it  */}

      {/* <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Delba</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black"> View Profile →</button>
        </div>
      </div> */}

    </>
  )
}

export default App

// className is jsx just like class in css
// jsx is not  a regular html so we should think about it 