<template>
  <div class="messages">
    <div class="header">
      <span class="header__text">
        Hi Sebastian, here are today’s updates
      </span>
    </div>
    <div class="page-content">
      <div class="list-header">
        <div class="text-content-1">
          <div class="name-text-1">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><a href="/smartlistings/seller-dashboard/tasks">Tasks</a></el-menu-item>
              <el-menu-item index="2"><a href="/smartlistings/seller-dashboard/messages">Messages</a></el-menu-item>
              <el-menu-item index="3"><a href="/smartlistings/seller-dashboard/showing-request">Showing Requests</a></el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
    </div>
    <div class="table-content">
      <el-row class="table-content__body">
        <div v-for="(element, index) in elements" :key="index">
          <div class="one-item-info">
            <el-col class="field field-image" :span="1">
              <div class="grid-content image">
                <img src="~assets/images/gray-user.png" alt="">
              </div>
            </el-col>
            <el-col class="field field-group" :span="16">
              <el-col class="field field-name" :span="5">
                <div class="grid-content text-name">
                  <div class="name">{{ element.name }}</div>
                </div>
              </el-col>
              <el-col class="field field-info" :span="18">
                <div class="grid-content text-infos">
                  <div class="info">{{ element.info }}</div>
                </div>
              </el-col>
            </el-col>
            <el-col class="field field-time" :span="3">
              <div class="grid-content text-time">
                <div class="time">{{ element.time }}</div>
              </div>
            </el-col>
            <el-col class="field field-button" :span="4">
              <div class="grid-content button">
                <el-button type="warning" icon="el-icon-star-off"></el-button>
                <el-button type="danger" icon="el-icon-delete"></el-button>
              </div>
            </el-col>
          </div>
          <div class="line"></div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
.messages {
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
  
  .page-content {
    margin-top: -50px;
    
    .list-header {
      border: 1px solid #CBCBCB;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      background-color: white;
      border-right: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 20px -20px 20px 80px;
      position: relative;
      @media (max-width: 660px) {
        margin: 20px -20px 20px 10px;
      }

      .el-menu--horizontal {
        border-right: none;
        border-radius: 20px;
        margin-left: 15px;

        .el-menu-item {
          font-size: 18px;
          font-weight: bold;

          &.is-active {
            border-bottom-color:#b3b3b3;
            border: none !important;
            a:after {
              content: '';
              left: 50%;
              position: absolute;
              transform: translate(-50%,0);
              width: 50px;
              top: 85%;
              border-bottom: 3px solid;
            }
          }
          @media(max-width: 915px) {
            font-size: 17px;
          }
          @media(max-width: 660px) {
            font-size: 14px;
            padding: 0 10px 0 10px;
          }
          @media(max-width: 360px) {
            font-size: 13px;
          }
        }
      }
    }
  }

  .table-content {
    &__body {
      margin: 0px 100px;
      @media (max-width: 1345px) {
        margin: 0 50px;
      }
      @media (max-width: 1245px) {
        margin: 0 45px;
      }
      @media (max-width: 1210px) {
        margin: 0 20px;
      }
      @media (max-width: 1185px) {
        margin: 0 15px;
      }
      @media (max-width: 660px) {
        margin: 0px 0px;
      }

      .one-item-info {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;

        .field {
          float: initial;
          display: inline-block;
          align-items: center;
          vertical-align: middle;
        }

        .field-image {
          @media (max-width: 660px) {
            width: 12.5%;
          }
          @media (max-width: 550px) {
            width: 16.66667%;
          }
          @media (max-width: 450px) {
            width: 25%;
          }
        }
        .field-name {
          // vertical-align: top;
          @media (max-width: 660px) {
            width: 60%;
          }
          @media (max-width: 375px) {
            width: 40%;
          }
        }       
        .field-info {
          @media (max-width: 660px) {
            display: block;
            width: 100%;
          }
        } 
        .field-time {
          @media (max-width: 660px) {
            width: 25%;
          }
        }
        .field-button {
          @media (max-width: 660px) {
            width: 4.16667%;
          }
        }

        .space-col {
          @media (max-width: 660px) {
            display: none;
          }
        }

        .image {
          img {
            width: 100%;
            @media (max-width: 1200px) {
              width: 60%;
            }
            @media (max-width: 1000px) {
              width: 70%;
            }
            @media (max-width: 780px) {
              width: 90%;
            }
            @media (max-width: 375px) {
              width: 100%;
            }
          }
        }

        .text-name {
          margin-left: 15px;
          .name {

          }
        }

        .text-infos {
          margin-left: 15px;
          .info {

          }
        }

        .text-time {
          margin-left: 15px;
          .time {
            color: #868585;
          }
        }

        .button {
          @media (max-width: 1350px) {

          }
          .el-button {
            float: right !important;
            @media (max-width: 660px) {
              display: none;
            }
          }
        }
      }

      .line {
        height: 1px;
        margin: 0 -115px;
        background-color: #CBCBCB;
      }
    }
  }
}
</style>
<script>
  export default {
    layout: 'admin',
    name: "index",
    data() {
      return {
        activeIndex: '2',
        activeIndex2: '2',
        elements: [
          {
            name: 'User 1',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            time: '24min ago'
          },
          {
            name: 'User 2',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            time: '10:50 AM'
          },
          {
            name: 'User 3',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            time: '2 days ago'
          },
          {
            name: "User 4",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            time: '24min ago'
          },
          {
            name: "User 5",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            time: '10:50 AM'
          },
          {
            name: "User 6",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            time: '2 days ago'
          },
        ],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  };
</script>