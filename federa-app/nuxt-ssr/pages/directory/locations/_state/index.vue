<template>
  <div class="container" style="margin: 0 auto">
    <p>&nbsp;</p>
    <h1 class="text-center">Search by city</h1>
    <p>&nbsp;</p>
    <el-row>
      <el-col :xs="24" :sm="24" :md="14" :lg="12" :xl="12" class="map-container">
        <div id="map"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="12" :xl="12">
        <el-row :gutter="10" v-if="cityOfState.length">
          <el-col
            :xs="12"
            :sm="6"
            :md="6"
            :lg="6"
            :xl="6"
            v-for="(groupItem, key) in cityOfState"
            :key="key"
            style="margin-bottom: 20px"
          >
            <div v-if="groupItem.link" @mouseover="showInfo(groupItem.city)">
              <nuxt-link
                :title="'Click to see ' + groupItem.city"
                :to="groupItem.link"
                class="text-decoration-none"
              >{{groupItem.city}}</nuxt-link>
            </div>
            <div v-else>
              <span v-b-tooltip.hover title="Coming Soon!">{{groupItem.city}}</span>
            </div>
          </el-col>
        </el-row>
        <div class="see-more-container">
          <div class="see-more" v-if="loadMore()" v-on:click="nextPage()">
            See More
            <i slot="prefix" class="el-input__icon el-icon-arrow-down"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </div>
</template>

<script>
import axios from 'axios'
import usFeatures from '../us_features.json'
import usCities from '../us_cities.json'
import { log } from 'util'
import { filter } from 'lodash'
import layersImage from '@/assets/images/layers.png'


export default {
  data() {
    return {
      items: [],
      itemsData: [],
      currentPage: 0,
      type: this.$route.params.key,
      statesJson: null,
      infowindow: null,
      toogleStatus: false,
      layersImage: layersImage,
    }
  },
  async asyncData({
    params,
    payload,
    $config: { baseURLAPI, basicAuthUsername, basicAuthPassword }
  }) {
    const { state } = params
    const groupType = !state || state.length === 0 ? '' : `/${state}`
    let items = payload
    if (!items) {
      const res = await axios({
        url: `${baseURLAPI}/property/groups${groupType}`,
        method: 'GET',
        auth: {
          username: basicAuthUsername,
          password: basicAuthPassword
        }
      })
      items = res.data.items
    }
    const cities = usCities.filter(item => item.state_id === state.toString().toUpperCase())
    const cityOfState = cities.map(data =>{
        const item = items.find(i => i.name.toLowerCase() === data.city.toLowerCase())
        return{
          ...data,
          link: item? item.link :''
        }
      });
    const itemsData = []
    const chunk_size = 50
    for (let index = 0; index < cityOfState.length; index += chunk_size) {
      itemsData.push(cityOfState.slice(index, index + chunk_size))
    }

    return {
      itemsData,
      cityOfState: itemsData[0],
      allCity: items,
      type: state ? state.toUpperCase() : ''
    }
  },
  methods: {
    loadMore() {
      return this.currentPage < this.itemsData.length - 1
    },

    nextPage: function() {
      if (this.currentPage < this.itemsData.length - 1) {
        this.currentPage++
        const newPage = this.currentPage
        this.cityOfState = [...this.cityOfState, ...this.itemsData[newPage]]
      }
    },
    getCurrentState() {
      return this.$route.params.state.toString().toUpperCase()
    },
    initMap() {
      this.geocoder = new google.maps.Geocoder()
      const bounds = new google.maps.LatLngBounds();
      this.infowindow = new google.maps.InfoWindow();
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 39.449555999,
          lng: -75.716320699
        },
        zoom: 7,
        gestureHandling: 'greedy'
      })
      const buttonElement = `<button class="button isActive"><input class="image" type="image" src="${layersImage}" /></button>`;
      const controlUI = document.createElement('div');
      controlUI.className = 'map-toolbar'
      controlUI.innerHTML = buttonElement;
      controlUI.index = 1;
      controlUI.addEventListener('click', this.buttonHide);
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlUI);
      this.getCityData()
      const cities = usCities.filter(item => item.state_id === this.getCurrentState())
      const locations = cities.map(({lat, lng, city }) => ({ lat, lng, city }))
      const polygonCoords = locations.map(item => new google.maps.LatLng(item.lat, item.lng))

      for (let i = 0; i < polygonCoords.length; i++) {
        bounds.extend(polygonCoords[i]);
      }

      this.map.setCenter(bounds.getCenter());
      this.markers = {}

      const allCitiesNameInDB = this.allCity;

      cities.forEach(item => {
        const { lat, lng, city } = item;
        var isCityHasProperty = allCitiesNameInDB.findIndex(item => item.name.toLowerCase() === city.toLowerCase()) > -1 ;
        const marker = new google.maps.Marker({
          position: { lat, lng },
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: isCityHasProperty ? "#0040D2": "#bdbebf",
            fillOpacity: 1.0,
            strokeColor: "white",
            strokeOpacity: 1.0,
            strokeWeight: 1,
            scale: 5
          },
          data: item,
          hasLink: allCitiesNameInDB.findIndex(item => item.name.toLowerCase() === city.toLowerCase()) > -1
        })

        marker.setMap(this.map)

        this.markers[item.city.toUpperCase()] = marker

        google.maps.event.addListener(marker, 'mouseover', (event) => {
          this.showInfoWindowByMarkerId(marker)
        });
        google.maps.event.addListener(marker, 'click', function() {
          marker.setVisible(false);
        });
        const cityLink = `/properties/${item.state_id.toLowerCase()}/${item.city.toLowerCase().replace(' ', '-')}?q=${item.city.toLowerCase().replace(' ', '-')} ${item.state_id.toLowerCase()}`
        google.maps.event.addListener(marker, 'click', (event) => {
          this.goToSearchByCityPage(cityLink)
        })
      })
    },
    showInfoWindowByMarkerId(marker) {
      const { data } = marker

      if (this.infowindow) {
        this.infowindow.close()
      }
      const content = `
        Name: ${data.city} </br>
        County: ${data.county_name} </br>
      `
      this.infowindow.setContent(`<div> ${content} </div>`)
      this.infowindow.open(this.map, marker);
    },
    getCityData() {
      const features = [usFeatures.features.find(i => i.code === this.getCurrentState())]
      const geoConf = {
        type: 'FeatureCollection',
        features
      }

      this.myCityData = new google.maps.Data()
      this.myCityData.addGeoJson(geoConf, 'city')
      this.myCityData.setStyle({
        fillOpacity: 0,
        strokeWeight: 3,
        strokeColor: '#0040D2'
      })
      this.myCityData.setMap(this.map)
    },
    showInfo(name) {
      const marker = this.markers[name.toUpperCase()]
      if (marker) {
        this.showInfoWindowByMarkerId(marker)
      }
    },
    goToSearchByCityPage(path) {
      if (path) {
        this.$router.push({ path })
      }
    },
    buttonHide(event){
      this.toogleStatus = !this.toogleStatus;
      if(this.toogleStatus) {
        event.target.closest('button').classList.add('isActive');
      }
      else{
        event.target.closest('button').classList.remove('isActive');
      }
      const markers = this.markers
      for(const [index, item] of Object.entries(this.markers)) {
        if (!item.hasLink) {
          item.setMap(this.toogleStatus ? this.map : null)
        }
      }

    },
  },
  created() {},
  mounted() {
    this.initMap()
  },
  computed: {}
}
</script>
<style lang="scss" scope>
  #map {
    margin-right: 10px;
    height: 500px;
    position: relative;
  }
  .map-toolbar{
    position: absolute;
    margin: 15px;
    top: 44px !important;
    right: -5px  !important;
  }
  .see-more-container {
    text-align: center;
  }
  .see-more {
    color: #2452cc;
    cursor: pointer;
  }
  .map-container{
    position: relative;
  }
  .button{
    background: none rgb(255, 255, 255);
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    cursor: pointer;
    user-select: none;
    border-radius: 2px;
    height: 40px;
    width: 40px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    overflow: hidden;
    top: 0px;
    right: 0px;
  }
  .image{
    width: 25px;
    height: 25px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    outline: none;
  }
  .isActive
  {
    border: 2px solid #2452cc;
  }
</style>
