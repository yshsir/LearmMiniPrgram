// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currrenIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event) {
      // console.log(event)
      const index = event.currentTarget.dataset.index
      console.log(index)
      this.setData({
        currrenIndex: index
      })
      this.triggerEvent('itemClick', {index, title:this.properties.titles[index]})
    }
  }
})
