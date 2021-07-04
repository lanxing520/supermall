<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 2vw;
  bottom: 15vw;
  z-index: 1000;
}
img {
  width: 15vw;
  height: 15vw;
}

</style>
