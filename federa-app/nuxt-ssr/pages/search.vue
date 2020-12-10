<template>
  <div>
    <div class="infinite-list-wrapper" v-loading="loading">
      <tag-container style="padding: 0 10px; margin-bottom: 20px; margin-top: 40px"/>
      <el-row :gutter="20" v-if="listData.length" style="margin: 0; padding: 10px 0 20px 0">
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          :xl="6"
          v-for="(property, key) in listData"
          :key="key"
        >
          <div class="list-item">
            <nuxt-link
              :to="property.pathPrefix + '/' + property.fullAddress"
              class="text-decoration-none"
            >
              <el-card class="card" shadow="always" :body-style="{ padding: '0px' }">
                <el-image class="card-img-top" :src="property.photo" fit="fit" alt="Card image cap">
                  <div slot="placeholder" class="image-slot">
                    <i class="el-icon-picture-outline" style="font-size: 5rem; margin:auto"></i>
                  </div>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline" style="font-size: 5rem; margin:auto"></i>
                  </div>
                </el-image>
                <div class="card-body" style="padding: 10px">
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
                        <el-divider direction="vertical"></el-divider>
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
        </el-col>
      </el-row>
      <div class="d-flex align-items-center justify-content-center" v-if="totalCount > 0">
        <b-pagination
          v-model="pageNumber"
          :total-rows="totalCount"
          :per-page="perPage"
          pills
          :hide-ellipsis="false"
          limit="6"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
          v-on:change="handlePageClick"
        ></b-pagination>
      </div>
      <div v-if="!loading && listData.length === 0">
        <el-alert
          title="We could not find properties with this filters or address."
          type="info"
          show-icon
          :closable="false"
          :center="true"
        ></el-alert>
      </div>
      <p>&nbsp;</p>
    </div>
    <div
      class="app-store-link"
      style="margin-left: auto;margin-right: auto; text-align: center"
      v-if="!$device.isMobile"
    >
      <el-link
        :underline="false"
        href="https://apps.apple.com/us/app/federa/id1511527856"
        target="_blank"
        style="margin-right: 5px;"
      >
        <el-image style="width: 150px;height: 150px;" :src="appleStore" fit="contain"></el-image>
      </el-link>
      <el-link
        :underline="false"
        href="https://play.google.com/store/apps/details?id=com.realty.federa"
        target="_blank"
        style="margin-left: 5px;"
      >
        <el-image style="width: 150px;height: 150px;" :src="googleStore" fit="contain"></el-image>
      </el-link>
    </div>
  </div>
</template>

<script>
  import appleStore from '@/assets/images/AppStore.png'
  import googleStore from '@/assets/images/GooglePlay.png'
  import axios from "axios";
  import TagContainer from "~/components/property/tags/TagContainer";

  export default {
    components: {TagContainer},
    head() {
      return {
        title:
          this.$route.query.q && this.$route.query.q.length > 0
            ? `Search - ${this.$route.query.q} | Federa`
            : 'Federa | Search',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Federa, Search - ${this.$route.query.q}`
          }
        ]
      }
    },
    async asyncData({query, params, req, payload, $config: {baseURLAPI, basicAuthUsername, basicAuthPassword}}) {
      try {
        let [{q}, page] = [(req && req.query) || query || {}, 1]
        if (!q || q.length === 0) {
          q = `city ${params.city}`
        }
        const auth = {
          username: basicAuthUsername,
          password: basicAuthPassword
        }
        const {properties: allProperties, totalCount} = await searchProperties(
          q,
          page,
          payload,
          auth,
          baseURLAPI
        )
        if (allProperties.length > 0 && totalCount > 0) {
          return {
            listData: allProperties,
            totalCount: totalCount,
            loading: false,
            baseURLAPI,
            auth,
          }
        } else {
          return {
            loading: false,
            baseURLAPI,
            auth,
          }
        }
      } catch (e) {
        console.log(e.message)
      }
      return {}
    },
    watch: {
      $route(to, from) {
        // react to route changes...
        const {path, query} = to
        this.handlePageClick(1)
      }
    },
    scrollToTop: true,
    data() {
      const page = parseInt(this.$route.query.page)
      return {
        count: 10,
        listData: [],
        loading: true,
        perPage: 16,
        totalCount: 0,
        pageNumber: isNaN(page) ? 1 : page,
        appleStore: appleStore,
        googleStore: googleStore,
        baseURLAPI: '',
        auth: {},
      }
    },
    methods: {
      getStatus(propertyType, propertyStatus) {
        const statusList = [
          {
            type: 'For Sale',
            color: 'green',
            data: ['active', 'pending', 'active under contact', 'Commercial site']
          },
          {
            type: 'For Rent',
            color: 'blue',
            data: ['residential lease', 'commercial lease']
          },
          {
            type: 'Sold',
            color: 'red',
            data: ['closed']
          },
          {
            type: 'Coming Soon',
            color: 'yellow',
            data: []
          },
          {
            type: 'Off Market',
            color: 'black',
            data: ['expired', 'hold', 'cancelled', 'withdrawn', 'delete']
          },
          {
            type: 'Temporary Off Market',
            color: 'purple',
            data: []
          }
        ]

        const defaultStatus = {
          type: 'Off Market',
          color: 'black',
          data: ['expired', 'hold', 'cancelled', 'withdrawn', 'delete']
        }

        const status = statusList.find(s => s.data.indexOf(propertyStatus.toLowerCase()) > -1)

        if (!status) {
          return defaultStatus
        }
        if (propertyStatus.toLowerCase() === 'closed' && propertyType.toLowerCase() === 'residential lease') {
          const rentStatus = {
            type: 'Rented',
            color: 'cyan',
            data: ['residential lease', 'closed']

          }
          return rentStatus
        }
        return status
      },
      async handlePageClick(pageNumber) {
        try {
          this.loading = true
          const {q} = this.$route.query
          const {properties, totalCount} = await searchProperties(q, pageNumber, '', this.auth, this.baseURLAPI)
          this.listData = properties
          this.totalCount = totalCount
          this.loading = false
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  function getPropertyFilters() {
    if (process.browser) {
      if (!sessionStorage.getItem("savedPropertyTags")) return {};
      return JSON.parse(sessionStorage.getItem("savedPropertyTags"));
    } else return {};
  }

  async function searchProperties(searchKey, page = 1, payload = null, auth = {}, baseURLAPI) {
    let resData = payload
    if (!resData) {
      const filters = getPropertyFilters();
      const filtersKeys = Object.keys(filters);
      const filtersPicked = [];
      filtersKeys.forEach(f => {
        filters[f].options = filters[f].options.map(o => o.toString());
        filtersPicked.push(filters[f]);
      });

      const res = await axios({
        url: `${baseURLAPI}/property/search`,
        method: 'POST',
        data: {
          page,
          location: searchKey,
          filters: filtersPicked
        },
        timeout: 300 * 1000,
        auth
      });

      resData = res.data;
    }
    const result = {
      properties: [],
      totalCount: 0
    }

    if (!resData) {
      return result
    }
    const responseData = resData.properties

    if (!responseData.length) {
      return result
    }
    let allProperties = []
    responseData.forEach(item => {
      item.property_rawData.Listing.StandardStatus = item.property_status;

      const parsedData = item.property_rawData
      let amount = item.property_price
      if (amount) {
        let decimalCount = 0
        let thousands = ','
        decimalCount = Math.abs(0)
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount

        const negativeSign = amount < 0 ? '-' : ''

        let i = parseInt(
          (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
        ).toString()
        let j = i.length > 3 ? i.length % 3 : 0
        amount =
          negativeSign +
          (j ? i.substr(0, j) + thousands : '') +
          i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
          (decimalCount
            ? decimal +
            Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
            : '')
      }
      parsedData.cost = amount
      parsedData.photo = item.property_photo
      parsedData.pathPrefix = ''
      parsedData.fullAddress = item.property_slug

      if (
        !!parsedData.LocationAddress.StateOrProvince &&
        !!parsedData.LocationAddress.City
      ) {
        parsedData.pathPrefix = `/properties/${item.property_type
        .replace(/\s+/, '-')
        .toLowerCase()}/${parsedData.LocationAddress.StateOrProvince.toString().toLowerCase()}/${parsedData.LocationAddress.City.toString().replace(
          /(\s+|\/)/,
          '-'
        ).toLowerCase()}`
      }
      allProperties.push(parsedData)
    })
    return {
      properties: allProperties,
      totalCount: resData.totalCount > 0 ? resData.totalCount : 0
    }
  }
</script>

<style lang="scss">
  .infinite-list-wrapper {
    .el-alert {
      margin: 5% auto;

      &__title {
        font-size: 18px;
      }
    }

    & .el-loading-mask {
      z-index: 100 !important;
    }
  }
</style>

<style lang="scss" scoped>
  .infinite-list-wrapper {
    width: 70%;
    margin: 0 auto;

    .el-col {
      margin-bottom: 20px;

      .list-item {
        font-family: SFUIText-Regular;
        border-bottom: 2px solid gray;

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
          height: 36px;
          color: #000;
          font-style: normal;
          font-weight: normal;
          line-height: 1.5; /* fallback */
          letter-spacing: 0.02em;
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
          background: #747474;
          width: 100%;
          height: calc(16vw * 0.67);
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
            height: calc(16vw * 0.67);
            justify-content: right;
            align-items: center;
            color: #000;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1700px) {
    .el-col-xl-6 {
      width: 25%;
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .infinite-list-wrapper {
      width: 80%;
      margin: auto;

      .el-col {
        .list-item {
          .cost {
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .infinite-list-wrapper {
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
