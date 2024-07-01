import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { DetailRow } from '../detail-row'
import useGetCountryDetails from 'src/services/hooks/useGetCountryDetail'
import Chip from 'src/components/shared/chip'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useSettings } from 'src/hooks/useSettings'

const GeneralInformation = () => {
  const router = useRouter()
  const { settings } = useSettings()

  const theme = useTheme()

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const { data: generalInformation } = useGetCountryDetails({
    filterValue: router.query.countryCode as string,
    fields: 'altSpellings,name,capital,population,languages,currencies,flags'
  })

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
      value: Object.keys(generalInformation?.currencies || {})
        .map(code => `${generalInformation?.currencies[code]?.name} (${generalInformation?.currencies[code]?.symbol})`)
        .join(', ')
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
        <Typography sx={{ fontWeight: 800, fontSize: '36px' }}>{generalInformation?.name?.common}</Typography>
        <img
          src={generalInformation?.flags?.svg}
          alt={`${generalInformation?.name?.common} Flag`}
          height={24}
          width={36}
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
            {index === generalInformationData.length - 1 ? (
              <DetailRow key={index} label={data.label} isLastMember>
                <Chip color='blue' text={data.value as string} />
              </DetailRow>
            ) : (
              <DetailRow key={index} label={data.label} value={data.value} isLastMember={false} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default GeneralInformation
