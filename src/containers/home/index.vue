<template>
  <div class="home-page">
    <header>
      <div class="header-top">
        <img class="home-logo" src="../../assets/img/home-logo.png" alt="">
        <input class="search-input" type="text" placeholder="玫瑰"   @click="handleSearch">
        <img class="home-msg" src="../../assets/icon/message.png" alt=""  @click="handleMessage">
      </div>
      <segment :titles="segmentArr" :handleClick="handleChange"/>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import {fetchHome} from '@/utils/fetchData'
  import segment from '@/components/common/segment'
  import { Toast } from 'mint-ui';
  import qs from 'qs'
  export default {
    name: 'home',
    components: {
      segment
    },
    data() {
      return {
          segmentArr: [],
        data: {}
      }
    },
    computed: {
    },
    methods: {
        getData() {
            this.$ajax.post('openapi.php',qs.stringify({
                api_type:'common',
                api_version:'1.0',
                act:'goodsTagCatList',
                isEnd:'webroot',
                page:1,
                pageLimit:10,
                type:'tag',
            }))
                .then((data)=>{
                    console.log('tag:',data);
                    if(data.data.res=="succ"){
                        this.segmentArr = data.data.result
                    }else{
                        Toast(data.data.msg)
                    }
                })
                .catch((data)=>{
                    console.log(data);
                    Toast("服务器异常")
                })
        },
      handleSearch() {
        this.$router.push('/search')
      },
      handleMessage() {
        this.$router.push('/message')
      },
      handleChange(title) {
        console.log('click at ', title.tag_name)
//        this.$router.push('/productList')
        // Toast(title);
      }
    },
      mounted(){
        this.getData()
      }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';

  .home-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: px2rem(5) $edge_default;
    .home-logo {
      width: px2rem(43);
    }
    .home-msg {
      width: px2rem(23);
    }
  }

  .home-content {
    flex: 1;
    overflow-y: auto;
  }

</style>
