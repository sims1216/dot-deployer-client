const Dotenv = require('dotenv-webpack');
const path = require('path')

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [{
          provider: "github",
          owner: "WeConnect",
          repo: "dot-deployer-client"
          // private: true,
          // token: process.env.GH_TOKEN
        }],
        productName: "Dot Deployer",
        nsis: {
          artifactName: "dot-deployer-setup.${ext}",
          uninstallDisplayName: "Dot Deployer"
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, './.env')
      })
    ]
  },
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.sass";`
      }
    }
  }
}
