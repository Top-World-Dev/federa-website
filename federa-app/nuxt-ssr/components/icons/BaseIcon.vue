<template>
  <img
      :src="(useHover ? isHover : active) ? hoverSrc2 : src2"
      :alt="alt"
      v-on:mouseenter="handleMouseEnter"
      v-on:mouseleave="handleMouseLeave"
  >
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    useHover: {
      type: Boolean,
      default: false
    },
    src: String,
    hoverSrc: [String, Object],
    alt: String,
  },
  methods: {
    handleMouseEnter() {
      if (this.useHover) {
        this.isHover = true;
      }
    },
    handleMouseLeave() {
      if (this.useHover) {
        this.isHover = false;
      }
    },
  },
  data() {
    let src2 = this.src;
    if (!this.src) {
      src2 = require('~/assets/images/ic_home_white.png?url');
    }

    return {
      isHover: false,
      hoverSrc2: this.hoverSrc || src2,
      src2,
    }
  }
}
</script>