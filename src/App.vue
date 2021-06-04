<template>
  <div id="app">
    <router-view/>
    <MainTabbar/>
  </div>
</template>

<script>
import MainTabbar from "./components/content/mainTabbar/MainTabbar";

export default {
  name: 'App',
  components: {
    MainTabbar,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
@import "./assets/css/base.css";
</style>
