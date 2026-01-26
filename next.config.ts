import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/shad-rego-jan-26" : "",
  assetPrefix: isProd ? "/shad-rego-jan-26/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
