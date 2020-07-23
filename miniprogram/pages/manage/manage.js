// pages/manage/manage.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Index:0,
    info:[]
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    //console.log(this.data.objectArray[e.detail.value].name)
    this.setData({
      Index: e.detail.value
    })
  },
  showData:function(){
    /**为选择器读取数据 */
    var old=wx.getStorageSync('info') || [];
    this.setData({
      info:old
      
    })
    console.log(old);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showData()
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
    this.showData();
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

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var ret=e.detail.value;
    console.log(ret)
    
    
    
    let old=wx.getStorageSync('info') || [];

    old[ret.itemindex].itemnum=ret.itemnum;
    old[ret.itemindex].purc=ret.purc;
    old[ret.itemindex].sell=ret.sell;
    old[ret.itemindex].pamount=ret.pamount;
    console.log(old);
    wx.setStorage({
      data: old,
      key: 'info',
    })
    wx.navigateBack({
      delta: 0,
    })
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
    let old=wx.getStorageSync('info') || [];
    console.log(old)
    old.splice(this.data.Index,1)
    console.log(old)
    wx.setStorage({
      data: old,
      key: 'info',
    })
    wx.navigateBack({
      delta: 0,
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    })
    this.showData()
  }
})