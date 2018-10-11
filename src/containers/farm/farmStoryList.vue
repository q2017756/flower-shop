<template>
  <div class="farm-story">
    <app-header title="农场故事列表"></app-header>
    <!--<div v-for="n in 6" :key="n" @click="handleStory">-->
        <div class="item" @click="goStoryDetails(item)" v-for="item in datas" >
            <div class="box">
                <img :src="item.image" alt="">
            </div>

            <div class="text">
                <p class="title">{{item.title}}</p>
                <!--<p class="font-small">{{item.description}}</p>-->
            </div>
        </div>
    <!--</div>-->
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'
  import qs from "qs"
  export default {
    data() {
      return {
          datas:[],
      }
    },
    props: {
    },
    components: {
      appHeader
    },
    methods: {
      handleStory() {
        this.$router.push('/farmStory')
      },
        goStoryDetails(item){
          console.log(item);
          this.$router.push({path:"/farmStory",query:{id:item.store_id}})
        }
    },
      mounted(){
        this.$ajax.post("",qs.stringify({
            act:"getFarmStore",
            farm_id:"11"
        }))
            .then(data=>{
                console.log(data);
                if(data.data.res == "succ"){
                    this.datas=data.data.result.list;
                    console.log(this.datas);
                    // console.log(JSON.parse(this.datas[0].image))
                }
            })
      }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';
  .item {
      margin-top: $edge_small;
      padding: $edge_small 0;
      background: #fff;
      .box{
          width: 94%;
          height: px2rem(160);
          margin: 0 auto;
          border-radius: 2px;
          overflow: hidden;
          img {
              width: 100%;
              height: px2rem(160);
          }
      }

      .text {
          padding: px2rem(10) px2rem(15);
      }
      .title {
          @include ellipsis;
          margin-bottom: px2rem(4);
          font-size: px2rem($size_default);
          color: $text_color;
      }
  }


</style>



