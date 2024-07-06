import axios from 'axios'
import useSWR from 'swr'
import { baseUrl } from 'src/configs/base-url'

import { CountryData } from '../types/get-countries-model'

export default function useGetCountries() {
  const fetcher = async (url: string) => {
    const response = await axios.get(url)

    return response.data
  }

  const { data, mutate, isLoading } = useSWR<CountryData[]>(
    baseUrl + '/all?fields=population,region,capital,languages,flags,name,cca2',
    fetcher
  )

  return { data: data?.slice(0, 100), mutate, isLoading };
}
