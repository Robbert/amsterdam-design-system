/* @license CC0-1.0 */

import { Heading } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import '@amsterdam/design-system-css/src/heading/heading.scss'

const meta = {
  title: 'CSS Components/Heading',
  id: 'heading',
  component: Heading,
  argTypes: {
    level: {
      table: {
        disable: true,
      },
    },
    styleLevel: {
      options: [1, 2, 3, 4, 5, 6],
      control: 'select',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
    level: 1,
    styleLevel: 1,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h1 class="amsterdam-heading amsterdam-heading-1">Jouw typograaf biedt mij zulke exquise schreven!</h1>',
      },
    },
  },
}

export const Heading2: Story = {
  args: {
    level: 2,
    styleLevel: 2,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h2 class="amsterdam-heading amsterdam-heading-2">Jouw typograaf biedt mij zulke exquise schreven!</h2>',
      },
    },
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    styleLevel: 3,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h3 class="amsterdam-heading amsterdam-heading-3">Jouw typograaf biedt mij zulke exquise schreven!</h3>',
      },
    },
  },
}

export const Heading4: Story = {
  args: {
    level: 4,
    styleLevel: 4,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h4 class="amsterdam-heading amsterdam-heading-4">Jouw typograaf biedt mij zulke exquise schreven!</h4>',
      },
    },
  },
}

export const Heading5: Story = {
  args: {
    level: 5,
    styleLevel: 5,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h5 class="amsterdam-heading amsterdam-heading-5">Jouw typograaf biedt mij zulke exquise schreven!</h5>',
      },
    },
  },
}

export const Heading6: Story = {
  args: {
    level: 6,
    styleLevel: 6,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h6 class="amsterdam-heading amsterdam-heading-6">Jouw typograaf biedt mij zulke exquise schreven!</h6>',
      },
    },
  },
}