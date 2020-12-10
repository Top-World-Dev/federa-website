<template>
  <div>
    <el-table
      class="sticky"
      :data="reportList.slice((currentPage-1)* pageSize,currentPage * pageSize).filter(data => !search || data.property.fullAddress.toLowerCase().includes(search.toLowerCase()) || data.reason.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;"
      border
      v-loading="loading"
    >
      <el-table-column label="No" align="center" prop="index" width="100" sortable>
        <template slot-scope="scope">
          <span v-text="calculateIndex(scope)"></span>
        </template>
      </el-table-column>
      <el-table-column label="Property Address" align="center" prop="property.fullAddress" sortable></el-table-column>
      <el-table-column label="Property URL" align="center" prop="property.slug" sortable>
        <template slot-scope="{row}">
          <a target="_blank" :href="row.property.slug">{{ row.property.slug }}</a>
        </template>
      </el-table-column>
      <el-table-column label="Reporter Email" align="center" prop="user.email" sortable></el-table-column>
      <el-table-column label="Reason" align="center" prop="reason" width="300" sortable></el-table-column>
      <el-table-column label="Status" align="center" width="100" sortable>
        <template slot-scope="{row}">
          <div>
            <el-tag
              :type="row.resolved ? 'success' : 'warning'"
              effect="dark"
            >{{ row.resolved ? 'Solved' : 'Open' }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" width="200">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">Approve</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Reject</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="this.reportList.length"
      :current-page="currentPage"
      @current-change="current_change"
      @prev-click="prevClick"
      @next-click="nextClick"
    ></el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
import capitalize from '@/utils/capitalize.js'
const site_url =
  'https://federa.com/properties/residential-lease/va/great-falls/'
export default {
  data() {
    return {
      pageSize: 10,
      currentPage: 1,
      reportList: [],
      search: '',
      loading: false
    }
  },
  async asyncData({ $config: { baseURLAPI } }) {
    let reportList = []
    try {
      const response = await axios({
        url: `${baseURLAPI}/user/get/reports`,
        method: 'GET'
      })
      if (response.data.error === false) {
        const { reports } = response.data
        if (reports && reports.length) {
          reportList = reports
        }
      }
      for (const item in reportList) {
        reportList[item].property.fullAddress = capitalize(
          reportList[item].property.fullAddress
        )
        reportList[
          item
        ].property.slug = `${site_url}${reportList[item].property.slug}`
      }
    } catch (error) {
      console.log(error.message)
    }

    return { reportList }
  },
  filters: {
    validDate: function(date) {
      if (!date) return
      let dateFormat = new Date(date)
      let year = dateFormat.getFullYear()
      let month = dateFormat.getMonth()
      let day = dateFormat.getDate()
      let hours = dateFormat.getHours()
      let mins = dateFormat.getMinutes()
      return year + '/' + month + '/' + day + ' ' + hours + ':' + mins
    }
  },
  created() {
    //this.getData()
  },

  methods: {
    prevClick(val) {
      this.currentPage = val
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    nextClick(val) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.currentPage = val
    },
    current_change(currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.currentPage = currentPage
    },
    calculateIndex(scope) {
      if (this.currentPage === 1) {
        return scope.$index + 1
      } else {
        return scope.$index + 1 + (this.currentPage - 1) * this.pageSize
      }
    },

    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
