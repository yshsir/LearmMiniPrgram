// pages/wxml/xwml.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
    isShow: true,
    scroe: 60,
    movies: ['火影', '海贼', '魔兽'],
    nums: [
      ['10', '12', '13'],
      ['10', '12', '13'],
      ['10', '12', '13'],
      ['10', '12', '13']
    ],
    list: [1, 2, 3]
  },
  // onLoad() {
  //   setTimeout(()=>{
  //     setData({
  //       nowTime: new DATA().toLocaleString()
  //     })
  //   },1000)
  // },
  btnclick() {
    console.log('---')
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  addScroe() {
    console.log('[][]')
    this.setData({
      scroe: this.data.scroe + 6
    })
  }
})