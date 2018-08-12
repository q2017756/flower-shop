<template>
  <div class="farm-story">
    <app-header title="农场故事"></app-header>
    <img src="../../assets/img/farm-story-big.png" alt="">
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'

  export default {
    data() {
      return {}
    },
    props: {
    },
    components: {
      appHeader
    },
    methods: {

    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';

  img {
    width: 100vw;
  }


</style>



