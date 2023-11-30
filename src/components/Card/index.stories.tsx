import Card from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    data: {
      id: '0',
      projectName: 'Hello, GSM',
      projectDescription:
        'Hello, GSM은 광주소프트웨어마이스터고등학교 입학 지원시스템입니다.',
      projectLogoUri: '/images/projects/Hello,gsm.png',
      createrDescription:
        'https://themoment-team.notion.site/2b3875e62b2a4002beb9db71c85db262',
      projectUrl: 'https://www.hellogsm.kr',
      githubRepoURL: ['https://github.com/themoment-team/hello-gsm-about'],
      githubURL: 'https://github.com/themoment-team',
      githubProfileURL: 'https://github.com/themoment-team.png',
      createrName: '더모먼트',
      categories: ['NextJS', 'NestJS', 'React'],
      serviceType: 'public',
    },
  },
};
