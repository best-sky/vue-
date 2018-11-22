<template>
  <div class="content">
    <div class="header"
         v-if="tabHeader">
      <el-col :span="21">
        <p>运营商管理系统1</p>
      </el-col>
      <el-col :span="3"
              class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img src="../assets/img/icon.jpg" />{{this.name}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided
                              @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </div>
    <div class="header"
         v-else>
      <el-col :span="21">
        <p>运营商管理系统2</p>
      </el-col>
      <el-col :span="3"
              class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img src="../assets/img/icon.jpg" />{{this.name}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided
                              @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </div>
    <div class="main-content">
      <left-nav></left-nav>
      <div class="right-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from '../components/base/LeftNav.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      name: "xx",
      showHeader: false
    }
  },
  components: {
    LeftNav
  },
  computed: {
    ...mapGetters([
      'tabHeader'
    ])
  },
  methods: {
    //退出登录
    logout: function () {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
      }).then(() => {
        sessionStorage.removeItem('user');
        _this.$router.push('/login');
      }).catch(() => {

      });
    },
    setName: function () {
      let loginName = JSON.parse(sessionStorage.getItem("user")).username
      this.name = loginName;
    },
    ...mapMutations({
      setHeader: 'SET_TAB_HEADER'
    }),
    headerChange (path) {
      if (path == "index") {
        this.setHeader(true)
      } else {
        this.setHeader(false)
      }
    },
  },
  mounted () {
    this.setName()
  },
  watch: {
    $route (to) {
      var path = to.path.substring(1);
      console.log(path);
      this.headerChange(path);
    }
  },
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
.header {
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: #3b3f4f;
  /*	min-width: 1024px;*/
}
.header .el-dropdown {
  float: right;
  margin-right: 20px;
}
.userinfo {
  float: right;
}
.userinfo span {
  color: #ffffff;
  display: block;
  line-height: 65px;
  cursor: pointer;
}
.userinfo img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  float: right;
}
.header p {
  line-height: 65px;
  color: #ffffff;
  padding-left: 20px;
}

.main-content {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 65px;
}

.right-content {
  margin-left: 160px;
  width: 100%;
}
</style>