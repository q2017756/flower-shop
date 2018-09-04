<template>
    <div>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button @click="login" type="primary">primary</mt-button>
    </div>
</template>

<script>
    import { Field } from 'mint-ui';
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
                        console.log(data)
                    })
                    .catch((data)=>{
                        console.log(data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
