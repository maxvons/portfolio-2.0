/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "variables"; @import "mixins";`,
  },
  images: {
    domains: ["i.scdn.co"],
  },
  async redirects() {
    return [
      {
        source: "/thesis/download",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
