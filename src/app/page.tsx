'use client';

import { useState } from 'react';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { theme, darktheme } from 'styles/theme';
import * as C from 'components';

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray[0]};
`;

function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDark ? darktheme : theme}>
      <AppWrapper>
        <C.Nav isDark={isDark} setIsDark={setIsDark} />
        <C.MainContainer isDark={isDark} />
        <C.Footer isDark={isDark} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default Home;
