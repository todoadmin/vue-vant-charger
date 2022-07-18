/**
 * 接口请求地址配置信息
 * @author jihua.huang
 * @since 2022-03-19
 */
//引入基本配置文件base.js
const BASE = require("./base.ts")

//HTTP RESTFUL根地址
export const HTTP_BASE_URL = BASE.BASE_URL

/** 后缀地址（可以为版本目录，如：/v1） */
export const BASE_PREFIX = HTTP_BASE_URL + BASE.PREFIX_PATH


/** 获取充电桩列表数据接口 */
export const CHARGER_LIST_URL = BASE_PREFIX + '/charger/list'

/** 用户账号信息数据接口 */
export const MEMBER_INFO_URL = BASE_PREFIX + '/member/info'