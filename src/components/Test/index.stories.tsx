import A from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'A',
  component: A,
  parameters: {},
} as Meta<typeof A>;

type Story = StoryObj<typeof A>;

export const Primary: Story = {};
