<template>
  <div class="home-route">
    <div class="text">Hi Sebastian, Let's keep working on your Listing!</div>
    <el-row class="el-row-content" :gutter="20">
      <el-col
        class="s_el-timeline"
        :span="20"
        :offset="1"
        :md="{span: 16, offset: 4}"
        :lg="{span: 12, offset: 6}"
        :xl="{span: 8, offset: 8}"
      >
        <el-timeline>
          <el-collapse accordion v-on:change="onChangeStep">
            <el-timeline-item
              class="el-timeline-custom"
              v-for="(route, index) in homeRoutes"
              :type="route.label == currentStep ? 'primary' : null"
              :key="index"
            >
              <el-card
                :class="route.label == currentStep ? 'is-open' : ''"
                shadow="never"
                class="el-card-item"
              >
                <el-collapse-item :name="route.label">
                  <template slot="title">
                    <font-awesome-icon
                      :class="{'isActive': openItem && route.label == currentStep}"
                      v-if="!!route.fontIcon"
                      :icon="route.icon"
                      class="icon"
                    />
                    <BaseIcon
                      v-if="!route.fontIcon"
                      class="step-icon"
                      :active="route.label == currentStep"
                      :src="route.icon"
                      :hover-src="route.iconHover"
                      style="width: 30px; height: 30px;"
                    />
                    <span class="step-name">{{ route.label }}</span>
                  </template>
                  <el-button class="step-btn" type="primary" size="medium" round>
                    <nuxt-link class="step-btn__pagelink" :to="route.pagemove">Continue</nuxt-link>
                  </el-button>
                </el-collapse-item>
              </el-card>
            </el-timeline-item>
          </el-collapse>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.home-route {
  .s_el-timeline {
    margin: auto !important;
    @media (max-width: 660px) {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    ul {
      padding: 0;
    }

    .el-timeline-item__wrapper {
      width: auto;
    }

    .el-card-item {
      width: 350px;
      margin: auto;

      .isActive {
        color: #0040d2;
      }
    }

    .icon {
      color: #868585;
      width: 30px;
      height: 30px;
      margin-right: 20px;
    }

    @media only screen and (min-width: 1200px) {
      min-width: 515px;
    }
  }

  .el-row-content {
    display: flex;
    margin: auto;
  }

  .text {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin: 70px 0 65px 0;
    font-family: 'sfuitext-bold';

    @media (max-width: 660px) {
      font-size: 20px;
      margin: 40px 0px 35px 0px;
    }
  }

  .el-collapse {
    border: none;

    .el-collapse-item__header {
      font-family: SFUIText-Regular;
      @media (max-width: 660px) {
        padding: 5px;
      }
    }

    .el-collapse-item__header,
    .el-collapse-item__wrap {
      border: none;
      background: none;
    }

    .el-collapse-item__content {
      padding-bottom: 0;
      padding-top: 10px;
    }
  }

  .el-card {
    width: 405px !important;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
    margin-left: 45px !important;
    margin-right: 0 !important;
    @media (max-width: 660px) {
      width: 100% !important;
      margin-left: 5px !important;
      border-radius: 8px;
    }

    &__body {
      @media (max-width: 660px) {
        padding: 10px 5px;
      }
    }
  }

  .el-timeline-item__node {
    background-color: #aaafb3;
  }

  .el-timeline-item__node--primary {
    background-color: #0040d2;
  }

  .el-timeline-item__node--normal {
    top: 10px;
    left: -3px;
    width: 16px;
    height: 16px;
    @media (max-width: 660px) {
      left: -1px;
      width: 12px;
      height: 12px;
    }
  }

  .el-timeline-item__tail {
    top: 20px;
    border-left: 3px solid #aaafb3;
    height: calc(100% - 10px);
  }

  .el-timeline-custom > .el-timeline-item__wrapper {
    padding-left: 94px;
    @media (max-width: 660px) {
      padding-left: 20px;
    }
  }

  .step-icon {
    margin-right: 20px;
    @media (max-width: 660px) {
      width: 20px !important;
      height: 20px !important;
    }
  }

  .step-name {
    font-size: 20px;
    @media (max-width: 660px) {
      font-size: 14px;
    }
  }

  .step-btn {
    margin-left: 46px;
    &__pagelink {
      color: #fff;
    }
  }

  .el-card.is-open {
    border-color: #0040d2;

    .step-icon,
    .step-name {
      color: #0040d2;
    }
  }

  .step-icon,
  .step-name {
    color: #868585;
  }
}
</style>

<script>
import BaseIcon from '@/components/icons/BaseIcon'
export default {
  components: {
    BaseIcon
  },
  layout: 'admin',
  methods: {
    onChangeStep: function(activeName) {
      console.log(activeName)
      this.currentStep = activeName
      this.openItem = !this.openItem
    }
  },
  data() {
    return {
      openItem: false,
      currentStep: '',
      homeRoutes: [
        {
          label: 'Seller Info',
          fontIcon: false,
          icon: require('~/assets/images/ic_user_gray.png'),
          iconHover: require('~/assets/images/ic_user_blue.png'),
          pagemove: '/smartlistings/home/seller-info'
        },
        {
          fontIcon: false,
          label: 'Property Info',
          icon: require('~/assets/images/ic_home_gray.png'),
          iconHover: require('~/assets/images/ic_home_blue.png'),
          pagemove: '/smartlistings/home/property-info'
        },
        {
          fontIcon: false,
          label: 'Upload Photo',
          icon: require('~/assets/images/ic_camera_gray.png'),
          iconHover: require('~/assets/images/ic_camera_blue.png'),
          pagemove: '/smartlistings/home/upload-photo'
        },
        {
          fontIcon: false,
          label: 'Preferred Listing Date',
          icon: require('~/assets/images/ic_calen_gray.png'),
          iconHover: require('~/assets/images/ic_calen_blue.png'),
          pagemove: '/smartlistings/home/preferred-listing-date'
        },
        {
          fontIcon: false,
          label: 'Payment Option',
          icon: require('~/assets/images/ic_dola_gray.png'),
          iconHover: require('~/assets/images/ic_dola_blue.png'),
          pagemove: '/smartlistings/home/payment-option'
        },
        {
          fontIcon: false,
          label: 'Listing Agreements',
          icon: require('~/assets/images/ic_listing_gray.png'),
          iconHover: require('~/assets/images/ic_listing_blue.png'),
          pagemove: '/smartlistings/home/listing-agreements'
        },
        {
          fontIcon: false,
          label: 'Yard Sign & Lock Box',
          icon: require('~/assets/images/ic_lock_gray.png'),
          iconHover: require('~/assets/images/ic_lock_blue.png'),
          pagemove: '/smartlistings/home/yard-sign-lock-box'
        }
      ]
    }
  }
}
</script>
