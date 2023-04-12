'use client';
import * as C from 'components';
import { useState } from 'react';
import React from 'react';

function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <>
      <C.Nav isDark={isDark} setIsDark={setIsDark} />
      <C.MainContainer isDark={isDark}></C.MainContainer>
      <C.Footer isDark={isDark} />
    </>
  );
}

export default Home;
