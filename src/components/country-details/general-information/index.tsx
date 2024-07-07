// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ** Custom Component Imports
import Chip from 'src/components/shared/chip'
import { DetailRow } from '../detail-row'

// ** Hook Imports
import { useSettings } from 'src/hooks/useSettings'
import useGetCountryDetails from 'src/services/hooks/useGetCountryDetail'

const GeneralInformation = () => {
  // ** Hooks
  const router = useRouter()
  const theme = useTheme()
  const { settings } = useSettings()

  const { data: generalInformation } = useGetCountryDetails({
    filterValue: router.query.countryCode as string,
    fields: 'altSpellings,name,capital,population,languages,currencies,flags'
  })

  // ** Variables
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const generalInformationData = [
    {
      label: 'Official name',
      value: generalInformation?.name?.official
    },
    {
      label: 'Common name',
      value: generalInformation?.name?.common
    },
    {
      label: 'Alternative spellings',
      value: generalInformation?.altSpellings?.join(', ')
    },
    {
      label: 'Capital',
      value: generalInformation?.capital?.join(', ')
    },
    {
      label: 'Population',
      value: generalInformation?.population?.toLocaleString()
    },
    {
      label: 'Language',
      value: Object.values(generalInformation?.languages || {}).join(', ')
    },
    {
      label: 'Currencies',
      value:
        generalInformation && generalInformation?.currencies ? (
          <DetailRow key='currencies' label='Currencies' lastMember>
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.keys(generalInformation.currencies).map((code, index) => (
                <Chip
                  key={index}
                  color={'blue'}
                  text={`${generalInformation.currencies[code]?.name} (${generalInformation.currencies[code]?.symbol})`}
                />
              ))}
            </Box>
          </DetailRow>
        ) : (
          'N/A'
        )
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Typography sx={{ fontWeight: 800, fontSize: '36px' }}>{generalInformation?.name?.common}</Typography>
        <img
          src={generalInformation?.flags?.svg}
          alt={`${generalInformation?.name?.common} Flag`}
          height={24}
          width={36}
          style={{ marginTop: '8px' }}
        />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>General Information</Typography>
      <Box
        sx={{
          borderRadius: '8px',
          border: `1px solid ${theme.palette.text.secondary}`,
          bgcolor: settings.mode === 'light' ? '#FFFFFF' : '#2B3743'
        }}
      >
        {generalInformationData.map((data, index) => (
          <Box key={index}>
            {typeof data.value === 'string' ? (
              <DetailRow key={index} label={data.label} value={data.value} />
            ) : (
              data.value
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default GeneralInformation
