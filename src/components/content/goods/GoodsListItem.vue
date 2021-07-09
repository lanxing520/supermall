<template>
    <div class="goodsItem" @click="itemClick">
      <!-- Vue  @load=‘functionName’监听图片加载-->
      <img v-lazy="showImage" alt="" @load="imageLoad">
      <div class="goodsInfo">
        <p>{{goodsItem.title}}</p>
        <span class="price">价格：{{goodsItem.price}}</span>

        <span class="collect">
          <img src="~assets/img/common/collect.svg" alt="">
          {{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imageLoad(){
      // 事件总线 $bus.$emit发射事件  $bus.$on 监听事件
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail'+this.goodsItem.iid)
    },
  }
}
</script>

<style scoped>
.goodsItem {
  position: relative;
  width: 45vw ;
  height: 90vw;
  margin: 3vw 0;
}
.goodsItem img {
  width: 45vw;
  height: 70vw;
  border-radius: 3vw;
}
.goodsInfo {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20vw;
}
.goodsItem .goodsInfo p{
  width: 45vw;
  overflow: hidden;
  /*需要有带宽度，不能是%为单位，ellipsis才会生效*/
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2vw 0;
  font-size: 5vw;
}
.goodsInfo .price {
  color: var(--color-tint);
  font-size: 1.1rem;
}
.goodsInfo .collect {
  position: absolute;
  color: var(--color-lightblue);
  font-size: 1rem;
  right: .5rem;

}

.goodsInfo .collect img {
  padding-bottom: 0;
  width: 3vw;
  height: 3vw;
}
</style>
