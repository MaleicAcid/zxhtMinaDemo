//consignee.js

Page({
  data: {
    middleInfo: '海关政策要求，请正确填写收货人身份证并上传身份证的正反面照片。加密保存，仅用于海关清关',
    region: ['广东省', '广州市', '海珠区'],
    inputRegion: '',
    correctSide: '',
    oppositeSide: ''
  },
  //事件处理函数
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      inputRegion: e.detail.value
    })
  },

  chooseOppositePic: function (e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

      }
    })


  },

  chooseCorrectPic: function (e) {
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {

      }
    })


  },

  onLoad: function () {

  }
})
