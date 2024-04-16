import { Suspense } from 'react';

import Script from 'next/script';

import { NavigationEvents } from 'components';
import { GA_TRACKING_ID } from 'libs';

import Providers from './providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EveryGSM',
  description: '교내 프로젝트를 하나로 연결해주는 서비스.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'nextjs',
    'nextjs13',
    'every',
    'everygsm',
    'gsm',
    '광주소프트웨어마이스터고등학교',
    'GSM',
  ],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#E23C96' }],
  metadataBase: new URL('https://every.hellogsm.kr'),
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  applicationName: 'EveryGSM',
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
