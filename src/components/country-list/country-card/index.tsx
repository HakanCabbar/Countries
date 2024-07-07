// ** MUI Imports
import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material'

// ** Custom Component Imports
import Icon from 'src/components/shared/icon'

// ** Hook Imports
import { useSettings } from 'src/hooks/useSettings'

interface CountryCardProps {
  cardData: {
    countryName: string
    population: number
    region: string
    capital: string
    language: string
    flagUrl: string
  }
  onClick: () => void
}

const CountryCard = ({ cardData, onClick }: CountryCardProps) => {
  // ** Hooks
  const { settings } = useSettings()
  const theme = useTheme()

  // ** Variables

  const { countryName, population, region, capital, language, flagUrl } = cardData

  const cardDataList = [
    { icon: 'mdi:users-outline', text: 'Population', data: population },
    { icon: 'mdi:map-outline', text: 'Region', data: region },
    { icon: 'mdi:city-variant-outline', text: 'Capital', data: capital },
    { icon: 'mdi:language', text: 'Language', data: language }
  ]

  return (
    <Card
      sx={{
        borderRadius: '8px',
        border: `1px solid ${theme.palette.text.secondary}`,
        width: '100%',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease-in-out',
        ':hover': {
          boxShadow: `5px 5px 20px ${theme.palette.text.secondary}`
        }
      }}
      onClick={onClick}
    >
      <Box sx={{ height: '250px' }}>
        {
          <img
            src={flagUrl}
            alt={`${countryName} flag`}
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        }
      </Box>
      <Box
        sx={{
          borderBlock: `1px solid ${theme.palette.text.secondary}`,
          padding: '1.5rem',
          fontWeight: 700,
          fontSize: '1rem',
          height:'2rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {countryName}
      </Box>

      {cardDataList.map((data, index) => (
        <Box
          key={index}
          sx={{ paddingX: '1rem', paddingY: '0.5rem', display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Icon icon={data.icon} fontSize={20} color={settings.mode === 'light' ? '#777777' : '#C5C5C5'} />
            <Typography color={settings.mode === 'light' ? '#777777' : '#C5C5C5'}>{data.text}</Typography>
          </Box>
          <Box sx={{ fontSize: '16px', fontWeight: 700 }}>{data.data}</Box>
        </Box>
      ))}
    </Card>
  )
}

export default CountryCard
