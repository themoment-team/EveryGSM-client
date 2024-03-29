import { Suspense } from 'react';

import Script from 'next/script';

import { NavigationEvents } from 'components';
import { GA_TRACKING_ID } from 'libs';

import Providers from './providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://every.hellogsm.kr'),
  applicationName: 'EveryGSM',
  title: 'EveryGSM',
  description: '교내 프로젝트를 하나로 연결해주는 서비스.',
  openGraph: {
    title: 'EveryGSM',
    description: '교내 프로젝트를 하나로 연결해주는 서비스.',
    url: 'https://every.hellogsm.kr/',
    siteName: 'EveryGSM',
    images: [
      {
        url: '/images/openGraph.jpg',
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: '/images/Favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
