<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
        <div class="tab-item">
            <router-link to="/goods" class="tab-a">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings" class="tab-a">评论</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/seller" class="tab-a">商家</router-link>
        </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then(response => {
        response = response.body;    // 处理成 json 格式的数据
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="less" rel="stylesheet/less"> 

    // @import 'common/less/mixin.less';
    @import 'common/less/index.less';

    #app {
      .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        // border-bottom: 1px solid rgba(7,17,27,0.1);
        .border-1px(rgba(7,17,27,0.1));
        .tab-item {
          flex: 1;
          text-align: center;
          .tab-a {
            display: block;
            font-size: 14px;
            color: rgb(77,85,93);
            &.active {
              color: rgb(240,20,20);
            }
          }
          
        }
      }
    }



</style>