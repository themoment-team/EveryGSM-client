import Category from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Category',
  component: Category,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof Category>;

type Story = StoryObj<typeof Category>;

export const Dark: Story = {
  args: {
    category: 'NextJS',
    isDark: true,
  },
};

export const Light: Story = {
  args: {
    category: 'NextJS',
    isDark: true,
  },
};
