'use client';
import * as C from 'components';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme, darktheme } from 'styles/theme';
import { NextSeo } from 'next-seo';

function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth < 1300 && (window.location.href = '/preparing');
    window.onresize = () => {
      window.innerWidth < 1300 && (window.location.href = '/preparing');
    };
  }, []);

  return (
    <ThemeProvider theme={isDark ? darktheme : theme}>
      <NextSeo
        title="EveryGSM"
        description="GSM의 프로젝트들을 한 곳에 모아 트래픽을 집중 시키기 위한 서비스입니다."
        openGraph={{
          type: 'website',
          url: 'https://every.hellogsm.kr/',
          title: 'EveryGSM',
          description:
            'GSM의 프로젝트들을 한 곳에 모아 트래픽을 집중 시키기 위한 서비스입니다.',
          images: [
            {
              url: 'https://ifh.cc/g/YmvWVp.png',
              width: 800,
              height: 400,
            },
          ],
        }}
      />
      <C.Nav isDark={isDark} setIsDark={setIsDark} />
      <C.MainContainer isDark={isDark} />
      <C.Footer isDark={isDark} />
    </ThemeProvider>
  );
}

export default Home;
