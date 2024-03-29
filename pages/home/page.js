// pages/home/page.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    env: wx.env,
    submitting: true,
    xInputValue: 'default value',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('global.counter', app.globalData.counter)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    
  },

  handleSubmit() {

  },

  onChange(event) {
    this.setData({
      xInputValue: event.detail.value
    })
    console.log({
      event
    })
  },

  onTap(event) {
    wx.navigateTo({
      url: '/pages/about/page',
    })
    console.log({
      event
    })
  }
})