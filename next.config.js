module.exports = {
  reactStrictMode: true,
  distDir: '_next',
  basePath: '/calendar',
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/calendar/:path*',
      },
    ]
  },
};
