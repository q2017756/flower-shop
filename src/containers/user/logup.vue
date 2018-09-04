<template>
    <div id="logup">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="验证码" v-model="captcha">
            <span @click="getCap">获取验证码</span>
        </mt-field>
        <mt-button @click="logup" type="primary">primary</mt-button>
    </div>
</template>

<script>
    import { Field } from 'mint-ui';
    import { Button } from 'mint-ui';
    import qs from "qs"
    export default {
        name: "logup",
        data(){
            return{
                phone:'',
                password:"",
                captcha:""
            }
        },
        methods:{
            getCap(){
                this.$ajax.post("openapi.php?act=getVerifyCode",qs.stringify({
                    phone: this.phone,
                    www:"1111",
                    no_check:'true'
                }))
                    .then((data)=>{
                        console.log(data);
                    })
                    .catch((data)=>{
                        console.log(data)
                    })
            },
            logup(){
                this.$ajax.post("openapi.php?act=doRegister",qs.stringify({
                    phone:this.phone,
                    password: this.password,
                    yq_code:this.captcha
                }))
                    .then((data)=>{
                        console.log(data)
                    })
                    .catch((data)=>{
                        console.log(data)
                    })
            },
        }
    }
</script>

<style scoped>

</style>
