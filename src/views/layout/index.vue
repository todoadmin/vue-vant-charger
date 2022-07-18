<template>
  <div class="main">
    <router-view v-slot="{ Component, route }" />
    <van-tabbar route @change="tabbarChange" v-model="Data.defaultActive" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="scan" replace to="/scan">扫码充</van-tabbar-item>
      <van-tabbar-item icon="guide-o" replace to="/map">桩地图</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/center/index">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,watch } from 'vue'
import { useRouter } from 'vue-router'
import { setting } from '@/utils'

export default defineComponent({
  name:'LayoutIndex',
  setup() {
    const Router = useRouter()
    //绑定的数据信息
    const Data = reactive({
      defaultActive: setting.getDefaultActive(),
    })

    //Tabbar的导航菜单切换
    const tabbarChange = (index:any) => {
      Data.defaultActive = index
    }

    // 监听路由变化，对菜单进行切换和高亮
    watch(() => Router.currentRoute.value, (item:any) => {
      const pathStr:string = item.path
      if (!pathStr.includes('login')) {
        setting.setDefaultActive(item.path)
      }
    }, { immediate: true, deep: true })

    return {
      Data,
      tabbarChange,
    }
  }
})
</script>

<style scoped lang="less">

</style>
