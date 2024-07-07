// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ** Custom Component Imports
import { DetailRow } from '../detail-row'
import Chip from 'src/components/shared/chip'

// ** Hook Imports
import { useSettings } from 'src/hooks/useSettings'
import useGetCountryDetails from 'src/services/hooks/useGetCountryDetail'

const Misscellaneous = () => {
  // ** Hooks
  const router = useRouter()
  const { settings } = useSettings()
  const theme = useTheme()
  const { data: countryData } = useGetCountryDetails({
    filterValue: router.query.countryCode as string,
    fields: 'unMember,independent,timezones,startOfWeek,tld,postalCode'
  })

  // ** Variables

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const geographyData = [
    {
      label: 'UN Member',
      value: countryData?.unMember
    },
    {
      label: 'Independent',
      value: countryData?.independent
    },
    {
      label: 'Timezone',
      value: countryData?.timezones.join(' ,')
    },
    {
      label: 'Start of Week',
      value: countryData?.startOfWeek
    },
    {
      label: 'Top Level Domain',
      value: countryData?.tld
    },
    {
      label: 'Postal code (format)',
      value: countryData?.postalCode?.format ?? '-'
    },
    {
      label: 'Postal code (regex)',
      value: countryData?.postalCode?.regex ?? '-'
    }
  ]

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Typography sx={{ fontWeight: 800, fontSize: '36px' }}>{countryData?.name?.common}</Typography>
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Misscellaneous</Typography>
      <Box
        sx={{
          borderRadius: '8px',
          border: `1px solid ${theme.palette.text.secondary}`,
          bgcolor: settings.mode === 'light' ? '#FFFFFF' : '#2B3743'
        }}
      >
        {geographyData.map((data, index) => (
          <Box key={index}>
            {index === 0 || index === 1 ? (
              <DetailRow key={index} label={data.label}>
                <Chip color={data.value === true ? 'green' : 'red'} text={data.value ? 'Yes' : 'No'} />
              </DetailRow>
            ) : (
              <DetailRow key={index} label={data.label} value={data.value} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Misscellaneous
