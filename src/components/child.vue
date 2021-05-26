<template>
  <div>
    <h2 :style="blueColor">我是儿子</h2>
    <p>
      <input v-model="message">
    </p>
    <p>{{ this.message }}</p>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ['message'],
  data() {
    return {
      selected: '',
    }
  }
}
</script>

<style scoped>

</style>