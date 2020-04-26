App({
  onLaunch: function() {
    // console.log('小程序初始化完成了：onLaunch')
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // }),
    // setTimeout(() => {
    //   const err = new Error()
    //   throw err
    // },3000)
  },
  onShow: function(options) {
    //小程序界面显示出来，会执行生命周期函数
    //1.判断小程序进入场景
    console.log(options)
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }
    // 2.获取用户的信息，并且获取到用户信息之后，将用户信息传递到服务器
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
    // wx.getSetting({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  },
  onHide: function() {
    //界面被隐藏是生命周期函数执行
    // console.log('隐藏执行')
  },
  onError: function(msg) {
    // 小程序出现错误时执行的生命周期函数
    console.log('错误执行')
  },
  globalData: {
    name: 'asir',
    age: 18
  }
})