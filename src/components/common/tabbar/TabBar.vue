<template>
  <div id="tab-bar">
    <slot></slot>      <!--匿名插槽-->
  </div>
</template>


<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    box-shadow: 0 -2px 1px rgba(0,255,255,.2);
    z-index: 8;
  }
</style>
