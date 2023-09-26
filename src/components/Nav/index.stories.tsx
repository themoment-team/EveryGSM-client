import Nav from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Nav',
  component: Nav,
  parameters: {},
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

export const Primary: Story = {
  args: {},
};
