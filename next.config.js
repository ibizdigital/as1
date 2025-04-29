/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;