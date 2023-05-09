const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    domains: ['api.betakomerc.rs'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.betakomerc.rs',
      },
    ],
  },
};

module.exports = nextConfig;
