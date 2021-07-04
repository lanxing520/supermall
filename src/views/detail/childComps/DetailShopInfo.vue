<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells}}
          </div>
          <div class="sells-text">
            <div class="goods-count">
              总销量:{{ shop.goodsCount }}
            </div>
          </div>
        </div>
        <div class="info-goods">
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,i) in shop.score" :key="i">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{ item.score.toFixed(1) }}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.shop-info {
  position: relative;
  width: 100vw;
  height: 18vh;
  margin: 2rem 0;
}

.shop-top {
  height: 2rem;
}

.shop-top img {
  position: absolute;
  top: 0;
  left: 0;
  width: 20vw;
  height: 20vw;
}

.shop-top .title {
  position: absolute;
  top: 0;
  left: 25vw;
  font-size: 1rem;
}

.shop-middle .info-sells .sells-text{
  position: absolute;
  left: 25vw;
  top:10vw  ;
}

.shop-middle-right {
  position: absolute;
  right: 3vw;
  top: 0;
}
.shop-middle-right span{
  padding-left: 1rem;
}
.score-better,
.better-more {
  color: #ff5777;
}

.goods-text,
.enter-shop {
  width: 7rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 1rem;
  text-align: center;
  color: orangered;
  border: 1px solid;
}

.goods-text {
  position: absolute;
  top: 22vw;
  left: 15vw;
}

.enter-shop {
  position: absolute;
  right: 15vw;
  top: 22vw;
}

</style>