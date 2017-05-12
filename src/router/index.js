import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/goods/Goods';
import Ratings from '@/components/ratings/Ratings';
import Seller from '@/components/seller/Seller';

// 如果使用模块化机制编程，导入Vue和VueRouter，
// 要调用 Vue.use(VueRouter)。再通过use()这个方法，相当于安装插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: {
        'goods': Goods
      }
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: {
        'ratings': Ratings
      }
    },
    {
      path: '/seller',
      name: 'seller',
      component: {
        'seller': Seller
      }
    }
  ]
})
