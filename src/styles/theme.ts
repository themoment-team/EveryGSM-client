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
  exception: {
    card: string;
    cardTitle: string;
    creater: string;
    categories: string;
    footText: string;
    nav: string;
    navTitle: string;
    toggle: string;
    modalTitle: string;
    desc: string;
    teamTitle: string;
    back: string;
  };
}

export const darkTheme: ThemeType = {
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
  breakPoint: {
    mobile: '620px',
    tablet: '1150px',
  },
  exception: {
    card: '#505050',
    cardTitle: '#ffffff',
    creater: '#e3e3e3',
    categories: '#f1f1f5',
    back: '#636363',
    footText: '#ffffff',
    nav: '#191919',
    navTitle: '#ffffff',
    toggle: '#999999',
    modalTitle: '#ffffff',
    desc: '#f1f1f5',
    teamTitle: '#f1f1f5',
  },
} as const;

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
    mobile: '620px',
    tablet: '1150px',
  },

  exception: {
    card: '#ffffff',
    cardTitle: '#000000',
    creater: '#999999',
    categories: '#999999',
    back: '#f1f1f5',
    footText: '#191919',
    nav: '#ffffff',
    navTitle: '#000000',
    toggle: '#ffffff',
    modalTitle: '#636363',
    desc: '#636363',
    teamTitle: '#000000',
  },
} as const;
