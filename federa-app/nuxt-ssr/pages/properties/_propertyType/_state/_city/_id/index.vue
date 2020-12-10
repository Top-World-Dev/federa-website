<template>
  <div class="property-container-margin">
    <description-house
      :ruleForm="ruleForm"
      :visible="visible"
      :rules="rules"
      :centerDialogVisible="centerDialogVisible"
      :brightMlsLogo="brightMlsLogo"
      :similarProperties="similarProperties"
      :mainImg="mainImg"
      :cost="cost"
      :square="square"
      :bed="bed"
      :bath="bath"
      :address="address"
      :type="type"
      :decImgs="decImgs"
      :searchKey="searchKey"
      :pageLoading="pageLoading"
      :isSearch="isSearch"
      :isLength="isLength"
      :propertyInfo="propertyInfo"
      :moreInfoShow="moreInfoShow"
      :quickFacts="quickFacts"
      :interiorDetails="interiorDetails"
      :providerDetails="providerDetails"
      :center="center"
      :mobileImageShow="mobileImageShow"
      :clusterStyle="clusterStyle"
      :chatButton="chatButton"
      :status="status"
    />
    <div class="history-listing jumbotron-container" v-if="historyListing.length > 0">
      <p class="history-listing-title">Historical Listing</p>
      <ul>
        <li v-for="(item, index) of historyListing" :key="index">
          <span
            class="history-listing-item"
            @click="selectHistory(index, item.id)"
          >
            <span class="history-listing-caption">Sold Date</span>: {{ item.soldDate }}
            <img
              src="@/assets/images/up_arrow.svg"
              :class="isSelected === index ? 'arrow-down' : ''"
            >
          </span>
          <div
            v-if="selectedHistory !== '' && isSelected === index"
            class="history-listing-list"
            :class="{visibility:visibleHistory}"
          >
            <description-house
              is-history="true"
              :ruleForm="selectedHistory.ruleForm"
              :visible="selectedHistory.visible"
              :rules="selectedHistory.rules"
              :centerDialogVisible="selectedHistory.centerDialogVisible"
              :brightMlsLogo="selectedHistory.brightMlsLogo"
              :similarProperties="selectedHistory.similarProperties"
              :mainImg="selectedHistory.mainImg"
              :cost="selectedHistory.cost"
              :square="selectedHistory.square"
              :bed="selectedHistory.bed"
              :bath="selectedHistory.bath"
              :address="selectedHistory.address"
              :type="selectedHistory.type"
              :decImgs="selectedHistory.decImgs"
              :searchKey="selectedHistory.searchKey"
              :pageLoading="selectedHistory.pageLoading"
              :isSearch="selectedHistory.isSearch"
              :isLength="selectedHistory.isLength"
              :propertyInfo="selectedHistory.propertyInfo"
              :moreInfoShow="selectedHistory.moreInfoShow"
              :quickFacts="selectedHistory.quickFacts"
              :interiorDetails="selectedHistory.interiorDetails"
              :providerDetails="selectedHistory.providerDetails"
              :center="selectedHistory.center"
              :mobileImageShow="selectedHistory.mobileImageShow"
              :clusterStyle="selectedHistory.clusterStyle"
              :chatButton="selectedHistory.chatButton"
              :status="selectedHistory.status"
            />
          </div>
        </li>
      </ul>
    </div>
    <div
      class="similar-house"
    >
      <similar-homes
        :similarProperties="similarProperties"
        class="similar-house-container"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import dateFormatter from '~/utils/dateFormatter.js';
  import upArrow from '@/assets/images/up_arrow.svg';
  import VueGallerySlideshow from 'vue-gallery-slideshow'
  import MainCardView from '@/components/MainCardView.vue'
  import parkingImg from '@/assets/quickfacts/Shape2.png'
  import yearBuiltImg from '@/assets/quickfacts/Shape1.png'
  import lotImg from '@/assets/quickfacts/Shape3.png'
  import heatingImg from '@/assets/quickfacts/Shape4.png'
  import coolingImg from '@/assets/quickfacts/Shape6.png'
  import countyImg from '@/assets/quickfacts/ic_county.png'
  import basementImg from '@/assets/quickfacts/ic_basement.png'
  import priceImg from '@/assets/quickfacts/ic_price.png'
  import typeImg from '@/assets/quickfacts/ic_type.png'
  import brightMlsLogo from '@/assets/images/ETjSD8oXsAEV99N.png'
  import DescriptionHouse from '@/components/Blocks/DescriptionHouse.vue';
  import capitalize from '@/utils/capitalize.js';
  import SimilarHomes from '@/components/Blocks/SimilarHomes.vue';
  import getHouseInfo from '~/utils/getHouseInfo.js';
  import getStatus from '~/utils/getStatus.js';

  export default {
    components: {
      SimilarHomes,
      DescriptionHouse,
      VueGallerySlideshow,
      MainCardView,
      upArrow,
    },
    head() {
      const propertyAddress = this.propertyInfo
        ? this.propertyInfo.LocationAddress.FullStreetAddress.toString().toLowerCase()
        : '-'
      const city = this.propertyInfo?.LocationAddress?.City.toString().toLowerCase()
      const propertyLocality = this.propertyInfo?.LocationAddress?.City ?
        (city[0].toUpperCase() + city.slice(1)) : '-'
      const propertyRegion = this.propertyInfo?.LocationAddress?.StateOrProvince.toString().toUpperCase() || '-'
      const propertyPostalCode = this.propertyInfo?.LocationAddress?.PostalCode || '-'
      const propertyCountryName = this.propertyInfo?.LocationAddress?.Country.toString().toUpperCase() || '-'
      const propertyImage = this.propertyInfo
        ? this.propertyInfo.ListingMedia.ListPictureURL
        : ''
      const remarks = this.propertyInfo
        ? this.propertyInfo.Remarks.PublicRemarks
        : '-'
      const description = `${getStatus(this.type, this.status)['type']}: View ${this.decImgs?.length} photos for ${capitalize(propertyAddress)}, ${propertyLocality}, ${propertyRegion} ${propertyPostalCode} a ${this.bed} bed, ${this.bath} bath, ${this.propertyInfo?.Property?.LotSizeSquareFeet ? this.propertyInfo.Property.LotSizeSquareFeet : '-'} Sq. Ft. ${this.type} built in ${this.propertyInfo?.ListingStructure?.YearBuilt ? this.propertyInfo.ListingStructure.YearBuilt : '-'}. See more at the Federa.com website.`
      const title = `${propertyAddress} | Federa`

      return {
        title: `${capitalize(propertyAddress)}, ${propertyLocality}, ${propertyRegion} ${propertyPostalCode} | Federa`,
        link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: `https://federa.com${this.$route.path}`
          }
        ],
        meta: [
          {
            hid: 'og:image',
            property: 'og:image',
            content: propertyImage.replace('http://', 'https://')
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: title
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `https://federa.com${this.$route.path}`
          },
          {hid: 'og:title', property: 'og:title', content: title},
          {
            hid: 'og:description',
            property: 'og:description',
            content: description
          },
          {
            hid: 'og:street-address',
            property: 'og:street-address',
            content: propertyAddress
          },
          {
            hid: 'og:locality',
            property: 'og:locality',
            content: propertyLocality
          },
          {
            hid: 'og:region',
            property: 'og:region',
            content: propertyRegion
          },
          {
            hid: 'og:postal-code',
            property: 'og:postal-code',
            content: propertyPostalCode
          },
          {
            hid: 'og:country-name',
            property: 'og:country-name',
            content: propertyCountryName
          },
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:description', name: 'twitter:description', content: description},
          {hid: 'twitter:title', name: 'twitter:title', content: title},
          {hid: 'twitter:image', name: 'twitter:image', content: propertyImage.replace('http://', 'https://')},
        ]
      }
    },
    data() {
      return {
        selectedHistory: '',
        visibleHistory: false,
        isSelected: '',
        ruleForm: {
          listingId: '',
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        visible: false,
        rules: {
          name: [
            {
              required: true,
              message: 'Please input name',
              trigger: 'blur'
            },
            {
              min: 3,
              trigger: 'blur'
            }
          ],
          phone: [
            {
              required: false
            }
          ],
          email: [
            {
              type: 'email',
              required: true,
              message: 'Please input valid email address',
              trigger: 'blur'
            }
          ],
          message: [
            {
              required: true,
              message: 'Please input your message',
              trigger: 'blur'
            },
            {
              min: 3,
              trigger: 'blur'
            }
          ]
        },
        historyListing: [],
        centerDialogVisible: false,
        brightMlsLogo: brightMlsLogo,
        similarProperties: [],
        mainImg: '',
        cost: '',
        square: null,
        bed: '',
        bath: '',
        address: '',
        type: '',
        decImgs: ['', '', '', '', '', '', '', ''],
        searchKey: '',
        pageLoading: false,
        isSearch: true,
        isLength: false,
        propertyInfo: null,
        moreInfoShow: false,
        quickFacts: [],
        interiorDetails: [],
        providerDetails: [],
        center: null,
        mobileImageShow: false,
        clusterStyle: [
          {
            url:
              'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
            width: 56,
            height: 56,
            textColor: '#fff'
          }
        ],
        chatButton: null
      }
    },
    async asyncData(context) {
      const {params, $config: {baseURLAPI, basicAuthUsername, basicAuthPassword}} = context

      const {id} = params
      if (id && id.length > 0) {
        const response = await axios({
          url: `${baseURLAPI}/property/${encodeURIComponent(id)}`,
          method: 'GET',
          timeout: 300 * 1000,
          auth: {
            username: basicAuthUsername,
            password: basicAuthPassword
          },
        })
        if (response.data.error) {
          return
        }

        const propertyData = response.data.property
        const propertyDetails = propertyData.rawData
        const propertyId = propertyDetails.Listing.ListingId

        let mediaList = []
        if (propertyData.media && propertyData.media.length > 0) {
          mediaList = propertyData.media.map(m => m.fullURL)
        }

        let similars = propertyData.related
        let s = []
        if (similars.length > 0) {
          similars.forEach((element, key) => {
            const parsedData = element.rawData
            const status = getStatus(parsedData.Property.PropertyType, parsedData.Listing.StandardStatus)

            let amount
            if (status.type === 'Sold') {
              amount =
                parsedData.ListingPricing.ClosePrice &&
                parsedData.ListingPricing.ClosePrice
                  ? parseFloat(parsedData.ListingPricing.ClosePrice)
                  : null
            } else {
              amount =
                parsedData.ListingPricing.ListPrice &&
                parsedData.ListingPricing.ListPrice
                  ? parseFloat(parsedData.ListingPricing.ListPrice)
                  : null
            }

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
            parsedData.photo = element.photo
            parsedData.pathPrefix = ''
            parsedData.fullAddress = element.slug
            if (
              parsedData.LocationAddress.StateOrProvince &&
              parsedData.LocationAddress.City
            ) {
              parsedData.pathPrefix = `/properties/${element.type
              .replace(/\s+/, '-')
              .toLowerCase()}/${parsedData.LocationAddress.StateOrProvince.toLowerCase()}/${parsedData.LocationAddress.City.toString().replace(
                /(\s+|\/)/,
                '-'
              ).toLowerCase()}`
            }
            s.push(parsedData)
          })
        }

        //money format part
        let amount = propertyData.price
        let historyListing = propertyData.historyListing
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
        return {
          similarProperties: s,
          decImgs: mediaList,
          propertyInfo: propertyDetails,
          mainImg: propertyData.photo || '-',
          cost: amount ? amount : '-',
          historyListing: historyListing ? historyListing : [],
          square:
            propertyDetails.ListingStructure.LivingArea &&
            propertyDetails.ListingStructure.LivingArea
              ? propertyDetails.ListingStructure.LivingArea
              : null,
          bed:
            propertyDetails.ListingStructure.BedroomsTotal &&
            propertyDetails.ListingStructure.BedroomsTotal
              ? propertyDetails.ListingStructure.BedroomsTotal
              : 0,
          bath:
            propertyDetails.ListingStructure.BathroomsFull &&
            propertyDetails.ListingStructure.BathroomsFull
              ? propertyDetails.ListingStructure.BathroomsFull
              : 0,
          address:
            propertyDetails.LocationAddress.FullStreetAddress &&
            propertyDetails.LocationAddress.FullStreetAddress
              ? propertyDetails.LocationAddress.FullStreetAddress +
              ' ' +
              propertyDetails.LocationAddress.City +
              ' ' +
              propertyDetails.LocationAddress.StateOrProvince +
              ' ' +
              propertyDetails.LocationAddress.PostalCode
              : '-',
          ruleForm: {
            listingId: propertyId.toString(),
            name: '',
            email: '',
            phone: '',
            message: `I am interested in ${
              propertyDetails.LocationAddress.FullStreetAddress
                ? capitalize(propertyDetails.LocationAddress.FullStreetAddress) +
                ' ' +
                capitalize(propertyDetails.LocationAddress.City) +
                ' ' +
                capitalize(propertyDetails.LocationAddress.StateOrProvince) +
                ' ' +
                propertyDetails.LocationAddress.PostalCode
                : '-'
            }.\n`
          },
          status: propertyData.status ? propertyData.status.toLowerCase() : '-',
          type: propertyData.type ? propertyData.type : '-',
          center: {
            lat: parseFloat(propertyDetails.LocationGIS.Latitude),
            lng: parseFloat(propertyDetails.LocationGIS.Longitude)
          },
          quickFacts: [
            {
              img: countyImg,
              title: 'County',
              value: propertyDetails.LocationAddress.County
            },
            {
              img: typeImg,
              title: 'Type',
              value: propertyDetails.Property.PropertyType
            },
            {
              img: parkingImg,
              title: 'Parking',
              value: propertyDetails.Property.AssignedParkingSpaces
                ? propertyDetails.Property.AssignedParkingSpaces
                : '-'
            },
            {
              img: yearBuiltImg,
              title: 'Year Built',
              value: propertyDetails.ListingStructure.YearBuilt
                ? propertyDetails.ListingStructure.YearBuilt
                : '-'
            },
            {
              img: lotImg,
              title: 'Lot',
              value: propertyDetails.Property.LotSizeSquareFeet
                ? propertyDetails.Property.LotSizeSquareFeet + 'Sqft'
                : '-'
            },
            {
              img: heatingImg,
              title: 'Heating',
              value: propertyDetails.ListingStructure.Heating
                ? propertyDetails.ListingStructure.Heating
                : '-'
            },
            // {
            //   img: require("../assets/quickfacts/Shape5.png"),
            //   title: "Price/Sqft",
            //   value: "Single Family"
            // },
            {
              img: coolingImg,
              title: 'Cooling',
              value: propertyDetails.ListingStructure.Cooling
                ? propertyDetails.ListingStructure.Cooling
                : '-'
            },
            {
              img: priceImg,
              title: 'Price/Sq.ft',
              value: propertyDetails?.Financial?.PricePerSquareFoot
            },
            {
              img: basementImg,
              title: 'Basement',
              value: propertyDetails.ListingStructure.Basement
            }
          ],
          providerDetails: [
            {
              type: 'Agent Name',
              value: propertyDetails.ListingAgent.ListAgentFullName
                ? propertyDetails.ListingAgent.ListAgentFullName
                : '-'
            },
            {
              type: 'Phone',
              value: propertyDetails.ListingAgent.ListAgentPreferredPhone
                ? propertyDetails.ListingAgent.ListAgentPreferredPhone
                : '-'
            },
            // {
            //   type: 'Email',
            //   value: propertyDetails.ListingAgent.ListAgentEmail
            //     ? propertyDetails.ListingAgent.ListAgentEmail
            //     : '-'
            // },
            {
              type: 'Office',
              value: propertyDetails.ListingOffice.ListOfficeName
                ? propertyDetails.ListingOffice.ListOfficeName
                : '-'
            },
            {
              type: 'Source',
              value: propertyDetails.Listing.ListingSourceBusinessPartner
                ? propertyDetails.Listing.ListingSourceBusinessPartner
                : '-'
            },
            {
              type: 'Days On Market',
              value: propertyDetails.ListingDates.DaysOnMarket
                ? propertyDetails.ListingDates.DaysOnMarket
                : '-'
            },
            {
              type: 'Sold Date',
              value: propertyDetails.ListingDates.CloseDate
                ? propertyDetails.ListingDates.CloseDate
                : '-'
            },
            {
              type: 'Came On Market',
              value: propertyDetails.ListingDates.MLSListDate
                ? propertyDetails.ListingDates.MLSListDate
                : ''
            }
          ],
          interiorDetails: [
            {
              type: 'Tax Annual Amount',
              value: propertyDetails.PropertyTax.TaxAnnualAmount
                ? '$' + propertyDetails.PropertyTax.TaxAnnualAmount
                : '-'
            },
            {
              type: 'Tax Year',
              value: propertyDetails.PropertyTax.TaxYear
                ? propertyDetails.PropertyTax.TaxYear
                : '-'
            },
            {
              type: 'Country Tax',
              value: propertyDetails.PropertyTax.CountyTax
                ? propertyDetails.PropertyTax.CountyTax
                : '-'
            },
            {
              type: 'Tax Assessment Amount',
              value: propertyDetails.PropertyTax.TaxAssessmentAmount
                ? '$' + propertyDetails.PropertyTax.TaxAssessmentAmount
                : '-'
            },
            {
              type: 'Assessment Year',
              value: propertyDetails.PropertyTax.AssessmentYear
                ? propertyDetails.PropertyTax.AssessmentYear
                : '-'
            },
            {
              type: 'Zoning',
              value: propertyDetails.PropertyTax.Zoning
                ? propertyDetails.PropertyTax.Zoning
                : '-'
            },
            {
              type: 'Land Use Code',
              value: propertyDetails.PropertyTax.LandUseCode
                ? propertyDetails.PropertyTax.LandUseCode
                : '-'
            },
            {
              type: 'Section',
              value: propertyDetails.PropertyTax.Section
                ? propertyDetails.PropertyTax.Section
                : '-'
            }
          ]
        }
      }
      return {pageLoading: false}
    },
    mounted() {
      let chatButton
      let that = this;

      sessionStorage.clear();

      (function (d, src, c) {
        var t = d.scripts[d.scripts.length - 1],
          s = d.createElement('script')
        s.id = 'la_x2s6df8d'
        s.async = true
        s.src = src
        s.onload = s.onreadystatechange = function () {
          var rs = this.readyState
          if (rs && rs != 'complete' && rs != 'loaded') {
            return
          }
          c(this)
        }
        t.parentElement.insertBefore(s, t.nextSibling)
      })(document, 'https://federa.ladesk.com/scripts/track.js', function (e) {
        chatButton = LiveAgent.createButton('vrv4b7cy', e)
        that.chatButton = chatButton
      })
    },
    methods: {
      async selectHistory(index, id) {
        if (this.isSelected !== index || this.isSelected === '') {
          this.visibleHistory = true;
          this.isSelected = index;
          this.selectedHistory = await getHouseInfo(id);
        } else {
          this.visibleHistory = false
          this.isSelected = '';
          this.selectedHistory = '';
        }
      },
      formatDate(date) {
        return dateFormatter(date)
      },
      chatWithAgent() {
        try {
          this.chatButton.onClick()
        } catch (error) {
          console.log(error)
        }
      },
      async submitForm(formName) {
        const valid = await this.$refs[formName].validate()
        if (valid) {
          this.centerDialogVisible = false
          const response = await axios({
            url: `${process.env.BASE_URL_API || 'https://api.federa.com'}/property/contact`,
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(this.ruleForm)
          })
          if (response.error) {
            //some error
            this.$message({
              message: 'Sorry. Try again later!',
              type: 'error'
            })
          } else {
            //success
            this.$message({
              message: 'Congrats, message is sent to agent.',
              type: 'success'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      },
      handleMainProperty(key) {
        //   scrollTo(0, 800)
        const selProperty = this.similarProperties[key]
        const selAddress = selProperty.LocationAddress.FullStreetAddress.split(
          ' '
        ).join('-')
      },
    },
    loading: true
  }
</script>

<style lang="scss" scoped>
  .property-container-margin {
    margin-top: 40px;
  }

  @media screen and (max-width: 660px) {
    .property-container-margin {
      margin-top: 80px;
    }
  }

  .history-listing {
    min-height: 0 !important;

    &-caption {
      font-weight: bold;
      font-size: 15px;
      line-height: 100%;
      color: #000000;
    }

    &-title {
      margin-top: 20px;
      font-weight: bold;
      font-size: 18px;
      line-height: 100%;
      color: #000000;
    }

    &-item {
      cursor: pointer;
    }
  }

  .history-listing-list {
    opacity: 0;
    visibility: hidden;
    transition: opacity .7s;
  }

  .visibility {
    opacity: 1 !important;
    visibility: visible;
  }

  .arrow-down {
    transition: .3s;
    transform: rotateZ(180deg);
  }

  .similar-house {
    border-top: 1px solid #d8dce5;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.12), 0 -3px 3px 0 rgba(0, 0, 0, 0.04);

    &-container {
      min-height: 0 !important;
    }
  }
</style>
