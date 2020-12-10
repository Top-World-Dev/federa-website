<template>
  <div class="navbar">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-user" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <nuxt-link to="/admin/profile">
            <el-dropdown-item>Profile</el-dropdown-item>
          </nuxt-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/`)
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  overflow: hidden;
  height: 52px;
  background: #efefef;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  border-right: none;
  z-index: 2;

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 46px;
    transition: background .3s;
    cursor: pointer;

    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      height: 100%;
      padding: 0 8px;
      color: #5a5e66;
      font-size: 18px;
      vertical-align: text-bottom;

      &.hover-effect {
        transition: background .3s;
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, .025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        margin-top: 5px;

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          cursor: pointer;
        }

        .el-icon-user {
          font-size: 25px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 8px;
          right: -20px;
          font-size: 17px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
