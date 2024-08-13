const path = require('path');

module.exports = {
  entry: {
    app: './src/app.ts',
    'app-front': './src/app-front.ts',
    'app-product': './src/app-product.ts',
    'app-page': './src/app-page.ts',
    'app-resellers': './src/app-resellers.ts',
    'app-video': './src/app-video-modal.ts',
    'app-article': './src/app-article.ts',
    'app-compare': './src/app-compare.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
