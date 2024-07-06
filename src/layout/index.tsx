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
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      <AppBar />
      <Box
        sx={{
          minHeight: 'calc(100vh - 126px)',
          width: '80%',
          margin: 'auto',
          paddingY: 6,
          overflow: 'auto'
        }}
      >
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
