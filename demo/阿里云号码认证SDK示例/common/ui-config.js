function buildFullscreen() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.screen.resolutionHeight;
	const bodyWidth = plus.screen.resolutionWidth;
	const designHeight = bodyHeight - 80;
	const unit = parseInt(designHeight / 20);
	const logoY = String(unit * 1 - 10);
	const sloganY = String(unit * 5);
	const numberY = String(unit * 6 + 20);
	const loginBtnY = String(unit * 9);
	const switchY = String(unit * 12);

	if (platform == 'android') {
		config = {
			uiConfig: {
				setStatusBarColor: "#0faeff",
				setStatusBarLightColor: "false",
				setNavUi: {
					text: "一键登录",
					textColor: "#FFFFFF",
					bgColor: "#0faeff",
					returnImgPath: "static/nav_back.png",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setLogoUi: {
					imgPath: "static/mytel_app_launcher.png",
					offsetY: logoY,
				},
				setSloganUi: {
					offsetY: sloganY,
				},
				setNumberUi: {
					offsetY: numberY,
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				},
				setSwitchUi: {
					textColor: "#0faeff",
					offsetY: switchY,
				},
				setAppPrivacyOne: {
					title: '用户协议',
					url: "https://www.taobao.com"
				},
				setAppPrivacyTwo: {
					title: '隐私政策',
					url: "https://www.taobao.com"
				},
				setAppPrivacyThree: {
					title: '服务协议',
					url: "https://www.taobao.com"
				},
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				preferredStatusBarStyle: "1",
				setNavUi: {
					text: "一键登录",
					textColor: "#FFFFFF",
					bgColor: "#0faeff",
					returnImgPath: "static/nav_back.png",
					returnImgY: "10",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setLogoUi: {
					imgPath: "static/mytel_app_launcher.png",
					y: logoY,
				},
				setSloganUi: {
					y: sloganY,
				},
				setNumberUi: {
					textSize: "28",
					y: numberY,
				},
				setLoginBtnUi: {
					y: loginBtnY,
				},
				setSwitchUi: {
					textColor: "#0faeff",
					y: switchY,
				},
				setAppPrivacyOne: {
					title: '用户协议',
					url: "https://www.taobao.com"
				},
				setAppPrivacyTwo: {
					title: '隐私政策',
					url: "https://www.taobao.com"
				},
				setAppPrivacyThree: {
					title: '服务协议',
					url: "https://www.taobao.com"
				},
			}
		};
	}
	return config;
}

function buildAlert() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.display.resolutionHeight;
	const bodyWidth = plus.display.resolutionWidth;
	const dialogWidth = parseInt(bodyWidth * 0.8);
	const dialogHeight = parseInt(dialogWidth / 0.618);
	const unit = parseInt(dialogHeight / 10);
	const logoY = String(Math.ceil(unit * 0.3));
	const sloganY = String(Math.ceil(unit * 2.5));
	const numberY = String(Math.ceil(unit * 3.2));
	const loginBtnY = String(Math.ceil(unit * 4.3));
	const switchY = String(Math.ceil(unit * 6.0));

	if (platform == 'android') {
		config = {
			uiConfig: {
				setDialogTheme: {
					width: String(dialogWidth),
					height: String(dialogHeight),
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#000000",
					returnImgPath: "static/close_black.png",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setLogoUi: {
					imgPath: "static/mytel_app_launcher.png",
					offsetY: logoY,
				},
				setSloganUi: {
					offsetY: sloganY,
				},
				setNumberUi: {
					offsetY: numberY,
					textSize: "23"
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				},
				setSwitchUi: {
					textColor: "#0faeff",
					offsetY: switchY,
				},
				setAppPrivacyOne: {
					title: '用户协议',
					url: "https://www.taobao.com"
				},
				setAppPrivacyTwo: {
					title: '隐私政策',
					url: "https://www.taobao.com"
				},
				setAppPrivacyThree: {
					title: '服务协议',
					url: "https://www.taobao.com"
				}
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				setDialogTheme: {
					radius: ["10", "10", "10", "10"],
					x: String((bodyWidth - dialogWidth) * 0.5),
					y: String((bodyHeight - dialogHeight) * 0.5),
					width: String(dialogWidth),
					height: String(dialogHeight),
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#000000",
					bgColor: "#00FFFFFF",
					returnImgPath: "static/close_black.png",
					returnImgX: String(dialogWidth - 24 - 15),
					returnImgY: "5",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setLogoUi: {
					imgPath: "static/mytel_app_launcher.png",
					y: logoY,
				},
				setSloganUi: {
					y: sloganY,
				},
				setNumberUi: {
					y: numberY,
					textSize: "24"
				},
				setLoginBtnUi: {
					y: loginBtnY,
				},
				setSwitchUi: {
					textColor: "#0faeff",
					y: switchY,
				},
				setAppPrivacyOne: {
					title: '用户协议',
					url: "https://www.taobao.com"
				},
				setAppPrivacyTwo: {
					title: '隐私政策',
					url: "https://www.taobao.com"
				},
				setAppPrivacyThree: {
					title: '服务协议',
					url: "https://www.taobao.com"
				}
			}
		};
	}
	return config;
}

function buildSheet() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.display.resolutionHeight;
	const bodyWidth = plus.display.resolutionWidth;
	const dialogWidth = bodyWidth;
	const dialogHeight = 460;
	const unit = parseInt(dialogHeight / 10);
	const logoY = String(Math.ceil(unit * 0.3));
	const sloganY = String(Math.ceil(unit * 2.5));
	const numberY = String(Math.ceil(unit * 3.2));
	const loginBtnY = String(Math.ceil(unit * 4.3));
	const switchY = String(Math.ceil(unit * 6.0));

	if (platform == 'android') {
		config = {
			uiConfig: {
				setDialogTheme: {
					width: String(dialogWidth),
					height: String(dialogHeight),
					isBottom: "true"
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#000000",
					returnImgPath: "static/close_black.png",
					returnImgX: String(dialogWidth - 24 - 15),
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setLogoUi: {
					imgPath: "static/mytel_app_launcher.png",
					offsetY: logoY
				},
				setSloganUi: {
					offsetY: sloganY,
				},
				setNumberUi: {
					offsetY: numberY,
					textSize: "23",
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				},
				setSwitchUi: {
					textColor: "#0faeff",
					offsetY: switchY,
				},
				setAppPrivacyOne: {
					title: '用户协议',
					url: "https://www.taobao.com"
				},
				setAppPrivacyTwo: {
					title: '隐私政策',
					url: "https://www.taobao.com"
				},
				setAppPrivacyThree: {
					title: '服务协议',
					url: "https://www.taobao.com"
				}
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				setDialogTheme: {
					radius: ["10", "0", "0", "10"],
					x: String((bodyWidth - dialogWidth) * 0.5),
					y: String(bodyHeight - dialogHeight),
					width: String(dialogWidth),
					height: String(dialogHeight),
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#000000",
					bgColor: "#00FFFFFF",
					returnImgPath: "static/close_black.png",
					returnImgX: String(dialogWidth - 24 - 15),
					returnImgY: "5",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setLogoUi: {
					imgPath: "static/mytel_app_launcher.png",
					y: logoY,
				},
				setSloganUi: {
					y: sloganY,
				},
				setNumberUi: {
					y: numberY,
					textSize: "24",
				},
				setLoginBtnUi: {
					y: loginBtnY,
				},
				setSwitchUi: {
					textColor: "#0faeff",
					y: switchY,
				},
				setAppPrivacyOne: {
					title: '用户协议',
					url: "https://www.taobao.com"
				},
				setAppPrivacyTwo: {
					title: '隐私政策',
					url: "https://www.taobao.com"
				},
				setAppPrivacyThree: {
					title: '服务协议',
					url: "https://www.taobao.com"
				}
			}
		};
	}
	return config;
}

function buildFullscreenAndImageBg() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.screen.resolutionHeight;
	const bodyWidth = plus.screen.resolutionWidth;
	const designHeight = bodyHeight - 80;
	const unit = parseInt(designHeight / 20);
	const numberY = String(unit * 7);
	const sloganY = String(unit * 9);
	const loginBtnY = String(unit * 12);

	if (platform == 'android') {
		config = {
			uiConfig: {
				setStatusBarColor: "#00FFFFFF",
				setStatusBarUIFlag: "1",
				setStatusBarLightColor: "false",
				setNavHidden: "true",
				setLogoHidden: "true",
				setSwitchHidden: "true",
				setBackgroundUi: {
					backgroundColor: "#081223",
					imagePath: "static/web_background_1.jpeg",
				},
				setNumberUi: {
					offsetY: numberY,
					textColor: "#FFFFFF",
				},
				setSloganUi: {
					text: '阿里通信提供认证服务',
					textColor: '#FFFFFF',
					textSize: "16",
					offsetY: String(unit * 9),
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				}
			},
			widgets: {
				widget1: {
					widgetId: "close",
					type: "ImageView",
					left: "25",
					top: "0",
					width: "24",
					height: "24",
					backgroundImgPath: "static/close_white.png",
					locate: "0"
				},
				widget2: {
					widgetId: "line",
					type: "TextView",
					textContent: "-其他方式登录-",
					textSize: "13",
					textColor: "#FFFFFF",
					left: "10",
					top: String(unit * 15),
					width: String(bodyWidth - 20),
					height: "20",
					locate: "0"
				},
				widget3: {
					widgetId: "alipay",
					type: "ImageView",
					left: String(bodyWidth * 0.5 - 20 - 50),
					top: String(unit * 16),
					width: "50",
					height: "50",
					backgroundImgPath: "static/alipay_icon.png",
					locate: "0"
				},
				widget4: {
					widgetId: "taobao",
					type: "ImageView",
					left: String(bodyWidth * 0.5 + 20),
					top: String(unit * 16),
					width: "50",
					height: "50",
					backgroundImgPath: "static/taobao_icon.png",
					locate: "0"
				}
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				preferredStatusBarStyle: "1",
				setNavHidden: "true",
				setLogoHidden: "true",
				setSwitchHidden: "true",
				setBackgroundUi: {
					backgroundColor: "#081223",
					imagePath: "static/web_background_1.jpeg",
				},
				setNumberUi: {
					y: numberY,
					textColor: "#FFFFFF",
				},
				setSloganUi: {
					text: "阿里通信提供认证服务",
					textColor: "#FFFFFF",
					textSize: "17",
					y: sloganY,
				},
				setLoginBtnUi: {
					y: loginBtnY,
				}
			},
			widgets: [{
				widgetId: "close",
				type: "Button",
				x: "25",
				y: "64", //注意刘海屏
				width: "24",
				height: "24",
				backgroundImage: "static/close_white.png",
			}, {
				widgetId: "line",
				type: "Label",
				alignment: "1",
				textContent: "-其他方式登录-",
				textSize: "13",
				textColor: "#FFFFFF",
				x: "10",
				y: String(unit * 15),
				width: String(bodyWidth - 20),
				height: "20",
			}, {
				widgetId: "alipay",
				type: "Button",
				x: String(bodyWidth * 0.5 - 20 - 50),
				y: String(unit * 16),
				width: "50",
				height: "50",
				backgroundImage: "static/alipay_icon.png",
			}, {
				widgetId: "taobao",
				type: "Button",
				x: String(bodyWidth * 0.5 + 20),
				y: String(unit * 16),
				width: "50",
				height: "50",
				backgroundImage: "static/taobao_icon.png",
			}]
		};
	}
	return config;
}

function buildAlertAndImageBg() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.display.resolutionHeight;
	const bodyWidth = plus.display.resolutionWidth;
	const dialogWidth = parseInt(bodyWidth * 0.8);
	const dialogHeight = parseInt(dialogWidth / 0.618);
	const unit = parseInt(dialogHeight / 10);
	const numberY = String(Math.ceil(unit * 2.0));
	const loginBtnY = String(Math.ceil(unit * 4.3));

	if (platform == 'android') {
		config = {
			uiConfig: {
				setLogoHidden: "true",
				setSloganHidden: "true",
				setSwitchHidden: "true",
				setDialogTheme: {
					width: String(dialogWidth),
					height: String(dialogHeight),
				},
				setBackgroundUi: {
					backgroundColor: "#0c141E",
					imagePath: "static/web_background_2.jpeg",
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#FFFFFF",
					returnImgPath: "static/close_white.png",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setNumberUi: {
					offsetY: numberY,
					textColor: "#FFFFFF",
					textSize: "23",
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				}
			},
			widgets: {
				widget1: {
					widgetId: "line",
					type: "TextView",
					textContent: "-其他方式登录-",
					textSize: "13",
					textColor: "#FFFFFF",
					left: "10",
					top: String(Math.ceil(unit * 5.8)),
					width: String(dialogWidth - 20),
					height: "20",
					locate: "0"
				},
				widget2: {
					widgetId: "alipay",
					type: "ImageView",
					left: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),
					top: String(Math.ceil(unit * 6.3)),
					width: "50",
					height: "50",
					backgroundImgPath: "static/alipay_icon.png",
					locate: "0"
				},
				widget3: {
					widgetId: "taobao",
					type: "ImageView",
					left: String(Math.ceil(dialogWidth * 0.5 + 20)),
					top: String(Math.ceil(unit * 6.3)),
					width: "50",
					height: "50",
					backgroundImgPath: "static/taobao_icon.png",
					locate: "0"
				}
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				setLogoHidden: "true",
				setSloganHidden: "true",
				setSwitchHidden: "true",
				setDialogTheme: {
					radius: ["10", "10", "10", "10"],
					x: String((bodyWidth - dialogWidth) * 0.5),
					y: String((bodyHeight - dialogHeight) * 0.5),
					width: String(dialogWidth),
					height: String(dialogHeight),
				},
				setBackgroundUi: {
					backgroundColor: "#0c141E",
					imagePath: "static/web_background_2.jpeg",
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#FFFFFF",
					bgColor: "#00FFFFFF",
					returnImgPath: "static/close_white.png",
					returnImgX: String(dialogWidth - 24 - 15),
					returnImgY: "5",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setNumberUi: {
					y: numberY,
					textColor: "#FFFFFF",
					textSize: "24",
				},
				setLoginBtnUi: {
					y: loginBtnY,
				}
			},
			widgets: [{
				widgetId: "line",
				type: "Label",
				alignment: "1",
				textContent: "-其他方式登录-",
				textSize: "13",
				textColor: "#FFFFFF",
				x: "10",
				y: String(Math.ceil(unit * 5.8)),
				width: String(dialogWidth - 20),
				height: "20",
			}, {
				widgetId: "alipay",
				type: "Button",
				x: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),
				y: String(Math.ceil(unit * 6.3)),
				width: "50",
				height: "50",
				backgroundImage: "static/alipay_icon.png",
			}, {
				widgetId: "taobao",
				type: "Button",
				x: String(Math.ceil(dialogWidth * 0.5 + 20)),
				y: String(Math.ceil(unit * 6.3)),
				width: "50",
				height: "50",
				backgroundImage: "static/taobao_icon.png",
			}]
		};
	}
	return config;
}

function buildSheetAndGifBg() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.display.resolutionHeight;
	const bodyWidth = plus.display.resolutionWidth;
	const dialogWidth = bodyWidth;
	const dialogHeight = "460";
	const unit = parseInt(dialogHeight / 10);
	const numberY = String(Math.ceil(unit * 1.5));
	const loginBtnY = String(Math.ceil(unit * 3.5));

	if (platform == 'android') {
		config = {
			uiConfig: {
				setLogoHidden: "true",
				setSloganHidden: "true",
				setSwitchHidden: "true",
				setBackgroundUi: {
					backgroundColor: "#256581",
					gifPath: "static/background_gif.gif",
				},
				setDialogTheme: {
					width: String(dialogWidth),
					height: String(dialogHeight),
					isBottom: "true"
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#FFFFFF",
					returnImgPath: "static/close_white.png",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setNumberUi: {
					offsetY: numberY,
					textColor: "#FFFFFF",
					textSize: "24",
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				}
			},
			widgets: {
				widget1: {
					widgetId: "line",
					type: "TextView",
					textContent: "-其他方式登录-",
					textSize: "13",
					textColor: "#FFFFFF",
					left: "10",
					top: String(Math.ceil(unit * 5.2)),
					width: String(dialogWidth - 20),
					height: "20",
					locate: "0"
				},
				widget2: {
					widgetId: "alipay",
					type: "ImageView",
					left: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),
					top: String(Math.ceil(unit * 5.8)),
					width: "50",
					height: "50",
					backgroundImgPath: "static/alipay_icon.png",
					locate: "0"
				},
				widget3: {
					widgetId: "taobao",
					type: "ImageView",
					left: String(Math.ceil(dialogWidth * 0.5 + 20)),
					top: String(Math.ceil(unit * 5.8)),
					width: "50",
					height: "50",
					backgroundImgPath: "static/taobao_icon.png",
					locate: "0"
				}
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				setLogoHidden: "true",
				setSloganHidden: "true",
				setSwitchHidden: "true",
				setDialogTheme: {
					radius: ["10", "0", "0", "10"],
					x: String((bodyWidth - dialogWidth) * 0.5),
					y: String(bodyHeight - dialogHeight),
					width: String(dialogWidth),
					height: String(dialogHeight),
				},
				setBackgroundUi: {
					backgroundColor: "#256581",
					gifPath: "static/background_gif.gif",
				},
				setNavUi: {
					text: "一键登录",
					textColor: "#FFFFFF",
					bgColor: "#00FFFFFF",
					returnImgPath: "static/close_white.png",
					returnImgX: String(dialogWidth - 24 - 15),
					returnImgY: "5",
					returnImgWidth: "24",
					returnImgHeight: "24",
				},
				setNumberUi: {
					y: numberY,
					textColor: "#FFFFFF",
					textSize: "23",
				},
				setLoginBtnUi: {
					y: loginBtnY,
				}
			},
			widgets: [{
				widgetId: "line",
				type: "Label",
				alignment: "1",
				textContent: "-其他方式登录-",
				textSize: "13",
				textColor: "#FFFFFF",
				x: "10",
				y: String(Math.ceil(unit * 5.2)),
				width: String(dialogWidth - 20),
				height: "20",
			}, {
				widgetId: "alipay",
				type: "Button",
				x: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),
				y: String(Math.ceil(unit * 5.8)),
				width: "50",
				height: "50",
				backgroundImage: "static/alipay_icon.png",
			}, {
				widgetId: "taobao",
				type: "Button",
				x: String(Math.ceil(dialogWidth * 0.5 + 20)),
				y: String(Math.ceil(unit * 5.8)),
				width: "50",
				height: "50",
				backgroundImage: "static/taobao_icon.png",
			}]
		};
	}
	return config;
}

function buildFullscreenAndWebviewBg() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.screen.resolutionHeight;
	const bodyWidth = plus.screen.resolutionWidth;
	const designHeight = bodyHeight - 80;
	const unit = parseInt(designHeight / 20);
	const numberY = String(unit * 7);
	const sloganY = String(unit * 9);
	const loginBtnY = String(unit * 12);

	if (platform == 'android') {
		config = {
			uiConfig: {
				setStatusBarColor: "#00FFFFFF",
				setStatusBarUIFlag: "1",
				setStatusBarLightColor: "false",
				setNavHidden: "true",
				setLogoHidden: "true",
				setSwitchHidden: "true",
				setBackgroundUi: {
					webviewPath: "static/background_web.html",
					webviewJavaScriptEnabled: "true",
				},
				setNumberUi: {
					offsetY: numberY,
					textColor: "#FFFFFF",
				},
				setSloganUi: {
					text: '阿里通信提供认证服务',
					textColor: '#FFFFFF',
					textSize: "16",
					offsetY: String(unit * 9),
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				},
			},
			widgets: {
				widget1: {
					widgetId: "close",
					type: "ImageView",
					left: "25",
					top: "0",
					width: "24",
					height: "24",
					backgroundImgPath: "static/close_white.png",
					locate: "0"
				},
				widget2: {
					widgetId: "line",
					type: "TextView",
					textContent: "-其他方式登录-",
					textSize: "13",
					textColor: "#FFFFFF",
					left: "10",
					top: String(unit * 15),
					width: String(bodyWidth - 20),
					height: "20",
					locate: "0"
				},
				widget3: {
					widgetId: "alipay",
					type: "ImageView",
					left: String(bodyWidth * 0.5 - 20 - 50),
					top: String(unit * 16),
					width: "50",
					height: "50",
					backgroundImgPath: "static/alipay_icon.png",
					locate: "0"
				},
				widget4: {
					widgetId: "taobao",
					type: "ImageView",
					left: String(bodyWidth * 0.5 + 20),
					top: String(unit * 16),
					width: "50",
					height: "50",
					backgroundImgPath: "static/taobao_icon.png",
					locate: "0"
				}
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				preferredStatusBarStyle: "1",
				setNavHidden: "true",
				setLogoHidden: "true",
				setSwitchHidden: "true",
				setBackgroundUi: {
					webviewPath: "static/background_web.html",
				},
				setNumberUi: {
					y: numberY,
					textColor: "#FFFFFF",
				},
				setSloganUi: {
					text: "阿里通信提供认证服务",
					textColor: "#FFFFFF",
					textSize: "17",
					y: String(unit * 9),
				},
				setLoginBtnUi: {
					y: loginBtnY,
				}
			},
			widgets: [{
				widgetId: "close",
				type: "Button",
				x: "25",
				y: "64", //注意刘海屏
				width: "24",
				height: "24",
				backgroundImage: "static/close_white.png",
			}, {
				widgetId: "line",
				type: "Label",
				alignment: "1",
				textContent: "-其他方式登录-",
				textSize: "13",
				textColor: "#FFFFFF",
				x: "10",
				y: String(unit * 15),
				width: String(bodyWidth - 20),
				height: "20",
			}, {
				widgetId: "alipay",
				type: "Button",
				x: String(bodyWidth * 0.5 - 20 - 50),
				y: String(unit * 16),
				width: "50",
				height: "50",
				backgroundImage: "static/alipay_icon.png",
			}, {
				widgetId: "taobao",
				type: "Button",
				x: String(bodyWidth * 0.5 + 20),
				y: String(unit * 16),
				width: "50",
				height: "50",
				backgroundImage: "static/taobao_icon.png",
			}]
		};
	}
	return config;
}

function buildFullscreenAndWeexViewBg() {
	let platform = uni.getSystemInfoSync().platform;

	let config = {};

	const bodyHeight = plus.screen.resolutionHeight;
	const bodyWidth = plus.screen.resolutionWidth;
	const designHeight = bodyHeight - 80;
	const unit = parseInt(designHeight / 20);
	const numberY = String(unit * 7);
	const sloganY = String(unit * 9);
	const loginBtnY = String(unit * 12);

	if (platform == 'android') {
		config = {
			uiConfig: {
				setStatusBarColor: "#00FFFFFF",
				setStatusBarUIFlag: "1",
				setStatusBarLightColor: "false",
				setNavHidden: "true",
				setLogoHidden: "true",
				setSwitchHidden: "true",
				setBackgroundUi: {
					backgroundColor: "#1E5372",
					weexJsPath: "static/background_weex.js",
				},
				setNumberUi: {
					textColor: "#FFFFFF",
					offsetY: numberY,
				},
				setSloganUi: {
					text: '阿里通信提供认证服务',
					textColor: '#FFFFFF',
					textSize: "16",
					offsetY: String(unit * 9),
				},
				setLoginBtnUi: {
					offsetY: loginBtnY,
				}
			},
			widgets: {
				widget1: {
					widgetId: "close",
					type: "ImageView",
					left: "25",
					top: "0",
					width: "24",
					height: "24",
					backgroundImgPath: "static/close_white.png",
					locate: "0"
				},
				widget2: {
					widgetId: "line",
					type: "TextView",
					textContent: "-其他方式登录-",
					textSize: "13",
					textColor: "#FFFFFF",
					left: "10",
					top: String(unit * 15),
					width: String(bodyWidth - 20),
					height: "20",
					locate: "0"
				},
				widget3: {
					widgetId: "alipay",
					type: "ImageView",
					left: String(bodyWidth * 0.5 - 20 - 50),
					top: String(unit * 16),
					width: "50",
					height: "50",
					backgroundImgPath: "static/alipay_icon.png",
					locate: "0"
				},
				widget4: {
					widgetId: "taobao",
					type: "ImageView",
					left: String(bodyWidth * 0.5 + 20),
					top: String(unit * 16),
					width: "50",
					height: "50",
					backgroundImgPath: "static/taobao_icon.png",
					locate: "0"
				}
			}
		};
	} else if (platform == 'ios') {
		config = {
			uiConfig: {
				preferredStatusBarStyle: "1",
				setNavHidden: "true",
				setLogoHidden: "true",
				setSwitchHidden: "true",
				setBackgroundUi: {
					backgroundColor: "#1E5372",
					weexJsPath: "static/background_weex.js",
				},
				setNumberUi: {
					y: numberY,
					textColor: "#FFFFFF",
				},
				setSloganUi: {
					text: "阿里通信提供认证服务",
					textColor: "#FFFFFF",
					textSize: "17",
					y: String(unit * 9),
				},
				setLoginBtnUi: {
					y: loginBtnY,
				}
			},
			widgets: [{
				widgetId: "close",
				type: "Button",
				x: "25",
				y: "64", //注意刘海屏
				width: "24",
				height: "24",
				backgroundImage: "static/close_white.png",
			}, {
				widgetId: "line",
				type: "Label",
				alignment: "1",
				textContent: "-其他方式登录-",
				textSize: "13",
				textColor: "#FFFFFF",
				x: "10",
				y: String(unit * 15),
				width: String(bodyWidth - 20),
				height: "20",
			}, {
				widgetId: "alipay",
				type: "Button",
				x: String(bodyWidth * 0.5 - 20 - 50),
				y: String(unit * 16),
				width: "50",
				height: "50",
				backgroundImage: "static/alipay_icon.png",
			}, {
				widgetId: "taobao",
				type: "Button",
				x: String(bodyWidth * 0.5 + 20),
				y: String(unit * 16),
				width: "50",
				height: "50",
				backgroundImage: "static/taobao_icon.png",
			}]
		};
	}
	return config;
}

module.exports = {
	buildFullscreen: buildFullscreen,
	buildAlert: buildAlert,
	buildSheet: buildSheet,
	buildFullscreenAndImageBg: buildFullscreenAndImageBg,
	buildAlertAndImageBg: buildAlertAndImageBg,
	buildSheetAndGifBg: buildSheetAndGifBg,
	buildFullscreenAndWebviewBg: buildFullscreenAndWebviewBg,
	buildFullscreenAndWeexViewBg: buildFullscreenAndWeexViewBg,
}
