import { useState } from 'react' // useState is an useful hook to propagate the changes to the UI
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// using hook which is useState


function App() {
  let [counter, setCounter] = useState(0)  // here we should use the let not the const
  // creating disableincreament and decrement 
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(false);

  // let counter = 5

  // const addValue = () => {
  //   counter = counter + 1
  //   setCounter(counter)
  //   // console.log("clicked", counter)
  //   // console.log("value added", Math.random())
  // }
  // const removeValue = () => {
  //   setCounter(counter - 1)
  //   // tried to solve the problem but failed to

  //   // if (number > 0) {
  //   //   setCounter(counter - 1)
  //   // }
  // }


  // this is for the puspose of setting limitation when it should work or not 

  const decrementCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setIsDecrementDisabled(false); // Enable decrement if count becomes positive
    }
  
    if (counter === 1) {
      setIsIncrementDisabled(false); // Enable increment when count reaches 1
    }
  };
  
  const incrementCount = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setIsIncrementDisabled(false); // Enable increment if count becomes less than 20
    }
  
    if (counter === 19) {
      
      setIsDecrementDisabled(false); // enable decrement when count reaches 19
     
    }
  
     
  };
 

  return (
    <>
      <h1>Chai aur react{counter}</h1>
      <h2>counter value {counter} </h2>
      
      {/* <button onClick={addValue}>Add value {counter} </button> */}
      <br />
      {/* <button onClick={removeValue}>remove value</button> */}
      <button disabled={isIncrementDisabled} onClick={() => incrementCount()}> add button</button>
      <button disabled={isDecrementDisabled} onClick={() => decrementCount()}> remove button </button>
    </>
  )
}

export default App
