import { request } from "./request";

export function getHomeData() {
  return request({
    url: "/home/multidata",
    type: "post"
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
