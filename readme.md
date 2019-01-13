# Let's do some pathing testing

This repo was done as test of various map and pathing combinations in Phaser. React was added to handle basic routing.

## What was installed and how

### Install deps

```sh
yarn init
# add dev dependancy for webpack
yarn add -D webpack webpack-cli
# set up react and babel
yarn add react react-dom
yarn add -D babel-loader @babel/core @babel/preset-env @babel/preset-react
yarn add -D html-webpack-plugin
yarn add -D webpack-dev-server
```
### Confugure babel

Add `babel-loader` in `webpack.config.js`

```js
module.exports = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } }
    ]
  }
};
```

In `.babelrc`:

```json
{ "presets": ["env", "react"] }
```

### Configure html-webpack-plugin

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
// …
    plugins: [htmlPlugin]
};
```

### Configure webpack-dev-server

In `package.json`:

```json
// "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
//    "build": "webpack --mode production"
//  },
```

Use `--open` for automatic opening in the default browser and `--hot` for Hot Module Replacement.

### Resources:

- [React app from scratch](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)
- [Update bubel plugin preset files](https://stackoverflow.com/questions/47830273/babel-plugin-preset-files-are-not-allowed-to-export-objects-only-functions)
