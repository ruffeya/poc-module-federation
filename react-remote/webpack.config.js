/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 8081,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'Remote',
      filename: 'remoteEntry.js',
      exposes: {
        './ActionsForm': './src/ActionsForm/index.tsx',
        './ActionsList': './src/ActionsList.tsx',
        './actionTypes': './src/types/actionTypes.ts'
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '19.x' },
        "react-dom": { singleton: true, eager: true, requiredVersion: '19.x' },
        "@mui/material": { singleton: true, eager: true },
        "@mui/system": { singleton: true, eager: true },
        "@emotion/react": { singleton: true, eager: true },
        "@emotion/styled": { singleton: true, eager: true },
      },
    }),
  ],
};
