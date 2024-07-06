import axios from 'axios'
import useSWR from 'swr'
import { baseUrl } from 'src/configs/base-url'

import { CountryData } from '../types/get-countries-model'

interface FilterParams {
  filterKey?: string
  filterValue?: string
  fields: string
}

export default function useGetCountriesWithFilter(params: FilterParams) {
  const fetcher = async (url: string) => {
    const response = await axios.get(url, {
      params: { fields: params.fields }
    })

    return response.data
  }

  const { data, mutate, isLoading } = useSWR<CountryData[]>(
    params.filterValue !== null && params.filterValue !== 'none'
      ? [baseUrl + `/${params.filterKey}/${params.filterValue}`]
      : null,
    fetcher
  )

  return { data: data?.slice(0, 100), mutate, isLoading }
}
