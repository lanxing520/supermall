<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // }
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='', duration='2000') {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .8);
  color: #f2f5f8;
  padding: 10px;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 1rem;
}
</style>