const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {

      '/user/**': 'http://localhost:3000',
      '/login/**': 'http://localhost:3000',
      '/callback/**': 'http://localhost:3000',
      historyApiFallback: true,
    },
  },
  //   devServer: {
  //     static: {
  //       publicPath: '/build',
  //       directory: path.resolve(__dirname, 'build'),
  //     },
  //     proxy: {
  //       '/api/sleep': 'http://localhost:3000'
  //     }
  //   }
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './client/main.js',

//     output : {
//         path: path.resolve(__dirname, './build'),
//         filename: 'bundle.js',
//     },
//     plugins: [new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, './index.html')
//     })],
//     devServer: {
//         host: 'localhost',
//         // port: 3000,
//         port: 8080,
//         proxy: {
//           // '/': 'http://localhost:3000',
//           '/api/**': 'http://localhost:3000',
//         historyApiFallback: true
//         }
//     },
//     mode: process.env.NODE_ENV,

//     module: {
//         rules: [
//             {
//               // test: /\.jsx?/,
//               test: /\.(js|jsx)$/,
//               exclude: /node_modules/,
//               use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: [
//                         ['@babel/env', { targets: "defaults" }],
//                         ['@babel/react', { targets: "defaults" }],
//                     ]
//                 }
//               }
//             },

//             {
//               test: /\.s[ac]ss$/i,
//               use: [
//                 "style-loader",
//                 "css-loader",
//                 "sass-loader",
//               ]
//             }
//         ]
//     }
// }
