const nextConfig = {
  reactStrictMode: true,

  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },

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
