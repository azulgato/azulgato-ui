import { keyframes } from '@vanilla-extract/css'
import { vars } from '../../../theme/theme.css'
import { recipe } from '@vanilla-extract/recipes'

const rotate = keyframes({
  '0%': {
    transform: 'translateY(0) translateZ(0) rotateZ(0deg)',
  },
  '100%': {
    transform: 'translateY(5px) translateZ(-2px) rotateZ(-15deg)',
  },
})

const rotate2 = keyframes({
  '0%': {
    transform: 'translateY(5px) translateZ(-2px) rotateZ(-15deg)',
  },
  '100%': {
    transform: 'translateY(0) translateZ(0) rotateZ(0deg)',
  },
})

const buttonBase = {
  borderRadius: '15px 5px 15px 5px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const buttonStyle = recipe({
  base: buttonBase,
  variants: {
    buttonVariant: {
      primary: {
        backgroundColor: vars.color.background.primary,
        color: vars.color.text.primary,
        ':hover': {
          backgroundColor: vars.color.background.primaryDark,
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: `2px solid ${vars.color.background.primary}`,
        color: vars.color.background.primary,
        ':hover': {
          backgroundColor: vars.color.background.primary,
          color: vars.color.text.primary,
        },
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
        backgroundColor: vars.color.background.danger,
        color: vars.color.text.primary,
        ':hover': {
          backgroundColor: vars.color.background.dangerDark,
        },
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
    hoveredAnimation: {
      true: {
        animation: `${rotate} 0.3s forwards`,
      },
      false: {
        animation: `${rotate2} 0.7s forwards`,
      },
      none: {},
    },
    paddingVariant: {
      s: {
        padding: '4px 8px',
      },
      m: {
        padding: '8px 16px',
      },
      l: {
        padding: '16px 32px',
      },
      none: {},
    },
  },
})
