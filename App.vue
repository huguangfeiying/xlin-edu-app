<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("@/common/css/common.css");
	
	/* 引入图标文件，官方建议~@开头 , 小程序发布时要使用 https://开头的网络文件 */
	/* @import url("~@/static/icon/iconfont.css"); */
	
	/* 开发者工具上只能使用本地图标 文件，发布时要使用网络地址 */
	@import url("https://at.alicdn.com/t/c/font_3741088_p6exl8moo0d.css");
	
</style>
