import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    //这个地方img标签确实被挂载，但是其中的图片还没有占据高度

    //debounce 防抖函数
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    //对监听的事件进行保存
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
};
