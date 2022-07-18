<template>
  <div>
    <div class="user-info">
      <div class="user-bar">
        <van-row justify="space-between">
          <van-col span="12" class="tool-l">
            <van-icon name="manager-o" @click="building('切换账号')" /><span class="user-switch-tit" @click="building('切换账号')">切换账号</span>
          </van-col>
          <van-col span="10" class="tool-r">
            <van-icon name="setting-o" class="building" @click="building('个人设置')" />
          </van-col>
        </van-row>
      </div>
      <div class="user-logo">
        <div class="center-logo">
          <img src="/images/avatar.jpeg" class="my-logo" alt="个人中心" />
        </div>
        <div class="center-desc">
          <van-tag plain type="warning">L{{ Data.List.levels}}</van-tag>
          <span class="center-desc-nickname">{{ Data.List.nickname}}</span>
          <span class="center-desc-truename">（{{ Data.List.truename}}）</span>
          <p class="center-desc-message">{{ Data.List.remark}}</p>
        </div>
      </div>
      <div class="user-grid">
        <van-row justify="space-around">
          <van-col span="4">
            <span>{{ Data.List.balance}}</span>
            <p>余额</p>
          </van-col>
          <van-col span="4">
            <span>{{ Data.List.cashCoupon}}</span>
            <p>代金券</p>
          </van-col>
          <van-col span="4">
            <span>{{ Data.List.points}}</span>
            <p>积分</p>
          </van-col>
          <van-col span="4">
            <span>{{ Data.List.chargeTotal}}</span>
            <p>充电数</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="user-group">
      <van-cell-group>
        <van-cell icon="points" title="我的积分" class="building" is-link @click="building('我的积分')" />
        <van-cell icon="coupon-o" title="我的套餐" class="building" is-link @click="building('我的套餐')" />
        <van-cell icon="gold-coin-o" title="我的代金券" class="building" is-link @click="building('我的代金券')" />
      </van-cell-group>
  
      <van-cell-group>
        <van-cell icon="bill-o" title="我的充值订单" is-link to="/center/payOrder" />
        <van-cell icon="todo-list-o" title="我的充电订单" is-link to="/center/chargeOrder" />
      </van-cell-group>

      <van-cell-group>
        <van-cell icon="share-o" title="我要分享" is-link @click="Data.showShare = true" />
          <van-share-sheet
            v-model:show="Data.showShare"
            title="立即分享给好友"
            :options="Data.shareOptions"
            @click-overlay="Data.showShare = false" 
            @cancel="Data.showShare = false"
          />
        <van-cell icon="chat-o" class="building" is-link @click="building('我要反馈')" >
          <template #title>
            <span class="custom-title">我要反馈</span>
            <van-badge :content="20" />
          </template>
        </van-cell>
        <van-cell icon="service-o" title="联系客服" class="building" is-link @click="building('联系客服')" />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive} from 'vue'
import { Toast } from 'vant';
import { SMember } from '@/service';
//导入 store的存储模块
import { settingStore } from '@/store'
import { setting } from '@/utils';

export default defineComponent({
  name:'Center',
  setup() {
    // 获取setting store
    const settStore = settingStore()
    //绑定的数据信息
    const Data = reactive({
      showShare: false,
      shareOptions: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
      List: [],
    })


    //我的积分
    const building = (str:string) => {
      Toast({
        message: '【' + str + '】建设中...',
        icon: 'clock-o',
      });
    }

    //获取网络的数据列表
    // 获取列表数据
    const getList = () => {
      let para:any = {current: 1}
      // 请求Table列表数据服务
      SMember.info(para).then((result : any) => {
        if (result.code === 0) {
          Data.List = result.data
          settStore.setUserInfo(result.data)
        } else {
          Toast({
            message: '加载数据失败',
            icon: 'close',
          });
        }
      }).catch((err: any) => {
        console.log(err)
        Toast({
            message: err,
            icon: 'close',
          });
      })
    }
    getList()

    return {
      Data,
      building,
    }
  }
})
</script>

<style>
:root {
  --van-cell-font-size: 16px;
  --van-cell-text-color: #666;
  --van-cell-icon-size: 22px;
  --van-cell-label-font-size: 18px;
}
</style>
<style lang="less" scoped>
.user-info {
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  background: #fff;
  .user-bar {
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    padding:12px 8px;
    .tool-l {
      text-align: left;
    }
    .tool-r {
      text-align: right;
    }
    .user-switch-tit {
      font-size:16px;
      color:#666;
    }
    .van-icon {
      font-size: 22px;
      color: #777;
      margin: 0 10px;
    }
  }
  .user-logo {
    width: 100%;
    margin:0 auto;
  }

  .center-logo {
    text-align: center;
    cursor: pointer;
    margin:0 auto;
  }
  .my-logo {
    width:60px;
    height:60px;
    border-radius: 50%;
  }

  .center-desc{
    text-align: center;
    margin:0 auto;
    margin-top:6px;
    .van-tag {
      font-size: 14px;
    }
    .center-desc-nickname {
      padding:0;
      margin:0;
      margin-left:5px;
      color:#555;
      font-weight: 800;
      font-size:16px;
    }
    .center-desc-truename {
      padding:0;
      margin:5px;
      color:#999;
      font-weight: 400;
      font-size:16px;
    }
    .center-desc-message {
      padding:0;
      margin:8px 0;
      color:#999;
      font-size:14px;
      letter-spacing: 1px;
      line-height: 24px;
      width: 94%;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .user-grid {
    margin: 12px 10px 15px 10px;
    text-align: center;
    font-size: 16px;
    span {
      padding: 0;
      margin: 0;
      font-size: 20px;
      color:#555;
    }
    p {
      padding: 0;
      margin: 5px 0 0 0;
      color:#888;
    }
  }
}
.user-group {
  margin: 15px 0;
  .van-cell-group {
    margin-bottom: 20px;
  }
}
.building {
  color:#aaa;
}
</style>