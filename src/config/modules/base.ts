/*HTTP Restful API 数据交换地址 */
//Production 生产环境
if (process.env.NODE_ENV === 'production') {
   //http restful API 请求地址
   module.exports.BASE_URL = 'http://api.charger.todoadmin.com'
} else {
  //Dev开发环境 http restful API 请求地址
  module.exports.BASE_URL = 'http://localhost:9090'
}
/** 后缀地址（可以为版本目录，如：/v1） */
module.exports.PREFIX_PATH = '/v1'

//===============================================================
//DEV host 地址
module.exports.DEV_HOST = 'localhost'
//DEV port 端口
module.exports.DEV_PORT = '8080'
//DEV proxy
module.exports.PROXY_ROOT = '/api'
//DEV环境数据使用 mock数据 还是api接口数据
//value:  mock  |  api
module.exports.DEV_DATA_SOURCE = 'mock'
