'use client';
import 'styles/global.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from 'lib/gtag';
import Script from 'next/script';
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></Script>
        <Script
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
      <body>{children}</body>
    </html>
  );
}
