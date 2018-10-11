<template>
  <div class="farm-story">
    <app-header title="农场故事"></app-header>
      <div style="background-color: #f4f4f4;height: 0.25rem"></div>
      <div class="body-c">
          <div class="title">{{content.title}}</div>
          <div class="desc">{{content.description}}</div>
          <div class="html" v-html="content.content"></div>
      </div>
    <!--<img src="../../assets/img/farm-story-big.png" alt="">-->
      <!--<div v-for="item in content">-->
          <!--{{item.content}}-->
      <!--</div>-->
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'
  import qs from "qs"
  export default {
    data() {
      return {
          content:{}
      }
    },
    props: {
    },
    components: {
      appHeader
    },
    methods: {

    },
      mounted(){
        this.$ajax.post("",qs.stringify({
            store_id:this.$route.query.id,
            act:"getStoreInfo"
        }))
            .then((data)=>{
                console.log(data);
                if(data.data.res=="succ"){
                    this.content=data.data.result.info
                }
            })
      }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';
  .farm-story{
      /*min-height: 100vh;*/
      /*background: white;*/
      /*padding: 0.25rem;*/
  }
  img {
    width: 100vw;
  }
.body-c{
    min-height: 100vh;
    background: white;
    padding: 0.25rem;
}
    .title{
        font-size: px2rem(18);
    }
    .desc{
        font-size: px2rem(14);
        color: #333333;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #cccccc;
    }
    .html{
        padding-top: 0.25rem;
    }

</style>



