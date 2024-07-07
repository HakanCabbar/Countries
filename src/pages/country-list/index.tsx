// ** React Imports
import { useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI
import { Box, TextField, Autocomplete, Select, MenuItem, useMediaQuery, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ** Custom Component Imports
import CountryCard from 'src/components/country-list/country-card'
import NoResults from 'src/components/country-list/no-results'
import Loading from 'src/components/shared/loading'

// ** Hook Imports
import useGetCountries from 'src/services/hooks/useGetCountries'
import useGetCountriesWithFilter from 'src/services/hooks/useGetCountriesWithFilter'

const CountriesList = () => {
  // ** States
  const [countryRegion, setCountryRegion] = useState('none')
  const [countryName, setCountryName] = useState<string | null>(null)

  // ** Hooks
  const theme = useTheme()
  const router = useRouter()

  const { data: countriesData, isLoading: countriesLoading } = useGetCountries()

  const { data: regionCountriesData, isLoading: regionCountriesLoading } = useGetCountriesWithFilter({
    filterKey: countryName !== null ? 'name' : 'region',
    filterValue: countryName !== null ? countryName : countryRegion,
    fields: 'name,population,region,capital,languages,flags,code,cca2'
  })

  // ** Variables
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const sortedCountryNames = countriesData?.map(country => country.name.common).sort()
  const manipulatedCountryData = (
    countryRegion !== 'none' || countryName !== null ? regionCountriesData : countriesData
  )
    ?.map(country => ({
      countryName: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital ? country?.capital[0] : '',
      language: country.languages ? Object.values(country.languages)[0] : '',
      flagUrl: country.flags.svg,
      code: country.cca2
    }))
    .sort((a, b) => a.countryName.localeCompare(b.countryName))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Box sx={{ display: 'flex', gap: '2rem', paddingRight: '1rem', flexWrap: isMediumScreen ? 'wrap' : 'nowrap' }}>
        <Autocomplete
          options={sortedCountryNames ?? ([] as string[])}
          onChange={(event, value) => setCountryName(value !== '' ? value : null)}
          sx={{ width: isMediumScreen ? '100%' : '80%' }}
          renderInput={params => (
            <TextField
              onChange={e => setCountryName(e.target.value !== '' ? e.target.value : null)}
              {...params}
              label='Search by Country Name'
            />
          )}
        />
        <Select
          value={countryRegion}
          sx={{ width: isMediumScreen ? '100%' : '20%' }}
          onChange={e => setCountryRegion(e.target.value)}
        >
          <MenuItem value='none'>None</MenuItem>
          <MenuItem value='Africa'>Africa</MenuItem>
          <MenuItem value='America'>America</MenuItem>
          <MenuItem value='Asia'>Asia</MenuItem>
          <MenuItem value='Europe'>Europe</MenuItem>
        </Select>
      </Box>

      <Grid container spacing={2}>
        {countriesLoading || regionCountriesLoading ? (
          <Box
            sx={{
              width: '100%',
              minHeight: 'calc(100vh - 400px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Loading />
          </Box>
        ) : manipulatedCountryData === undefined ? (
          <Box
            sx={{
              width: '100%',
              minHeight: 'calc(100vh - 400px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <NoResults />
          </Box>
        ) : (
          manipulatedCountryData?.map((country, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CountryCard
                key={country.countryName}
                cardData={country}
                onClick={() => router.push(`/country-details?countryCode=${country.code}`)}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

export default CountriesList
