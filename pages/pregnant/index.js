Page({
  data: {
    title: '宝妈照护',
    subtitle: '围绕日常照护、喂养支持、舒缓按摩和身心恢复，帮助宝妈在月子期更安心地休息和恢复。',
    sections: [
      {
        title: '生活护理',
        desc: '照顾宝妈起居、休息和抱娃后的日常疲劳，协助衣物清洗、卧房整理，保持室内清洁和空气清新。',
        detail: [
          { label: '服务', tone: 'green', items: ['照顾日常起居和休息安排', '协助衣物处理、卧房整理', '留意抱娃、哺乳后的疲劳状态'] },
          { label: '好处', tone: 'blue', items: ['减少产后琐事消耗', '让宝妈把精力留给休息和哺乳', '舒适环境更利于身体恢复'] }
        ]
      },
      {
        title: '乳房护理',
        desc: '指导正确母乳喂养，协助防止和缓解奶胀，帮助宝妈建立更顺畅的喂养节奏。',
        detail: [
          { label: '服务', tone: 'green', items: ['指导哺乳姿势和含接方式', '协助观察奶胀、堵奶等不适', '帮助建立更顺畅的喂养节奏'] },
          { label: '好处', tone: 'blue', items: ['减少疼痛和哺乳焦虑', '帮助宝宝稳定获得营养', '让宝妈更有信心坚持母乳喂养'] }
        ]
      },
      {
        title: '健康护理',
        desc: '关注产褥期常见不适，观察身体恢复情况，发现异常及时提醒家人处理。',
        detail: [
          { label: '服务', tone: 'green', items: ['观察精神状态、休息和饮食', '关注恶露和产褥期常见不适', '发现异常及时提醒家人咨询医生'] },
          { label: '好处', tone: 'blue', items: ['产后恢复不靠硬扛', '及时观察能减少风险', '让妈妈和家人更安心'] }
        ]
      },
      {
        title: '产后恢复',
        desc: '指导产妇操和形体恢复训练，配合休息与饮食，帮助身体逐步恢复。',
        detail: [
          { label: '服务', tone: 'green', items: ['根据状态提醒温和恢复动作', '配合休息、饮食和生活节奏', '循序渐进，不勉强训练'] },
          { label: '好处', tone: 'blue', items: ['促进循环和体力恢复', '帮助改善产后体态', '以舒适和安全为前提'] }
        ]
      },
      {
        title: '产后舒缓按摩',
        desc: '曾在美容院工作多年，具备按摩经验，可根据宝妈状态进行温和舒缓。',
        detail: [
          { label: '服务', tone: 'green', items: ['根据宝妈身体状态做温和按摩', '重点舒缓肩颈、腰背、手臂等疲劳部位', '力度以舒适放松为主，不做勉强操作'] },
          { label: '好处', tone: 'blue', items: ['帮助缓解抱娃、哺乳带来的肩颈腰背疲劳', '促进放松和休息', '让宝妈在月子期获得更细致的照顾'] }
        ]
      },
      {
        title: '心理指导',
        desc: '与宝妈交流育儿心得，提供情绪支持，帮助缓解产后焦虑。',
        detail: [
          { label: '服务', tone: 'green', items: ['陪宝妈交流育儿问题', '协助家人理解宝妈的辛苦', '给予稳定陪伴和情绪支持'] },
          { label: '好处', tone: 'blue', items: ['缓解睡眠不足和育儿压力带来的焦虑', '帮助宝妈保持更稳定的情绪', '让家庭照护氛围更轻松'] }
        ]
      }
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
