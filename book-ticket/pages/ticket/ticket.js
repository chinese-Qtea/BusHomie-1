Page({
  data: {
      current: 'tab1',
      current_scroll: 'tab1'
  },

  handleChange ({ detail }) {
    console.log(detail)
      this.setData({
          current: detail.key
      });
  },

  handleChangeScroll ({ detail }) {
      this.setData({
          current_scroll: detail.key
      });
  },
  handleClick(){
    wx.navigateTo({
      url: '/pages/code/code',
    })
  }
});