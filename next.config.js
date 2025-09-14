/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ink$/i,
      type: "asset/source",
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
