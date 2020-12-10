<template>
  <div class="seller-dashboard">
    <div class="header">
      <div class="header__text">
        <span>
          <p class="header__text__1">Hi Sebastian</p>
        </span>
      </div>
    </div>
    <div class="page-content">
      <div class="one-item-info list-header">
        <div class="text-content">
          <div class="name-text">
            <div class="text1">08</div>
            <div class="text2">Tasks</div>
          </div>
          <div class="name-text">
            <div class="text1">02</div>
            <div class="text2">Inbox</div>
          </div>
          <div class="name-text">
            <div class="text1">91</div>
            <div class="text2">Showing Requests</div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <el-row class="content-body__first__text">
          <span>Today's showing events</span>
        </el-row>
        <el-row class="content-body__second__text">
          <span>Wed, July 08, 2020</span>
        </el-row>
        <el-row class="content-body__info__group">
          <div class="content-body__info__group__1">
            <img class="gray-clock" src="~assets/images/gray-clock.png" alt />
            <span class="time-text">4 - 04:30 PM</span>
          </div>
          <div class="content-body__info__group__2">
            <span class="agent-name">Showing Agent: Name</span>
          </div>
          <div class="content-body__info__group__3">
            <span class="status-text">Status: Confirmed</span>
          </div>
        </el-row>
        <el-row class="content-body__info__group">
          <div class="content-body__info__group__1">
            <img class="gray-clock" src="~assets/images/gray-clock.png" alt />
            <span class="time-text">4 - 04:30 PM</span>
          </div>
          <div class="content-body__info__group__2">
            <span class="agent-name">Showing Agent: Name</span>
          </div>
          <div class="content-body__info__group__3">
            <span class="status-text">Status: Confirmed</span>
          </div>
        </el-row>
        <el-row class="img-button-group group-1">
          <el-col class="img-piece">
            <div class="img-button-group__piece" @click="goToTimeLinePage()">
              <div class="button-image">
                <img class="button-image__image" src="~assets/images/blue-clock.png" alt />
              </div>
              <div class="button-text">
                <span class="button-text__text">Listing Timeline</span>
              </div>
            </div>
          </el-col>
          <el-col class="img-piece">
            <div class="img-button-group__piece" @click="goToCalendarPage()">
              <div class="button-image">
                <img class="button-image__image" src="~assets/images/blue-calendar.png" alt />
              </div>
              <div class="button-text">
                <span class="button-text__text">My Calendar</span>
              </div>
            </div>
          </el-col>
          <el-col class="img-piece">
            <div class="img-button-group__piece" @click="goToTasksPage()">
              <div class="button-image">
                <img class="button-image__image" src="~assets/images/blue-check.png" alt />
              </div>
              <div class="button-text">
                <span class="button-text__text">Tasks</span>
              </div>
            </div>
          </el-col>
          <el-col class="img-piece">
            <div class="img-button-group__piece" @click="goToShowingFeedbackPage()">
              <div class="button-image">
                <img class="button-image__image" src="~assets/images/blue-feedback.png" alt />
              </div>
              <div class="button-text">
                <span class="button-text__text">Showing Feedback</span>
              </div>
            </div>
          </el-col>
          <el-col class="img-piece">
            <div class="img-button-group__piece" @click="goToOfferPage()">
              <div class="button-image">
                <img class="button-image__image" src="~assets/images/blue-star.png" alt />
              </div>
              <div class="button-text">
                <span class="button-text__text">Offer</span>
              </div>
            </div>
          </el-col>
          <el-col class="img-piece">
            <div class="img-button-group__piece" @click="goToChartPage()">
              <div class="button-image">
                <img class="button-image__image" src="~assets/images/blue-chart.png" alt />
              </div>
              <div class="button-text">
                <span class="button-text__text">Chart</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  name: 'index',
  methods: {
    goToTimeLinePage() {
      this.$router.push({
        path: '/smartlistings/seller-dashboard/listing-timeline'
      })
    },
    goToCalendarPage() {
      this.$router.push({
        path: '/smartlistings/seller-dashboard/calendar'
      })
    },
    goToTasksPage() {
      this.$router.push({
        path: '/smartlistings/seller-dashboard/tasks'
      })
    },
    goToShowingFeedbackPage() {
      this.$router.push({
        path: '/smartlistings/seller-dashboard/showing-request'
      })
    },
    goToOfferPage() {
      this.$router.push({
        path: '/smartlistings/seller-dashboard/offers'
      })
    },
    goToChartPage() {
      this.$router.push({
        path: '/smartlistings/chat-with-listing-specialist'
      })
    }
  },
  data() {
    return {
      elements: [
        {
          name: 'Listing Timeline',
          info: 'See our Listing Specialists market stats',
          link: false
        },
        {
          name: 'Tasks',
          info: 'It’s free with no obligation',
          link: false
        },
        {
          name: 'Messages',
          info: 'Learn more',
          link: true,
          url: '/url-for-new-page'
        },
        {
          name: 'Showing Request',
          info: 'See our recently sold Smart Listings',
          link: false
        },
        {
          name: 'Offers',
          info: 'Read our frequently asked questions',
          link: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.seller-dashboard {
  font-family: 'SFUIText-Regular';

  .header {
    height: 162px;
    background-image: url('~assets/images/background-blue-image.png');
    padding: 0 20px;
    margin-left: -20px;
    margin-top: -20px;
    margin-right: -20px;

    @media (max-width: 375px) {
      height: 160px;
    }

    &__text {
      color: white;
      letter-spacing: -0.24px;

      @media (max-width: 660px) {
      }

      &__1 {
        font-weight: bold;
        font-size: 35px;
        padding-top: 40px;
        text-align: center;
        @media (max-width: 660px) {
          font-size: 30px;
        }
        @media (max-width: 375px) {
          font-size: 28px;
        }
      }
    }
  }

  .page-content {
    margin-top: -50px;

    .list-header {
      border: 1px solid #cbcbcb;
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

      .text-content {
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 5px 5px;

        .name-text {
          margin: 0 0 -4px 0;
          width: 33%;
          .text1 {
            font-size: 24px;
            line-height: 26px;
            letter-spacing: -0.24px;
            font-weight: bold;
            font-family: 'SFUIText-Regular';
            display: block;
            color: #0040d2;
            @media (min-width: 1980px) {
              font-size: 33px;
            }
            @media (max-width: 375px) {
              font-size: 20px;
            }
            @media (max-width: 360px) {
              font-size: 19px;
            }
          }
          .text2 {
            font-size: 16px;
            color: #868585;
            margin-top: 5px;
            @media (min-width: 1980px) {
              font-size: 30px;
            }
            @media (max-width: 375px) {
              font-size: 12px;
            }
            @media (max-width: 360px) {
              font-size: 12px;
            }
          }
        }
      }
    }

    .content-body {
      margin-top: 50px;

      @media (max-width: 660px) {
        margin-left: 0px;
      }

      &__first__text {
        margin-bottom: 10px;
        color: #0040d2;
        font-size: 20px;
        margin-left: 40px;
        @media (max-width: 375px) {
          font-size: 17px;
        }
      }
      &__second__text {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 30px;
        margin-left: 40px;
        @media (max-width: 375px) {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
      &__info__group {
        border: 1px solid #868585;
        padding: 15px 40px;
        border-radius: 10px;
        width: 80%;
        margin: 0 auto 20px;
        @media (min-width: 1980px) {
          font-size: 28px;
        }
        @media (max-width: 375px) {
          padding: 15px 25px;
        }

        &__1 {
          // margin-bottom: 10px;

          .gray-clock {
            width: 4%;
            @media (min-width: 1400px) {
              width: 2%;
            }

            @media (max-width: 375px) {
              width: 8%;
            }
          }
          .time-text {
            margin-left: 10px;
            color: #868585;
            vertical-align: middle;
            font-weight: bold;
          }
        }
        &__2 {
          // margin-bottom: 5px;

          .agent-name {
            color: #0040d2;
            font-weight: bold;
          }
        }
        &__3 {
          .status-text {
            color: #868585;
            vertical-align: middle;
          }
          .status-text::before {
            display: inline-block;
            content: ' ';
            width: 8px;
            height: 8px;
            background-color: #0000ff;
            left: -60px;
            border: solid 1px blue;
            border-radius: 30px;
            margin-left: 6px;
            margin-right: 15px;
          }
        }
      }
      .img-button-group {
        width: 91%;
        margin: 100px auto 0px;
        @media (max-width: 660px) {
          width: 100%;
          margin: 30px auto 50px;
        }
        @media (max-width: 375px) {
          width: 100%;
          margin: 25px auto 50px;
        }

        .img-piece {
          width: 33%;
          @media (max-width: 1340px) {
            width: 49%;
          }

          display: inline-block;
          float: initial;
          vertical-align: top;
        }

        &__piece {
          text-align: center;
          padding: 40px 0px;
          border: 1px solid #868585;
          border-radius: 15px;
          margin: 0px 70px 35px 70px;
          height: 180px;
          cursor: pointer;
          @media (min-width: 1980px) {
            margin: 0px 120px 35px 120px;
          }

          @media (max-width: 660px) {
            border: none;
            border-radius: 0px;
            margin: 0px 20px 20px 20px;
            border-bottom: 3px solid #0040d2;
            height: 170px;
          }
          @media (max-width: 375px) {
            margin: 0px 10px 20px 10px;
            height: 130px;
            padding: 25px 20px;
            height: 145px;
          }

          .button-image {
            height: 50%;
            @media (max-width: 1400px) {
              margin-top: 15px;
            }

            &__image {
              width: 20%;
              @media (min-width: 1980px) {
                // width: 15%;
              }
              @media (max-width: 660px) {
                width: 25%;
              }
              @media (max-width: 375px) {
                width: 30%;
              }
              @media (max-width: 1024px) {
                width: 40%;
              }
            }
          }
          .button-text {
            height: 50%;
            margin-top: 40px;
            font-weight: bold;
            font-size: 20px;
            display: flex;
            justify-content: center;

            @media (min-width: 1980px) {
              font-size: 25px;
            }
            @media (max-width: 1400px) {
              margin-top: 15px;
              font-size: 14px;
            }
            @media (max-width: 660px) {
              margin-top: 25px;
              font-size: 17px;
            }
            @media (max-width: 375px) {
              margin-top: 21px;
              font-size: 11px;
            }
            @media (max-width: 360px) {
              font-size: 10px;
            }

            &__text {
            }
          }
        }
      }
      .group-2 {
        margin: 10px auto 50px;
      }
    }
  }
}
</style>
