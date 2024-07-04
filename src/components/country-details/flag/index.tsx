import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import useGetCountryDetails from 'src/services/hooks/useGetCountryDetail'

const Flag = () => {
  const router = useRouter()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const { data: flagData } = useGetCountryDetails({
    filterValue: router.query.countryCode as string,
    fields: 'flags'
  })

  async function downloadFunction(url: string) {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const urlObject = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = urlObject
      link.download = url.split('/').pop() as string
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(urlObject)
    } catch (error) {
      console.error('Error downloading the image:', error)
    }
  }

  return (
    <Box
      sx={{
        width: isMediumScreen ? '80%' : isSmallScreen ? '100%' : '60%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Flag</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <img
          src={flagData?.flags.svg}
          alt={flagData?.flags.alt}
          style={{
            width: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '60%',
            height: 'auto'
          }}
        />
      </Box>
    </Box>
  )
}

export default Flag
