// components/tag/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tag: String,
        tagId: Number
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
        onTap() {
            // const tagId = this.properties.tagId;
            // wx.navigateTo({
            //     url: `/pages/type/type?tagId=${tagId}` 
            // })
            this._showError();
        },

        _showError() {
            wx.showToast({
                title: '当前小程序为测试版本，只能点【读书】跳转哦',
                icon: 'none',
                duration: 2000,
                mask: true
            })
        }
    }
})
