/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://demo.softswiss.net/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
