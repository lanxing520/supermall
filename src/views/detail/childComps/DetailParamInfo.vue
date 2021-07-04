<template>
  <v-card>
    <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
      <table v-for="(table,i) in paramInfo.sizes"
             class="info-size" :key="i">
        <tr v-for="(tr,i) in table" :key="i">
          <td v-for="(td,i) in tr" :key="i">{{td}}</td>
        </tr>
      </table>
      <table class="info-param">
        <tr v-for="(info, i) in paramInfo.infos" :key="i">
          <td class="info-param-key">{{info.key}}</td>
          <td class="param-value">{{info.value}}</td>
        </tr>
      </table>
      <div class="info-img" v-if="paramInfo.image.length !== 0">
        <img :src="paramInfo.image" alt="">
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.param-info {
  line-height: 2.5rem;
  margin-left: .5rem;
  padding-bottom: 1.5rem;
}

.info-size tr td {
  padding-right: 11vw;
}
.info-param-key {
  width: 5rem;
}
.param-value {
  color: var(--color-tint);
}
</style>