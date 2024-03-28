
// this is second class where we are learning how to import in different file and little editing

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// here the React.StrictMode is ised for developer we shluld use it if we don't then no prob