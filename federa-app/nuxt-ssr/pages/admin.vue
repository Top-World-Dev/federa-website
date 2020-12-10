<template>
  <div>
    <section class="layout" v-if="$route.fullPath !== '/admin/login'">
      <aside class="layout-aside aside-fixed" :class="{'aside-collapse': collapseAside}">
        <logo :collapse="collapseAside"></logo>
        <AsideMenu :collapse="collapseAside"></AsideMenu>
      </aside>

      <section class="layout layout-main" :style="{paddingLeft: collapseAside? '80px' : '256px'}">
        <div class="layout-header flex justify-between items-center text-gray-600">
          <div class="flex justify-start items-center">
            <div class="collapse-btn" @click="()=>this.collapseAside = !this.collapseAside">
              <i class="el-icon-s-fold"></i>
            </div>
          </div>
          <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
          <HeaderProfile></HeaderProfile>
        </div>
        <div class="relative" ref="mainBox">
          <nuxt-child v-if="isRouterAlive"></nuxt-child>
        </div>
      </section>
      <el-backtop></el-backtop>
    </section>
    <nuxt-child v-else />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { logo, AsideMenu, HeaderProfile } from '@/components/admin'

export default {
  components: {
    logo,
    AsideMenu,
    HeaderProfile,
    Breadcrumb
  },
  data() {
    return {
      isRouterAlive: true,
      collapseAside: false
    }
  },
  provide() {
    return {
      reloadPage: this.reloadPage
    }
  },
  created() {},
  mounted() {},
  methods: {
    reloadPage() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex: auto;
  min-height: 0;
  background: #f0f2f5;
  box-sizing: border-box;
  flex-direction: row;

  .layout-aside {
    width: 256px;
    background: #3c4b64;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);

    &.aside-collapse {
      flex: 0 0 80px;
      width: 80px;
    }

    &.aside-fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      min-height: 100vh;
    }
  }
}

.layout-main {
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  width: calc(100vh - 256px);
}

.layout-header {
  width: 100%;
  height: 64px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .items-center {
    display: inline-block;
  }
}

.relative {
  padding: 20px;
  height: calc(100vh - 64px);
}

.collapse-btn {
  font-size: 24px;
  padding-left: 20px;
  height: 64px;
  display: flex;
  align-items: center;
}

.logo {
  padding: 0 10px;
  background: #00001533;

  img {
    width: 40px;
  }
}
</style> 