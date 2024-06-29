import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { useTheme as useMuiTheme } from '@mui/material/styles'
import Icon from 'src/icon'
import { useTheme } from 'src/context/themeContext'

const CountryCard = () => {
  const theme = useMuiTheme()
  const { mode } = useTheme()

  const cardData = [
    {
      icon: 'mdi:users-outline',
      text: 'Population',
      data: 25
    },
    {
      icon: 'mdi:map-outline',
      text: 'Region',
      data: 50
    },
    {
      icon: 'mdi:city-variant-outline',
      text: 'Capital',
      data: 50
    },
    {
      icon: 'mdi:language',
      text: 'Language',
      data: 50
    }
  ]

  return (
    <Card sx={{ borderColor: theme.palette.text.secondary, borderRadius: '8px', border: '1px', width: '20%' }}>
      <Box
        sx={{
          borderBottom: ` 1px solid ${theme.palette.text.secondary}`,
          padding: '1rem',
          fontWeight: 700,
          fontSize: '24px'
        }}
      >
        Netherlands
      </Box>
      {cardData.map((data, index) => (
        <Box
          key={index}
          sx={{ paddingX: '1rem', paddingY: '0.5rem', display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Icon icon={data.icon} fontSize={20} color={theme.palette.text.secondary} />
            <Typography color={theme.palette.text.secondary}>{data.text}</Typography>
          </Box>
          <Box>{data.data}</Box>
        </Box>
      ))}
    </Card>
  )
}

export default CountryCard
