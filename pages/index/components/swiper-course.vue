<template>
  <list-box :name="name" :word="word">
    <swiper :style="{'height': `${200*rows}rpx`}" next-margin="30rpx">
      <swiper-item class="swiper-item" v-for="(n, index) in column" :key="index">
        <!-- rows=4
           slice(start, end) 获取数组中指定范围元素数组，包头不包尾
           开始下标：0，结束下标4
           index*rows, (index+1)*rows
           -->
        <course-item v-for="(item, i) in courseData.slice(index*rows, (index+1)*rows)" :key="i" :item="item">
        </course-item>
      </swiper-item>
    </swiper>
  </list-box>
  </view>
</template>

<script>
  import listBox from './list-box.vue'
  import courseItem from '@/components/common/course-item.vue'
  // import courseData from '@/mock/courseData.js'

  export default {
    components: {
      listBox,
      courseItem
    },
    props: {
      name: {
        type: String,
        default: '热门推荐'
      },
      word: { // HOT
        type: String,
        default: null
      },
      column: { // 默认swiper-item展示2列
        type: Number,
        default: 2
      },
      rows: { // 默认4行
        type: Number,
        default: 5
      },
      courseData: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">

</style>
