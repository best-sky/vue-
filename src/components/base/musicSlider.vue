<template>
  <div class="sliderbox">
    <div class="block">
      <span @click="toggleBar()" :class="toggleClass"></span>
      <el-slider v-model="value1" @change="number()" :max="maxTime"></el-slider>
    </div>
    <!-- <audio ref="audio" src="http://www.ytmp3.cn/down/53216.mp3" >
    </audio> -->
    <audio controls ref="audio">
      <source src="http://www.ytmp3.cn/down/53216.mp3" type="audio/mpeg">
      您的浏览器不支持 audio 元素。
    </audio>
    <!-- @play="ready"
    @error="error"
    @timeupdate="updateTime"
    @ended="end" -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        isTrue:true,
        maxTime:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
        setInterval(this.timeUpdate,1000)
      })
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
      toggleBar(){
        this.isTrue = !this.isTrue;
        if(!this.isTrue){
          this.$refs.audio.play()
        } else{
          this.$refs.audio.pause()
        }
        this.timeUpdate();
      },
      timeUpdate(){
        // if(!this.isTrue) {//测试滑块
        //   window.clearInterval(this.clock)
        //   this.clock = window.setInterval(()=>{
        //     this.value1 ++
        //     console.log(this.$refs.audio.duration)//音乐总长度
        //     console.log(this.$refs.audio.currentTime)//当前播放的长度
        //     if(this.value1 >100){
        //       window.clearInterval(this.clock)
        //       this.isTrue = true
        //       this.value1 = 0
        //     }
        //   },1000) 
        // } else {
        //    window.clearInterval(this.clock)
        // }
        this.maxTime = this.$refs.audio.duration;
        this.value1 = this.$refs.audio.currentTime;
        if(this.value1 == this.maxTime){
          this.isTrue = true
          this.value1 = 0
        }

      },
      number(){
        console.log(this.value1);
        this.$refs.audio.currentTime = this.value1;
      }
    },
    computed: {
      toggleClass() {
        return this.isTrue ? 'palyBtn' :'palyBtn pause'
      }
    },
  }
</script>
<style>
.sliderbox{
  width: 500px;
  margin: 50px auto;
  position: absolute;
  left: 260px;
}
.sliderbox .palyBtn{
  display: inline-block;
  width:32px;
  height:32px;
  background:url(../../assets/img/playbtn1.png) no-repeat center;
  cursor: pointer;
  margin-left: -8px;
}
.sliderbox .palyBtn.pause{
  background:url(../../assets/img/playbtn2.png) no-repeat center;
}
</style>
