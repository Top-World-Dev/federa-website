<template>
  <footer class="footer-wrapper">
    <div class="footer-list">
      <div class="desktop-display">
        <div class="grid-content bg-purple" v-for="(item, index) in footerList" :key="index">
          <list-view :title="item.title" :list="item.list"></list-view>
        </div>
      </div>
      <div class="mobile-display">
        <el-collapse v-model="activeNames" v-for="(item, index) in footerList" :key="index">
          <el-collapse-item :title="item.title">
            <div
              :name="item.title + '-' + 1"
              v-for="(sub, subIndex) in item.list"
              :key="subIndex  + 's'"
              style="margin-bottom: 15px; color: black"
            >
              <a :href="sub.link" target="_blank">{{sub.title}}</a>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <el-divider></el-divider>
      <div class="bottom-content">
        <p>Copyright © 2020 Federa Inc. All rights reserved.</p>
        <ul>
          <li>
            <nuxt-link to="/directory/locations">Locations</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terms-privacy">Terms of Use</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terms-privacy">Privacy Policy</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <el-image class="home-image" :src="url" fit="contain"></el-image>
  </footer>
</template>

<script>
import ListView from '@/components/ListView'
import homeImg from '@/assets/images/equal-housing-opportunity-logo-1200w-2.jpg'

export default {
  name: 'Footer',
  components: { ListView },
  data() {
    return {
      url: homeImg,
      activeNames: ['1'],
      footerList: [
        {
          title: 'About Federa',
          list: [
            {
              title: 'Federa Leadership',
              link:
                'https://app.instapage.com/route/20426643/?url=leadership.pagedemo.co'
            },
            {
              title: 'Our Story',
              link:
                'https://app.instapage.com/route/20427113/?url=ourstory.pagedemo.co'
            },
            {
              title: 'How Smart Listings Work',
              link:
                'https://app.instapage.com/route/20437793/?url=how.pagedemo.co'
            },
            {
              title: 'Recently Sold',
              link: 'https://co.federa.com/recentlysold'
            }
          ]
        },
        {
          title: 'Services',
          list: [
            {
              title: 'Smart Listings',
              link: 'https://smartlistings.federa.com/'
            },
            {
              title: 'Federa App',
              link:
                'https://app.instapage.com/route/20378435/?url=smartlistings.federa.com/app'
            },
            {
              title: 'Federa Leads',
              link: 'https://www.federaleads.com/'
            }
          ]
        },
        {
          title: 'News and Events',
          list: [
            {
              title: 'Federa News',
              link:
                'https://app.instapage.com/route/20361230/?url=news.federa.com/'
            }
          ]
        },
        {
          title: 'Contact Federa',
          list: [
            {
              title: 'Contact Us',
              link:
                'https://app.instapage.com/route/20359675/?url=smartlistings.federa.com/contact'
            },
            {
              title: 'Login to Smart Listings',
              link: 'https://listings.federa.com/'
            },
            {
              title: 'List Now',
              link: 'https://smartlistings.federa.com/listnow'
            }
          ]
        },
        {
          title: 'Help',
          list: [
            {
              title: 'FAQ',
              link:
                'https://app.instapage.com/route/20361090/?url=smartlistings.federa.com/faq'
            },
            {
              title: 'Job Opportunities',
              link: 'https://www.indeed.com/cmp/Federated-Realty'
            },
            {
              title: 'Cookies',
              link: '/cookies'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    if (process.client) {
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
    (document, 'https://federa.ladesk.com/scripts/track.js', function(e) {
      LiveAgent.createButton('v0vd85wo', e)
    })
    }
  }
}
</script>

<style lang="scss" scope>
.footer-wrapper {
  width: 100%;
  padding: 1% 0;
  margin: auto;
  background-color: white;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, .12), 0 -3px 3px 0 rgba(0, 0, 0, .04);
  border-top: 1px solid #d8dce5;
  transition: .33s;
  padding-top: 50px;
  @media (max-width: 450px) {
    padding-top: 20px;
  }
  @media (max-width: 280px) {
    padding-top: 0px;
  }
  .footer-list {
    max-width: 60rem;
    margin: auto;
    @media (max-width: 768px) {
      max-width: 45rem;
    }
    .desktop-display {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .mobile-display {
      display: none;
      .el-collapse-item {
        color: white;
        &__header {
          height: auto;
          padding: 15px;
          color: black;
          font-family: SFUIText-Bold, Sans-serif;
          font-size: 17px;
          line-height: 1.3em;
          background: none;
          border: none;
        }
        &__content {
          padding: 0 20px;
          color: black;
          font-family: SFUIText-Regular, Sans-serif;
          font-size: 17px;
          line-height: 1.5em;
          border: none;
          a {
            color: black;
          }
        }
      }
    }
    .el-divider--horizontal {
      margin: 0;
      @media(min-width: 660px) {
        margin-top: 12px;
      }
    }
    .bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      p {
        margin: 10px 0;
      }
      ul {
        display: inline-flex;
        li {
          margin-left: 10px;
          text-align: right;
        }
      }
    }
  }
  .home-image {
    position: absolute;
    right: 120px;
    bottom: 50px;
    width: 50px;
    height: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .footer-wrapper {
    margin-top: 30px;
    .footer-list {
      width: 90%;
      padding: 0;
      margin: 20px auto;
      font-size: 13px;
      .desktop-display {
        display: none !important;
      }
      .mobile-display {
        display: block !important;
        font-size: 13px;
      }
      .bottom-content {
        display: block;
        margin: 30px 0;
        font-size: 13px;
        text-align: center;
      }
    }
    .home-image {
      right: 10px;
      bottom: 25px;
      width: 25px;
      height: 25px;
    }
  }
}
@media only screen and (max-width: 375px) {
  .footer-wrapper {
    .footer-list {
      margin: 30px auto !important;
    }
  }
}
</style>
