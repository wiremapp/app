/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV == "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: prod ? false : true,
});

module.exports = withPWA(nextConfig);
