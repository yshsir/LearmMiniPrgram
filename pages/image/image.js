// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handelChooseAlbum() {
    wx.chooseImage({
      success: (res)=> {
        console.log(res)
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handelImageLoad() {
    console.log('图片加载')
  }
})