/*
此文件的创建目的是为了尽可能减少对vue框架本身文件的修改
此文件是：初始化相关组件、插件、存储、网络、图标，以及引入样式、JS/TS文件等
*/
import router from './router' // 路由
import store from './store/init' // store 存储仓库
//引入lib-flexible 用于设置rem基准值
import "lib-flexible/flexible"
// 按需引入vant组件（提供给Vue全局引入vant）
/* import {
  List, Cell, Tabbar, TabbarItem,Swipe,Overlay,SwipeItem,
  Lazyload 
} from 'vant' */
//import 'vant/lib/index.css';

//当为非生产环境(!production)时导入mock
if (process.env.NODE_ENV !== "production") {
  //引入配置文件config.js
  const conf = require("./config/config.ts")
  //DEV环境数据使用 mock数据 还是api接口数据
  //value:  mock  ||  api    default value: api
  if (conf.DEV_DATA_SOURCE === 'mock') {
    // import { mockXHR } from './../mock/index'; // 引入自定义的mock
    const MockM = require("./../mock/index.ts");
    const mockXHR = MockM.mockXHR;
    mockXHR()
  }
}

export async function init(options: { app: any }) {
  const { app } = options
  app.use(store)
  app.use(router)
  return { router }
}
