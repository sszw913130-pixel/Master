const storage = {
  get: (key: string) => {
    const str = localStorage.getItem(key)
    if (!str) return null
    try {
      return JSON.parse(str)
    } catch (err) {
      console.warn('本地存储解析失败，清除key：', key)
      localStorage.removeItem(key)
      return null
    }
  },
  set: (key: string, value: any) => {
    // 过滤 undefined，避免 JSON.stringify(undefined) 存入脏数据
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove: (key: string) => {
    return localStorage.removeItem(key)
  },
  clear: () => {
    return localStorage.clear()
  }
}
export default storage
