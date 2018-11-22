<template>
	<div class="echart">
	
		<div class="echart-title1">
			<p>总统业务命中量</p>
		</div>
		<div id="myChart" :style="{width: '800px', height: '500px'}"></div>
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
</template>

<script>
	// let echarts = require("echarts/lib/echarts")
	// 							require("echarts/lib/chart/line")
	// 							// 引入提示框和标题组件
	// 							require('echarts/lib/component/tooltip')
	// 							require('echarts/lib/component/title')							
	// 							require('echarts/lib/component/legend')
	import echarts from 'echarts'						
	export default {
		name:"echart",
		data() {
			return {
				value4: ""
			}
		},
		watch: {
			value4() {
				//console.log(this.value4)
				var date = this.value4;
				var year = date.substring(0,4);
				var month = date.substring(5);
				console.log(year);
				console.log(month);
				var d = new Date(year,month,0);
				console.log(d.getDate());//获取选择的月份有多少天，应该是后台传入的数据
			}
		},
		methods: {
			drawLine() {
				let myChart = echarts.init(document.getElementById('myChart'))
				
				myChart.setOption({
						tooltip: {
								trigger: 'axis'
						},
						legend: {
								data:['停电公示','诉求工单智能追踪','公共诉求智能引导','社会舆情响应','业务专席快速引导'],
								x: '0', // 'center' | 'left' | {number},
								top: '0px',// 'center' | 'bottom' | {number}
								textStyle: {
									fontSize:12 // 用 legend.textStyle.fontSize 更改示例大小
								}
						},
						grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
						},
						xAxis: {
								type: 'category',
								boundaryGap: false,
								data: ['8/1','8/2','8/3','8/4','8/5','8/6','8/7']
						},
						yAxis: {
								type: 'value'
						},
						series: [
								{
										name:'停电公示',
										type:'line',
										itemStyle : {
											normal : {
												color:'#1890ff',
													lineStyle:{
														color:'#1890ff'
													}
											}
										},
										data:[120, 132, 101, 134, 90, 230, 210]
								},
								{
										name:'诉求工单智能追踪',
										type:'line',
										itemStyle : {
											normal : {
													color:'#91d47e',
													lineStyle:{
														color:'#91d47e'
													}
											}
										},
										data:[220, 182, 191, 234, 290, 338, 310]
								},
								{
										name:'公共诉求智能引导',
										type:'line',
										itemStyle : {
											normal : {
												color:'#f7a35c',
													lineStyle:{
														color:'#f7a35c'
													}
											}
										},
										data:[150, 232, 201, 154, 190, 335, 410]
								},
								{
										name:'社会舆情响应',
										type:'line',
										itemStyle : {
											normal : {
												color:'#bd89e5',
												lineStyle:{
													color:'#bd89e5'
												}
											}
										},
										data:[320, 332, 301, 334, 390, 332, 320]
								},
								{
										name:'业务专席快速引导',
										type:'line',
										itemStyle : {
											normal : {
												color:'#3f66e4',
													lineStyle:{
														color:'#3f66e4'
													}
											}
										},
										data:[820, 932, 901, 934, 1290, 1330, 1320]
								}
						]
				})
			},
			nowMonth() {
				let date = new Date()
				let Y = date.getFullYear()
				let M = date.getMonth()+1
				M = (M < 10 ? "0"+M:M)
				return Y + "年" + M + "月"
			}
		},
		mounted(){
			this.drawLine();
			this.value4 = this.nowMonth();//获取当前月份赋值到日期选择器上
		}
		
	}
</script>

<style>
.echart-title1{
	text-align: center;
	font-size: 20px;
	position:absolute;
	top: -75px;
	width:800px;
}
.echart{
	width:800px;
	margin:100px;
	position: relative;
}
.echart .selectDate{
	position: absolute;
	top: -10px;
  right: 29px
}
.selectDate .el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 140px;
}
</style>