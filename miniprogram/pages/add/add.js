// pages/add/add.js
var app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,

    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
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
    /**为选择器读取数据 */
    this.showData();
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
    let old=wx.getStorageSync('info') || [];//读取货架数据
    let current_=wx.getStorageSync('current')||[];//读取流水记录

   old[ret.itemindex].sellamount+=ret.amount;//通过选择器下标，修改出售数目
   /*
    for(var index in old){
      if(old[index].itemname==ret.itemname)
      {
       console.log(old[index]);
       old[index].sellamount=ret.amount;
       break;
      }
    }
    */
   /**保存货架数据 */
    wx.setStorage({
      data: old,
      key: 'info',
    })
    /**记录流水 */
    var c={itemname:old[ret.itemindex].itemname,sellamount:ret.amount,sell:ret.sell}//生成一条流水记录
    current_.push(c)
    wx.setStorage({
      data: current_,
      key: 'current',
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})