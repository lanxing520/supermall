<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <h4>{{ goods.title }}</h4>
    <div class="price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <span>
          <img :src="goods.services[index-1].icon" alt="">
          {{ goods.services[index - 1].name }}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  font-size: 1rem;
  line-height: 2rem;
  margin: 0 .5rem;
}

span {
  display: block;
}

.base-info .price {
  width: 100vw;
  height: 2rem;
  margin: 1rem 0;
}
.base-info .price span {
  float: left;
  padding-right: 1rem;
}

.base-info .price .n-price {
  font-size: 1.6rem;
  color: var(--color-tint);
}

.base-info .price .o-price {
  font-size: .5rem;
  text-decoration-line: line-through;
  color: grey;
}

.base-info .price .discount {
  width: 4rem;
  height: 1.5rem;
  padding: 0;
  text-align: center;
  vertical-align: center;
  line-height: 1.5rem;
  background-color: pink;
  color: #fff;
  border-radius: 5px;
}

.info-other {
  width: 100vw;
  height: 2rem;
  margin-bottom: 1rem;
}

.info-other span{
  float: left;
  width: 33.3vw;
}

.info-service {
  width: 100vw;
  height: 2rem;
}

.info-service .info-service-item span{
  float: left;
  width: 33vw;
  color: grey;
  font-size: .8rem;
}

.info-service-item img {
  float: left;
  width: 1rem;
  height: 1rem;
  padding-top: .1rem;
  margin-top: .4rem;;
}

</style>