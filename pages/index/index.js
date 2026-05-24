const birthYear = 1983
const careerStartYear = 2018

function getAge() {
  return new Date().getFullYear() - birthYear
}

function getCareerYears() {
  return new Date().getFullYear() - careerStartYear
}

function getPersonalInfo() {
  return [
    { label: '年龄', value: `${getAge()}岁` },
    { label: '户籍', value: '湖北恩施' },
    { label: '学历', value: '高中' },
    { label: '家庭', value: '已婚' }
  ]
}

function getWorkInfo() {
  return [
    { label: '从业年限', value: `${getCareerYears()}年` },
    { label: '照顾宝宝', value: '50+' }
  ]
}

Page({
  data: {
    birthYear,
    careerStartYear,
    profile: {
      name: '陈立玲',
      role: '专业月嫂 / 新生儿护理师',
      photo: '/assets/profile/chen-liling.jpg',
      summary: '月嫂不是保姆，核心工作是对产后妈妈和新生儿进行专业护理。陈立玲专注宝宝健康成长、妈妈身体恢复和家庭育儿指导，让宝妈安心调养，家人少些慌乱。',
      tags: [
        { name: '新生儿护理', url: '/pages/baby/index' },
        { name: '产妇恢复', url: '/pages/pregnant/index' },
        { name: '科学月子餐', url: '/pages/confinement/index' }
      ]
    },
    phone: '13581206661',
    wechat: '13581206661',
    personalInfo: getPersonalInfo(),
    workInfo: getWorkInfo(),
    projects: [
      {
        name: '宝宝护理',
        type: 'Baby Care',
        desc: '围绕新生儿日常起居做细致照护，包含喂养、拍嗝、洗澡、抚触、奶具消毒、衣物清洗和睡眠观察；同时留意黄疸、湿疹、尿布疹等常见情况。',
        tags: ['喂养睡眠', '洗澡抚触', '健康观察'],
        url: '/pages/baby/index'
      },
      {
        name: '产后妈妈护理',
        type: 'Mother Care',
        desc: '关注妈妈起居、乳房护理、身体恢复、情绪状态和休息节奏；结合过往美容院按摩经验，帮助缓解肩颈、腰背和哺乳带来的疲劳。',
        tags: ['生活照护', '产后恢复', '舒缓按摩'],
        url: '/pages/pregnant/index'
      },
      {
        name: '月子餐建议',
        type: 'Meal Plan',
        desc: '围绕产后恢复安排营养膳食，兼顾清淡、滋养和易消化；可参考既有菜谱搭配禽类、猪肉、牛肉、鱼虾、汤品、主食和点心。',
        tags: ['营养搭配', '清淡易消化', '阶段调理'],
        url: '/pages/confinement/index'
      },
      {
        name: '家庭沟通与育儿指导',
        type: 'Family Guide',
        desc: '和妈妈交流育儿心得，提醒家人一起参与照护；用耐心沟通减少新手家庭的紧张感，让妈妈恢复更安心，家人配合更顺畅。',
        tags: ['育儿交流', '家人配合', '耐心陪伴'],
        url: '/pages/baby/index'
      }
    ],
    certificates: [
      {
        title: '母婴护理师高级',
        image: '/assets/certificates/muying-hulishi-gaoji-1.jpg',
        issuer: '中国商业联合会',
        issueDate: '2023年9月20日',
        highlights: [
          { label: '岗位职称', value: '母婴护理师 高级' },
          { label: '证书类型', value: '职业能力培训证书' },
          { label: '能力重点', value: '具备母婴护理岗位相关专业知识和服务技能' }
        ]
      },
      {
        title: '小儿推拿高级课程',
        image: '/assets/certificates/xiaoer-tuina-gaoji.jpg',
        issuer: '上海牵翼职业技能培训有限公司',
        issueDate: '2023年12月15日',
        highlights: [
          { label: '专修课程', value: '小儿推拿' },
          { label: '课程等级', value: '高级' },
          { label: '课程重点', value: '小儿推拿发展简史、生理病理特点、手法特点、全身穴位讲解和常见症状调理手法' }
        ]
      },
      {
        title: '催乳高级课程',
        image: '/assets/certificates/cuiru-gaoji.jpg',
        issuer: '上海牵翼职业技能培训有限公司',
        issueDate: '2023年12月12日',
        highlights: [
          { label: '专修课程', value: '催乳' },
          { label: '课程等级', value: '高级' },
          { label: '课程重点', value: '催乳师礼仪沟通、乳房发育与生理结构、科学喂养指导、无痛开奶与乳腺炎处理手法' }
        ]
      },
      {
        title: '产后康复高级课程',
        image: '/assets/certificates/chanhou-kangfu-gaoji.jpg',
        issuer: '上海牵翼职业技能培训有限公司',
        issueDate: '2023年12月21日',
        highlights: [
          { label: '专修课程', value: '产后康复' },
          { label: '课程等级', value: '高级' },
          { label: '课程重点', value: '产后面部清洁、拨筋按摩、头部按摩、卵巢保养、子宫复位、四肢梳理与修复操' }
        ]
      }
    ],
    reviews: [
      {
        title: '护理细心周到',
        desc: '客户反馈宝宝皮肤护理恢复快，月子餐和按摩服务都很满意。',
        image: '/assets/reviews/review-1.jpg'
      },
      {
        title: '26天专业照护',
        desc: '客户反馈宝宝作息、肚脐护理、皮肤观察和妈妈产后恢复都照顾到位。',
        image: '/assets/reviews/review-2.jpg'
      },
      {
        title: '服务热情细心',
        desc: '客户反馈做事勤快、饭菜可口，宝宝护理细致，能及时提醒家人关注宝宝状态。',
        image: '/assets/reviews/review-3.jpg'
      }
    ],
    currentCertificate: null,
    currentReview: null
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '陈立玲月嫂'
    })
  },

  callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },

  addWechatFriend() {
    wx.setClipboardData({
      data: this.data.wechat,
      success() {
        wx.showModal({
          title: '微信号已复制',
          content: '请打开微信，粘贴微信号搜索并添加好友。添加时可备注：陈立玲。',
          showCancel: false
        })
      }
    })
  },

  goService(e) {
    wx.switchTab({
      url: e.currentTarget.dataset.url
    })
  },

  goProfileTag(e) {
    wx.switchTab({
      url: e.currentTarget.dataset.url
    })
  },

  openCertificate(e) {
    this.setData({
      currentCertificate: this.data.certificates[e.currentTarget.dataset.index]
    })
  },

  closeCertificate() {
    this.setData({
      currentCertificate: null
    })
  },

  openReview(e) {
    this.setData({
      currentReview: this.data.reviews[e.currentTarget.dataset.index]
    })
  },

  closeReview() {
    this.setData({
      currentReview: null
    })
  },

  noop() {},

  copyText(value, title = '已复制') {
    wx.setClipboardData({
      data: value,
      success() {
        wx.showToast({
          title,
          icon: 'success'
        })
      }
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.profile.name}个人介绍`,
      path: '/pages/index/index'
    }
  },

  onShareTimeline() {
    return {
      title: `${this.data.profile.name}个人介绍`
    }
  }
})
