module.exports = {
  entry: {
    main: "./main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              // pragma里面写什么，最会就会transform出来什么东西来，
              // 本身这个jsx插件是将<div>转化为React.createElement('div', null)来实现转化
              // 这里直接从<div>转化为createElemnt('div', null)
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
};
