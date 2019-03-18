class SubscribeModel {
	setMyTagList(value) {
		wx.setStorageSync('markTagList', value)
	}
	getMyTagList() {
		return wx.getStorageSync('markTagList') || []
	}
	removeMyTag(tagId) {
		let myTagList = this.getMyTagList()
		let myIndex = 0

		myTagList.forEach((item, index) => {
			if(item.tagId == tagId) {
				myIndex = index
			}else {
				return
			}

			myTagList.splice(myIndex,1)
			this.setMyTagList(myTagList)
		})
	}
}
export {SubscribeModel}