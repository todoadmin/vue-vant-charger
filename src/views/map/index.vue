<template>
  <div>
    <div class="tool-bar">
      <van-nav-bar
        title="充电桩分布地图"
        left-text="返回"
        left-arrow
        @click-left="back"
      />
      <h1 style="text-align:center">充电桩分布地图建设中...</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive} from 'vue'
import router from '@/router'
import { G } from '@/config'

export default defineComponent({
  name:'ChargerMap',
  setup() {
    //绑定的数据信息
    const Data = reactive({
      
    })
    const back = () => {
      router.push(G.HOME_URL)
      //history.back()
    }
    
    return {
      Data,
      back
    }
  }
})
</script>

<style lang="less" scoped>

</style>