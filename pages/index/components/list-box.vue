<template>
	<view class="list-box">
		<view class="title space-between center">
			<view class="center">
				<text class="name">{{name}}</text>
				<text class="word" v-if="word">{{word}}</text>
			</view>
			<view class="all">
				<text >全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<!-- 插槽 -->
		<slot></slot>
	</view>
</template>

<script>
	import courseData from '@/mock/courseData.js'
	export default {
		props: {
			name: {
				type: String,
				default: '热门推荐'
			},
			word: { // HOT
				type: String,
				default: null
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		margin-top: 60rpx;
		.name {
			font-size: 38rpx;
			font-weight: 500;
			color: #303133;
			margin-right: 10rpx;
		}
		.word {
			font-size: 20rpx;
			background-image: linear-gradient(to right, $xlin-color-orange, $xlin-text-color-red);
			color: #fff;
			padding: 0 10rpx;
			border-radius: 30rpx 30rpx 30rpx 0;
		}
		.all {
			font-weight: normal;
			color: $xlin-text-color-grey;
			font-size: 28rpx;
			.iconfont {
				font-size: 25rpx;
			}
		}
	}
</style>
