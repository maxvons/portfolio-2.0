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
        destination:
          "https://drive.google.com/file/d/1-b2hzCxrXo5alA0QrUZffEyf3uWHDRSz/view?usp=share_link",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
