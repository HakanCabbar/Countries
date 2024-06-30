export interface CountryDetailsData {
  flags: {
    png: string
    svg: string
    alt: string
  }
  coatOfArms: {
    png: string
    svg: string
  }
  startOfWeek: string
  postalCode: {
    format: string
    regex: string
  }
  name: {
    common: string
    official: string
    nativeName: {
      cat: {
        official: string
        common: string
      }
    }
  }
  tld: string[]
  independent: boolean
  unMember: boolean
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: {
    [key: string]: string
  }
  landlocked: boolean
  borders: string[]
  area: number
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  timezones: string[]
  continents: string[]
}
