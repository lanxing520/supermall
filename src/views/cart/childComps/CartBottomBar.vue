<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" @click.native="checkClick" :isChecked="isSelected"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{ totalPrice }}
    </div>
    <div class="calculate" @click="calcClick">
      去结算({{ checkLength }})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((previousValue, item) => {
        return previousValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    //全选按钮
    isSelected() {
      if (this.cartList.length === 0) return false
      //filter过滤法
      return !this.cartList.filter(item => !item.checked).length
      //find方法
      // return !this.cartList.find(item => !item.checked)
    },
  },
  methods: {
    checkClick() {
      if (this.isSelected) {  //全部选中
        this.cartList.forEach(item => item.checked = false)
      } else {  //部位选中 或者 全没选中
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelected) {
        this.$toast.show('请选择需要购买的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  background-color: lightgray;
  line-height: 40px;
}

.check-content {
  display: flex;
}

.check-button {
  margin: 6px;
}

selected {
  background-color: red;
}

.price {
  margin-left: 18vw;
}

.calculate {
  position: absolute;
  right: 0;
  background-color: red;
  color: #fff;
  width: 25vw;
  text-align: center;
}
</style>