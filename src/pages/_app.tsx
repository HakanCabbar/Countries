'use client'
import '../styles/globals.css'
import { Theme, ThemeProvider } from 'src/context/themeContext'
import Layout from 'src/layout'
import { NextComponentType, NextPageContext } from 'next'
import { SWRConfig } from 'swr'
import { swrDefaultValues } from 'src/configs/swr'

export interface MyAppProps {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}

const App = ({ Component, pageProps }: MyAppProps) => {

  return (
    <SWRConfig value={swrDefaultValues}>
      <ThemeProvider initialMode={'light'}>
        <Layout Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}

export default App
