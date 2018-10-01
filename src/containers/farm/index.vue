<template>
  <div class="farm">
    <app-header title="优花农场"></app-header>
    <img class="farm-img" src="../../assets/img/farm-header.png" alt="">

    <div class="productor-container">
      <div class="productor-header">
        <h2>鲜花农场导航</h2>
        <i />
      </div>
      <div class="productor-content">
        <productor-item
          v-for="manufacturer in data.manufacturer"
          :key="manufacturer.mId"
          :productor="manufacturer"
          @handleDetail="handleDetail(manufacturer.farm_id)"/>
      </div>
    </div>

    <div class="home-like">
      <div class="text-center">
        <span class="title-line">基地入驻</span>
      </div>
      <div class="invite-container">
        <img class="invite-img" src="../../assets/img/farm-invite.png" alt="">
        <div class="btn-container">
          <div class="invite-btn" @click="handleCall">
            <img src="../../assets/icon/contact.png" alt="">
            <span>在线联系</span>
          </div>
          <div class="invite-btn" @click="handleEditFarm">
            <img src="../../assets/icon/write.png" alt="">
            <span>资料填写</span>
          </div>
        </div>
      </div>
    </div>


    <div class="home-like">
      <div class="text-center">
        <span class="title-line">花枝严选农场</span>
      </div>
      <farm-item :addrShow="true" v-for="item,index in farmList" :farmInfo="item" :key="index"></farm-item>
      <div class="more-farm" @click="handleList">查看更多精选农场</div>
    </div>

    <div class="home-like">
      <div class="text-center">
        <span class="title-line">海外农场</span>
      </div>
      <farm-item :addrShow="true" v-for="item,index in farmList" :farmInfo="item" :key="index"></farm-item>
      <div class="more-farm" @click="handleList">查看更多海外农场</div>
    </div>

    <div class="home-like">
      <div class="text-center">
        <span class="title-line">新选农场</span>
      </div>
      <farm-item :addrShow="true" v-for="item,index in farmList" :farmInfo="item" :key="index"></farm-item>
      <div class="more-farm" @click="handleList">查看更多新农场</div>
    </div>

    <div class="home-like">
      <div class="text-center">
        <span class="title-line">农场故事</span>
      </div>
      <div class="flex-xyc">
          <div v-for="item in storyList" class="list">
              <router-link v-bind:to="{path:'/farmStory',query:{id:item.store_id}}">
              <img  :src="item.image" alt="">
              </router-link>
              <div>{{item.title}}</div>
          </div>

      </div>
      <div class="more-farm" @click="handleStoryList">查看更多农场故事</div>
    </div>
    <bottom-footer />

  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  import qs from "qs"
  import { fetchHome } from '@/utils/fetchData'
  import appHeader from '@/components/common/appHeader'
  import productorItem from '@/components/home/productorItem'
  import farmItem from '@/components/home/farmItem'
  import bottomFooter from '@/components/common/bottomFooter'
  import RouterLink from "vant/es/mixins/router-link";

  export default {
    data() {
      return {
          farmList: [],
          storyList:[],
          data: {
          manufacturer: [
            {
              "name": "玫瑰农场",
              "thumbnail_pic": "/static/img/rose.png"
            },
            {
              "name": "花枝农场",
              "thumbnail_pic": "/static/img/rose.png"
            },
            {
              "name": "xx农场",
              "thumbnail_pic": "/static/img/rose.png"
            },
            {
              "name": "xx农场",
              "thumbnail_pic": "/static/img/rose.png"
            }
          ]
        }
      }
    },
    props: {
    },
    components: {
        RouterLink,
      appHeader,
      productorItem,
      farmItem,
      bottomFooter
    },
    methods: {
        getData() {
            this.$ajax.post("openapi.php?act=getFarmList")
                .then((data)=>{
                    console.log(data)
                    this.farmList = data.data.result.list.slice(0,4)
                })
                .catch((data)=>{
                    console.log(data);
                    Toast("服务器异常")
                })
        },
      handleDetail(id) {
        this.$router.push('/farmDetail')
      },
      handleStory() {
        this.$router.push('/farmStory')
      },
      handleStoryList() {
        this.$router.push('/farmStoryList')
      },
      handleEditFarm() {
        this.$router.push('/editFarmInfo')
      },
      handleCall() {
        Toast('打电话')
      },
        handleList() {
            this.$router.push('/farmlist')
        },
        // 农场故事
        getStory(){
            this.$ajax.post("",qs.stringify({
                act:"getFarmStores"
            }))
                .then(data=>{
                    console.log("11111111111111")
                    console.log(data);
                    if(data.data.res=="succ"){
                        this.storyList=data.data.result.list
                    }
                })
        }
    },
    mounted () {
        this.getData();
        this.getStory();
      // fetchHome()
      //   .then(r => {
      //     console.log(r)
      //     this.data = r
      //   })
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';

  .farm {
    flex: 1;
    overflow-y: scroll;
  }
  .farm-img {
    width: 100vw;
  }

  .productor-container {
    .productor-header {
      height: px2rem(40);
      h2 {
        font-size: px2rem($size_middle);
      }
    }
  }

  .home-like {
    .text-center {
      padding-bottom: 0;
      border-bottom: $edge_small solid #eee;
      .title-line {
        margin: px2rem(10) 0;
      }
    }
    .more-farm {
      width: 100vw;
      padding: px2rem(10) 0;
      text-align: center;
      font-size: px2rem($size_small);
    }
  }

  .invite-container {
    padding: px2rem(10);
    background: #EADCD1;
    .invite-img {
      width: 100%;
      margin-bottom: $edge_small;
      border-radius: 5px;
    }
    .btn-container {
      display: flex;
      justify-content: space-between;
      .invite-btn {
        flex: 0 0 48%;
        @include flex_default;
        justify-content: center;
        height: px2rem(40);
        background: #B09E7A;
        border-radius: 5px;
        img {
          width: px2rem(20);
          margin-right: px2rem(5);
        }
        span {
          color: #fff;

        }
      }
    }
  }


    .flex-xyc{
        /*display: flex;*/
        display: flex;
        width: 100%;
        /*white-space: nowrap;*/
        overflow-x: auto;
        overflow-y: hidden;
        height: 5.2rem;
        background: white;
        .list{
            width: 6.4rem;
            margin-left: 0.4rem;
            .list:last-child{
                margin-right: 0.2rem;
            }
            img{
                width: 6.4rem;
                height: 4.6rem;
            }
            /*flex-shrink: 3;*/
        }
    }

</style>



