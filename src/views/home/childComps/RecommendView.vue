<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  margin: 20px 0;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 18vw;
  height: 18vw;
  margin-bottom: 20px;
}
</style>
