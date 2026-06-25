import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '规培笔记',
  description: '中国住院医师的临床速查知识库',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        locales: { zh: { translations: { button: { buttonText: '搜索', buttonAriaLabel: '搜索临床知识' }, modal: { noResultsText: '未找到相关结果', resetButtonTitle: '清除搜索', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } } }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '急症处理', link: '/emergency/' },
      { text: '检验解读', link: '/lab/' },
      { text: '药物速查', link: '/drugs/' },
      { text: '操作规范', link: '/procedures/' },
      { text: '沟通文书', link: '/communication/' },
      { text: '考试晋升', link: '/exams/' },
      { text: '术后并发症', link: '/postop/' },
      { text: '临床基础处理', link: '/clinical-management/' },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      '/emergency/': [
        {
          text: '急症处理',
          items: [
            { text: '概览', link: '/emergency/' },
            { text: '急性低血压', link: '/emergency/hypotension' },
            { text: '急性胸痛', link: '/emergency/chest-pain' },
            { text: '急性呼吸困难', link: '/emergency/dyspnea' },
            { text: '高血压急症', link: '/emergency/hypertensive-emergency' },
            { text: '过敏性休克', link: '/emergency/anaphylaxis' },
            { text: '急性心律失常', link: '/emergency/arrhythmia' },
            { text: '急性心力衰竭', link: '/emergency/acute-heart-failure' },
            { text: '急性脑卒中', link: '/emergency/acute-stroke' },
            { text: '意识障碍', link: '/emergency/altered-consciousness' },
            { text: '上消化道出血', link: '/emergency/upper-gi-bleeding' },
            { text: '急性腹痛', link: '/emergency/acute-abdominal-pain' },
            { text: '气胸', link: '/emergency/pneumothorax' },
            { text: '大咯血', link: '/emergency/hemoptysis' },
            { text: '低血糖', link: '/emergency/hypoglycemia' },
            { text: 'DKA', link: '/emergency/dka' },
            { text: '电解质危急值', link: '/emergency/electrolyte-critical' },
            { text: '急性发热/脓毒症', link: '/emergency/acute-fever' },
            { text: '急性阑尾炎', link: '/emergency/acute-appendicitis' },
            { text: '急性胆囊炎', link: '/emergency/acute-cholecystitis' },
            { text: '急性胆管炎', link: '/emergency/acute-cholangitis' },
            { text: '急性胰腺炎', link: '/emergency/acute-pancreatitis' },
            { text: '肠梗阻', link: '/emergency/bowel-obstruction' },
            { text: '消化道穿孔', link: '/emergency/gi-perforation' },
            { text: '腹股沟疝嵌顿', link: '/emergency/incarcerated-hernia' },
            { text: '肛周脓肿', link: '/emergency/perianal-abscess' },
          ]
        }
      ],
      '/lab/': [
        {
          text: '检验解读',
          items: [
            { text: '概览', link: '/lab/' },
            { text: '血常规', link: '/lab/cbc' },
            { text: '肝功能', link: '/lab/liver-function' },
            { text: '肾功能', link: '/lab/renal-function' },
            { text: '电解质', link: '/lab/electrolytes' },
            { text: '血糖与HbA1c', link: '/lab/glucose-hba1c' },
            { text: '凝血功能', link: '/lab/coagulation' },
            { text: '血气分析', link: '/lab/abg' },
            { text: '感染指标', link: '/lab/infection-markers' },
            { text: '心肌标志物', link: '/lab/cardiac-markers' },
            { text: '尿常规', link: '/lab/urinalysis' },
            { text: '甲状腺功能', link: '/lab/thyroid-function' },
            { text: '肿瘤标志物', link: '/lab/tumor-markers' },
          ]
        }
      ],
      '/drugs/': [
        {
          text: '药物速查',
          items: [
            { text: '概览', link: '/drugs/' },
            { text: '经验性抗生素', link: '/drugs/empirical-antibiotics' },
            { text: '抗生素肾调整', link: '/drugs/antibiotic-renal' },
            { text: '血管活性药', link: '/drugs/vasoactive' },
            { text: '常用降压药', link: '/drugs/antihypertensives' },
            { text: '抗凝抗血小板', link: '/drugs/anticoagulation' },
            { text: '镇静镇痛', link: '/drugs/sedation-analgesia' },
            { text: '胰岛素方案', link: '/drugs/insulin' },
            { text: '糖皮质激素', link: '/drugs/corticosteroids' },
            { text: '电解质补充', link: '/drugs/electrolyte-supplement' },
          ]
        }
      ],
      '/procedures/': [
        {
          text: '操作规范',
          items: [
            { text: '概览', link: '/procedures/' },
            { text: '胸腔穿刺', link: '/procedures/thoracentesis' },
            { text: '胸腔闭式引流', link: '/procedures/chest-drain' },
            { text: '腰椎穿刺', link: '/procedures/lumbar-puncture' },
            { text: '气管插管', link: '/procedures/intubation' },
            { text: '深静脉穿刺', link: '/procedures/central-venous-catheter' },
            { text: 'CPR/ACLS', link: '/procedures/cpr-acls' },
            { text: '电复律/除颤', link: '/procedures/cardioversion-defibrillation' },
          ]
        }
      ],
      '/communication/': [
        {
          text: '沟通文书',
          items: [
            { text: '概览', link: '/communication/' },
            { text: '知情同意', link: '/communication/informed-consent' },
            { text: '病危/病重通知', link: '/communication/critical-illness' },
            { text: '交接班SBAR', link: '/communication/handoff-sbar' },
            { text: '入院记录规范', link: '/communication/admission-note' },
          ]
        }
      ],
      '/clinical-management/': [
        {
          text: '临床基础处理',
          items: [
            { text: '概览', link: '/clinical-management/' },
            { text: '液体复苏与维持补液', link: '/clinical-management/fluid-management' },
            { text: '低钠血症的处理', link: '/clinical-management/hyponatremia' },
            { text: '高钠血症的处理', link: '/clinical-management/hypernatremia' },
            { text: '休克的识别与分型处理', link: '/clinical-management/shock-management' },
            { text: '住院患者血糖管理', link: '/clinical-management/inpatient-glucose' },
            { text: 'AKI的预防与处理', link: '/clinical-management/aki-management' },
            { text: '肝功能异常的评估与处理', link: '/clinical-management/liver-dysfunction' },
            { text: '疼痛管理原则', link: '/clinical-management/pain-management' },
            { text: '恶心呕吐的处理', link: '/clinical-management/nausea-vomiting' },
            { text: '营养支持原则', link: '/clinical-management/nutrition-support' },
            { text: '谵妄的识别与处理', link: '/clinical-management/delirium' },
            { text: '应激性溃疡的预防', link: '/clinical-management/stress-ulcer-prophylaxis' },
            { text: '输血指征与血液制品', link: '/clinical-management/transfusion' },
          ]
        }
      ],
      '/exams/': [
        {
          text: '考试晋升',
          items: [
            { text: '概览', link: '/exams/' },
            { text: '执业医师资格', link: '/exams/medical-license' },
            { text: '规培结业考试', link: '/exams/residency-exam' },
            { text: '同等学力申硕', link: '/exams/equivalent-degree' },
          ]
        }
      ],
      '/postop/': [
        {
          text: '术后并发症',
          items: [
            { text: '概览', link: '/postop/' },
            { text: '术后发热', link: '/postop/postop-fever' },
            { text: '手术部位感染(SSI)', link: '/postop/ssi' },
            { text: '吻合口漏', link: '/postop/anastomotic-leak' },
            { text: '术后出血', link: '/postop/postop-hemorrhage' },
            { text: '术后肠梗阻/肠麻痹', link: '/postop/postop-ileus' },
            { text: '术后DVT/PE', link: '/postop/postop-dvt-pe' },
            { text: '伤口裂开', link: '/postop/wound-dehiscence' },
            { text: '术后肺部并发症', link: '/postop/pulmonary-complications' },
            { text: '术后尿潴留', link: '/postop/urinary-retention' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: '内容按 CC BY-NC-SA 4.0 许可发布',
      copyright: '内容仅供学习参考，不可替代临床判断'
    },

    editLink: {
      pattern: 'https://github.com/your-username/residency-notes/edit/main/src/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    notFound: {
      title: '页面未找到',
      quote: '知识库中没有这一页。试试搜索，或返回首页浏览分类。',
      linkText: '返回首页'
    }
  },

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: false,
  }
})
