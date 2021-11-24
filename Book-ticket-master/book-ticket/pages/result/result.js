// pages/result/result.js
var app=getApp(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    busList:[
      {
      busId: "闽AC9102",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"8:08",
      cost:"60￥"
    },
    {
      busId: "闽A82331",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"8:36",
      cost:"60￥"
    },
    {
      busId: "闽A6430B",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"9:04",
      cost:"60￥"
    },
    {
      busId: "闽C57812",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"9:44",
      cost:"60￥"
    },
    {
      busId: "闽CE6423",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"10:11",
      cost:"60￥"
    },
    {
      busId: "闽A8872D",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"10:49",
      cost:"60￥"
    },
    {
      busId: "闽C69914",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"11:18",
      cost:"60￥"
    },
    {
      busId: "闽AK3725",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"11:42",
      cost:"60￥"
    },
    {
      busId: "闽AH6355",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"12:12",
      cost:"60￥"
    },
    {
      busId: "闽C99281",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"13:41",
      cost:"60￥"
    },
    {
      busId: "闽A72495",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"14:06",
      cost:"60￥"
    },
    {
      busId: "闽A34599",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"14:39",
      cost:"60￥"
    },
    {
      busId: "闽C64720",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"15:11",
      cost:"60￥"
    },
    {
      busId: "闽A14398",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"15:46",
      cost:"60￥"
    },
    {
      busId: "闽C45671",
      dep:"福州",
      arr:"泉州",
      date:"2021-11-14",
      time:"16:12",
      cost:"60￥"
    },

    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(app.globalData.flight);
    this.setData({
      flight:app.globalData.flight,
      port:app.globalData.port,
      dep:app.globalData.dep,
      arr: app.globalData.arr
    });
    console.log(this.data.port);
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
  book:function(e){
    // console.log(e.currentTarget.dataset.text);
    wx.navigateTo({
      url: '/pages/book/book?flightId=' + e.currentTarget.dataset.text,
    })
  }
})