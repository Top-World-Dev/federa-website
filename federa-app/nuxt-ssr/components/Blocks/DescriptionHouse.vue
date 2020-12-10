<template>
  <div>
    <div class="jumbotron-container" v-loading="pageLoading" :class="{'history':isHistory}">
      <div class="row" v-if="propertyInfo !== null">
        <div class="col-md-5 col-xs-12 left-side">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <main-card-view
                  :mainImg="mainImg"
                  :cost="cost"
                  :square="square"
                  :bed="bed"
                  :bath="bath"
                  :address="address"
                  :status="getStatus(type, status)['type']"
                  :type="getStatus(type, status)['color']"
              />
            </div>
            <div
                class="col-xs-12 col-md-12"
                style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin: 25px 0; padding: 0"
            >
              <a
                  class="link-button blue wide-width"
                  href="https://smartlistings.federa.com"
                  target="_blank"
                  rel="noopener noreferrer"
              >Sell Now</a>
              <button
                  class="link-button white wide-width"
                  @click="chatWithAgent"
                  variant="dark"
              >Buy Now</button>
            </div>
            <div class="col-xs-12 col-md-12">
              <GMap
                  ref="gMap"
                  :cluster="{options: {styles: clusterStyle}}"
                  :center="center"
                  :zoom="12"
                  style="width:100%; height: 400px; margin-top: 10px"
              >
                <GMapMarker :position="center" :clickable="false" :draggable="false" />
              </GMap>
              <p class="overview-title">Overview</p>
              <div class="overview-text" v-if="propertyInfo !== null">
                <p class="description">{{propertyInfo.Remarks.PublicRemarks}}</p>
              </div>
              <p class="overview-title">Quick Facts</p>
              <el-row
                  :gutter="10"
                  class="quick-fact-item"
                  v-for="(qf, key) in quickFacts"
                  :key="key"
                  style="padding: 5px"
              >
                <el-col :xs="3" :sm="4" :md="3" :lg="3">
                  <div class="quick-fact-item-img">
                    <el-image style="width: 18px; height: 14px" :src="qf.img" fit="contain"></el-image>
                  </div>
                </el-col>
                <el-col :xs="6" :sm="5" :md="5" :lg="5">
                  <div class="quick-fact-title">{{qf.title}}</div>
                </el-col>
                <el-col :xs="15" :sm="15" :md="15" :lg="15">
                  <div class="grid-content quick-fact-value">{{qf.value}}</div>
                </el-col>
              </el-row>
              <p class="overview-title">Taxes and Assessment</p>
              <div class="row">
                <div class="col-md-12" style="padding: 0">
                  <div
                      class="col-md-12 mb-3"
                      v-for="(item, key) in interiorDetails"
                      :key="key"
                      style="display: flex; justify-content: flex-start; align-items: center;"
                  >
                    <div class="interior-type" style="margin-right: 10px;">{{item.type}}:</div>
                    <div class="interior-value">{{item.value}}</div>
                  </div>
                </div>
              </div>
              <p class="overview-title">Listing Provided By</p>
              <div class="row">
                <div class="col-md-8" style="padding: 0">
                  <div
                      class="col-md-12 mb-3"
                      v-for="(item, key) in providerDetails"
                      :key="key"
                      style="display: flex; justify-content: flex-start; align-items: center"
                  >
                    <div class="interior-type" style="margin-right: 10px">{{item.type}}:</div>
                    <div class="interior-value">{{item.value}}</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <el-image style="width: 100px;" :src="brightMlsLogo" fit="fit"></el-image>
                </div>
                <p
                    class="col-xs-12 col-sm-8 col-md-8 interior-value"
                    style="font-size: 16px;line-height: 25px"
                >MLS Disclaimer: Copyright Bright MLS. All rights reserved. Information is deemed reliable but not guaranteed.</p>
              </div>
              <div class="overview-title" style="margin-top: 20px">Last Property Change: <span class="interior-value">{{propertyInfo.ListingDates.ModificationTimestamp ? propertyInfo.ListingDates.ModificationTimestamp : '-'}}</span></div>
              <div class="overview-title" style="margin-top: 20px">Last Property Check: <span class="interior-value">{{propertyCheckDate()}}</span></div>
              <div class="service-terms">
                <h5>© 2020 BRIGHT. All rights reserved.</h5>
                <div class="row">
                  <div class="col-md-12" style="font-size: 14px">
                    The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Federated Realty participates, and is provided by BRIGHT through a licensing agreement.
                    Real estate listings held by brokerage firms other than Federated Realty are marked with the IDX icon, and detailed information about each listing includes the name of the listing broker. The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.
                    Some properties which appear for sale on this website may no longer be available because they are under contract, have Closed or are no longer being offered for sale. Home sale information is not to be construed as an appraisal and may not be used as such for any purpose. BRIGHT MLS is a provider of this home sale information and has compiled content from various sources. Some properties represented may not have actually sold due to reporting errors.
                    Some real estate firms do not participate in IDX and their listings do not appear on this website.
                    Some properties listed with participating firms do not appear on this website at the request of the seller.
                    Information Deemed Reliable But Not Guaranteed.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-xs-12 right-side">
          <div class="row" style="padding: 0; margin: 0">
            <el-image
                class="col-md-6"
                v-for="(image, i) in decImgs"
                :key="i"
                :src="image"
                @click="onClick(i)"
                style="padding: 1.5px; height: 17.5rem"
                alt="Card image cap"
            >
              <div
                  slot="placeholder"
                  class="image-slot"
                  style="background: gainsboro;text-align: center; display:flex;width:100%; height: 17.5rem; justify-content:right; align-items:center;color: #000"
              >
                <i class="el-icon-picture-outline" style="font-size: 5rem;margin:auto"></i>
              </div>
              <div
                  slot="error"
                  class="image-slot"
                  style="background: gainsboro;text-align: center; display:flex;width:100%; height: 17.5rem; justify-content:right; align-items:center;color: #000"
              >
                <i class="el-icon-picture-outline" style="font-size: 5rem;margin:auto"></i>
              </div>
            </el-image>
            <client-only>
            <vue-gallery-slideshow :images="decImgs" :index="index" @close="index = null"></vue-gallery-slideshow>
            </client-only>
          </div>
        </div>
    </div>
      </div>
    <div class="mobile-scroll-view" v-if="mobileImageShow === true">
      <el-button
          circle
          icon="el-icon-close"
          style="position: fixed;
                top: 15px;
                left: 15px;
                z-index: 998;"
          @click="showImages"
      ></el-button>
      <div class="row" style="padding: 0; margin: 0">
        <el-image
            class="col-md-12"
            v-for="(image, i) in decImgs"
            :key="i"
            :src="image"
            @click="onClick(i)"
            style="padding: 1.5px; height: 17.5rem"
            alt="Card image cap"
        >
          <div
              slot="placeholder"
              class="image-slot"
              style="background: gainsboro;text-align: center; display:flex;width:100%; height: 17.5rem; justify-content:right; align-items:center;color: #000"
          >
            <i class="el-icon-picture-outline" style="font-size: 5rem;margin:auto"></i>
          </div>
          <div
              slot="error"
              class="image-slot"
              style="background: gainsboro;text-align: center; display:flex;width:100%; height: 17.5rem; justify-content:right; align-items:center;color: #000"
          >
            <i class="el-icon-picture-outline" style="font-size: 5rem;margin:auto"></i>
          </div>
        </el-image>
        <client-only>
          <vue-gallery-slideshow :images="decImgs" :index="index" @close="index = null"></vue-gallery-slideshow>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import MainCardView from '@/components/MainCardView';
import Status from '@/utils/getStatus.js';
import { format } from 'date-fns';

export default {
  name: "DescriptionHouse",
  components: {
    MainCardView
  },
  props: {
    isHistory: {
      type: Boolean,
      default: false,
    },
    ruleForm: {
      type: Object,
      default: () => {},
    },
    visible: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Object,
      default: () => {},
    },
    centerDialogVisible: {
      type: Boolean,
      default: false,
    },
    brightMlsLogo: {
      type: String,
      default: '',
    },
    similarProperties: {
      type: Array,
      default: () => [],
    },
    mainImg: {
      type: String,
      default: '',
    },
    cost: {
      type: String,
      default: '',
    },
    square: {
      type: Number,
      default: null,
    },
    bed: {
      type: Number,
      default: null,
    },
    bath: {
      type: Number,
      default: null,
    },
    address: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    decImgs: {
      type: Array,
      default: () => [],
    },
    searchKey:{
      type: String,
      default: '',
    },
    pageLoading: {
      type: Boolean,
      default: false,
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    isLength: {
      type: Boolean,
      default: false,
    },
    propertyInfo: {
      type: Object,
      default: () => {},
    },
    moreInfoShow: {
      type: Boolean,
      default: false,
    },
    quickFacts: {
      type: Array,
      default: () => [],
    },
    interiorDetails: {
      type: Array,
      default: () => [],
    },
    providerDetails: {
      type: Array,
      default: () => [],
    },
    center: {
      type: Object,
      default: () => {},
    },
    clusterStyle: {
      type: Array,
      default: () => [],
    },
    chatButton: {
      type: Object,
      default: () => {},
    },
    status: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    visibility: false,
    mobileImageShow: false,
    index: null,
  }),
  created() {
    this.visibility = this.$device.isMobile
  },
  computed: {

  },
  methods: {
    propertyCheckDate(){
      const currentDate = new Date();
      let hour = currentDate.getHours()
      if(hour%2 != 0){
        hour = Math.floor(hour / 2) + Math.floor(hour / 2)
      }
      return format(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hour), 'yyyy-MM-dd hh:00:00 aa')
    },
    chatWithAgent() {
      try {
        this.chatButton.onClick()
      } catch (error) {
        console.log(error)
      }
    },
    onClick(i) {
      this.index = i
    },
    getStatus(propertyType, propertyStatus) {
      return Status(propertyType, propertyStatus)
    },
    showImages() {
      if (window && window.screen.width < 768) {
        this.mobileImageShow = !this.mobileImageShow
      }
    },
  },
}
</script>

<style lang="scss">
.jumbotron-container {
  width: 75%;
  min-height: 350px;
  padding: 1rem 0;
  margin: 0 auto;
  font-family: SFUIText-Regular;
}
.left-side,
.right-side {
  display: block;
  overflow-x: hidden;
  max-height: 100vh;

  scroll-behavior: smooth;
}
.mobile-scroll-view {
  position: absolute;
  top: 0;
  z-index: 995;
  display: none;
  width: 100%;
  height: auto;
}
.magnify {
  animation: search 1s infinite ease;

  fill: #000;
}
.right-side {
  display: block;
}
.vgs {
  &__container {
    max-width: 120vh;
    height: 80vh;
    margin: 3.5rem auto 0;
  }
}
.description {
  text-transform: lowercase;
}
.description::first-letter {
  text-transform: uppercase;
}
.el-dialog {
  width: 30%;
  color: white;
  background: #000;
  &__title {
    color: white;
    font-family: SFUIText-Bold;
    font-size: 27px;
    font-weight: bold;
  }
}
.history {
  width: 100%;
}
@media screen and (max-width: 1446px) {
  .jumbotron-container {
    width: 85%;
  }
  .right-side {
    display: block;
  }
  .mobile-scroll-view {
    display: none;
  }
  .el-dialog {
    width: 30%;
  }
  .history {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .jumbotron-container {
    width: 90%;
  }
  .right-side {
    display: block;
  }
  .mobile-scroll-view {
    display: none;
  }
  .el-dialog {
    width: 40%;
  }
  .history {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .jumbotron-container {
    width: 95%;
  }
  .right-side {
    display: none;
  }
  .mobile-scroll-view {
    display: block;
  }
  .el-dialog {
    width: 90%;
  }
}
</style>

<style scoped>
.decImg {
  width: 100%;
}
.custom-btn {
  cursor: pointer;
  text-align: center;
  transition: border 0.5s;
  width: 100%;
  border: 0;
  white-space: normal;
  display: table-cell;
  vertical-align: middle;
  margin: 15px;
}
.custom-btn-blue {
  background: linear-gradient(#1e5ef0, #0040d2 50%);
  color: #ffffff;
  font-size: 0.9288rem;
  font-weight: 700;
  height: 2.8125rem;
  border-radius: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}
.custom-btn-white {
  background: white;
  box-shadow: 0 1px 3px rgba(1, 1, 1, 0.5);
  color: #0040d2;
  font-size: 0.9288rem;
  font-weight: 700;
  height: 2.8125rem;
  border-radius: 0;
}
.vertical-container {
  position: relative;
  overflow: hidden;
  max-height: 100vh;
}
.overview-title {
  margin: 1.3rem 0;
  margin-top: 35px;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
}
.overview-text {
  margin: 10px 0;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 138%;
  /* padding: 0 15px; */
}
.overview-summary {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 15%;
}
.summary-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.red-point {
  width: 10px;
  height: 10px;
  margin-right: 8px;
  background: #f00;
  border-radius: 50%;
}
.summary-content {
  display: flex;
  align-items: center;
  margin-top: 6px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
}
.summary-category {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 100%;
}
.quick-fact-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
}
.quick-fact-img {
  align-items: center;
}
.quick-fact-title {
  color: #979797;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  text-transform: capitalize;
}
.quick-fact-value {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  text-transform: capitalize;
}
.interior-type {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  text-transform: capitalize;
  margin-bottom: 0px;
}
.interior-value {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  line-height: 100%;
  text-transform: capitalize;
}
</style>
