// ** MUI Imports
import { Box } from '@mui/material'

// ** Custom Component Imports
import AppBar from './appbar'
import Footer from './footer'

// ** Type Imports
import { MyAppProps } from 'src/pages/_app'

const Layout = ({ Component, pageProps }: MyAppProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column'
      }}
    >
      <AppBar />
      <Box sx={{ minHeight: '100vh', width: '80%', margin: 'auto', paddingY:6 }}>
        <Component {...pageProps} />
      </Box>

      <Footer />
    </Box>
  )
}

export default Layout
