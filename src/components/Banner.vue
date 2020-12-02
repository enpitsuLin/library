<template>
  <div id="banner">
    <Header />
    <Navigation />
  </div>
</template>

<script>
import Header from "./Header";
import Navigation from "@/components/Navigation/Navigation";
export default {
  name: "Banner",
  components: {
    Header,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "../css/themes.scss";
#banner {
  margin: 0 auto;
  @media (max-width: 959px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
}
</style>
