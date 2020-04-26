// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event) {
    console.log('用户输入内容',event)
  },
  handleFocus(event) {
    console.log('获取焦点')
  },
  handbulr(event) {
    console.log('失去焦点')
  }
})