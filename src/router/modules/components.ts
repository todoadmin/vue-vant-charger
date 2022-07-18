//========================对应的Route component Vue组件模板地址（非赖加载方式）======================
import Layout from '@/views/layout/index.vue'
//========================对应的Route component Vue组件模板地址（非赖加载方式）======================

//========================对应的Route component Vue组件模板地址（赖加载方式）======================
//首页
const Home = () => import('@/views/home/index.vue')
//我的（个人中心）
const Center = () => import('@/views/center/index.vue')
const CenterPayOrder = () => import('@/views/center/pay/list.vue')
const CenterChargeOrder = () => import('@/views/center/charge/list.vue')

//扫码充电
const ChargeScan = () => import('@/views/scan/index.vue')
//充电桩地图
const ChargerMap = () => import('@/views/map/index.vue')


//========================对应的Route component Vue组件模板地址（赖加载方式）======================

export const componentRouter = {
  'Layout':Layout,
  'Home':Home,
  'Center':Center,
  'CenterPayOrder':CenterPayOrder,
  'CenterChargeOrder':CenterChargeOrder,

  'ChargeScan':ChargeScan,
  'ChargerMap':ChargerMap,
}
