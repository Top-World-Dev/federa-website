<template>
  <el-container style="height: 100vh;">
    <el-header height="76px">
      <img
        @click="isMobile = !isMobile"
        class="img-menu-humburger"
        style="width: 120px; height: auto; margin-left: 180px"
        src="~/assets/images/menu-humburger.png"
      />
      <div class="header">
        <img
          class="img-header"
          style="width: 120px; height: auto; margin-left: 180px"
          src="~/assets/images/federa-logo.png"
        />
      </div>
    </el-header>

    <el-container class="page-container">
      <div class="overlay" v-show="!isMobile" @click="isMobile = !isMobile"></div>

      <el-aside :class="{'el-side-open-mobile': !isMobile}" class="app-aside page-aside">
        <perfect-scrollbar>
          <el-menu
            :default-active="$route.path"
            :default-openeds="defaultOpens"
            @open="onClickMenu"
            @close="onClickMenu"
            @select="onClickMenu"
            ref="menu"
          >
            <el-menu-item class="sidebar-header" index="0-0">Smart Listings</el-menu-item>

            <el-menu-item-group v-for="(routes, index) in menuItems" :key="index">
              <template v-for="route in routes">
                <el-submenu
                  v-if="route.children && route.children.length > 0"
                  :index="route.url"
                  :key="route.url"
                >
                  <template slot="title">
                    <i class="fa fa-tachometer" aria-hidden="true"></i>
                    <font-awesome-icon v-if="route.icon" class="menu-icon" :icon="route.icon" />
                    <span class="text-bold">{{ route.label }}</span>
                  </template>
                  <el-menu-item
                    v-for="childRoute in route.children"
                    :index="childRoute.url"
                    :key="childRoute.url"
                    style="padding-left: 80px"
                    class="sidebar-menu-item"
                    :class="{'is-active': check(childRoute.url)}"
                  >{{ childRoute.label }}</el-menu-item>
                </el-submenu>

                <el-menu-item
                  v-if="!route.children || route.children.length == 0"
                  :index="route.url"
                  :key="route.url"
                >
                  <template slot="title">
                    <div class="menu-item">
                      <font-awesome-icon v-if="route.icon" class="menu-icon" :icon="route.icon" />
                      <span class="text-bold first-level-item">{{ route.label }}</span>
                    </div>
                  </template>
                </el-menu-item>
              </template>
            </el-menu-item-group>
          </el-menu>
        </perfect-scrollbar>
      </el-aside>

      <el-container class="page-section">
        <el-main class="el-main-custom">
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import BaseIcon from '@/components/icons/BaseIcon'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

const menuItems = [
  [
    {
      label: 'Home',
      icon: 'home',
      url: '/smartlistings/home',
      children: [
        {
          label: 'Seller Info',
          url: '/smartlistings/home/seller-info'
        },
        {
          label: 'Property Info',
          url: '/smartlistings/home/property-info'
        },
        {
          label: 'Upload Photo',
          url: '/smartlistings/home/upload-photo'
        },
        {
          label: 'Preferred Listing Date',
          url: '/smartlistings/home/preferred-listing-date'
        },
        {
          label: 'Payment Option',
          url: '/smartlistings/home/payment-option'
        },
        {
          label: 'Listing Agreements',
          url: '/smartlistings/home/listing-agreements'
        },
        {
          label: 'Yard Sign & Lock Box',
          url: '/smartlistings/home/yard-sign-lock-box'
        }
      ]
    },
    {
      label: 'Sellers Guide',
      icon: 'info-circle',
      url: '/smartlistings/sellers-guide',
      children: [
        {
          label: 'Listing Specialist Information',
          url: '/smartlistings/sellers-guide/listing-specialist-info'
        },
        {
          label: 'Schedule a listing consultation',
          url: '/smartlistings/sellers-guide/schedule-listing-consultation'
        },
        {
          label: 'Smart Listings Process',
          url: '/smartlistings/sellers-guide/smart-listings-process'
        },
        {
          label: 'Recently Sold Smart Listings',
          url: '/smartlistings/sellers-guide/recently-sold-smart-listings'
        },
        {
          label: `FAQ's`,
          url: '/smartlistings/sellers-guide/faqs'
        }
      ]
    },
    {
      label: 'Seller Dashboard',
      icon: 'tachometer-alt',
      url: '/smartlistings/seller-dashboard',
      children: [
        {
          label: 'Listing Timeline',
          url: '/smartlistings/seller-dashboard/listing-timeline'
        },
        {
          label: 'Calendar',
          url: '/smartlistings/seller-dashboard/calendar'
        },
        {
          label: 'Tasks',
          url: '/smartlistings/seller-dashboard/tasks'
        },
        {
          label: 'Messages',
          url: '/smartlistings/seller-dashboard/messages'
        },
        {
          label: 'Showing Request',
          url: '/smartlistings/seller-dashboard/showing-request'
        },
        {
          label: 'Offers',
          url: '/smartlistings/seller-dashboard/offers'
        }
      ]
    },
    {
      label: 'Chat with Listing Specialist',
      icon: 'comment-dots',
      url: '/smartlistings/chat-with-listing-specialist'
    }
  ],
  [
    {
      label: 'Settings',
      url: '/settings'
    },
    {
      label: 'Sign Out',
      url: '/sign-out',
      action: () => {
        console.log('sign-out')
      }
    }
  ],
  [
    {
      label: 'Apps',
      url: '/apps'
    },
    {
      label: 'Smart Listings',
      url: '/smart-listings'
    },
    {
      label: 'Federa App',
      url: '/federa-app'
    }
  ]
]

export default {
  components: { BaseIcon, PerfectScrollbar },
  mounted() {
    ;(function(d, src, c) {
      var t = d.scripts[d.scripts.length - 1],
        s = d.createElement('script')
      s.id = 'la_x2s6df8d'
      s.async = true
      s.src = src
      s.onload = s.onreadystatechange = function() {
        var rs = this.readyState
        if (rs && rs != 'complete' && rs != 'loaded') {
          return
        }
        c(this)
      }
      t.parentElement.insertBefore(s, t.nextSibling)
    })
    // (document, 'https://federa.ladesk.com/scripts/track.js', function(e) {
    //   LiveAgent.createButton('v0vd85wo', e)
    // })
  },
  methods: {
    onClickMenu: function(route) {
      this.$router.push(route)
    },
    check(url) {
      let urls = {
        urlFrom: '/smartlistings/home/payment-option',
        urlToPreListing: '/smartlistings/home/pre-listing',
        urlToPostListing: '/smartlistings/home/post-closing'
      }

      return (
        url === urls.urlFrom &&
        (this.$route.path === urls.urlToPostListing ||
          this.$route.path === urls.urlToPreListing)
      )
    }
  },
  data() {
    const defaultOpenMenu = [].concat
      .apply([], menuItems)
      .find(
        route =>
          route.url == this.$route.path ||
          (route.children != undefined &&
            route.children.find(child => child.url == this.$route.path))
      )
    return {
      defaultOpens: defaultOpenMenu != undefined ? [defaultOpenMenu.url] : [],
      isMobile: true,
      menuItems
    }
  }
}
</script>

<style lang="scss">
.el-header {
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;

  .img-menu-humburger {
    position: absolute;
    width: 30px;
    height: auto;
    margin: auto;
  }

  .header {
    display: flex;
    margin-left: 230px;

    .img-header {
      margin: 0 !important;
      position: relative !important;
      bottom: 2px !important;
    }
  }
}

.overlay {
  position: absolute;
  background: black;
}

.img-menu-humburger {
  display: none;
}

.menu-icon {
  margin-bottom: 4px;
  width: 20px !important;
  height: 20px;
}

.page-container {
  display: flex;
  height: calc(100vh - 76px);

  .ps {
    height: 100%;
  }

  .page-aside {
    // overflow-y: auto;
    // height: 100%;
    width: 370px;
    z-index: 100;
    background-color: rgb(238, 241, 246);
    font-family: 'sfuitext-regular';

    .el-menu {
      border-right: none;
    }
  }
}

.app-aside {
  .el-menu {
    height: 100%;
  }

  .el-menu-item,
  .el-menu,
  .el-submenu {
    background: #262626;
    color: #fff;

    &:hover {
      color: inherit;
    }
  }

  .el-menu-item,
  .el-submenu__title {
    &.is-active,
    &:hover {
      background: white;
      color: #0040d2;
      font-weight: bold;

      i {
        color: #0040d2;
      }
    }
  }
  .el-menu-item {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
  .submenu-icon {
    width: 20px;
    height: 20px;
    margin-right: 15px;

    &.hover {
      display: none;
    }
  }

  .el-submenu__title {
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
  }

  .el-menu-item,
  .el-submenu__title {
    &:hover {
      .submenu-icon {
        display: none;

        &.hover {
          display: initial;
        }
      }
    }
  }

  .el-submenu.is-opened {
    .el-submenu__title {
      color: #0040d2;

      i {
        color: #0040d2;
      }
    }
  }

  .text-bold {
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
  }

  .first-level-item {
    font-size: 16px;
  }

  .sidebar-header {
    color: white;
    background: #0040d2;
    cursor: initial;
    font-size: 16px;
    pointer-events: none;
    font-size: 22px;
    font-weight: bold;
    height: 70px;
    line-height: 70px;
  }

  .menu-item {
    margin-left: 6px;
  }

  .el-menu-item-group__title {
    padding: 0;
    margin: 0 10px;
    border-bottom: 1px solid #9c9c9c;
  }

  .el-menu-item-group:nth-of-type(2) .el-menu-item-group__title {
    border: none;
  }
}

.el-main-custom {
  background-color: #ffffff;
}

.name-of-page {
  display: none;
}

.img-menu-humburger {
  position: absolute;
  width: 30px !important;
  height: auto !important;
  margin: auto !important;
}

.sidebar-menu-item {
  text-overflow: ellipsis;
  overflow: hidden;
}

@media screen and (max-width: 860px) {
  .el-header {
    .header {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 100%;
      margin-left: 0 !important;

      @media (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
      }
    }
  }

  .img-menu-humburger {
    display: block;
  }

  .page-aside {
    display: none;
  }

  .el-container {
    position: relative;
  }

  .el-side-open-mobile {
    position: absolute;
    z-index: 2;
    height: 100%;
    display: block;
    width: 300px !important;
  }

  .name-of-page {
    display: block;
    margin: auto;
  }
}

.overlay {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2;
  content: '';
}
</style>
