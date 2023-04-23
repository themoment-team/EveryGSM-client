'use client';
import Head from 'next/head';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <title>Every GSM</title>
      <Head>
        <meta property="og:title" content="Every GSM" key="title" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
