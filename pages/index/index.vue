<template>
	<view class="index-box">
		<!-- #ifdef MP -->
		<!-- 搜索框在小程序中显示 -->
		<search-input></search-input>
		<!-- #endif -->
		
		<!-- 轮播图 -->
		<xlin-banner></xlin-banner>
	</view>
</template>

<script>
	import searchInput from '@/components/common/search-input.vue'
	import xlinBanner from '@/components/common/xlin-banner.vue'
	
	export default {
		components: { searchInput, xlinBanner },
		
		onLoad() {
			// #ifdef APP-PLUS
			this.placeholderData()
			// #endif
		},
		
		methods: {
			// 搜索框提示内容
		   placeholderData() {
				// 获取当前页面实例 
				const webView = this.$scope.$getAppWebview(); 
				// 搜索框提示内容定时从这数组中获取
				let arr = ['APP · 微信小程序', 'Java · SpringBoot', 'SpringCloud · SpringSecurity', 'Vue · React']
				// 一加载页面就调用第1次
				let i = 0;
				webView.setStyle({"titleNView": {"searchInput": {"placeholder": arr[i]}}})
				
				const len = arr.length - 1
				setInterval( ()=> {
					// 第2次，就是下标1，每次+1，如果到达最后一个元素，则重新从0开始
					i = i < len ? ++i : 0
					webView.setStyle({"titleNView": {"searchInput": {"placeholder": arr[i]}}})
				}, 3000)
		   }
		}
	}
</script>

<style>
	page {
		/* background-color: #FA140E; */
	}
</style>