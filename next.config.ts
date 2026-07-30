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

  // Experimental features for Next.js 16
  experimental: {
    // Partial prerendering for better performance
    ppr: false,
  },
};

export default nextConfig;
