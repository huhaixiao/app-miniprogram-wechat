// pages/about/page.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('about onload')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('about onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    app.globalData.counter++
    console.log('about onshow', app.globalData.counter)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('about onhide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('about onunload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('about onpulldownrefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('about onreachbottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('about onshareappmessage')
  },
})