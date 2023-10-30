import Banner from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {};
