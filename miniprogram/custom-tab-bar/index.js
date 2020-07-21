Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/mainpage/mainpage",
        "iconPath": "/images/store.png",
        "selectedIconPath": "/images/store.png",
        "text": "货架"
      },
      {
        "pagePath": "/pages/award/award",
        "iconPath": "/images/award.png",
        "selectedIconPath": "/images/award.png",
        "text": "成就"
      },
      {
        "pagePath": "/pages/add/add",
        "iconPath": "/images/add.png",
        "selectedIconPath": "/images/add.png",
        "text": "收银台"
      },
      {
        "pagePath": "/pages/analyze/analyze",
        "iconPath": "/images/analyze.png",
        "selectedIconPath": "/images/analyze.png",
        "text": "分析"
      },
      {
        "pagePath": "/pages/Individual/Individual",
        "iconPath": "/images/Individual.png",
        "selectedIconPath": "/images/Individual.png",
        "text": "个人"
      }

    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})