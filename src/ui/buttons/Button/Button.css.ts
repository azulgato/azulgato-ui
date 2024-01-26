import { vars } from '../../../theme/theme.css'
import { recipe } from '@vanilla-extract/recipes'

// const rotate = keyframes({
//   '0%': {
//     transform: 'translateY(0) translateZ(0) rotateZ(0deg)',
//   },
//   '100%': {
//     transform: 'translateY(5px) translateZ(-2px) rotateZ(-15deg)',
//   },
// })

// const wave = keyframes({
//   '0%': {
//     transform: 'translate3d(-90px,0,0)',
//   },
//   '100%': {
//     transform: 'translate3d(85px,0,0)',
//   },
// })

const buttonBase = {
  borderRadius: '55px 55px 55px 55px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(to left, ${vars.color.background.primaryDark} 45%, transparent 55%) right`,
  backgroundSize: '250% 100%',
  backgroundPosition: 'left bottom',
  transition: 'all 0.1s ease-in',
  ':hover': {
    backgroundPosition: 'right bottom',
  },
}

export const buttonStyle = recipe({
  base: buttonBase,
  variants: {
    buttonVariant: {
      primary: {
        backgroundColor: vars.color.background.primary,
        color: vars.color.text.primary,
        ':hover': {
          //backgroundColor: vars.color.background.primaryDark,
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: `2px solid ${vars.color.background.primary}`,
        color: vars.color.background.primary,
        ':hover': {
          //backgroundColor: vars.color.background.primary,
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
        //animation: `${rotate} 0.3s forwards`,
      },
      false: {
        //animation: `${rotate2} 0.7s forwards`,
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
