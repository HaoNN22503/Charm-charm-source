/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

module.exports = withVideos({
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    serverActions: true,
  },
});
