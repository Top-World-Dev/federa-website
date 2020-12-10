<template>
  <div class="sellers-guide">
    <div class="block-img">
      <img src="~assets/images/post-closing.png" alt="">
    </div>

    <div class="text">
    </div>

    <div class="line"></div>
    <div class="page-content">
    </div>
    </div>
</template>

<script>
  export default {
    layout: 'admin',
    name: "index",
    data() {
      return {
        elements: [
          {
            name: "Listing Specialist Information",
            info: "See our Listing Specialists market stats",
            link: false,
          },
          {
            name: "Schedule a listing consultation",
            info: "It’s free with no obligation",
            link: false,
          },
          {
            name: "Smart Listings Process",
            info: "Learn more",
            link: true,
            url: '/url-for-new-page',
          },
          {
            name: "Recently Sold Smart Listings",
            info: "See our recently sold Smart Listings",
            link: false,
          },
          {
            name: "FAQ's",
            info: "Read our frequently asked questions",
            link: false,
          },
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
  }

  .block-img {
    margin: 50px 0 0 0;
    display: flex;
    margin-bottom: 25px;

    @media(max-width: 768px) {
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

    @media(max-width: 768px) {
      margin-bottom: 30px;
    }

    span {
      font-weight: bold;
      font-size: 28px;
    }
  }

  .line {
    width: calc(100% + 40px);
    margin: 0 -20px;
    height: 1px;
    background-color: #9C9C9C;
  }

  .page-content {
    .one-item {
      position: relative;
      margin: 20px 0;
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
          font-size: 18px;
          line-height: 21px;
        }

        .description {
          font-size: 14px;
          line-height: 17px;
        }
      }
      .arrow {
        position: absolute;
        right: 40px;
        top: 15px;

        img {
          width: 10px;
          height: 20px;
        }
      }
    }
  }

  .block-btn {
    margin: 50px;

    .blue-btn {
      border-radius: 30px;
      background-color: #0040D2;
      height: 50px;
      float: right;
      font-size: 20px;
      line-height: 29px;
      font-weight: 700;
      width: 220px;
  
      @media(max-width: 660px) {

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
