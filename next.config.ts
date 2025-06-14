const withNetlify = require('@netlify/next');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withNetlify(nextConfig);
