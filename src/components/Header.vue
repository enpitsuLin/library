<template>
  <div>
    <button type="button" id="mobile-nav-toggle">
      <i class="fa fa-bars">
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </i>
    </button>
    <header
      id="header"
      :class="['header-transparent', scrollTop > 100 && 'header-fixed']"
    >
      <div class="container">
        <div id="logo" class="pull-left">
          <a href="#">NBBFU lib</a>
        </div>
        <nav
          :class="[!isMobile && 'nav-menu-container', isMobile && 'mobile-nav']"
          :style="isMobile && collapsed && 'left:0'"
        >
          <ul :class="[!isMobile && 'nav-menu']">
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
    <a href="#" v-on:click="toTop" class="back-to-top" v-show="scrollTop > 250">
      <i class="fa fa-chevron-up">
        <font-awesome-icon icon="chevron-up"></font-awesome-icon>
      </i>
    </a>
  </div>
</template>

<script>
import { routerMap } from "../router/setting";

export default {
  data() {
    return {
      collapsed: false,
      scrollTop: 0,
      menus: [],
    };
  },
  methods: {
    toTop() {
      console.log("111");
    },
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
  created() {
    this.menus = routerMap;
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    });
  },
};
</script>

<style>
</style>
