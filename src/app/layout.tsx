'use client';
import 'styles/global.css';
import GoogleAnalytics from './googleAnalytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <title>EveryGSM</title>
      <link rel="icon" href="/images/Favicon.png" />
      <body>{children}</body>
    </html>
  );
}
