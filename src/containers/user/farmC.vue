<template>
    <div id="farm-c">
        <mt-header fixed class="header" title="关注农场">
          <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <mt-button v-show="!isedit" @click="edit"  slot="right">编辑</mt-button>
            <mt-button  v-show="isedit" @click="cancle" slot="right">删除</mt-button>
        </mt-header>
        <ul>
            <li v-for="(item,index) in list" class="l-l">
                <div v-show="isedit" class="check check-l">
                    <!--{{barr[index]}}-->
                    <i class="iconfont icon-xuanzekuangmoren" @click="check(index)" v-show="!barr[index]"></i>
                    <i class="iconfont icon-xuanzekuangxuanzhong" @click="check(index)" v-show="barr[index]" style="color:#25b5fe"></i>
                </div>
                <div class="img-d">
                    <img :src="item.img_url" alt="">
                </div>
                <div class="msg">
                    <div v-show="item.farm_lv_id==2" class="xxd"><img class="xx" src="../../../static/imgs/xing.png" alt=""><img class="xx" src="../../../static/imgs/xing.png" alt=""><img class="xx" src="../../../static/imgs/xing.png" alt=""></div>
                    <div v-show="item.farm_lv_id==1" class="xxd"><img class="xx" src="../../../static/imgs/xing.png" alt=""></div>
                    <div v-show="item.farm_lv_id!=2&&item.farm_lv_id!=1" class="xxd"></div>
                    <div class="name">{{item.farm_name}}</div>
                </div>
                <div class="btn">
                    <div class="s-x">2 <br> 上新</div>
                    <div class="b-s">
                        <span class="zxs">找相似</span>
                        <span class="slh"><img class="mor" src="../../../static/imgs/mor.png" alt=""></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default {
        name: "farmC",
        data(){
            return{
                list:[],
                barr:[],
                isedit:false
            }
        },
        methods:{
            // 选取要取消的
            check(index){
                if(this.barr[index]){
                    // this.barr[index]=false;
                    this.$set(this.barr,index,0)
                }else{
                    // this.barr[index]=true;
                    this.$set(this.barr,index,1)
                }
                console.log(this.barr)
            },
            // 编辑
            edit(){
                this.isedit=true;
            },
            // 取消收藏
            cancle(){
                let length=this.barr.length;
                let farmArr=[];
                for(let i =0;i<length;i++){
                    if(this.barr[i]){
                        farmArr.push(this.list[i].farm_id)
                    }
                };
                this.$ajax.post("openapi.php?act=unFavFarm",{
                    farm_id:farmArr.join(',')
                })
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res === "succ"){
                            Toast(data.data.msg);
                            this.getList();
                        }
                    })
            },
            // 获取收藏农场
            getList(){
                this.$ajax.get("openapi.php?act=myFavFarms")
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res=="succ"){
                            this.list=data.data.result.list;
                            let length = data.data.result.list.length;
                            let barr=[]
                            for(let i=0;i<length;i++){
                                barr.push(0)
                            };
                            this.barr=barr;
                        }else {
                            Toast(data.data.msg)
                        }
                    })
                    .catch((data)=>{
                        console.log(data)
                    })
            }
        },
        mounted(){
            this.getList();
        }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';
    #farm-c{
        padding-top: 45px;
      font-size: px2rem($size_default);
    }
    .header{
        background: white;
        color: #515151;
    }
    .check{
        display: flex;
        align-items: center;
        padding-right: 3px;
    }
    /*.icon-xuanzekuangxuanzhong{*/
        /*color: red;*/
    /*}*/
    #farm-c img{
        width: 100%;
        height: 100%;
    }
    .l-l{
        display: flex;
        padding:0.18rem 0.3rem ;
        background: white;
        margin-bottom: 0.2rem;
    }
    .img-d{
        width: 1.33rem;
        height: 1.45rem;
        flex-shrink: 0;
    }
    .msg{
        padding-left: 0.2rem;
        width: 5.5rem;
    }
    #farm-c .xx{
        width: 0.4rem;
        margin-left: 0.1rem;
    }
    .name{
        font-size: 0.35rem;
        padding-top: 0.15rem;
    }
    .xxd{
        padding-top: 0.2rem;
    }
    .s-x{
        text-align: right;
        font-size: 0.35rem;
        color: #b4272d;
        flex-shrink: 0;
    }
    .btn{
        width: 3rem;
        flex-shrink: 0;
    }
    /*.b-s{*/
      /*display: flex;*/
    /*}*/
    .b-s{
      height: 0.7rem;
      position: relative;
    }
    .zxs{
        font-size: 0.35rem;
        border: 1px solid #c1c8ca;
        padding: 0.1rem 0.2rem;
        border-radius: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .slh{
        text-align: right;
    }
   #farm-c .mor{
        width: 0.5rem;
       text-align: right;
     position: absolute;
     right: 0;
     bottom: -0.1rem;
       /*margin: 0.3rem 0 0 0.7rem;*/
       /*position: absolute;*/
       /*bottom: 0;*/
       /*right: 0;*/
    }
</style>
