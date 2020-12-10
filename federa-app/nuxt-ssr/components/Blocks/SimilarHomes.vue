<template>
  <div class="jumbotron-container">
    <div class="col-xs-12 col-md-12 mt-4" style="padding: 0">
      <p class="overview-title">Similar Homes</p>
      <div class="similar-properties" :key="similarHomeKey">
        <el-row :gutter="20" style="margin: 0; padding: 20px">
          <client-only>
          <carousel v-if="screen < 580" :perPage="1" :paginationEnabled="false" :navigationEnabled="true"
            :navigationNextLabel="nextLabel"
            :navigationPrevLabel="prevLabel"
            >
            <slide v-for="(property, index) in similarProperties" :key="index" style="height: 320px;">
              <div class="list-item">
                <nuxt-link
                    :to="property.pathPrefix + '/' + property.fullAddress"
                    style="text-decoration: none;"
                >
                  <el-card class="card" :body-style="{ padding: '0px' }" style="box-shadow: none;">
                    <el-image
                        class="card-img-top"
                        :src="property.photo"
                        fit="fit"
                        alt=""
                    >
                      <div slot="placeholder" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                      <div slot="error" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                    </el-image>
                    <div class="card-body" style="padding: 10px; height: 110px;">
                      <div
                          class="content"
                          style="display: flex; justify-content: space-between; align-items: center;"
                      >
                        <div class="cost">
                          <span>${{property.cost}}</span>
                        </div>
                        <div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center"
                        >
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.LivingArea ? property.ListingStructure.LivingArea : '-'}}</span>
                            <span class="unit">Sq.Ft</span>
                            <el-divider direction="vertical"></el-divider>
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BedroomsTotal ? property.ListingStructure.BedroomsTotal : '-'}}</span>
                            <span class="unit">Bed</span>
                            <!-- <el-divider direction="vertical"></el-divider> -->
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BathroomsFull ? property.ListingStructure.BathroomsFull : '-'}}</span>
                            <span class="unit">Bath</span>
                          </div>
                        </div>
                      </div>
                      <div class="address">
                        {{property.LocationAddress.FullStreetAddress ?
                          property.LocationAddress.FullStreetAddress.toString().toLowerCase() +
                          ' ' +
                          property.LocationAddress.City +
                          ' ' +
                          property.LocationAddress.StateOrProvince +
                          ' ' +
                          property.LocationAddress.PostalCode : '-' }}
                      </div>
                      <div
                          style="display:flex;
                              justify-content: flex-start;
                              align-items: center;
                              font-size: 11px;
                              margin-top: 5px;"
                      >
                        <div
                            class="status-dot"
                            :style="'background:'
                                + getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['color']"
                        ></div>
                        <div>{{getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['type']}}</div>
                      </div>
                    </div>
                  </el-card>
                </nuxt-link>
              </div>
            </slide>
          </carousel>
          <carousel v-else-if="screen <= 855" :perPage="2" :paginationEnabled="false" :navigationEnabled="true"
          :navigationNextLabel="nextLabel"
          :navigationPrevLabel="prevLabel"
          >
            <slide v-for="(property, index) in similarProperties" :key="index" style="height: 320px;">
              <div class="list-item">
                <nuxt-link
                    :to="property.pathPrefix + '/' + property.fullAddress"
                    style="text-decoration: none;"
                >
                  <el-card class="card" :body-style="{ padding: '0px' }" style="box-shadow: none;">
                    <el-image
                        class="card-img-top"
                        :src="property.photo"
                        fit="fit"
                        alt="Card image cap"
                    >
                      <div slot="placeholder" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                      <div slot="error" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                    </el-image>
                    <div class="card-body" style="padding: 10px; height: 110px;">
                      <div
                          class="content"
                          style="display: flex; justify-content: space-between; align-items: center;"
                      >
                        <div class="cost">
                          <span>${{property.cost}}</span>
                        </div>
                        <div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center"
                        >
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.LivingArea ? property.ListingStructure.LivingArea : '-'}}</span>
                            <span class="unit">Sq.Ft</span>
                            <el-divider direction="vertical"></el-divider>
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BedroomsTotal ? property.ListingStructure.BedroomsTotal : '-'}}</span>
                            <span class="unit">Bed</span>
                            <!-- <el-divider direction="vertical"></el-divider> -->
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BathroomsFull ? property.ListingStructure.BathroomsFull : '-'}}</span>
                            <span class="unit">Bath</span>
                          </div>
                        </div>
                      </div>
                      <div class="address">
                        {{property.LocationAddress.FullStreetAddress ?
                          property.LocationAddress.FullStreetAddress.toString().toLowerCase() +
                          ' ' +
                          property.LocationAddress.City +
                          ' ' +
                          property.LocationAddress.StateOrProvince +
                          ' ' +
                          property.LocationAddress.PostalCode : '-' }}
                      </div>
                      <div
                          style="display:flex;
                              justify-content: flex-start;
                              align-items: center;
                              font-size: 11px;
                              margin-top: 5px;"
                      >
                        <div
                            class="status-dot"
                            :style="'background:'
                                + getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['color']"
                        ></div>
                        <div>{{getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['type']}}</div>
                      </div>
                    </div>
                  </el-card>
                </nuxt-link>
              </div>
            </slide>
          </carousel>
          <carousel v-else-if="screen <= 1270" :perPage="3" :paginationEnabled="false" :navigationEnabled="true"
          :navigationNextLabel="nextLabel"
          :navigationPrevLabel="prevLabel"
          >
            <slide v-for="(property, index) in similarProperties" :key="index" style="height: 320px;">
              <div class="list-item">
                <nuxt-link
                    :to="property.pathPrefix + '/' + property.fullAddress"
                    style="text-decoration: none;"
                >
                  <el-card class="card" :body-style="{ padding: '0px' }" style="box-shadow: none;">
                    <el-image
                        class="card-img-top"
                        :src="property.photo"
                        fit="fit"
                        alt="Card image cap"
                    >
                      <div slot="placeholder" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                      <div slot="error" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                    </el-image>
                    <div class="card-body" style="padding: 10px; height: 110px;">
                      <div
                          class="content"
                          style="display: flex; justify-content: space-between; align-items: center;"
                      >
                        <div class="cost">
                          <span>${{property.cost}}</span>
                        </div>
                        <div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center"
                        >
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.LivingArea ? property.ListingStructure.LivingArea : '-'}}</span>
                            <span class="unit">Sq.Ft</span>
                            <el-divider direction="vertical"></el-divider>
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BedroomsTotal ? property.ListingStructure.BedroomsTotal : '-'}}</span>
                            <span class="unit">Bed</span>
                            <!-- <el-divider direction="vertical"></el-divider> -->
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BathroomsFull ? property.ListingStructure.BathroomsFull : '-'}}</span>
                            <span class="unit">Bath</span>
                          </div>
                        </div>
                      </div>
                      <div class="address">
                        {{property.LocationAddress.FullStreetAddress ?
                          property.LocationAddress.FullStreetAddress.toString().toLowerCase() +
                          ' ' +
                          property.LocationAddress.City +
                          ' ' +
                          property.LocationAddress.StateOrProvince +
                          ' ' +
                          property.LocationAddress.PostalCode : '-' }}
                      </div>
                      <div
                          style="display:flex;
                              justify-content: flex-start;
                              align-items: center;
                              font-size: 11px;
                              margin-top: 5px;"
                      >
                        <div
                            class="status-dot"
                            :style="'background:'
                                + getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['color']"
                        ></div>
                        <div>{{getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['type']}}</div>
                      </div>
                    </div>
                  </el-card>
                </nuxt-link>
              </div>
            </slide>
          </carousel>
          <carousel v-else-if="screen >= 1270" :perPage="4" :paginationEnabled="false" :navigationEnabled="true"
          :navigationNextLabel="nextLabel"
          :navigationPrevLabel="prevLabel"
          >
            <slide v-for="(property, index) in similarProperties" :key="index" style="height: 320px;">
              <div class="list-item">
                <nuxt-link
                    :to="property.pathPrefix + '/' + property.fullAddress"
                    style="text-decoration: none;"
                >
                  <el-card class="card" :body-style="{ padding: '0px' }" style="box-shadow: none;">
                    <el-image
                        class="card-img-top"
                        :src="property.photo"
                        fit="fit"
                        alt="Card image cap"
                    >
                      <div slot="placeholder" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                      <div slot="error" class="image-slot">
                        <i
                            class="el-icon-picture-outline"
                            style="font-size: 5rem; margin:auto"
                        ></i>
                      </div>
                    </el-image>
                    <div class="card-body" style="padding: 10px; height: 110px;">
                      <div
                          class="content"
                          style="display: flex; justify-content: space-between; align-items: center;"
                      >
                        <div class="cost">
                          <span>${{property.cost}}</span>
                        </div>
                        <div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center"
                        >
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.LivingArea ? property.ListingStructure.LivingArea : '-'}}</span>
                            <span class="unit">Sq.Ft</span>
                            <el-divider direction="vertical"></el-divider>
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BedroomsTotal ? property.ListingStructure.BedroomsTotal : '-'}}</span>
                            <span class="unit">Bed</span>
                            <!-- <el-divider direction="vertical"></el-divider> -->
                          </div>
                          <div class="value-item">
                                  <span
                                      class="value"
                                  >{{property.ListingStructure.BathroomsFull ? property.ListingStructure.BathroomsFull : '-'}}</span>
                            <span class="unit">Bath</span>
                          </div>
                        </div>
                      </div>
                      <div class="address">
                        {{property.LocationAddress.FullStreetAddress ?
                          property.LocationAddress.FullStreetAddress.toString().toLowerCase() +
                          ' ' +
                          property.LocationAddress.City +
                          ' ' +
                          property.LocationAddress.StateOrProvince +
                          ' ' +
                          property.LocationAddress.PostalCode : '-' }}
                      </div>
                      <div
                          style="display:flex;
                              justify-content: flex-start;
                              align-items: center;
                              font-size: 11px;
                              margin-top: 5px;"
                      >
                        <div
                            class="status-dot"
                            :style="'background:'
                                + getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['color']"
                        ></div>
                        <div>{{getStatus(property.Property.PropertyType, property.Listing.StandardStatus)['type']}}</div>
                      </div>
                    </div>
                  </el-card>
                </nuxt-link>
              </div>
            </slide>
          </carousel>
          </client-only>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
import Status from '@/utils/getStatus.js';

export default {
  name: 'SimilarHomes',
  props: {
    similarProperties: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    if(process.client){
      this.screen = this.getScreenWidth();
    }
  },
  created(){
    if(process.client){
      window.addEventListener('resize', this.handleResize)
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data: () => ({
    screen: 0,
    similarHomeKey: 0,
    nextLabel: "<img src='/images/icon-next.png' />",
    prevLabel: "<img src='/images/icon-prev.png' />",
  }),
  methods: {
    getStatus(propertyType, propertyStatus) {
      return Status(propertyType, propertyStatus);
    },
    getScreenWidth(){
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    },
    handleResize(){
      this.screen = this.getScreenWidth()
      this.similarHomeKey += 1
    }
  },
};
</script>

<style lang="scss" scoped>
.overview-title {
  margin: 1.3rem 0;
  margin-top: 17px;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
}
.similar-properties {
  margin: 0 auto;
  .list-item {
    font-family: SFUIText-Regular;
    padding: 0 9px;
    .el-card {
      border: none;
      border-radius: 0;
      border-bottom: 3px solid rgba(196, 196, 196, 0.52);
    }
    .cost {
      font-size: 16px;
      font-weight: bold;
    }
    .value-item {
      margin: 0 1px;
      font-size: 11px;
      .unit {
        color: #979797;
        font-weight: normal;
        line-height: 100%;
      }
      .el-divider--vertical {
        margin: 0 3px;
      }
    }
    .address {
      display: -webkit-box;
      overflow: hidden;
      width: 95%;
      color: #000;
      font-style: normal;
      font-weight: normal;
      line-height: 1.5; /* fallback */
      text-overflow: ellipsis;

      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* number of lines to show */
    }
    .status-dot {
      width: 8px;
      height: 8px;
      margin-right: 5px;
      border-radius: 50%;
    }
    .card-img-top {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background: #747474;
      height: 190px!important;
      text-align: center;
      .el-image__inner {
        width: auto;
        height: 100%;
      }
      .image-slot {
        background: gainsboro;
        text-align: center;
        display: flex;
        width: 100%;
        height: calc(14.5vw * 0.67);
        justify-content: right;
        align-items: center;
        color: #000;
      }
    }
  }
}
@media only screen and (max-width: 1023px) and (min-width:890px)  {
  .similar-properties  {
    .list-item{
      .cost {
        font-size: 14px;
        font-weight: bold;
      }
    }

  }
}
@media only screen and (max-width: 889px) and (min-width:856px)  {
  .similar-properties  {
    .list-item{
      .cost {
        font-size: 12px;
        font-weight: bold;
      }
    }

  }
}
@media screen and (max-width: 767px) {
  .similar-properties {
    width: 100%;
    margin: auto;
    .el-col {
      padding: 0 !important;
      margin-bottom: 5px;
      .list-item {
        .address {
          height: 20px;
        }
        .card-img-top {
          background: #747474;
          width: 100%;
          height: calc(90.5vw * 0.67);
          text-align: center;
          .image-slot {
            background: gainsboro;
            text-align: center;
            display: flex;
            width: 100%;
            height: calc(90.5vw * 0.67);
            justify-content: right;
            align-items: center;
            color: #000;
          }
        }
      }
    }
  }
}
</style>
<style>
.VueCarousel-navigation-button, .VueCarousel-navigation-button:focus{
  outline: none !important;
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
