<template>
  <div class="farm-story">
    <app-header title="农场故事"></app-header>
    <!--<img src="../../assets/img/farm-story-big.png" alt="">-->
      <div v-for="item in content">
          {{item.content}}
      </div>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'
  import qs from "qs"
  export default {
    data() {
      return {
          content:[]
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
            farm_id:"11",
            act:"getFarmStore"
        }))
            .then((data)=>{
                console.log(data);
                if(data.data.res=="succ"){
                    this.content=data.data.result.list
                }
            })
      }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';

  img {
    width: 100vw;
  }


</style>



