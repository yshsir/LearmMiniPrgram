Component({
  // -----------组件定义的配置选项
  options: {
    //styleIsolation设置样式的隔离方式
    // 定义多插槽需要设置true
    multipleSlots: true
  },
// -------------外界给组件传入额外的样式
externalClasses: [],
//--------------监听properties/data的改变
observers: {  
  counter: function(newVal,) {
    }
  },
  //================组件中监听生命周期
  // 1、监听所在页面的生命周期

  //2、监听组件的生命周期
})