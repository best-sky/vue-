<template>
  <div class="login-bg">
    <div class="demo-ruleForm login-container">
      <!-- <h3 class="title">系统登录</h3>
    <el-form-item prop="name">
      <el-input  type="text" v-model="ruleForm.name" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" v-loading="loading">登录</el-button>
    </el-form-item> -->

      <el-tabs v-model="activeName">
        <el-tab-pane label="登录"
                     name="first">
          <div>
            <el-form :model="ruleForm"
                     :rules="rules"
                     ref="ruleForm">
              <el-form-item prop="name">
                <el-input type="text"
                          v-model="ruleForm.name"
                          auto-complete="off"
                          placeholder="账号"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password"
                          v-model="ruleForm.checkPass"
                          auto-complete="off"
                          placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="checked"
                             style="color:#a0a0a0;">一周内自动登录</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           style="width:100%;"
                           @click.native.prevent="handleSubmit2"
                           v-loading="loading">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="注册"
                     name="second">
          <div>
            <el-form :model="regForm"
                     :rules="regRules"
                     ref="regForm">
              <el-form-item prop="name">
                <el-input type="text"
                          v-model="regForm.name"
                          auto-complete="off"
                          placeholder="账号"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password"
                          v-model="regForm.checkPass"
                          auto-complete="off"
                          placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           style="width:100%;"
                           @click.native.prevent="regSubmit">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: "first",
      checked: false,
      loading: false,
      ruleForm: {
        name: "",
        checkPass: ""
      },
      regForm: {
        name: "",
        checkPass: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      regRules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit2 (ev) {
      var _this = this;
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          _this.loading = true;
          if (_this.checked == true) {
            //传入账号名，密码，和保存天数3个参数
            _this.$cookie.set("name", _this.ruleForm.name, { expires: 7 });
            _this.$cookie.set("password", _this.ruleForm.checkPass, { expires: 7 });
          } else {
            _this.$cookie.delete('name')
            _this.$cookie.delete('password')
          }
          this.$message({
            type: "success",
            message: "登录成功"
          });
          var loginParams = {
            username: _this.ruleForm.name,
            password: _this.ruleForm.checkPass
          };
          sessionStorage.setItem("user", JSON.stringify(loginParams));
          _this.$router.push({ path: "/index" });
          // _this.$http
          //   .post("/api/login", {
          //     name: _this.ruleForm.name,
          //     checkPass: _this.ruleForm.checkPass
          //   })
          //   .then(({ data }) => {
          //     if (data.data.info === false) {
          //       this.$message({
          //         type: "info",
          //         message: "账号不存在"
          //       });
          //       _this.ruleForm.name = "";
          //       _this.ruleForm.checkPass = "";
          //       _this.loading =false;
          //       return;
          //     }
          //     if (data.data.success) {
          //       this.$message({
          //         type: "success",
          //         message: "登录成功"
          //       });
          //       var loginParams = {
          //         username: _this.ruleForm.name,
          //         password: _this.ruleForm.checkPass
          //       };
          //       sessionStorage.setItem("user", JSON.stringify(loginParams));
          //       _this.$router.push({ path: "/index" });
          //     } else {
          //       this.$message({
          //         type: "error",
          //         message: "密码错误"
          //       });
          //       _this.ruleForm.name = "";
          //       _this.ruleForm.checkPass = "";
          //       _this.loading =false;
          //     }
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    regSubmit () {
      var _this = this;
      this.$refs.regForm.validate(valid => {
        if (valid) {
          this.$message({
            type: "success",
            message: "注册成功"
          });
          _this.regForm.name = "";
          _this.regForm.checkPass = "";
          // _this.$http
          //   .post("/api/register", {
          //     name: _this.regForm.name,
          //     checkPass: _this.regForm.checkPass
          //   })
          //   .then(({ data }) => {
          //     console.log(data.data.success);
          //     if (data.data.success) {
          //       this.$message({
          //         type: "success",
          //         message: "注册成功"
          //       });
          //       _this.regForm.name = "";
          //       _this.regForm.checkPass = "";
          //     } else {
          //       this.$message({
          //         type: "info",
          //         message: "用户名已经存在"
          //       });
          //       _this.regForm.name = "";
          //       _this.regForm.checkPass = "";
          //     }
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getCookie () {
      this.ruleForm.name = this.$cookie.get('name');
      this.ruleForm.checkPass = this.$cookie.get('password');
    }
  },
  mounted () {
    this.getCookie();
  }
};
</script>
<style>
.login-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../assets/img/loginbg.png) no-repeat center center;
  background-size: cover;
}
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.remember {
  margin: 0px 0px 35px 0px;
}
.login-bg .el-loading-spinner i {
  color: #ffffff;
}
.login-bg .el-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.login-bg .el-loading-spinner {
  top: 50%;
  margin-top: -13px;
  width: 100%;
  text-align: center;
  position: absolute;
  margin-left: -35px;
}
.login-bg .el-loading-spinner .circular {
  height: 25px;
  width: 25px;
  -webkit-animation: loading-rotate 2s linear infinite;
  animation: loading-rotate 2s linear infinite;
}
.login-bg .el-loading-spinner .path {
  -webkit-animation: loading-dash 1.5s ease-in-out infinite;
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #f2f6fc;
  stroke-linecap: round;
}
</style>
