<template>
  <el-form>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="First Name">
          <el-input placeholder="Please Input First Name" v-model="firstname"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Last Name">
          <el-input placeholder="Please Input Last Name" v-model="lastname"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Phone Number">
          <el-input placeholder="Please Input Phone Number" v-model="phonenumber"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Email Address">
          <el-input placeholder="Please Input Email Address" v-model="email"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: ''
    }
  }
}
</script>
