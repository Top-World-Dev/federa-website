<template>
  <div class="requests">
    <div class="header">
      <span class="header__text">
        Hi Sebastian, here are today’s updates
      </span>
    </div>
    <div class="page-content">
      <div class="list-header">
        <div class="text-content">
          <div class="name-text">
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
      <el-row class="table-content__header">
        <div style="display: flex;">
          <el-col :span="1">
          </el-col>
          <el-col :span="5">
            <div class="table-header Name">
              <span>Agent Name</span>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="table-header Date">
              <span>Date Requested</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="table-header Status">
              <span>Status</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="table-header Approve">
              <span>Approve / Reject</span>
            </div>
          </el-col>
        </div>
      </el-row>
      <el-row class="table-content__body">
        <div v-for="(tableData, index) in tableDatas" :key="index">
          <div class="one-item-info">
            <el-col :span="1">
            </el-col>
            <el-col :span="5">
              <div class="table-body Name">
                <div>{{ tableData.name }}</div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="table-body Date">
                <div>{{ tableData.date1 }}</div>
                <div>{{ tableData.date2 }}</div>
                <div>{{ tableData.date3 }}</div>
                <div>{{ tableData.date4 }}</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="table-body Status">
                <div>{{ tableData.status1 }}</div>
                <div class="text2">{{ tableData.status2 }}</div>
              </div>
            </el-col>
            <el-col class="col-approve" :span="5">
              <div class="table-body Approve">
                <img class="finger-top" src="~assets/images/finger-top.png" alt="">
                <img class="finger-down" src="~assets/images/finger-down.png" alt="">
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
.requests {
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
      margin: 20px -20px 30px 80px;
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
          @media(max-width: 375px) {

          }
          @media(max-width: 360px) {
            font-size: 13px;
          }
        }
      }
    }
  }

  .table-content {
    margin-left: 50px;
    @media(max-width: 660px) {
      margin-left: 0px;
    }

    &__header {

      .table-header {
        font-weight: bold;
        font-size: 17px;
        @media (max-width: 660px) {
          font-size: 15px;
        }
        @media (max-width: 375px) {
          font-size: 13px;
        }
      }
    }

    &__body {
      margin-top: 50px;
      margin-bottom: 30px;
      @media (max-width: 375px) {
        margin-top: 30px;
      }

      .one-item-info {
        font-size: 18px;
        display: flex;
        margin: 10px 0px;
        @media (max-width: 375px) {
          font-size: 11px;
        }

        .Date {
          color: #0040D2;
        }
        .Status {
          .text2 {
            color: #0040D2;
          }
        }
        .col-approve {
          display: flex;
          align-items: center;

          .Approve {
            img {
              width: 10%;
              margin-left: 35px;
              @media (max-width: 660px) {
                width: 17%;
              }
              @media (max-width: 375px) {
                margin-left: 12px;
                width: 25%;
              }
            }
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
        activeIndex: '3',
        activeIndex2: '3',
        tableDatas: [
          {
            name: 'Floating Holiday',
            date1: 'August 29, 2019',
            date2: 'Show Details',
            date3: '',
            date4: '',
            status1: '0 of 1 Manager Approvals',
            status2: 'Show Responses',
          },
          {
            name: 'Floating Holiday',
            date1: 'October 03, 2018',
            date2: 'October 04, 2018',
            date3: 'October 05, 2018',
            date4: 'Show Details',
            status1: 'Pending',
            status2: '',
          },
          {
            name: 'Floating Holiday',
            date1: 'July 25, 2018',
            date2: 'Show Details',
            date3: '',
            date4: '',
            status1: 'Approved',
            status2: 'Show Responses',
          },
          {
            name: 'Floating Holiday',
            date1: 'July 20, 2018',
            date2: 'Show Details',
            date3: '',
            date4: '',
            status1: 'Pending',
            status2: '',
          },
          {
            name: 'Floating Holiday',
            date1: 'March 30, 2018',
            date2: 'Show Details',
            date3: '',
            date4: '',
            status1: 'Pending',
            status2: '',
          },
        ],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
