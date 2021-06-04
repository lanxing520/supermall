<template>
  <tab-bar>   <!--调用TabBar里的匿名插槽-->
    <tab-bar-item path="/home" activeColor="lightskyblue">  <!--创建路径，好让TabBarItem内的props接受-->
      <template #item-icon>   <!--  #是v-slot:的缩写  -->
        <img src="~assets/img/tabbar/tabbarhome.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/tabbarhomeselect.svg" alt="">
      </template>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="lightskyblue">
      <template #item-icon>
        <img src="~assets/img/tabbar/tabbar-icon-chanpin-default.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/tabbar-icon-chanpin-selected.svg" alt="">
      </template>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="lightskyblue">
      <template #item-icon>
        <img src="~assets/img/tabbar/gouwuche.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/gouwuche_1.svg" alt="">
      </template>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="lightskyblue">
      <template #item-icon>
        <img src="~assets/img/tabbar/icontabbarmyup.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/tabbar-icon-wode-selected.svg" alt="">
      </template>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>




