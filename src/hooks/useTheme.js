import { useContext } from 'react'
import { ThemeContext } from '../App'

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeContext.Provider')
  }
  return context
}
