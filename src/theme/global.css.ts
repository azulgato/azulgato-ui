import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'
import { globalVars } from './globalVars'

export const globalStyles = style({
  vars: {
    [globalVars.primary]: vars.color.background.primary,
  },
})
