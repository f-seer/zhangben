Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/mainpage/mainpage",
        "iconPath": "",
        "selectedIconPath": "",
        "text": "货架"
      },
      {
        "pagePath": "/pages/award/award",
        "iconPath": "",
        "selectedIconPath": "",
        "text": "成就"
      },
      {
        "pagePath": "/pages/add/add",
        "iconPath": "",
        "selectedIconPath": "",
        "text": "收银台"
      },
      {
        "pagePath": "/pages/analyze/analyze",
        "iconPath": "",
        "selectedIconPath": "",
        "text": "分析"
      },
      {
        "pagePath": "/pages/Individual/Individual",
        "iconPath": "",
        "selectedIconPath": "",
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