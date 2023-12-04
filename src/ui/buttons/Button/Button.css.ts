import { vars } from '../../../theme/theme.css'
import { recipe } from '@vanilla-extract/recipes'

const buttonBase = {
  borderRadius: '50px',
  padding: '8px 16px',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.8,
  },
}

export const buttonStyle = recipe({
  base: buttonBase,
  variants: {
    buttonVariant: {
      primary: {
        backgroundColor: vars.color.background.primary,
        color: vars.color.text.primary,
      },
      secondary: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
      },
      tertiary: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
      },
      disabled: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
      },
      danger: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
      },
      warning: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
      },
      success: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
      },
      info: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
      },
    },
    size: {
      s: {
        fontSize: '12px',
      },
      m: {
        fontSize: '16px',
      },
      l: {
        fontSize: '24px',
      },
    },
  },
})
