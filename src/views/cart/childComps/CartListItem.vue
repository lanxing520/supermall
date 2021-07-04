<template>

  <div class="list-item">
    <v-card>
      <div class="item-selector">
        <check-button :is-checked="item.checked" @click.native="checkClick"/>
      </div>
      <div class="item-img">
        <img :src="item.image" alt="">
      </div>
      <div class="item-info">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="price">￥{{ item.price }}</div>
        <div class="count">x{{ item.count }}</div>
      </div>
    </v-card>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    checkClick(){
      this.item.checked = !this.item.checked;
    }
  }
}
</script>

<style scoped>
.list-item {
  position: relative;
  padding: 2vw;
}
.item-selector {
  position: absolute;
  left: 0;
  top:14vw;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
}
.item-img img {
  position: relative;
  top: 1vw;
  left: 25px;
  width: 30vw;
  height: 32vw;
}

.item-info {
  position: absolute;
  right: 0;
  top: 2vw;
  height: 32vw;
}

.title,
.desc {
  width: 60vw;
  overflow: hidden;
  /*需要有带宽度，不能是%为单位，ellipsis才会生效*/
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2vw;
  font-size: 1rem;
  padding-left: 1vw;
}

.price {
  position: absolute;
  font-size: 2rem;
  color: var(--color-tint);
  bottom: 0;
  left: 0;
}

.count {
  position: absolute;
  bottom: 1vw;
  right: 2vw;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  border: 1px solid grey;
  border-radius: 1rem;
  font-size: 1.5rem;
}
</style>