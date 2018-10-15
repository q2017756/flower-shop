<template>
    <div id="address">
        <mt-header fixed class="header" title="编辑地址">
            <!--<router-link to="/">-->
                <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--</router-link>-->
            <mt-button @click="saveData"  slot="right">保存</mt-button>
        </mt-header>
        <!--<van-button type="default">默认按钮</van-button>-->
        <ul class="list-ul">
            <li>
                <input v-model="reName" placeholder="请输入收货人姓名" type="text">
            </li>
            <li>
                <input v-model="reTel" type="tel" placeholder="请输入手机号" maxlength="11"/>
            </li>
            <li @click="showSel" v-bind:class="{have:areaData}">{{areaData?areaData:"请选择省市区"}}</li>
            <li>
                <input v-model="reAddress" placeholder="请输入地址" type="text"/>
            </li>
        </ul>
        <!--<van-area value="" :area-list="areaList" />-->
        <van-popup position="bottom" v-model="show">
            <div id="select-address">
                <div class="content">
                    <div class="flex-btw">
                        <span @click="cancleClick">取消</span>
                        <span @click="confirClick">确定</span>
                    </div>
                    <ul class="area-ui">
                        <li @click="changeActive(1)" v-bind:class="{active:active==1}">{{provinceValue.region_name?provinceValue.region_name:"选择省"}}</li>
                        <li @click="changeActive(2)" v-show="provinceValue.region_name"  v-bind:class="{active:active==2}">{{cityValue.region_name?cityValue.region_name:"选择市"}}</li>
                        <li @click="changeActive(3)" v-show="cityValue.region_name"  v-bind:class="{active:active==3}">{{areaValue.region_name?areaValue.region_name:"选择区"}}</li>
                    </ul>
                    <ol v-show="active==1" class="ol">
                        <li v-bind:class="{active: provinceValue.region_id === item.region_id}" @click="checkProvince(item)" v-for="item in provinceArr">{{item.region_name}}</li>
                    </ol>
                    <ol v-show="active==2" v class="ol">
                        <li v-bind:class="{active: cityValue.region_id === item.region_id}" @click="checkCity(item)" v-for="item in cityArr">{{item.region_name}}</li>
                    </ol>
                    <ol v-show="active==3" class="ol">
                        <li v-bind:class="{active: areaValue.region_id === item.region_id}" @click="checkArea(item)" v-for="item in areaArr">{{item.region_name}}</li>
                    </ol>
                </div>
            </div>
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
  import { Picker } from 'mint-ui';
  import {Toast} from "mint-ui"
  import qs from "qs"
  import areaData from "../../utils/areaData"

  export default {
        name: "address",
        data(){
            return{
                areaList:areaData,
                searchResult: [],
                show:false,
                active:1,
                province:"选择省",
                city:"选择市",
                area:"选择区",
                provinceArr:[],
                cityArr:[],
                areaArr:[],
                provinceValue:{},
                cityValue:{},
                areaValue:{},
                addressMsg:{},

                areaData:"省、市、区",
                reName:"",
                reTel:"",
                reAddress:"",
                value:false,
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
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            },
            showSel(){
                this.show=true;
            },
            cancleClick(){
                this.show=false
            },
            confirClick(){
                console.log(this.provinceValue);
                if(this.provinceValue.region_id&&this.cityValue.region_id&&this.areaValue.region_id){
                    this.areaData = this.provinceValue.region_name+this.cityValue.region_name+this.areaValue.region_name;
                    this.province = this.provinceValue.region_id;
                    this.city = this.cityValue.region_id;
                    this.region = this.areaValue.region_id;
                    this.show=false;
                }else {
                    Toast("请确认省市区都已选择后再次确定")
                }
            },
            checkProvince(item){
                console.log(item);
                this.provinceValue = item
                this.getArea(item.region_id);
            },
            checkCity(item){
                console.log(item);
                this.cityValue = item;
                this.getArea(item.region_id)
            },
            checkArea(item){
                console.log(item);
                this.areaValue = item;
                // this.getArea(item.region_id)
            },
            changeActive(status){
                this.active=status;
            },
            getArea(id){
                this.$ajax.post("",qs.stringify({
                    api_type:"wechat",
                    api_version:"1.0",
                    act:"region_list",
                    isEnd:"webroot",
                    region_id:id
                }))
                    .then((data)=>{
                        if(data.data.res=="success"){
                            if(this.active==1){
                                this.provinceArr=data.data.errMsg;
                            }else if(this.active == 2){
                                this.cityArr = data.data.errMsg;
                            }else{
                                this.areaArr = data.data.errMsg;
                            }

                            console.log(this.provinceArr)
                        }
                    })
            },
            saveData(){
                console.log(this.provinceValue);
                // if(!this.provinceValue.region_id){
                //     Toast("出去")
                //     return ;
                // }
                this.$ajax.post("",qs.stringify({
                    api_type:"wechat",
                    api_version:"1.0",
                    act:"address_add",
                    isEnd:"webroot",
                    open_id:localStorage.getItem('openId'),
                    ship_mobile:this.reTel,
                    province: this.province,
                    city:this.city,
                    region: this.region,
                    address: this.reAddress,
                    id:this.id,
                    ship_name:this.reName
                }))
                    .then((data)=>{
                        console.log(data);
                        console.log(this.cityValue);
                        if(data.data.res =="success"){
                            Toast("保存成功")
                            this.$router.push("/addressList")
                        }
                    })
            }
        },
      components:{
            // [Button.name]:Button
          [Area.name]: Area,
          [Popup.name]:Popup,
            // Area
          // vanArea
      },
      watch:{
          provinceValue(n,o){
              console.log(n)
              this.cityArr=this.areaArr=[];
              this.cityValue=this.areaValue={}
              this.active=2
          },
          cityValue(n,o){

              if(!n.region_id){
              }else{
                  this.areaArr=[];
                  this.areaValue={}
                  this.active=3
              }
          }
      },
      mounted(){
            console.log(areaData);
            var parmas = this.$route.params;
          console.log(this.$route)
            if(parmas){
                this.addressMsg = parmas;
                this.id = parmas.id;
                this.reName = parmas.ship_name;
                this.reAddress = parmas.address;
                this.reTel=parmas.ship_mobile;
                // this.cityValue={
                //     region_name:parmas.city,
                //     region_id:parmas.city_id
                // };
                // this.provinceValue={
                //     region_name:parmas.province,
                //     region_id:parmas.province_id
                // };
                // this.areaValue = {
                //     region_name:parmas.region,
                //     region_id:parmas.region_id
                // }
                this.areaData = parmas.province+parmas.city+parmas.region;
                this.province = parmas.province_id;
                this.city = parmas.city_id;
                this.region = parmas.region_id;
                // alert(parmas.default)
                if(parmas.default == "false"){
                    this.value = false
                }else {
                    this.value = true;
                }
                // this.value = parmas.default;
            }else{
                this.id=""
            }
          this.$ajax.post("",qs.stringify({
              api_type:"wechat",
              api_version:"1.0",
              act:"region_list",
              isEnd:"webroot",
              region:""
          }))
              .then((data)=>{
                  if(data.data.res=="success"){
                      this.provinceArr=data.data.errMsg;
                      console.log(this.provinceArr)
                  }
              })
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
    .list-ul{
        background: white;
        padding:0 0.26rem;
    }
  .list-ul li{
        height: 1.2rem;
      font-size: px2rem($size_default);
        line-height: 1.2rem;
        border-bottom: 1px solid #dfdfdf;
        color: #7f7f7f;
    }
  .content{
      height: 65vh;
  }
  .flex-btw{
      display: flex;
      justify-content: space-between;
      padding: 0.25rem 0.3rem;
      color: #3283fa;
      border-bottom:1px solid #d9d9d9 ;
  }
  .area-ui{
      display: flex;
      padding: 0.2rem 0.3rem;
      border-bottom: 1px solid #d9d9d9;
  }
  .area-ui li{
      padding-right: 0.25rem;
  }
  .dd{
      display: none;
  }
  .ol{
      height: 50vh;
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 0 0.3rem;
      color: #585555;
  }
  .ol li{
      padding: 0.25rem 0;
      border-bottom: 1px solid #d9d9d9;
  }
  .active{
      color: #3283fa;
  }
    input{
        padding: 0;
        outline: none;
        border: none;
        height: 90%;
        color:#3a3535;
        width: 80%;
    }
    .have{
        color:#3a3535!important;
    }
</style>
