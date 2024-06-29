// ** MUI Imports
import { Box, Typography } from '@mui/material'
import { useTheme as useMuiTheme } from '@mui/material/styles'

// ** Context Imports
import { useTheme } from 'src/context/themeContext'

const Footer = () => {
  const { mode } = useTheme()
  const theme = useMuiTheme()

  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        bgcolor: mode === 'light' ? '#FEFEFE' : '#2B3743',
        display: 'flex',
        justifyContent: 'center'
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
