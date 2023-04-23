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
  breakPoint: {
    mobile: string;
    tablet: string;
  };
  mode: {
    nav: string;
    body: string;
    footer: string;
    toggle: string;
    title: string;
    text: string;
  };
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
  breakPoint: {
    mobile: '38.75rem',
    tablet: '71.875rem',
  },
  mode: {
    nav: '#ffffff',
    body: '#f1f1f5',
    footer: '#e3e3e3',
    toggle: '#ffffff',
    title: '#000000',
    text: '#191919',
  },
} as const;

export const darktheme: ThemeType = {
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
  breakPoint: {
    mobile: '38.75rem',
    tablet: '71.875rem',
  },
  mode: {
    nav: '#191919',
    body: '#191919',
    footer: '#636363',
    toggle: '#999999',
    title: '#ffffff',
    text: '#ffffff',
  },
} as const;
