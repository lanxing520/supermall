<template>
  <v-carousel
    cycle
    height="45vh"
    hide-delimiter-background
    show-arrows-on-hover
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item,i) in topImage"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <img :src="item" alt="">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    topImage: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>