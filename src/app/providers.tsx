'use client';

import { useDarkState } from 'Stores';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { theme, darktheme } from 'styles/theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  const { isDark } = useDarkState();

  return (
    <ThemeProvider theme={isDark ? darktheme : theme}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray[0]};
`;