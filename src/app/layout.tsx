'use client';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <title>EveryGSM</title>
      <link rel="icon" href="https://ifh.cc/g/YmvWVp.png" />
      <body>{children}</body>
    </html>
  );
}
