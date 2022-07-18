import { createRouter,createWebHistory } from 'vue-router'

import { routes, existWhite } from './modules/routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导航路由守卫
router.beforeEach((to:any, from:any, next:any) => {
  try {
    // 路由在白名单里面
    if (existWhite(to.path)) {
      next()
    } else {
      next()
    }
  } catch (error) {
    throw error
  }
})

// 路由跳转后钩子函数中 - 执行进度条加载结束
router.afterEach(() => {
})

export default router
