<template>
	<view class="category">
		<scroll-view class="left noScorll" scroll-y >
			<view class="title">
				<view v-for="(item, index) in categoryList" :key="index"
				:class="{active: index === activeIndex}"
				@click.stop="getLabel(index, item)"
				>
				{{item.name}}
				</view>
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y >
			<view class="tag">
				<view v-for="(item, index) in labelList" :key="index"
					@click.stop="clickLabel(item)"
				>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import api from '@/api/course.js'
	export default {
		data() {
			return {
				categoryList: [], //左侧分类数据
				labelList: [], // 右侧标签数据
				activeIndex: 0, //当前选中的下标(分类下标)
			}
		},
		
		mounted() {
			// 查询分类数据
			this.getList()
		},
		
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				this.navTo('/pages/search/search')
			}
		},
		
		
		methods: {
			async getList() {
				// 查询分类及标签信息，不要少了 async await
				const {data} = await api.getCategoryList()
				this.categoryList = data
				// console.log('categoryList', this.categoryList)
				// 获取当前选中的标签列表（第1个分类的）
				this.getLabel(this.activeIndex)
			},
			
			// 获取标签列表(分类下标，分类信息)
			getLabel(index, item) {
				// 选中样式
				this.activeIndex = index
				// 获取点击的分类对象
				const activeCategory = this.categoryList[index]
				// 通过分类对象获取标签列表
				this.labelList = activeCategory.labelList
				console.log('labelList', this.labelList)
			},
			
			// 点击标签，跳转到搜索页面(item当前标签信息)
			clickLabel(item) {
				// 注意：labelId一定要放到第1个位置，后面解析时需要使用，顺序一定不要乱
				const params = {labelId: item.id, name: item.name, activeIndex: this.activeIndex}
				this.navTo(`/pages/search/search?params=${ JSON.stringify(params) }`)
			}
		}
		
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.category {
		display: flex;
		height: 100%;
		.left {
			background-color: #F8F9FB;
			width: 260rpx;
			border-radius: 0 25rpx 25rpx 0;
			.title {
				view {
					text-align: center;
					font-size: 30rpx;
					color: #888888;
					width: 100%;
					padding: 55rpx 30rpx;
					position: relative;
					&:before { // 在分类前加上|
						position: absolute;
						content: '';
						width: 0;
						height: 0;
						border-right: 6rpx solid $xlin-color-primary;
						border-radius: 30rpx;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						transition: .3s;
					}
				}
				
				.active {
					color: $xlin-color-primary;
					font-size: 33rpx;
					font-weight: bold;
					&:before {
						height: 50rpx;
					}
				}
			}
		}
		.right {
			background-color: #fff;
			padding-left: 15rpx;
			margin: 0; // 铺满
			.tag {
				display: flex;
				flex-wrap: wrap; 
				padding-top: 35rpx;
				padding-left: 10rpx;
				view {
					font-size: 25rpx;
					line-height: 60rpx;
					border: 1px solid #999;
					border-radius: 30rpx;
					min-width: 160rpx;
					text-align: center;
					padding: 0 5rpx;
					margin: 15rpx 5rpx;
				}
			}
		}
	}
</style>
