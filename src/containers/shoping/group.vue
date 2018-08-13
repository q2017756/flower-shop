<template>
    <div id="group">
        <mt-header fixed class="header" title="团购">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!--<mt-button  slot="right">编辑</mt-button>-->
        </mt-header>
      <ul>
        <li>
          <img class="goods-img" src="../../../static/imgs/cflower.jpg"/>
          <div class="goods-msg">
            <div class="goods-title">生日鲜花生日鲜花生日鲜花生日鲜花生日</div>
            <div class="goods-bot">
              <div class="price">
                <span class="num">￥182.30</span>
                <span class="shop">已拼1.3万件</span>
              </div>
              <div class="fle-x">
                <div class="user">
                    <img src="../../../static/imgs/timg.jpg" alt="">
                    <img src="../../../static/imgs/timg.jpg" alt="">
                </div>
                <div class="button">去拼团</div>
              </div>
            </div>
          </div>
        </li>
          <li>
              <img class="goods-img" src="../../../static/imgs/cflower.jpg"/>
              <div class="goods-msg">
                  <div class="goods-title">生日鲜花生日鲜花生日鲜花生日鲜花生日</div>
                  <div class="goods-bot">
                      <div class="price">
                          <span class="num">￥182.30</span>
                          <span class="shop">已拼1.3万件</span>
                      </div>
                      <div class="fle-x">
                          <div class="user">
                              <img src="../../../static/imgs/timg.jpg" alt="">
                              <img src="../../../static/imgs/timg.jpg" alt="">
                          </div>
                          <div class="button">去拼团</div>
                      </div>
                  </div>
              </div>
          </li>
          <li>
              <img class="goods-img" src="../../../static/imgs/cflower.jpg"/>
              <div class="goods-msg">
                  <div class="goods-title">生日鲜花生日鲜花生日鲜花生日鲜花生日</div>
                  <div class="goods-bot">
                      <div class="price">
                          <span class="num">￥182.30</span>
                          <span class="shop">已拼1.3万件</span>
                      </div>
                      <div class="fle-x">
                          <div class="user">
                              <img src="../../../static/imgs/timg.jpg" alt="">
                              <img src="../../../static/imgs/timg.jpg" alt="">
                          </div>
                          <div class="button">去拼团</div>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        name: "group"
    }
</script>

<style scoped>
    #group{
        font-size: 0.4rem;
        padding-top: 45px;
    }
    .header{
        background: white;
        color: #515151;
    }
.goods-img{
  width: 10rem;
  height: 4rem;
  border: none;
  /*background-color: #ff4444;*/
}
.goods-msg{
  padding: 0.26rem 0.38rem;
  background: white;
}
  .goods-title{
    font-size:0.4rem ;
    color: #515151;
      padding-bottom: 0.2rem;
  }
    .goods-bot{
        display: flex;
        justify-content:space-between;
    }
    .num{
        font-size: 0.48rem;
        color: #b4272d;
    }
    .shop{
        color: #7f7f7f;font-size:12px;
        /*height: 0.227rem;*/
    }
    .button{
        width: 1.733rem;
        height: 0.667rem;
        background-color: #b4272d;
        border-radius: 0.133rem;
        color: white;
        font-size: .4rem;
        text-align: center;
        line-height: 0.667rem;
    }
    .user img{
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
        float: left;
        margin-left: -0.15rem;
    }
    .user{
        margin-right:0.2rem ;
    }
    .fle-x{
        display: flex;
    }
</style>
