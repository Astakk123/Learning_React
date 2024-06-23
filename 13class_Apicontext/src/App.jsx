


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
 
/****point after writting this much code it is now ready to access the context 
after wrapping of UserContextProvider it gives the access to the component that are rendered 
inside this return
*/

