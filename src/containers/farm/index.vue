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
          @handleDetail="handleDetail"/>
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
      <farm-item :addrShow="true" v-for="n in 4" :key="n"></farm-item>
      <div class="more-farm" @click="handleList">查看更多精选农场</div>
    </div>

    <div class="home-like">
      <div class="text-center">
        <span class="title-line">海外农场</span>
      </div>
      <farm-item :addrShow="true" v-for="n in 4" :key="n"></farm-item>
      <div class="more-farm" @click="handleList">查看更多海外农场</div>
    </div>

    <div class="home-like">
      <div class="text-center">
        <span class="title-line">新选农场</span>
      </div>
      <farm-item :addrShow="true" v-for="n in 4" :key="n"></farm-item>
      <div class="more-farm" @click="handleList">查看更多新农场</div>
    </div>

    <div class="home-like">
      <div class="text-center">
        <span class="title-line">农场故事</span>
      </div>
      <img class="farm-img" src="../../assets/img/farm-story-small.png"  @click="handleStory" alt="">
      <div class="more-farm" @click="handleStoryList">查看更多农场故事</div>
    </div>
    <bottom-footer />

  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  import { fetchHome } from '@/utils/fetchData'
  import appHeader from '@/components/common/appHeader'
  import productorItem from '@/components/home/productorItem'
  import farmItem from '@/components/home/farmItem'
  import bottomFooter from '@/components/common/bottomFooter'

  export default {
    data() {
      return {
        data: {
          "manufacturer": [
            {
              "title": "玫瑰",
              "pic": "/static/img/rose.png"
            },
            {
              "title": "菊花",
              "pic": "/static/img/rose.png"
            },
            {
              "title": "绣球",
              "pic": "/static/img/rose.png"
            },
            {
              "title": "向日葵",
              "pic": "/static/img/rose.png"
            }
          ],
          "hotItems": [
            {
              "title": "万卉生态基地",
              "pic": "/static/img/farm.png",
            },
            {
              "title": "万卉生态基地2",
              "pic": "/static/img/farm.png",
            },
            {
              "title": "万卉生态基地3",
              "pic": "/static/img/farm.png",
            },
            {
              "title": "万卉生态基地",
              "pic": "/static/img/farm.png",
            },
            {
              "title": "万卉生态基地2",
              "pic": "/static/img/farm.png",
            },
            {
              "title": "万卉生态基地3",
              "pic": "/static/img/farm.png",
            }
          ],
          "bestTopic": {
            "pic": "/static/img/best.png",
            "title": "七夕送花攻略",
            "description": "哄女盆友开心神器",
            "lowestPrice": "19.9",
            "topicId": "t101"
          }
        }
      }
    },
    props: {
    },
    components: {
      appHeader,
      productorItem,
      farmItem,
      bottomFooter
    },
    methods: {
      handleDetail() {
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
            this.$router.push('/productList')
        }
    },
    mounted () {
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

</style>



