// ./pages/home/home.js
import request from '../../service/network.js'
Page({
  data: {

  },
  onLoad: function (options) {
    //原生分装的request发送网络请求
    this.gey_data_origin()

    //使用封装的request发送网络请求
    // Promise最大的好处防止出现回调地狱
    request({
      url: 'http://152.136.185.210:8000/api/h8/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  gey_data_origin() {
    wx.request({
      url: 'http://152.136.185.210:8000/api/h8/recommend',
      success: (res)=> {
        console.log(res)
      }
    })
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   methd: 'post',
    //   data: {
    //     name: 'why',
    //     age: 18
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fail: (err) => {
    //     console.log(err)
    //   }
    // })
  }
})