Page({
  data: {
    title: '联系陈立玲',
    subtitle: '这里是陈立玲的个人介绍与过往展示，可通过微信或电话进一步了解本人经历。',
    phone: '13581206661',
    wechat: '13581206661',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/62f504e4000000001e01f530'
  },

  copyWechat() {
    this.copyText(this.data.wechat)
  },

  addWechatFriend() {
    wx.setClipboardData({
      data: this.data.wechat,
      success() {
        wx.showModal({
          title: '微信号已复制',
          content: '请打开微信，粘贴微信号搜索并添加好友。添加时可备注：个人介绍。',
          showCancel: false
        })
      }
    })
  },

  copyText(value) {
    wx.setClipboardData({
      data: value,
      success() {
        wx.showToast({
          title: '已复制',
          icon: 'success'
        })
      }
    })
  },

  callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },

  openXiaohongshu() {
    wx.setClipboardData({
      data: this.data.xiaohongshu,
      success() {
        wx.showModal({
          title: '小红书主页已复制',
          content: '请打开小红书或浏览器，粘贴链接查看个人主页。',
          showCancel: false
        })
      }
    })
  },

  onShareAppMessage() {
    return {
      title: '陈立玲个人介绍',
      path: '/pages/index/index'
    }
  },

  onShareTimeline() {
    return {
      title: '陈立玲个人介绍'
    }
  }
})
