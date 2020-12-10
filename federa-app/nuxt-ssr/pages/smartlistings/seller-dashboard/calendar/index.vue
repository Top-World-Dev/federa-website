<template>
  <div class="dashboard-calendar">
    <client-only>
      <f-calendar />
    </client-only>
  </div>
</template>
<script>
export default {
  layout: 'admin'
}
</script>

<style lang="scss" scoped>
.dashboard-calendar {
  font-family: 'SFUIText-Regular';
  font-size: 14px;
  @media (min-width: 1980px) {
    font-size: 20px;
  }
}
</style>
