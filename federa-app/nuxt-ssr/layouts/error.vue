<template>
  <div style="background:#f0f2f5;margin-top: -20px;">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" :src="img_404" alt="404">
        <img class="pic-404__child left" :src="img_404_cloud" alt="404">
        <img class="pic-404__child mid" :src="img_404_cloud" alt="404">
        <img class="pic-404__child right" :src="img_404_cloud" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">{{ message }}</div>
        <div class="bullshit__headline">
          <nuxt-link to="/">Back to home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import img_404 from '@/assets/404_images/404.png'
 import img_404_cloud from '@/assets/404_images/404_cloud.png'

 export default {
   data() {
     return {
       img_404,
       img_404_cloud
     }
   },
   computed: {
     message() {
       return 'Page Not Found'
     }
   }
 }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http404 {
  position: relative;
  overflow: hidden;
  width: 1200px;
  padding: 0 100px;
  margin: 20px auto 60px;
  .pic-404 {
    position: relative;
    float: left;
    overflow: hidden;
    width: 600px;
    padding: 150px 0;
    &__parent {
      width: 100%;
    }
    &__child {
      position: absolute;
      &.left {
        top: 17px;
        left: 220px;
        width: 80px;
        animation-delay: 1s;
        animation-duration: 2s;
        animation-name: cloudLeft;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        opacity: 0;
      }
      &.mid {
        top: 10px;
        left: 420px;
        width: 46px;
        animation-delay: 1.2s;
        animation-duration: 2s;
        animation-name: cloudMid;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        opacity: 0;
      }
      &.right {
        top: 100px;
        left: 500px;
        width: 62px;
        animation-delay: 1s;
        animation-duration: 2s;
        animation-name: cloudRight;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        opacity: 0;
      }
      @keyframes cloudLeft {
        0% {
          top: 17px;
          left: 220px;
          opacity: 0;
        }
        20% {
          top: 33px;
          left: 188px;
          opacity: 1;
        }
        80% {
          top: 81px;
          left: 92px;
          opacity: 1;
        }
        100% {
          top: 97px;
          left: 60px;
          opacity: 0;
        }
      }
      @keyframes cloudMid {
        0% {
          top: 10px;
          left: 420px;
          opacity: 0;
        }
        20% {
          top: 40px;
          left: 360px;
          opacity: 1;
        }
        70% {
          top: 130px;
          left: 180px;
          opacity: 1;
        }
        100% {
          top: 160px;
          left: 120px;
          opacity: 0;
        }
      }
      @keyframes cloudRight {
        0% {
          top: 100px;
          left: 500px;
          opacity: 0;
        }
        20% {
          top: 120px;
          left: 460px;
          opacity: 1;
        }
        80% {
          top: 180px;
          left: 340px;
          opacity: 1;
        }
        100% {
          top: 200px;
          left: 300px;
          opacity: 0;
        }
      }
    }
  }
  .bullshit {
    position: relative;
    float: left;
    overflow: hidden;
    width: 300px;
    padding: 150px 0;
    &__oops {
      margin-bottom: 20px;
      color: #1482f0;
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      animation-duration: .5s;
      animation-name: slideUp;
      animation-fill-mode: forwards;
      opacity: 0;
    }
    &__headline {
      margin-bottom: 10px;
      color: gray;
      font-size: 16px;
      line-height: 24px;
      animation-delay: .1s;
      animation-duration: .5s;
      animation-name: slideUp;
      animation-fill-mode: forwards;
      opacity: 0;
      a {
        color: #000;
        border-bottom: 1px solid #000;
      }
      a:hover,
      a:focus {
        color: gray;
        border-bottom: 1px solid gray;
      }
    }
    &__info {
      margin-bottom: 30px;
      color: grey;
      font-size: 13px;
      line-height: 21px;
      animation-delay: .2s;
      animation-duration: .5s;
      animation-name: slideUp;
      animation-fill-mode: forwards;
      opacity: 0;
    }
    &__return-home {
      float: left;
      display: block;
      width: 110px;
      height: 36px;
      color: #fff;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
      background: #1482f0;
      border-radius: 100px;
      animation-delay: .3s;
      animation-duration: .5s;
      animation-name: slideUp;
      animation-fill-mode: forwards;
      cursor: pointer;
      opacity: 0;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

</style>
