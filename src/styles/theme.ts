export interface ThemeType {
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
  breakPoint: {};
  otherProp?: any;
}

export const theme: ThemeType = {
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
  breakPoint: {},
} as const;

export const darktheme: ThemeType = {
  gray: ['#191919', '#636363', '#999999', '#E3E3E3', '#F1F1F5'],
  primary: {
    magenta: '#E23C96',
    pale_yellow: '#FFE870',
  },
  secondary: {
    vivid_yellow: '#FFE900',
    dusty_blue: '#7090B0',
    navy_blue: '#225087',
  },
  breakPoint: {},
} as const;