<template>
  <div class="listing-agreements-page">
    <div class="header">
      <img class="search-icon" src="~assets/images/search-figma.png" alt="">
      <img class="plus-icon" src="~assets/images/plus-figma.png" alt="">
      <span class="header__text">
        Browse your Listing Documents
      </span>
    </div>
    
    <div class="page-content">
      <div v-for="element in elements" class="one-item">
        <div class="one-item-info">
          <div class="block-image">
            <img src="~assets/images/blue_folder.png" alt="">
          </div>
          <div class="text-content">
            <div class="name-text">
            <span class="text">
              {{ element.name }}
            </span>
            </div>
  
            <div class="info-text">
            <span class="text">
              {{ element.info }}
            </span>
            </div>
          </div>

    
          <div class="menu">
            <el-popover
              placement="left"
              width="150"
              trigger="click"
            >
              <div @click="actionToClick()" class="popup-menu">
                Delete
              </div>
              <img slot="reference" src="~assets/images/dots.png" alt="">
            </el-popover>
            
          </div>
          
        </div>
        <div class="line"></div>
      </div>

      
    </div>
  </div>

</template>

<script>
  export default {
    layout: 'admin',
    name: "index",
    data() {
      return {
        elements: [
          {
            name: 'Listing Agreements',
            info: '234.4 MB  21hours ago'
          },
          {
            name: 'Home Inspection Checklist',
            info: '234.4 MB  Jul 2, 2020 at 10:49 AM'
          },
          {
            name: 'Closing Documents',
            info: '234.4 MB  Mar 10, 2020 at 1:53 AM'
          },
          
        ]
      }
    },
    methods: {
      actionToClick() {
        // do something
        // console.log(123)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    z-index: 0;
    width: calc(100% + 40px);
    height: 162px;
    background-image:  url('~assets/images/background-blue-image.png');
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-family: 'SFUIText-Regular';
    margin-left: -20px;
    margin-top: -20px;
    margin-right: -20px;
  
  &__text {
     color: white;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
     vertical-align: center;
     text-align: center;
     padding: 0;
     letter-spacing: -0.24px;
  
    @media(max-width: 660px) {
      font-size: 24px;
    }
   }
  }
  
  .one-item-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
    position: relative;
    
    .block-image {
      margin-right: 46px;
    }
    
    .name-text {
     // margin: 0 0 -4px 0;
      width: 350px;
      .text {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.24px;
        font-weight: bold;
        font-family: 'SFUIText-Regular';
      }
    }
    
    .info-text {
      margin: 0 0 -12px 0;
      width: 300px;
      .text {
        letter-spacing: -0.24px;
        font-size: 12px;
        line-height: 26px;
      }
    }
    
    .menu {
      position: absolute;
      right: 50px;
    }
  }
  
  .one-item .line {
    width: calc(100% + 40px);
    height: 1px;
    margin: 0 -20px;
    background-color: #CBCBCB;
  }
  
  .text-content {
    display: flex;
    flex-direction: row;
  }
  
  .search-icon {
    display: none;
  }
  
  .plus-icon {
    display: none;
  }
  
  @media screen and (max-width: 1170px) {
    .text-content {
      display: flex;
      flex-direction: column;
    }
  
  }
  @media screen and (max-width: 600px) {
    .name-text {
     // margin: 0 0 -4px 0;
      width: auto;
      .text {
        font-size: 16px !important;
        font-weight: bold;
      }
    }
  
    .info-text {
      margin: 0 0 -12px 0;
      width: auto;
      .text {
        font-size: 12px !important;
      }
    }
  
    .block-image {
      margin-right: 0 !important;
      
      img {
        width: 30px;
        height: 25px;
        margin-right: 15px;
      }
    }
  
    .menu {
      right: 7px !important;
    }
    
    .line {
      width: 100% !important;
      margin: 0 !important;
    }
    
    .header {
      position: relative;
      
      .search-icon {
        display: block;
        position: absolute;
        right: 62px;
        top: 27px;
      }
  
      .plus-icon {
        display: block;
        position: absolute;
        right: 30px;
        top: 27px;
      }
    }
  

  }

</style>

<style>
  .el-popper:hover > .popper__arrow::after {
    border-left-color: #e1e1e1;
  }
  .el-popper:hover {
    background-color: #e1e1e1;
  }

  .el-popper:active > .popper__arrow::after {
    border-left-color: #cbcbcb;
  }
  .el-popper:active {
    background-color: #cbcbcb;
  }
</style>
