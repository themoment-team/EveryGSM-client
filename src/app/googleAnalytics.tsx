'use client';
import Script from 'next/script';
import * as gtag from 'lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: any }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
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
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_TRACKING_ID});
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
