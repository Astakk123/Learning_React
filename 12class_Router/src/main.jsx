import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './compontents/Home/Home.jsx'
import About from './compontents/About/About.jsx'
import Contact from './compontents/Contact/Contact.jsx'
import User from './compontents/User/User.jsx'
import Github, { githubInfoLoader } from './compontents/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])



// doing the same thing in different style which is little easy to do 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* creating dyanmic route  */}
      <Route path="user/:Userid" element={<User />} />
      {/* when we write user/the Userid what ever it may be then it will show the same in the page  */}
      
      {/* <Route path="github" element={<Github />} /> */}
      {/* Now we will talk about the loader which is good enought to use */}
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> We are not going to render App because we are not returning anything in App */}
    {/* Now we will do the route means we will render the router see  how  */}

    <RouterProvider router={router} />
    {/* You can see here we are rendering <Routerprovider/> and we have passed the value router  */}
    {/* So, where is the router see where is the router above  */}
  </React.StrictMode>,
)
