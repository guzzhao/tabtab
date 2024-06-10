import { SRARCH_URL } from '~/utils/const'


export function isVar(str) {
  return /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(str)
}

export function isTimestamp(str) {
  // 使用正则表达式检查字符串是否仅由数字组成
  if (!/^\d+$/.test(str))
    return false

  // 尝试将字符串转换为数字
  const timestamp = Number.parseInt(str, 10)

  // 如果转换失败或者数字太大（大于最大的 JavaScript 数字），则不是时间戳
  if (Number.isNaN(timestamp) || timestamp > Number.MAX_SAFE_INTEGER || timestamp < 631123200)
    return false

  // 创建一个日期对象，看它是否有效
  const date = new Date(timestamp)

  // 如果日期对象无效，则不是时间戳
  return !Number.isNaN(date.getTime())
}

export function isBase64(str) {
  // 正则表达式检测
  const regex = /^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
  if (regex.test(str) && str) {
    try {
      return btoa(atob(str)) === str
    }
    catch (err) {
      return false
    }
  }
  else {
    return false
  }
}
export function isDate(str) {
  if (/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.test(str))
    return true
}


export function openNewTab(type,query){
  const baseUrl =  SRARCH_URL[type].url
  chrome.tabs.create({ url: baseUrl.replace('{query}', query), active: true })

}
