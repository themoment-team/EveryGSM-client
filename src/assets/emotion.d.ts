import '@emotion/react';
import { theme } from './theme';

const Type: typeof theme = theme;

declare module '@emotion/react' {
  export interface Theme extends Type {}
}
