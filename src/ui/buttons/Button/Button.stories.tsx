import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      defaultValue: 'Button',
    },
    paddingVariant: {
      options: ['s', 'm', 'l', 'none'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    backgroundVariant: 'primary',
    label: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    backgroundVariant: 'secondary',
    label: 'Secondary',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
  },
}
