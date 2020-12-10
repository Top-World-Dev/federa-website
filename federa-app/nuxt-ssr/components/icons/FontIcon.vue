<template>
  <font-awesome-icon :class="{'isActive': openItem}" :icon="icon" class="icon"/>
</template>

<script>
  export default {
    name: "FontIcon",
    props: ['icon'],
    data() {
      return {
        openItem: false,
      }
    }
  }
</script>

<style scoped>
.isActive {
  color: red;
}
</style>
