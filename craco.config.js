/**
 * 该模块需要安装对应的包 @craco/craco
 */


const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  }
}