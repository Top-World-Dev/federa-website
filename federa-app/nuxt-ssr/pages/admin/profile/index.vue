<template>
  <div class="profile-container">
    <div style="padding-bottom: 15px">
        <el-alert
        v-if="alert && alert.message"
        :title="alert.message"
        :type="alert.type"
        effect="dark"
        >
      </el-alert>
      </div>
    <el-form label-position="right" :rules="profileRules" ref="profileForm" label-width="150px" :model="profileForm">
      <el-form-item label="First Name" prop="firstName">
        <el-input v-model="profileForm.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="lastName">
        <el-input v-model="profileForm.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="profileForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button :loading="loading" type="primary" style="width: 150px" @click="submitForm('profileForm')">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>


<script>

export default {
  data() {
    return {
      profileForm: {
        userId: '',
        firstName: '',
        lastName: '',
        password: '',
      },
      profileRules: {
        firstName: [
          { required: true, trigger: 'blur', message: 'first name is required'}
        ],
        lastName: [
          { required: true, trigger: 'blur', message: 'last name is required'}
        ],
        password: [
          { required: false, trigger: 'blur', min: 8 }
        ]
      },
      passwordType: 'password',
      loading: false,
      alert: {},
    }
  },
  mounted() {
    this.$store.dispatch('user/getCurrentUser', this.$config).then((user)=>{
      const { id: userId, firstName, lastName } = user;
      this.profileForm = Object.assign(this.profileForm, { userId, firstName, lastName })
    }).catch(error=>{
      console.log(error)
    })
  },
  methods: {
    async submitForm(formName) {
      this.loading = true
      this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('user/updateProfile', {profileForm: this.profileForm, config :this.$config}).then(()=>{
              this.alert = { message: 'Update profile successful.', type: 'success' }
              this.loading = false
            }).catch(error =>{
              console.error(error.message)
              this.alert = { message: 'Update profile fail.', type: 'error' }
              this.loading = false
            })
          } else {
            this.loading = false
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-container{
  max-width: 700px;
  .el-form{
  .el-form-item{
    margin-bottom: 22px;
    .el-button{
      background-color: #409eff;
    }
  }
}
}

</style>
