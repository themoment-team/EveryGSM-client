'use client';
import { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

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
