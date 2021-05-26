<template>
  <div id="app">
    <h1 :class="{red:isActive}">我是老大</h1>
    <button @click="decrement">-</button>
    {{num}}
    <button @click="increment">+</button>
    <child></child>
  </div>
</template>

<script>
import child from "./components/child";

export default {
  name: 'App',
  components: {
    child,
  },
  data() {
    return {
      isActive: true,
      num: 0,
      message:'我想吃火锅',
    }
  },
  methods: {
    increment() {
      this.num++
    },
    decrement() {
      this.num--
    }
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  padding: 10px 40vw;
}
.red {
  color: red
}
</style>
