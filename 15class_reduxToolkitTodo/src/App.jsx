import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> welcome to redux and react-redux </h1>
        <AddTodo/>
        <Todo/>
         </div>
    </>
  )
}

export default App
