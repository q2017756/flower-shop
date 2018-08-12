<template>
  <div class="bt-container" v-if="topic">
    <div class="title">
      <span class="title-line">专题精选</span>
    </div>
    <router-link class="bt-item" v-bind:to="toPath">
      <img class="bt-pic" v-bind:src="topic.pic" />
      <div class="bt-title-container">
        <span class="bt-title">{{ topic.title }}</span>
        <span class="bt-price">{{ topic.lowestPrice }}元起</span>
      </div>
      <p class="bt-subtitle">{{ topic.description }}</p>
    </router-link>

  </div>
</template>

<script>
  export default {
    props: ['topic'],
    computed: {
      toPath () {
        console.log(this.topic.topicId)
        return `/farm`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';
  .bt-container {
    padding-bottom: px2rem(10);
    background-color: #fff;
    margin-bottom: $edge_small;
  }
  .title {
    text-align: center;
    margin-bottom: px2rem(10);
  }
  .bt-pic {
    width: 100%;
  }

  .bt-title-container {
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(15);
  }

  .bt-title {
    font-size: px2rem($size_default);
    color: $dark_text_color;
  }

  .bt-price {
    font-size: px2rem($size_default);
    color: #b4282d;
  }

  .bt-subtitle {
    color: $text_color;
    font-size: px2rem($size_small);
    padding: 0 px2rem(15);
  }
</style>

