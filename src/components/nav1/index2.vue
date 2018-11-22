<template>
	<div class="LeftNav">	
		<el-col :span="24">
			<el-menu
			default-active=""
			unique-opened
			class="el-menu-vertical-demo"
			background-color="#001529"
			text-color="#a0aebc"
			active-text-color="#ffffff"
			@open="handleOpen"
			@close="handleClose">
			<el-menu-item index="">
				<i class="my-icon-document"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
				<i class="el-icon-location"></i>
				<span>应用管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">设备版本查看</el-menu-item>
					<el-menu-item index="1-2">版本信息维护</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>设备管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="2-1">设备基本信息</el-menu-item>
          <el-menu-item index="2-2">测试路由</el-menu-item>
				</el-menu-item-group>	
			</el-submenu>
			</el-menu>
		</el-col>
	</div>
</template>

<script>
export default {
  name: "LeftNav",
  data() {
    return {
      menuLists: {
        oneLevelList: [
          {
            name: "首页",
            isSubShow: false,
            href: "/index",
            twoLevelList: []
          },
          {
            name: "应用管理",
            isSubShow: false,
            href: "",
            twoLevelList: [
              {
                twoLevelName: "设备版本查看",
                href: "/application/versionSee"
              },
              {
                twoLevelName: "设备状态查看",
                href: "/application/maintenance"
              }
            ]
          },
          {
            name: "设备管理",
            href: "",
            isSubShow: false,
            twoLevelList: [
              {
                twoLevelName: "路由跳转",
                href: "/application/index"
              },
              {
                twoLevelName: "测试",
                href: "/application/test"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    ishow(list) {
      list.isSubShow = !list.isSubShow;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style >
.LeftNav {
  float: left;
  width: 160px;
  height: 100%;
  background: #30363e;
  z-index: 10;
}
.LeftNav .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px; 
    min-width: 160px;
}
.LeftNav .el-menu {
    border-right:none;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}
.LeftNav .el-menu-item.is-active {
    background: #409EFF !important;
}
.LeftNav .el-menu-item.is-active i.my-icon-document{
    background: url(../../assets/img/gd_white.png) no-repeat center center;
}
.LeftNav .el-submenu.is-opened div{
  color: #ffffff !important;
}
.LeftNav .el-submenu.is-opened .el-submenu__title i {
    color: #ffffff;
}
.LeftNav .el-menu-item [class^=my-icon-] {
    margin-right: 5px;
    width: 24px;
    vertical-align: middle;
    display: inline-block;
    height: 20px;
}
.LeftNav .my-icon-document{
    background: url(../../assets/img/gd_blue.png) no-repeat center center;
}
</style>