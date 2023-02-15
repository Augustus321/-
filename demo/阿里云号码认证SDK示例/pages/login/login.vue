<template>
	<view class="content">
		<view class="table_title">
			<text class="mid_text">基础样式</text>
		</view>
		<button class="button_attr" @click="fullscreenStyle">全屏</button>
		<button class="button_attr" @click="alertStyle">弹窗</button>
		<button class="button_attr" @click="sheetStyle">底部弹窗</button>
		<view class="table_title">
			<text class="mid_text">原生接口绘制背景</text>
		</view>
		<button class="button_attr" @click="fullscreenAndImageBgStyle">全屏（原生图片背景）</button>
		<button class="button_attr" @click="alertAndImageBgStyle">弹窗（原生图片背景）</button>
		<button class="button_attr" @click="sheetAndGifBgStyle">底部弹窗（原生GIF背景）</button>
		<view class="table_title">
			<text class="mid_text">其他资源绘制背景</text>
		</view>
		<button class="button_attr" @click="fullscreenAndWebviewBgStyle()">全屏（webview加载资源做背景）</button>
		<button class="button_attr" @click="fullscreenAndWeexViewBgStyle()">全屏（weex渲染js做背景）</button>
	</view>
</template>

<script>
	// 导入一键登录授权页 UI 配置构建
	import uiConfig from '@/common/ui-config.js'
	
	const aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');
	
	export default {
		onLoad() {
			/**
			 * 可以提前调用该接口来加速授权页的拉起，选调接口，加速成功后调用 getLoginToken 能够立马拉起授权页
			 * 
			 * 注：
			 * 	1、该接口为选调接口，非必调接口
			 * 	2、建议在判断当前用户属于未登录状态时使用，已登录状态用户请不要调用该方法
			 * 	3、建议在调用拉取授权页的方法前，提前一段时间调用预取号方法，中间最好有2-3秒的缓冲（因为加速方法需要1~3s的时间取得临时凭证）
			 * 	4、请勿频繁的多次调用、请勿与拉起授权登录页同时和之后调用
			 * 	5、一进app就登录的场景不需要调用此接口
			 */
			aLiSDKModule.accelerateLoginPage(5000, result => {
				console.log(JSON.stringify(result));
				if ('600000' == result.resultCode) {
					console.log("加速授权页拉起成功");
				} else {
					console.log("授权页加速拉起失败，" + result.msg);
				}
			});
		},
		methods: {
			fullscreenStyle() {
				const config = uiConfig.buildFullscreen();
				_presentLoginController(config);
			},
			alertStyle() {
				const config = uiConfig.buildAlert();
				_presentLoginController(config);
			},
			sheetStyle() {
				const config = uiConfig.buildSheet();
				_presentLoginController(config);
			},
			fullscreenAndImageBgStyle() {
				const config = uiConfig.buildFullscreenAndImageBg();
				_presentLoginController(config);
			},
			alertAndImageBgStyle() {
				const config = uiConfig.buildAlertAndImageBg();
				_presentLoginController(config);
			},
			sheetAndGifBgStyle() {
				const config = uiConfig.buildSheetAndGifBg();
				_presentLoginController(config);
			},
			fullscreenAndWebviewBgStyle() {
				const config = uiConfig.buildFullscreenAndWebviewBg();
				_presentLoginController(config);
			},
			fullscreenAndWeexViewBgStyle() {
				const config = uiConfig.buildFullscreenAndWeexViewBg();
				_presentLoginController(config);
			}
		},
	}
	
	function _presentLoginController(config) {
		uni.showLoading({
			mask: true,
		});
		// 调用该接口首先会弹起授权页，点击授权页的登录按钮获取Token
		aLiSDKModule.getLoginToken(
			5000,
			config,
			tokenResult => {
				uni.hideLoading();
				console.log(JSON.stringify(tokenResult));
				if ("600001" == tokenResult.resultCode) {
					console.log("授权页拉起成功");
				} else if ("600000" == tokenResult.resultCode) {
					console.log("获取Token成功，接下来拿着结果里面的Token去服务端换取手机号码，SDK服务到此结束");
					//手动关闭授权页
					aLiSDKModule.quitLoginPage();
				} else {
					//手动关闭授权页
					aLiSDKModule.quitLoginPage();
				}
			},
			clickResult => {
				console.log(JSON.stringify(clickResult));
				switch (clickResult.resultCode) {
					case "700000":
						console.log("用户点击返回按钮");
						break
					case "700001":
						console.log("用户切换其他登录方式");
						break
					case "700002":
						console.log("用户点击登录按钮");
						break
					case "700003":
						console.log("用户点击checkBox");
						break
					case "700004":
						console.log("用户点击协议");
						break
				}
			},
			customUiResult => {
				console.log("点击了自定义控件 " + JSON.stringify(customUiResult));
				if ("close" == customUiResult.widgetId) {
					//点击了自定义的关闭授权页按钮
					aLiSDKModule.quitLoginPage();
				} 
			});
	}
</script>

<style scoped>
	.button_attr {
		margin-top: 55upx;
	}
	.list_session {
		position: fixed;
		flex-direction: column;
	}
	.table_title {
		position: relative;
		margin-top: 50upx;
		margin-bottom: 0upx;
		width: 100%;
		height: 1px;
		background-color: #d4d4d4;
		text-align: center;
		font-size: 16px;
		color: rgba(101, 101, 101, 1);
	}
	.mid_text {
		position: absolute;
		left: 50%;
		background-color: #f2f2f5;
		transform: translateX(-50%) translateY(-50%);
	}
</style>
