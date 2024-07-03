import '../styles/globals.css'
import Layout from 'src/layout'
import { NextComponentType, NextPageContext } from 'next'
import { SWRConfig } from 'swr'
import { swrDefaultValues } from 'src/configs/swr'
import ThemeComponent from 'src/theme/ThemeComponent'
import { SettingsConsumer, SettingsProvider } from 'src/context/settingsContext'
import { AppProps } from 'next/app'

export interface MyAppProps {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponent settings={settings}>
              <SWRConfig value={swrDefaultValues}>
                <Layout Component={Component} pageProps={pageProps} />
              </SWRConfig>
            </ThemeComponent>
          )
        }}
      </SettingsConsumer>
    </SettingsProvider>
  )
}

export default App
