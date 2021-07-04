<template>
  <v-carousel
    cycle
    height="40vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item class="carousel-item"
      v-for="(item,i) in banners"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <a href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false,
    }
  },
  props: {
    //获取来自Home首页的banners数据
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      // 这里加if取反后再赋值取反让事件只发射了一次
      if(!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }

    }
  }
}
</script>

<style scoped>
.carousel-item img {
  width: 100%;
  height: 100%;
}
</style>
