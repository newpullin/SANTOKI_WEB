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
    about: {
      template: 'public/index.html',
      entry: 'src/pages/main_about.js',
      filename: 'about.html',
      title: 'SANTOKI - Simple IOT Service',
      minify: false,
    },
    carrot: {
      template: 'public/index.html',
      entry: 'src/pages/main_carrot.js',
      filename: 'carrot.html',
      title: 'SANTOKI - Simple IOT Service',
      minify: false,
    },
    dbox: {
      template: 'public/index.html',
      entry: 'src/pages/main_dbox.js',
      filename: 'dbox.html',
      title: 'SANTOKI - Simple IOT Service',
      minify: false,
    },
    rabbit: {
      template: 'public/index.html',
      entry: 'src/pages/main_rabbit.js',
      filename: 'rabbit.html',
      title: 'SANTOKI - Simple IOT Service',
      minify: false,
    },
    notice_list: {
      template: 'public/index.html',
      entry: 'src/pages/main_notice_list.js',
      filename: 'notice_list.html',
      title: 'SANTOKI - Simple IOT Service',
      minify: false,
    },
    notice_detail: {
      template: 'public/index.html',
      entry: 'src/pages/main_notice_detail.js',
      filename: 'notice_detail.html',
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
            { source: 'dist/about.html', destination: '../backend/templates/'},
            { source: 'dist/rabbit.html', destination: '../backend/templates/'},
            { source: 'dist/carrot.html', destination: '../backend/templates/'},
            { source: 'dist/dbox.html', destination: '../backend/templates/'},
            { source: 'dist/notice*.html', destination: '../backend/templates/notice/'},
          ]
        }
      })
    ]
  }
}