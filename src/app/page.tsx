'use client';
import * as C from 'components';
import { useEffect, useState } from 'react';
import { Container } from './style';
import React from 'react';

interface Props {
  isDark: boolean;
}

function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div>
      <Container>
        <C.Nav isDark={isDark} setIsDark={setIsDark} />
        <C.MainContainer isDark={isDark}></C.MainContainer>
        <C.Footer isDark={isDark} />
      </Container>
    </div>
  );
}

export default Home;
