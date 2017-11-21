//editAddress.js

Page({
  data: {
    region: ['广东省', '广州市', '海珠区'],
    inputRegion: ''
  },
  //事件处理函数
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      inputRegion: e.detail.value
    })
  },
  onLoad: function () {

  }
})
