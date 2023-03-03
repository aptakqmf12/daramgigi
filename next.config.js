/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: ".",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["item.kakaocdn.net"],
  },
};

module.exports = nextConfig;
