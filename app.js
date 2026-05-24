App({
  onLaunch() {
    this.setSystemInfo()
  },

  setSystemInfo() {
    const menuButtonObject = wx.getMenuButtonBoundingClientRect()
    const windowInfo = wx.getWindowInfo()
    const statusBarHeight = windowInfo.statusBarHeight
    const navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2

    this.globalData.navHeight = navHeight
    this.globalData.navTop = menuButtonObject.top
    this.globalData.windowHeight = windowInfo.windowHeight
    this.globalData.menuButtonObject = menuButtonObject
  },

  globalData: {
    navHeight: 0,
    navTop: 0,
    windowHeight: 0,
    menuButtonObject: null
  }
})
