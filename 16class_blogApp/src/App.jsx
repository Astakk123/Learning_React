import { useState } from 'react'

import './App.css'

function App() {

 // console.log(process.env.REACT_APP_APPWRITE_URL) // this is used in  the case of  create react app 
 // the same above thing can be done in the case of create vite@latest case 

console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <h1> A blog with App write </h1>
    </>
  )
}

export default App
