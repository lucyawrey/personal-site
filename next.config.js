/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.ink": { type: "raw" },
      "*.yml": { loaders: ["yaml-loader"], as: "*.js" },
    },
  },
};

module.exports = nextConfig;
