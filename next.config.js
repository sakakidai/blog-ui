module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', process.env.IMAGE_STORAGE],
    minimumCacheTTL: 86400,
  },
};
