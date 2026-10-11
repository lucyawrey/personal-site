/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      // Import ink stories as their source text.
      "*.ink": { type: "raw" },
    },
  },
};

module.exports = nextConfig;
