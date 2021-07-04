<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {
      d: 1
    };
  },
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  bottom: -2px;
  height: 3.6rem;
  background-color: #f2f5f8;
  z-index: 999;
}
.bar-item{

}
.bar-item div {
  justify-content: space-between;
  display: inline-block;
  height: 3.6rem;
  text-align: center;
}
.bar-left {
  width: 40vw;
  font-size: 4vw;
}
.bar-left div {
  width: 13vw;
  padding:0 2vw;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 21px;
  margin: 2vw auto 1vw;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service{
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right{
  font-size: 1.1rem;
  width: 60vw;
  line-height: 3.6rem;
  color: #f6f6f6;
}
.bar-right .cart,
.bar-right .buy {
  height: 3.6rem;
  width: 25vw;
  border-radius: 2rem;
}
.bar-right .cart{
  background-color: red;
  margin-right: 2vw;
}
.bar-right .buy {
  position: absolute;
  right: 5vw;
  top: 0;
  background-color: var(--color-lightblue);
}
</style>
