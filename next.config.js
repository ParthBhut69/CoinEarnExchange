const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "cdn.sanity.io","i.gifer.com"],
  },
  trailingSlash: true,
};

module.exports = withBundleAnalyzer(nextConfig);
