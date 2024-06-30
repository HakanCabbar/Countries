import React from 'react'
import { Box } from '@mui/material'
import GeneralInformation from 'src/components/country-details/general-information'

const CountryDetails = () => {
  return (
    <Box
      sx={{
        width: '60%',
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
