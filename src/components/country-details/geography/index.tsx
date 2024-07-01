import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { DetailRow } from '../detail-row'
import useGetCountryDetails from 'src/services/hooks/useGetCountryDetail'
import Chip from 'src/components/shared/chip'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useSettings } from 'src/hooks/useSettings'
import FunctionalChip from 'src/components/shared/functional-chip'

const Geography = () => {
  const router = useRouter()
  const { settings } = useSettings()

  const theme = useTheme()

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const { data: countryData } = useGetCountryDetails({
    filterValue: router.query.countryCode as string,
    fields: 'continents,region,subregion,area,population,landlocked,borders,maps'
  })

  console.log(countryData, 'xd')

  const geographyData = [
    {
      label: 'Continent',
      value: countryData?.continents?.[0]
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
      value: countryData?.area
    },
    {
      label: 'Population',
      value: countryData?.population?.toLocaleString()
    },
    {
      label: 'Landlocked',
      value: countryData?.landlocked ? 'Yes' : 'No'
    },
    {
      label: 'Border countries',
      value: countryData?.borders ? (
        <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {countryData.borders.map((border, index) => (
            <FunctionalChip
              key={index}
              bgColor='#E6F2FD'
              textColor='#007BE5'
              text={border}
              icon='mi:external-link'
              onClick={() => router.push(`/country-details?countryCode=${border}`)}
            />
          ))}
        </Box>
      ) : (
        'N/A'
      )
    },

    {
      label: 'Maps',
      value: countryData?.maps ? (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <FunctionalChip
            bgColor='#E6F2FD'
            textColor='#007BE5'
            text='Google Maps'
            icon='mi:external-link'
            onClick={() => window.open(countryData.maps.googleMaps, '_blank')}
          />
          <FunctionalChip
            bgColor='#E6F2FD'
            textColor='#007BE5'
            text='Open Street Maps'
            icon='mi:external-link'
            onClick={() => window.open(countryData.maps.openStreetMaps, '_blank')}
          />
        </Box>
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
            {index === geographyData.length - 3 ? (
              <DetailRow key={index} label={data.label} isLastMember={false}>
                <Chip color={data.value === 'Yes' ? 'green' : 'red'} text={data.value as string} />
              </DetailRow>
            ) : (
              <DetailRow key={index} label={data.label} value={data.value as any} isLastMember={false} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Geography
