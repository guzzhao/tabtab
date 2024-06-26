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


export const base64 = 'base64'
