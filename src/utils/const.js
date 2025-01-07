export const SRARCH_URL = {
  baidu: {
    key: 'baidu',
    // icon: 'i-ri-baidu-fill',
    url: 'https://www.baidu.com/s?word={query}',
  },
  bing: {
    key: 'bing',
    // icon: 'i-mdi-microsoft-bing',
    url: 'https://cn.bing.com/search?q={query}',
  },
  google: {
    key: 'google',
    // icon: 'i-ri-google-fill',
    url: 'https://www.google.com/search?q={query}',
  },
}

export const SRARCH_LIST = Object.keys(SRARCH_URL)



export const toolsList = [
  {
    name: 'base64',
    cnName: 'Base64',
    component: 'Base64'
  },
  {
    name: 'hash',
    cnName: '哈希',
    component: 'Hash'
  },
  {
    name: 'math',
    cnName: '数学计算',
    component: 'Math'
  }, {
    name: 'var',
    cnName: '变量名',
    component: 'Var'
  },
  {
    name: 'time',
    cnName: '时间日期',
    component: 'Time'
  },
  {
    name: 'color',
    cnName: '颜色',
    component: 'Color'
  },
  {
    name: 'uuid',
    cnName: 'UUID生成',
    component: 'UUID'
  },
  {
    name: 'uniqueId',
    cnName: '随机字符',
    component: 'UniqueId'
  },
]

