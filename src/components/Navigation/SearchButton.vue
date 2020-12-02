<template>
  <a class="search-button" v-on:click="collapse = !collapse">
    <p class="content">
      <i :class="['fa fa-search']" />
      <span> 搜索图书馆资源 </span>
      <!-- <i :class="['fa fa-angle-down', collapse ? 'up' : '']" /> -->
      <img
        :class="['angle-down', collapse ? 'up' : '']"
        src="@/assets/img/custom-global-top-search-arrow.png"
      />
    </p>
    <div class="search-panel" v-show="collapse"></div>
  </a>
</template>

<script>
export default {
  name: "SearchButton",
  data() {
    return {
      collapse: false,
    };
  },
};
</script>

<style lang="scss">
.up {
  transform: rotate(180deg);
}
@keyframes arrow-jump-bottom {
  0% {
    padding-top: 0px;
  }
  10% {
    padding-top: 5px;
  }
  20% {
    padding-top: 0px;
  }
  30% {
    padding-top: 5px;
  }
  40% {
    padding-top: 0px;
  }
  100% {
    padding-top: 0px;
  }
}
.search-button {
  border: none;
  font-size: 16px;
  text-align: center;
  padding: 17px 0;
  display: inline-block;
  color: #fff;
  background: -webkit-linear-gradient(left, #e3191e, #ba0004);
  background: -o-linear-gradient(right, #e3191e, #ba0004);
  background: -moz-linear-gradient(right, #e3191e, #ba0004);
  background: linear-gradient(to right, #e3191e, #ba0004);
  &:hover {
    color: #fff;
  }
  cursor: pointer;
  .content {
    margin: 0;
    height: 30px;
    .fa-search {
      margin-right: 17%;
    }
    .angle-down {
      margin-left: 17%;
      animation: arrow-jump-bottom 2s infinite;
    }
  }
  @media (max-width: 959px) {
    position: relative;
  }
  @media screen and (min-width: 1200px) {
    width: 316px;
  }
  @media screen and (max-width: 1199px) and (min-width: 992px) {
    width: 270px;
  }
  .search-panel {
    height: 90px;
    position: absolute;
    margin-top: 13px;
    top: auto;
    left: 0;
    z-index: 1000;
    background: #f0f0f0;
    padding: 30px 20px 30px 40px;
    width: 100%;
    float: left;
    min-width: 160px;
    background-color: #fff;
    *border-right-width: 2px;
    *border-bottom-width: 2px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background-clip: padding-box;
  }
}
</style>
