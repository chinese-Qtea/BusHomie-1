Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginOk:true,
    nickName:"",
    avatarUrl:"",
  },

  //页面加载的时候，将load页面传过来的值获取过来
  onLoad: function (options) {
    console.log("这里的options",options);
    this.setData({
      nickName:options.nickName,
      avatarUrl:options.avatarUrl
    })
  },

  //小程序声明周期的可见性函数里面来控制显示
  onShow(){
    let userInfo = wx.getStorageSync('userInfo')
    console.log("我的缓存信息",userInfo);
    if(userInfo){
      this.setData({
        loginOk:true,
        nickName:userInfo.nickName,   //从缓存中拿数据
        avatarUrl:userInfo.avatarUrl
      })
    }else{
      this.setData({
        loginOk:false
      })
    }
  },

  //点击登录
  load(){
    wx.navigateTo({
      url: '/pages/load/load',
    })
  },

  //退出登录
  exit(){
    wx.showModal({
      content:"确定退出吗"
    }).then(res=>{
      if(res.confirm){
      console.log("用户点击了确定");
      this.setData({
        loginOk:false
      })
      //清空登录的缓存
      wx.setStorageSync('userInfo', null)
      }else if(res.cancel){
        console.log("用户点击了取消");
      }
    })
  },

  //微信授权登录
  loadByWechat(){
    wx.getUserProfile({
      desc: '用户完善会员资料',
    })
    .then(res=>{
    console.log("用户允许了微信授权登录",res.userInfo);
    //注意：此时不能使用 wx.switchTab，不支持参数传递
    wx.reLaunch({
      //将微信头像和微信名称传递给【我的】页面
      url: '/pages/me/me?nickName='+res.userInfo.nickName+'&avatarUrl='+res.userInfo.avatarUrl,
    })
    //保存用户登录信息到缓存
    //s上传用户信息到云数据库user
    wx.cloud.database().collection('user').add({
      data:{
      Name:res.userInfo.nickName,
      face:res.userInfo.avatarUrl,
      },
    })
    wx.setStorageSync('userInfo', res.userInfo)

    })
    .catch(err=>{
      console.log("用户拒绝了微信授权登录",err);
    })
   
  },
  //跳转到手机号码登录页
  loadByPhone(){
    wx.navigateTo({
      url: '/pages/loadByPhone/loadByPhone',
    })
  },
  
})