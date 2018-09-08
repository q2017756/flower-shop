<template>
    <div id="login">
        <div class="log">
            <div class="lis">
                <img src="../../assets/logIn/phone.png" alt="">
                <input placeholder="请输入手机号" v-model="phone" type="number"/>
            </div>
            <div class="lis">
                <img src="../../assets/logIn/pass.png" alt="">
                <input placeholder="请输入密码" v-model="password" type="password">
            </div>
        </div>
        <div class="lis ss">
            <span @click="goRe(0)" class="up">修改密码</span>
            <span @click="goRe(1)" class="up">注册新号>>></span>
        </div>
        <mt-button @click="login" style="width: 9rem;margin: 0.5rem 0.5rem" type="primary">登陆</mt-button>
    </div>
</template>

<script>
    import { Field } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import qs from "qs"
    export default {
        name: "login",
        data(){
            return{
                phone:this.phone,
                password:this.password
            }
        },
        methods:{
            login(){
                this.$ajax.post("openapi.php?act=login",qs.stringify({
                    phone:this.phone,
                    pwd: this.password
                }))
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res=="succ"){
                            // this.$router.push("/home")
                        }else{
                            Toast(data.data.msg);
                        }

                    })
                    .catch((data)=>{
                        console.log(data)
                    })
            },
            goRe(state){
                this.$router.push({path:"/logup",query:{state:state}})
            }
        }
    }
</script>

<style scoped>
body,html{
    /*background: white;*/
}
.phone{
    /*margin-top: 2rem;*/
}
    #login{
        /*height: 100%;*/
        padding-top: 0.56rem;
        /*background: white;*/
        position: relative;
    }
    .log{
        border-top: 1px solid #dad9d9;
        border-bottom: 1px solid #dad9d9;
        padding: 0 0.26rem;
        background: white;
    }
    .lis{
        height: 1.25rem;
        display: flex;
        align-items:center;

    }
    .log .lis{
        border-bottom: 1px #d9d9d9 solid;
    }
    .log .lis:last-child{
        border: none;
    }
    .lis img{
        height: 0.6rem;
        margin-right: 0.3rem;
    }
    .lis input{
        height: 90%;
        width: 7.5rem;
        background: white;
    }
    .up{
        font-size: 12px;
        color: #3fd0e2;
    }
    .ss{
        justify-content: space-between;
        padding: 0 0.26rem;
    }
</style>
