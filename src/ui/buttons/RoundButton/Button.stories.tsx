import type { Meta, StoryObj } from '@storybook/react'

import { RoundButton } from './RoundButton'
import { Plus } from '../../icons/plus'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'ui/RoundButton',
  component: RoundButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    paddingVariant: {
      options: ['s', 'm', 'l', 'none'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof RoundButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    backgroundVariant: 'primary',
    icon: <Plus />,
  },
}

export const Secondary: Story = {
  args: {
    backgroundVariant: 'secondary',
    icon: <Plus />,
  },
}

export const Large: Story = {
  args: {
    icon: <Plus />,
  },
}

export const Small: Story = {
  args: {
    icon: <Plus />,
  },
}
