<template>
  <v-app id="app">
    <v-main>
        <keep-alive exclude="Detail">   <!--Detail组件不要缓存-->
          <router-view/>
        </keep-alive>
        <MainTabbar/>
    </v-main>
  </v-app>
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
