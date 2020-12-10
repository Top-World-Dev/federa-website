<template>
  <div class="listing-timeline">
    <div class="header">
      <img class="search-icon" src="~assets/images/search-figma.png" alt="">
      <img class="plus-icon" src="~assets/images/plus-figma.png" alt="">
      <span class="header__text">
        7713 Red Street, Great Falls, VA 22066
      </span>
    </div>
    <div class="page-content">
      <div class="one-item-info offerlist-header">
        <div class="text-content">
          <div class="name-text">
            <span class="text text__position">Today<span class="text-date">Wed, July 08, 2020</span></span>
          </div>
        </div>
      </div>
    </div>
    <el-row class="el-row-content" :gutter="20">
      <el-col class="s_el-timeline" :span="20" :offset="1" :md="{span: 16, offset: 4}" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}">
        <el-timeline>
          <el-collapse accordion v-on:change="onChangeStep">
            <el-timeline-item class="el-timeline-custom" v-for="(route, index) in homeRoutes" :type="route.label == currentStep ? 'primary' : null" :key="index">
              <el-card :class="route.label == currentStep ? 'is-open card-feature' : ''" shadow="never" class="el-card-item">
                <el-collapse-item :name="route.label">
                  <template slot="title">
                    <span class="step-name">{{ route.label }}</span>
                  </template>
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
.listing-timeline {
  .header {
    z-index: 0;
    height: 162px;
    background-image:  url('~assets/images/background-blue-image.png');
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-family: 'SFUIText-Regular';
    margin-left: -20px;
    margin-top: -20px;
    margin-right: -20px;

  &__text {
    color: white;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    vertical-align: center;
    text-align: center;
    padding: 0;
    letter-spacing: -0.24px;

    @media(max-width: 660px) {
      font-size: 24px;
    }
   }
  }
  .text-date{
    font-size: 15px;
    margin-left: 10px;
    font-weight: 100;
  }
  .card-feature{
    background-color: #0040D2;
    .step-name{
      color: white!important;
    }
  }
  // .icon-btn{
  //   &__up{
  //     font-size: 1.5rem;
  //     color: green;
  //     position: absolute;
  //     margin-top: 6px;
  //   }
  //   &__down{
  //     font-size: 1.5rem;
  //     color: red;
  //     position: absolute;
  //     margin-top: -3px;
  //   }

  // }
  .page-content{
    margin-top: -50px;
  }
  .one-item-info {
    border: 1px solid #CBCBCB;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: white;
    border-right: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px -20px 50px 80px;
    position: relative;
    @media (max-width: 660px) {
      margin: 20px -20px 50px 10px;
    }

    // .block-image {
    //   margin-right: 46px;
    // }

    .name-text {
      .text {
        font-size: 22px;
        line-height: 26px;
        letter-spacing: -0.24px;
        font-weight: bold;
        font-family: 'SFUIText-Regular';
        display: block;
        // &__padding{
        //   padding: 10px;
        // }
        &__position{
          // text-align: left;
          padding-left: 40px;
          @media (max-width: 660px) {
            padding-left: 0px;
          }
        }
      }
    }
    // .offer-extra{
    //   &__up{
    //     font-size: 15px!important;
    //     color: green;
    //   }
    //   &__down{
    //     font-size: 15px!important;
    //     color: red;
    //   }
    // }
    // .offer-extra-text{
    //   margin-left: 20px;
    // }
    // .info-text {
    //   margin: 0 0 -12px 0;
    //   width: 300px;
    //   .text {
    //     letter-spacing: -0.24px;
    //     font-size: 12px;
    //     line-height: 26px;
    //   }
    // }

    // .menu {
    //   position: absolute;
    //   right: 50px;
    // }
  }

  // .one-item .line {
  //   width: calc(100% + 40px);
  //   height: 1px;
  //   margin: 0 -20px;
  //   background-color: #CBCBCB;
  // }

  .text-content {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
  }

  .search-icon {
    display: none;
  }

  .plus-icon {
    display: none;
  }

  @media screen and (max-width: 1170px) {
    .text-content {
      display: flex;
      //flex-direction: column;
    }

  }
  @media screen and (max-width: 600px) {
    .name-text {
      width: auto;
      .text {
        font-size: 16px !important;
        font-weight: bold;
      }
    }

    // .info-text {
    //   margin: 0 0 -12px 0;
    //   width: auto;
    //   .text {
    //     font-size: 12px !important;
    //   }
    // }

    // .block-image {
    //   margin-right: 0 !important;

    //   img {
    //     width: 30px;
    //     height: 25px;
    //     margin-right: 15px;
    //   }
    // }

    // .menu {
    //   right: 7px !important;
    // }

    // .line {
    //   width: 100% !important;
    //   margin: 0 !important;
    // }

    .header {
      position: relative;

      .search-icon {
        display: block;
        position: absolute;
        right: 62px;
        top: 27px;
        display: none;
      }

      .plus-icon {
        display: block;
        position: absolute;
        right: 30px;
        top: 27px;
        display: none;
      }
    }
  }
  // .s_el-timeline {
  //   margin: auto !important;
  //   @media(max-width: 660px) {
  //     padding-left: 0px !important;
  //     padding-right: 0px !important;
  //   }
  //   ul {
  //       padding: 0;
  //   }

  //   .el-timeline-item__wrapper {
  //     width: auto;
  //   }

  //   .el-card-item {
  //     width: 350px;
  //     margin: auto;

  //     .isActive {
  //       color: #0040D2;
  //     }
  //   }

  //   .icon {
  //     color: #868585;
  //     width: 30px;
  //     height: 30px;
  //     margin-right: 20px;
  //   }

  //   @media only screen and (min-width: 1200px) {
  //       min-width: 515px;
  //   }
  // }

    .el-row-content {
      display: flex;
      margin: auto;
      @media (max-width: 660px) {
        margin-left: 10px !important;
      }
    }

    .text {
        font-weight: bold;
        font-size: 30px;
        text-align: center;
        margin: 15px 0 15px 0;
        font-family: 'SFUIText-Bold';

        @media(max-width: 660px) {
          font-size: 20px;
        }
    }

    .el-collapse {
        border: none;

      .el-collapse-item__header {
        font-family: 'SFUIText-Regular';
        @media(max-width: 660px) {
          padding: 5px;
        }
      }
    .el-collapse-item__arrow {
        float: left;
        margin: 0 0.5rem;
        width: 1rem;
        text-align: center;
        display: none;
      }
      .el-collapse-item__header,
        .el-collapse-item__wrap {
            border: none;
            background: none;
        }

        .el-collapse-item__content {
            padding-bottom: 0;
            padding-top: 10px;
            display: none;
        }
    }

    .el-card {
        width: 405px !important;
        border-radius: 15px;
        border: 1px solid #C4C4C4;
        margin-left: 45px !important;
        margin-right: 0 !important;
        @media(max-width: 660px) {
          width: 100% !important;
          margin-left: 5px !important;
          border-radius: 8px;
        }

      &__body {
        padding: 0px;
        @media(max-width: 660px) {
          padding: 10px 5px;
        }
      }
    }

    .el-timeline-item__node {
        background-color: #AAAFB3;
    }

    .el-timeline-item__node--primary {
        background-color: #0040D2;
    }

    .el-timeline-item__node--normal {
        top: 10px;
        left: -3px;
        width: 16px;
        height: 16px;
        @media(max-width: 660px) {
          left: -1px;
          width: 12px;
          height: 12px;
        }
    }


    .el-timeline-item__tail {
        top: 20px;
        border-left: 3px solid #AAAFB3;
        height: calc(100% - 10px);
    }

    .el-timeline-custom > .el-timeline-item__wrapper {
        padding-left: 94px;
        @media(max-width: 660px) {
          padding-left: 20px;
        }
    }

    .step-icon {
        margin-right: 20px;
        @media(max-width: 660px) {
          width: 20px !important;
          height: 20px !important;
        }
    }

    .step-name {
        font-size: 20px;
        width: 100%;
        text-align: center;
        @media(max-width: 660px) {
          font-size: 15px;
        }
    }

    .step-btn {
        margin-left: 46px;
    }

    .el-card.is-open {
        border-color: #0040D2;

        .step-icon,
        .step-name {
            color: #0040D2;
        }
    }

    .step-icon,
    .step-name {
        color: #868585;
    }

}
</style>

<script>
import BaseIcon from "@/components/icons/BaseIcon";
export default {
    components: {
        BaseIcon
    },
    layout: 'admin',
    methods: {
        onChangeStep: function (activeName) {
            console.log(activeName);
            this.currentStep = activeName;
            this.openItem = !this.openItem;
        }
    },
    data() {
        return {
            openItem: false,
            currentStep: '',
            homeRoutes: [{
                label: 'New (Pre-Listing)',
                fontIcon: false,
                icon: require('~/assets/images/ic_user_gray.png'),
                iconHover: require('~/assets/images/ic_user_blue.png'),
            }, {
                fontIcon: false,
                label: 'Signed (Listing Agreement)',
                icon: require('~/assets/images/ic_home_gray.png'),
                iconHover: require('~/assets/images/ic_home_blue.png'),
            }, {
                fontIcon: false,
                label: 'Ready to Show (MLS Active)',
                icon: require('~/assets/images/ic_camera_gray.png'),
                iconHover: require('~/assets/images/ic_camera_blue.png'),
            }, {
                fontIcon: false,
                label: 'Under Contact',
                icon: require('~/assets/images/ic_calen_gray.png'),
                iconHover: require('~/assets/images/ic_calen_blue.png'),
            }, {
                fontIcon: false,
                label: 'Your home is closed!',
                icon: require('~/assets/images/ic_dola_gray.png'),
                iconHover: require('~/assets/images/ic_dola_blue.png'),
            }]
        };
    }
}
</script>
