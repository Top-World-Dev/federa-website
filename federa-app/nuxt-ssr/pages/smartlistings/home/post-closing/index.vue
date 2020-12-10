<template>
  <div class="post-closing-page">
    <admin-header>
      <span class="header-text">
        $2000
      </span>
      <p class="header-text small-text">
        Post-Closing
      </p>
    </admin-header>


    <div class="page-content">
      <div class="block-image">
        <img src="~assets/images/post-closing.png" alt="">
      </div>

      <div class="text-with-checkbox">
        <input type="checkbox" class="checkbox">
        <span class="text">
          By selecting this option, you agree to the Terms and Conditions.
        </span>
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
import { AdminHeader } from '@Components';

  export default {
    components: {
      AdminHeader,
    },
    layout: 'admin',
    name: "index"
  }
</script>

<style lang="scss" scoped>
  .header {
    z-index: 0;
    width: calc(100% + 40px);
    height: 162px;
    background-image:  url('~assets/images/background-blue-image.png');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0px;
    margin-left: -20px;
    margin-top: -20px;
    margin-right: -20px;


    .header-text {
      font-size: 32px;
      color: white;
      font-weight: bold;
      vertical-align: center;
      text-align: center;
      margin-bottom: 10px;
      
      @media(max-width: 660px) {
        font-size: 24px;
      }
  
    }
    .small-text {
      font-size: 20px;
      font-weight: 400;

      @media(max-width: 660px) {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .page-container {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .block-image {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;
  
      @media(max-width: 660px) {
        margin-bottom: 30px;
      }

      img {
        width: 100px;
        margin-top: 0px;
  
        @media(max-width: 660px) {
          margin-top: 0;
        }
      }
    }

    .text-with-checkbox {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 60px;
      font-family: 'SFUIText-Regular';
  
      @media(max-width: 660px) {
        margin-bottom: 30px;
      }
      
      .checkbox {
        margin: 5px 15px auto 15px;
      }

      .text {
        font-size: 16px;
        font-weight: bold;
      }
    }

    .button {
      margin-top: 60px;
      display: flex;
      justify-content: center;

      .btn {
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        background-color: #0040D2;
        width: 300px;
        height: 50px;
        border-radius: 50px;
        color: #ffffff;
        font-family: 'SFUIText-Regular';
  
        @media(max-width: 660px) {
          width: 70%;
          font-size: 16px;
          line-height: 26px;
        }
      }
    }

    .time-line {
      width: 100%;
      max-width: 500px;
      margin: 100px auto 100px auto;
      position: relative;

      .circles {
        display: flex;
        justify-content: space-between;

        .circle {
          width: 16px;
          height: 16px;
          border-radius: 50px;
          z-index: 2;
          @media(max-width: 660px){
            width: 12px;
            height: 12px;
            margin-top: 2px;
          }
        }

        .circle-blue {
          background-color: #0040D2;
        }

        .circle-empty {
          background-color: white;
          border: 2px solid #0040D2;
        }

        .circle-dark-gray {
          background-color: #868585;
        }

        .circle-gray {
          background-color: #9C9C9C;
        }
      }


      .line {
        width: 490px;
        height: 3px;
        background-color: #C4C4C4;
        margin: 0 5px;
        position: absolute;
        top: 7px;
      }
    }

  }

  @media screen and (max-width: 860px) {
    .time-line {
      width: 100% !important;
      margin-bottom: 80px !important;
    }

    .line {
      width: calc(100% - 10px) !important;
    }
    
    .button {
      margin-top: 0 !important;
    }
  }

</style>
