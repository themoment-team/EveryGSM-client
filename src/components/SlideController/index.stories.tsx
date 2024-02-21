import SlideController from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'SlideController',
  component: SlideController,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof SlideController>;

type Story = StoryObj<typeof SlideController>;

export const Left: Story = {
  args: {
    direction: 'left',
    onClick: () => {},
  },
};

export const Right: Story = {
  args: {
    direction: 'right',
    onClick: () => {},
  },
};
