<template>
  <div class="container" style="margin: 0 auto">
    <p>&nbsp;</p>
    <h1 class="text-center">Search by state</h1>
    <p>&nbsp;</p>
    <el-row>
      <el-col :xs="24" :sm="24" :md="14" :lg="12" :xl="12">
        <svg ref="svg" width="100%" height="300">
          <path
            v-for="state in stateData"
            :key="state.feature.id"
            :id="state.feature.code"
            :d="pathGenerator(state.feature)"
            @click="goToState(state.feature.link)"
            :style="{
              fill:  currentHoveringStateCode && state.feature.code === currentHoveringStateCode ? '#0040D2' :  state.color,
              'stroke-width': 1,
              stroke: 'rgb(255, 255, 255)',
              opacity: currentHoveringStateCode && state.feature.code === currentHoveringStateCode ? '0.7' :  '1',
            }"
            @mouseover="mapHoverEvent(state.feature.code)" @mouseleave="mapLeaveEvent()"
          />
          <g
            v-for="state in stateData"
            :key="state.feature.id + 'label'"
            :transform="genText(state.feature)"
          >
            <text y="2" :font-size="state.fontSize" text-anchor="middle">{{state.feature.code}}</text>
          </g>
        </svg>
      </el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="12" :xl="12">
        <el-row :gutter="10" v-if="statesJson.length">
          <el-col
            :xs="12"
            :sm="6"
            :md="6"
            :lg="6"
            :xl="6"
            v-for="(groupItem, key) in statesJson"
            :key="key"
            style="margin-bottom: 20px"
          >
            <div v-if="groupItem.link" @mouseover="stateHoverEvent(groupItem.code)" @mouseleave="stateLeaveEvent()">
              <nuxt-link
                v-b-tooltip.hover
                :title="'Click to see ' + groupItem.properties.name"
                :to="groupItem.link"
                class="text-decoration-none"
                :id="groupItem.code"
              >{{groupItem.properties.name}}</nuxt-link>
            </div>
            <div v-else  @mouseover="stateHoverEvent(groupItem.code)" @mouseleave="stateLeaveEvent()">
              <span v-b-tooltip.hover title="Coming Soon!" :id="groupItem.code">{{groupItem.properties.name}}</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </div>
</template>

<script>
import axios from 'axios'
import * as d3 from 'd3'
import json from './us_features.json'
import USStates from './us_state'

export default {
  data() {
    return {
      items: [],
      type: this.$route.params.key,
      statesJson: null,
      USStates,
      currentHoveringStateCode: '',
      currentHoveringMapCode: ''
    }
  },
  async asyncData({
    payload,
    $config: { baseURLAPI, basicAuthUsername, basicAuthPassword }
  }) {
    let items = payload
    if (!items) {
      const res = await axios({
        url: `${baseURLAPI}/property/groups`,
        method: 'GET',
        auth: {
          username: basicAuthUsername,
          password: basicAuthPassword
        }
      })
      items = res.data.items
    }
    const statesJsonContent = json.features.map(data => {
      const item = items.find(i => i.name === data.code)

      return {
        ...data,
        link: item ? item.link : ''
      }
    });

    return {
      items,
      type: 'states',
      statesJson: statesJsonContent
    }
  },
  methods: {
    genText(d) {
      const centroid = d3
        .geoPath()
        .projection(this.projection)
        .centroid(d)
      if (centroid[0]) {
        return 'translate(' + centroid + ')'
      }

      return 'translate(0,0)'
    },
    stateHoverEvent(code) {
      this.currentHoveringStateCode = code;
    },
    stateLeaveEvent(){
      this.currentHoveringStateCode = '';
      this.$root.$emit('bv::hide::tooltip')
    },
    mapHoverEvent(code){
      this.$root.$emit('bv::hide::tooltip')
      this.$root.$emit('bv::show::tooltip', code)
    },
    mapLeaveEvent(){
      this.$root.$emit('bv::hide::tooltip')
    },
    goToState(path) {
      if (path) {
        this.$router.push({ path })
      }
    },
  },
  created() {},
  computed: {
    projection() {
      let width = 680
      let center = 250

      if (typeof window !== 'undefined') {
        if (window?.screen?.width < 700) {
          width = window.screen.width
          center = 180
        }
      }

      return d3
        .geoAlbersUsa()
        .scale(width)
        .translate([center, 150])
    },
    pathGenerator() {
      return d3.geoPath().projection(this.projection)
    },
    stateData() {
      let data = [];
      if (this.statesJson) {
        data = this.statesJson.map(feature => {
          let state = this.USStates.find(state => state.code === feature.code)
          const hasData = this.items.find(i => i.name === state.code)
          const color = hasData ? '#66b1ff' : '#b5d9f2'
          let fontSize = 10
          const stateSmall = ['VT', 'NH', 'MA', 'CT', 'RI', 'NJ', 'MD', 'PR', 'DE']
          if (stateSmall.includes(feature.code)) {
            fontSize = 0
          }
          return {
            feature,
            color,
            fontSize
          }
        })
      }
      return data
    }
  }
}
</script>

<style lang="scss" scope>
path:hover {
  fill-opacity: 0.7;
  cursor: pointer;
}
</style>
