import axios from 'axios'
import useSWR from 'swr'
import { baseUrl } from 'src/configs/base-url'
import { CountryDetailsData } from '../types/get-country-details-model'

interface FilterParams {
  filterValue?: string
  fields: string
}

export default function useGetCountryDetails(params: FilterParams) {
  const fetcher = async (url: string) => {
    const response = await axios.get(url, {
      params: { fields: params.fields }
    })

    return response.data
  }

  const { data, mutate, isLoading } = useSWR<CountryDetailsData>(
    params.filterValue ? [baseUrl + `/alpha/${params.filterValue}`, params] : null,
    ([url]) => fetcher(url)
  )

  return { data, mutate, isLoading }
}
