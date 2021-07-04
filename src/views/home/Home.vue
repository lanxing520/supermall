<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center class="home-slot">
        购物街
      </template>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabControlShow"
    />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <!--监听子组件tabClick事件-->
      <goods-list :goods="showGooods" />
    </scroll>
    <!--想在某个组件的根元素上监听一个原生事件。可以使用 v-on 的修饰符 .native  -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeData, getHomeGoods } from "network/home.js";
import {itemListenerMixin,backTopMixin} from "common/mixin";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      // 预设对象保存后台请求来的数据，默认三个都请求第一页的内同，然后用户上拉加载对应那一页的内容
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabControlShow: false,
      saveY: 0,
    };
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //保存坐标Y值
    this.saveY = this.$refs.scroll.getCurrentY();

    //取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.ItemImgListener);
  },

  //网页创建时立即axios请求获取网页所需的资源
  created() {
    //请求多个数据
    this.getHomeMultiData();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
  },
  computed: {
    showGooods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     *事件监听相关
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    contentScroll(position) {
      //判断BackTop是否显示
      this.isShowBackTop = position.y < -1000;
      //判断tabControl是否吸顶（position：fixed）
      this.isTabControlShow = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
    },
    swiperImgLoad() {
      //获取tabControl的offsetTop（相对于父元素的垂直偏移量）
      //所有的组件都有一个属性 $el :用于获取组件的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求相关
     */
    getHomeMultiData() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多，以便再次调用
        this.$refs.scroll.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100%;
}

.home-nav {
  background-color: var(--color-lightblue);
  color: #fff;
  border: 0;
}

#home .content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.tab-control {
  position: relative;
  background-color: #fff;
  z-index: 10000;
}
</style>
