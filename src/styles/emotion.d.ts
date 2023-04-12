import '@emotion/react';
import { ThemeType } from './theme';

// const ThemeType: typeof theme = theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
