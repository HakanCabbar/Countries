// ** MUI Imports
import { Box, Typography, useTheme } from '@mui/material'

// ** Hook Imports
import { useSettings } from 'src/hooks/useSettings'

const Footer = () => {
  const { settings } = useSettings()
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        bgcolor: settings.mode === 'light' ? '#FEFEFE' : '#2B3743',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 4px 16px 0px #0000001A'
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 300,
          padding: 2,
          color: `${theme.palette.primary}`
        }}
      >
        Made by Hakan Cabbar, 2024
      </Typography>
    </Box>
  )
}

export default Footer
