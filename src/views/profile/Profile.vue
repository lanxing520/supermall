<template>
  <div class="profile">
    <div>
      <img src="~assets/img/profile/avatar.svg" alt="">
      <div class="user">点击登录</div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>


export default {
  name: "Profile",
  components: {}
};
</script>

<style scoped>
.profile {
  display: flex;
  background-color: var(--color-lightblue);
  width: 100%;
  height: 20vw;
}

.profile img {
  width: 20vw;
  height: 20vw;
}

.profile .user {
  position: absolute;
  top: 0;
  left: 25vw;
  font-size: 1.5rem;
  height: 20vw;
  line-height: 20vw;
}
</style>
