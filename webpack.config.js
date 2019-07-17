const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const mode = process.env.NODE_ENV || 'development';
  const isProduction = mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      app: [path.resolve(__dirname, 'src/App.tsx')],
    },
    output: {
      filename: isProduction ? 'bundle.[chunkhash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
      },
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
  };
};
