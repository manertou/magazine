// components/video/cmp.js

// import {
//     Beh
// } from '../behavior/my-behavior.js';

Component({
    // behaviors: [Beh],
    /**
     * 组件的属性列表
     */
    properties: {
        poster: String,
        duration: String,
        src: String,
        mainTitle: String,
        videoId: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        showPoster: true
    },
    lifetimes: {
        attached() {
            this._getVideoInfo();
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onPlay() {
            this._toggleVideoPoster();
            this.video.play();
        },
        onMaskTap() {
            this._toggleVideoPoster();
            this.video.seek(0);
            this.video.stop();
        },
        onVideoEnd() {
            this._toggleVideoPoster();
        },
        
        _getVideoInfo() {
            const id = this.properties.videoId;
            this.video = wx.createVideoContext(id, this);
        },
        _toggleVideoPoster() {
            this.setData({ showPoster: !this.data.showPoster })
        }
    }
})