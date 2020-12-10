<template>
  <div class="tags-containers-holder">
    <div class="tags-container">
      <div class="tags-row">
        <div
          v-for="popularFilter in popularFilters.filter(popF => !Array.from(pickedFilters).some(pf => pf.name === popF.name))"
          :key="popularFilter.name"
        >
          <div @click="() => pickFilter(popularFilter)">
            <property-tag
              :type="popularFilter.type"
              :name="popularFilter.name"
              :options="popularFilter.options"
            />
          </div>
        </div>
        <!--        <property-tag is-more name="more" :pickFilter="pickFilter"/>-->
      </div>
    </div>

    <div v-if="pickedFilters.size > 0" class="tags-container">
      <p>Used tags</p>

      <div class="tags-row">
        <div v-for="pickedFilter in pickedFilters" :key="pickedFilter.name">
          <property-tag
            is-picked
            :type="pickedFilter.type"
            :name="pickedFilter.name"
            :options="pickedFilter.options"
            :step="pickedFilter.step"
            :deleteFilter="() => deleteFilter(pickedFilter)"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import PropertyTag from "~/components/property/tags/Tag";
  import axios from "axios";

  export default {
    name: "TagContainer",

    components: {PropertyTag},

    data() {
      return {
        popularFilters: [],
        pickedFilters: new Set(),
      }
    },

    mounted() {
      sessionStorage.clear();
    },

    created() {
      (async () => {
        const res = await axios({
          url: `${this.$config.baseURLAPI}/property/getDefaultFilters`,
          method: 'POST',
          timeout: 300 * 1000,
          auth: {
            username: this.$config.basicAuthUsername,
            password: this.$config.basicAuthPassword
          }
        });

        this.popularFilters = res.data;
      })();
    },

    methods: {
      pickFilter(filter) {
        filter = {...filter};
        if (Array.from(this.pickedFilters).some(e => e.name === filter.name)) return;
        this.pickedFilters.add(filter);
        this.pickedFilters = new Set(this.pickedFilters);
      },
      deleteFilter(filter) {
        const filters = Array.from(this.pickedFilters);
        this.pickedFilters = new Set(filters.filter(f => f.name !== filter.name));
      }
    }
  }
</script>


<style lang="less">
  .tags-containers-holder {
    display: grid;
    grid-template-columns: inherit;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 660px) {
    .tags-containers-holder {
      margin-top: 100px !important;
    }
  }

  .tags-container {
    display: grid;
    grid-template-rows: auto auto;

    & > p {
      text-align: left;
      margin-bottom: 5px;
      font-weight: bold;
    }

    & > .tags-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      grid-gap: 3px;
    }
  }
</style>
