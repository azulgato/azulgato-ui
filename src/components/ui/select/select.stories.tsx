import type { Meta, StoryObj } from '@storybook/react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'
import React from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'components/inputs/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
  render: (args) => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Placeholder" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Content 1</SelectItem>
        <SelectItem value="dark">this is a long content </SelectItem>
        <SelectItem value="system">
          this is a very damn long and useless content
        </SelectItem>
        <SelectItem value="system">
          this is a very damn long and useless contentthis is a very damn long
          and useless contentthis is a very damn long and useless content
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}
