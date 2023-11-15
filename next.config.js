/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;
