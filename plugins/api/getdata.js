import request from '../request'
export const getAdvice = (params) =>
  request('get', `/gateway/a/agent/getAdvice`, params, {
    token: false,
    loading: false,
  })
