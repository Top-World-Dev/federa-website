<template>
  <div class="payment-option-page">
    <admin-header>
      <span class="header-text">$1000</span>
      <p class="small-text">Pre-Listing</p>
    </admin-header>

    <div class="page-content">
      <div class="container-image">
        <div class="img">
          <a href="https://www.paypal.com/" target="__blank">
            <img src="~assets/images/card-1.png" alt />
          </a>
        </div>

        <div class="img">
          <img src="~assets/images/card-2.png" alt />
        </div>
      </div>

      <div class="big-image">
        <img src="~assets/images/card-3.png" alt />
      </div>

      <div class="inputs">
        <div class="input-item">
          <span class="text">Card Number</span>
          <img class="img-in-input" src="~assets/images/visa.png" alt />
          <el-input class="input-with-img" v-model="CardNumber"></el-input>
        </div>
        <div class="input-item double-inputs">
          <div class="one-input-field">
            <span class="text">Experty Date</span>
            <el-input class="small-input" v-model="Experty_Date"></el-input>
          </div>

          <div class="one-input-field">
            <span class="text">CVV</span>
            <el-input class="small-input" v-model="cvv"></el-input>
          </div>
        </div>
        <div class="input-item">
          <span class="text">Card Holder</span>
          <el-input class="one-input" v-model="CardHolder"></el-input>
        </div>
      </div>

      <div class="text-with-icon">
        <img src="../../../../assets/images/lock.png" alt />
        <span class="text">Security credit card payment</span>
      </div>

      <div class="button">
        <el-button class="btn" type="primary" size="medium" round>Start Your Listing!</el-button>
      </div>

      <div class="time-line">
        <div class="circles">
          <div class="circle circle-blue"></div>
          <div class="circle circle-empty"></div>
          <div class="circle circle-dark-gray"></div>
          <div class="circle circle-gray"></div>
        </div>

        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { AdminHeader } from '@Components'

export default {
  layout: 'admin',
  name: 'index',
  components: {
    AdminHeader
  },
  data() {
    return {
      CardNumber: '',
      Experty_Date: '',
      cvv: '',
      CardHolder: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  padding: 0;
  color: red;
}

.header-text {
  font-weight: 700;
}

.small-text {
  font-weight: 400;
}

.payment-option-page {
  .page-content {
    margin: 50px auto 0 auto;
    width: 100%;
    max-width: 500px;

    .block-first {
      margin-top: 80px;
    }

    .big-image {
      margin-top: 30px;
      img {
        width: 100%;
      }
    }

    .container-image {
      display: flex;
      justify-content: space-between;

      .img {
        margin: 0 8px;
        width: 45%;
        img {
          width: 100%;
        }
      }
    }

    .inputs {
      margin: 0 8px;

      .input-item {
        margin-top: 30px;
        position: relative;

        .text {
          font-size: 16px;
          color: #9c9c9c;

          @media (max-width: 660px) {
            font-size: 14px;
          }
        }

        .img-in-input {
          width: 40px;
          right: 9px;
          top: 38px;
          position: absolute;
          z-index: 2;
        }
      }

      .double-inputs {
        display: flex;
        justify-content: space-between;

        .one-input-field {
          width: 48%;
        }
      }
    }

    .text-with-icon {
      display: flex;
      justify-content: center;
      margin-top: 30px;

      img {
        width: 20px;
        height: 26px;
        margin-bottom: 14px;
        margin-right: 14px;
      }

      .text {
        font-size: 20px;
      }
    }

    .button {
      margin-top: 30px;
      display: flex;
      justify-content: center;

      .btn {
        background-color: #0040d2;
        width: 300px;
        height: 60px;
        border-radius: 30px;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #ffffff;

        @media (max-width: 660px) {
          width: 70%;
          font-size: 20px;
          line-height: 26px;
          font-family: 'SFUIText-Regular';
        }
      }

      .btn:hover {
        color: #ffffff;
      }
    }

    .time-line {
      margin: 60px 0 100px 0;
      position: relative;
      width: 100% !important;

      .circles {
        display: flex;
        justify-content: space-between;

        .circle {
          width: 16px;
          height: 16px;
          border-radius: 50px;
          z-index: 2;
          @media (max-width: 660px) {
            width: 12px;
            height: 12px;
            margin-top: 2px;
          }
        }

        .circle-blue {
          background-color: #0040d2;
        }

        .circle-empty {
          background-color: white;
          border: 2px solid #0040d2;
        }

        .circle-dark-gray {
          background-color: #868585;
        }

        .circle-gray {
          background-color: #9c9c9c;
        }
      }

      .line {
        width: calc(100% - 10px);
        height: 3px;
        background-color: #c4c4c4;
        margin: 0 5px;
        position: absolute;
        top: 7px;
      }
    }
  }

  .small-text {
    font-size: 20px;
    line-height: 24px;

    @media (max-width: 660px) {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 860px) {
  .page-content {
    width: 100% !important;
  }

  .one-input-field {
    width: 48% !important;
  }

  .container-image {
    .img {
      margin: 0 5px !important;

      img {
        width: 100% !important;
      }
    }
  }

  .time-line {
    width: 100% !important;
    margin-bottom: 90px !important;
  }

  .line {
    width: calc(100% - 10px) !important;
  }
}
</style>

