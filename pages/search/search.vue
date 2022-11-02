<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		
		onLoad(option) {
			// 通过option接收其他页面传递的参数
			console.log('option', JSON.parse(option.params))
		},
		
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
