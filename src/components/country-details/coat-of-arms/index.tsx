// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ** Hook Imports
import useGetCountryDetails from 'src/services/hooks/useGetCountryDetail'

const CoatOfArms = () => {
  // ** Hooks
  const router = useRouter()
  const theme = useTheme()
  const { data: coatOfArmsData } = useGetCountryDetails({
    filterValue: router.query.countryCode as string,
    fields: 'coatOfArms'
  })

  // ** Variables
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

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
      <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Coat Of Arms</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <img
          src={coatOfArmsData?.coatOfArms.png}
          alt={'Coat of Arms'}
          style={{
            width: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '60%',
            height: 'auto'
          }}
        />
      </Box>
    </Box>
  )
}

export default CoatOfArms
