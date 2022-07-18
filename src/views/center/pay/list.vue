<template>
  <div>
    <div class="order-info">
      <div class="order-bar">
        <van-nav-bar
          title="我的充值订单"
          left-text="返回"
          left-arrow
          @click-left="back"
        />
      </div>
      
      <div class="user-grid">
        <van-row justify="space-around">
          <van-col span="4">
            <span>56.54</span>
            <p>余额</p>
          </van-col>
          <van-col span="4">
            <span>980.50</span>
            <p>充值</p>
          </van-col>
          <van-col span="4">
            <span>152.50</span>
            <p>优惠</p>
          </van-col>
          <van-col span="4">
            <span>4293</span>
            <p>积分</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="filter">
      <van-row justify="space-between">
        <van-col span="12">
          <van-field
            v-model="Data.filterTime"
            name="start_time"
            placeholder="选择时间段"
            @click="Data.showPicker = true"
            class="field-time"
          />
          <van-popup v-model:show="Data.showPicker" position="bottom">
            <van-datetime-picker
              type="date"
              title="选择时间段"
              :min-date="Data.minDate"
              :max-date="Data.maxDate"
              :formatter="formatter"
              @confirm="onConfirm"
              @cancel="Data.showPicker = false"
            />
          </van-popup>
        </van-col>
        <van-col span="5">
          <van-button icon="search" type="primary" size="small" class="filter-search">查询</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="order-list">
      <van-list
        v-model:loading="Data.Loading"
        :finished="Data.Finished"
        finished-text="没有更多了"
        @load="getListData"
      >
        <template v-for="item in Data.List" :key="item">
          <div class="list-data-row">
            <div class="list-data-row-l">
              <ul>
                <li>单号：<span class="list-data-title">{{ item.orderId }}</span></li>
                <li><span :class="item.status === 1 ? 'status-1' : (item.status === 2 ? 'status-2' : 'status-3')">●</span><span class="list-data-status">{{ item.statusLabel }}</span></li>
                <li v-if="item.status === 1"><van-tag mark type="success" class="list-data-price">{{ item.payMoney }}</van-tag><span class="list-data-save">{{ item.saveMoney }}</span></li>
                <li v-else-if="item.status === 3"><van-tag mark class="list-data-price">{{ item.payMoney }}</van-tag></li>
                <li v-else><van-tag mark type="danger" class="list-data-price">{{ item.payMoney }}</van-tag></li>
              </ul>
            </div>
            <div class="list-data-row-r">
              <div class="list-data-top">
                  <span class="list-data-time">{{ item.time }}</span>
                  <van-button plain size="mini" class="pay-type">{{ item.payment }}</van-button>
              </div>
              <div class="list-data-bot">
                <span v-if="item.status === 1" class="pay-order">{{ item.orderMoney }}</span>
                <span v-else-if="item.status === 3" class="pay-order">{{ item.orderMoney }}</span>
                <span v-else class="pay-order feedback"><van-tag plain type="primary">我要反馈</van-tag></span>
              </div>
            </div>
          </div>
          <van-divider :style="{ borderColor: '#ddd', padding: '0 10px' }" />
        </template>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue'
import { comm } from '@/utils'

export default defineComponent({
  name:'CenterPayOrder',
  setup() {
    //绑定的数据信息
    const Data = reactive({
      filterTime: '',
      showPicker: false,
      minDate: new Date(2022, 0, 1),
      maxDate: new Date(),
      Loading: false,
      Finished: false,
      List: [
        {'id': 1,'orderId': '2022063010253265897','status': 1,'statusLabel': '充值成功','payMoney': '支付：¥194.50','saveMoney': '优惠：¥5.50','orderMoney': '¥200.00','time': '07-05 12:24','payment': '微信支付'},
        {'id': 1,'orderId': '2022063010253265897','status': 1,'statusLabel': '充值成功','payMoney': '支付：¥194.50','saveMoney': '优惠：¥5.50','orderMoney': '¥200.00','time': '07-05 12:24','payment': '支付宝支付'},
        {'id': 2,'orderId': '2022063010253265897','status': 3,'statusLabel': '充值取消','payMoney': '支付取消','saveMoney': '优惠：¥5.50','orderMoney': '¥200.00','time': '07-05 12:24','payment': '支付宝支付'},
        {'id': 2,'orderId': '2022063010253265897','status': 2,'statusLabel': '充值失败','payMoney': '支付异常','saveMoney': '优惠：¥5.50','orderMoney': '¥200.00','time': '07-05 12:24','payment': '微信支付'},
      ]
    })
    const back = () => history.back()

    const onConfirm = (value:any) => {
      Data.filterTime = comm.GMTToStr(value,'yyyy-MM-dd')
      Data.showPicker = false
    }

    const formatter = (type:any, val:any) => {
      if (type === 'year') {
        return val + '年'
      }
      if (type === 'month') {
        return val + '月'
      }
      if (type === 'day') {
        return val + '日'
      }
      return val
    }

    //获取网络的数据列表
    const getListData = () => {
      console.log(1)
    }

    return {
      Data,
      back,
      onConfirm,
      formatter,
      getListData,
    }
  }
})
</script>
<style lang="less" scoped>
.order-info {
  background: #fff;
  padding-bottom: 10px;
  .user-grid {
    margin: 20px 10px 10px 10px;
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
.filter {
  background: #fff;
  margin-top: 10px;
  padding:3px;
  .field-time {
    color: #666;
    font-size: 18px !important;
  }
  .filter-search{
    text-align: center;
    margin: 6px 0 0 8px;
  }
}


.order-list {
  background: #fff;
  padding-top: 15px;
  .list-data-row {
    display: flex;
    padding:20px 0 15px 0;
    padding: 0 10px;

    .list-data-row-l {
      flex: 1;
      width: 100%;
      text-align: left;
      ul {
        list-style: none; 
        padding:0;
      }
      ul li {
        font-size:16px;
        font-weight: 500;
        margin: 8px 0;
        color:#555;
      }
      
      .list-data-title {
        font-size: 18px;
        color:#555;
        width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .status-1 {
        font-size: 24px;
        font-weight: 900;
        color: rgb(47, 177, 47);
      }
      .status-2 {
        font-size: 24px;
        font-weight: 900;
        color: rgb(208, 25, 25);
      }
      .status-3 {
        font-size: 24px;
        font-weight: 900;
        color: rgb(117, 119, 117);
      }
      .list-data-status {
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        color:#777;
        padding: 4px 0 0 8px;
      }
      .list-data-price {
        color:#fff;
        font-size:14px;
        font-weight: 400;
        margin-top: 4px;
        padding: 2px 4px;
      }
      .list-data-save {
        font-size: 12px;
        color: #777;
        margin: 5px 0 0 8px;
      }
    }

    .list-data-row-r {
      width: 80px;
      display: flex;
      flex-direction: column;
      .list-data-top {
        margin: 10px 0 0 0;
        text-align: right;
        flex: 1;
        .list-data-time {
          font-size:14px;
          color:#777;
          margin-left: 4px;
          font-weight: 500;
        }
        .pay-type {
          margin-top: 18px;
        }
      }
      .list-data-bot {
        padding: 0 0 10px 0;
        text-align: right;
        .pay-order {
          font-size:14px;
          color: #777;
        }
        .feedback {
          cursor: pointer;
        }
      }
    }
  }
}
</style>