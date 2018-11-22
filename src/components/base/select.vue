<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '全部',
          label: '全部'
        }, {
          value: '选项1',
          label: '选项1'
        }, {
          value: '选项2',
          label: '选项2'
        }],
        value: '全部'
      }
    }
  }
</script>