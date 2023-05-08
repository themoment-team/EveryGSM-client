declare global {
  interface Window {
    gtag?: any;
  }
}
export const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

// 페이지뷰 이벤트 전송
export const pageview = (url: any) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// 이벤트 전송
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: any;
  category: any;
  label: any;
  value: any;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
