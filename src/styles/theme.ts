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
  mode: {
    nav: string;
    body: string;
    footer: string;
    toggle: string;
    title: string;
    text: string;
    card: string;
    modal: string;
    category: string;
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
  breakPoint: {},
  mode: {
    nav: '#ffffff',
    body: '#f1f1f5',
    footer: '#e3e3e3',
    toggle: '#ffffff',
    title: '#000000',
    text: '#191919',
    card: '#ffffff',
    modal: '#FFFFFF',
    category: '#999999',
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
  breakPoint: {},
  mode: {
    nav: '#191919',
    body: '#191919',
    footer: '#636363',
    toggle: '#999999',
    title: '#ffffff',
    text: '#ffffff',
    card: '#484848',
    modal: '#191919',
    category: '#636363',
  },
} as const;
