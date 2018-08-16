<template>
    <div id="address">
        <mt-header fixed class="header" title="编辑地址">
            <!--<router-link to="/">-->
                <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--</router-link>-->
            <mt-button  slot="right">保存</mt-button>
        </mt-header>
        <ul>
            <li>收货人</li>
            <li>手机号码</li>
            <li>省份、城市、县区</li>
            <li>详细地址：如街道、小区、单元</li>
        </ul>
        <div class="flex">
            <div>设置为默认地址</div>
            <div><mt-switch v-model="value"></mt-switch></div>
        </div>
    </div>
</template>

<script>
  import { Switch } from 'mint-ui';
    export default {
        name: "address"
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/common';

    .header{
        background: white;
        color: #515151;
    }
    .flex{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.15rem 0.25rem;
      background: white;
      margin-top: 0.4rem;
    }
    #address{
        padding-top: 45px;
      font-size: px2rem($size_default);
    }
    ul{
        background: white;
        padding:0 0.26rem;
    }
    li{
        height: 1.2rem;
      font-size: px2rem($size_default);
        line-height: 1.2rem;
        border-bottom: 1px solid #dfdfdf;
        color: #7f7f7f;
    }
</style>
