<template>
<div class="echart-content">
	<div class="data-statistics">
		<p>数据统计</p>
	</div>
	<div class="echart">
		<div class="echart-title">
			<slot>
				<p>总统业务命中量</p>
			</slot>
		</div>
		<div id="myChart" :style="{width: '1015px', height: '400px'}"></div>
		<div class="selectDate">
			<div class="block">
				<el-date-picker
					v-model="value4"
					type="month"
					placeholder="选择月份"
					format="yyyy年MM月"
					value-format="yyyy-M"
					>
				</el-date-picker>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "echart",
  // props: {
  // 	legendData: {
  // 		type: Array,
  // 		default: ['停电公示','诉求工单智能追踪','公共诉求智能引导','社会舆情响应','业务专席快速引导']
  // 	},
  // },
  data() {
    return {
      value4: "",
      xAxisData: [],
      legendData: [],
      seriesData: []
    };
  },
  watch: {
    value4() {
      //console.log(this.value4)
      var date = this.value4;
      var year = date.substring(0, 4);
      var month = date.substring(5);
      //console.log(year);
      //console.log(month);
			var d = new Date(year, month, 0);//获取选择的月份有多少天，应该是后台传入的数据
			this.getDate();
      //console.log(d.getDate());
    }
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.legendData,
          x: "0", // 'center' | 'left' | {number},
          top: "0px", // 'center' | 'bottom' | {number}
          textStyle: {
            fontSize: 12 // 用 legend.textStyle.fontSize 更改示例大小
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xAxisData
        },
        yAxis: {
          type: "value"
        },
        series: this.seriesData
      });
    },
    nowMonth() {
      let date = new Date();
      let Y = date.getFullYear();
      let M = date.getMonth() + 1;
      M = M < 10 ? "0" + M : M;
      return Y + "年" + M + "月";
    },
    RandomNum(Min, Max) {
      var listscore = [];
      for (var i = 0; i < 31; i++) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.floor(Rand * Range); //舍去
        listscore.push(num);
      }
      console.log(listscore);
    },
    getDate() {
      this.$http
        .get("../../../static/echartsData.json")
        .then(res => {
          //console.log(res.data[0].listType);
          var dataList = res.data[0].listscore;
          var serieColor = res.data[0].seriesColor;
          this.legendData = res.data[0].listType;
					this.xAxisData = res.data[0].listDate;
					this.seriesData = [];
          for (var i = 0; i < dataList.length; i++) {
							var item = {
								name: res.data[0].listType[i],
								type: "line",
								itemStyle: {
									normal: {
										color: serieColor[i],
										lineStyle: {
											color: serieColor[i]
										}
									}
								},
								data: dataList[i]
							};
						this.seriesData.push(item);
					}
					this.drawLine();
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.value4 = this.nowMonth(); //获取当前月份赋值到日期选择器上
		this.getDate();
  }
};
</script>

<style>
.echart-content {
	width:1074px;
	padding-bottom:30px; 
}
.data-statistics {
	width:100%;
	height:45px;
	line-height: 45px;
	color:#333333;
	font-size:14px;
	padding-left: 15px;
	border-bottom: 1px solid #f1f1f1;
	margin-bottom: 90px;
	font-weight: bold;
}
.echart-title {
  text-align: center;
	font-size: 20px;
	position:absolute;
	top: -60px;
	width:1015px;
}
.echart {
  width: 1015px;
	position: relative;
	margin: 0 auto;
}
.echart .selectDate {
  position: absolute;
  top: -15px;
  right: 39px;
}
.selectDate .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 140px;
}
</style>