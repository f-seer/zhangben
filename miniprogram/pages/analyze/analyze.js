// pages/analyze/analyze.js
import { echarts } from './echarts.min.js';

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
  

  chart_1:function(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '销量统计表'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: this.data.info.itemname
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: this.data.info.pamount
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }

})