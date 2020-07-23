// pages/Individual/Individual.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName : "",
    avatarUrl : "",
    gender : "",
    province : "",
    city : "",
    country : "",
    k:0
  },
 
  showUserInfoTap:function(){
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        
        var userInfo = res.userInfo
        console.log(userInfo);
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender  //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        if(gender==1){
          gender = '男'
        }else if(gender==2){
          gender='女'
        }else{
          gender = '未知'
        }
        that.setData({
          nickName : nickName,
          avatarUrl : avatarUrl,
          gender : gender,
          country : country,
          province : province
        })
      }
    })
  },
    share:function(){
      wx.navigateTo({
        url: '../share/share',
      })
    },
    showData: function() {
      var Info =wx.getStorageSync('info');
      this.setData({
        info:Info
      })
   },
   shouru:function(){
     var e=0;
     for(var i=0;i<this.data.info.length;i++){
       e+=this.data.info[i].sellamount
     }
        this.setData({
          k:e
        })

   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showData()
    this.shouru()
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
    this.shouru()
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

  }
})