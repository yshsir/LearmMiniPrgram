// ./pages/home/home.js
Page({
  handShowModal() {
    wx.showModal({
      title: '标题',
      content: '内容',
      showCancel: true,
      cancelText: '返回',
      cancelColor: 'blue',
      confirmText: '前进',
      confirmColor: 'red',
      success: function(res) {
        if (res.cancel) {
          console.log('点击了取消')
        }
        if (res.confirm) {
          console.log('点击了确定')
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  handShowLoading() {
    wx.showLoading({
      title: 'jiazai',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(() => {
      //手动加载显示消失
      wx.hideLoading()
    }, 1000)
  },
  handShowActive() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: function(res) {
        console.log(res)
        // switch(res.tapIndex == 0){}//判断
      }
    })
  },
  onShareAppMessage: function(options) {
    return {
      title: '你好',
      path: '/pages/about/about',
      imageUrl: ''
    }
  }
})