const path = require('path');

module.exports = {
  entry: {
    app: './src/app.ts',
    'app-front': './src/app-front.ts',
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
