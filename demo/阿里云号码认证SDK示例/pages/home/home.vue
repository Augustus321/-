<template>
	<view class="content">
		<view class="result_group">
			<text class="text_attr">号码认证原生SDK版本号：{{sdkVersion}}</text>
			<text class="text_attr">当前运营商：{{carrierName}}</text>
		</view>
		<button class="button_attr" @click="goVerifyView">本机号码认证流程</button>
		<button class="button_attr" @click="goLoginView">一键登录流程</button>
	</view>
</template>

<script>
	const aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');
	
	export default {
		data() {
			return {
				"sdkVersion": "",
				"carrierName": ""
			}
		},
		onLoad() {
			// 获取插件依赖的原生SDK版本号
			aLiSDKModule.getVersion(version => {
				this.sdkVersion = version;
			});
			// 获取当前蜂窝网络所属运营商 中国联通：CUCC、中国移动：CMCC、中国电信：CTCC
			aLiSDKModule.getCurrentCarrierName(carrierName => {
				this.carrierName = carrierName;
			});
		},
		methods: {
			goVerifyView() {
				// 可以提前检测当前环境是否支持本机号码校验，选调接口，不检测直接调用后面功能接口也能检测出环境问题
				aLiSDKModule.checkEnvAvailable(1, result => {
					if ('600000' == result.resultCode) {
						uni.navigateTo({
							animationDuration: 300,
							url: "../verify/verify"
						});
					} else {
						console.log("当前环境不支持本机号码校验，result = " + JSON.stringify(result));
						uni.showToast({
							icon: "none",
							title: result.msg,
							duration: 3000
						});
					}
				});
			},
			
			goLoginView() {
				// 可以提前检测当前环境是否支持一键登录，选调接口，不检测直接调用后面功能接口也能检测出环境问题
				aLiSDKModule.checkEnvAvailable(2, result => {
					if ('600000' == result.resultCode) {
						uni.navigateTo({
							animationDuration: 300,
							url: "../login/login"
						});
					} else {
						console.log("当前环境不支持一键登录，result = ", JSON.stringify(result));
						uni.showToast({
							icon: "none",
							title: result.msg,
							duration: 3000
						});
					}
				});
			}
		}
	}
</script>
	
<style>
	.result_group {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: #B9F6CA;
		margin-top: 50upx;
		margin-left: 30upx;
		margin-right: 30upx;
		border-radius: 10upx;
	}
	
	.text_attr {
		width: 95%;
		margin-left: 30upx;
		margin-top: 10upx;
		margin-bottom: 10upx;
		margin-right: 30upx;
		word-wrap: break-word;
		word-break: break-all;
		font-size: 30upx;
	}
</style>
