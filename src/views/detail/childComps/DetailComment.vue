<template>
  <div class="comment-info" v-if="comment.count !== 0">
    <div class="top">
      用户评价
      <span>{{ comment.count }}</span>
      <div class="more"><a href="#">更多</a></div>
    </div>
    <v-card>
      <div v-if="Object.keys(comment).length !== 0">
        <div class="user">
          <img :src="comment.avatar" alt=""/>
          <span>{{ comment.user }}</span>
        </div>
        <div class="style">
          <span>{{comment.date | showDate }}</span>
          {{ comment.style }}
        </div>
        <div class="content">
          {{ comment.content }}
        </div>
        <div class="info-img">
          <img :src="item" v-for="(item,i) in comment.images" :key="i" alt="">
        </div>
        <div class="explain">
          {{ comment.explain }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import {dateFormat} from 'common/utils'

export default {
  name: "DetailComment",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
    showDate(value){
      //1.将时间戳转成Date对象
      const date = new Date(value * 1000);
      //2.将date进行格式化
      return  dateFormat(date, "YYYY-mm-dd")
    }
  }
};
</script>

<style scoped>
.comment-info {
  position: relative;
  margin: 1rem 0.5rem;
}

.more {
  position: absolute;
  right: 0;
  top: 0;
}

.top {
  font-size: 1.5rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid grey;
}

.top span {
  font-size: 1rem;
  padding-left: 0.5rem;
}

.user {
  font-size: 1.2rem;
  line-height: 2rem;
  height: 2rem;
  vertical-align: middle;
  margin-bottom: 0.5rem;
}

.user img {
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
}

.style {
  font-size: 0.9rem;
  color: grey;
  line-height: 2rem;
}
.style span {
  margin-right: .5rem;
}
.info-img img {
  width: 20vw;
  height: 20vw;
  margin-right:.5rem;
  margin-top: .5rem;
}
.explain {
  font-size: 0.9rem;
  margin: 0.5rem 0;
  color: grey;
}
</style>
