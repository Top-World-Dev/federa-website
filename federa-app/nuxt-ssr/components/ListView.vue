<template>
  <div class="list-view">
    <strong>{{title}}</strong>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a :href="item.link" target="_blank">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'list']
}
</script>

<style lang="scss" scoped>
.list-view {
  background-color: white;
  strong {
    font-size: 16px;
  }
  ul {
    margin-top: 20px;
    li {
      margin: 10px 0;
      a {
        color: black;
      }
    }
  }
}
</style>