<template>
    <div id="user-msg">
      <mt-header fixed class="headers" title="我的信息">
        <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      </mt-header>
        <div class="header">
            <img src="../../../static/imgs/timg.jpg" alt="">
        </div>
        <div class="div_c" style="background: white;padding: 0 0.2rem">
            <!--<mt-cell class="cell" title="用户名" is-link>-->
                <!--<span>111</span>-->
            <!--</mt-cell>-->
            <div @click="editName">
                <mt-cell class="cell"  title="昵称" is-link>
                    <span>justPlay</span>
                </mt-cell>
            </div>
            <mt-cell class="cell"  title="性别" is-link>
                <span>男</span>
            </mt-cell>
            <mt-cell class="cell" title="生日" is-link>
                <span>2018-10-12</span>
            </mt-cell>
            <div @click="goScore">
                <mt-cell  class="cell"  title="积分中心" is-link>
                    <span></span>
                </mt-cell>
            </div>
            <div @click="goAddress">
                <mt-cell  title="地址管理" is-link>
                    <span></span>
                </mt-cell>
            </div>

        </div>
        <div @click="logOut" class="bust">退出当前登录</div>
    </div>
</template>

<script>
    import { Cell } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import RouterLink from "vant/es/mixins/router-link";
    export default {
        name: "userMsg",
        components: {RouterLink},
        data(){
            return{

            }
        },
        methods:{
            logOut(){
                this.$ajax.post("openapi.php?act=logout")
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res=="succ"){
                            Toast("退出成功");
                            this.$router.push("login")
                        }else{
                            Toast(data.data.msg)
                        }
                    })
            },
            editName(){
                MessageBox.prompt('请输入要修改的姓名').then(({ value, action }) => {
                    if(action){
                        this.$ajax.post("/openapi.php?act=saveName",{
                            name:value
                        })
                            .then((data)=>{
                                console.log(data);
                                if(data.data.res=="succ"){
                                    Toast(data.data.msg)
                                }else {
                                    Toast(data.data.msg?data.data.msg:"保存失败")
                                }
                            })
                    }
                });
            },
            goScore(){
                this.$router.push("/score")
            },
            goAddress(){
                this.$router.push("/addressList")
            }
        },
        mounted(){
            this.$ajax.post("openapi.php?act=editMember")
                .then((data)=>{
                    console.log(data)
                })
        }
    }
</script>

<style scoped>
    #user-msg{
      padding-top: 45px;
    }
    .headers{
      background: white;
      color: #515151;
    }
    .header{
        height: 3rem;
        text-align: center;
        /*line-height: 3rem;*/
        background: white;
        margin-bottom: 0.3rem;

    }
    .header img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      margin-top: 0.5rem;
    }
    .cell{
        border-bottom: 1px solid #dfdfdf;
        color: #515151;
    }
    .mint-cell:last-child{
        background: none;
        color: #515151;
    }
    .div_c{
        margin-bottom: 0.5rem;
    }
    .bust{
        height: 1.1rem;
        text-align: center;
        line-height: 1.1rem;
        color: #515151;
        background: white;
        font-size: 0.45rem;
    }
</style>
