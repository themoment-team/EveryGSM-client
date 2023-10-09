import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { darkTheme, theme, GlobalStyle } from '../src/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F1F1F5',
        },
        {
          name: 'dark',
          value: '#191919',
        },
      ],
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: theme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyle,
    }),
  ],
};

export default preview;
