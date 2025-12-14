module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
      }),
    ],
  };
  