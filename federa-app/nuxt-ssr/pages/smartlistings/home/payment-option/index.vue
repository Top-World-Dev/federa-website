<template>
  <div class="payment-option-page">

    <admin-header class="header">
      Hi Sebastian, we have two payment options:
    </admin-header>

    <div class="page-content">
      <div class="content-block">
        <p class="title">The first option is a flat fee of $1,000. You have a 7 day cancellation grace period.</p>
        <el-button class="button button_blue" type="primary" size="medium" round @click="goToPreListingPage()">Pre-Listing</el-button>
      </div>

      <div class="content-block">
        <p class="title">The second option is a flat fee of $2,000 after your home closes.</p>
        <el-button class="button button_black" type="primary" size="medium" round @click="goToPostClosingPage()">Post-Closing</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { AdminHeader, ButtonAdmin } from '@Components';

export default {
  layout: 'admin',
  name: "index",
  components: {
    AdminHeader,
    ButtonAdmin,
  },
  methods: {
    goToPreListingPage() {
      this.$router.push({ path: '/smartlistings/home/pre-listing' })
    },
    goToPostClosingPage() {
      this.$router.push({ path: '/smartlistings/home/post-closing' })
    }
  }
}
</script>

<style lang="scss" scoped>

.payment-option-page {

}

.page-content {
  font-family: 'SFUIText-Regular';
}

.header {
  margin-bottom: 134px;
  font-family: 'SFUIText-Regular';

  @media(max-width: 768px) {
    margin-bottom: 64px;
  }
}

.content-block {
  margin-bottom: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 768px) {
    margin-bottom: 60px;
  }
}

.title {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 42px;

  @media(max-width: 768px) {
    font-size: 18px;
    margin-bottom: 25px;
  }
}

.button {
  padding: 20px 40px;
  border-radius: 40px;
  width: auto;
  font-weight: bold;
  font-size: 20px;
  min-width: 270px;

  @media(max-width: 768px) {
    padding: 15px 30px;
    font-size: 18px;
    min-width: 250px;
  }

  &_blue {
    &:hover {
      color: #FFF;
      background-color: #0040D2;
      border-color: #0049E7;
    }

    &:active, &:focus {
      color: #FFF;
      background-color: #0034AE;
      border-color: #0049E7;
    }

  }

  &_black {
    background-color: black;
    border-color: black;
  }
}

</style>
