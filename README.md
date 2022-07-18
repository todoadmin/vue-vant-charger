简体中文

<h1>TodoAdmin<font color="#666" size=4>|vue-vant-charger（充电站）</font></h1>

<p align="center">
  <a href="https://pro.todoadmin.com" target="_blank">
    <img width="180" src="https://pro.todoadmin.com/logo.png?1" alt="logo">
  </a>
</p>
<p>电动车是目前流行的节能环保绿色出行交通工具。充电站像加油站一样，可在街道、社区、车库、停车场等设置。随着充电站的普及，不再因半途没电而烦恼，不再因电量不足而不出远门。</p>

<p align="center">
    <a href="https://github.com/microsoft/TypeScript">
        <img src="https://img.shields.io/badge/TS-4.7+-blue" alt="TS">
    </a>
    <a href="https://github.com/npm/npm">
        <img src="https://img.shields.io/badge/npm-8.1+-blue" alt="npm">
    </a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/license-MIT-blue" alt="license-mit">
    </a>
</p>


> vue-vant-charger版：是一个集成管理后台端模板和移动手机端解决方案，项目采用TS脚本语言，基于Vue 3.2+/Vue-cli 5.0+/Vue-router 4.0+、Axios0.2.7+、Vant 3.5+、Pinia 2.0+结合Mockjs等搭建，项目以Composition API风格编写，采用远程API接口和本地Mock双接口两种模式自由选择加载数据。

<table>
    <tr>
        <td>
            <img width="450px" src="https://img.todoadmin.com/charger/home.png">
        </td>
        <td>
            <img width="450px" src="https://img.todoadmin.com/charger/home2.png">
        </td>
    </tr>
</table>


## 体验Demo地址

- [Vue-vant-charger base基本版版演示地址（vue3.2+ 支持 平板、手机）](https://charger.todoadmin.com)
<p>提示：使用手机浏览器打开体验</p>




## 克隆vue-vant-charger 项目 [点击访问Github仓库](https://github.com/todoadmin/vue-vant-charger)

```bash
# 克隆项目
git clone -b  https://github.com/todoadmin/vue-vant-charger.git
# 安装依赖
yarn install
# 本地开发 启动项目
npm run serve     or     yarn serve
```


## 克隆vue-vant-charger 项目 [点击访问Gitee仓库](https://gitee.com/todoadmin/vue-vant-charger)

```bash
# 克隆项目
git clone -b  https://gitee.com/todoadmin/vue-vant-charger.git
# 安装依赖
yarn install
# 本地开发 启动项目
npm run serve     or     yarn serve
```


<p>以下为vant-charger充电站版本的相关介绍</p>


## 项目生态插件【依赖】列表

| 标题名称               | 版本                                                       | 描述                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [vue]                | [![vue-ico]][vue]                               | 构建用户界面的渐进式框架                           |
| [vue-router]          | [![vue-router-ico]][vue-router]                   | 单页应用程序路由                         |
| [vue-cli]             | [![vue-cli-ico]][vue-cli]                         | 项目脚手架                                    |
| [axios]          | [![axios-ico]][axios]                   | 基于promise的网络请求库 |
| [vant]          | [![vant-ico]][vant]                   | 基于Vant移动端的组件库 |
| [pinia]          | [![pinia-ico]][pinia]                  | 状态管理 |
| [js-md5]          | [![js-md5-ico]][js-md5]                  | MD5加密 |



## 项目安装（依赖安装）
```
yarn install
```

### 运行开发环境
```
yarn serve
```

### 生产环境打包
```
yarn build
```

### 修复文件
```
npm run lint
```

### 配置文件
```
#config目录下
/src/config

#项目主体配置import模块
/src/config/index.ts

#项目启动环境配置引入模块
/src/config/config.ts

#项目启动环境（生产环境/Dev环境）基本配置引入模块
/src/config/module/base.ts

#项目启动环境（生产环境/Dev环境）CDN配置引入模块
/src/config/module/cdn.ts

#项目主体全局常量import模块
/src/config/module/global.ts

#项目主体HTTP/HTTPS Restful请求接口地址常量import模块
/src/config/module/HUrl.ts
```


[vue]: https://github.com/vuejs/vue
[vue-ico]:https://img.shields.io/badge/Vue-v3.2.36-brightgreen

[vue-router]: https://github.com/vuejs/vue-router
[vue-router-ico]:https://img.shields.io/badge/Vue--router-v4.0.15-brightgreen

[vue-cli]: https://github.com/vuejs/vue-cli
[vue-cli-ico]:https://img.shields.io/badge/Vue--cli-v5.0.1-brightgreen

[axios]: https://github.com/axios/axios
[axios-ico]:https://img.shields.io/badge/axios-v0.2.7-brightgreen

[vant]: https://github.com/youzan/vant
[vant-ico]:https://img.shields.io/badge/vant-v3.5.2-brightgreen

[pinia]: https://github.com/vuejs/pinia
[pinia-ico]:https://img.shields.io/badge/Pinia-v2.0.14-brightgreen

[js-md5]: https://github.com/emn178/js-md5
[js-md5-ico]:https://img.shields.io/badge/js--md5-v0.7.3-brightgreen

---

## 前后端功能简介
<font color="#7167D6" size=5>前端</font>
- CDN 分布式引入JS/样式/图片
- 独家采用API远程实时数据接口和Mock本地数据双接口，可自由切换API或Mock
- 多个高质量移动端组件页面
- 管理后台采用实时接口数据传输
- 实时生成可视化数据大屏动态图表
- 实时数据采用Websocket交互
- 采用Composition API模式
- 采用JWT 认证
- 实时监控系统&服务器资源使用
- 充电站手机端开源版本可免费商用
- 跨平台 手机端、平板等移动端兼容
- 动态路由菜单认证
- 支持mock本地模拟数据和远程模拟数据
- 支持按钮功能级别的权限控制
- 支持根据距离优先、好评优先、价格等检索充电站列表
- 支持VIP会员开通
- 支持连接优惠商城
- 支持车辆认证
- 支持扫码充电
- 支持充电站、充电桩地图分布
- 支持第三方支付充值
- 支持充值记录日志追查
- 支持充电记录日志追查
- 支持代金券、优惠套餐等联合使用
- 支持积分返现功能
- 可支持代理商、分销商等经营模式开发

<font color="#D66767" size=5>后端</font>
- 接口语言（框架）版本：SpringBoot (2.7.1)
- 支持SpringSecurity + JWT等认证
- 可支持多种开源关系数据库切换：MySQL、MariaDB、PostgreSQL
- 可支持多种内存数据库切换：Redis、Memcached
- 可支持关系型数据库的集群
- 可支持内存型数据库的集群
- 可支持静态文件（图片、视频、文档等）云存储和CDN分发


## Demo地址&仓库地址

- [Vue-vant-charger充电站 基本版演示地址（vue3.2+ 支持平板、手机）](https://charger.todoadmin.com)
- [Github 地址](https://github.com/todoadmin/vue-vant-charger)
- [Gitee 码云地址](https://gitee.com/todoadmin/vue-vant-charger)
<p>提示：请使用手机浏览器打开</p>

## 打赏&联系

- 请喝杯茶呗，打赏后联系 QQ 308407381
<table>
    <tr>
        <td>
            <img width="200px" src="https://img.todoadmin.com/et/zfb-20.jpg">
        </td>
        <td>
            <img width="200px" src="https://img.todoadmin.com/et/wx-20.jpg">
        </td>
    </tr>
</table>


## 优势&注意事项

```
Vue-vant-charger充电桩开源项目有如下优势:
1. 独家采用API远程实时数据接口和Mock本地数据双接口调试（可自由切换数据接口模式）
2. 支持前后端路由菜单权限和功能按钮权限控制
3. 采用实时接口传输数据，让你事半功倍
4. 偏好数据、主题切换、账号切换等配置
5. 支持原生css和less 自动排序，eslint 自动修复
6. axios 二次封装，支持多种模式和参数方式
7. websocket 封装，支持实时数据传输方式
8. 支持MD5/RSA加密登录
9. 支持https数据加密传输
10. 使用CDN分发项目样式css和js、图片，让速度飞起来
11. 支持手机端、平板等操作

使用注意事项:
1. 项目默认使用Chrome浏览器，Vue Devtools 插件调试
2. 项目默认使用VSCode + Eslint校验规范，需要配置vscode编辑器
3. 项目也可以使用IntelliJ IDEA + 相关插件开发
4. 项目使用MIT开源协议，请保留MIT开源协议即可免费商用

```


## 后台效果图预览

以下是截取的是 pro 版的效果图展示：

<table>
    <tr>
        <td>
            <img src="https://img.todoadmin.com/charger/center.png">
        </td>
        <td>
            <img src="https://img.todoadmin.com/charger/paylist.png">
        </td>
    </tr>
    <tr>
        <td>
            <img src="https://img.todoadmin.com/charger/chargelist.png">
        </td>
    </tr>
    
</table>



## 提问

<p>如果你有任何疑问可以提出，作者会快速处理</p>

## 问题提交

<p>如果项目存在任何问题或者Bug，可以提交Issue</p>



## 移动端浏览器

移动端主流浏览器

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" style="zoom:70%" />](https://godban.github.io/browsers-support-badges/) IE/Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" style="zoom:70%"/>](https://godban.github.io/browsers-support-badges/) Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" style="zoom:70%" />](https://godban.github.io/browsers-support-badges/) Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" style="zoom:70%" />](https://godban.github.io/browsers-support-badges/) Safari |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| IE10/IE11/Edge                                             | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |


## 贡献

多谢每一位支持本项目的人士！



## 鸣谢

| 项目（排名不分先后）                                                          |
| ---------------------------------------------------------------- |
| [vue](https://github.com/vuejs/vue)                              |
| [vant](https://github.com/youzan/vant)     |
| [pinia](https://github.com/vuejs/pinia) |
| [axios](https://github.com/axios/axios)                          |


## 商用注意事项

此项目可免费用于商业用途，请遵守 [MIT](https://opensource.org/licenses/MIT)  协议并保留作者技术支持声明。

Copyright (c) 2022-present, Todoadmin.com
