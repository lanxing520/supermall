<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>1列表</li>
      <li>2列表</li>
      <li>3列表</li>
      <li>4列表</li>
      <li>5列表</li>
      <li>6列表</li>
      <li>7列表</li>
      <li>8列表</li>
      <li>9列表</li>
      <li>10列表</li>
      <li>11列表</li>
      <li>12列表</li>
      <li>13列表</li>
      <li>14列表</li>
      <li>15列表</li>
      <li>16列表</li>
      <li>17列表</li>
      <li>18列表</li>
      <li>19列表</li>
      <li>20列表</li>
      <li>21列表</li>
      <li>22列表</li>
      <li>23列表</li>
      <li>24列表</li>
      <li>25列表</li>
      <li>26列表</li>
      <li>27列表</li>
      <li>28列表</li>
      <li>29列表</li>
      <li>30列表</li>
      <li>31列表</li>
      <li>32列表</li>
      <li>33列表</li>
      <li>34列表</li>
      <li>35列表</li>
      <li>36列表</li>
      <li>37列表</li>
      <li>38列表</li>
      <li>39列表</li>
      <li>40列表</li>
      <li>41列表</li>
      <li>42列表</li>
      <li>43列表</li>
      <li>44列表</li>
      <li>45列表</li>
      <li>46列表</li>
      <li>47列表</li>
      <li>48列表</li>
      <li>49列表</li>
      <li>50列表</li>
    </ul>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import {backTopMixin} from "common/mixin";

export default {
  name: "Category",
  components:{

  },
  mixins:[backTopMixin],
  mounted() {
  }
}
</script>

<style scoped>
.wrapper {
  height: 80vw;
  background-color: cadetblue;
  overflow-y: scroll;
}
</style>
