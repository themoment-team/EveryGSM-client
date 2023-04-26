'use client';
import 'styles/global.css';
import { ThemeProvider } from '@emotion/react';
import { theme, darktheme } from 'styles/theme';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useDarkState from 'Stores/useDarkStore';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDark } = useDarkState();
  const { replace } = useRouter();

  useEffect(() => {
    window.innerWidth < 1300 && replace('/preparing');
    window.onresize = () => {
      window.innerWidth < 1300 && replace('/preparing');
    };
  }, []);

  return (
    <html lang="ko">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <title>EveryGSM</title>
      <link rel="icon" href="/images/Favicon.png" />
      <body>
        <ThemeProvider theme={isDark ? darktheme : theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
