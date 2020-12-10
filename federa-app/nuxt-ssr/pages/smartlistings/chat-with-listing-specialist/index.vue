<template>
  <div class="chat-listing">
    <div class="header">
      <img
        class="userlist-move-right"
        src="~assets/images/arrow-right.png"
        alt
        @click="showUserList"
      />
      <img
        class="userlist-move-left"
        src="~assets/images/arrow-left.png"
        alt
        @click="hiddenUserList"
      />
      <img class="phone-icon" src="~assets/images/chat-phone.png" alt />
      <img class="video-icon" src="~assets/images/chat-video.png" alt />
      <span class="header__text">Chat with Listing Specialist</span>
      <img class="header__img" src="~assets/images/chat-Sebastian.png" />
    </div>
    <div class="mobile-page-header">
      <div class="one-item-info offerlist-header">
        <div class="text-content">
          <div class="name-text">
            <span class="text text__position">Sebastian Costantino</span>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div style="height: 100%;">
        <div class="chat-group">
          <div class="chat-group__mode">
            <el-input placeholder="Type something" v-model="inputName">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <div class="chat-group__userlist">
            <el-menu @open="handleOpen" @close="handleClose">
              <el-menu-item v-for="(user, index) in users" :key="index">
                <div class="userlist-oneitem">
                  <div class="user-image">
                    <img :src="user.image" />
                  </div>
                  <div class="user-info">
                    <p class="user-info__name">{{ user.name }}</p>
                    <p class="user-info__recent-message">{{ user.recent }}</p>
                  </div>
                </div>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="chat-content">
          <div class="chat-content__message">
            <div class="me-info">
              <img src="~assets/images/chat-Lymaris.png" />
              <span>Lymaris Hosage</span>
            </div>
            <div class="messages">
              <div class="message" v-for="(message, index) in messages" :key="index">
                <div
                  class="each-message"
                  :class="{
                    'respond-message': message.type,
                    'sent-message': !message.type
                  }"
                >
                  <p class="time">{{ message.time }}</p>
                  <div class="content">{{ message.content }}</div>
                </div>
              </div>
            </div>
            <div class="unread-messages">
              <div class="line">2 Unread Messages</div>
              <div class="message" v-for="(message, index) in unreads" :key="index">
                <div
                  class="each-message"
                  :class="{
                    'respond-message': message.type,
                    'sent-message': !message.type
                  }"
                >
                  <p class="time">{{ message.time }}</p>
                  <div class="content">{{ message.content }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-content__input">
            <el-input placeholder="Type a message" v-model="message">
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
              <i slot="suffix" class="el-input__icon el-icon-share"></i>
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  name: 'index',
  components: {},
  mounted() {},
  methods: {
    showUserList() {
      $('.userlist-move-right').css({ display: 'none' })
      $('.userlist-move-left').css({ display: 'block' })
      $('.chat-group').css({ display: 'inline-block' })
      $('.chat-content').css({ width: 'calc(100% - 258px)' })
    },
    hiddenUserList() {
      $('.userlist-move-right').css({ display: 'block' })
      $('.userlist-move-left').css({ display: 'none' })
      $('.chat-group').css({ display: 'none' })
      $('.chat-content').css({ width: '100%' })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  data() {
    return {
      flag: false,
      activeIndex: '1',
      activeIndex2: '2',
      message: '',
      inputName: '',
      users: [
        {
          image: require('../../../assets/images/chat-Lymaris.png'),
          name: 'Lymaris Hosage',
          recent: 'Hello, Nice to meet you.'
        },
        {
          image: require('../../../assets/images/chat-Kristina.png'),
          name: 'Kristina Burroughs',
          recent: 'Hello, Nice to meet you.'
        }
      ],
      messages: [
        {
          time: '10:20pm',
          content: 'Have you reached out to those guys yet?',
          type: true
        },
        {
          time: '10:30pm',
          content:
            "I can't believe you fell off a bike...while you were on a date. Bwah!",
          type: false
        },
        {
          time: '10:40pm',
          content:
            "I can't believe you fell off a bike...while you were on a date. Bwah!",
          type: false
        },
        {
          time: '10:45pm',
          content:
            "I can't believe you fell off a bike...while you were on a date. Bwah!",
          type: false
        }
      ],
      unreads: [
        {
          time: '11:00pm',
          content: 'Yeah I do.',
          type: true
        },
        {
          time: '11:10pm',
          content: 'Makes sense tbh',
          type: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-listing {
  font-family: 'SFUIText-Regular';

  .header {
    z-index: 0;
    height: 162px;
    background-image: url('~assets/images/background-blue-image.png');
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-family: 'SFUIText-Regular';
    margin-left: -20px;
    margin-top: -20px;
    margin-right: -20px;
    position: relative;

    .userlist-move-right {
      display: none;

      @media (min-width: 660px) {
        display: none !important;
      }
      @media (max-width: 660px) {
        display: block;
        position: absolute;
        left: 40px;
        top: 65px;
      }
    }
    .userlist-move-left {
      display: none;

      @media (min-width: 660px) {
        display: none !important;
      }

      @media (max-width: 660px) {
        position: absolute;
        left: 40px;
        top: 65px;
      }
    }

    .phone-icon {
      display: none;

      @media (max-width: 660px) {
        display: block;
        position: absolute;
        right: 70px;
        top: 55px;
      }
    }

    .video-icon {
      display: none;
      @media (max-width: 660px) {
        display: block;
        position: absolute;
        right: 20px;
        top: 57px;
      }
    }

    &__text {
      color: white;
      font-weight: bold;
      font-size: 32px;
      line-height: 38px;
      vertical-align: center;
      text-align: center;
      padding: 0;
      letter-spacing: -0.24px;

      @media (max-width: 660px) {
        font-size: 24px;
        display: none;
      }
    }

    &__img {
      display: none;
      @media (max-width: 660px) {
        display: block;
      }
    }
  }

  .mobile-page-header {
    margin-top: -50px;
    display: none;
    @media (max-width: 660px) {
      display: block;
    }

    .one-item-info {
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
        flex-direction: row;

        .name-text {
          .text {
            font-size: 22px;
            line-height: 26px;
            letter-spacing: -0.24px;
            font-weight: bold;
            font-family: 'SFUIText-Regular';
            display: block;

            &__position {
              padding: 15px;
              @media (max-width: 660px) {
                padding-left: 0px;
              }
            }
          }
        }
      }
    }
  }

  .page-content {
    height: calc(100vh - 260px);

    .chat-group {
      width: 300px;
      height: 100%;
      border-right: 1px solid #ddd;
      display: inline-block;
      vertical-align: top;
      @media (min-width: 660px) {
        display: inline-block !important;
      }
      @media (max-width: 660px) {
        display: none;
        width: 254px;
      }

      &__mode {
        margin-top: 20px;
        padding: 10px;

        .el-menu--horizontal {
          border: none;
          margin-left: 10px;

          .el-menu-item {
            &.is-active {
              border: none !important;

              a:after {
                content: '';
                left: 50%;
                position: absolute;
                transform: translate(-50%, 0);
                width: 20px;
                top: 75%;
                border-bottom: 2px solid;
              }
            }
          }
        }
      }

      &__userlist {
        border-bottom: 1px solid #c4c4c4;
        margin-left: -20px;

        .el-menu {
          border: none;
          .el-menu-item {
            padding-left: 0px !important;

            &.is-active {
              background-color: #c7edfc !important;
              .user-info__name {
                color: #000 !important;
              }
              .user-info__recent-message {
                color: #868585 !important;
              }
            }

            .userlist-oneitem {
              margin-left: 20px;

              .user-image {
                display: inline-block;
                img {
                  width: 80%;
                }
              }

              .user-info {
                display: inline-block;
                &__name {
                  font-size: 15px;
                  margin-bottom: 0px;
                  color: #0040d2;
                }
                &__recent-message {
                  font-size: 12px;
                  color: #000;
                }
              }
            }
          }
        }
      }
    }

    .chat-content {
      display: inline-block;
      width: calc(100% - 304px);
      height: 100%;
      @media (min-width: 660px) {
        width: calc(100% - 304px) !important;
      }
      @media (max-width: 660px) {
        width: 100%;
      }

      &__message {
        height: 93%;
        overflow-y: auto;
        padding-right: 10px;
        margin-right: -20px;

        .me-info {
          padding: 20px;

          img {
            width: 7%;
          }
          span {
            font-weight: bold;
          }

          @media (max-width: 660px) {
            display: none;
          }
        }

        .messages {
          padding-left: 20px;
          height: 60%;
          @media (max-width: 660px) {
            padding-left: 0px;
          }

          .message {
            .each-message {
              width: 55%;
              margin-bottom: 15px;

              &.sent-message {
                float: right;
                text-align: right;
                .content {
                  display: inline-block;
                  background-color: #dbf4fd;
                  padding: 10px;
                  border-radius: 10px;
                  text-align: left;
                  border-bottom-right-radius: 0px;
                }
              }
              &.respond-message {
                float: left;
                text-align: left;
                .content {
                  background-color: #f2f6f9;
                  display: inline-block;
                  border-radius: 10px;
                  padding: 10px;
                  border-top-left-radius: 0px;
                }
              }

              .time {
                font-size: 13px;
                margin-bottom: 0px;
              }
            }
          }
        }

        .unread-messages {
          padding-left: 20px;
          height: 20%;
          @media (max-width: 660px) {
            padding-left: 0px;
          }

          .line {
            margin-top: 20px;
            margin-bottom: 20px;
            text-align: center;
            width: 100%;
            display: flex;
            justify-content: center;
            color: #0040d2;
            @media (max-width: 660px) {
              font-size: 10px;
            }
          }

          .line::before {
            content: '---------';
            margin-right: 15px;
          }

          .line::after {
            content: '---------';
            margin-left: 15px;
          }

          .message {
            .each-message {
              width: 55%;
              margin-bottom: 15px;

              &.sent-message {
                float: right;
                text-align: right;
                .content {
                  display: inline-block;
                  background-color: #dbf4fd;
                  padding: 10px;
                  border-radius: 10px;
                  text-align: left;
                  border-bottom-right-radius: 0px;
                }
              }
              &.respond-message {
                float: left;
                text-align: left;
                .content {
                  background-color: #f2f6f9;
                  display: inline-block;
                  border-radius: 10px;
                  padding: 10px;
                  border-top-left-radius: 0px;
                }
              }

              .time {
                font-size: 13px;
                margin-bottom: 0px;
              }
            }
          }
        }
      }

      &__input {
        width: 70%;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
  }
}
</style>
