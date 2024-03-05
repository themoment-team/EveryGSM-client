import { Device } from 'utils';

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

enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
}

export const Left: Story = {
  args: {
    direction: Direction.LEFT,
    onClick: () => {},
    view: Device.TABLET,
  },
};

export const Right: Story = {
  args: {
    direction: Direction.RIGHT,
    onClick: () => {},
    view: Device.TABLET,
  },
};

export const PC: Story = {
  args: {
    direction: Direction.RIGHT,
    onClick: () => {},
    view: Device.PC,
  },
};
