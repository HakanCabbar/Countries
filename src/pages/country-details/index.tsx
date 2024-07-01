// ** MUI Imports
import { Box } from '@mui/material'

// ** Custom Component Imports
import GeneralInformation from 'src/components/country-details/general-information'

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
    </Box>
  )
}

export default CountryDetails
