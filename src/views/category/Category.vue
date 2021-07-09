<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <template #center>
        分类
      </template>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Category",
  components:{
    NavBar,
  },

}
</script>

<style scoped>
.category .nav-bar {
  background-color: var(--color-lightblue);
  color: #fff;
  border: 0;
  font-size: 1.2rem;
}
</style>
