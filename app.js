const TOKEN = 'token'

App({
  globaLData: {
    token: ''
  },
  onLaunch: function () {
    //1.先从缓存中去除token
    const token = wx.getStorageSync(TOKEN)
    //2.判断token是否有值
    if(token && token.length !== 0) {//已经token，验证token是否过期
      //验证token是否过期
      this.check_token(token)
    } else{//没有token，进行登陆操作
      this.login()
    }
  },

  check_token(token){
    console.log('判断'),
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        // 判断token是否有效
        if(!res.data.errCode) {
          this.globaLData.token = token
          console.log('token有效')
        } else{
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log('登陆'),
    wx.login({
      success: (res) => {
        // 1、获取code
        const code = res.code;
        //2、将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // console.log(res)
            //1、取出token
            const token = res.data.token;
            //2、将token保存globalData中
            this.globaLData.token = token
            //3、进行本地储存
            wx.setStorageSync(TOKEN, token)//同步
          }
        })
      }
    })
  }
})
