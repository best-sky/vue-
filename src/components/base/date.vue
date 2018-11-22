<template>
  <div>
    <el-date-picker v-model="value1"
                    type="date"
                    placeholder="开始日期"
                    default-value=""
                    :picker-options="pickerOptions0">
    </el-date-picker>
    <el-date-picker v-model="value2"
                    type="date"
                    placeholder="结束日期"
                    :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pickerOptions0: {
        disabledDate: time => {
          console.log(this.value2);
          if (this.value2) {
            return time.getTime() > Date.now() || time.getTime() > this.value2;
          } else {
            return time.getTime() > Date.now();
          }
        }
      },
      pickerOptions1: {
        disabledDate: time => {
          return time.getTime() < this.value1 || time.getTime() > Date.now();
        }
      },
      value1: "2018-11-02",
      value2: "2018-11-03"
    }
  }
};
</script>
