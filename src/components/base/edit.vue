<template>
  <div class="my-table">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="scope">
          <p v-if="scope.row.flag">{{scope.row.address}}</p>
          <el-input v-else v-model="scope.row.address" @blur="inputChange(scope.$index, tableData)"></el-input>
          <el-button type="success" @click="edit(scope.$index, tableData)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            flag:"true",
            input:"",
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            flag:"true",
            input:"",
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            flag:"true",
            input:"",
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            flag:"true",
            input:"",
          }]
        }
    },
    methods: {
      edit(index, rows){
        rows[index].flag = false;
      },
      inputChange(index, rows){
        rows[index].flag = true;
      }
    },
  }
</script>

<style>
.my-table{
  width:800px;
}
</style>