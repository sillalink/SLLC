import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['assets.aceternity.com' , "sillalink.com" , "www.sillalink.com"],
     remotePatterns: [
    {
      protocol: 'https',
      hostname: 'assets.aceternity.com',
    },
    {
      protocol: 'https',
      hostname: 'sillalink.com',
    },
    {
      protocol: 'https',
      hostname: 'www.sillalink.com',
    },
  ],
  },
};

export default nextConfig;
