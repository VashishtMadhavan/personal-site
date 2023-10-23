// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    output: "export",
    basePath: "/",
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;