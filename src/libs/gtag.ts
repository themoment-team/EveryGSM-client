export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// 페이지뷰 이벤트 전송
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID as string, {
    page_path: url,
  });
};

// 이벤트 전송
export const event = (
  action: Gtag.EventNames,
  eventParams: Gtag.EventParams,
) => {
  window.gtag('event', action, eventParams);
};
