import Modal from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Modal',
  component: Modal,
  parameters: {},
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    show: true,
    onClose: () => {},
    index: '0',
  },
};
