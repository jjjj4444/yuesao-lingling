const phone = '13581206661'
const wechat = '13581206661'
const birthYear = 1983
const careerStartYear = 2018

const profile = {
  name: '陈立玲',
  shareTitle: '陈立玲个人介绍',
  photo: './assets/profile/chen-liling.jpg'
}

const projects = [
  {
    name: '宝宝护理',
    type: 'Baby Care',
    desc: '围绕新生儿日常起居做细致照护，包含喂养、拍嗝、洗澡、抚触、奶具消毒、衣物清洗和睡眠观察；同时留意黄疸、湿疹、尿布疹等常见情况。',
    tags: ['喂养睡眠', '洗澡抚触', '健康观察'],
    tab: 'baby'
  },
  {
    name: '宝妈照护',
    type: 'Mother Care',
    desc: '关注妈妈起居、乳房护理、身体恢复、情绪状态和休息节奏；结合过往美容院按摩经验，帮助缓解肩颈、腰背和哺乳带来的疲劳。',
    tags: ['生活照护', '产后恢复', '舒缓按摩'],
    tab: 'pregnant'
  },
  {
    name: '月子餐建议',
    type: 'Meal Plan',
    desc: '围绕产后恢复安排营养膳食，兼顾清淡、滋养和易消化；可参考既有菜谱搭配蛋奶、鱼虾、肉禽、蔬菜、主食、汤粥和点心。',
    tags: ['营养搭配', '清淡易消化', '阶段调理'],
    tab: 'meals'
  },
  {
    name: '家庭沟通与育儿指导',
    type: 'Family Guide',
    desc: '和妈妈交流育儿心得，提醒家人一起参与照护；用耐心沟通减少新手家庭的紧张感，让妈妈恢复更安心，家人配合更顺畅。',
    tags: ['育儿交流', '家人配合', '耐心陪伴'],
    tab: 'baby'
  }
]

const babySections = [
  {
    title: '日常起居',
    desc: '科学喂养、宝宝抚触、洗澡、换洗尿布、奶具清洗消毒、衣物和被褥整理。',
    detail: [
      { label: '我能提供', items: ['按需喂养、拍嗝、换尿布', '洗澡抚触、整理宝宝衣物被褥', '奶具清洗消毒，保持用品洁净'] },
      { label: '为什么重要', items: ['减少皮肤刺激和肠胃不适', '帮助宝宝建立稳定作息', '让宝宝在规律照护中获得安全感'] }
    ]
  },
  {
    title: '健康护理',
    desc: '测体温、皮肤护理、口腔护理、脐部护理，帮助家人掌握日常观察重点。',
    detail: [
      { label: '我能提供', items: ['测体温，观察精神和吃奶状态', '皮肤、口腔、脐部日常护理', '提醒家人关注红肿、异味、渗血等异常'] },
      { label: '为什么重要', items: ['降低感染和皮肤问题风险', '帮助脐带残端顺利愈合', '让宝宝更舒服地适应出生后的环境'] }
    ]
  },
  {
    title: '常见情况观察',
    desc: '观察黄疸、湿疹、尿布疹、新生儿红斑、大小便异常等，及时提醒并协助处理。',
    detail: [
      { label: '我能提供', items: ['观察黄疸、湿疹、尿布疹', '记录吃奶、睡眠、大小便变化', '发现明显异常及时提醒家人处理'] },
      { label: '为什么重要', items: ['宝宝不会表达不适，需要成人细心观察', '早发现能减少拖延和焦虑', '帮助新手爸妈更安心判断宝宝状态'] }
    ]
  },
  {
    title: '情感与体能开发',
    desc: '指导妈妈做婴儿操和互动安抚，锻炼四肢协调，给予宝宝稳定的情感陪伴。',
    detail: [
      { label: '我能提供', items: ['温和抚触和婴儿操', '指导妈妈进行亲子互动', '根据宝宝状态安排安抚节奏'] },
      { label: '为什么重要', items: ['促进四肢协调和感知发展', '帮助宝宝放松身体、稳定情绪', '增强亲子连接和安全感'] }
    ]
  }
]

const pregnantSections = [
  {
    title: '生活护理',
    desc: '照顾宝妈起居、休息和抱娃后的日常疲劳，协助衣物清洗、卧房整理，保持室内清洁和空气清新。',
    detail: [
      { label: '我能提供', items: ['照顾日常起居和休息安排', '协助衣物处理、卧房整理', '留意抱娃、哺乳后的疲劳状态'] },
      { label: '为什么重要', items: ['减少产后琐事消耗', '让宝妈把精力留给休息和哺乳', '舒适环境更利于身体恢复'] }
    ]
  },
  {
    title: '乳房护理',
    desc: '指导正确母乳喂养，协助防止和缓解奶胀，帮助宝妈建立更顺畅的喂养节奏。',
    detail: [
      { label: '我能提供', items: ['指导哺乳姿势和含接方式', '协助观察奶胀、堵奶等不适', '帮助建立更顺畅的喂养节奏'] },
      { label: '为什么重要', items: ['减少疼痛和哺乳焦虑', '帮助宝宝稳定获得营养', '让宝妈更有信心坚持母乳喂养'] }
    ]
  },
  {
    title: '产后舒缓按摩',
    desc: '曾在美容院工作多年，具备按摩经验，可根据宝妈状态进行温和舒缓。',
    detail: [
      { label: '我能提供', items: ['根据宝妈身体状态做温和按摩', '重点舒缓肩颈、腰背、手臂等疲劳部位', '力度以舒适放松为主，不做勉强操作'] },
      { label: '为什么重要', items: ['帮助缓解抱娃、哺乳带来的肩颈腰背疲劳', '促进放松和休息', '让宝妈在月子期获得更细致的照顾'] }
    ]
  },
  {
    title: '健康与心理支持',
    desc: '关注产褥期常见不适，观察身体恢复和情绪状态，发现异常及时提醒家人处理。',
    detail: [
      { label: '我能提供', items: ['观察休息、饮食、精神状态', '陪宝妈交流育儿问题', '协助家人理解宝妈的辛苦'] },
      { label: '为什么重要', items: ['及时观察能减少风险', '缓解睡眠不足和育儿压力带来的焦虑', '让家庭照护氛围更轻松'] }
    ]
  }
]

const babyDailyPhotos = []

const certificates = [
  {
    title: '母婴护理师高级',
    image: './assets/certificates/muying-hulishi-gaoji-1.jpg',
    desc: '职业能力培训证书，岗位及职称：母婴护理师 高级。',
    details: ['发证单位：中国商业联合会', '发证日期：2023年9月20日', '能力重点：具备母婴护理岗位相关专业知识和服务技能']
  },
  {
    title: '小儿推拿高级课程',
    image: './assets/certificates/xiaoer-tuina-gaoji.jpg',
    desc: '专修课程：小儿推拿，课程等级：高级。',
    details: ['发证日期：2023年12月15日', '课程重点：小儿推拿发展、生理病理特点、手法特点、穴位讲解和常见症状调理手法']
  },
  {
    title: '催乳高级课程',
    image: './assets/certificates/cuiru-gaoji.jpg',
    desc: '专修课程：催乳，课程等级：高级。',
    details: ['发证日期：2023年12月12日', '课程重点：催乳师沟通、乳房结构、科学喂养指导、开奶与乳腺炎相关护理知识']
  },
  {
    title: '产后康复高级课程',
    image: './assets/certificates/chanhou-kangfu-gaoji.jpg',
    desc: '专修课程：产后康复，课程等级：高级。',
    details: ['发证日期：2023年12月21日', '课程重点：产后按摩、头部护理、身体梳理、恢复操和产后修复相关内容']
  }
]

const reviews = [
  { title: '护理细心周到', desc: '客户反馈宝宝皮肤护理恢复快，月子餐和按摩服务都很满意。', image: './assets/reviews/review-1.jpg' },
  { title: '26天专业照护', desc: '客户反馈宝宝作息、肚脐护理、皮肤观察和妈妈产后恢复都照顾到位。', image: './assets/reviews/review-2.jpg' },
  { title: '服务热情细心', desc: '客户反馈做事勤快、饭菜可口，宝宝护理细致，能及时提醒家人关注宝宝状态。', image: './assets/reviews/review-3.jpg' }
]

function hasAny(name, keywords) {
  return keywords.some(keyword => name.includes(keyword))
}

function inferEffect(name, category) {
  if (hasAny(name, ['猪肝', '鸭血'])) return `${name}含铁较丰富，适合产后补充气血和恢复体力。`
  if (hasAny(name, ['猪腰', '猪心', '猪肚'])) return `${name}偏温补，能补充蛋白质，适合身体恢复期少量搭配。`
  if (hasAny(name, ['牛奶', '奶香', '酸奶'])) return `${name}能补充钙和能量，口感温和，适合少量多次搭配。`
  if (hasAny(name, ['虾', '鲍', '贝', '蛤', '花甲'])) return `${name}鲜味足、蛋白质较高，适合帮助妈妈补充营养。`
  if (hasAny(name, ['鱼', '鲈', '鳕', '带鱼', '黄鳝', '龙利', '鲤'])) return `${name}低脂高蛋白，口感细嫩，适合产后清淡补养。`
  if (hasAny(name, ['牛肉', '牛腩', '牛排', '牛仔骨', '牛柳', '牛肉粒', '羊肉'])) return `${name}蛋白质和铁含量较好，有助于增强饱腹感和体力。`
  if (hasAny(name, ['鸡', '鸽', '排骨'])) return `${name}肉质相对温和，能补充优质蛋白，适合恢复期主菜。`
  if (hasAny(name, ['蛋', '玉子烧', '滑蛋', '厚蛋烧'])) return `${name}提供优质蛋白，质地柔软，适合作为早餐或加餐。`
  if (hasAny(name, ['红枣', '红糖', '枸杞', '桂花', '五红'])) return `${name}味道温润，适合补充能量，帮助妈妈改善餐间状态。`
  if (hasAny(name, ['黑米', '紫米', '糙米', '杂粮', '燕麦'])) return `${name}提供更稳定的主食能量，膳食纤维也更丰富。`
  if (hasAny(name, ['小米', '粥', '米糊'])) return `${name}软糯易消化，适合产后胃口一般时补充能量。`
  if (hasAny(name, ['汤', '羹'])) return `${name}温润补水，能配合正餐补充营养和食欲。`
  if (hasAny(name, ['山药', '南瓜', '紫薯', '红薯', '玉米', '土豆'])) return `${name}提供碳水和膳食纤维，适合维持体力和饱腹感。`
  if (hasAny(name, ['菠菜', '西兰花', '青菜', '娃娃菜', '油麦菜', '生菜', '菜心'])) return `${name}清爽少油，补充叶菜营养，帮助月子期饮食更均衡。`
  if (hasAny(name, ['菌', '菇', '木耳', '口蘑', '金针菇', '香菇'])) return `${name}鲜香清淡，能增加膳食纤维，让餐食更有层次。`
  if (hasAny(name, ['豆腐', '豆角', '豆芽', '黄豆'])) return `${name}植物蛋白丰富，口感温和，适合与肉蛋菜一起搭配。`
  if (hasAny(name, ['水果', '苹果', '香蕉', '梨', '橙', '木瓜'])) return `${name}适合作为加餐，补充水分和自然甜味。`
  if (hasAny(name, ['吐司', '包', '饼', '馒头', '饭', '面', '馄饨', '饺', '烧麦'])) return `${name}能补充主食能量，适合搭配蛋白质和蔬菜一起吃。`
  if (category === '蔬菜') return `${name}能增加蔬菜摄入，帮助补充维生素和膳食纤维。`
  if (category === '点心') return `${name}适合两餐之间补充能量，避免空腹时间过长。`
  return `${name}口味温和，可按恢复情况搭配正餐，帮助丰富月子期饮食。`
}

const mealImages = {
  '烤蛋挞': './assets/meals/烤蛋挞.jpg',
  '番茄炒鸡蛋': './assets/meals/番茄炒鸡蛋.jpg',
  '番茄花菜': './assets/meals/番茄花菜.jpg',
  '水炒西芹': './assets/meals/水炒西芹.jpg',
  '白灼猪腰': './assets/meals/白灼猪腰.jpg',
  '白米饭': './assets/meals/白米饭.jpg',
  '糖醋排骨': './assets/meals/糖醋排骨.jpg',
  '紫米牛奶': './assets/meals/紫米牛奶.jpg',
  '肉末茄子': './assets/meals/肉末茄子.jpg',
  '肉末豆角': './assets/meals/肉末豆角.jpg',
  '芹菜炒牛肉': './assets/meals/芹菜炒牛肉.jpg',
  '芹菜牛肉': './assets/meals/芹菜牛肉.jpg',
  '虾仁玉米粒': './assets/meals/虾仁玉米粒.jpg',
  '酸奶小松饼': './assets/meals/酸奶小松饼.jpg',
  '青菜蛋汤': './assets/meals/青菜蛋汤.jpg',
  '玉米渣饭': './assets/meals/玉米渣饭.jpg',
  '自制上汤娃娃菜': './assets/meals/自制上汤娃娃菜.jpg',
  '鸡汤': './assets/meals/鸡汤.jpg',
  '黑芝麻饭': './assets/meals/黑芝麻饭.jpg'
}

function dish(name, tag, category) {
  return {
    name,
    image: mealImages[name] || './assets/ui/default.png',
    assetPath: `./assets/meals/${name}.png`,
    tag,
    effect: inferEffect(name, category)
  }
}

const baseDishes = {
  蛋奶: ['水煮蛋', '煎鸡蛋', '蒸鸡蛋羹', '牛奶滑嫩蛋', '糖醋荷包蛋', '厚蛋烧', '黄瓜炒蛋', '热牛奶', '牛奶'],
  鱼虾: ['蒸鲈鱼', '鲈鱼滑蛋', '水煮虾', '昂刺鱼蒸蛋', '油焖虾', '白灼虾', '虾仁滑蛋', '虾仁玉米粒', '番茄巴沙鱼'],
  肉禽: ['白灼猪腰', '水煮牛肉', '白切鸡', '白木耳炒肉片', '水煮猪肝', '芹菜炒牛肉', '水煮猪心', '肉末豆角', '肉片炒小平菇', '刺毛肉圆', '蒸排骨', '萝卜肉卷', '爆炒猪肝', '糯米蒸鸡翅', '芹菜肉丝', '爆炒猪心', '茭白炒肉片', '鲜汁锦肉片'],
  蔬菜: ['温拌鸡毛菜', '温拌西兰花', '温拌莴笋', '蔬菜沙拉', '清炒土豆丝', '沙拉拌西兰花甜玉米', '菠菜玉米粒', '清炒茼蒿', '清炒娃娃菜', '香菇青菜', '温拌莴笋丝', '咸蛋黄花菜', '番茄花菜', '清炒油麦菜', '清炒胡萝卜丝', '清炒生菜', '口蘑温拌菠菜', '炒包心菜', '上汤娃娃菜', '温拌豆角'],
  主食: ['蒸铁棍山药', '蒸贝贝南瓜', '水煮玉米', '全麦吐司', '香煎馒头片', '黄油香煎吐司片', '蒸素馅饺子', '黑米饭', '红豆饭', '南瓜饭', '糙米饭', '紫薯饭', '花生饭', '薏仁饭', '玉米渣饭', '黑芝麻饭', '杂粮饭', '白米饭', '红枣饭', '红薯饭', '小馄饨', '饺子', '番茄青菜汤面'],
  汤粥: ['红豆粥', '小米苹果粥', '黑米粥', '玉米汁', '小米山药粥', '紫薯糊', '红糖红豆薏米水', '陈皮薏米红枣水', '红枣枸杞水', '冰糖雪梨水', '苹果红枣水', '番茄蛋汤', '鲈鱼骨肉脂豆腐汤', '丝瓜蛋汤', '萝卜丝蛋汤', '黄瓜蛋汤', '豆腐丝瓜汤', '娃娃菜荷包蛋汤', '五红汤', '奶香红豆香蕉', '紫米牛奶', '香蕉奶昔', '热橙汁', '银耳南瓜羹', '奶香玉米鸡蛋羹', '虾皮冬瓜汤', '麻油猪肝菠菜汤', '紫菜虾皮汤', '青菜蛋汤', '裙带菜豆腐虾皮汤', '青菜蘑菇汤', '黄豆芽鸡蛋汤', '肉丝粥', '猪肝粥', '虾仁粥'],
  点心: ['每日坚果一包', '时令水果', '芝麻糊', '酸奶小松饼', '橙汁山药', '肉松吐司卷', '豆沙吐司饼', '烤蛋挞', '酸奶西多士', '紫薯红薯泥酸奶盖', '牛奶水果捞']
}

const additionalDishText = `
水煮蛋、玉子烧、鸡蛋小汉堡、煎太阳蛋、蔬菜蛋卷、虾仁鸡蛋羹、煎荷包蛋、小米苹果红枣粥、奶香南瓜糊、小米山药红枣粥、八宝粥、苹果红枣米糊、鸡蛋菠菜饼、黄油香煎吐司片、包子、火腿三明治、烧麦、黑芝麻馒头、全麦馅饼、菠菜炒玉米粒、蔬菜沙拉、温拌时蔬、温拌西兰花、水炒西芹、炒包心菜
沙拉蛋黄虾、海苔蒸肉卷、番茄巴沙鱼、香煎带鱼、白萝卜炖羊肉、一品西红柿、油焖虾、坚果碎煎杏鲍菇、蛋黄鸡翅、鸭血豆腐、油焖茭白、爆炒花甲、青椒肉丝、蒜蓉金针菇、肉丸青菜汤、蔬菜蛋汤、鸽子虫草花汤、鲫鱼豆腐汤、豆腐鸡蛋羹、鲜虾花甲汤、排骨山药汤
凤梨香煎牛肉粒、芙蓉虾仁、手撕鸡、照烧鸡腿、芹菜滑牛肉、糖醋排骨、羊肚菌酿虾滑、肉末蒸蛋、肉末豆角、虾仁玉米粒、苹果鸡丁、咸蛋黄虾仁豆腐、日本豆腐蒸蛋、丝瓜蛋汤、胡萝卜丝青菜汤、菠菜蛋汤、萝卜丝虾皮蛋汤、裙带菜荷包蛋汤、黄瓜蛋汤、丝瓜虾皮汤
糖醋荷包蛋、牛奶滑蛋、水煮蛋、荷包蛋、蔬菜厚蛋烧、酱油泡蛋、红糖水煮荷包蛋、百合莲子糯米粥、牛奶红枣黑米粥、青菜糯米粥、南瓜红枣小米粥、紫薯银耳糯米粥、黑米莲子粥、菠菜鸡蛋饼、蒸贝贝南瓜、蒸紫薯、蒸肉包、黄油香煎吐司、拇指煎包、香煎肉饼
红烧鸡翅、松鼠鱼、蒜蓉蒸鲍鱼、番茄牛腩、水煮牛肉、椒盐虾、可乐酱乳鸽、番茄鲈鱼片、香煎口蘑、蔬菜三鲜、肉末豆角、沙拉虾仁、萝卜肉卷、蒜香烤南瓜、鱼骨蘑菇汤、鸽子汤、清汤羊肉、乌鸡汤、丝瓜肉片汤、猪肚鸡汤、羊肉山药萝卜汤
苏格兰蛋、红烧狮子头、咖喱鸡块、白切羊肉、爆炒猪肚、可乐鸡翅、红烧肉、茄汁虾、蒸带鱼、西式蒜香煎虾尾、肉末茄子、番茄肉片、煎虾滑、金针菇炒蛋、黄豆芽鸡蛋汤、虾皮紫菜汤、西兰花豆腐羹、黄瓜蛋汤、金针菇荷包蛋汤、青菜汤、番茄蛋汤
煎荷包蛋、三明治、火腿手抓饼、水煮蛋、鸡蛋羹、番茄炒鸡蛋、煎蛋、芹菜瘦肉粥、南瓜小米米糊、疙瘩汤、银耳糯米粥、小米红豆红枣粥、青菜粥、烙饼卷土豆丝、水煮玉米、蒸紫薯、蒸包子、生煎包、土豆丝、蔬菜沙拉、清炒菜花、清炒紫甘蓝、温拌豆角、温拌西兰花
蛋黄虾、卷煎、咖喱虾、京酱肉丝、虎皮鸡爪、红烧猪脚、椒盐鸡块、黑椒牛柳、小鸡刨毛豆、香脆腐皮卷、水炒虾仁西芹、香煎口蘑、卤素鸡、肉末豆腐、番茄青菜汤、菠菜蛋汤、番茄菌菇汤、鸡汤、猪脚花生汤、乌鸡汤、鲫鱼汤
咖喱鸡块、红烧牛仔骨、香煎鳕鱼、香煎鸡翅、红烧牛腩、葱烧大排、香煎烧带鱼、蛋黄南瓜、菠菜羊肉、卤素鸡、海苔虾排、虾仁滑蛋、白灼鲍鱼、芹菜肉丝、虾滑番茄汤、番茄蛋汤、牛骨汤、鸡蛋豆腐青菜汤、海带冬瓜汤、冬瓜蘑菇汤、裙带菜豆腐汤
水煮蛋、荷包蛋、酱油泡蛋、牛奶滑蛋、太阳蛋、鸡蛋羹、糖醋荷包蛋、牛奶燕麦粥、丝瓜粥、猪肝酒酿汤、牛奶糯米红枣粥、薏米红枣百合粥、胡萝卜小米粥、抱蛋馄饨、水烙馍、青菜香菇包子、土豆沙拉、豆腐锅贴、火腿葱花鸡蛋饼、菠菜鸡蛋饼
小米蒸排骨、糖醋带鱼、清蒸乳鸽、五花肉烧黄鳝、毛豆烧鸡、酥香茄盒、红烧大排、芹菜炒肚丝、彩椒炒鸡脯、火腿小炒黄瓜、苹果虾仁、玉米虾仁、小炒鱼片、鲜虾口蘑、花甲豆腐汤、白萝卜丝花甲汤、木瓜菌菇排骨汤、鸭血豆腐黄豆芽汤、丝瓜汤、排骨豆芽汤、海带冬瓜汤
柠檬煎鸡排、蚝油鲍鱼、香煎鳕鱼、宫保鸡丁、意式烤龙利鱼、沙拉油条虾、胡萝卜炖牛腩、玉子虾仁、肉片炒莴笋、南瓜丝炒肉丝、鲜虾白菜卷、彩椒炒鸡脯、荷兰豆炒肉片、自制上汤娃娃菜、豆芽木耳汤、西兰花鹌鹑蛋火腿羹、番茄猪肝汤、芹菜茭白汤、豆腐羹、番茄蛋汤、香菇鸡汤
鸡蛋小汉堡、水煮蛋、荷包蛋、蒸鸡蛋羹、牛奶滑蛋、酱油泡蛋、煎太阳蛋、葡萄干苹果粥、牛奶银耳小米粥、三色补血汤、燕麦南瓜粥、菠菜肉末粥、红枣板栗粥、奶香玉米汁、菠菜汁肉松馒头、全麦馅饼、蒸肉包、蒸铁棍山药、蒸紫薯、土豆馒头、拇指煎包
鸡爪大虾煲、梅干菜扣肉、热炝猪肝、蒜香排骨、口蘑鸡翅、萝卜烧肉、椒盐鸡块、茄汁豆腐、糖醋藕丁、包菜回锅肉、西芹虾仁、青椒肉丝、虫草花炖花甲豆腐、羊肚菌酿虾滑、莲子猪肚汤、冬瓜丸子汤、海鲜汤、黄瓜蛋汤、番茄蒜黄蛋汤、红豆花生鸽子汤、丝瓜蛋汤
蒜香鱼片、文蛤蒸蛋、蒜爆鱼、白灼猪腰、文蛤配虾滑、蒜蓉蒸鲍鱼、煎牛排、芹菜牛肉、白切猪肚、水煮猪心、培根金针菇卷、蒜苔炒肉、肉末茄子、鲜虾香菇盏、海带豆腐汤、菠菜虫草花蛋汤、鲤鱼汤、西湖豆腐羹、莲藕排骨汤、裙带菜煎荷包蛋豆腐汤
`

const categoryConfigs = [
  { name: '蛋奶', tag: '蛋奶' },
  { name: '鱼虾', tag: '鱼虾' },
  { name: '肉禽', tag: '肉禽' },
  { name: '蔬菜', tag: '蔬菜' },
  { name: '主食', tag: '主食' },
  { name: '汤粥', tag: '汤饮' },
  { name: '点心', tag: '加餐' }
]

const additionalDishes = additionalDishText
  .split(/[、，,\n]/)
  .map(item => item.trim())
  .filter(Boolean)

function classifyDish(name) {
  if (hasAny(name, ['汤', '粥', '糊', '羹', '汁', '饮', '茶', '奶昔', '酒酿']) || name.endsWith('水')) return '汤粥'
  if (hasAny(name, ['水果', '坚果', '芝麻糊', '酸奶', '蛋挞', '西多士', '松饼', '欧包', '酥', '糕', '派', '贝果', '饼干', '布丁', '蜜豆', '蓝莓'])) return '点心'
  if (hasAny(name, ['蛋', '玉子烧', '滑蛋', '厚蛋烧', '苏格兰蛋'])) return '蛋奶'
  if (hasAny(name, ['虾', '鱼', '鲈', '鳕', '鲍', '贝', '蛤', '文蛤', '带鱼', '黄鳝', '花甲', '海鲜', '龙利', '鲤'])) return '鱼虾'
  if (hasAny(name, ['鸡', '鸭', '鸽', '乳鸽', '猪', '牛', '羊', '肉', '排骨', '猪腰', '猪肝', '猪心', '猪肚', '腩', '肚丝', '培根', '狮子头', '火腿'])) return '肉禽'
  if (hasAny(name, ['饭', '馒头', '吐司', '包子', '包', '饺', '馄饨', '面', '烧麦', '三明治', '手抓饼', '馅饼', '煎包', '馍', '玉米', '山药', '紫薯', '南瓜', '土豆', '红薯', '杂粮', '黑米', '糯米', '燕麦'])) return '主食'
  return '蔬菜'
}

function unique(names) {
  return [...new Set(names)]
}

const categories = categoryConfigs.map(config => {
  const names = unique([
    ...(baseDishes[config.name] || []),
    ...additionalDishes.filter(name => classifyDish(name) === config.name)
  ])
  return {
    name: config.name,
    dishes: names.map(name => dish(name, config.tag, config.name))
  }
})

const state = {
  activeTab: 'home',
  activeMeal: 0
}

function getAge() {
  return new Date().getFullYear() - birthYear
}

function getCareerYears() {
  return new Date().getFullYear() - careerStartYear
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]))
}

function renderInfo(targetId, items) {
  const target = document.getElementById(targetId)
  if (!target) return
  target.innerHTML = items.map(item => `
    <div class="info-item">
      <div class="info-label">${escapeHtml(item.label)}</div>
      <div class="info-value">${escapeHtml(item.value)}</div>
    </div>
  `).join('')
}

function renderHomeServices() {
  document.getElementById('homeServices').innerHTML = projects.map((item, index) => `
    <article class="service-card">
      <div class="service-head">
        <div class="service-index">${String(index + 1).padStart(2, '0')}</div>
        <h3 class="service-title">${escapeHtml(item.name)}</h3>
        <div class="service-type">${escapeHtml(item.type)}</div>
      </div>
      <p class="service-desc">${escapeHtml(item.desc)}</p>
      <div class="tag-row">${item.tags.map(tag => `<span class="project-tag">${escapeHtml(tag)}</span>`).join('')}</div>
      <button class="more-button" type="button" data-tab="${item.tab}">查看详情</button>
    </article>
  `).join('')
}

function renderCareList(targetId, sections) {
  document.getElementById(targetId).innerHTML = sections.map((item, index) => `
    <article class="care-card">
      <h2 class="care-title">${escapeHtml(item.title)}</h2>
      <p class="care-desc">${escapeHtml(item.desc)}</p>
      <button class="more-button" type="button" data-care="${targetId}" data-index="${index}">更多</button>
    </article>
  `).join('')
}

function renderBabyDailyPhotos() {
  const target = document.getElementById('babyDailyGallery')
  if (!babyDailyPhotos.length) {
    target.hidden = true
    target.innerHTML = ''
    return
  }

  target.hidden = false
  target.innerHTML = `
    <div class="daily-title">
      <p>Daily Care</p>
      <h2>照护日常</h2>
    </div>
    <div class="daily-photo-flow">
      ${babyDailyPhotos.map((item) => `
        <figure class="daily-photo-card ${item.tall ? 'tall' : ''}">
          <img src="${item.src}" alt="${escapeHtml(item.alt || '照护日常')}" loading="lazy">
        </figure>
      `).join('')}
    </div>
  `
}

function renderSimpleList(targetId, items, type) {
  document.getElementById(targetId).innerHTML = items.map((item, index) => `
    <article class="simple-card">
      <div>
        <h3 class="simple-title">${escapeHtml(item.title)}</h3>
        <p class="simple-desc">${escapeHtml(item.desc)}</p>
      </div>
      <button class="simple-more" type="button" data-${type}="${index}">${type === 'certificate' ? '查看证书' : '查看评价'}</button>
    </article>
  `).join('')
}

function renderMealTabs() {
  document.getElementById('mealTabs').innerHTML = categories.map((item, index) => `
    <button class="meal-tab ${index === state.activeMeal ? 'is-active' : ''}" type="button" data-meal="${index}">${escapeHtml(item.name)}</button>
  `).join('')
}

function renderMealContent() {
  const category = categories[state.activeMeal]
  const content = document.getElementById('mealContent')
  content.innerHTML = `
    <p class="meal-count">${escapeHtml(category.name)} · 共 ${category.dishes.length} 道</p>
    <div class="dish-list">
      ${category.dishes.map(item => `
        <article class="dish-card">
          <img src="${item.image}" alt="${escapeHtml(item.name)}占位图" loading="lazy">
          <div>
            <span class="dish-tag">${escapeHtml(item.tag)}</span>
            <h3 class="dish-name">${escapeHtml(item.name)}</h3>
            <p class="dish-effect"><span class="effect-label">功效</span>${escapeHtml(item.effect)}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `
  content.scrollTop = 0
}

function openModal(html) {
  const modal = document.getElementById('modal')
  document.getElementById('modalBody').innerHTML = html
  modal.classList.add('is-open')
  modal.setAttribute('aria-hidden', 'false')
}

function closeModal() {
  const modal = document.getElementById('modal')
  modal.classList.remove('is-open')
  modal.setAttribute('aria-hidden', 'true')
}

function openCare(section) {
  openModal(`
    <div class="modal-content">
      <h2 id="modalTitle">${escapeHtml(section.title)}</h2>
      <p class="simple-desc">${escapeHtml(section.desc)}</p>
      ${section.detail.map(group => `
        <div class="detail-group">
          <h3>${escapeHtml(group.label)}</h3>
          <ul>${group.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  `)
}

function openImageModal(item, heading) {
  openModal(`
    <div class="modal-content">
      <h2 id="modalTitle">${escapeHtml(item.title)}</h2>
      <img class="modal-image" src="${item.image}" alt="${escapeHtml(item.title)}">
      <p class="simple-desc">${escapeHtml(item.desc)}</p>
      ${item.details ? `
        <div class="detail-group">
          <h3>${heading}</h3>
          <ul>${item.details.map(detail => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>
        </div>
      ` : ''}
    </div>
  `)
}

function switchTab(tab) {
  state.activeTab = tab
  document.querySelectorAll('.page').forEach(page => {
    page.classList.toggle('is-active', page.id === tab)
  })
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('is-active', item.dataset.tab === tab)
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showToast(message) {
  const toast = document.getElementById('toast')
  toast.textContent = message
  toast.classList.add('is-visible')
  window.clearTimeout(showToast.timer)
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('is-visible')
  }, 1800)
}

async function copyText(value, message) {
  try {
    await navigator.clipboard.writeText(value)
    showToast(message)
  } catch (error) {
    const input = document.createElement('input')
    input.value = value
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
    showToast(message)
  }
}

async function sharePage() {
  const shareData = {
    title: profile.shareTitle,
    text: '陈立玲个人介绍，展示本人经历、证书资质、菜谱记录、过往评价和联系方式。',
    url: window.location.href
  }
  if (navigator.share) {
    try {
      await navigator.share(shareData)
      return
    } catch (error) {
      if (error.name === 'AbortError') return
    }
  }
  await copyText(window.location.href, '页面链接已复制')
}

function bindEvents() {
  document.body.addEventListener('click', event => {
    const tabButton = event.target.closest('[data-tab]')
    if (tabButton) {
      switchTab(tabButton.dataset.tab)
      return
    }

    const mealButton = event.target.closest('[data-meal]')
    if (mealButton) {
      state.activeMeal = Number(mealButton.dataset.meal)
      renderMealTabs()
      renderMealContent()
      return
    }

    const careButton = event.target.closest('[data-care]')
    if (careButton) {
      const source = careButton.dataset.care === 'babySections' ? babySections : pregnantSections
      openCare(source[Number(careButton.dataset.index)])
      return
    }

    const certificateButton = event.target.closest('[data-certificate]')
    if (certificateButton) {
      openImageModal(certificates[Number(certificateButton.dataset.certificate)], '证书重点')
      return
    }

    const reviewButton = event.target.closest('[data-review]')
    if (reviewButton) {
      openImageModal(reviews[Number(reviewButton.dataset.review)], '评价说明')
      return
    }

    if (event.target.closest('[data-copy-wechat]')) {
      copyText(wechat, '微信号已复制')
      return
    }

    if (event.target.closest('[data-call]')) {
      window.location.href = `tel:${phone}`
      return
    }

    if (event.target.closest('[data-share]')) {
      sharePage()
      return
    }

    if (event.target.closest('[data-close-modal]')) {
      closeModal()
    }
  })

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal()
  })
}

function init() {
  const personalInfo = [
    { label: '年龄', value: `${getAge()}岁` },
    { label: '户籍', value: '湖北恩施' },
    { label: '学历', value: '高中' },
    { label: '家庭', value: '已婚' }
  ]
  const workInfo = [
    { label: '从业年限', value: `${getCareerYears()}年` },
    { label: '照顾宝宝', value: '50+' }
  ]

  renderInfo('personalInfo', personalInfo)
  renderInfo('workInfo', workInfo)
  renderInfo('contactPersonalInfo', personalInfo)
  renderInfo('contactWorkInfo', workInfo)
  renderHomeServices()
  renderCareList('babySections', babySections)
  renderBabyDailyPhotos()
  renderCareList('pregnantSections', pregnantSections)
  renderSimpleList('certificateList', certificates, 'certificate')
  renderSimpleList('reviewList', reviews, 'review')
  renderMealTabs()
  renderMealContent()
  bindEvents()
}

init()
