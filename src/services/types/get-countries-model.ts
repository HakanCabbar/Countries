

export interface CountryData {
  flags: {
    png: string
    svg: string
    alt: string
  }
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  capital: string[]
  region: string
  languages: {
    [key: string]: string
  }
  population: number
}
