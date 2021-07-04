<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    isShow: {
      type: Boolean,
      default() {
        return false;
      }
    },
    message: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>