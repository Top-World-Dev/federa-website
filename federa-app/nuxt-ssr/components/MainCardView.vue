<template>
  <div class="property-detail card">
    <div class="card-main-image">
      <el-image :src="mainImg" alt="Card image cap" @click="viewDetail">
        <div
          slot="placeholder"
          class="image-slot"
          style="background: gainsboro;text-align: center; display:flex;width:100%; height: 35rem; justify-content:right; align-items:center;color: #000"
        >
          <i class="el-icon-picture-outline" style="font-size: 5rem;margin:auto"></i>
        </div>
        <div
          slot="error"
          class="image-slot"
          style="background: gainsboro;text-align: center; display:flex;width:100%; height: 35rem; justify-content:right; align-items:center;color: #000"
        >
          <i class="el-icon-picture-outline" style="font-size: 5rem;margin:auto"></i>
        </div>
      </el-image>
    </div>
    <div class="card-body">
      <div class="content">
        <div class="cost">
          <span>${{cost}}</span>
        </div>
        <div class="detail" style="margin: 10px 0; text-align: left;">
          <span class="value">{{square}}</span>
          <span class="unit">Sq.Ft |</span>
          <span class="value">{{bed}}</span>
          <span class="unit">Bed |</span>
          <span class="value">{{bath}}</span>
          <span class="unit">Bath</span>
        </div>
      </div>
      <!-- <el-tooltip class="item" effect="dark" :content="address" placement="bottom-start"> -->
      <div class="address mt-3">
        <h1>{{address.toLowerCase()}}</h1>
      </div>
      <!-- </el-tooltip> -->
      <div
        style="display:flex; justify-content: flex-start; align-items: center; font-size: 15px; margin-top: 5px;"
      >
        <div class="status-dot" :style="'background:' + type"></div>
        <b>{{status}}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log(context)
  }
}
</script>

<style lang="scss">
.property-detail {
  .card-main-image {
    width: 100%;
    height: 22rem;
    .el-image {
      display: flex;
      width: auto;
      height: 100%;
      padding: 1px;
      margin: 0 auto;
      background: white;
      &__inner {
        width: auto;
        height: 100%;
        margin: 0 auto;
      }
    }
  }
  .card-body {
    .content {
      .el-row {
        display: flex;
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 1446px) {
  .property-detail {
    .card-main-image {
      height: 20rem;
    }
    .card-body {
      padding: .8rem;
      .content {
        .el-row {
          flex-direction: row;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .property-detail {
    .card-main-image {
      height: 20rem;
    }
    .card-body {
      padding: .8rem;
      .content {
        .el-row {
          flex-direction: column;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .property-detail {
    .card-main-image {
      height: 15rem;
    }
    .card-body {
      padding: .5rem;
      .content {
        .el-row {
          flex-direction: column;
        }
      }
    }
  }
}
</style>

<style scoped>
.cost {
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
}
.detail {
  font-size: 15px;
  font-style: normal;

  /* line-height: 100%; */
  letter-spacing: 0.02em;
}
.value {
  padding-right: 5px;
  color: #000;
  font-weight: bold;
}
.unit {
  padding-right: 5px;
  color: #979797;
  font-size: 15px;
  font-weight: normal;
  line-height: 100%;
}
.address, .address h1 {
  /* overflow: hidden; */
  width: 100%;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  /* text-overflow: ellipsis;
  white-space: nowrap; */
}
.type {
  display: flex;
  align-items: center;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
}
.status-dot {
  width: 8px;
  height: 8px;
  margin-right: 5px;
  border-radius: 50%;
}
.red-point {
  width: 5px;
  height: 5px;
  margin-right: 4px;
  background: #f00;
  border-radius: 50%;
}
</style>
<script>
export default {
  data() {
    return {}
  },
  props: {
    mainImg: {
      default: ''
    },
    cost: {
      default: '$183,693,000'
    },
    square: {
      default: '24,000'
    },
    bed: {
      default: 8
    },
    bath: {
      default: '10/3'
    },
    address: {
      default: '9739 Via Roma, Burbank, CA 91054'
    },
    status: {
      default: 'For Sale'
    },
    type: {
      default: 'Residential'
    }
  },
  methods: {
    viewDetail() {
      this.$parent.showImages()
    }
  }
}
</script>
