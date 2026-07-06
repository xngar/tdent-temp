import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow remote images from Unsplash for dental placeholder photos
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Declare all quality values used across components
    qualities: [75, 85, 90],
    // Optimize image formats
    formats: ["image/avif", "image/webp"],
  },

  // Turbopack is the default bundler in Next.js 16 — no explicit config needed
  // (do NOT set webpack config here)

  // Turbopack root configuration
  turbopack: {
    root: __dirname,
  },

  // Experimental features for Next.js 16
  experimental: {
    // Partial prerendering for better performance
    ppr: false,
  },
};

export default nextConfig;
