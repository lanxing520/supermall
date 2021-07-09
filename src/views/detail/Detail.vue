<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick"/>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :topImage="topImg"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :paramInfo="goodsParam"/>
      <detail-comment ref="comment" :comment="comment"/>
      <div ref="recommend" class="recommendMore">推荐</div>
      <!--展示推荐数据-->
      <goods-list :goods="recommends" @imageLoad="imageLoad"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
    <!--加入购物车提示框-->
<!--    <Toast :message="message" :show="show"/>-->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
// import Toast from "components/common/toast/Toast";

import { mapActions } from 'vuex'

import {
  getDetail,
  getRecommend,
  Goods,
  GoodsParam,
  Shop,
  Comment
} from "network/detail";

import {itemListenerMixin, backTopMixin} from "common/mixin";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    Scroll,
    GoodsList,
    DetailBottomBar,
    // Toast
  },
  mixins: [itemListenerMixin, backTopMixin], //混入
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      comment: {},
      recommends: [],
      themeTopYs: [0],
      currentIndex: 0,
      message: ``,
      show: false
    };
  },
  created() {
    //1.保存传入的iid(商品的id)
    this.iid = this.$route.params.iid;

    //2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      //1.获取顶部图片数据
      const data = res.result;
      // console.log(data);
      this.topImg = data.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //商品参数信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //3.获取店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //5.用户评论
      this.comment = new Comment(data.rate);
    });

    //3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.newRefresh(); //混入里面的
      this.themeTopYs = [0];
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    },
    contentScroll(position) {
      let positionY = -position.y;

      let length = this.themeTopYs.length;

      for (let i = 0; i < length - 1; i++) {
        if (
          i !== this.currentIndex &&
          positionY > this.themeTopYs[i] &&
          positionY <= this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = position.y < -1000;
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    addToCart() {
      //获取购物车需要展示的信息
      const product = {}
      product.image = this.topImg[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid  //必需的iid，作为商品唯一标识

      //将商品添加到购物车
      this.addCart(product).then(res => {
        // this.show = true;
        // this.message = res;
        // setTimeout(()=>{
        //   this.show = false;
        //   this.message = ''
        // },1500)
        this.$toast.show(res,1500)
      })
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })

      //显示提示信息（‘加入购物车成功’）
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 3.6rem);
}

.recommendMore {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
}
.text-center p{
  text-align: center;
  margin: auto;
  font-size: 2rem;
}
</style>
