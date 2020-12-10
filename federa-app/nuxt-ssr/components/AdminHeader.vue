<template>
  <div class="header">
    <span class="header__text">
      <slot />
    </span>
  </div>
</template>

<style scoped lang="scss">
.header {
  min-height: 162px;
  z-index: 0;
  width: calc(100% + 40px);
  background-image: url('~assets/images/background-blue-image.png');
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;

  margin-left: -20px;
  margin-top: -20px;
  margin-right: -20px;
  margin-bottom: 70px;

  &__text {
    font-size: 32px;
    color: white;
    font-weight: bold;
    vertical-align: center;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
}
</style>

<script>
export default {}
</script>

