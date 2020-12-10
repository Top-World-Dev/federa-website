<template>
  <div
    class="search-input-with-autocomplete"
    v-on:keyup.enter="onSubmit"
    v-click-outside="setInputNotActive"
  >
    <div
      @click="setInputActive"
      style="padding-bottom: 20px"
      :class="{
        'search-input-with-autocomplete__input': true,
        'search-input-with-autocomplete__input--active': isInputActive && predictions.length > 0
      }"
    >
      <el-input @input="onInputWithPredictions" :value="value" placeholder="Search">
        <i class="input-buttons" style="margin-left: 25px" slot="prefix" @click="onSubmit">
          <svg width="18" height="18" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M25.3696 22.4537L18.5249 15.6063C19.7518 13.933 20.4091 11.9099 20.3999 9.83492C20.3765 4.41859 15.9956 0.0313829 10.5793 9.94961e-05C7.98725 -0.0116278 5.4982 1.01377 3.6666 2.84787C1.835 4.68196 0.813009 7.1724 0.828294 9.76438C0.851704 15.1812 5.23298 19.5688 10.6498 19.6001C12.7332 19.6091 14.7637 18.9442 16.4383 17.7046L16.4454 17.6992L23.2839 24.5412C23.6536 24.9291 24.2045 25.0861 24.7232 24.9514C25.2418 24.8166 25.6468 24.4114 25.781 23.8926C25.9153 23.3739 25.7578 22.8231 25.3696 22.4537ZM10.6426 17.6397C6.30942 17.6148 2.80445 14.1051 2.78543 9.77186C2.77373 7.69855 3.59139 5.7066 5.0564 4.23943C6.5214 2.77226 8.51215 1.95164 10.5855 1.96026C14.9187 1.98518 18.4237 5.49489 18.4427 9.82811C18.4544 11.9014 17.6368 13.8934 16.1718 15.3605C14.7067 16.8277 12.716 17.6483 10.6426 17.6397Z"
              fill="white"/>
          </svg>
        </i>
        <i class="input-buttons" style="margin-right: 15px" slot="suffix" @click="() => onInput('')">
          <svg width="15" height="17" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5254 21.2441C17.3154 21.2441 22.0957 16.4639 22.0957 10.6738C22.0957 4.87305 17.3047 0.0927734 11.5146 0.0927734C5.72461 0.0927734 0.944336 4.87305 0.944336 10.6738C0.944336 16.4639 5.72461 21.2441 11.5254 21.2441ZM8.04492 15.1641C7.47559 15.1641 7.02441 14.7021 7.02441 14.1328C7.02441 13.8643 7.13184 13.6172 7.33594 13.4238L10.0752 10.6738L7.33594 7.93457C7.14258 7.75195 7.02441 7.49414 7.02441 7.22559C7.02441 6.64551 7.47559 6.20508 8.04492 6.20508C8.3457 6.20508 8.58203 6.3125 8.77539 6.50586L11.5146 9.23438L14.2754 6.49512C14.4795 6.29102 14.7051 6.19434 14.9951 6.19434C15.5752 6.19434 16.0264 6.64551 16.0264 7.21484C16.0264 7.49414 15.9189 7.71973 15.7148 7.92383L12.9756 10.6738L15.7041 13.4131C15.8975 13.6064 16.0156 13.8535 16.0156 14.1328C16.0156 14.7021 15.5645 15.1641 14.9951 15.1641C14.6836 15.1641 14.4365 15.0459 14.2539 14.8633L11.5146 12.1348L8.78613 14.8633C8.60352 15.0566 8.3457 15.1641 8.04492 15.1641Z"
              fill="white"/>
          </svg>
        </i>
      </el-input>
    </div>
    <div
      :class="{
        'search-input-with-autocomplete__autocomplete': true,
        'search-input-with-autocomplete__autocomplete--active': isInputActive && predictions.length > 0
      }"
    >
      <autocomplete-options-container
        :options="predictions"
        :onOptionPicked="onInput"
      />
    </div>
  </div>
</template>


<script>
  import AutocompleteOptionsContainer from "~/components/inputs/SearchWithAutocomplete/AutocompleteOptionsContainer";
  import vClickOutside from 'v-click-outside'


  export default {
    name: "SearchWithAutocomplete",
    components: {AutocompleteOptionsContainer},

    directives: {
      clickOutside: vClickOutside.directive
    },

    props: {
      value: String,
      onInput: Function,
      onSubmit: Function,
    },

    data() {
      return {
        isInputActive: false,
        predictions: [],
        moreTimeOut: null,
      }
    },

    methods: {
      setInputNotActive() {
        this.isInputActive = false;
      },
      setInputActive() {
        this.isInputActive = true;
      },

      onInputWithPredictions(value) {
        this.onInput(value);
        this.predictLocations(value);
      },

      predictLocations(value) {
        if (value.length >= 1 && !this.moreTimeOut) {
          this.moreTimeOut = setTimeout(async () => {
            const service = new google.maps.places.AutocompleteService();
            service.getPlacePredictions(
              {
                input: this.value,
                componentRestrictions: {country: 'us'}
              },
              (results, status) => {
                if (status === "OK") this.predictions = Array.from(new Set(results.map(r => r.description).slice(0, 5)));
                else this.predictions = [];
              }
            );

            this.moreTimeOut = null;
          }, 100);
        }
      }
    }
  }
</script>


<style lang="less">
  .search-input-with-autocomplete {
    position: relative;
    width: 100%;

    & > .search-input-with-autocomplete__input {
      border: 1px solid transparent;
      border-bottom: none;
      width: 100%;
      padding: 5px 5px 6px 6px;
      border-radius: 12px 12px 0 0;
      background: transparent;
    }

    & > .search-input-with-autocomplete__input--active {
      background: white;
      border: 1px solid rgb(230, 230, 230);
      border-bottom: none;
    }


    & > .search-input-with-autocomplete__autocomplete {
      border: 1px solid transparent;
      border-top: none;
      z-index: 10;
      display: none;
      opacity: 0;
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      border-radius: 0 0 12px 12px;
      background: white;
      grid-template-columns: auto;
    }

    & > .search-input-with-autocomplete__autocomplete--active {
      opacity: 1 !important;
      display: grid !important;
      border: 1px solid rgb(230, 230, 230);
      border-top: none;
    }


    & input {
      color: #767676;
      background: rgb(230, 230, 230);
      border-radius: 8px;
      border: none !important;
      padding-left: 60px !important;
      padding-right: 45px !important;
    }

    & path {
      fill: #767676;
    }

    & .input-buttons {
      height: 100%;
      display: grid;
      justify-content: center;
      align-content: center;
    }

    & .input-buttons:hover {
      cursor: pointer;
      fill: #1989fa !important;
    }
  }

</style>
