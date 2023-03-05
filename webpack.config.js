module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
