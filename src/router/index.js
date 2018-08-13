import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

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
          path: '/farmStory',
          component: resolve => require(['@/containers/farm/farmStory'], resolve)
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
          path: '/myCart',
          component: resolve => require(['@/containers/user/myCart'], resolve)
        },
        {
          path: '/farmC',
          component: resolve => require(['@/containers/user/farmC'], resolve)
        },
        {
          path: '/addressX',
          component: resolve => require(['@/containers/user/address'], resolve)
        },
        {
          path: '/cardIndex',
          component: resolve => require(['@/containers/user/cardIndex'], resolve)
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
