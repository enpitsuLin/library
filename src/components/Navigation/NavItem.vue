<template>
  <div @mouseover="hover = true" @mouseout="hover = false" class="navitem">
    <span>{{ title }}</span>
    <div class="mega-dropdown">
      <a></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    title: String,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="scss">
.navitem {
  color: #000;
  list-style: none;
  margin-left: 0;
  display: inline-block;
  span {
    border-left: 1px #f0f0f0 solid;
    padding: 0 29px;
    display: inline-block;
    height: 16px;
    margin: 22px 0;
    line-height: 16px;
  }
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  &:first-child span {
    border-left: none;
  }
}
</style>
