<template>
	<view class="roundcountdown">
			<canvas canvas-id="runCanvas" id="runCanvas" class='roundcountdown-round'></canvas>
	</view>
</template>

<script>
	export default {
		name:'roundCountDown',
		props:{
			// 该组件的父元素的宽高信息 {width:0,height:0}
			roundData:Object,
			// 总时间（秒）
			countDownTime:Number,
			// 剩余时间（为了保证定时器的准确，需要在传递一个准确的剩余时间）
			countDown:Number
		},
		data() {
			return {
				// 定时器
				timer:''
			}
		},
		destroyed() {
			clearInterval(this.timer)
		},
		watch:{
			// 为了定时器的准确，需要每隔一段时间更新一次准确的剩余时间，下面是配合 uView 的倒计时做的
			// 因为 uView 的倒计时变化回调是 1 秒触发的，所以下面的 “1 秒内”就表示 uView 倒计时触发下一个回调之前的这段时间
			countDown(val){
				// 每次时间变化，清除上次的定时器
				clearInterval(this.timer)
				// 初始化 1 秒内持续的时间
				let intervalTime = 0
				this.timer = setInterval(() => {
					// 累加 1 秒内持续的时间
					intervalTime += 10
					// 总时间
					const allTime = this.countDownTime * 1000
					// 剩余的时间，为了圆形倒计时的流畅感，需要在 1 秒内让剩余时间减去定时器每 10 毫秒所累加的时间
					const surplusTime = val - intervalTime
					// 剩余时间占总时间多少的百分比,乘 2 是因为百分比最大是 1 ,又因为 canvas 的弧线 2*Math.PI 才是整圆,所以这里要乘 2 
					let surplusPercent = surplusTime / allTime * 2
					// 当剩余时间的占比为 0 时,结束渲染
					if (surplusPercent <= 0) {
						// 只里为了保险起见,当剩余时间占比小于等于 0 时,将其手动设为 0 
						surplusPercent = 0
						clearInterval(this.timer)
					}
					// 执行画布渲染的方法，当父元素有渲染出来时再渲染画布
					if(this.roundData.width > 0){
						this.cartoon(surplusPercent)
					}
				}, 10)
			}
		},
		methods: {
			cartoon(num) {
				//新建一个画布
				const ctx = uni.createCanvasContext('runCanvas')
				// 将外围盒子的宽高的一半设置为圆心，保证组件在盒子中间显示
				// yaunxin1 为圆心在 x 轴的位置，yuanxin2 为圆心在 y 轴的位置
				var yuanxin1 = this.roundData.width / 2 //圆心
				var yuanxin2 = this.roundData.height / 2
				// 设置圆的半径
				var r = this.roundData.width / 2 - 10 //半径
				// 开始一条路径
				ctx.beginPath()
				// 创建圆，1为圆心在 x 轴的位置，2为圆心在 y 轴的位置，3为圆的半径，4为圆的起始角，5为圆的结束角
				// 起始角和结束角的位置以弧度计算，设0表示3点钟方向，1 * Math.PI 表示一个半圆（某个角的位置在9点钟方向），2 * Math.PI 表示一个整圆
				ctx.arc(yuanxin1, yuanxin2, r, -0.5 * Math.PI, num * Math.PI - 0.5 * Math.PI )
				// 弧线的颜色
				ctx.setStrokeStyle('#50AA87')
				// 弧线的长度
				ctx.setLineWidth(2)
				// 画出当前路径的边框
				ctx.stroke()
				// 将上面的描述画到canvas里
				ctx.draw()
			}
		}
	}
</script>

<style lang="scss">
	.roundcountdown {
		width: 100%;
		height: 100%;
		.roundcountdown-round{
			width: 100%;
			height: 100%;
		}
	}
</style>
