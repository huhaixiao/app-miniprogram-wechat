// components/my-component/component.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: 'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.triggerEvent("onchange", event.detail)
    }
  }
})
