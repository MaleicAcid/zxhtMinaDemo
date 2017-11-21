//addressList.js

Page({
  data: {
    middleInfo: '海关政策要求，请正确填写收货人身份证并上传身份证的正反面照片。加密保存，仅用于海关清关',
    addressList: [{
      name: '许倩倩',
      mobile: '180****6151',
      address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1北京天安门城楼2',
      isDefault: false
    }, {
      name: '许倩倩',
      mobile: '180****6151',
      address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1北京天安门城楼2北京天安门城楼1北京天安门城楼2北京天安门城楼1北京天安门城楼2',
      isDefault: true
    }, {
        name: '许倩倩',
        mobile: '180****6151',
        address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1',
        isDefault: false
    }, {
      name: '许倩倩',
      mobile: '180****6151',
      address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1北京天安门城楼2北京天安门城楼1',
      isDefault: false
    }, {
        name: '许倩倩',
        mobile: '180****6151',
        address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1',
        isDefault: false
    }, {
      name: '许倩倩',
      mobile: '180****6151',
      address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1北京天安门城楼2',
      isDefault: false
    }, {
      name: '许倩倩',
      mobile: '180****6151',
      address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1北京天安门城楼2',
      isDefault: false
    }, {
      name: '许倩倩',
      mobile: '180****6151',
      address: '北京市东城区东长安街天安门广场北侧 北京天安门城楼1北京天安门城楼2',
      isDefault: false
    }
    ],
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
