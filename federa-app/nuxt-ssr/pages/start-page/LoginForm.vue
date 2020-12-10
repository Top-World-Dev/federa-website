<style lang="scss" scoped>
    .login-form {
        width: 355px;
        height: 392px;
        background: #fff;
        padding: 20px 30px;
        border: 1px solid #CBCBCB;
  
        .title {
            font-size: 30px;
            margin-bottom: 35px;
            font-weight: bold;
            color: #0040D2;
            text-align: center;
        }

        .signup-text {
            text-align: center;
        }
      
        .form-input {
          display: block;
          margin: 0 auto 10px auto;
          width: 270px;
          height: 42px;
          border-radius: 3px;
        }

        .el-button {
            display: block;
            margin: 4px auto 18px auto;
            width: 270px;
            font-weight: bold;
            font-size: 16px;
            height: 45px;
            border-radius: 0;
            background: linear-gradient(#1E5EF0,#0040D2 50%);
        }
    }
</style>

<template>
    <div class="login-form">
        <div class="title">
            Smart Listings
        </div>
        <el-form ref="form" :model="form">
            <el-form-item>
                <el-input class="form-input" v-model="form.email" placeholder="Email, phone number, or username"></el-input>
            </el-form-item>

            <el-form-item>
                <el-input class="form-input" v-model="form.password" type="password" placeholder="Password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-on:click="onSubmit">Log In</el-button>
            </el-form-item>
        </el-form>

        <div class="signup-text">Don't have an account? <a>Sign Up</a></div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('testing');

                this.$router.push({name: 'home'})
            }
        }
    }
</script>


