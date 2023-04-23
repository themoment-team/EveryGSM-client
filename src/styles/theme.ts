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
  // mode: {
  //   nav: string;
  //   body: string;
  //   footer: string;
  //   toggle: string;
  //   title: string;
  //   text: string;
  //   card: string;
  //   tag: string;
  //   tag_text: string;
  //   icon: string;
  // };
  otherProp?: any;
}

export const theme: ThemeType = {
  gray: [
    '#F1F1F5',
    '#E3E3E3',
    '#D9D9D9',
    '#999999',
    '#F1F1F5',
    '#ffffff',
    '#191919',
    '#ffffff',
    '#ffffff',
    '#000000',
  ],
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
  gray: [
    '#191919',
    '#636363',
    '#e3e3e3',
    '#ffffff',
    '#636363',
    '#484848',
    '#ffffff',
    '#191919',
    '#999999',
    '#ffffff',
  ],
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
