<template>
  <p class="autocomplete-option" @click="() => onOptionPicked(text)">
    {{text}}
  </p>
</template>


<script>
  export default {
    name: "AutocompleteOption",

    props: {
      text: String,
      onOptionPicked: Function
    }
  }
</script>


<style lang="less">
  .autocomplete-option {
    color: #1989fa;
    text-align: left;
    padding: 3px 40px 3px 40px;

    &:hover {
      cursor: pointer;
      background: rgb(230, 230, 230);
    }
  }
</style>
