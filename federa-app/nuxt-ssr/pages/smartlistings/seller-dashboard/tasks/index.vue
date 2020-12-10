<template>
  <div class="tasks">
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
            <el-col class="field space-col" :span="2">
            </el-col>
            <el-col class="field" :span="1">
              <div class="grid-content image">
                <img src="~assets/images/blue-check.png" alt="">
              </div>
            </el-col>
            <el-col class="field field-text" :span="22">
              <div class="grid-content text">
                <div class="text1">{{ element.name }}</div>
                <div class="text2">{{ element.info }}</div>
              </div>
            </el-col>
            <el-col class="field" :span="2">
              <div class="grid-content button">
                <el-button type="primary">30%</el-button>
              </div>
            </el-col>
            <el-col class="field space-col" :span="1">
            </el-col>
          </div>
          <div class="line"></div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
.tasks {
  font-family: 'SFUIText-Regular';

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
          @media(max-width: 660px) {
            font-size: 15px;
            padding: 0 10px 0 10px;
          }
          @media(max-width: 360px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .table-content {
    &__body {

      .one-item-info {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-right: 10px;

        .field {
          float: initial;
          display: inline-block;
        }

        .field-text {
          @media (max-width: 375px) {
                width: 79.16667% !important;
          }
        }

        .space-col {
          @media (max-width: 660px) {
            display: none;
          }
        }

        .image {
          img {
            width: 70%;
            @media (max-width: 1200px) {
              width: 90%;
            }
            @media (max-width: 1000px) {
              width: 100%;
            }
            @media (max-width: 780px) {
              width: 90%;
            }
            @media (max-width: 375px) {
              width: 160%;
            }
          }
        }

        .text {
            margin-left: 15px;
          .text1 {
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.24px;
            font-weight: bold;
            font-family: 'SFUIText-Regular';
            @media (max-width: 660px) {
              font-size: 15px;
            }
          }
          .text2 {
            letter-spacing: -0.24px;
            font-size: 14px;
            line-height: 26px;
            @media (max-width: 660px) {
              font-size: 12px;
            }
          }
        }

        .button {
          .el-button {
            background: linear-gradient(to right, #0015ff, #6e94c3);
            border: 1px solid #868585;
            border-radius: 50px;
          }
        }
      }

      .line {
        height: 1px;
        margin: 0 -20px;
        background-color: #CBCBCB;
        margin-top: 10px;
        margin-left: -70px;
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
        activeIndex: '1',
        activeIndex2: '1',
        elements: [
          {
            name: 'Listing Specialist Information',
            info: 'See our Listing Specialists market stats'
          },
          {
            name: 'Schedule a listing consultation',
            info: "It's free with no obligation"
          },
          {
            name: 'Smart Listings Process',
            info: 'Learn more'
          },
          {
            name: "Recently Sold Smart Listings",
            info: 'See our recently sold Smart Listings'
          },
        ],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      actionToClick() {

      },
    }
  };
</script>
