import { createContext, useContext } from "react";

// here we are creating a context and giving a default value i.e an object where 
// there is one value and two method
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

})

export const ThemeProvider = ThemeContext.Provider

// creating a hook usually people make it  it will be used in the App.jsx

export default function useTheme(){
    return useContext(ThemeContext)
}