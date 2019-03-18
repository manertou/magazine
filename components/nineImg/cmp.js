// components/nineImg/cmp.js

import { Beh } from "../behavior/my-behavior.js"

Component({
  behaviors: [Beh],
  /**
   * 组件的属性列表
   */
  properties: {
      imgArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: [
      'http://img1.imgtn.bdimg.com/it/u=870567418,602276499&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=1818198520,1615750258&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=3971818507,2664718583&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=2641851681,1278729379&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=4252134213,3676893875&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=3750440150,510309524&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=135730944,1859106970&fm=26&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=3648235802,2732760569&fm=200&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=653015236,2551002459&fm=200&gp=0.jpg'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const array = this.data.imgArr;
      const index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls: array,
        current: array[index]
      })
    }
  }
})
