import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from './TextInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'ui/inputs/TextInput',
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      defaultValue: 'TextInput',
    },
    paddingVariant: {
      options: ['s', 'm', 'l', 'none'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    backgroundVariant: 'primary',
    label: 'Input Primary',
  },
}

export const Secondary: Story = {
  args: {
    backgroundVariant: 'secondary',
    label: 'Input Secondary',
  },
}
