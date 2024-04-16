import withBundleAnalyzer from "@next/bundle-analyzer";
import process from "process";
import { defineConfig } from "vite";

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});

export default defineConfig({
  ...nextConfig,
  images: { unoptimized: true },
  webpack(config, { isServer }) {
    if (!isServer && process.env.NODE_ENV === "production") {
      config.optimization.minimize = true;
      config.optimization.runtimeChunk = "single";
    }

    return config;
  }
});
