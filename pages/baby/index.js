Page({
  data: {
    title: '宝宝护理',
    subtitle: '新生儿护理不是简单看护，而是通过生活护理、疾病观察、健康护理、感知训练和情感安抚，呵护宝宝健康成长。',
    sections: [
      {
        title: '日常起居',
        desc: '科学喂养、宝宝抚触、洗澡、换洗尿布、奶具清洗消毒、衣物和被褥整理。',
        detail: [
          { label: '服务', tone: 'green', items: ['按需喂养、拍嗝、换尿布', '洗澡抚触、整理宝宝衣物被褥', '奶具清洗消毒，保持用品洁净'] },
          { label: '好处', tone: 'blue', items: ['减少皮肤刺激和肠胃不适', '帮助宝宝建立稳定作息', '让宝宝在规律照护中获得安全感'] }
        ]
      },
      {
        title: '健康护理',
        desc: '测体温、皮肤护理、口腔护理、脐部护理，帮助家人掌握日常观察重点。',
        detail: [
          { label: '服务', tone: 'green', items: ['测体温，观察精神和吃奶状态', '皮肤、口腔、脐部日常护理', '提醒家人关注红肿、异味、渗血等异常'] },
          { label: '好处', tone: 'blue', items: ['降低感染和皮肤问题风险', '帮助脐带残端顺利愈合', '让宝宝更舒服地适应出生后的环境'] }
        ]
      },
      {
        title: '常见情况观察',
        desc: '观察黄疸、湿疹、尿布疹、新生儿红斑、大小便异常等，及时提醒并协助处理。',
        detail: [
          { label: '服务', tone: 'green', items: ['观察黄疸、湿疹、尿布疹', '记录吃奶、睡眠、大小便变化', '发现明显异常及时提醒家人处理'] },
          { label: '好处', tone: 'blue', items: ['宝宝不会表达不适，需要成人细心观察', '早发现能减少拖延和焦虑', '帮助新手爸妈更安心判断宝宝状态'] }
        ]
      },
      {
        title: '情感与体能开发',
        desc: '指导妈妈做婴儿操和互动安抚，锻炼四肢协调，给予宝宝稳定的情感陪伴。',
        detail: [
          { label: '服务', tone: 'green', items: ['温和抚触和婴儿操', '指导妈妈进行亲子互动', '根据宝宝状态安排安抚节奏'] },
          { label: '好处', tone: 'blue', items: ['促进四肢协调和感知发展', '帮助宝宝放松身体、稳定情绪', '增强亲子连接和安全感'] }
        ]
      }
    ],
    dailyPhotos: [
      { src: '/assets/baby-care/daily-01.jpg', tall: true },
      { src: '/assets/baby-care/daily-02.jpg' },
      { src: '/assets/baby-care/daily-03.jpg' },
      { src: '/assets/baby-care/daily-04.jpg', tall: true },
      { src: '/assets/baby-care/daily-05.jpg', tall: true },
      { src: '/assets/baby-care/daily-06.jpg' },
      { src: '/assets/baby-care/daily-07.jpg' },
      { src: '/assets/baby-care/daily-08.jpg', tall: true },
      { src: '/assets/baby-care/daily-09.jpg', tall: true },
      { src: '/assets/baby-care/daily-10.jpg' },
      { src: '/assets/baby-care/daily-11.jpg' },
      { src: '/assets/baby-care/daily-12.jpg', tall: true },
      { src: '/assets/baby-care/daily-13.jpg' },
      { src: '/assets/baby-care/daily-14.jpg', tall: true }
    ],
    currentKnowledge: null
  },

  openKnowledge(e) {
    this.setData({
      currentKnowledge: this.data.sections[e.currentTarget.dataset.index]
    })
  },

  closeKnowledge() {
    this.setData({
      currentKnowledge: null
    })
  },

  noop() {
  }
})
