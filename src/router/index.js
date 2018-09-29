import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import $ajax from "../utils/ajax"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/main'
        },
        {
          path: '/main',
          component: resolve => require(['@/containers/main'], resolve),
          children: [
            {
              path: '',
              redirect: '/home'
            },
            {
              path: '/home',
              component: resolve => require(['@/containers/home/index'], resolve),
              children: [
                {
                  path: '',
                  redirect: '/home/recommend'
                },
                {
                  path: '/home/recommend',
                  component: resolve => require(['@/containers/home/recommendContainer'], resolve)
                },
              ]
            },
            {
              path: '/farm',
              component: resolve => require(['@/containers/farm/'], resolve)
            },
            {
              path: '/profile',
              component: resolve => require(['@/containers/user/userCenter'], resolve)
            },
            {
              path: '/farmDetail',
              component: resolve => require(['@/containers/farm/farmDetail'], resolve)
            },
            {
              path: '/category',
              component: resolve => require(['@/containers/category/index'], resolve)
            },
            {
              path: '/productList',
              component: resolve => require(['@/containers/productDetail/productList'], resolve)
            },
            {
              path: '/cart',
              component: resolve => require(['@/containers/cart/index'], resolve)
            },
          ]
        },
        {
          path: '/getCoupon',
          component: resolve => require(['@/containers/home/getCoupon'], resolve)
        },
          {
              path: '/farmList',
              component: resolve => require(['@/containers/farm/farmList'], resolve)
          },
        {
          path: '/farmStory',
          component: resolve => require(['@/containers/farm/farmStory'], resolve)
        },
        {
          path: '/editFarmInfo',
          component: resolve => require(['@/containers/farm/editFarmInfo'], resolve)
        },
        {
          path: '/farmStoryList',
          component: resolve => require(['@/containers/farm/farmStoryList'], resolve)
        },
        {
          path: '/message',
          component: resolve => require(['@/containers/message'], resolve)
        },
        {
          path: '/search',
          component: resolve => require(['@/containers/search/index'], resolve)
        },
          {
              path: '/orderDetails',
              component: resolve => require(['@/containers/tools/orderDetails'], resolve)
          },
        {
          path: '/productDetail/:id',
          component: resolve => require(['@/containers/productDetail/index'], resolve)
        },
        {
          path: '/comment',
          component: resolve => require(['@/containers/comment/index'], resolve)
        },
        {
          path: '/confirmOrder',
          component: resolve => require(['@/containers/productDetail/confirmOrder'], resolve)
        },
        {
          path: '/chooseCoupon',
          component: resolve => require(['@/containers/productDetail/chooseCoupon'], resolve)
        },
        {
          path: '/pay',
          component: resolve => require(['@/containers/pay/pay'], resolve)
        },
        {
          path: '/paySuccess',
          component: resolve => require(['@/containers/pay/paySuccess'], resolve)
        },
        {
          path: '/format/:pId',
          component: resolve => require(['@/containers/productDetail/format'], resolve)
        },
        {
          path: '/goodsCol',
          component: resolve => require(['@/containers/user/goodCollection'], resolve)
        },
        {
          path: '/history',
          component: resolve => require(['@/containers/user/history'], resolve)
        },
        {
          path: '/userMsg',
          component: resolve => require(['@/containers/user/userMsg'], resolve)
        },
        {
          path: '/myOrder',
          component: resolve => require(['@/containers/user/myOrder'], resolve)
        },
          {
              path: '/memberCard',
              component: resolve => require(['@/containers/user/memberCard'], resolve)
          },
        {
          path: '/myCart',
          component: resolve => require(['@/containers/user/myCart'], resolve)
        },
          {
              path: '/login',
              component: resolve => require(['@/containers/user/login'], resolve)
          },
    
          {
              path: '/logup',
              component: resolve => require(['@/containers/user/logup'], resolve)
          },
        {
          path: '/farmC',
          component: resolve => require(['@/containers/user/farmC'], resolve)
        },
          {
              path: '/checkcard',
              component: resolve => require(['@/containers/user/checkcard'], resolve)
          },
        {
          path: '/addressX',
          component: resolve => require(['@/containers/tools/address'], resolve),
            name:"address"
        },
          {
              path: '/addressList',
              component: resolve => require(['@/containers/tools/addressList'], resolve)
          },
          {
              path: '/aboutus',
              component: resolve => require(['@/containers/tools/aboutUs'], resolve)
          },
          {
              path: '/help',
              component: resolve => require(['@/containers/tools/help'], resolve)
          },
          {
              path: '/helpmsg',
              component: resolve => require(['@/containers/tools/helpmsg'], resolve)
          },
        {
          path: '/cardIndex',
          component: resolve => require(['@/containers/user/cardIndex'], resolve)
        },
          {
              path: '/getCard',
              component: resolve => require(['@/containers/user/getCard'], resolve)
          },
        {
          path: '/group',
          component: resolve => require(['@/containers/shoping/group'], resolve)
        },
        {
          path: '/score',
          component: resolve => require(['@/containers/shoping/score'], resolve)
        },
        {
          path: '/timeShop',
          component: resolve => require(['@/containers/shoping/timeShop'], resolve)
        },
      ]
    }
  ]
})
