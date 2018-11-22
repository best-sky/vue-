<template>
  <div class="tab-card">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane :label="firstLabel" name="first">
        <slot name="first-content">
          <div>
            内容一
          </div>
        </slot>
      </el-tab-pane>
      <el-tab-pane :label="secondLabel" name="second">
        <slot name="second-content">
          <div>
            内容二
          </div>
        </slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        firstLabel:"停单公示",
        secondLabel: "数据统计"
      };
    },
    methods: {
     
    }
  };
</script>
<style>
.tab-card{
  width:100%;
}
.tab-card .el-tabs__nav-scroll{
  width: 202px;
  margin: 0 auto;
}
.tab-card .el-tabs--card>.el-tabs__header {
    border-bottom: none;
}
.tab-card .el-tabs__item:hover {
    color: #409EFF;
    cursor: pointer;
}
.tab-card .el-tabs__item {
  border-bottom: #e4e7ed 1px solid !important;
}
.tab-card .el-tabs__item.is-active {
    background: #409EFF;
    color:#ffffff;
    border-bottom:#409EFF;
}
.tab-card .el-tabs__item {
  height:32px;
  line-height:32px;
}
</style>

