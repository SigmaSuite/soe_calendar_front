module.exports = {
  reactStrictMode: true,
  distDir: '_next',
  async rewrites() {
    return [
      {
        source: '/calendar',
        destination: '/',
      },
    ]
  },
};
