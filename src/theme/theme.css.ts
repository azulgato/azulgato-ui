import { createTheme, createThemeContract } from '@vanilla-extract/css'
import { lightTheme } from './defaultTheme'

export const vars = createThemeContract({
  color: {
    brand: '',
    backgroundColor: '',
    background: {
      primaryLight: '',
      primary: '',
      primaryDark: '',
      secondary: '',
      danger: '',
      dangerDark: '',
    },
    text: {
      primary: '',
      secondary: '',
    },
  },
  radius: {
    lg: '',
    md: '',
    sm: '',
  },
  font: {
    body: '',
  },
})

export const lightThemeClass = createTheme(vars, lightTheme)

export const darkThemeClass = createTheme(vars, {
  color: {
    brand: 'red',
    backgroundColor: '#000000',
    background: {
      primaryLight: '',
      primary: '',
      primaryDark: '',
      secondary: '',
      danger: '',
      dangerDark: '',
    },
    text: {
      primary: '',
      secondary: '',
    },
  },
  radius: {
    lg: '',
    md: '',
    sm: '',
  },
  font: {
    body: 'helvetica',
  },
})
