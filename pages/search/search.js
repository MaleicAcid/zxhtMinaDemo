//search.js

Page({
  data: {
    historyList: [{
      name: '数码相机',
    }, {
      name: 'EXO',
    }, {
      name: '格力空调1.5匹',
    }, {
      name: '抽湿机',
    }, {
      name: '油桃',
    }, {
      name: '风扇',
    }, {
      name: '白酒',
    }, {
      name: '马丁靴女',
    }, {
      name: '三星',
    }, {
      name: '海澜之家',
    }
    ],
    hotList: [{
      name: '数码相机',
    }, {
      name: '会计从业资格考试教材',
    }, {
      name: '格力空调1.5匹',
    }, {
      name: '抽湿机',
    }, {
      name: '油桃',
    }, {
      name: '风扇',
    }, {
      name: '白酒',
    }, {
      name: '马丁靴女',
    }, {
      name: '三星',
    }, {
      name: '海澜之家',
    }
    ],
  },
  //事件处理函数
  consigneePage: function () {
    wx.navigateTo({
      url: '../user/consignee/consignee'
    })
  },

  onLoad: function () {

  },

})
