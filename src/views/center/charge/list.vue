<template>
  <div>
    <div class="order-info">
      <div class="order-bar">
        <van-nav-bar
          title="我的充电订单"
          left-text="返回"
          left-arrow
          @click-left="back"
        />
      </div>
      
      <div class="user-grid">
        <van-row justify="space-around">
          <van-col span="12">
            <span class="grid-tit">时长：</span><span class="grid-val">10天8小时</span>
          </van-col>
          <van-col span="12">
            <span class="grid-tit">金额：</span><span class="grid-val">¥ 1278.50</span>
          </van-col>
        </van-row>
        <van-row justify="space-around">
          <van-col span="12">
            <span class="grid-tit">充电：</span><span class="grid-val">1892度</span>
          </van-col>
          <van-col span="12">
            <span class="grid-tit">次数：</span><span class="grid-val">135次</span>
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
                <li><span class="list-data-name">{{ item.orderName }}</span></li>
                <li>单号：<span class="list-data-title">{{ item.orderId }}</span></li>
                <li><span :class="item.status === 1 ? 'status-1' : (item.status === 2 ? 'status-2' : (item.status === 3 ? 'status-3' : 'status-4'))">●</span><span class="list-data-status">{{ item.statusLabel }}</span></li>
                <li v-if="item.status === 1"><van-tag mark type="success" class="list-data-price">{{ item.payMoney }}</van-tag></li>
                <li v-else-if="item.status === 2"><van-tag mark type="primary" class="list-data-price">{{ item.payMoney }}</van-tag></li>
                <li v-else-if="item.status === 3"><van-tag mark class="list-data-price">{{ item.payMoney }}</van-tag></li>
                <li v-else><van-tag mark type="danger" class="list-data-price">{{ item.payMoney }}</van-tag></li>
              </ul>
            </div>
            <div class="list-data-row-r">
              <div class="list-data-top">
                  <span class="list-data-time">{{ item.time }}</span>
              </div>
              <div class="list-data-bot">
                <span v-if="item.status === 1" class="pay-order">{{ item.timeLen }}</span>
                <span v-else-if="item.status === 2" class="pay-order">{{ item.timeLen }}</span>
                <span v-else-if="item.status === 3" class="pay-order">{{ item.timeLen }}</span>
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
  name:'CenterChargeOrder',
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
        {'id': 1,'orderName': '科技园南路科技大厦充电站-3#桩','orderId': '2022063010253265897','status': 1,'statusLabel': '21.89 kW-h','payMoney': '¥194.50','timeLen': '1时32分','time': '07-05 12:24'},
        {'id': 2,'orderName': '科技园南路科技大厦充电站-3#桩','orderId': '2022063010253265897','status': 2,'statusLabel': '充电中...','payMoney': '计算中...','timeLen': '-','time': '07-05 12:24'},
        {'id': 3,'orderName': '科技园南路科技大厦充电站-3#桩','orderId': '2022063010253265897','status': 3,'statusLabel': '充电取消','payMoney': '取消','timeLen': '','time': '07-05 12:24'},
        {'id': 4,'orderName': '科技园南路科技大厦充电站-3#桩','orderId': '2022063010253265897','status': 4,'statusLabel': '充电异常','payMoney': '异常','timeLen': '','time': '07-05 12:24'},
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
    text-align: left;
    font-size: 16px;
    span {
      padding: 0;
      margin: 0;
      height: 32px;
      line-height: 32px;
      font-size: 18px;
      color:#666;
    }
    .grid-tit {
      margin: 12px 0 0 18px;
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

      .list-data-name {
        font-size: 16px;
        color:#666;
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        color: rgb(9, 62, 167);
      }
      .status-4 {
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