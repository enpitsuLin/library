<template>
  <!-- 可展开、响应式的导航栏 -->
  <nav class="nav">
    <div class="navigation">
      <!-- 导航栏块 -->
      <section class="megamenu">
        <!-- 搜索展开块 -->
        <search-button />
        <!-- 导航内容 -->
        <div class="megamenu">
          <div class="nav-collapse">
            <!-- 详细导航 带下拉 -->
            <ul class="megamenu-nav">
              <router-link
                v-for="item in menus"
                :key="item.name"
                :to="item.path"
                v-slot="{ href, route }"
              >
                <li>
                  <span>{{ route.meta.name }}</span>
                  <div class="mega-dropdown">
                    <div class="mega-dropdown-inner"></div>
                    <a :href="href"></a>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </nav>
</template>

<script>
import NavItem from "./NavItem";
import SearchButton from "./SearchButton";
import { routerMap } from "@/router/setting";

export default {
  name: "Navigation",
  components: {
    SearchButton,
    NavItem,
  },
  data() {
    return {
      menus: [],
    };
  },
  methods: {},
  created() {
    this.menus = routerMap;
  },
};
</script>

<style lang="scss">
.nav {
  position: relative;
  background-color: #fff;
  .navigation {
    .megamenu {
      //flex布局
      display: flex;
      flex-direction: row;
      height: 60px;
      //搜索按钮
      .megamenu {
        .nav-collapse {
          .megamenu-nav {
            margin: 0;
            padding: 0 11px;
            li {
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
              .mega-dropdown {
                height: 90px;
                position: absolute;
                top: auto;
                left: 0;
                z-index: 1000;
                display: none;
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
              &:hover {
                background-color: #f0f0f0;
                cursor: pointer;
                .mega-dropdown {
                  display: block;
                }
              }
              &:first-child span {
                border-left: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
