<template>
  <div>
    <div :class="'search-property__' + pageClass">
      <div :class="'search-property__' + pageClass + '__container'">
        <!-- <el-image
          style="width: 200px;height: 150px;margin-left: auto;margin-right: auto"
          :src="siteLogo"
          fit="contain"
        ></el-image>-->
        <h1 class="main-title title-black">Freedom to Live Anywhere</h1>
        <client-only>
          <search-with-autocomplete
            style="max-width: 500px; margin: 40px auto 0;"
            :value="searchForm.searchKey"
            :onInput="onInput"
            :onSubmit="onSubmit"
          />
        </client-only>
        <div class="form-group2" style="padding: 2px; margin-top: 10px">
          <div
            style="display: flex; justify-content: center; align-items: center; margin: 0 -15px"
          >
            <button @click.prevent="onSubmit" class="link-button white fixed-width">Federa Search</button>
            <a
              href="https://smartlistings.federa.com"
              target="_blank"
              class="link-button blue fixed-width"
            >List Now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="app-store-link" v-if="!$device.isMobile">
      <el-link
        :underline="false"
        href="https://apps.apple.com/us/app/federa/id1511527856"
        target="_blank"
        style="margin-right: 5px;"
      >
        <el-image :src="appleStore" fit="contain"></el-image>
      </el-link>
      <el-link
        :underline="false"
        href="https://play.google.com/store/apps/details?id=com.realty.federa"
        target="_blank"
        style="margin-left: 5px;"
      >
        <el-image :src="googleStore" fit="contain"></el-image>
      </el-link>
    </div>
    <!-- <div
      class="app-store-link"
      v-if="$device.isMobile"
    >
      <el-link
        :underline="false"
        href="https://apps.apple.com/us/app/federa/id1511527856"
        target="_blank"
        style="margin-right: 5px;"
      >
        <el-image :src="appleStore" fit="contain" style="display: none;"></el-image>
      </el-link>
      <el-link
        :underline="false"
        href="https://play.google.com/store/apps/details?id=com.realty.federa"
        target="_blank"
        style="margin-left: 5px;"
      >
        <el-image :src="googleStore" fit="contain" style="display: none;"></el-image>
      </el-link>
    </div> -->
  </div>
</template>

<script>
  import siteLogo from '@/assets/images/logo.png'
  import appleStore from '@/assets/images/AppStore.png'
  import googleStore from '@/assets/images/GooglePlay.png'
  import SearchWithAutocomplete from "~/components/inputs/SearchWithAutocomplete/SearchWithAutocomplete";

  export default {
    components: {
      SearchWithAutocomplete
    },
    data() {
      return {
        siteLogo: siteLogo,
        appleStore: appleStore,
        googleStore: googleStore,
        perPage: 12,
        currentPage: 1,
        totalCount: 0,
        searchForm: {
          searchKey: ''
        },
        similarProperties: [],
        pageLoading: false,
        pageClass: 'default'
      }
    },
    methods: {
      handlePageClick(pageNumber) {
        this.handleSearch(this.searchForm.searchKey, pageNumber)
      },

      onInput(value) {
        this.searchForm.searchKey = value;
      },

      onSubmit() {
        if (
          this.searchForm.searchKey !== '' &&
          this.searchForm.searchKey !== null
        ) {
          const searchKey = this.searchForm.searchKey
          this.$router.replace({
            path: '/search',
            query: {q: searchKey}
          })
        } else {
          this.$message({message: 'Please input any address', type: 'warning'})
        }
      }
    },
    created() {
    }
  }
</script>

<style lang="scss">
  .terms-service-footer {
    position: relative;
    bottom: 10px;
    left: 0;
    width: 100%;
    padding: 5px 0;
    margin-top: 35px;
    text-align: center;
    border-top: 1px solid #000;

    h2 {
      margin: 0;
      font-size: 18px;
      text-align: center;
    }
  }

  .search-property__default {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    text-align: center;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 12rem auto 50px;
      @media (max-width: 1366px) {
        margin: 5rem auto 50px;
      }
      @media (max-width: 450px) {
        margin: 4rem auto;
      }
      @media (max-width: 415px) {
        margin-top: 90px;
      }

      .main-title {
        font-size: 4.5em;
        @media (max-width: 1024px) {
          font-size: 3.5em;
        }
        @media (max-width: 768px) {
          font-size: 2.5em;
        }
      }

      &__heading {
        color: #000;
        font-family: SFUIText-Bold, Sans-serif;
        font-size: 45px;
        font-weight: bold;
        line-height: 1.2em;
      }

      &__form {
        align-items: center;
        width: 100%;
        margin-top: 40px;

        .el-form-item {
          padding: 0;

          .el-input {
            min-height: 45px;
            padding: 0;
            color: #fff;
            font-size: 18px;
            border-radius: 2px;

            &__inner {
              color: #fff;
              background: #979797;
            }
          }

          &__content {
            .el-button {
              width: auto;
              min-height: 33px;
              padding: 10px 20px;
              font-family: SFUIText-Regular;
              font-size: 15px;
              font-weight: normal;
              background-color: #007bff;
              background-image: none;
              border-color: #000;
              border-radius: 2px;
              filter: none;
            }
          }
        }
      }

      &__list {
        width: 60%;
        margin: 20px auto;
        text-align: left;

        .list-item {
          .unit {
            padding: 0 5px;
            color: #979797;
            font-size: 12px;
            font-weight: normal;
            line-height: 100%;
          }

          .address {
            overflow: hidden;
            width: 95%;
            color: #000;
            font-size: 12px;
            font-style: normal;
            font-weight: normal;
            line-height: 100%;
            letter-spacing: 0.02em;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .type {
            display: flex;
            align-items: center;
            color: #000;
            font-size: 12px;
            font-style: normal;
            font-weight: normal;
            line-height: 100%;
          }
        }
      }
    }
  }

  .search-property__default {
    width: 100%;

    .el-form-item {
      display: block;
      padding: 0;
      margin: 15px;

      .el-input {
        width: 25%;
        padding: 1px;
      }
    }
  }

  .app-store-link {
    margin: 20px auto;
    text-align: center;

    .el-image {
      width: 150px;
    }
  }

  @media (max-width: 1576px) {
    .search-property__default {
      width: 100%;

      .el-form-item {
        display: block;
        padding: 0;
        margin: 15px;
        font-size: 12px;

        .el-input {
          width: 40%;
          padding: 1px;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .search-property__default {
      width: 100%;

      .main-title {
        font-size: 26px;
        font-weight: bold;
      }

      .el-form-item {
        display: block;
        padding: 0;
        margin: 15px;

        .el-input {
          width: 80%;
          padding: 1px;
          font-size: 14px;
        }
      }
    }
    .app-store-link {
      .el-image {
        width: 130px;
      }
    }
  }

  @media only screen and (max-width: 415px) {
    .search-property__default {
      &__container {
        .main-title {
          font-size: 26px;
          font-weight: bold;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .search-property__default {
      width: 100%;

      &__container {
        margin: 0rem auto;
        margin-top: 70px;

        .main-title {
          font-size: 22px;
          font-weight: bold;
        }

        &__form {
          margin-top: 0px;
        }

        .el-form-item {
          .el-input {
            width: 85%;
          }
        }

        .form-group2 {
          margin-top: 35px !important;

          .el-form-item__content {
            width: 80%;
            margin: 0 auto;
          }
        }
      }
    }
    // .app-store-link {
    //   margin: 95px auto !important;
    // }
  }

  @media only screen and (max-width: 360px) {
    .search-property__default {
      &__container {
        margin-top: 80px;
      }
    }
  }
</style>

<style lang="scss">
  .el-loading-parent--relative {
    // margin: 15% auto;
    color: black;
  }

  .el-loading-spinner .path {
    stroke: black;
    stroke-width: 3px;
  }

  .search-loading-content {
    svg {
      position: absolute;
      top: 50%;
      left: 25%;
      max-width: 128px;
      max-height: 128px;
      transform: translate(-50%, -50%);
    }

    .magnify {
      animation: search 1s infinite ease;

      fill: #000;
    }

    .doc {
      animation: flyby 1s infinite ease;

      fill: #000;
    }
  }
</style>

<style lang="scss" scope>
  .link-button {
    display: table-cell;
    padding: 0;
    margin: 0 15px;
    font-size: 0.9288rem;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    border: 0;
    border-radius: 0;
    transition: border 0.5s;
    cursor: pointer;
    @media (max-width: 280px) {
      font-size: 10px;
    }
  }

  .blue {
    color: #fff;
    background: linear-gradient(#1e5ef0, #0040d2 50%);
    box-shadow: 0 1px 3px rgba(1, 1, 1, 0.5);
  }

  .white {
    color: #0040d2;
    background: white;
    box-shadow: 0 1px 3px rgba(1, 1, 1, 0.5);
  }

  .link-button.blue:hover {
    color: #fff;
    background: #3592ff;
  }

  .link-button.white:hover {
    color: #3592ff;
    background: #fff;
  }

  .fixed-width {
    width: 9.0625rem;
    height: 2.8125rem;
  }

  .wide-width {
    width: 100%;
    height: 2.8125rem;
  }

  a {
    text-decoration: none !important;
  }

  .title-black {
    color: black !important;
  }
</style>
