'use client';
import React from 'react';
import * as C from 'components';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme, darktheme } from 'styles/theme';

function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <ThemeProvider theme={isDark ? darktheme : theme}>
      <C.Nav isDark={isDark} setIsDark={setIsDark} />
      <C.MainContainer isDark={isDark}></C.MainContainer>
      <C.Footer isDark={isDark} />
    </ThemeProvider>
  );
}

export default Home;
