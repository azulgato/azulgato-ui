import { createTheme, createThemeContract } from '@vanilla-extract/css'
import { lightTheme } from './defaultTheme'

export const vars = createThemeContract({
  color: {
    brand: '',
    backgroundColor: '',
    background: {
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
  font: {
    body: 'helvetica',
  },
})
