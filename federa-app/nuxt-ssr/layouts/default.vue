<template>
    <div style="position: relative" v-if="$route.fullPath.indexOf('admin') === -1">
      <AppNavbar ref="topBar" />
      <div class="app-content" :style="'padding-top: ' + topBarHeight +'px'">
        <div :class="['/'].indexOf($route.path) !== -1 ? 'backimg-' + backImgList[(date.getDate() + backImgList.length) % backImgList.length] + ' background-default' : ''">
          <nuxt />
        </div>
      </div>
      <AppFooter />
    </div>
    <div v-else>
      <nuxt />
    </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

export default {
  head() {
    const title =
      this.$route.fullPath.indexOf('admin') === -1
        ? 'List your home for a $1000 Fee | Federa'
        : 'Federa Dashboard'
    const description =
      'Federa, a full-service real estate brokerage will list your home for a $1000 Flat Fee with a dedicated and experienced real estate professional.'
    return {
      title: title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'place' },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://federa.com${this.$route.path}`
        },
        { hid: 'og:site_name', property: 'og:site_name', content: `federa.com` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://federa.com/default-og.png'
        },
        { hid: 'og:image:alt', property: 'og:image:alt', content: `${title}` },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: `${title} | Federa` },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://federa.com/default-og.png' },
        { hid: 'description', name: 'description', content: description }
      ]
    }
  },
  data() {
    return {
      bgWhite: 'bg-white',
      bgTransition: 'bg-transition',
      countDown: 24 * 60 * 60,
      backImgList: ['one', 'two', 'three', 'four'],
      activeIndex: 0,
      date: new Date(),
      topBarHeight: 0
    }
  },
  components: {
    AppNavbar,
    AppFooter
  },
  mounted() {
    if (process.browser) {
      this.$gtag('config', 'GTM-TV4QTVK', {
        page_path: this.$route.fullPath
      })
      // this.topBarHeight = this.$refs.topBar.clientHeight + 5
    }
  }
}
</script>

<style>
@font-face {
  font-family: SFUIText-Bold;

  src: url("../assets/font/SFUIText-Bold.ttf");
}
@font-face {
  font-family: SFUIText-Regular;

  src: url("../assets/font/SFUIText-Regular.ttf");
}
@font-face {
  font-family: SFUIText-Semibold;

  src: url("../assets/font/SFUIText-Semibold.ttf");
}
</style>
<style lang="scss" scoped>
html {
  box-sizing: border-box;
  font-family: SFUIText-Regular;
  font-size: 16px;
  word-spacing: 1px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  overflow: auto !important;
}
.background-default {
  /* Image is centered vertically and horizontally at all times */
  background-position: center center;

  /* Image doesn't repeat */
  background-repeat: no-repeat;

  /* Makes the image fixed in the viewport so that it doesn't move when
     the content height is greater than the image height */
  background-attachment: fixed;

  /* This is what makes the background image rescale based on its container's size */
  background-size: cover;

  /* Pick a solid background color that will be displayed while the background image is loading */
  background-color: #464646;

  /* SHORTHAND CSS NOTATION
   * background: url(background-photo.jpg) center center cover no-repeat fixed;
   */
}
.backimg-one {
  /* Location of the image */
  background-image: url(../assets/bg/bg1.png);
}
.backimg-two {
  /* Location of the image */
  background-image: url(../assets/bg/bg2.png);
}
.backimg-three {
  /* Location of the image */
  background-image: url(../assets/bg/bg3.png);
}
.backimg-four {
  /* Location of the image */
  background-image: url(../assets/bg/bg4.png);
}

.backimg-one, .backimg-two, .backimg-three, .backimg-four{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: local;
  position: absolute;
  width: 100%;
  height: 100%;
  //   @media (max-width: 375px) {
  //    background-size: 100% 59%;
  // }
}
</style>

<style lang="less">
a {
  text-decoration: none;
}
.app-content {
  min-height: 70vh;
  position: relative;
  @media (max-width: 1024px) {
    min-height: 50vh !important;
  }
  @media (max-width: 660px) {
    min-height: 40vh !important;
  }
  @media (max-width: 450px) {
    min-height: 50vh !important;
  }
  @media (max-width: 415px) {
    min-height: 45vh !important;
  }
  @media (max-width: 375px) {
    min-height: 40vh !important;
  }
  @media (max-width: 360px) {
    min-height: 50vh !important;
  }
}
.bg-black {
  background: rgb(30, 30, 30);
}
.bg-white {
  background: white;
}
</style>

<style lang="scss">
#zsiqbtn {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>

<style lang="scss">
.el-collapse-item {
  color: white;
  &__header {
    padding: 20px 20px 20px 20px;
    color: #868585;
    font-family: SFUIText-Bold, Sans-serif;
    font-size: 20px;
    line-height: 1.3em;
    background-color: #fff;
    border-color: rgba(255, 255, 255, 0.23);
    border-width: 1px;
    height: auto;
  }
  &__content {
    padding: 16px 30px 16px 20px;
    color: #868585;
    font-family: SFUIText-Regular, Sans-serif;
    font-size: 15px;
    line-height: 1.5em;
    border-bottom-color: rgba(255, 255, 255, 0.23);
    border-width: 1px;
  }
}
@media only screen and (max-width: 767px) {
  .page-content {
    margin: 0;
    &__title {
      font-size: 36px;
      text-align: center;
    }
    .page-item {
      padding: 0;
    }
  }
  .el-collapse-item {
    &__header {
      padding: 20px 20px 20px 20px;
      font-size: 14px;
    }
    &__content {
      padding: 16px 30px 16px 20px;
      font-size: 14px;
    }
  }
}
</style>

<style lang="scss">
.el-col-12 {
  @media(max-width: 660px) {
    width: 100%;
  }
}
.el-form {
  .el-form-item {
    margin-bottom: 14px;
    padding-right: calc(10px / 2);
    padding-left: calc(10px / 2);
    .el-textarea {
      &__inner {
        background-color: #fff;
        border-color: #042647;
        border-width: 2px 2px 2px 2px;
        border-radius: 0 0 0 0;
        padding: 6px 16px;
      }
    }
    .el-button {
      background-color: #111111;
      color: white;
      font-family: 'Cabin', Sans-serif;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0.4px;
      border-radius: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
      min-height: 47px;
      width: 100%;
      border: none;
    }
    .el-button:hover {
      background-color: #0c71c3;
      color: #fff;
    }
  }
}
.el-form-item::after,
.el-form-item::before {
  display: none;
  content: none;
}
</style>
