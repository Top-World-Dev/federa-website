<template>
  <div class="autocomplete-options-container">
    <div v-for="option in options" :key="option">
      <autocomplete-option
        :text="option"
        :onOptionPicked="onOptionPicked"
      />
    </div>
  </div>
</template>


<script>
  import AutocompleteOption from "~/components/inputs/SearchWithAutocomplete/AutocompleteOption";

  export default {
    name: "AutocompleteOptionsContainer",

    components: {AutocompleteOption},

    props: {
      options: Array,
      onOptionPicked: Function
    }
  }
</script>


<style lang="less">
  .autocomplete-options-container {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 20px;
    padding-top: 15px;
  }
</style>
