// ** MUI Imports
import { Box } from '@mui/material'

// ** Custom Component Imports
import GeneralInformation from 'src/components/country-details/general-information'
import Geography from 'src/components/country-details/geography'
import Flag from 'src/components/country-details/flag'
import CoatOfArms from 'src/components/country-details/coat-of-arms'
import Misscellaneous from 'src/components/country-details/misscellaneous'

const CountryDetails = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
        width: '100%'
      }}
    >
      <GeneralInformation />
      <Geography />
      <Flag />
      <CoatOfArms />
      <Misscellaneous />
    </Box>
  )
}

export default CountryDetails
