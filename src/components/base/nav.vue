<template>
	<div class="LeftNav">
		<!-- <ul>
			<li v-for="(list,index) in menuLists.oneLevelList" :key="index">
				<template v-if="index =='0'">
					<router-link :to="{path:list.href}">{{list.name}}</router-link>
				</template>
				<template v-else>
					<p @click="ishow(list)">{{list.name}}</p>
				</template>
				<ul v-show="list.isSubShow">
					<li v-for="(twoList,index) in list.twoLevelList" :key="index">
						<router-link :to="{path:twoList.href}">{{twoList.twoLevelName}}</router-link>
					</li>
				</ul>
			</li>
		</ul> -->
		<!-- <el-col :span="24">
			<el-menu router  class="el-menu-vertical-demo">
				<template v-for="(item,index) in menuLists.oneLevelList">
					<el-submenu v-if="item.twoLevelList.length>0" :index="index+''">
						<template slot="title"><i class="el-icon-setting"></i><span>{{item.name}}</span></template>
						<el-menu-item-group v-for="(child,index) in item.twoLevelList" :key="index">
							<el-menu-item :index="child.href">{{child.twoLevelName}}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item v-if="item.twoLevelList.length===0" :index="item.href"><i class="el-icon-setting"></i>{{item.name}}</el-menu-item>
				</template>
			</el-menu>
		</el-col> -->
		
		<el-col :span="24">
			<el-menu
			router
			default-active="/index"
			unique-opened
			class="el-menu-vertical-demo"
			background-color="#30363e"
			text-color="#fff"
			active-text-color="#ffd04b"
			@open="handleOpen"
			@close="handleClose">
			<el-menu-item index="/index">
				<i class="el-icon-document"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
				<i class="el-icon-location"></i>
				<span>应用管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="/application/versionSee">设备版本查看</el-menu-item>
					<el-menu-item index="/application/maintenance">版本信息维护</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>设备管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="/application/index">设备基本信息</el-menu-item>
          <el-menu-item index="/application/test">测试路由</el-menu-item>
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
</style>