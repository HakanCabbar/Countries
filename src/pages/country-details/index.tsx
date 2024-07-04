// ** MUI Imports
import { Box } from '@mui/material'
import Flag from 'src/components/country-details/flag'

// ** Custom Component Imports
import GeneralInformation from 'src/components/country-details/general-information'
import Geography from 'src/components/country-details/geography'

const CountryDetails = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginX: 'auto',
        gap: '1rem'
      }}
    >
      <GeneralInformation />
      <Geography />
      <Flag/>
    </Box>
  )
}

export default CountryDetails
