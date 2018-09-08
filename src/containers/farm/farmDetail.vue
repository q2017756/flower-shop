<template>
  <div class="farm-detail">
    <app-header :titleShow="false">
      <div class="farm-name" slot="center">
        <span class="name">玫瑰农场</span>
        <img src="../../assets/icon/star-red.png" alt="">
        <img src="../../assets/icon/star-red.png" alt="">
        <img src="../../assets/icon/star-red.png" alt="">
        <img src="../../assets/icon/star-red.png" alt="">
      </div>
    </app-header>
    <div class="search">
      <input slot="center" class="search-input center" type="text" placeholder="玫瑰"/>
      <div v-show="!iscol" class="fllow" @click="colFarm">
        <img src="../../assets/icon/fllow.png" alt="">
        <span>关注农场</span>
      </div>
        <div v-show="iscol" class="fllow" @click="delFarm">
            <img src="../../assets/icon/fllow.png" alt="">
            <span>已关注</span>
        </div>
    </div>
    <div class="item-container">
      <farm-item v-for="n in 8" :key="n" :cartShow="true"></farm-item>
    </div>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'
  import farmItem from '@/components/home/farmItem'
  import qs from "qs"
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
          name:"",
          start:0,
          page:0,
          count:20,
          iscol:false,
          id:0
      }
    },
    props: {
    },
    components: {
      appHeader,
      farmItem
    },
    methods: {
        colFarm(){
            this.$ajax.post("openapi.php?act=doFavFarm",{
                farm_id:this.id
            })
                .then((data)=>{
                    console.log(data);
                    if(data.data.res == "succ"){
                        Toast(data.data.msg)
                    }
                })
        },
        delFarm(){
            this.$ajax.post("openapi.php?act=unFavFarm",{
                farm_id:this.id
            })
                .then((data)=>{
                    console.log(data);
                    if(data.data.res == "succ"){
                        Toast(data.data.msg)
                    }
                })
        }
    },
      mounted(){
        this.name=this.$route.query.name;
        this.start=this.$route.query.start;
        this.id=this.$route.query.farmId;
        console.log('ssss')
        // 请求上品
          this.$ajax.post("openapi.php?act=getFarmGoods",{
              farm_id:1,
              start:this.page*this.count,
              limit:(this.page+1)*this.count
          })
              .then((data)=>{
                  console.log(data)
              })
      }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';

  .farm-detail {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
    .farm-name {
      @include flex_default;
      justify-content: flex-start;
      width: 50vw;
      height: $header_height;
      margin: 0 0 0 px2rem(40);
      span {
        padding: px2rem(10);
        font-size: px2rem($size_default);
      }
      img {
        width: px2rem(12);
        margin-right: px2rem(2);
      }
    }

    .search {
      @include flex_default;
      justify-content: space-between;
      background: #fff;
      margin-bottom: $edge_default;
      padding: px2rem(10) px2rem(10) px2rem(10) 0;
      .search-input {
        width: 80vw;
      }
      .fllow {
        @include flex_default;
        flex-direction: column;
        margin-left: px2rem(20);
        img {
          width: px2rem(25);
        }
        span {
          font-size: px2rem($size_small);
        }
      }
    }

    .item-container {
      flex: 1;
      overflow-y: scroll;
      display: flex;
      flex-wrap: wrap;
    }
  }

</style>



