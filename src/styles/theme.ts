export interface ThemeType {
  color: {
    gray: readonly string[];
    primary: {
      magenta: string;
      pale_yellow: string;
    };
    secondary: {
      vivid_yellow: string;
      dusty_blue: string;
      navy_blue: string;
    };
  };
  breakPoint: {};
  dark: {
    color: {
      charcoal: string;
      medium_gray: string;
      slate_gray: string;
      white: string;
    };
  };
  basic: {
    color: {
      white: string;
      light_gray: string;
      light_silver: string;
      charcoal: string;
      black: string;
    };
  };
  otherProp?: any;
}

const theme: ThemeType = {
  color: {
    gray: ['#F1F1F5', '#E3E3E3', '#999999', '#636363', '#191919'],
    primary: {
      magenta: '#E23C96',
      pale_yellow: '#FFE870',
    },
    secondary: {
      vivid_yellow: '#FFE900',
      dusty_blue: '#7090B0',
      navy_blue: '#225087',
    },
  },
  breakPoint: {},
  dark: {
    color: {
      charcoal: '#191919',
      medium_gray: '#999999',
      slate_gray: '#636363',
      white: '#FFFFFF',
    },
  },
  basic: {
    color: {
      white: '#FFFFFF',
      light_gray: '#F1F1F5',
      light_silver: '#E3E3E3',
      charcoal: '#191919',
      black: '000000',
    },
  },
} as const;

export default theme;
