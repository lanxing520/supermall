<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
         <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 提交事件给外部父组件，请求切换数据
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  font-size: 1.2rem;
  padding-bottom: 5px;
  text-align: center;
}

.tab-control-item {
  width: 3rem;
}

.active {
  color: var(--color-lightblue);
  border-bottom: 3px solid var(--color-lightblue);
}
</style>
