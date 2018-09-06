<template>
    <div id="address">
        <mt-header fixed class="header" title="编辑地址">
            <!--<router-link to="/">-->
                <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--</router-link>-->
            <mt-button  slot="right">保存</mt-button>
        </mt-header>
        <!--<van-button type="default">默认按钮</van-button>-->
        <ul>
            <li>收货人</li>
            <li>手机号码</li>
            <li @click="showSel">省份、城市、县区</li>
            <li>详细地址：如街道、小区、单元</li>
        </ul>
        <van-popup position="bottom" v-model="show">
            <div>
                自定义内容
            </div>
            <van-area value="" :area-list="areaList" />
        </van-popup>

        <!--<van-switch v-model="checked" />-->
        <div class="flex">
            <div>设置为默认地址</div>
            <div><mt-switch v-model="value"></mt-switch></div>
        </div>
    </div>
</template>

<script>
  import { Switch } from 'mint-ui';
  import { Button } from 'vant';
  import { Area } from 'vant';
  import { Popup } from 'vant';
  import areaData from "../../utils/areaData"

  export default {
        name: "address",
        data(){
            return{
                areaList:areaData,
                searchResult: [],
                show:false,
            }
        },
        methods:{
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            },
            showSel(){
                this.show=true;
            }
        },
      components:{
            // [Button.name]:Button
          [Area.name]: Area,
          [Popup.name]:Popup
            // Area
          // vanArea
      },
      mounted(){
            console.log(areaData)
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/common';

    .header{
        background: white;
        color: #515151;
    }
    .flex{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.15rem 0.25rem;
      background: white;
      margin-top: 0.4rem;
    }
    #address{
        padding-top: 45px;
      font-size: px2rem($size_default);
    }
    ul{
        background: white;
        padding:0 0.26rem;
    }
    li{
        height: 1.2rem;
      font-size: px2rem($size_default);
        line-height: 1.2rem;
        border-bottom: 1px solid #dfdfdf;
        color: #7f7f7f;
    }
</style>
