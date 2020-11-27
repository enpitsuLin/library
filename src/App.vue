<template>
  <div>
    <Header />
    <router-view></router-view>
    <div style="height:100vh"></div>
    <div style="height:100vh"></div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  methods: {

  },
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
</style>
