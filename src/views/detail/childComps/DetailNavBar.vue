<template>
  <div id="detail-nav-bar">
    <nav-bar class="nav-bar">
      <template #left >
        <div @click="backClick">
          <img src="~assets/img/common/back.svg"
               class="back-img" alt="">
        </div>

      </template>
      <template #center class="title">
        <div v-for="(item,index) in titles"
             :key="index" class="title-item"
             :class="{active:currentIndex===index}"
             @click="titleClick(index)"
        >
          <span>{{ item }}</span>
        </div>
      </template>
      <!--      <template #right>-->

      <!--      </template>-->
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {

  /*display: flex;*/
}

.back-img {
  padding-top: .5rem;
}

.title-item {
  /*flex: 1;*/
  float: left;
  width: 15vw;
}

.active {
  color: var(--color-lightblue);
}
</style>