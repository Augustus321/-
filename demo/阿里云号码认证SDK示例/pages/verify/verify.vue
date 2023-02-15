<template>
	<view class="content">
		<input class="input-row" type="number" placeholder="请输入手机号" />
		<button class="button_attr" @click="requestVerifyToken">本机号码校验</button>
	</view>
</template>

<script>
	const aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');
	
	export default {
		onLoad() {
			/**
			 * 加速本机号码校验Token的获取，选调接口，加速成功后调用 getVerifyToken 能够立马返回本机号码校验Token
			 * 
			 * 注：
			 * 	1、该接口为选调接口，非必调接口
			 * 	2、建议在调用获取本机号码校验Token方法前，提前一段时间调用该加速接口，中间最好有2-3秒的缓冲（因为加速方法需要1~3s的时间取得临时凭证）
			 * 	3、请勿频繁的多次调用
			 * 	4、一进app就获取本机号码校验Token的场景不需要调用此接口
			 */
			aLiSDKModule.accelerateVerify(5000, result => {
			    console.log(JSON.stringify(result));
			    if ('600000' == result.resultCode) {
			    	console.log("加速获取本机号码校验Token成功");
			    } else {
			    	console.log("加速获取本机号码校验Token失败，" + result.msg);
			    }
			});
		},
		methods: {
			requestVerifyToken() {
				uni.showLoading({
					mask: true,
				});
				// 获取本机号码校验Token
				aLiSDKModule.getVerifyToken(5000, result => {
					uni.hideLoading();
					console.log(JSON.stringify(result));
					let msg = '';
				    if ("600000" == result.resultCode) {
						msg = "获取本机号码校验token成功，接下面需要拿手机号和token去服务端进行校验，SDK服务到此结束";
				    } else {
						msg = "获取本机号码校验Token失败，" + result.msg;
					}
					// 控制台输出和屏幕提示
					console.log(msg);
					uni.showToast({
						icon: "none",
						title: msg,
						duration: 3000
					});
				})
			}
		}
	}
</script>

<style scoped>
	.input-row {
		border: 1px solid #CCCCCC;
		background: #FFFFFF;
		outline: none;
		margin-top: 50upx;
		margin-left: 30upx;
		margin-right: 30upx;
		padding: 4upx 8upx;
		height: 70upx;
		border-radius: 8upx;
	}
</style>
