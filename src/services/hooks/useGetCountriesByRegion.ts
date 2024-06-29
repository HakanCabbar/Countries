import axios from 'axios'
import useSWR from 'swr'
import { baseUrl } from 'src/configs/base-url'

import { CountryData } from '../types/get-countries-model'

export default function useGetCountriesByRegion(region: string) {
  const fetcher = async (url: string) => {
    const response = await axios.get(url)

    return response.data
  }

  const { data, mutate, isLoading } = useSWR<CountryData[]>(
    baseUrl + `/region/${region}?fields=population,region,capital,languages,flags,name`,
    fetcher
  )

  return { data: data, mutate, isLoading }
}
