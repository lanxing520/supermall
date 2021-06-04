<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center class="home-slot">
        购物街
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>


  </div>

</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import {getHomeData} from 'network/home.js'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  //网页创建时立即axios请求获取网页所需的资源
  created() {
    getHomeData().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-lightblue);
  color: #fff;
}

</style>
