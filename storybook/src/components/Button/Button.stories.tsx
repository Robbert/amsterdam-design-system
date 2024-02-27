/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, Icon } from '@amsterdam/design-system-react'
import { ShareIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Button label',
    variant: 'primary',
    disabled: false,
    busy: false,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
    disabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const ButtonWithAnIcon: Story = {
  args: {
    children: ['Button label', <Icon key="icon" svg={ShareIcon} size="level-5" />],
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
}