/**
 * 配置CDN相关  setting CDN
 */
//获取package.json的属性内容
const pack = require('../../../package.json')
//获取package.json的依赖属性
const ver = pack.dependencies
//生产环境的CDN连接地址 production cdn link
module.exports.prodCDN = {
    css: [
        'https://cdn.bootcdn.net/ajax/libs/vant/' + ver.vant.replace(/\~|\^/g, '') + '/index.min.css',
    ],
    js: [
        'https://cdn.bootcdn.net/ajax/libs/vue/' + ver.vue.replace(/\~|\^/g, '') + '/vue.runtime.global.prod.min.js',
        'https://cdn.bootcdn.net/ajax/libs/vue-router/' + ver['vue-router'].replace(/\~|\^/g, '') + '/vue-router.global.prod.min.js',
        'https://cdn.bootcdn.net/ajax/libs/axios/' + ver.axios.replace(/\~|\^/g, '') + '/axios.min.js',
        'https://cdn.bootcdn.net/ajax/libs/vue-demi/' + ver['vue-demi'].replace(/\~|\^/g, '') + '/index.iife.min.js',
        'https://cdn.bootcdn.net/ajax/libs/pinia/' + ver.pinia.replace(/\~|\^/g, '') + '/pinia.iife.prod.min.js',
        //'https://cdn.bootcdn.net/ajax/libs/vant/' + ver.vant.replace(/\~|\^/g, '') + '/vant.min.js',
        'https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js',
    ],
}

//DEV环境的CDN连接地址 dev cdn link
module.exports.devCDN = {
    css: [
        'https://cdn.bootcdn.net/ajax/libs/vant/' + ver.vant.replace(/\~|\^/g, '') + '/index.min.css',
    ],
    js: [
    ],
}
  
//cdn方式引入文件，以下文件不打包，使用外部CDN连接
module.exports.PROD_EXTERNALS = {
    /* vue:'Vue',
    'vue-router': 'VueRouter',
    'vue-demi': 'VueDemi',
    axios:'axios',
    pinia:'Pinia',
    'js-md5':'md5', */
}

module.exports.DEV_EXTERNALS = {}
