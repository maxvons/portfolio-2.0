/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "variables"; @import "mixins";`,
  },
  images: {
    domains: ["i.scdn.co"],
  },
};

module.exports = nextConfig;
