<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <!--定义插槽-->
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <!--定义插槽-->
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <!--定义插槽-->
      <slot name="item-text"></slot>
    </div>
    <!--动态绑定类 还是需要  v-bind:-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,   //接收App内path传来的数据
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {//$router是全局的路由对象，而$route是当前活动的组件对象
      //$router一般用来调用路由方法，如push。
      //$route一般用来获取路由的属性，如params/query/path
      return this.$route.path.indexOf(this.path) !== -1
      //返回处于活跃的path
    },//route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，
    // 可以获取对应的name,path,params,query等
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      //点击切换路由，本质是向history栈中添加一个路由
      return this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 23px;
  height: 23px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: center;
}

.active {
  color: lightskyblue;
}
</style>
