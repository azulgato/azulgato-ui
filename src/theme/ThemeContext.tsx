import React, { useState } from "react"
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { darkThemeClass, lightThemeClass, vars } from "./theme.css";
import { lightTheme } from "./defaultTheme";

const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [themeMode, setThemeMode] = useState('light')
  const isLight = themeMode === 'light' 
  const toggleTheme = () => setThemeMode(isLight ? 'dark' : 'light')
  
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <div 
        className={isLight ? lightThemeClass : darkThemeClass} 
        style={assignInlineVars(vars, lightTheme)}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}