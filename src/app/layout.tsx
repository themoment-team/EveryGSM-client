import 'styles/global.css';

import type { Metadata } from 'next';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

export const metadata: Metadata = {
  applicationName: 'EveryGSM',
  description: '교내 프로젝트를 하나로 연결해주는 서비스.',
  openGraph: {
    title: 'EveryGSM',
    description: '교내 프로젝트를 하나로 연결해주는 서비스.',
    url: 'https://every.hellogsm.kr/',
    siteName: 'EveryGSM',
    images: [
      {
        url: '/public/images/Favicon.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: '/public/images/Favicon.png',
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
      <body>{children}</body>
    </html>
  );
}
