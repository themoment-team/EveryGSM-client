export interface ThemeType {
  color: {
    gray: readonly string[];
  };
  breakPoint: {};
  otherProp?: any;
}

const theme: ThemeType = {
  color: {
    gray: ['#F1F1F5', '#E3E3E3', '#999999', '#636363', '#191919'],
  },
  breakPoint: {},
} as const;
export default theme;
