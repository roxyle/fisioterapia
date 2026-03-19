import type { NextConfig } from "next";

const isProd = process.env.IS_PRODUCTION === 'true'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    if (!isProd) return []
    return [
      {
        source: '/About',
        destination: '/chi-siamo',
        permanent: true,
      },

    ]
  },
};

export default nextConfig;