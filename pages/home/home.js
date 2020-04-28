// ./pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handIncrement(value) {
    // console.log('---',value)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(i) {
    console.log(i)
  },
  handIncrementCpn() {
    // 目的为修改my-sel中的数据counter
    // 获取组件对象
    const my_sel = this.selectComponent('.sel-class')

    // 通过setData修改组件数据
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })
    //通过方法改变
    my_sel.incrementCounter(10)
  }
})