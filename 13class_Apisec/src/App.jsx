import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card';
import Theme from './components/Theme';


function App() {
  const [themeMode, setThemeMode] = useState("light");

  // we are declaring function with the same name and it will go 
  // to the same dark and light theme 

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // javascrict for theme which is actually enable changes 

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")

    document.querySelector('html').classList.add(themeMode)


  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }} >
      <div className="flex flex-row-reverse m-0 items-start" ><Theme />
      </div>
      <div>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />

            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
