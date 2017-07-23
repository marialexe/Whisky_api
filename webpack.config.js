const config = {
  entry: `${__dirname}/client/src/index.js`,
  output: {
    filename: "bundle.js",
    path: `${__dirname}/client/build`
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        options: {
          presets:["react"]
        }
      }
    ]
  }
}

module.exports = config;
