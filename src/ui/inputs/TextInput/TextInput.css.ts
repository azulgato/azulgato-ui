import { style } from '@vanilla-extract/css'
import { vars } from '../../../theme/theme.css'
import { recipe } from '@vanilla-extract/recipes'

const textInputBase = {
  borderRadius: '55px 55px 55px 55px',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  //border: 'none',
  border: `2px solid ${vars.color.background.primary}`,
  // background: `linear-gradient(to left, ${vars.color.background.primaryDark} 45%, transparent 55%) right`,
  // backgroundSize: '250% 100%',
  // backgroundPosition: 'left bottom',
  transition: 'all 0.1s ease-in',
  // ':hover': {
  //   backgroundPosition: 'right bottom',
  // },
}

export const textInputStyle = recipe({
  base: textInputBase,
  variants: {
    colorVariant: {
      primary: {
        border: `2px solid ${vars.color.background.primaryLight}`,
        //borderLeft: `2px solid ${vars.color.background.primary}`,
        //borderRight: `2px solid ${vars.color.background.primary}`,
        // color: vars.color.text.primary,
        ':hover': {
          border: `2px solid ${vars.color.background.primary}`,
          //backgroundColor: vars.color.background.primaryDark,
        },
        ':focus': {
          border: `2px solid ${vars.color.background.primaryDark}`,
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

export const labelStyle = recipe({
  base: {
    wordWrap: 'break-word',
  },
  variants: {
    colorVariant: {
      primary: {},
      secondary: {},
      tertiary: {},
      disabled: {},
      danger: {},
      warning: {},
      success: {},
      info: {},
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

export const containerStyler = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})
