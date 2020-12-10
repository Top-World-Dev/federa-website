<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__links-wrapper">
        <div class="footer__link-wrapper" v-for="(item, index) in footerList" :key="index">
          <a href="#" class="footer__link">{{item.title}}</a>
        </div>
      </div>

      <el-divider></el-divider>

      <div class="footer__bottom-wrapper">
        <span>Copyright © 2020 Federa Inc. All rights reserved.</span>
        <img src="~/assets/images/federa-logo-blue.png" alt="" class="footer__img">
      </div>
    </div>

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
          title: 'About',
        },
        {
          title: 'List Now',
        },
        {
          title: 'FAQ',
        },
        {
          title: 'Contact',
        },
        {
          title: 'Smart Listings',
        },
        {
          title: 'App',
        },
        {
          title: 'Recently Sold Listings',
        },
      ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scope>
.footer {
  max-width: 1236px;
  margin: auto !important;

  &__links-wrapper {
    display: flex;
    justify-content: center;
    padding: 40px 10px 20px 10px;
  }

  &__link {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-right: 60px;
    color: black;

    &:hover, &:active, &:focus G{
      color: black;
    }

  }

  &__link-wrapper {
    &:last-child {
      .footer__link {
        margin-right: 0;
      }
    }
  }

  &__bottom-wrapper {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    padding: 3px 10px 25px 10px;
  }

  &__img {
    width: 100px;
    height: auto;
    margin-top: -10px;
  }
}
</style>
