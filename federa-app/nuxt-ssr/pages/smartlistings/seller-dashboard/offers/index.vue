<template>
  <div class="offers-page">
    <div class="header">
      <img class="search-icon" src="~assets/images/search-figma.png" alt="">
      <img class="plus-icon" src="~assets/images/plus-figma.png" alt="">
      <span class="header__text">
        Your List Price: $700,000
      </span>
    </div>
    <div class="page-content">
      <div class="one-item-info offerlist-header">
        <div class="text-content">
          <div class="name-text">
            <span class="text">Offer
            </span>
          </div>
          <div class="name-text">
            <span class="text">Status
            </span>
          </div>
          <div class="name-text">
            <span class="text">Date Submitted
            </span>
          </div>
        </div>
      </div>
      <div v-for="(element,index) in elements_offer" class="one-item" :key="index">
        <div class="one-item-info">
          <div class="text-content">
            <div class="name-text">
              <span class="text">
                {{ element.primary_offer }}
              </span>
              <span class="text offer-extra__down" v-if="element.offer_flag === '0'" :style="{color:'red'}">
                <span>
                  <font-awesome-icon icon="sort-down" class="icon-btn__down" />
                </span>
                <span class="offer-extra-text">-${{element.tip_offer}}</span>
              </span>
              <span class="text offer-extra__up" v-else>
                <span>
                  <font-awesome-icon icon="sort-up" class="icon-btn__up"/>
                </span>
                <span class="offer-extra-text">+${{element.tip_offer}}</span>
              </span>
            </div>
            <div class="name-text">
              <span class="text text__padding">
                {{ element.Status }}
              </span>
            </div>
            <div class="name-text">
              <span class="text text__padding">
                <span>{{ element.date_submitted }}</span>
                <font-awesome-icon icon="angle-down" class=""/>
              </span>
            </div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    layout: 'admin',
    name: "index",
    data() {
      return {
        elements_offer: [
          {
            primary_offer: '$670,000',
            tip_offer: '30,000',
            offer_flag:'0',
            Status:'Review',
            date_submitted:'July 8, 2020'
          },
          {
            primary_offer: '$730,000',
            tip_offer: '30,000',
            offer_flag:'1',
            Status:'Review',
            date_submitted:'July 8, 2020'
          },
          {
            primary_offer: '$670,000',
            tip_offer: '30,000',
            offer_flag:'0',
            Status:'Review',
            date_submitted:'July 8, 2020'
          },
          {
            primary_offer: '$670,000',
            tip_offer: '30,000',
            offer_flag:'1',
            Status:'Rejected',
            date_submitted:'July 6, 2020'
          },
          {
            primary_offer: '$730,000',
            tip_offer: '30,000',
            offer_flag:'1',
            Status:'Approved',
            date_submitted:'July 4, 2020'
          },
          {
            primary_offer: '$670,000',
            tip_offer: '30,000',
            offer_flag:'0',
            Status:'Pending',
            date_submitted:'July 3, 2020'
          }
        ]
      }
    },
    methods: {
      actionToClick() {
      }
    }
  }
</script>

<style lang="scss" scoped>
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
  .icon-btn{
    &__up{
      font-size: 1.5rem;
      color: green;
      position: absolute;
      margin-top: 6px;
    }
    &__down{
      font-size: 1.5rem;
      color: red;
      position: absolute;
      margin-top: -3px;
    }

  }
  .offerlist-header{
    border: 1px solid #CBCBCB;
    padding: 20px 0px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: white;
  }
  .page-content{
    margin-top: -50px;
  }
  .one-item-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 20px -20px 10px 80px;

    .block-image {
      margin-right: 46px;
    }

    .name-text {
      margin: 0 0 -4px 0;
      width: 33%;
      .text {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.24px;
        font-weight: bold;
        font-family: 'SFUIText-Regular';
        display: block;
        &__padding{
          padding: 10px;
        }
      }
    }
    .offer-extra{
      &__up{
        font-size: 15px!important;
        color: green;
      }
      &__down{
        font-size: 15px!important;
        color: red;
      }
      }
      .offer-extra-text{
            margin-left: 20px;
      }
    .info-text {
      margin: 0 0 -12px 0;
      width: 300px;
      .text {
        letter-spacing: -0.24px;
        font-size: 12px;
        line-height: 26px;
      }
    }

    .menu {
      position: absolute;
      right: 50px;
    }
  }

  .one-item .line {
    width: calc(100% + 40px);
    height: 1px;
    margin: 0 -20px;
    background-color: #CBCBCB;
  }

  .text-content {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: row;
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
      margin: 0 0 -4px 0;
      width: auto;
      .text {
        font-size: 16px !important;
        font-weight: bold;
      }
    }

    .info-text {
      margin: 0 0 -12px 0;
      width: auto;
      .text {
        font-size: 12px !important;
      }
    }

    .block-image {
      margin-right: 0 !important;

      img {
        width: 30px;
        height: 25px;
        margin-right: 15px;
      }
    }

    .menu {
      right: 7px !important;
    }

    .line {
      width: 100% !important;
      margin: 0 !important;
    }

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
</style>
<style>
  .el-popper:hover > .popper__arrow::after {
    border-left-color: #e1e1e1;
  }
  .el-popper:hover {
    background-color: #e1e1e1;
  }
  .el-popper:active > .popper__arrow::after {
    border-left-color: #cbcbcb;
  }
  .el-popper:active {
    background-color: #cbcbcb;
  }
</style>
