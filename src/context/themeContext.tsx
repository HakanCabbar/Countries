import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  mode: Theme
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children, initialMode }: { children: ReactNode; initialMode: Theme }) => {
  const [mode, setMode] = useState<Theme>(initialMode)

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const muiTheme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'light' ? '#f0f0f0' : '#202d36',
        paper: mode === 'light' ? '#ffffff' : '#2B3743'
      },
      text: {
        primary: mode === 'light' ? '#17181A' : '#ffffff',
        secondary: mode === 'light' ? '#C5C5C5' : '#777777'
      }
    },
    typography: {
      fontFamily: 'Nunito Sans, sans-serif'
    }
  })

  const contextValues = {
    mode,
    toggleMode
  }

  return (
    <ThemeContext.Provider value={contextValues}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
