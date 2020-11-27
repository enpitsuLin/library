<template>
  <div>
    <button type="button" id="mobile-nav-toggle">
      <i class="fa fa-bars"></i>
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </button>
    <header id="header" class="header-transparent">
      <div class="container">
        <div id="logo" class="pull-left">
          <a href="#"></a>
        </div>
        <nav id="nav-menu-container" :class="isMoblie && 'isMoblie'">
          <ul class="nav-menu">
            <router-link
              v-for="item in menus"
              :key="item.name"
              :to="item.path"
              v-slot="{ href, route, isExactActive }"
            >
              <li :class="[isExactActive && 'menu-active']">
                <a :href="href">{{ route.meta.name }}</a>
              </li>
            </router-link>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import { routerMap } from "../router/setting";

export default {
  data() {
    return {
      menus: [],
    };
  },
  computed: {
    isMoblie() {
      return this.$store.state.isMoblie;
    },
  },
  created() {
    this.menus = routerMap;
  },
};
</script>

<style>
</style>
