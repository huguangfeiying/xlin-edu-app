<template>
  <view class="index-box">
    <!-- #ifdef MP -->
    <!-- 搜索框在小程序中显示 -->
    <search-input></search-input>
    <!-- #endif -->

    <!-- 轮播图 -->
    <xlin-banner></xlin-banner>

    <!-- 分类区域 -->
    <category-box></category-box>

    <view class="list-container">
      <!-- 热门推荐 -->
      <swiper-course name="热门推荐" word="HOT"></swiper-course>
      <swiper-course name="免费精选" word="FREE"></swiper-course>
      <scroll-course name="近期上新" word="NEW"></scroll-course>
      <list-course name="付费精品" word="NICE"></list-course>
    </view>

  </view>
</template>

<script>
  import searchInput from '@/components/common/search-input.vue'
  import xlinBanner from '@/components/common/xlin-banner.vue'
  import categoryBox from './components/category-box.vue'
  import swiperCourse from './components/swiper-course.vue'
  import scrollCourse from './components/scroll-course.vue'
  import listCourse from './components/list-course.vue'

  export default {
    components: {
      searchInput,
      xlinBanner,
      categoryBox,
      swiperCourse,
      scrollCourse,
      listCourse
    },

    onLoad() {
      // #ifdef APP-PLUS
      this.placeholderData()
      // #endif
    },

    // 监听原生标题栏按钮点击 事件，参数为Object
    onNavigationBarButtonTap(e) {
      console.log('e：', e.index, "监听原生标题栏按钮点击事件，参数为Object")
      // 点击第1个按钮
      if (e.index === 0) {
        // 打开扫一扫功能,允许从相机和相册扫码
        uni.scanCode({
          success: (res) => { // 如果要在方法中使用 this 则使用箭头函数
            console.log('扫码成功！');
            console.log('条码类型：' + res.scanType);
            console.log('条码内容：' + res.result);
            uni.navigateTo({
              url: `/pages/public/web-view?url=${res.result}`
            })
          },
          fail: () => {
            console.log('扫码失败了！');
            uni.showModal({
              title: '扫码失败',
              icon: ''
            })
          }
        });
      }
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
        webView.setStyle({
          "titleNView": {
            "searchInput": {
              "placeholder": arr[i]
            }
          }
        })

        const len = arr.length - 1
        setInterval(() => {
          // 第2次，就是下标1，每次+1，如果到达最后一个元素，则重新从0开始
          i = i < len ? ++i : 0
          webView.setStyle({
            "titleNView": {
              "searchInput": {
                "placeholder": arr[i]
              }
            }
          })
        }, 3000)
      }
    }
  }
</script>

<style>
  .list-container {
    padding: 0 30rpx;
  }
</style>
