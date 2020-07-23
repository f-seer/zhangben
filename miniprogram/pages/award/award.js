// pages/award/award.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    is_show_select: false
    
  },
  showData: function() {
    var Info =wx.getStorageSync('info');
    this.setData({
      info:Info
    })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showData()
    wx.getStorage({
      key: 'num',
      success: res => {
        if (res.data) {
          this.setData({
            is_show_select: true
          })
          console.log('恭喜你已达到成就，点亮图标')
        }

      },
      fail:err=>{
        console.log("你还没达到成就哦")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.showData()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})