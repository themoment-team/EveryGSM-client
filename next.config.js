/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV === 'development';

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: isDevelopment,
});

const nextConfig = withPWA({
  images: {
    domains: ['github.com', 'notion.site'],
  },
});

module.exports = nextConfig;
