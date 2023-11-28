import SearchBar from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'SearchBar',
  component: SearchBar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof SearchBar>;

type Story = StoryObj<typeof SearchBar>;

export const Primary: Story = {};
