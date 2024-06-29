// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DarkMode, LightMode } from '@mui/icons-material'
import { useTheme as useMuiTheme } from '@mui/material/styles'

// ** Context Imports
import { useTheme } from 'src/context/themeContext'

const AppBar = () => {
  const { mode, toggleMode } = useTheme()
  const theme = useMuiTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        top: 0,
        width: '100%',
        bgcolor: mode === 'light' ? '#FEFEFE' : '#2B3743'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          margin: 'auto',
          padding: 2
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            lineHeight: '32.75px',
            fontWeight: 700,
            color: `${theme.palette.primary}`
          }}
        >
          Where is the world
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          {mode === 'light' ? <DarkMode onClick={toggleMode} /> : <LightMode onClick={toggleMode} />}
          <Typography>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
