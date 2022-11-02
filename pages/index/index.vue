<template>
  <view class="index-box">
    <!-- #ifdef MP -->
    <!-- 搜索框在小程序中显示 -->
    <search-input></search-input>
    <!-- #endif -->

    <!-- 轮播图 -->
    <xlin-banner :bannerList="bannerList"></xlin-banner>

    <!-- 分类区域  -->
    <category-box :categoryList="categoryList"></category-box>

    <view class="list-container">
      <!-- 热门推荐 -->
      <swiper-course name="热门推荐" word="HOT" :courseData="hotCourseList"></swiper-course>
      <scroll-course name="近期上新" word="NEW" :courseData="newCourseList"></scroll-course>
      <swiper-course name="免费精选" word="FREE" :courseData="freeCourseList"></swiper-course>
      <list-course name="付费精品" word="NICE" :courseData="payCourseList"></list-course>
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
  import api from '@/api/course.js'

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
      // 查询数据
      this.loadBannerData()
      this.loadCateData()
      // 查询列表数据
      this.loadHotCourseData()
      this.loadFreeCourseData()
      this.loadNewCourseData()
      this.loadPayCourseData()
    },

    data() {
      return {
        bannerList: [],
        categoryList: [],
        hotCourseList: [], //热门列表数据
        freeCourseList: [],
        newCourseList: [],
        payCourseList: [],
      }
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
      },

      // 查询轮播图数据
      async loadBannerData() {
        const { data } = await api.getAdvertList(1)
        this.bannerList = data
        // console.log('data', data)
      },

      // 查询分类数据
      async loadCateData() {
        const { data } = await api.getCategoryList()
        this.categoryList = data
        console.log('cate', this.categoryList)
      },

      // 查询热门推荐数据
      async loadHotCourseData() {
        const { data } = await api.getList({ sort: 'hot' }, 1, 8)
        this.hotCourseList = data.records
        console.log('hotCourseList', this.hotCourseList)
      },
      // 免费列表
      async loadFreeCourseData() {
        // 0收费，1免费
        const { data } = await api.getList({ isFree: 1 }, 1, 8)
        this.freeCourseList = data.records
      },

      // 近期上新
      async loadNewCourseData() {
        const { data } = await api.getList({ sort: 'new' }, 1, 10)
        this.newCourseList = data.records
      },

      // 免费列表
      async loadPayCourseData() {
        // 0收费，1免费
        const { data } = await api.getList({ isFree: 0 })
        this.payCourseList = data.records
      },
    }
  }
</script>

<style>
  .list-container {
    padding: 0 30rpx;
  }
</style>
