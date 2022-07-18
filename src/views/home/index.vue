<template>
  <div>
    <div class="search">
      <van-search v-model="Data.Search" placeholder="请输入搜索关键词" />
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="green" touchable>
        <van-swipe-item v-for="item of Data.Banner" :key="item.id">
          <img :src="item.src" class="banner-img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-notice-bar
      left-icon="volume-o"
      text="本站所有数据和图片均为展示用途！"
    />
    <div class="grid-list">
      <van-grid>
        <van-grid-item text="VIP会员" icon="vip-card-o" />
        <van-grid-item text="优惠商城" icon="shop-o" />
        <van-grid-item text="车辆认证" icon="logistics" />
        <van-grid-item text="券包套餐" icon="coupon-o" />
      </van-grid>
    </div>
    <div class="coupon-bag">
      <img :src="Data.CouponImg" class="bag-img" alt="vue-vant-charger" />
    </div>
    <div class="filter">
      <van-row justify="space-between">
        <van-col span="12">
          <van-dropdown-menu>
            <van-dropdown-item v-model="Data.DefaultVal" :options="Data.DefaultOptions" />
            <van-dropdown-item v-model="Data.DistanceVal" :options="Data.DistanceOptions" />
          </van-dropdown-menu>
        </van-col>
        <van-col span="5">
          <van-button icon="search" type="primary" size="small" class="filter-search">查询</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="list-data">
      <van-list
        v-model:loading="Data.Loading"
        :finished="Data.Finished"
        finished-text="没有更多数据了"
        @load="getList"
      >
        <template v-for="item in Data.List" :key="item">
          <div class="list-data-row">
            <div class="list-data-row-l">
              <ul>
                <li><span class="list-data-title">{{ item.title }}</span></li>
                <li><span class="list-data-addr">{{ item.address }}</span></li>
                <li><span class="list-data-price">¥{{ item.price }}<span class="mark-s">/</span>小时</span></li>
                <li class="list-data-tags" v-if="item.tags">
                    <van-tag type="warning" v-for="tag in comm.filterArr(item.tags)">{{ tag }}</van-tag>
                </li>
                <li v-if="item.tips"><van-tag mark type="primary"><b class="list-data-stop">P</b></van-tag><span class="list-data-tips">{{ item.tips }}</span></li>
              </ul>
            </div>
            <div class="list-data-row-r">
              <div class="list-data-top">
                  <div>
                    <div v-if="item.fastTotal"><van-tag plain type="success" >快</van-tag><span class="list-data-num">{{ item.fastUse }}<span class="mark-s">/</span>{{ item.fastTotal }}</span></div>
                    <div v-if="item.slowTotal"><van-tag plain type="danger">慢</van-tag><span class="list-data-num">{{ item.slowUse }}<span class="mark-s">/</span>{{ item.slowTotal }}</span></div>
                  </div>
              </div>
              <div class="list-data-bot">
                <van-button plain icon="guide-o" type="primary" size="mini">{{ comm.distance(item.distance) }}</van-button>
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
import { defineComponent,reactive} from 'vue'
import { Toast } from 'vant';
import { SHome } from '@/service'
import { comm } from '@/utils';

export default defineComponent({
  name:'Home',
  setup() {
    //绑定的数据信息
    const Data = reactive({
      Search: '',
      Banner: [
        {id: 1, src: '/images/1.jpg'},
        {id: 2, src: '/images/2.jpg'},
        {id: 3, src: '/images/3.jpg'},
        {id: 4, src: '/images/4.jpg'},
        {id: 5, src: '/images/5.jpg'},
        {id: 6, src: '/images/6.jpg'},
      ],
      CouponImg: '/images/7.jpg',
      DefaultVal: '0',
      DefaultOptions: [
        { text: '默认排序', value: '0' },
        { text: '距离优先(直线距离)', value: '1' },
        { text: '好评优先', value: '2' },
        { text: '低价优先', value: '3' },
        { text: '高价优先', value: '4' },
        { text: '通用排序', value: '5' },
      ],
      DistanceVal: '0',
      DistanceOptions: [
        { text: '位置优先', value: '0' },
        { text: '≤ 500', value: '500' },
        { text: '≤ 1公里', value: '1000' },
        { text: '≤ 2公里', value: '2000' },
        { text: '≤ 4公里', value: '4000' },
        { text: '≤ 6公里', value: '6000' },
        { text: '≤ 10公里', value: '10000' },
      ],
      Loading: false,
      Finished: false,
      List: [
        //{'id': 1,'title': '南宁市青秀区南宁东高铁站充电站','address': '南宁市青秀区长虹路66号南宁东高铁站负2楼A区321','price': '¥ 8991.50元','tips': '充电车辆3小时免费停车','tags': ['VIP折扣','低价','连锁店','充电险','免费洗车','赠送礼品'],'process': [{'total': 15,'use': 7,'label': '快','type': 'success'},{'total': 6,'use': 2,'label': '慢','type': 'danger'}],'distance': '950m'},
        //{'id': 2,'title': '南宁市江南区洪亭路万达广场充电站','address': '南宁市江南区洪亭路万达广场地下负1层B区007','price': '¥ 5991.60元','tips': '每小时停车5元','tags': ['VIP折扣','低价','连锁店','充电险'],'process': [{'total': 25,'use': 17,'label': '快','type': 'success'}],'distance': '2.5km'},
      ],
      Para: {
        current: 1,
        total: 0,
        size: 10,
        page: 1,
      },
    })

    //获取网络的数据列表
    // 获取列表数据
    const getList = () => {
      console.log('-------------------')
      let para:any = {current: 1}
      // 请求Table列表数据服务
      SHome.list(para).then((result : any) => {
        if (result.code === 0) {
          Data.Para.total = result.data.total
          Data.Para.size = result.data.size
          Data.Para.page = result.data.page
          Data.List = result.data.list
          let list:any =  result.data.list
          list.forEach((item:any) => {
            console.log(comm.filterArr(item.tags),'===================')
          })
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

    return {
      Data,
      comm,
      getList,
    }
  }
})
</script>

<style>
:root {
  --van-grid-item-text-color: #555 !important;
  --van-grid-item-text-font-size: 16px !important;
  --van-dropdown-menu-height: 40px !important;
  --van-dropdown-menu-box-shadow: 0 !important;
  --van-dropdown-menu-title-font-size: 14px !important;
  --van-dropdown-menu-title-text-color: #777 !important;
}
</style>
<style lang="less" scoped>
.banner-img {
  border:0;
  width: 100%;
}
.grid-list {
  margin: 5px 0;
}
.coupon-bag {
  width: 100%;
  height: 60px;
}
.bag-img {
  width: 100%;
}
.filter {
  margin: 10px 0 0 0;
  background: #fff;
}
.filter-search{
  text-align: center;
  margin: 4px 0 0 8px;
}

.list-data {
  background: #fff;
  padding-top: 15px;
}

.list-data-row {
  display: flex;
  padding:20px 0 15px 0;
  padding: 0 10px;

  .list-data-row-l {
    flex: 1;
    width: 100%;
    text-align: left;
    line-height: 20px;
    overflow: hidden;
    ul {
      list-style: none; 
      padding:0;
    }
    ul li {
      font-size:14px;
      font-weight: 500;
      margin: 1px 0 5px 0;
      color:#555;
    }
    .list-data-stop {
      font-size: 14px;
      font-weight: 700;
    }
    .list-data-title {
      color:#333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .list-data-addr {
      color:#777;
      width: 94%;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .list-data-price {
      color:#444;
      font-size:16px;
    }
    .list-data-tags {
      width: 70%;
      .van-tag {
        margin: 3px 12px 3px 0;
      }
    }
    .list-data-tips {
      color:#999;
      font-size:12px;
      line-height: 22px;
      margin-left:5px;
    }
  }

  .list-data-row-r {
    width: 70px;
    display: flex;
    flex-direction: column;
    .list-data-top {
      margin: 4px 0 0 0;
      text-align: left;
      flex: 1;
      .van-tag {
        margin-bottom: 10px;
      }

      
      .list-data-num {
        font-size:14px;
        color:#666;
        margin-left: 4px;
        font-weight: 500;
      }
    }
    .list-data-bot {
      padding: 0 0 10px 0;
    }
  }

  .mark-s {
    margin:0 2px;
  }
}
</style>