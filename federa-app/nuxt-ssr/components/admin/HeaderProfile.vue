<template>
  <div class="flex flex-row items-center head-profile">
    <div class="item" role="button">
      <el-tooltip content="Message" effect="dark" placement="left">
        <el-badge :value="12">
          <i class="el-icon-message"></i>
        </el-badge>
      </el-tooltip>
    </div>
    <div class="item">
      <el-dropdown :show-timeout="0">
        <div>
          <img class="avatar" :src="url" />
        </div>

        <el-dropdown-menu slot="dropdown">
          <nuxt-link to="/admin/profile">
            <el-dropdown-item icon="el-icon-circle-plus-outline">Profile</el-dropdown-item>
          </nuxt-link>
          <el-dropdown-item icon="el-icon-s-open" @click.native="logout" divided>LogOut</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import user from '@/assets/images/ic_user_gray.png'

export default {
  name: 'HeaderProfile',
  components: {},
  data() {
    return {
      url: user
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/`)
    }
  }
}
</script>

<style scoped lang="scss">
.el-icon-message,
.iconfont {
  font-size: 24px;
}

.head-profile {
  padding-right: 10px;
  float: right;
  display: inline-flex !important;

  .item {
    padding: 0 25px;
    height: 64px;
    display: inline-flex;
    align-items: center;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
}

.avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
