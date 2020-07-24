import * as echarts from '../../ec-canvas/echarts';

function xiaoshoue(canvas,width,height,dpr)
{
  var info=wx.getStorageSync('info')
  var current=wx.getStorageSync('current')
  var total=wx.getStorageSync('info')
  var i,j;
  for(i=0;i<total.length;i++)
  {
    total[i].sellamount=0;
    total[i].itemname=info[i].itemname;
  }
  for(i=0;i<current.length;i++)
  {
    for(j=0;j<info.length;j++)
    {
      if(total[j].itemname == current[i].itemname)
      {
        total[j].sellamount += Number(current[i].sell)*Number(current[i].sellamount);
        continue;
      }
    }
  }
  var x=new Array();
  var y=new Array();
  for(i=0;i<total.length;i++)
  {
    x[i]=total[i].itemname;
    y[i]=Number(total[i].sellamount);
  }
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '销售额'
  },
  tooltip: {},
  legend: {
      data:['销售额']
  },
  xAxis: {
      data: x
  },
  yAxis: {},
  series: [{
      name: '销售额',
      type: 'bar',
      data: y,
      type:"bar",
      itemStyle:{
        normal:{
            color:'#6495ED'
        }
    },

  }]
  };
  chart.setOption(option);
  return chart;
}


function xiaoshouliang(canvas,width,height,dpr)
{
  var info=wx.getStorageSync('info')
  var x=new Array();
  var y=new Array();
  var i;
  for(i=0;i<info.length;i++)
  {
    x[i]=info[i].itemname;
    y[i]=info[i].sellamount;
  }

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '销量'
  },
  tooltip: {},
  legend: {
      data:['销量']
  },
  xAxis: {
      data: x
  },
  yAxis: {},
  series: [{
      name: '销量',
      type: 'bar',
      data: y,
      type:"bar",
      itemStyle:{
        normal:{
            color:'#98FB98'
        }
    },
  }]
  };
  chart.setOption(option);
  return chart;
}

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
    sum: 0,
    current:[{
      itemname: "显示名称",
      sellamount: "售出数量",
      sell:0,
    }],
    xiaoshoue:{
      onInit:xiaoshoue
    },
    xiaoshouliang:{
      onInit:xiaoshouliang
    }


  }, 
 
 
   
   
  showData: function() { 
    var Info =wx.getStorageSync('info'); 
    this.setData({ 
      info:Info 
    }) 
    var Current=wx.getStorageSync('current');
    this.setData({
      current:Current
    })
    var i;
    var s=0;
    for(i=0;i<this.data.info.length;i++)
    {
      s-=this.data.info[i].purc*this.data.info[i].pamount;
    }
    
    for(i=0;i<this.data.current.length;i++)
    {
      s+=this.data.current[i].sell*this.data.current[i].sellamount
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