<template>
  <div class="edit-info">
    <app-header title="资料填写"></app-header>
    <div class="form">
      <input class="common-input" type="text" placeholder="基地名称" v-model="shop">
      <input class="common-input" type="text" placeholder="联系人" v-model="who">
      <input class="common-input" type="text" placeholder="联系电话" v-model="tel">
      <input class="common-input" type="text" placeholder="地址" v-model="addr">
    </div>
    <div class="btn">确定</div>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'

  export default {
    data() {
      return {
        shop: '',
        who: '',
        tel: '',
        addr: '',
      }
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
  .edit-info {
    background: #fff;
    height: 100vh;
    .form {
      padding: $edge_default;
      border-top: $edge_default solid #f4f4f4;
      .common-input {
        width: 100%;
        padding: $edge_default 0;
        border-bottom: 1px solid #eee;
        font-size: px2rem($size_middle);
      }
    }
    .btn {
      position: absolute;
      bottom: $edge_default;
      width: 90vw;
      margin-left: 5vw;
      text-align: center;
      font-size: px2rem($size_default);
      line-height: px2rem(50);
      color: #fff;
      background: $red_default;
    }
  }




</style>



