<template>
	<view class="list-box">
		<view class="title space-between center">
			<view class="center">
				<text class="name">热门推荐</text>
				<text class="word">HOT</text>
			</view>
			<view class="all">
				<text >全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<swiper class="list-swiper" next-margin="30rpx">
			<swiper-item class="swiper-item" v-for="(n, index) in 2" :key="index">
				<course-item v-for="(item, i) in 4" :key="i"></course-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import courseItem from '@/components/common/course-item.vue'
	export default {
		components: {courseItem}
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
		
		.list-swiper {
			height: 800rpx;
			.swiper-item {
				// background-color: #FA140E;
			}
		}
	}
</style>
