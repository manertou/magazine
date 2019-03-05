 // pages/index/index.js
import {IndexModel} from '../../models/index.js';
import {random} from '../../utils/randomStr.js';

const indexModel = new IndexModel();

Page({

    data: {
        markList: [],
        articleList: [],
        recommendList: {},
        getMore: '',
        magazineId: 0,
		loading: true
    },

    onLoad: function(options) {
        this.getData()
		
    },

    onReachBottom() {
        this.setData({
            getMore: random(20)
        })
    },

	onCatalog() {
		wx.switchTab({
			url: '/pages/catalog/catalog'
		})
	},

	onNav(e) {
		const magazineId = e.detail.index

		this.resetData()
		this.scrollPageToTop()
		this.setMagazineId(magazineId)
		this.getData(magazineId)
	},

    getData(magazineId) {
        const markList = indexModel.getMarkList(magazineId)
		const articleList = indexModel.getArticleList(magazineId)
		const recommendList = indexModel.getRecommendList(magazineId)

        Promise.all([markList, articleList, recommendList]).then(res => {
            this.setData({
                markList: res[0],
                articleList: res[1],
                recommendList: res[2]
            })
			this.hiddeLoading()
        })
    },

	hiddeLoading() {
		this.setData({
			loading: false
		})
	},

	resetData() {
		this.setData({
			markList: [],
			articleList: [],
			recommendList: {}
		})
	},

	scrollPageToTop() {
		wx.pageScrollTo({
			scrollTop: 0,
			duration: 0
		})
	},

	setMagazineId(magazineId) {
		this.setData({
			magazineId
		}) 
	}

})