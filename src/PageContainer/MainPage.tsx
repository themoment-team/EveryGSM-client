'use client';
import { useState } from 'react';
import * as C from 'components';
import { Container } from './style';

const MainPage = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <Container>
      <C.Nav isDark={isDark} setIsDark={setIsDark} />
      {children}
      <C.Footer />
    </Container>
  );
};

export default MainPage;
