import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Example of a custom rewrite:
      { source: '/', destination: '/index.html' },
    ];
  },
};

export default nextConfig;
