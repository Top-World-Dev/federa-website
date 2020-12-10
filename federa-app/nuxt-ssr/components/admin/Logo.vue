<template>
  <div class="logo">
    <a href="/admin/report">
      <img :src="url" />
      <transition name="zoom-in-center">
        <h1 v-show="!collapse">Federa</h1>
      </transition>
    </a>
  </div>
</template>

<script>
import logo from '@/assets/images/logo_img.png'

export default {
  props: ['collapse'],
  data() {
    return {
      url: logo
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  overflow: hidden;
  line-height: 64px;
  background: #001529;
  cursor: pointer;
  transition: all 0.3s;

  img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }

  h1 {
    display: inline-block;
    margin: 0 0 0 12px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: -webkit-baseline-middle;
  }
}

.zoom-in-center-enter-active {
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

.zoom-in-center-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.zoom-in-center-enter,
.zoom-in-center-leave-active {
  opacity: 0;
  transform: scaleX(0);
}
</style>
