import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/installation",
        destination: "/installation-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
