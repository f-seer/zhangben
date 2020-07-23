// components/load/index.js
const goal_num = 10; // 目标值
const load_num = 3; // 弹窗次数
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    info:[],
    sign: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 页面调用方法
    load: function () {
      console.log("调用了load方法")
      // 调用弹窗方法，判断是否弹窗，先判断是否调用
      // 设置一个num，如果大于num，则不再弹窗（不调用方法）
      // 否则调用方法
      var num = wx.getStorageSync('num')
      if (num != '' && num >= load_num) {
        return
      }else {
        var _this = this
        _this.is_load()
      }
    },


    /**
     * 判断是否弹窗方法
     */
    is_load: function () {
      let data = wx.getStorageSync('current');
      let all_sale = 0;
      var _this = this
      if (data != '' || data.length > 0) {
        // 循环，计数，如果达成设置的值(goal)，则弹出
        data.forEach(function(item, index){
          console.log(item.sellamount + '-----' + item.sell + '----' + index)
          all_sale += (item.sellamount * item.sell)
        });
        console.log(all_sale)
        if (all_sale >= goal_num) {
          _this.popup()
        // 设置缓存
        let num = wx.getStorageSync('num')
        if (num == '') {
          wx.setStorageSync('num', 1)
        }else {
          wx.setStorageSync('num', num + 1)
        }
        }

      }
    },


    // 取消/显示弹窗
    popup: function () {
      this.setData({
        sign:!this.data.sign
      })
    }
  }
})
