'use client'

import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { DetailRow } from '../detail-row'
import useGetCountryDetails from 'src/services/hooks/useGetCountryDetail'
import Chip from 'src/components/shared/chip'
import { useTheme as useMuiTheme } from '@mui/material/styles'
import { useTheme } from 'src/context/themeContext'
import router, { useRouter } from 'next/router'

const GeneralInformation = () => {
  const router = useRouter()
  const theme = useMuiTheme()
  const { mode } = useTheme()

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const { data: countryData } = useGetCountryDetails({
    filterValue: router.query.countryName as string,
    fields: 'altSpellings,name,capital,population,languages,currencies,flags'
  })

  const generalInformationData = [
    {
      label: 'Official name',
      value: countryData?.name?.official
    },
    {
      label: 'Common name',
      value: countryData?.name?.common
    },
    {
      label: 'Alternative spellings',
      value: countryData?.altSpellings?.join(', ')
    },
    {
      label: 'Capital',
      value: countryData?.capital?.join(', ')
    },
    {
      label: 'Population',
      value: countryData?.population?.toLocaleString()
    },
    {
      label: 'Language',
      value: Object.values(countryData?.languages || {}).join(', ')
    },
    {
      label: 'Currencies',
      value: Object.keys(countryData?.currencies || {})
        .map(code => `${countryData?.currencies[code]?.name} (${countryData?.currencies[code]?.symbol})`)
        .join(', ')
    }
  ]

  return (
    <Box sx={{width:isMediumScreen? '80%':isSmallScreen?'100%':'60%', margin:'auto'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Typography sx={{ fontWeight: 800, fontSize: '36px' }}>{countryData?.name?.common}</Typography>
        <img src={countryData?.flags?.svg} alt={`${countryData?.name?.common} Flag`} height={24} width={36} />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>General Information</Typography>
      <Box
        sx={{
          borderRadius: '8px',
          border: `1px solid ${theme.palette.text.secondary}`,
          bgcolor: mode === 'light' ? '#FFFFFF' : '#2B3743'
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
