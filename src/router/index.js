import Vue from 'vue';
import VueRouter from 'vue-router';
import Goods from 'components/goods/goods';
import Ratings from 'components/ratings/ratings';
import Seller from 'components/seller/seller';

Vue.use(VueRouter);

const router = new VueRouter({

    linkActiveClass: 'active',

    routes: [{
            path: '*',
            redirect: '/goods'
        },
        {
            path: '/goods',
            // name: 'goods',
            component: Goods
        },
        {
            path: '/ratings',
            component: Ratings
        },
        {
            path: '/seller',
            component: Seller
        }
    ]
});

export default router;