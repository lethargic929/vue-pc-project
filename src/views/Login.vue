<template>
  <div class="login">
    <el-card class="box-card" >
      <div class="logo">
        <img src="../assets/logo_index.png" />
      </div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm"  status-icon>
        <el-form-item prop='mobile'>
          <el-input placeholder="请输入用户名或手机号" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <el-input style="width: 238px;margin-right:10px;" placeholder="请输入验证码" v-model="loginForm.code"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item><el-checkbox :value='true'>我已阅读并同意用户协议和隐私条款</el-checkbox></el-form-item>
        <el-form-item  >
        <el-button type="primary" style="width: 100%;" @click="login()"> 登 录 </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data () {
      const validatePass = (rule, value, callback) => {
        if (!/^1[3-9]\d{9}$/.test(value)) {
          return callback(new Error('手机号不正确'));
        }
        callback()
      }

    return {
      loginForm:{
        mobile:'',
        code:''
      },
      loginRules: {
          mobile: [
            { required: true, message: '请输入用户名或手机号', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          code: [
             { required: true, message: '请输入验证码', trigger: 'blur' },
            { len:6, message: '长度为6个字符', trigger: 'blur' }
          ]   
      }
    }
  },
  methods: {
    login () {
      // 先验证
      this.$refs.loginForm.validate((valid)=>{
         if (valid) {
         // 发送请求
         this.$http.post('/authorizations',this.loginForm).then(()=>{
           this.$router.push('/')
         }).catch(()=>{
            this.$message.error('用户名手机号或验证码有误')
         })
         }
      }) 
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../assets/login_bg.jpg) no-repeat center / cover;
  margin: 0;
  padding: 0;
  .box-card {
    width: 400px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
  }
  .logo img {
    display: block;
    width: 200px;
    height: 44px;
    margin: 20px auto;
  }
  .form {
    width: 360px;
    height: 226px;
  }
}
</style>