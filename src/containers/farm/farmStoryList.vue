<template>
  <div class="farm-story">
    <app-header title="农场故事列表"></app-header>
    <div v-for="n in 6" :key="n" @click="handleStory">农场故事 {{ n }}</div>
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
      handleStory() {
        this.$router.push('/farmStory')
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';



</style>



