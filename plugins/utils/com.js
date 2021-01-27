import { Message } from 'element-ui'
export function alert(msg, msgtype, time) {
  if (!msgtype) {
    msgtype = 'error'
  }
  // eslint-disable-next-line
  if (time==undefined) {
    time = 2500
  }
  Message({
    showClose: true,
    type: msgtype,
    message: msg,
    duration: time,
  })
}
export function clearLoading() {
  const loadingNodeList = document.getElementsByClassName('api-common-loading')
  if (loadingNodeList) {
    for (let i = 0; i < loadingNodeList.length; i++) {
      loadingNodeList[i].parentNode.removeChild(loadingNodeList[i])
    }
  }
}
