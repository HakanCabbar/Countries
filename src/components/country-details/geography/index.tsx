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

const Geography = () => {
  // ** Hooks
  const router = useRouter()
  const { settings } = useSettings()
  const theme = useTheme()

  const { data: countryData } = useGetCountryDetails({
    filterValue: router.query.countryCode as string,
    fields: 'continents,region,subregion,area,population,landlocked,borders,maps'
  })

  // ** Variables

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const geographyData = [
    {
      label: 'Continent',
      value: countryData?.continents?.join(' ,')
    },
    {
      label: 'Region',
      value: countryData?.region
    },
    {
      label: 'Sub region',
      value: countryData?.subregion
    },
    {
      label: 'Area',
      value: `${countryData?.area?.toString()} km²`
    },

    {
      label: 'Population',
      value: countryData?.population?.toLocaleString()
    },
    {
      label: 'Landlocked',
      value: (
        <DetailRow key={'landlocked'} label={'Landlocked'}>
          <Chip color={countryData?.landlocked ? 'green' : 'red'} text={countryData?.landlocked ? 'Yes' : 'No'} />
        </DetailRow>
      )
    },
    {
      label: 'Border countries',
      value:
        countryData && countryData?.borders?.length > 0 ? (
          <DetailRow key={'Border Countries'} label={'Border Countries'}>
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {countryData.borders.map((border, index) => (
                <Chip
                  key={index}
                  color={'blue'}
                  text={border}
                  onClick={() => router.push(`/country-details?countryCode=${border}`)}
                  icon='mi:external-link'
                />
              ))}
            </Box>
          </DetailRow>
        ) : (
          'N/A'
        )
    },
    {
      label: 'Maps',
      value: (
        <DetailRow key='maps' label='Maps' lastMember>
          <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Chip
              color={'blue'}
              text={'Open Street'}
              onClick={() => window.open(countryData?.maps.openStreetMaps, '_blank')}
              icon='mi:external-link'
            />
            <Chip
              color={'blue'}
              text={'Google Maps'}
              onClick={() => window.open(countryData?.maps.googleMaps, '_blank')}
              icon='mi:external-link'
            />
          </Box>
        </DetailRow>
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Typography sx={{ fontWeight: 800, fontSize: '36px' }}>{countryData?.name?.common}</Typography>
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Geography</Typography>
      <Box
        sx={{
          borderRadius: '8px',
          border: `1px solid ${theme.palette.text.secondary}`,
          bgcolor: settings.mode === 'light' ? '#FFFFFF' : '#2B3743'
        }}
      >
        {geographyData.map((data, index) => (
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

export default Geography
