import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

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
      {
        source: '/Servizi',
        destination: '/servizi',
        permanent: true,
      },
      {
        source: '/Contatti',
        destination: '/contatti',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;