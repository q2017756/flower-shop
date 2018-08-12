<template>
  <div class="comment-page">
    <app-header title="评价"></app-header>
    <header-select v-bind:selects="selects" v-bind:handleClick="handleChange" v-bind:current="currentSelect" />
    <div class="comment-container">
      <comment />
      <comment />
      <comment />
      <comment />
      <comment />
      <comment />
    </div>
  </div>
</template>

<script>
  import appHeader from '@/components/common/appHeader'
  import headerSelect from './headerSelect'
  import comment from '@/components/common/comment'
  export default {
    data () {
      return {
        selects: ['全部', '有图'],
        currentSelect: '全部'
      }
    },
    components: {
      appHeader,
      headerSelect,
      comment
    },
    methods: {
      handleChange (select) {
        console.log('click...', select)
        this.currentSelect = select
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .comment-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .comment-container {
    flex: 1;
    overflow-y: auto;
    background-color: #fff;
  }
</style>
