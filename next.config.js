/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'notion.site'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
