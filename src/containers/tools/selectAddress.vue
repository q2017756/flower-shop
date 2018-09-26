<template>
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
</template>

<script>
    import qs from 'qs'
    export default {
        name: "selectAddress",
        props:{
          cancleClick:Function,
          confirClick:Function,
            // provinceValue:Object,
            // cityValue:Object,
            // areaValue:Object
        },
        data(){
            return{
                active:1,
                province:"选择省",
                city:"选择市",
                area:"选择区",
                provinceArr:[],
                cityArr:[],
                areaArr:[],
                provinceValue:{},
                cityValue:{},
                areaValue:{}
            }
        },
        methods:{
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
            }
        },
        mounted(){
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
        }
    }
</script>

<style scoped>
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
</style>
