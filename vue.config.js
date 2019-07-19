const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

let api = process.env.api

module.exports = {
  publicPath: '/',
  // 校验错误会直接显示在浏览器并导致编译失败
  lintOnSave: 'error',
  // 同时展示警告和错误
  devServer: {
    port: 8084,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: api,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@cf', resolve('src/components/FrameOwn'))
      .set('@u', resolve('src/utils'))
      .set('@i', resolve('src/assets/images'))
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // },
}

// function addStyleResource(rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [path.resolve(__dirname, './src/theme.less')],
//     })
// }
