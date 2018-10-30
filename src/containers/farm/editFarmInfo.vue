<template>
  <div class="edit-info">
    <app-header title="资料填写"></app-header>
    <div class="form">
      <input class="common-input" type="text" placeholder="基地名称" v-model="shop">
      <input class="common-input" type="text" placeholder="联系人" v-model="who">
      <input class="common-input" type="text" placeholder="联系电话" v-model="tel">
      <input class="common-input" type="text" placeholder="地址" v-model="addr">
    </div>
    <div @click="saveInfo" class="common-btn">确定</div>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'
  import { Toast } from 'mint-ui';
  import qs from "qs"
  export default {
    data() {
      return {
        shop: '',
        who: '',
        tel: '',
        addr: '',
      }
    },
    props: {
    },
    components: {
      appHeader
    },
    methods: {
        saveInfo(){
            console.log("dddd")
            if(this.shop==""){
                Toast("请输入基地名称");
                return
            }else if(this.who==""){
                Toast("请输入联系人姓名")
                return
            }else if(this.tel==""){
                Toast("请输入联系电话")
                return
            }else if(this.addr==""){
                Toast("请输入联系地址")
                return
            }
            this.$axios('', {
                act: 'addFarm',
                farm_name:this.shop,
                contact_name:this.who,
                mobile:this.tel,
                address:this.addr
            }, (data) => {
                if(data.data.res=="succ"){
                    Toast(data.data.msg)
                    this.$router.push('/farm')
                }else {
                    Toast(data.data.msg)
                }
            })
        }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';
  .edit-info {
    background: #fff;
    height: 100vh;
    .form {
      padding: $edge_default;
      border-top: $edge_default solid #f4f4f4;
      .common-input {
        width: 100%;
        padding: $edge_default 0;
        border-bottom: 1px solid #eee;
        font-size: px2rem($size_middle);
      }
    }

  }




</style>



