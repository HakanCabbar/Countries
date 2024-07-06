import { useContext } from 'react'
import { SettingsContext, SettingsContextValue } from 'src/context/settingsContext'

export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
