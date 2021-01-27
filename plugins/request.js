import * as axios from 'axios'
import { Loading } from 'element-ui'
import { hosts } from './../env'
import utils from './utils/index'

export default (method, url, params, options, unLoginHandler) => {
  const {
    server = 'fcOrigin',
    loading = false,
    token = true,
    isFormUrlencoded = false,
  } = options || {}
  // qa 环境分支需要通过访问路径额外处理
  const baseURL = hosts[server]
  const headers = {
    // Token: store('almightyToken') || ''
  }
  if (method === 'POST') {
    headers['content-type'] = 'application/json'
  }
  if (isFormUrlencoded) {
    headers['content-type'] = 'application/x-www-form-urlencoded'
  }
  method = method.toUpperCase()
  const service = axios.create({
    baseURL,
    headers,
  })
  // 是否要带上 token 参数
  if (token) {
    params = { ...params }
  }
  let fetchResult
  if (loading) {
    utils.clearLoading()
    Loading.service({
      fullscreen: false,
      target: document.getElementsByClassName('router-view')[0],
      text: '拼命加载中',
      customClass: 'api-common-loading',
    })
  }
  // 获取到不同请求方式的实例
  if (method === 'GET') {
    fetchResult = service.get(url, {
      params,
    })
  } else if (method === 'POST') {
    if (isFormUrlencoded) {
      fetchResult = service({
        url,
        method: 'POST',
        data: JSON.parse(params),
      })
    } else {
      fetchResult = service.post(url, params)
    }
  }
  // 对错误的 code 统一处理并且弹框提示
  // 添加登陆失败的回调函数，因为 c 端的登陆逻辑不一样需要指定函数来做相关处理
  return fetchResult.then((res) => {
    const { status, data } = res
    if (loading) {
      utils.clearLoading()
    }
    if (status === 200) {
      const { code, msg } = data
      if (code !== 10000) {
        utils.alert(msg)
        if (code === 50001) {
          // 未登陆处理函数
          unLoginHandler && unLoginHandler()
        }
        return Promise.reject(msg)
      } else {
        return Promise.resolve(data)
      }
    } else {
      utils.alert('请求服务端失败')
      // Promise.reject('请求服务端失败')
    }
  })
}
