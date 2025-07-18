import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
