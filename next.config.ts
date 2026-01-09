import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    ],
  },
  serverExternalPackages: [],
  allowedDevOrigins: ['*'],
};

export default nextConfig;
