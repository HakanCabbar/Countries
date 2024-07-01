// ** Next Imports
import Router from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Custom Component Imports
import Icon from 'src/components/shared/icon'

// ** Hook Imports
import { useSettings } from 'src/hooks/useSettings'

const AppBar = () => {
  const { settings, saveSettings } = useSettings()
  const theme = useTheme()

  const toggleMode = () => {
    saveSettings({
      ...settings,
      mode: settings.mode === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <Box
      sx={{
        position: 'relative',
        top: 0,
        width: '100%',
        bgcolor: settings.mode === 'light' ? '#FEFEFE' : '#2B3743',
        boxShadow: '0px 4px 16px 0px #0000001A'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          margin: 'auto',
          padding: 1.5
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            cursor: 'pointer',
            background: 'transparent'
          }}
          component={'div'}
          onClick={() => Router.push('/countries-list')}
        >
          Where is the world
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            padding: '0.5rem',
            alignItems: 'center',
            cursor: 'pointer',
            border: '1px solid transparent',
            borderRadius: '8px',
            '&:hover': {
              borderColor: theme.palette.text.primary
            }
          }}
          onClick={toggleMode}
        >
          <Icon
            icon={settings.mode === 'light' ? 'material-symbols-light:dark-mode-outline' : 'bitcoin-icons:sun-filled'}
            fontSize={28}
          />
          <Typography>{settings.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
