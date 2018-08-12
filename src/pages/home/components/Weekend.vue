<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="recommend-item" v-for="item in recommendList" :key=item.id>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.imgTitle }}</p>
          <p class="item-desc">{{ item.imgDesc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          imgTitle: '漂流勇进，烧烤露营',
          imgDesc: '轻松水上漂，任我乐逍遥'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          imgTitle: '北京欢乐水魔方',
          imgDesc: '阳光、沙滩、比基尼、海浪、音乐、游乐设备，六大要素相互叠加穿插'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          imgTitle: '北京欢乐水魔方',
          imgDesc: '阳光、沙滩、比基尼、海浪、音乐、游乐设备，六大要素相互叠加穿插'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          imgTitle: '北京欢乐水魔方',
          imgDesc: '阳光、沙滩、比基尼、海浪、音乐、游乐设备，六大要素相互叠加穿插'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .recommend-title
    margin-top: .1rem
    text-indent: .2rem
    line-height: .8rem
    background: #eee
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
