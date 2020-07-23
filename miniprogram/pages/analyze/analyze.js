// pages/analyze/analyze.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[{itemname: "显示名称",
    itemnum: "显示编号",
    pamount: "进货数量",
    purc: "进货价格",
    sell: "默认售价",
    sellamount: 1}],
    sum: 0
  },


  
  
  showData: function() {
    var Info =wx.getStorageSync('info');
    this.setData({
      info:Info
    })
    var i=this.data.info.length-1;
    var s=0;
    for(i;i>=0;i--)
    {
      s+=this.data.info[i].sell*this.data.info[i].sellamount;
    }
    this.setData({
      sum:s
    })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  

 

})