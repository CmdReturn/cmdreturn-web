import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The platform page became the /work case study.
      { source: "/platform", destination: "/work", permanent: true },
      // The institutional page was retired.
      { source: "/institutional", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
