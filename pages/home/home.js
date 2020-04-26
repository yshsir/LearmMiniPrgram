// ./pages/home/home.js
// getApp()获取app()示例对象
const app = getApp();
console.log(app)
// console.log(app.globalData.name);
// const name = app.globalDate.name;
// const age = app.globalDate.age;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // name: 'yu',
    age: 18,
    stu: [
      { name: '01', age: 18},
      { name: '02', age: 18},
      { name: '03', age: 18}
    ],
    counter: 0,
    //数据初始化
    list: []
  },
  /**
   * 1.监听页面的生命周期函数
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://152.136.185.210:8000/api/h8/recommend',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        console.log(res)
        const data = res.data.data.list;
        this.setData ({
          list: data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

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
    console.log('下拉')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('滑动底部事件')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
// --------3.监听xwml中相关的一些事件
  handleBtnClick() {
    // this.counter += 1
    // console.log(this.counter)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  deleBtnClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },

  // 4其他一些监听事件----------
  //监听页面滚动
  onPageScroll: function (obj) {
    console.log(obj)
  },
  onTabItemTop: function() {
    console.log('tab')
  }

})

