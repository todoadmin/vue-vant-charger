/*HTTP Restful API 数据交换地址 */
// 是否是生产环境
const PRODUCTION = process.env.NODE_ENV === 'production'
//获取CDN相关的配置
const CDN = require('./modules/cdn.ts')
//获取基本的配置
const BASE = require('./modules/base.ts')

/** 后缀地址（可以为版本目录，如：/v1） */
module.exports.PREFIX_PATH = BASE.PREFIX_PATH

//资源环境
module.exports.PRODUCTION = PRODUCTION
//静态资源CDN
module.exports.EXTERNALS = PRODUCTION ? CDN.PROD_EXTERNALS : CDN.DEV_EXTERNALS
//静态资源CDN
module.exports.STATIC_CDN = PRODUCTION ? CDN.prodCDN : CDN.devCDN
//资源环境
//Api restful 地址
module.exports.BASE_URL = BASE.BASE_URL
//DEV host 地址
module.exports.DEV_HOST = BASE.DEV_HOST
//DEV port 端口
module.exports.DEV_PORT = BASE.DEV_PORT
//DEV proxy
module.exports.PROXY_ROOT = BASE.PROXY_ROOT
//DEV环境数据使用 mock数据 还是api接口数据
//value:  mock  |  api    default value: api
module.exports.DEV_DATA_SOURCE = BASE.DEV_DATA_SOURCE || 'mock'
