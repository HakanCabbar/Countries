// ** Next Imports
import Router from 'next/router'

// ** MUI Imports,
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material'

// ** Custom Component Imports
import Icon from 'src/components/shared/icon'

// ** Hook Imports
import { useSettings } from 'src/hooks/useSettings'

const AppBar = () => {
  const { settings, saveSettings } = useSettings()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

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
            display: 'flex',
            alignItems: 'center',
            textWrap: 'nowrap',
            ':hover': {
              textShadow: '4px 4px 20px #55B0FF'
            }
          }}
          onClick={() => Router.push('/country-list')}
        >
          Where Is The World
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            padding: '0.5rem',
            alignItems: 'center',
            cursor: 'pointer',
            border: '1.5px solid transparent',
            borderRadius: '8px',
            '&:hover': {
              borderColor: settings.mode === 'light' ? 'black' : '#55B0FF'
            }
          }}
          onClick={toggleMode}
        >
          <Icon
            icon={settings.mode === 'light' ? 'material-symbols-light:dark-mode-outline' : 'bitcoin-icons:sun-filled'}
            fontSize={28}
          />
          {!isSmallScreen && (
            <Typography sx={{ textWrap: 'nowrap', fontSize: '16px' }}>
              {settings.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
