<template>
  <div class="library">
    <Banner />

    <router-view></router-view>
    <div style="height: 100vh"></div>
    <div style="height: 100vh"></div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  components: {
    Banner,

  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/css/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
