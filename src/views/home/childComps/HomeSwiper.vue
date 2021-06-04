<template>
  <div class="block">
    <el-carousel height="250px" interval="4000">
      <el-carousel-item v-for="item in banners" :key="item">
        <a href="item.link">
          <img :src="item.image" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.block img{
  width: 100%;
  height: 100%;
}
</style>
