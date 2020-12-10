<template>
  <div>
    <div
      :class="{'tag': true, 'tag-picked': !!isPicked, 'tag-recommended': !!isRecommended, 'tag-more': !!isMore}"
      v-popover:popover
    >
      <p>#{{name}}</p>
    </div>

    <el-popover
      ref="popover"
      v-if="!!isPicked || !!isMore"
      placement="bottom"
      trigger="click"
      :visible-arrow="false"
      popper-class="tag-popover"
    >
      <div class="tag-option">
        <div class="tag-option-header">
          <h4>#{{name}}</h4>
          <div v-if="!!isPicked" @click="deleteTag" class="delete-tag-button">
            <svg width="20" height="20" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                style="fill: black"
                d="M11.5254 21.2441C17.3154 21.2441 22.0957 16.4639 22.0957 10.6738C22.0957 4.87305 17.3047 0.0927734 11.5146 0.0927734C5.72461 0.0927734 0.944336 4.87305 0.944336 10.6738C0.944336 16.4639 5.72461 21.2441 11.5254 21.2441ZM8.04492 15.1641C7.47559 15.1641 7.02441 14.7021 7.02441 14.1328C7.02441 13.8643 7.13184 13.6172 7.33594 13.4238L10.0752 10.6738L7.33594 7.93457C7.14258 7.75195 7.02441 7.49414 7.02441 7.22559C7.02441 6.64551 7.47559 6.20508 8.04492 6.20508C8.3457 6.20508 8.58203 6.3125 8.77539 6.50586L11.5146 9.23438L14.2754 6.49512C14.4795 6.29102 14.7051 6.19434 14.9951 6.19434C15.5752 6.19434 16.0264 6.64551 16.0264 7.21484C16.0264 7.49414 15.9189 7.71973 15.7148 7.92383L12.9756 10.6738L15.7041 13.4131C15.8975 13.6064 16.0156 13.8535 16.0156 14.1328C16.0156 14.7021 15.5645 15.1641 14.9951 15.1641C14.6836 15.1641 14.4365 15.0459 14.2539 14.8633L11.5146 12.1348L8.78613 14.8633C8.60352 15.0566 8.3457 15.1641 8.04492 15.1641Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div v-if="!!isMore" class="tag-more-content">
          <input class="tag-input" type="text" placeholder="Input tag name" @input="onMoreInput"/>
          <div class="scroll">
            <div
              v-for="filter in foundFilters"
              :key="filter.name">
              <div class="tag-option-element" @click="() => onFilterPicked(filter)">
                <p>#{{filter.name}} {{step}}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="type === `number`">
          <el-slider
            range
            :show-tooltip="false"
            :value="currentOptions"
            @input="onRangeChange"
            :min="+initialOptions[0]"
            :max="+initialOptions[1]"
            :step="step"
          />
          <div style="display: grid; grid-template-columns: 50px 1fr auto auto; margin-bottom: 5px; margin-top: 10px">
            <h5 style="font-weight: bold; color: black; margin: auto 0; text-align: left;">Min</h5>
            <input
              class="tag-input" type="number" :value="currentOptions[0]"
              @change="(e) => onRangeInputSubmit(e.target.value,'min')"
            />
            <button
              class="tag-input-button" style="margin: auto auto auto 10px; border-radius: 50% 0 0 50%"
              @click="() => onRangeInputSubmit(currentOptions[0] - step, 'min')"
            >-
            </button>
            <button
              class="tag-input-button" style="margin: auto auto auto 1px; border-radius: 0 50% 50% 0"
              @click="() => onRangeInputSubmit(currentOptions[0] + step, 'min')"
            >+
            </button>
          </div>
          <div style="display: grid; grid-template-columns: 50px 1fr auto auto;">
            <h5 style="font-weight: bold; color: black; margin: auto 0; text-align: left">Max</h5>
            <input
              class="tag-input" type="number" :value="currentOptions[1]"
              @change="(e) => onRangeInputSubmit(e.target.value,'max')"
            />
            <button
              class="tag-input-button" style="margin: auto auto auto 10px; border-radius: 50% 0 0 50%"
              @click="() => onRangeInputSubmit(currentOptions[1] - step, 'max')"
            >-
            </button>
            <button
              class="tag-input-button" style="margin: auto auto auto 1px; border-radius: 0 50% 50% 0"
              @click="() => onRangeInputSubmit(currentOptions[1] + step, 'max')"
            >+
            </button>
          </div>
          <h5 style="text-align:center; color: black; margin-top: 20px; font-weight: bold">
            {{name === "price" ? "$" : ''}}
            {{initialOptions[0]}} - {{(+initialOptions[1]).toLocaleString()}}
            <span v-if="name === 'areaTotal'" style="font-weight: normal">sqFt</span>
          </h5>
        </div>
        <div v-else-if="type === `boolean`">
          <div
            @click="() => onOptionClicked('true')"
            v-bind:class="{'tag-option-element': true, 'tag-option-element-active': !!selectedOptions.has('true')}"
          >
            <p>include</p>
          </div>
          <div
            @click="() => onOptionClicked('false')"
            v-bind:class="{'tag-option-element': true, 'tag-option-element-active': !!selectedOptions.has('false')}"
          >
            <p>exclude</p>
          </div>
        </div>
        <div v-else-if="type === `string`" class="scroll">
          <div v-for="option in initialOptions" :key="option">
            <div
              class="tag-option-element"
              @click="() => onOptionClicked(option)"
              v-bind:class="{'tag-option-element-active': !!selectedOptions.has(option)}"
            >
              <p>{{option.toLowerCase()}}</p>
            </div>
          </div>
        </div>
        <div v-if="!!isPicked" style="margin-top: 20px; display: grid; justify-content: center">
          <button class="save-button" @click="onSearch">
            Save
          </button>
        </div>
      </div>
    </el-popover>
  </div>
</template>


<script>
  import axios from "axios";
  import vClickOutside from 'v-click-outside'

  const addOrUpdatePropertyTagStorage = (name, type, options) => {
    if (!sessionStorage.getItem("savedPropertyTags"))
      sessionStorage.setItem("savedPropertyTags", JSON.stringify({}));

    const savedPropertyTag = JSON.parse(sessionStorage.getItem("savedPropertyTags"));

    if (options.length > 0) savedPropertyTag[name] = {name, type, options};
    else delete savedPropertyTag[name];

    sessionStorage.setItem("savedPropertyTags", JSON.stringify(savedPropertyTag));
  };
  const deleteTagFromStorage = (name) => {
    if (!sessionStorage.getItem("savedPropertyTags"))
      sessionStorage.setItem("savedPropertyTags", JSON.stringify({}));

    const savedPropertyTag = JSON.parse(sessionStorage.getItem("savedPropertyTags"));

    delete savedPropertyTag[name];

    sessionStorage.setItem("savedPropertyTags", JSON.stringify(savedPropertyTag));
  }


  export default {
    directives: {
      clickOutside: vClickOutside.directive
    },
    name: "property-tag",
    props: {
      "isRecommended": Boolean,
      "isPicked": Boolean,
      "isMore": Boolean,
      "name": String,
      "type": String,
      "options": Array,
      "step": Number,
      "pickFilter": Function,
      "deleteFilter": Function
    },

    data() {
      return {
        tagName: this.name,
        initialOptions: this.options,
        currentOptions: this.options,
        selectedOptions: new Set(),
        moreTimeOut: null,
        foundFilters: [],
        pickF: this.pickFilter
      }
    },

    mounted() {
      if (this.isPicked && !this.isMore) setTimeout(() => this.$refs.popover.doShow(), 0);

      if (this.type === "number" && this.isPicked)
        addOrUpdatePropertyTagStorage(this.name, this.type, Array.from(this.currentOptions));
    },

    methods: {
      onSearch() {
        this.$router.push({
          path: '/search',
          query: {q: this.$route.query.q, r: (Math.random() * 1000) | 0},
          force: true
        });
        setTimeout(() => this.$refs.popover.doClose(), 0);
      },

      onFilterPicked(filter) {
        (async () => {
          const res = await axios({
            url: `${this.$config.baseURLAPI}/property/getFilterOptions`,
            method: 'POST',
            data: {
              filterName: filter.name
            },
            timeout: 300 * 1000,
            auth: {
              username: this.$config.basicAuthUsername,
              password: this.$config.basicAuthPassword
            }
          });

          const data = res.data;
          this.pickF(data);
        })();
      },

      deleteTag() {
        deleteTagFromStorage(this.name);
        this.deleteFilter();
      },

      onRangeChange(value) {
        this.currentOptions = value;
        addOrUpdatePropertyTagStorage(this.name, this.type, Array.from(this.currentOptions));
      },

      onRangeInputSubmit(value, minOrMax) {
        value = Math.floor(+value);
        this.currentOptions = [value, this.currentOptions[minOrMax === "min" ? 1 : 0]].sort((a, b) => a - b);
      },

      onOptionClicked(optionName) {
        if (this.type === "boolean") {
          if (optionName === "false" && this.selectedOptions.has("true")) {
            this.selectedOptions.delete("true");
            this.selectedOptions.add("false");
          } else if (optionName === "true" && this.selectedOptions.has("false")) {
            this.selectedOptions.delete("false");
            this.selectedOptions.add("true");
          } else {
            if (this.selectedOptions.has(optionName)) this.selectedOptions.delete(optionName);
            else this.selectedOptions.add(optionName);
          }
        } else {
          if (this.selectedOptions.has(optionName)) this.selectedOptions.delete(optionName);
          else this.selectedOptions.add(optionName);
        }

        addOrUpdatePropertyTagStorage(this.name, this.type, Array.from(this.selectedOptions));

        this.selectedOptions = new Set(this.selectedOptions);
      },

      onMoreInput(event) {
        const value = event.target.value;

        if (value.length >= 2) {
          if (!this.moreTimeOut) {
            const valueTime = event.target.value;
            if (valueTime.length < 2) return;
            this.moreTimeOut = setTimeout(async () => {
              const res = await axios({
                url: `${this.$config.baseURLAPI}/property/searchFilters`,
                method: 'POST',
                data: {
                  query: valueTime
                },
                timeout: 300 * 1000,
                auth: {
                  username: this.$config.basicAuthUsername,
                  password: this.$config.basicAuthPassword
                }
              });

              this.foundFilters = res.data;
              this.moreTimeOut = null;
            }, 300);
          }
        }
      }
    }
  };
</script>


<style lang="less">
  .save-button {
    width: 75px;
    height: 30px;
    border: none;
    border-radius: 200px;
    background: black;
    color: white;
    font-weight: bold;

    &:active {
      background: white;
      color: black;
    }
  }

  .delete-tag-button {
    &:hover {
      cursor: pointer;
    }
  }

  .tag-popover {
    margin-top: 3px !important;
    padding: 0;
    background: none;
    border: none;
    box-shadow: none;
  }

  .tag-more {
    background: #0F48D3 !important;

    & > p {
      color: white !important;
    }
  }

  .tag-more-content {
    display: grid;
    grid-gap: 10px;

    & > div:first-child {
      margin-top: 20px;
    }
  }

  .tag-input {
    padding: 3px 10px;
    border-radius: 8px;
    background: rgb(236, 236, 236);
    font-size: 12px;
    height: 30px;
    border: none !important;
    color: black;
  }

  .tag-input::-webkit-outer-spin-button,
  .tag-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .tag-input-button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background: black;
    color: white;
    font-size: 16px;

    &:active {
      background: white;
      color: black;
    }
  }

  .tag {
    font-weight: bold;
    text-align: center;
    transition: border 0.3s;
    border: 2px solid transparent;
    background: white;
    border-radius: 500px;
    min-width: 100px;
    margin: 5px 15px 0 0;
    padding: 4px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);

    & > p {
      margin: 0;
      color: black;
      font-size: 10px;
      font-style: normal;
      padding: 0 5px;
      font-weight: bold;
    }

    &:hover {
      cursor: pointer;
      border: 2px solid #1482f0;
    }
  }

  .tag-option-container-active {
    display: block !important;
  }

  .tag-recommended {
    border-radius: 500px;
    border: 2px solid black;
    min-width: 100px;
    margin: 5px 15px 0 0;
    padding: 2px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);

    & > p {
      font-size: 13px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .tag-option {
    min-width: 240px;
    padding: 15px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-gap: 10px;

    & > .tag-option-header {
      display: grid;
      grid-template-columns: 1fr auto;
    }

    & > .tag-option-header > h4 {
      color: black;
      text-align: left;
      font-weight: bold;
    }

    & > .scroll {
      padding: 3px;
      max-height: 300px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    & > .scroll::-webkit-scrollbar {
      width: 2px;
    }

    & > .scroll::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 10px;
    }

    & > .scroll::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 10px;
    }

    & > .scroll::-webkit-scrollbar-thumb:hover {
      background: #1482f0;
    }

    & > .tag-option-button-save {
      padding: 5px;
      background: black;
      border-radius: 500px;
      width: 75px;
      margin: auto;
    }

    & > .tag-option-button-save > h5 {
      color: white;
    }
  }

  .tag-picked {
    background: black !important;

    & > p {
      color: white !important;
    }
  }

  .tag-option-element {
    margin-bottom: 10px;
    padding: 1px 10px;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;
    transition: border 0.1s;

    &:hover {
      cursor: pointer;
    }
  }

  .tag-option-element-active {
    border: 2px solid #1482f0 !important;
  }


  .el-slider__runway {
    background: transparent;
    height: 1px;
  }

  .el-slider__bar {
    background: black;
    height: 2px;
    top: 2px;
  }

  .el-slider__stop {
    background: black;
    height: 1px;
    top: 2px;
  }

  .el-slider__button {
    background: black;
    border: 1px solid black !important;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>
