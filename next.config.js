const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    domains: ['api.beta.jakov.rs'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.beta.jakov.rs',
      },
    ],
  },
};

module.exports = nextConfig;
