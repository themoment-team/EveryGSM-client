import GoogleAnalytics from './googleAnalytics';
export default function Head() {
  return (
    <>
      <title></title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
    </>
  );
}
