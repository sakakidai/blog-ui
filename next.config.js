module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', process.env.IMAGE_STORAGE],
  },
  async redirect() {
    return {
      source: '/',
      destination: '/blogs',
      permanent: true,
    };
  },
};
