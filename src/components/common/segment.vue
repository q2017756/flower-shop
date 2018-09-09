<template>
  <div class="segment" ref="segment">
    <div class="segment-inner"
         ref="itemContainer"
         :style="dragStyle"
         @touchmove="onTouchMove"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd">
      <div :class="['segment-item', select === title ? 'current-item' : '']"
           v-for="title in titles"
           @click="handleItemClick(title)">
        <span>{{ title.tag_name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'segment',
    props: {
      titles: Array,
      handleClick: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        // 上一次的位置
        lastInnerLeft: 0,
        // 起始点
        dragFrom: 0,
        // 拖动的距离
        dragDelta: 0,
        dragStyle: {},
        // select
        select: this.titles[0]
      }
    },
    methods: {
      handleItemClick (title) {
        this.select = title
        this.handleClick(title)
      },
      onTouchMove (e) {
        // console.log('on touch move: ', e)
        // console.log(e.touches[0].clientX)
        // console.log('+++++++++++++++++++')
        const current = e.touches[0].clientX
        this.dragDelta = current - this.dragFrom
        // console.log(this.dragDelta)
        this.dragAnimate(this.dragDelta)
      },
      onTouchStart (e) {
        this.dragFrom = e.targetTouches[0].clientX
        // console.log('on touch start: ', e)
        // console.log(this.dragFrom)
        // console.log('--------------------')
      },
      onTouchEnd (e) {
        this.lastInnerLeft = this.dragDelta
        // console.log('on touch end: ', e)
        // console.log(this.lastInnerLeft)
        // console.log('=======================')
        const segmentWidth = this.$refs.segment.clientWidth
        const innerWidth = this.$refs.itemContainer.clientWidth
        // console.log(segmentWidth, innerWidth, innerWidth - segmentWidth)
        const right = segmentWidth - innerWidth
        if (this.dragDelta > 0) {
          this.lastInnerLeft = 0
          this.dragAnimate(0, 600)
        } else if (this.dragDelta < right) {
          console.log('到最右了')
          this.lastInnerLeft = right
          this.dragAnimate(0, 600)
        }
      },
      dragAnimate (delta, duration = 0) {
        this.dragStyle = {
          transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
          transitionDuration: `${duration}ms`,
          transform: `translate(${delta + this.lastInnerLeft}px, 0px) translateZ(0px)`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .segment {
    height: px2rem(40);
    background-color: #fff;
    border-bottom: 1px solid $border_color;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow-x: hidden;
  }
  .segment-item {
    margin-left: $edge_default;
    display: inline-block;
    &:first-of-type{
      margin-left: px2rem(8);
    }
  }
   .segment-item span {
     color: #333;
     font-size: px2rem(15);
     padding: 0 px2rem(8);
     display: inline-block;
   }

  .current-item span {
     color: $red_default;
     position: relative;
     line-height: px2rem(40);
   }

   .current-item span:after {
    content: '';
    position: absolute;
    background-color: $red_default;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px2rem(2);
   }
</style>
