<script>
	//初始化
	const aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');
	export default {
		onLaunch: function() {
			let platform = uni.getSystemInfoSync().platform;
			let sdkInfo = '';
			//设置秘钥
			if(platform == 'android'){
				//开启SDK日志打印
				aLiSDKModule.setLoggerEnable(true);
				sdkInfo = '7KHffk2Cn1j17+QVA2zbJfdDteDSUDspB/s+FUoAhyXmQ/wueAQBcpMDOVLrp5lt5BDIGxDrCuTBZk7TcR4CxAQvHnJUPIaCI5dscbBFqHgHVI8Yoy0nYwsFo8Gyd2RZ6MbUAZr3lsnPQsA+UW1MZY9EP94x0TrXmwEJkU5xJgmOJfCSekYWHP5xNc0as/aWkTmNrjFyb5//93cAMwQllH0FFEFF+GEd7XMvm6ap/g4BD8676+z29MbePXPjoY6u3VrNTMkksQHW1EolxJkw+9Sa5pDsdOrQjXBz056J79PpNAFlTvPMZw==';
			}else if(platform == 'ios'){
				sdkInfo = 'kN/kJyM9prpJylbonn44x9VcVHM/xj94KaCSgxVJeWLN/7Vkv04f//7dQ+wJX2eOCNuy6sW4xAUPLLVu4ktbPlx40Z7gL5EIrwEcd+XNkjJCpZVD1ksiv8GT5vmhLPLSYtO9hikCnN4YrKEye99JB33ildDCoKY6h/a50VmuP2GHeMMjdlN99ztDb6lUlv34sKKXgCge35/oESpSqKJU8k8m9an8EGbCGmOVRVSkIByNMDMyniMw9af+R/8Iewe2l8MpgSlfqeNhKjU0T2BFh0l2rLSbSUwB';
			}
			aLiSDKModule.setAuthSDKInfo(sdkInfo);
			
			console.log('App Launch');
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
	}

	.button_attr {
		background-color: #0faeff;
		color: #FFFFFF;
		justify-content: center;
		margin-top: 100upx;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-bottom: 0upx;
	}
</style>
