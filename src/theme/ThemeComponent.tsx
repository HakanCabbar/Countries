// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// ** Theme Config
import { Settings } from 'src/context/settingsContext'

interface Props {
  settings: Settings
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { children } = props

  const themeOptions = {
    palette: {
      mode: props.settings.mode,
      background: {
        default: props.settings.mode === 'light' ? '#f0f0f0' : '#202d36',
        paper: props.settings.mode === 'light' ? '#ffffff' : '#2B3743'
      },
      text: {
        primary: props.settings.mode === 'light' ? '#17181A' : '#ffffff',
        secondary: props.settings.mode === 'light' ? '#C5C5C5' : '#777777'
      }
    }
  }

  let theme = createTheme(themeOptions)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
