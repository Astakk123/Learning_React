
// this App is just a function which return some value it is in class 1 here we have modified little bit

// this is first one which itself is a function but here we are now importing something so see how

// function App() {
  

//   return (
//    <h1>chai aur react with vite</h1>
//   )
// }

// we are importing the Chai which is another function in chai.jsx so see how 

import Chai from "./Chai"

function App() {
  

  // return (
  //  <Chai/>
   /*
   now this is running and we get the chai is ready as we have returned in chai.jsx But
   when we add something more liike more heading and anything see below then it does not workm 
   it shows evereything should be wrapped to run we have to add fragment i.e <>
   */ 
  // )

  // return(
  //   <Chai/>
  //   <h1>chai is not ready</h1>
  //   // this is the situation where this code doesn't work to run this have to add fragment i.e <>
  // )

  return(
   <>
   <Chai/>
   <h2>see now the code will work</h2>
   <p>look at this now the situation is different but we have added the fragment so we are
    able to write multiple line using head tag and para and more 
   </p>
   </>
  )
}

export default App // this is done for the the function and it is imported in main.jsx 
