const path = require('path')

module.exports = {
    mode: 'none',
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
            }
        ]
    }
}

// const path = require('path')

// module.exports = {
//   mode: 'none',
//   entry: './app-src/app.js',

//   output: {
//     path: path.resolve('dist'),
//     filename: 'main.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
// }
