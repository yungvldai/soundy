const CracoAlias = require("craco-alias");
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/styles/colors.scss',
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@comp": "./src/components",
          "@": "./src"
        }
      }
    }
  ]
};
