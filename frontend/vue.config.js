const FileManagerPlugin = require('filemanager-webpack-plugin-fixed');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static',

  pages: {

    home: {
      template: 'public/index.html',
      entry: 'src/pages/main_home.js',
      filename: 'home.html',
      title: 'SANTOKI - Simple IOT Service',
      minify: false,
    },
  },
  configureWebpack: {
    plugins:[
      new FileManagerPlugin({
        onStart:{
          delete: [
            '../backend/static/**/',
            '../backend/templates/**/',
          ],
        },
        onEnd: {
          copy: [
            { source: 'dist/static', destination: '../backend/static/'},
            { source: 'dist/favicon.ico', destination: '../backend/static/img/'},
            { source: 'dist/home.html', destination: '../backend/templates/'},
            //{ source: 'dist/post*.html', destination: '../backend/templates/notice/'},
          ]
        }
      })
    ]
  }
}