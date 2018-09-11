<template>
  <div class="hello">
      <h1 @click="btn">插槽</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  props: {
    msg: String
  },
  methods: {
    btn() {
      this.list.forEach(item => {
        console.log(item);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
