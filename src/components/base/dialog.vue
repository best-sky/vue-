<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="删除"
      :visible.sync="dialogVisible"
      :closeOnClickModal="false" 
      :showClose="false" 
      width="400px">
      <div>
       <i class="el-icon-warning"></i> 这是一段信息
      </div>
      <span slot="footer" class="dialog-footer dialog-center">
        <el-button size="small" type="danger" @click="sureBtn">删除</el-button>
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      // handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       alert(1)
      //     })
      //     .catch(_ => {});
      // },
      sureBtn(){
        this.dialogVisible = false;
       // alert(1);
      }
    }
  };
</script>
<style>
.el-dialog__footer{
  text-align: center;
  padding: 10px 20px 45px;
}
.el-dialog__header {
    padding: 15px;
    background: #eeeeee;
    height:50px;
}
.el-dialog__title {
  font-size:14px;
}
.el-button--small, .el-button--small.is-round {
    padding: 9px 15px;
    width: 80px;
}
</style>