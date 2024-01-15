import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from '../src/theme/ThemeContext'

import '../app/globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FBF7FF',
        },
        {
          name: 'dark',
          value: '#3b5998',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
