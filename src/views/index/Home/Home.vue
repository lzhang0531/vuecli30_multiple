<template>
  <div>
    <Button type="primary" @click="btn">跳</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    btn() {
      location.assign("../more.html");
    }
  },
  mounted() {
    console.log(this.$http);
  }
};
</script>

<style lang="less">
</style>
