<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物车({{length}})</div>
      </template>
    </nav-bar>
    <!--商品的列表-->
    <scroll class="content" ref="scroll">
    <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from  'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  data(){
    return{
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  computed:{
    // 使用对象展开运算符将 getter 混入 computed 对象中,将getters内的方法转成计算属性
    // ...mapGetters(['cartLength','cartList'])
    //对getters里面的方法重命名使用 对象 形式映射过去
    ...mapGetters({
      length:'cartLength'
    })
  }
};
</script>

<style scoped>
.cart {
  position: relative;
  height: 100vh;
}
.nav-bar {
  position: relative;
  background-color: var(--color-lightblue);
  color: #fff;
  font-size: 1.2rem;
  z-index: 9;
}
.content {
  height: calc(100% - 44px - 49px - 40px)
}
div img {
  height: 100%;
  width: 100%;
}
</style>
