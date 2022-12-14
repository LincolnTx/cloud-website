/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withImages = require('next-images');

module.exports = nextConfig, withImages({
  esModules: true
});
