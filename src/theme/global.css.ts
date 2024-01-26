import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'
import { globalVars } from './globalVars'

export const globalStyles = style({
  vars: {
    [globalVars.primary]: vars.color.background.primary,
    [globalVars.primaryLight]: vars.color.background.primaryLight,
    [globalVars.radiusLg]: vars.radius.lg,
    [globalVars.radiusMd]: vars.radius.md,
    [globalVars.radiusSm]: vars.radius.sm,
  },
})
