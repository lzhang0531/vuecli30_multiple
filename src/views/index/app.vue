<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Button type="primary" @click="btn">跳</Button>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    btn() {
      location.assign("../more.html");
    }
  }
};
</script>

<style lang="less">
</style>
