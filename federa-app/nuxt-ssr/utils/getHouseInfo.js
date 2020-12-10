import axios from 'axios';
import capitalize from '~/utils/capitalize.js';
import countyImg from 'assets/quickfacts/ic_county.png';
import typeImg from 'assets/quickfacts/ic_type.png';
import parkingImg from 'assets/quickfacts/Shape2.png';
import yearBuiltImg from 'assets/quickfacts/Shape1.png';
import lotImg from 'assets/quickfacts/Shape3.png';
import heatingImg from 'assets/quickfacts/Shape4.png';
import coolingImg from 'assets/quickfacts/Shape6.png';
import priceImg from 'assets/quickfacts/ic_price.png';
import basementImg from 'assets/quickfacts/ic_basement.png';

async function getHouseInfo (id) {
  if (id) {
    const response = await axios({
      url: `${process.env.BASE_URL_API || 'https://api.federa.com'}/property/history-listing/${id}`,
      method: 'GET',
      timeout: 300 * 1000,
      auth: {
        username: process.env.BASIC_AUTH_USERNAME || 'Federa',
        password: process.env.BASIC_AUTH_PASSWORD || 'FederaBasicAuthPassword'
      }
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
      decImgs: mediaList,
      propertyInfo: propertyDetails,
      mainImg: propertyData.photo || '-',
      cost: amount ? amount : '-',
      historyListing: historyListing ? historyListing : [],
      square:
        propertyDetails.ListingStructure.LivingArea &&
        propertyDetails.ListingStructure.LivingArea
          ? propertyDetails.ListingStructure.LivingArea
          : '-',
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
          value: propertyDetails.Financial.PricePerSquareFoot
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
  return { pageLoading: false }
}

export default getHouseInfo;
