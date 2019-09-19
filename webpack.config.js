module.exports = {
  entry: './src/App.js',
  output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
  },
  module: {
    rules: [
      // react handler
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // html handler
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      // css handler
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      // sass handler
      {
        test: /\.scss$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
    ]
  }
};
