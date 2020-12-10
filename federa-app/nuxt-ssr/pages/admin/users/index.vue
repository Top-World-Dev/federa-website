<template>
  <div>
    <el-table
      class="sticky"
      stripe
      :data="users"
      style="width: 100%;"
      border
      v-loading="loading"
    >
      <el-table-column label="ID" align="center" prop="id" sortable width="100"></el-table-column>
      <el-table-column label="Full Name" align="center" prop="firstName" sortable>
        <template slot-scope="{row}">
          <div>{{row.firstName + ' ' + row.lastName}}</div>
        </template>
      </el-table-column>
      <el-table-column label="Email" align="center" prop="email"  sortable></el-table-column>
      <el-table-column label="Phone Number" align="center" prop="phone" sortable></el-table-column>
      <el-table-column label="About" align="center" prop="about" ></el-table-column>
      <el-table-column label="Created At" align="center" sortable prop="createdAt">
        <template slot-scope="{row}">
          <div>{{ row.createdAt | formatDate }}</div>
        </template>
      </el-table-column>
      <el-table-column label="Delete" align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            placeholder="Search"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-size="limit"
      layout="prev, pager, next"
      :total="total"
      :current-page="currentPage"
      @current-change="current_change"
      @prev-click="prevClick"
      @next-click="nextClick"
    ></el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
import { format, parseISO } from 'date-fns'
import _ from 'lodash';

export default {
  data() {
    return {
      limit: 15,
      currentPage: 1,
      users: [],
      total: 0,
      search: '',
      loading: false
    }
  },
  filters: {
    formatDate(isoDate){
      return format(parseISO(isoDate), 'yyyy/MM/dd hh:mm aa')
    }
  },
  created(){
    this.searchDebounce = _.debounce(this.fetchData, 1000)
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    search(val){
      this.searchData();
    }
  },
  methods: {
    async searchData(){
      this.currentPage = 1
      console.log({
        search: this.search
      })
      this.searchDebounce();
    },
    async fetchData() {
      const { baseURLAPI } = this.$config;
      const { state } = this.$store;
      const token = state.user ? state.user.token : ''
      try {
        this.loading = true;
        const response = await axios({
          url: `${baseURLAPI}/dashboard/users/list`,
          method: 'GET',
          params: {
            limit: this.limit,
            page: this.currentPage,
            q: this.search
          },
          headers: {
            'Authorization': token
          }
        })
        if (response.data.error === false) {
          const { users, count } = response.data
          this.users = users;
          this.total = count;
        }
      } catch (error) {
        console.log(error.message)
      }finally{
        this.loading = false;
      }
    },
    prevClick(val) {
      this.currentPage = val
      this.fetchData();
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    nextClick(val) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.currentPage = val
      this.fetchData();
    },
    current_change(currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.currentPage = currentPage
      this.fetchData();
    },
    async handleDelete(index, row) {
      try {
        await this.$confirm('Are you sure you want to delete this user?', 'Warning', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        })
        const { baseURLAPI } = this.$config;
        const { state } = this.$store;
        const token = state.user ? state.user.token : ''
        this.loading = true;
        const response = await axios({
          url: `${baseURLAPI}/dashboard/users/delete/${row.id}`,
          method: 'DELETE',
          headers: {
            'Authorization': token
          }
        })
        if (response.data.error === false) {
          this.users = this.users.filter((user)=>{
            return user.id!=row.id
          })
          this.$message({
            message: 'Deleted successfully.',
            type: 'success'
          });
        }
      } catch (error) {
        console.log(error.message)
      }finally{
        this.loading = false;
      }

    }
  }
}
</script>
