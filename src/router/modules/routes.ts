//========================对应的Route component Vue组件模板地址======================
import { componentRouter } from './components';
//========================对应的Route component Vue组件模板地址======================

//静态路由列表
export const routesStatic:any = [
  {
    path: '/',//路径地址
    redirect: '/home',//重定向地址
    component: componentRouter.Layout,//view组件
    meta: {
      title: '首页',//菜单标题名称
      icon: 'home-o',//菜单图标
      requiresAuth: true,//需认证才能显示该页面
      hidden: false,//该菜单是否在view的menu组件隐藏
      layout: true,//该菜单只作为一级菜单标题显示
      keepAlive:true,//该菜单对应的页面是否保存缓存，用于keep-alive组件设置
      new:false,//是否为新功能
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: componentRouter.Home,
        meta: {
          title: '首页',
          icon: 'home-o',
          requiresAuth: true,
          hidden: false,
          keepAlive:true,
          new:false,//是否为新功能
        }
      }
    ]
  },
  {
    path: '/center',
    name: 'Center',
    component: componentRouter.Layout,
    meta: {
      title: '个人中心',
      icon: 'friends-o',
      requiresAuth: true,
      hidden: false,
      keepAlive:true,
      new:false,
    },
    children: [
      {
        path: '/center/index',
        name: 'CenterIndex',
        component: componentRouter.Center,
        meta: {
          title: '个人中心',
          icon: 'friends-o',
          requiresAuth: true,
          hidden: false,
          keepAlive:true,
          new:false,
        },
      },
      {
        path: '/center/payOrder',
        name: 'CenterPayOrder',
        component: componentRouter.CenterPayOrder,
        meta: {
          title: '我的充值记录',
          icon: 'bill-o',
          requiresAuth: true,
          hidden: false,
          keepAlive:true,
          new:false,
        },
      },
      {
        path: '/center/chargeOrder',
        name: 'CenterChargeOrder',
        component: componentRouter.CenterChargeOrder,
        meta: {
          title: '我的充电记录',
          icon: 'todo-list-o',
          requiresAuth: true,
          hidden: false,
          keepAlive:true,
          new:false,
        },
      }
    ]
  },
  {
    path: '/scan',
    name: 'ChargeScan',
    component: componentRouter.ChargeScan,
    meta: {
      title: 'Scan',
      icon: 'scan-o',
      requiresAuth: false,
      hidden: true,
      layout: true,
    }
  },
  {
    path: '/map',
    name: 'ChargerMap',
    component: componentRouter.ChargerMap,
    meta: {
      title: 'Map',
      icon: 'location-o',
      requiresAuth: false,
      hidden: true,
      layout: true,
    }
  }
]

//静态白名单路由列表
export const routesWhite = [
  
]

//获取动态路由列表
export const routes = routesStatic.concat(routesWhite)

//获取路由url path地址白名单列表   路由白名单  - 不重定向白名单 ['/404','/login', '/register']
const whiteList = () => {
  let list:any = []
   for (let item of routes) {
    //也可以转换为大写或小写再保存
    list.push(item.path)
  }
  return list
}

//路由在白名单里面
export const existWhite = (path: string) => {
  if (whiteList().indexOf(path) !== -1) {
    return true;
  } else return false;
}
