<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column label="日期"
                       width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名"
                       width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover"
                      placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <p>住址: {{ this.isSelect }}</p>
            <div slot="reference"
                 class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="search"
         style="width:200px;">
      <el-input size="small"
                @keyup.native="handleInput()"
                v-model="searcBarCode"
                placeholder="请输入内容"></el-input><i style="color:#999999;"
         class="el-icon-search search-btn"></i>
    </div>
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
                     background
                     @current-change="handleCurrentChange"
                     :current-page="currentPage4"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginName: "",
      currentPage4: 4,
      searcBarCode: "",
      isSelect: "hhh",
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    handleInput () {
      this.searcBarCode = this.searcBarCode.replace(/\D/g, '')
    },
  }
}
</script>
<style>
.search {
  position: relative;
}
.el-input__inner {
  padding-right: 30px;
}
.search-btn {
  position: absolute;
  top: 8px;
  right: 14px;
  cursor: pointer;
}
.block {
  margin-top: 30px;
}
.search {
  margin-top: 20px;
}
</style>
