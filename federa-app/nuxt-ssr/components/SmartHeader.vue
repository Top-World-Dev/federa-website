<template>
  <div>
    <header ref="headerBar">
      <div class="app-wrap" v-if="showAppBanner">
        <el-button
          type="text"
          icon="el-icon-close"
          style="font-size: 18px; color: #000"
          @click="handleAppBanner"
        />
        <div
          style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-left: 5px"
        >
          <div
            style="display: flex; justify-content: flex-start; align-items: center"
          >
            <el-image
              style="width: 50px; height: 50px; margin-right: 10px"
              :src="url"
              fit="fit"
            />
            <div style="line-height: 1.2">
              <div>
                <span
                  style="margin: 0; font-style: normal; font-family: SFUIText-Regular; font-size: 12px"
                >Federa</span
                >
              </div>
              <div>
                <span
                  v-for="(item, index) in 5"
                  :key="index"
                  style="color: rgb(255, 208, 75); font-size: 12px; margin-left: -1px"
                >
                  <i class="el-icon-star-on"></i>
                </span>
              </div>
            </div>
          </div>
          <el-link
            :underline="false"
            href="https://apps.apple.com/us/app/federa/id1511527856"
            target="_blank"
            class="el-button el-button--success el-button--medium"
            style="padding: 8px; color: white; font-style: normal; font-family: SFUIText-Regular; font-size: 12px"
            v-if="$device.isIos"
          >Download</el-link
          >
          <el-link
            :underline="false"
            href="https://play.google.com/store/apps/details?id=com.realty.federa"
            target="_blank"
            class="el-button el-button--success el-button--medium"
            v-if="$device.isAndroid"
            style="padding: 8px; color: white; font-style: normal; font-family: SFUIText-Regular; font-size: 12px"
          >
            Download
          </el-link>
        </div>
        <!-- <el-button type="success" size="medium" >Download</el-button> -->
      </div>
      <el-divider
        style="background-color: #7C7C7C"
        v-if="showAppBanner"
      ></el-divider>
      <div
        class="wrap"
        :style="
          showAppBanner === false ? 'padding-top: 15px' : 'padding-top: 0'
        "
      >
        <div
          id="hamburger_top"
          v-on:click="display_menu()"
          v-if="showAppBanner"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="hamburger" v-on:click="display_menu()" v-else>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nuxt-link to="/" class="logo-link">
          <img :src="logo" alt="logo" style="width: 120px; margin-top: 0" />
        </nuxt-link>
        <el-form
          :rules="rules"
          @submit.native.prevent="onSubmit"
          ref="searchForm"
          :model="searchForm"
          v-if="
            $route.path === '/search' ||
              $route.path.indexOf('/properties/') !== -1
          "
          style="margin-top: 5px; flex: 1; text-align: center"
        >
          <el-form-item props="searchKey" style="margin: 0; margin-top: 5px">
            <el-input
              v-model="searchForm.searchKey"
              placeholder="Search by address, city, zip code"
              v-on:keyup.13="onSubmit"
              class="search-input"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </el-form>
        <nav id="menu">
          <li class="menu-item smart-listing">
            <a
              href="/smartlistings"
              target="_blank"
            >
              Login
            </a>
          </li>
        </nav>
      </div>
    </header>
<!--    <div :style="'height: ' + headerBarHeight + 'px'"></div>-->
  </div>
</template>

<script>

import appIcon from 'assets/images/ic_launcher.png'
import logo from '../assets/images/federa-logo-blue.png'
import menuIcon from 'assets/images/menu.png'
export default {
  mounted() {
    if (process.client) {
      window.addEventListener('resize', function(event) {
        close_all_menu()
        document
          .getElementsByTagName('body')[0]
          .classList.remove('display_menu')
      })
      var last_scroll = 0

      window.onscroll = function() {
        if (!document.getElementById('loader')) {
          close_all_menu()
          var header = document.getElementsByTagName('header')[0]
          if (Math.abs(last_scroll - this.scrollY) <= 5) {
            console.log('scroll', this.scrollY)
            this.scrollY < last_scroll
              ? (this.headerBarHeight = '0')
              : (this.headerBarHeight = '-' + header.clientHeight + 'px')
            return this.scrollY < last_scroll
              ? (header.style.top = '0')
              : (header.style.top = '-' + header.clientHeight + 'px')
          }
          last_scroll = this.scrollY
        }
      }
      function close_all_menu() {
        var lis = document.getElementById('menu').getElementsByTagName('li')
        Array.from(lis).forEach(function(e) {
          e.style.marginTop = 0
        })
        var drop_menus = document.getElementsByClassName('drop_menu')
        Array.from(drop_menus).forEach(function(e) {
          e.classList.remove('display')
        })
      }
      document.addEventListener('click', this.documentClick)
    }
  },
  asyncData({ query }) {
    const { q } = query
    return {
      searchForm: {
        searchKey: q
      }
    }
  },
  created() {
    const { q } = this.$route.query
    this.searchForm = {
      searchKey: q
    }
    this.showAppBanner = this.$device.isMobile
  },
  data() {
    return {
      menuIcon,
      headerBarHeight: 75,
      url: appIcon,
      load: false,
      logo: logo,
      searchForm: {
        searchKey: ''
      },
      rules: {
        searchKey: {
          required: true,
          trigger: 'blur',
          message: ''
        }
      },
      showAppBanner: false
    }
  },
  destroyed() {
    // important to clean up!!
    if (process.client) {
      document.removeEventListener('click', this.documentClick)
    }
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log(to)
      const { path, query } = to
      if (path === '/search') {
        const { q } = query
        this.searchForm = {
          searchKey: q
        }
      }
    }
  },
  methods: {
    handleAppBanner() {
      this.showAppBanner = false
    },
    onSubmit() {
      const { searchKey } = this.searchForm
      if (searchKey !== null && searchKey !== '') {
        this.$router.push({
          path: '/search',
          query: { q: searchKey },
          force: true
        })
      }
    },
    documentClick(e) {
      let el = this.$refs.dropdownMenu
      let target = e.target
      if (el && el !== target && !el.contains(target)) {
        this.close_all_menu()
      }
    },
    close_all_menu() {
      var lis = document.getElementById('menu').getElementsByTagName('li')
      Array.from(lis).forEach(function(e) {
        e.style.marginTop = 0
      })
      var drop_menus = document.getElementsByClassName('drop_menu')
      Array.from(drop_menus).forEach(function(e) {
        e.classList.remove('display')
      })
    },
    display_menu: function() {
      var body = document.getElementsByTagName('body')[0]
      !body.classList.contains('display_menu')
        ? body.classList.add('display_menu')
        : body.classList.remove('display_menu')
    },
    display_drop_menu: function() {
      var drop_menu = event.target.parentElement.getElementsByClassName(
        'drop_menu'
      )[0]
      if (!drop_menu) return
      var drop_menus = document.getElementsByClassName('drop_menu')

      Array.from(drop_menus).forEach(function(e) {
        if (e != drop_menu) {
          e.classList.remove('display')
        }
      })
      var lis = document.getElementById('menu').getElementsByTagName('li')
      Array.from(lis).forEach(function(e) {
        e.style.marginTop = 0
      })
      !drop_menu.classList.contains('display')
        ? drop_menu.classList.add('display')
        : drop_menu.classList.remove('display')
      if (window.innerWidth < 660 && drop_menu.classList.contains('display')) {
        event.target.parentElement.nextSibling.nextSibling.style.marginTop =
          drop_menu.clientHeight + 'px'
      }
    },
    loaded: function() {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
      this.load = true
    }
  }
}
</script>

<style lang="less" scoped>
@cblue: #1989fa;
@cgrey: #3e3a37;
@cwhite: #fff;
@ccream: #fafbfc;
@cgrey_green: #435466;
@clightgrey: #dad9d7;

@body_height_8: calc((100vh - 113px) / 8);
@body_height_4: calc((100vh - 113px) / 4);
@body_height_75: calc((75vh - 113px) / 8);
.icon-arrow {
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
}
i {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 14px;
}
* {
  box-sizing: border-box;
}
body {
  overflow-x: hidden;

  // padding-top: 80px;
  background-color: @ccream;

  &.display_menu {
    overflow-y: hidden;
  }
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.wrap {
  min-width: 320px;
  max-width: 1024px;
  .logo-link {
    position: relative !important;
    bottom: 2px !important;

    img {
      margin: 0;
    }
  }
}
header .app-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  margin: 0 auto;
}
header .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2%;
  margin: 0 auto;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.wrap {
  min-width: 80%;
  max-width: 1024px;
}
header {
  // display: flex;
  // justify-content: center;
  width: 100%;
  padding: 5px 0;
  padding-top: 5px;
  font-family: SFUIText-Bold;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid #d8dce5;
  transition: 0.33s;
}
header img {
  width: 100px;
}
header #menu {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}
header .el-form .el-input {
  width: 50%;
}
header #menu li {
  position: relative;
  // margin-left: 20px;
  user-select: none;
  i {
    width: 12px;
    height: 12px;
    background-color: #fff;
  }
  a {
    color: #000;
    // font-size: 1.15em;
    background: none;
    border: none;
    transition: 0.15s;
    cursor: pointer;
    &:hover {
      color: @cblue;
      border-bottom-color: @cblue;
      i {
        background-color: @cblue;
      }
    }
  }
  a.blank {
    color: #000bff;
    font-weight: 700;
    background: linear-gradient(#fff, #fff 50%);
    border: 2px solid #000bff;
    border-radius: 0;
  }
  a.fill {
    padding: 13px 32px;
    color: #fff;
    font-weight: 700;
    background: linear-gradient(#1e5ef0, #0040d2 50%);
    border-radius: 0;
    box-shadow: 0 1px 3px rgba(1, 1, 1, 0.5);
  }
  .custom-menu button {
    background: #fff !important;
    color: #515151 !important;
    border: none;
    padding: 0px !important;
    margin: 0 74px 0px 0 !important;
    bottom: 2px !important;
  }
  .dropdown-menu {
    left: -79px !important;
    padding: 0px !important;
    text-align: center;
    font-size: 14px;
    border-radius: 2px;
    width: 192px;
    li.custom-link {
      border-bottom: 1px solid #c4c4c4;
      a {
        color: #505050 !important;
        margin: 0px;
      }
      &:hover {
        background: #dadada;
      }
    }
  }
  .dropdown-menu.show{
    top: 7px!important;
  }
  .menu-icon {
    width: 30px;
  }
}
header .el-divider {
  position: relative;
  height: 0;
  margin: 0;
  margin-bottom: 10px;
  background-color: #000;
}
header .drop_menu {
  position: absolute;
  top: 149%;
  display: block;
  width: 120px;
  padding-bottom: 10px;
  background-color: #000;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.25s;
  a {
    display: block;
    padding: 10px 0 0 0;
    margin-right: 15px;
    margin-left: 15px;
    transition: 0.45s;
    opacity: 0;
  }
}
.smart-listing {
  width: 9.0625rem;
  height: 2.8125rem;
  background: linear-gradient(#1e5ef0, #0040d2 50%);
  padding: 10px 10px 10px 13px;
  bottom: 9px;
  text-align: center;

  a {
    color: #fff !important;
    font-size: 0.9288rem;
  }
  &:hover {
    color: #fff;
    background: #3592ff;
  }
}
header .drop_menu.display {
  transform: scaleY(1);
  a {
    opacity: 1;
  }
}
header #hamburger_top {
  position: absolute;
  top: 6em;
  left: 3%;
  display: none;
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
header #hamburger {
  position: absolute;
  top: 25px;
  left: 3%;
  display: none;
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
header #hamburger span {
  display: block;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: @cgrey;
  transition: 0.33s;
  &:nth-child(1) {
    width: 12px;
  }
  &:nth-child(2) {
    width: 24px;
  }
  &:nth-child(3) {
    width: 12px;
  }
}
header #hamburger_top span {
  display: block;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: @cgrey;
  transition: 0.33s;
  &:nth-child(1) {
    width: 12px;
  }
  &:nth-child(2) {
    width: 24px;
  }
  &:nth-child(3) {
    width: 12px;
  }
}
.display_menu header #hamburger {
  span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 1px);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
  span:nth-child(3) {
    transform: rotate(45deg) translate(6px, -9px);
  }
}
.display_menu header #hamburger_top {
  span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 1px);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
  span:nth-child(3) {
    transform: rotate(45deg) translate(6px, -9px);
  }
}
#background {
  content: '';
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
  background-color: @cblue;
  h3 {
    margin: 0;
    margin-bottom: 1%;
    color: @cwhite;
    font-size: 1.5em;
    text-align: center;
    i {
      width: 13px;
      height: 20px;
      background-color: @cwhite;
    }
  }
  button {
    position: relative;
    left: 50%;
    padding: 5px 10px;
    color: @cwhite;
    font-size: 1.3em;
    background-color: @cgrey_green;
    border: none;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
.search-input {
  position: relative;
  bottom: 5px;
}
#loader {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  display: block;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
  animation: spin 1s infinite linear;
  span {
    position: absolute;
    top: 10;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-color: transparent;
    border-style: solid;
    border-width: 0 0 10px 10px;
    border-radius: 50%;
    &:nth-child(0) {
      border-left-color: @cblue;
    }
    &:nth-child(1) {
      border-left-color: @cblue;
      transform: rotate(-40deg);
    }
    &:nth-child(2) {
      border-left-color: @cblue;
      transform: rotate(-80deg);
    }
    &:nth-child(3) {
      border-left-color: @cgrey_green;
      transform: rotate(-130deg);
    }
    &:nth-child(4) {
      border-left-color: @cgrey_green;
      transform: rotate(-170deg);
    }
    &:nth-child(5) {
      border-left-color: @cgrey_green;
      transform: rotate(-210deg);
    }
    &:nth-child(6) {
      border-left-color: @cgrey;
      transform: rotate(-250deg);
    }
    &:nth-child(7) {
      border-left-color: @cgrey;
      transform: rotate(-280deg);
    }
    &:nth-child(8) {
      border-left-color: @cgrey;
      transform: rotate(-320deg);
    }
    &:nth-child(9) {
      border-left-color: @cblue;
      transform: rotate(-360deg);
    }
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
#overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: block;
  background-color: @cgrey;
  opacity: 0.5;
}
.dropdown-item {
  padding: 0.55rem 1.5rem;

}
@media screen and (max-width: 660px) {
  header .wrap {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  header img {
    width: 50px;
  }
  header #hamburger {
    display: block;
  }
  header #hamburger_top {
    display: block;
  }
  header .el-form .el-input {
    width: 100%;
    margin-top: 10px;
  }
  header #menu {
    display: block;
    flex-direction: column;
    width: 90%;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.33s ease;
  }
  .display_menu header #menu {
    height: max-content;
    li {
      display: block;
      height: @body_height_75;
      border-bottom: 1px solid @clightgrey;
      transition: 0.25s ease;
      opacity: 1;
    }
  }
  header #menu li a.fill,
  header #menu li a.blank {
    padding: 7px 32px;
    padding-top: 0;
    padding-bottom: 0;
  }
  header #menu li {
    height: 0;
    margin-left: 0;
    transition: 0.25s ease;
    opacity: 0;
    a {
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      padding-left: 20px;
      border: none;
      &:hover {
        color: @cwhite;
        background-color: @cblue;
        i {
          background-color: @cwhite;
        }
      }
    }
    i {
      position: absolute;
      top: 50%;
      right: 20px;
      background-color: @cgrey;
      transform: translateY(-50%);
    }
  }
  header .drop_menu {
    top: @body_height_8;
    left: 0;
    width: 100%;
    padding-bottom: 0;
    box-shadow: none;
    a {
      width: 100%;
      padding: 0 !important;
      padding-left: 40px !important;
      margin: 0;
      border-bottom: 1px solid @clightgrey !important;
    }
  }
}
@media screen and(max-width: 660px) and(max-height: 500px) {
  .display_menu header {
    overflow-y: scroll;
    max-height: 100vh;
  }
  .display_menu header #menu {
    li {
      height: @body_height_8;
    }
  }
  header #menu li {
    a {
      line-height: @body_height_4;
    }
  }
  header .drop_menu {
    top: @body_height_4;
  }
}
i {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
}
@media screen and (max-width: 375px) {
  .custom-menu {
    margin-top: 20px;
  }
  header #menu li .dropdown-menu {
    left: 0px !important;
    li.custom-link {
      font-size: 15px;
      a {
        padding: 0 15px 0 15px;
      }
    }
  }
  .smart-listing {
    margin: 0px;
    margin-top: 10px;
    height: 40px !important;
    a {
      font-size: 12px !important;
      margin: 0px;
    }
  }
}
</style>
