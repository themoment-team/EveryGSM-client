export interface ThemeType {
  color: {
    gray: readonly string[];
  };
  breakPoint: {};
  dark: {
    dark_div: {
      background: string;
    };
    dark_text: {
      color: string;
    };
    dark_footer: {
      background: string;
    };
  };
  otherProp?: any;
}

const theme: ThemeType = {
  color: {
    gray: ['#F1F1F5', '#E3E3E3', '#999999', '#636363', '#191919'],
  },
  breakPoint: {},
  dark: {
    dark_div: {
      background: '#191919',
    },
    dark_text: {
      color: 'white',
    },
    dark_footer: {
      background: '#636363',
    },
  },
} as const;
export default theme;
