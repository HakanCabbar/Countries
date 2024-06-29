import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import CountryCard from 'src/components/country-card'
import useGetCountries from 'src/services/hooks/useGetCountries'
import Autocomplete from '@mui/material/Autocomplete'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import useGetCountriesByRegion from 'src/services/hooks/useGetCountriesByRegion'

const Home = () => {
  // ** States
  const [region, setRegion] = useState('none')

  const { data: countriesData, isLoading: countriesLoading } = useGetCountries()

  const { data: regionCountriesData } = useGetCountriesByRegion(region)

  const manipulatedCountryData = (region !=='none' ? regionCountriesData : countriesData)?.map(country => ({
    countryName: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital[0],
    language: Object.values(country.languages)[0],
    flagUrl: country.flags.svg
  }))

  console.log(regionCountriesData)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Box sx={{ display: 'flex', gap: '2rem', paddingRight: '1rem' }}>
        <Autocomplete
          disablePortal
          options={countriesData?.map(country => country.name.common) as string[]}
          sx={{ width: '80%' }}
          renderInput={params => <TextField {...params} label='Search by Country Name' />}
        />
        <Select value={region} sx={{ width: '20%' }} onChange={e => setRegion(e.target.value)}>
          <MenuItem value='none'>None</MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'America'}>America</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
        </Select>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {manipulatedCountryData?.map(country => (
          <CountryCard key={country.countryName} cardData={country} />
        ))}
      </Box>
    </Box>
  )
}

export default Home
