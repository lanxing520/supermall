<template>
  <div class="check-button">
    <img
      :class="{check:isChecked}"
      src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button img{
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check-button .check{
  border-color: red;
  background-color: red;
}
</style>