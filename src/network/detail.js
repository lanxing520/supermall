import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: { iid }
  });
}

export function getRecommend() {
  return request({
    url: "/recommend"
  });
}

//获取商品信息，整合数据到一个对象
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}
//获取商品参数信息
export class GoodsParam {
  constructor(info, rule) {
    //image 可能有也可能没有
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

//获取店铺信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.cells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
//获取用户评论信息
export class Comment {
  constructor(rate) {
    this.count = rate.cRate;
    if (rate.cRate > 0) {
      this.avatar = rate.list[0].user.avatar;
      this.user = rate.list[0].user.uname;
      this.content = rate.list[0].content;
      this.explain = rate.list[0].explain;
      this.style = rate.list[0].style;
      this.images = rate.list[0].images;
      this.date = rate.list[0].created;
    }
  }
}
