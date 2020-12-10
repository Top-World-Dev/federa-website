<template>
  <div class="sellers-guide">
    <div class="block-img">
      <img src="~assets/images/post-closing.png" alt />
    </div>

    <div class="text">
      <span>
        Selling your home is a major milestone, when you’re ready, Federa is ready too.
        <br />Learn how our Smart Listings can help you save thousands!
      </span>
    </div>

    <div class="line"></div>
    <div class="page-content">
      <div class="items" v-for="(element, index) in elements" :key="index">
        <div class="one-item">
          <img class="main-icon" src="~assets/images/money.png" alt />

          <div class="content">
            <div class="title">{{ element.name }}</div>
            <div v-if="!element.link" class="description">{{ element.info }}</div>
            <div v-if="!!element.link" class="description popoqwer">
              <nuxt-link class="content_more" :to="element.url">{{ element.info }}</nuxt-link>
            </div>
          </div>
          <div class="arrow">
            <img src="~assets/images/arrow.png" alt />
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>

    <div class="block-btn">
      <el-button class="blue-btn" type="primary" size="medium" round>Get Started</el-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  name: 'index',
  data() {
    return {
      elements: [
        {
          name: 'Listing Specialist Information',
          info: 'See our Listing Specialists market stats',
          link: true,
          url: '/smartlistings/sellers-guide/listing-specialist-info'
        },
        {
          name: 'Schedule a listing consultation',
          info: 'It’s free with no obligation',
          link: true,
          url: '/smartlistings/sellers-guide/schedule-listing-consultation'
        },
        {
          name: 'Smart Listings Process',
          info: 'Learn more',
          link: true,
          url: '/smartlistings/sellers-guide/smart-listings-process'
        },
        {
          name: 'Recently Sold Smart Listings',
          info: 'See our recently sold Smart Listings',
          link: true,
          url: '/smartlistings/sellers-guide/recently-sold-smart-listings'
        },
        {
          name: "FAQ's",
          info: 'Read our frequently asked questions',
          link: true,
          url: '/smartlistings/sellers-guide/faqs'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sellers-guide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'SFUIText-Regular';
}

.block-img {
  margin: 50px 0 0 0;
  display: flex;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  img {
    margin: auto;
    width: 120px;
  }
}

.text {
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  span {
    font-weight: bold;
    font-size: 26px;
  }
}

.line {
  width: calc(100% + 40px);
  margin: 0 -20px;
  height: 1px;
  background-color: #c4c4c4;
}

.page-content {
  .one-item {
    position: relative;
    margin: 10px 0;
    display: flex;
    flex-direction: row;

    img {
      width: 35px;
      height: 36px;
      margin: auto 0 auto 15px;
    }

    .content {
      margin: 0 0 0 45px;

      .title {
        font-weight: bold;
        font-size: 15px;
        line-height: 35px;
      }

      .description {
        font-size: 14px;
        line-height: 17px;
      }
    }
    .arrow {
      position: absolute;
      right: 25px;
      top: 18px;

      img {
        width: 7px;
        height: 15px;
      }
    }
  }
}

.block-btn {
  margin: 50px;

  .blue-btn {
    border-radius: 30px;
    background-color: #0040d2;
    height: 55px;
    float: right;
    font-size: 20px;
    line-height: 29px;
    font-weight: 700;
    width: 190px;

    @media (max-width: 660px) {
    }
  }
}

@media screen and (max-width: 660px) {
  .block-btn {
    margin: 30px auto 30px auto !important;
  }

  .title {
    font-size: 14px !important;
  }

  .description {
    font-size: 12px !important;
  }

  .main-icon {
    color: #868585 !important;
    margin-left: 5px !important;
  }

  .content {
    margin-left: 20px !important;
  }

  .line {
    display: none;
  }

  br {
    display: none;
  }

  .text span {
    font-size: 16px !important;
    float: left !important;
    text-align: left !important;
  }

  .block-img {
    margin-top: 20px !important;

    img {
      width: 76px;
    }
  }

  .arrow {
    top: 8px !important;
    right: 4px !important;
  }
}

@media screen and (max-width: 370px) {
  .title {
    font-size: 12px !important;
  }

  .description {
    font-size: 10px !important;
  }

  .arrow {
    top: 6px !important;
    right: 4px !important;
  }
}
</style>
