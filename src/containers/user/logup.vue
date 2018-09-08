<template>
    <div id="logup">
        <mt-header fixed class="headers" :title="title">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="确认密码" placeholder="请输入密码" type="password" v-model="repassword"></mt-field>
        <mt-field placeholder="请输入验证码" class="numf"  v-model="captcha">
            <span v-show="!renum" class="text" @click="getCap">获取验证码</span>
            <span v-show="renum" class="text">{{timeNum}}s</span>
        </mt-field>
        <!--<mt-button @click="logup" type="primary">primary</mt-button>-->
        <mt-button v-show="state" @click="logup" style="width: 9rem;margin: 0.5rem 0.5rem" type="primary">确定</mt-button>
        <mt-button v-show="!state" @click="rePas" style="width: 9rem;margin: 0.5rem 0.5rem" type="primary">确定</mt-button>
    </div>
</template>

<script>
    import { Field } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import qs from "qs"
    export default {
        name: "logup",
        data(){
            return{
                phone:'',
                password:"",
                repassword:'',
                captcha:"",
                renum:false,
                timeNum:60,
                state:"",
                title:""
            }
        },
        methods:{
            getCap(){
                var myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;
                console.log(this.state)
                if(!myreg.test(this.phone)){
                    Toast("请输入合法的手机号！");
                    return;
                }
                this.$ajax.post("openapi.php?act=getVerifyCode",qs.stringify({
                    phone: this.phone,
                    no_check:'true'
                }))
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res=="succ"){
                            this.setTime();
                        }else {
                            Toast(data.data.msg)
                        }
                    })
                    .catch((data)=>{
                        console.log(data);
                        Toast("服务器异常")
                    })
            },
            setTime(){
              this.renum=true;
              var timer=setInterval(()=>{
                  if(this.timeNum>1){
                      this.timeNum--;
                  }else{
                      this.renum=false;
                      clearInterval(timer);
                  }
              },1000)
            },
            logup(){
                let myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;
                let pass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
                console.log(this.state)
                if(!myreg.test(this.phone)){
                    Toast("请输入合法的手机号");
                    return
                }
                if(!pass.test(this.password)){
                    Toast("密码必须为8-16位的数字和字母组合");
                    return;
                }
                if(this.password!=this.repassword){
                    Toast("两次输入的密码不同！")
                    return
                }
                if(!this.captcha){
                    Toast("请输入验证码！")
                    return;
                }
                this.$ajax.post("openapi.php?act=doRegister",qs.stringify({
                    phone:this.phone,
                    password: this.password,
                    yq_code:this.captcha
                }))
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res="succ"){
                            Toast(data.data.msg)
                        }else{
                            Toast(data.data.msg)
                        }
                    })
                    .catch((data)=>{
                        console.log(data)
                    })
            },
            rePas(){
                let myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;
                let pass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
                // if(!myreg.test(this.phone)){
                //     Toast("请输入合法的手机号");
                //     return
                // }
                if(!pass.test(this.password)){
                    Toast("密码必须为8-16位的数字和字母组合");
                    return;
                }
                if(this.password!=this.repassword){
                    Toast("两次输入的密码不同！")
                    return
                }
                if(!this.captcha){
                    Toast("请输入验证码！")
                    return;
                }
                this.$ajax.post("openapi.php?act=toEditPwd",{
                    new_pwd:this.password,
                    reset_code:this.captcha
                })
                    .then((data)=>{
                        if(data.data.res="succ"){
                            Toast(data.data.msg)
                        }else{
                            Toast(data.data.msg)
                        }
                    })
            }
        },
        mounted(){
            this.state=this.$route.query.state;
            if(this.state){
                this.title="注册"
            }else {
                this.title="重置密码"
            }
        }
    }
</script>

<style scoped>
    #logup{
        /*padding: 0 0.26rem;*/
        /*background: white;*/
        padding-top: 45px;
    }
    .headers{
        background: white;
        color: #515151;
    }
    .numf{
        position: relative;

    }

</style>
