<template>
  <div class="track-status-page">
    <!-- Header -->
    <div class="header">
      <div class="title">Track the Status</div>
      <div
        class="subtitle"
      >Orders take 3 business days after you sign your Listing Agreement and select your Listing date.</div>
    </div>
    <!-- Header -->

    <div class="order-data">
      <div class="order-data__left">
        <p class="order-data__paragraph">July 5, 2020</p>
        <p class="order-data__paragraph">Order ID: 5t36-83j4</p>
      </div>

      <div class="order-data__right">
        ETA:
        <span class="order-data__hours">72hrs</span>
      </div>
    </div>

    <div class="track-order">
      <div class="track-order__container">
        <div
          class="track-order__item"
          :class="{ 'track-order__item_active': item.active }"
          v-for="(item, index) in elements"
          :key="index"
        >
          <div class="track-order__left">
            <img class="track-order__icon" src="~assets/images/info.png" alt />

            <span class="track-order__status">{{item.status}}</span>
          </div>

          <div class="track-order__right">
            <span class="track-order__date">{{item.date}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-info">
      <div class="order-info__container">
        <div class="order-info__first-item">
          <img class="order-info__img-home" src="~assets/images/home.png" alt />
          <div class="order-info__text">
            <span class="order-info__title">Yard Sign Location</span>
            <p
              class="order-info__subtitle"
            >User will have the option to choose location of sign from map</p>
          </div>
        </div>
        <div class="order-info__second-item">
          <img class="order-info__img-lock" src="~assets/images/lock-icon.png" alt />
          <div class="order-info__second-title">Change Lockbox Combo</div>
          <el-input class="order-info__one-input" v-model="Lockbox_Combo"></el-input>
          <el-button
            type="primary"
            round
            class="order-info__btn"
            size="medium"
            style="font-family: SFUIText-Regular;"
          >Submit</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.track-status-page {
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
}

.title {
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: 'SFUIText-Regular';

  @media screen and (max-width: 660px) {
    font-size: 20px;
    text-align: left;
  }
}

.subtitle {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 660px) {
    font-size: 14px;
    text-align: left;
  }
}

.order-data {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &__left {
  }

  &__paragraph {
    margin-bottom: 0;
    font-size: 16px;

    @media (max-width: 660px) {
      font-size: 12px;
    }
  }

  &__right {
    margin: auto 0;
    color: #0040d2;
    font-size: 12px;
  }

  &__hours {
    font-weight: 700;
    font-size: 22px;
    font-family: 'SFUIText-Regular';

    @media (max-width: 660px) {
      font-size: 16px;
    }
  }
}

.track-order {
  margin-bottom: 60px;
  position: relative;

  &__container {
    padding: 0 0 0 60px;

    @media (max-width: 660px) {
      padding: 0 0 0 30px;
    }

    &::before {
      position: absolute;
      display: block;
      content: ' ';
      width: 3px;
      height: 80%;
      background-color: grey;
      left: 6px;
      top: 10%;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    position: relative;

    &::before {
      position: absolute;
      display: block;
      content: ' ';
      width: 16px;
      height: 16px;
      background-color: #fff;
      left: -60px;
      border: solid 3px blue;
      border-radius: 30px;

      @media (max-width: 660px) {
        width: 12px;
        height: 12px;
        left: -28px;
      }
    }

    &_active {
      &::before {
        background-color: blue;
      }
    }
  }

  &__left {
    margin-right: 15px;
  }
  &__icon {
    @media (max-width: 660px) {
      width: 25px;
    }
  }

  &__status {
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
    font-family: 'SFUIText-Regular';

    @media (max-width: 660px) {
      font-size: 11px;
    }
  }

  &__right {
  }

  &__date {
    @media (max-width: 660px) {
      font-size: 10px;
    }
  }
}

.order-info {
  margin-left: 60px;

  @media (max-width: 660px) {
    margin-left: 10px;
    margin-bottom: 40px;
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__first-item {
    display: flex;
    margin-bottom: 20px;
  }

  &__img-home {
    width: 35px;
    margin: auto 0;

    @media (max-width: 660px) {
      width: 24px;
      margin-top: 0;
    }
  }

  &__text {
    margin-left: 25px;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    font-family: 'SFUIText-Regular';

    @media (max-width: 660px) {
      font-size: 14px;
    }
  }

  &__subtitle {
    font-size: 12px;
  }

  &__second-item {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
  }

  &__img-lock {
    width: 35px;
    margin: auto 0;

    @media (max-width: 660px) {
      width: 24px;
      margin-top: 0;
    }
  }

  &__second-title {
    font-weight: 700;
    font-size: 20px;
    margin-left: 25px;
    font-family: 'SFUIText-Regular';

    @media (max-width: 660px) {
      font-size: 14px;
    }
  }
  &__one-input {
    width: 180px;
    margin-left: 35px;

    @media (max-width: 660px) {
      margin-left: 0;
      margin-top: 30px;
      width: 150px;
    }
  }

  &__btn {
    margin-left: 35px;
    width: 130px;
    border-radius: 40px;
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
    height: auto;
    margin-top: 10px;

    @media (max-width: 660px) {
      font-size: 16px;
      width: 100px;
      margin-left: 15px;
      margin-top: 5px;
    }
  }
}
</style>

<script>
export default {
  layout: 'admin',
  name: 'index',
  data() {
    return {
      Lockbox_Combo: '',
      elements: [
        {
          status: 'Your order has been placed',
          date: 'July 5, 2020',
          active: true
        },
        {
          status: 'Order has been Processed',
          date: 'July 5, 2020'
        },
        {
          status: 'Order has been Confirmed',
          date: 'July 5, 2020'
        },
        {
          status: 'Your yard sign and lock box has been installed!',
          date: 'July 7, 2020'
        }
      ]
    }
  }
}
</script>

