(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 20);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 22));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUIsc0VBQWdEO0FBQ25FLHdFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFKO0FBQ0xHLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC91bmktc3RhdC5lcy5qcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5cclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcblxyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}


if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/home/home', function () {return Vue.extend(__webpack_require__(/*! pages/home/home.vue?mpType=page */ 2).default);});
__definePage('pages/verify/verify', function () {return Vue.extend(__webpack_require__(/*! pages/verify/verify.vue?mpType=page */ 9).default);});
__definePage('pages/login/login', function () {return Vue.extend(__webpack_require__(/*! pages/login/login.vue?mpType=page */ 14).default);});

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/home/home.vue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=44021cb6&mpType=page */ 3);\n/* harmony import */ var _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/home/home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQzZLO0FBQzdLLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDQwMjFjYjYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2hvbWUvaG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/home/home.vue?vue&type=template&id=44021cb6&mpType=page ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=44021cb6&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_44021cb6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/阿里云号码认证SDK示例/pages/home/home.vue?vue&type=template&id=44021cb6&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "result_group"), attrs: { _i: 1 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(2, "sc", "text_attr"), attrs: { _i: 2 } },
            [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.sdkVersion)))]
          ),
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "text_attr"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.carrierName)))]
          )
        ]
      ),
      _c("button", {
        staticClass: _vm._$s(4, "sc", "button_attr"),
        attrs: { _i: 4 },
        on: { click: _vm.goVerifyView }
      }),
      _c("button", {
        staticClass: _vm._$s(5, "sc", "button_attr"),
        attrs: { _i: 5 },
        on: { click: _vm.goLoginView }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***************************************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/home/home.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1sQixDQUFnQiw2bUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/阿里云号码认证SDK示例/pages/home/home.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');var _default =\n\n{\n  data: function data() {\n    return {\n      \"sdkVersion\": \"\",\n      \"carrierName\": \"\" };\n\n  },\n  onLoad: function onLoad() {var _this = this;\n    // 获取插件依赖的原生SDK版本号\n    aLiSDKModule.getVersion(function (version) {\n      _this.sdkVersion = version;\n    });\n    // 获取当前蜂窝网络所属运营商 中国联通：CUCC、中国移动：CMCC、中国电信：CTCC\n    aLiSDKModule.getCurrentCarrierName(function (carrierName) {\n      _this.carrierName = carrierName;\n    });\n  },\n  methods: {\n    goVerifyView: function goVerifyView() {\n      // 可以提前检测当前环境是否支持本机号码校验，选调接口，不检测直接调用后面功能接口也能检测出环境问题\n      aLiSDKModule.checkEnvAvailable(1, function (result) {\n        if ('600000' == result.resultCode) {\n          uni.navigateTo({\n            animationDuration: 300,\n            url: \"../verify/verify\" });\n\n        } else {\n          __f__(\"log\", \"当前环境不支持本机号码校验，result = \" + JSON.stringify(result), \" at pages/home/home.vue:42\");\n          uni.showToast({\n            icon: \"none\",\n            title: result.msg,\n            duration: 3000 });\n\n        }\n      });\n    },\n\n    goLoginView: function goLoginView() {\n      // 可以提前检测当前环境是否支持一键登录，选调接口，不检测直接调用后面功能接口也能检测出环境问题\n      aLiSDKModule.checkEnvAvailable(2, function (result) {\n        if ('600000' == result.resultCode) {\n          uni.navigateTo({\n            animationDuration: 300,\n            url: \"../login/login\" });\n\n        } else {\n          __f__(\"log\", \"当前环境不支持一键登录，result = \", JSON.stringify(result), \" at pages/home/home.vue:61\");\n          uni.showToast({\n            icon: \"none\",\n            title: result.msg,\n            duration: 3000 });\n\n        }\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaG9tZS9ob21lLnZ1ZSJdLCJuYW1lcyI6WyJhTGlTREtNb2R1bGUiLCJ1bmkiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwiZGF0YSIsIm9uTG9hZCIsImdldFZlcnNpb24iLCJ2ZXJzaW9uIiwic2RrVmVyc2lvbiIsImdldEN1cnJlbnRDYXJyaWVyTmFtZSIsImNhcnJpZXJOYW1lIiwibWV0aG9kcyIsImdvVmVyaWZ5VmlldyIsImNoZWNrRW52QXZhaWxhYmxlIiwicmVzdWx0IiwicmVzdWx0Q29kZSIsIm5hdmlnYXRlVG8iLCJhbmltYXRpb25EdXJhdGlvbiIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJtc2ciLCJkdXJhdGlvbiIsImdvTG9naW5WaWV3Il0sIm1hcHBpbmdzIjoicUlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQUosQ0FBd0IscUJBQXhCLENBQXJCLEM7O0FBRWU7QUFDZEMsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTixvQkFBYyxFQURSO0FBRU4scUJBQWUsRUFGVCxFQUFQOztBQUlBLEdBTmE7QUFPZEMsUUFQYyxvQkFPTDtBQUNSO0FBQ0FKLGdCQUFZLENBQUNLLFVBQWIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO0FBQ2xDLFdBQUksQ0FBQ0MsVUFBTCxHQUFrQkQsT0FBbEI7QUFDQSxLQUZEO0FBR0E7QUFDQU4sZ0JBQVksQ0FBQ1EscUJBQWIsQ0FBbUMsVUFBQUMsV0FBVyxFQUFJO0FBQ2pELFdBQUksQ0FBQ0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxLQUZEO0FBR0EsR0FoQmE7QUFpQmRDLFNBQU8sRUFBRTtBQUNSQyxnQkFEUSwwQkFDTztBQUNkO0FBQ0FYLGtCQUFZLENBQUNZLGlCQUFiLENBQStCLENBQS9CLEVBQWtDLFVBQUFDLE1BQU0sRUFBSTtBQUMzQyxZQUFJLFlBQVlBLE1BQU0sQ0FBQ0MsVUFBdkIsRUFBbUM7QUFDbENiLGFBQUcsQ0FBQ2MsVUFBSixDQUFlO0FBQ2RDLDZCQUFpQixFQUFFLEdBREw7QUFFZEMsZUFBRyxFQUFFLGtCQUZTLEVBQWY7O0FBSUEsU0FMRCxNQUtPO0FBQ04sdUJBQVksNEJBQTRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBZixDQUF4QztBQUNBWixhQUFHLENBQUNtQixTQUFKLENBQWM7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLGlCQUFLLEVBQUVULE1BQU0sQ0FBQ1UsR0FGRDtBQUdiQyxvQkFBUSxFQUFFLElBSEcsRUFBZDs7QUFLQTtBQUNELE9BZEQ7QUFlQSxLQWxCTzs7QUFvQlJDLGVBcEJRLHlCQW9CTTtBQUNiO0FBQ0F6QixrQkFBWSxDQUFDWSxpQkFBYixDQUErQixDQUEvQixFQUFrQyxVQUFBQyxNQUFNLEVBQUk7QUFDM0MsWUFBSSxZQUFZQSxNQUFNLENBQUNDLFVBQXZCLEVBQW1DO0FBQ2xDYixhQUFHLENBQUNjLFVBQUosQ0FBZTtBQUNkQyw2QkFBaUIsRUFBRSxHQURMO0FBRWRDLGVBQUcsRUFBRSxnQkFGUyxFQUFmOztBQUlBLFNBTEQsTUFLTztBQUNOLHVCQUFZLHVCQUFaLEVBQXFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBZixDQUFyQztBQUNBWixhQUFHLENBQUNtQixTQUFKLENBQWM7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLGlCQUFLLEVBQUVULE1BQU0sQ0FBQ1UsR0FGRDtBQUdiQyxvQkFBUSxFQUFFLElBSEcsRUFBZDs7QUFLQTtBQUNELE9BZEQ7QUFlQSxLQXJDTyxFQWpCSyxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuY29uc3QgYUxpU0RLTW9kdWxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ0FsaUNsb3VkLU5pcnZhbmFQbnMnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcInNka1ZlcnNpb25cIjogXCJcIixcblx0XHRcdFwiY2Fycmllck5hbWVcIjogXCJcIlxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdC8vIOiOt+WPluaPkuS7tuS+nei1lueahOWOn+eUn1NES+eJiOacrOWPt1xuXHRcdGFMaVNES01vZHVsZS5nZXRWZXJzaW9uKHZlcnNpb24gPT4ge1xuXHRcdFx0dGhpcy5zZGtWZXJzaW9uID0gdmVyc2lvbjtcblx0XHR9KTtcblx0XHQvLyDojrflj5blvZPliY3onILnqp3nvZHnu5zmiYDlsZ7ov5DokKXllYYg5Lit5Zu96IGU6YCa77yaQ1VDQ+OAgeS4reWbveenu+WKqO+8mkNNQ0PjgIHkuK3lm73nlLXkv6HvvJpDVENDXG5cdFx0YUxpU0RLTW9kdWxlLmdldEN1cnJlbnRDYXJyaWVyTmFtZShjYXJyaWVyTmFtZSA9PiB7XG5cdFx0XHR0aGlzLmNhcnJpZXJOYW1lID0gY2Fycmllck5hbWU7XG5cdFx0fSk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnb1ZlcmlmeVZpZXcoKSB7XG5cdFx0XHQvLyDlj6/ku6Xmj5DliY3mo4DmtYvlvZPliY3njq/looPmmK/lkKbmlK/mjIHmnKzmnLrlj7fnoIHmoKHpqozvvIzpgInosIPmjqXlj6PvvIzkuI3mo4DmtYvnm7TmjqXosIPnlKjlkI7pnaLlip/og73mjqXlj6PkuZ/og73mo4DmtYvlh7rnjq/looPpl67pophcblx0XHRcdGFMaVNES01vZHVsZS5jaGVja0VudkF2YWlsYWJsZSgxLCByZXN1bHQgPT4ge1xuXHRcdFx0XHRpZiAoJzYwMDAwMCcgPT0gcmVzdWx0LnJlc3VsdENvZGUpIHtcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL3ZlcmlmeS92ZXJpZnlcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5b2T5YmN546v5aKD5LiN5pSv5oyB5pys5py65Y+356CB5qCh6aqM77yMcmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5tc2csXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdFxuXHRcdGdvTG9naW5WaWV3KCkge1xuXHRcdFx0Ly8g5Y+v5Lul5o+Q5YmN5qOA5rWL5b2T5YmN546v5aKD5piv5ZCm5pSv5oyB5LiA6ZSu55m75b2V77yM6YCJ6LCD5o6l5Y+j77yM5LiN5qOA5rWL55u05o6l6LCD55So5ZCO6Z2i5Yqf6IO95o6l5Y+j5Lmf6IO95qOA5rWL5Ye6546v5aKD6Zeu6aKYXG5cdFx0XHRhTGlTREtNb2R1bGUuY2hlY2tFbnZBdmFpbGFibGUoMiwgcmVzdWx0ID0+IHtcblx0XHRcdFx0aWYgKCc2MDAwMDAnID09IHJlc3VsdC5yZXN1bHRDb2RlKSB7XG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uRHVyYXRpb246IDMwMCxcblx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpbi9sb2dpblwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlvZPliY3njq/looPkuI3mlK/mjIHkuIDplK7nmbvlvZXvvIxyZXN1bHQgPSBcIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQubXNnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!*******************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/verify/verify.vue?mpType=page ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.vue?vue&type=template&id=97e49014&scoped=true&mpType=page */ 10);\n/* harmony import */ var _verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"97e49014\",\n  null,\n  false,\n  _verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/verify/verify.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQzZLO0FBQzdLLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmVyaWZ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05N2U0OTAxNCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmVyaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi92ZXJpZnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOTdlNDkwMTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdmVyaWZ5L3ZlcmlmeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*************************************************************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/verify/verify.vue?vue&type=template&id=97e49014&scoped=true&mpType=page ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=template&id=97e49014&scoped=true&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_97e49014_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/阿里云号码认证SDK示例/pages/verify/verify.vue?vue&type=template&id=97e49014&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("input", {
        staticClass: _vm._$s(1, "sc", "input-row"),
        attrs: { _i: 1 }
      }),
      _c("button", {
        staticClass: _vm._$s(2, "sc", "button_attr"),
        attrs: { _i: 2 },
        on: { click: _vm.requestVerifyToken }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!*******************************************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/verify/verify.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=script&lang=js&mpType=page */ 13);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFsQixDQUFnQiwrbUJBQUcsRUFBQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92ZXJpZnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92ZXJpZnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/阿里云号码认证SDK示例/pages/verify/verify.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n\nvar aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');var _default =\n\n{\n  onLoad: function onLoad() {\n    /**\n                              * 加速本机号码校验Token的获取，选调接口，加速成功后调用 getVerifyToken 能够立马返回本机号码校验Token\n                              * \n                              * 注：\n                              * \t1、该接口为选调接口，非必调接口\n                              * \t2、建议在调用获取本机号码校验Token方法前，提前一段时间调用该加速接口，中间最好有2-3秒的缓冲（因为加速方法需要1~3s的时间取得临时凭证）\n                              * \t3、请勿频繁的多次调用\n                              * \t4、一进app就获取本机号码校验Token的场景不需要调用此接口\n                              */\n    aLiSDKModule.accelerateVerify(5000, function (result) {\n      __f__(\"log\", JSON.stringify(result), \" at pages/verify/verify.vue:23\");\n      if ('600000' == result.resultCode) {\n        __f__(\"log\", \"加速获取本机号码校验Token成功\", \" at pages/verify/verify.vue:25\");\n      } else {\n        __f__(\"log\", \"加速获取本机号码校验Token失败，\" + result.msg, \" at pages/verify/verify.vue:27\");\n      }\n    });\n  },\n  methods: {\n    requestVerifyToken: function requestVerifyToken() {\n      uni.showLoading({\n        mask: true });\n\n      // 获取本机号码校验Token\n      aLiSDKModule.getVerifyToken(5000, function (result) {\n        uni.hideLoading();\n        __f__(\"log\", JSON.stringify(result), \" at pages/verify/verify.vue:39\");\n        var msg = '';\n        if (\"600000\" == result.resultCode) {\n          msg = \"获取本机号码校验token成功，接下面需要拿手机号和token去服务端进行校验，SDK服务到此结束\";\n        } else {\n          msg = \"获取本机号码校验Token失败，\" + result.msg;\n        }\n        // 控制台输出和屏幕提示\n        __f__(\"log\", msg, \" at pages/verify/verify.vue:47\");\n        uni.showToast({\n          icon: \"none\",\n          title: msg,\n          duration: 3000 });\n\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmVyaWZ5L3ZlcmlmeS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQSxrRTs7QUFFQTtBQUNBLFFBREEsb0JBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBLEdBbkJBO0FBb0JBO0FBQ0Esc0JBREEsZ0NBQ0E7QUFDQTtBQUNBLGtCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsb0JBRkE7QUFHQSx3QkFIQTs7QUFLQSxPQWhCQTtBQWlCQSxLQXZCQSxFQXBCQSxFIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dC1yb3dcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmiYvmnLrlj7dcIiAvPlxuXHRcdDxidXR0b24gY2xhc3M9XCJidXR0b25fYXR0clwiIEBjbGljaz1cInJlcXVlc3RWZXJpZnlUb2tlblwiPuacrOacuuWPt+eggeagoemqjDwvYnV0dG9uPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRjb25zdCBhTGlTREtNb2R1bGUgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignQWxpQ2xvdWQtTmlydmFuYVBucycpO1xuXHRcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG9uTG9hZCgpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICog5Yqg6YCf5pys5py65Y+356CB5qCh6aqMVG9rZW7nmoTojrflj5bvvIzpgInosIPmjqXlj6PvvIzliqDpgJ/miJDlip/lkI7osIPnlKggZ2V0VmVyaWZ5VG9rZW4g6IO95aSf56uL6ams6L+U5Zue5pys5py65Y+356CB5qCh6aqMVG9rZW5cblx0XHRcdCAqIFxuXHRcdFx0ICog5rOo77yaXG5cdFx0XHQgKiBcdDHjgIHor6XmjqXlj6PkuLrpgInosIPmjqXlj6PvvIzpnZ7lv4XosIPmjqXlj6Ncblx0XHRcdCAqIFx0MuOAgeW7uuiuruWcqOiwg+eUqOiOt+WPluacrOacuuWPt+eggeagoemqjFRva2Vu5pa55rOV5YmN77yM5o+Q5YmN5LiA5q615pe26Ze06LCD55So6K+l5Yqg6YCf5o6l5Y+j77yM5Lit6Ze05pyA5aW95pyJMi0z56eS55qE57yT5Yay77yI5Zug5Li65Yqg6YCf5pa55rOV6ZyA6KaBMX4zc+eahOaXtumXtOWPluW+l+S4tOaXtuWHreivge+8iVxuXHRcdFx0ICogXHQz44CB6K+35Yu/6aKR57mB55qE5aSa5qyh6LCD55SoXG5cdFx0XHQgKiBcdDTjgIHkuIDov5thcHDlsLHojrflj5bmnKzmnLrlj7fnoIHmoKHpqoxUb2tlbueahOWcuuaZr+S4jemcgOimgeiwg+eUqOatpOaOpeWPo1xuXHRcdFx0ICovXG5cdFx0XHRhTGlTREtNb2R1bGUuYWNjZWxlcmF0ZVZlcmlmeSg1MDAwLCByZXN1bHQgPT4ge1xuXHRcdFx0ICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0ICAgIGlmICgnNjAwMDAwJyA9PSByZXN1bHQucmVzdWx0Q29kZSkge1xuXHRcdFx0ICAgIFx0Y29uc29sZS5sb2coXCLliqDpgJ/ojrflj5bmnKzmnLrlj7fnoIHmoKHpqoxUb2tlbuaIkOWKn1wiKTtcblx0XHRcdCAgICB9IGVsc2Uge1xuXHRcdFx0ICAgIFx0Y29uc29sZS5sb2coXCLliqDpgJ/ojrflj5bmnKzmnLrlj7fnoIHmoKHpqoxUb2tlbuWksei0pe+8jFwiICsgcmVzdWx0Lm1zZyk7XG5cdFx0XHQgICAgfVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRyZXF1ZXN0VmVyaWZ5VG9rZW4oKSB7XG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIOiOt+WPluacrOacuuWPt+eggeagoemqjFRva2VuXG5cdFx0XHRcdGFMaVNES01vZHVsZS5nZXRWZXJpZnlUb2tlbig1MDAwLCByZXN1bHQgPT4ge1xuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHRcdGxldCBtc2cgPSAnJztcblx0XHRcdFx0ICAgIGlmIChcIjYwMDAwMFwiID09IHJlc3VsdC5yZXN1bHRDb2RlKSB7XG5cdFx0XHRcdFx0XHRtc2cgPSBcIuiOt+WPluacrOacuuWPt+eggeagoemqjHRva2Vu5oiQ5Yqf77yM5o6l5LiL6Z2i6ZyA6KaB5ou/5omL5py65Y+35ZKMdG9rZW7ljrvmnI3liqHnq6/ov5vooYzmoKHpqozvvIxTREvmnI3liqHliLDmraTnu5PmnZ9cIjtcblx0XHRcdFx0ICAgIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtc2cgPSBcIuiOt+WPluacrOacuuWPt+eggeagoemqjFRva2Vu5aSx6LSl77yMXCIgKyByZXN1bHQubXNnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyDmjqfliLblj7DovpPlh7rlkozlsY/luZXmj5DnpLpcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogbXNnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQuaW5wdXQtcm93IHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRtYXJnaW4tdG9wOiA1MHVweDtcblx0XHRtYXJnaW4tbGVmdDogMzB1cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAzMHVweDtcblx0XHRwYWRkaW5nOiA0dXB4IDh1cHg7XG5cdFx0aGVpZ2h0OiA3MHVweDtcblx0XHRib3JkZXItcmFkaXVzOiA4dXB4O1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*****************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/login/login.vue?mpType=page ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page */ 15);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5b26a3ac\",\n  null,\n  false,\n  _login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/login/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZLO0FBQzdLLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YjI2YTNhYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjViMjZhM2FjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2xvZ2luL2xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!***********************************************************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/login/login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_5b26a3ac_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/阿里云号码认证SDK示例/pages/login/login.vue?vue&type=template&id=5b26a3ac&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "table_title"), attrs: { _i: 1 } },
        [
          _c("text", {
            staticClass: _vm._$s(2, "sc", "mid_text"),
            attrs: { _i: 2 }
          })
        ]
      ),
      _c("button", {
        staticClass: _vm._$s(3, "sc", "button_attr"),
        attrs: { _i: 3 },
        on: { click: _vm.fullscreenStyle }
      }),
      _c("button", {
        staticClass: _vm._$s(4, "sc", "button_attr"),
        attrs: { _i: 4 },
        on: { click: _vm.alertStyle }
      }),
      _c("button", {
        staticClass: _vm._$s(5, "sc", "button_attr"),
        attrs: { _i: 5 },
        on: { click: _vm.sheetStyle }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "table_title"), attrs: { _i: 6 } },
        [
          _c("text", {
            staticClass: _vm._$s(7, "sc", "mid_text"),
            attrs: { _i: 7 }
          })
        ]
      ),
      _c("button", {
        staticClass: _vm._$s(8, "sc", "button_attr"),
        attrs: { _i: 8 },
        on: { click: _vm.fullscreenAndImageBgStyle }
      }),
      _c("button", {
        staticClass: _vm._$s(9, "sc", "button_attr"),
        attrs: { _i: 9 },
        on: { click: _vm.alertAndImageBgStyle }
      }),
      _c("button", {
        staticClass: _vm._$s(10, "sc", "button_attr"),
        attrs: { _i: 10 },
        on: { click: _vm.sheetAndGifBgStyle }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(11, "sc", "table_title"), attrs: { _i: 11 } },
        [
          _c("text", {
            staticClass: _vm._$s(12, "sc", "mid_text"),
            attrs: { _i: 12 }
          })
        ]
      ),
      _c("button", {
        staticClass: _vm._$s(13, "sc", "button_attr"),
        attrs: { _i: 13 },
        on: {
          click: function($event) {
            return _vm.fullscreenAndWebviewBgStyle()
          }
        }
      }),
      _c("button", {
        staticClass: _vm._$s(14, "sc", "button_attr"),
        attrs: { _i: 14 },
        on: {
          click: function($event) {
            return _vm.fullscreenAndWeexViewBgStyle()
          }
        }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!*****************************************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9sQixDQUFnQiw4bUJBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/阿里云号码认证SDK示例/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uiConfig = _interopRequireDefault(__webpack_require__(/*! @/common/ui-config.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 导入一键登录授权页 UI 配置构建\nvar aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');var _default = { onLoad: function onLoad() {/**\n                                                                                                               * 可以提前调用该接口来加速授权页的拉起，选调接口，加速成功后调用 getLoginToken 能够立马拉起授权页\n                                                                                                               * \n                                                                                                               * 注：\n                                                                                                               * \t1、该接口为选调接口，非必调接口\n                                                                                                               * \t2、建议在判断当前用户属于未登录状态时使用，已登录状态用户请不要调用该方法\n                                                                                                               * \t3、建议在调用拉取授权页的方法前，提前一段时间调用预取号方法，中间最好有2-3秒的缓冲（因为加速方法需要1~3s的时间取得临时凭证）\n                                                                                                               * \t4、请勿频繁的多次调用、请勿与拉起授权登录页同时和之后调用\n                                                                                                               * \t5、一进app就登录的场景不需要调用此接口\n                                                                                                               */aLiSDKModule.accelerateLoginPage(5000, function (result) {__f__(\"log\", JSON.stringify(result), \" at pages/login/login.vue:42\");if ('600000' == result.resultCode) {__f__(\"log\", \"加速授权页拉起成功\", \" at pages/login/login.vue:44\");} else {__f__(\"log\", \"授权页加速拉起失败，\" + result.msg, \" at pages/login/login.vue:46\");}});}, methods: { fullscreenStyle: function fullscreenStyle() {var config = _uiConfig.default.buildFullscreen();_presentLoginController(config);}, alertStyle: function alertStyle() {var config = _uiConfig.default.buildAlert();_presentLoginController(config);\n    },\n    sheetStyle: function sheetStyle() {\n      var config = _uiConfig.default.buildSheet();\n      _presentLoginController(config);\n    },\n    fullscreenAndImageBgStyle: function fullscreenAndImageBgStyle() {\n      var config = _uiConfig.default.buildFullscreenAndImageBg();\n      _presentLoginController(config);\n    },\n    alertAndImageBgStyle: function alertAndImageBgStyle() {\n      var config = _uiConfig.default.buildAlertAndImageBg();\n      _presentLoginController(config);\n    },\n    sheetAndGifBgStyle: function sheetAndGifBgStyle() {\n      var config = _uiConfig.default.buildSheetAndGifBg();\n      _presentLoginController(config);\n    },\n    fullscreenAndWebviewBgStyle: function fullscreenAndWebviewBgStyle() {\n      var config = _uiConfig.default.buildFullscreenAndWebviewBg();\n      _presentLoginController(config);\n    },\n    fullscreenAndWeexViewBgStyle: function fullscreenAndWeexViewBgStyle() {\n      var config = _uiConfig.default.buildFullscreenAndWeexViewBg();\n      _presentLoginController(config);\n    } } };exports.default = _default;\n\n\n\nfunction _presentLoginController(config) {\n  uni.showLoading({\n    mask: true });\n\n  // 调用该接口首先会弹起授权页，点击授权页的登录按钮获取Token\n  aLiSDKModule.getLoginToken(\n  5000,\n  config,\n  function (tokenResult) {\n    uni.hideLoading();\n    __f__(\"log\", JSON.stringify(tokenResult), \" at pages/login/login.vue:96\");\n    if (\"600001\" == tokenResult.resultCode) {\n      __f__(\"log\", \"授权页拉起成功\", \" at pages/login/login.vue:98\");\n    } else if (\"600000\" == tokenResult.resultCode) {\n      __f__(\"log\", \"获取Token成功，接下来拿着结果里面的Token去服务端换取手机号码，SDK服务到此结束\", \" at pages/login/login.vue:100\");\n      //手动关闭授权页\n      aLiSDKModule.quitLoginPage();\n    } else {\n      //手动关闭授权页\n      aLiSDKModule.quitLoginPage();\n    }\n  },\n  function (clickResult) {\n    __f__(\"log\", JSON.stringify(clickResult), \" at pages/login/login.vue:109\");\n    switch (clickResult.resultCode) {\n      case \"700000\":\n        __f__(\"log\", \"用户点击返回按钮\", \" at pages/login/login.vue:112\");\n        break;\n      case \"700001\":\n        __f__(\"log\", \"用户切换其他登录方式\", \" at pages/login/login.vue:115\");\n        break;\n      case \"700002\":\n        __f__(\"log\", \"用户点击登录按钮\", \" at pages/login/login.vue:118\");\n        break;\n      case \"700003\":\n        __f__(\"log\", \"用户点击checkBox\", \" at pages/login/login.vue:121\");\n        break;\n      case \"700004\":\n        __f__(\"log\", \"用户点击协议\", \" at pages/login/login.vue:124\");\n        break;}\n\n  },\n  function (customUiResult) {\n    __f__(\"log\", \"点击了自定义控件 \" + JSON.stringify(customUiResult), \" at pages/login/login.vue:129\");\n    if (\"close\" == customUiResult.widgetId) {\n      //点击了自定义的关闭授权页按钮\n      aLiSDKModule.quitLoginPage();\n    }\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vbG9naW4udnVlIl0sIm5hbWVzIjpbImFMaVNES01vZHVsZSIsInVuaSIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJvbkxvYWQiLCJhY2NlbGVyYXRlTG9naW5QYWdlIiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdENvZGUiLCJtc2ciLCJtZXRob2RzIiwiZnVsbHNjcmVlblN0eWxlIiwiY29uZmlnIiwidWlDb25maWciLCJidWlsZEZ1bGxzY3JlZW4iLCJfcHJlc2VudExvZ2luQ29udHJvbGxlciIsImFsZXJ0U3R5bGUiLCJidWlsZEFsZXJ0Iiwic2hlZXRTdHlsZSIsImJ1aWxkU2hlZXQiLCJmdWxsc2NyZWVuQW5kSW1hZ2VCZ1N0eWxlIiwiYnVpbGRGdWxsc2NyZWVuQW5kSW1hZ2VCZyIsImFsZXJ0QW5kSW1hZ2VCZ1N0eWxlIiwiYnVpbGRBbGVydEFuZEltYWdlQmciLCJzaGVldEFuZEdpZkJnU3R5bGUiLCJidWlsZFNoZWV0QW5kR2lmQmciLCJmdWxsc2NyZWVuQW5kV2Vidmlld0JnU3R5bGUiLCJidWlsZEZ1bGxzY3JlZW5BbmRXZWJ2aWV3QmciLCJmdWxsc2NyZWVuQW5kV2VleFZpZXdCZ1N0eWxlIiwiYnVpbGRGdWxsc2NyZWVuQW5kV2VleFZpZXdCZyIsInNob3dMb2FkaW5nIiwibWFzayIsImdldExvZ2luVG9rZW4iLCJ0b2tlblJlc3VsdCIsImhpZGVMb2FkaW5nIiwicXVpdExvZ2luUGFnZSIsImNsaWNrUmVzdWx0IiwiY3VzdG9tVWlSZXN1bHQiLCJ3aWRnZXRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLDZGLDhGQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsWUFB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QUFaO0FBQ0E7QUFDRCxXQUFLLFFBQUw7QUFDQyxxQkFBWSxjQUFaO0FBQ0E7QUFDRCxXQUFLLFFBQUw7QUFDQyxxQkFBWSxRQUFaO0FBQ0EsY0FmRjs7QUFpQkEsR0FwQ0Y7QUFxQ0MsWUFBQTZCLGNBQWMsRUFBSTtBQUNqQixpQkFBWSxjQUFjL0IsSUFBSSxDQUFDQyxTQUFMLENBQWU4QixjQUFmLENBQTFCO0FBQ0EsUUFBSSxXQUFXQSxjQUFjLENBQUNDLFFBQTlCLEVBQXdDO0FBQ3ZDO0FBQ0F0QyxrQkFBWSxDQUFDbUMsYUFBYjtBQUNBO0FBQ0QsR0EzQ0Y7QUE0Q0EsQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbi8vIOWvvOWFpeS4gOmUrueZu+W9leaOiOadg+mhtSBVSSDphY3nva7mnoTlu7pcbmltcG9ydCB1aUNvbmZpZyBmcm9tICdAL2NvbW1vbi91aS1jb25maWcuanMnXG5cbmNvbnN0IGFMaVNES01vZHVsZSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdBbGlDbG91ZC1OaXJ2YW5hUG5zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0b25Mb2FkKCkge1xuXHRcdC8qKlxuXHRcdCAqIOWPr+S7peaPkOWJjeiwg+eUqOivpeaOpeWPo+adpeWKoOmAn+aOiOadg+mhteeahOaLiei1t++8jOmAieiwg+aOpeWPo++8jOWKoOmAn+aIkOWKn+WQjuiwg+eUqCBnZXRMb2dpblRva2VuIOiDveWkn+eri+mprOaLiei1t+aOiOadg+mhtVxuXHRcdCAqIFxuXHRcdCAqIOazqO+8mlxuXHRcdCAqIFx0MeOAgeivpeaOpeWPo+S4uumAieiwg+aOpeWPo++8jOmdnuW/heiwg+aOpeWPo1xuXHRcdCAqIFx0MuOAgeW7uuiuruWcqOWIpOaWreW9k+WJjeeUqOaIt+WxnuS6juacqueZu+W9leeKtuaAgeaXtuS9v+eUqO+8jOW3sueZu+W9leeKtuaAgeeUqOaIt+ivt+S4jeimgeiwg+eUqOivpeaWueazlVxuXHRcdCAqIFx0M+OAgeW7uuiuruWcqOiwg+eUqOaLieWPluaOiOadg+mhteeahOaWueazleWJje+8jOaPkOWJjeS4gOauteaXtumXtOiwg+eUqOmihOWPluWPt+aWueazle+8jOS4remXtOacgOWlveaciTItM+enkueahOe8k+WGsu+8iOWboOS4uuWKoOmAn+aWueazlemcgOimgTF+M3PnmoTml7bpl7Tlj5blvpfkuLTml7blh63or4HvvIlcblx0XHQgKiBcdDTjgIHor7fli7/popHnuYHnmoTlpJrmrKHosIPnlKjjgIHor7fli7/kuI7mi4notbfmjojmnYPnmbvlvZXpobXlkIzml7blkozkuYvlkI7osIPnlKhcblx0XHQgKiBcdDXjgIHkuIDov5thcHDlsLHnmbvlvZXnmoTlnLrmma/kuI3pnIDopoHosIPnlKjmraTmjqXlj6Ncblx0XHQgKi9cblx0XHRhTGlTREtNb2R1bGUuYWNjZWxlcmF0ZUxvZ2luUGFnZSg1MDAwLCByZXN1bHQgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRpZiAoJzYwMDAwMCcgPT0gcmVzdWx0LnJlc3VsdENvZGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCLliqDpgJ/mjojmnYPpobXmi4notbfmiJDlip9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuaOiOadg+mhteWKoOmAn+aLiei1t+Wksei0pe+8jFwiICsgcmVzdWx0Lm1zZyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRmdWxsc2NyZWVuU3R5bGUoKSB7XG5cdFx0XHRjb25zdCBjb25maWcgPSB1aUNvbmZpZy5idWlsZEZ1bGxzY3JlZW4oKTtcblx0XHRcdF9wcmVzZW50TG9naW5Db250cm9sbGVyKGNvbmZpZyk7XG5cdFx0fSxcblx0XHRhbGVydFN0eWxlKCkge1xuXHRcdFx0Y29uc3QgY29uZmlnID0gdWlDb25maWcuYnVpbGRBbGVydCgpO1xuXHRcdFx0X3ByZXNlbnRMb2dpbkNvbnRyb2xsZXIoY29uZmlnKTtcblx0XHR9LFxuXHRcdHNoZWV0U3R5bGUoKSB7XG5cdFx0XHRjb25zdCBjb25maWcgPSB1aUNvbmZpZy5idWlsZFNoZWV0KCk7XG5cdFx0XHRfcHJlc2VudExvZ2luQ29udHJvbGxlcihjb25maWcpO1xuXHRcdH0sXG5cdFx0ZnVsbHNjcmVlbkFuZEltYWdlQmdTdHlsZSgpIHtcblx0XHRcdGNvbnN0IGNvbmZpZyA9IHVpQ29uZmlnLmJ1aWxkRnVsbHNjcmVlbkFuZEltYWdlQmcoKTtcblx0XHRcdF9wcmVzZW50TG9naW5Db250cm9sbGVyKGNvbmZpZyk7XG5cdFx0fSxcblx0XHRhbGVydEFuZEltYWdlQmdTdHlsZSgpIHtcblx0XHRcdGNvbnN0IGNvbmZpZyA9IHVpQ29uZmlnLmJ1aWxkQWxlcnRBbmRJbWFnZUJnKCk7XG5cdFx0XHRfcHJlc2VudExvZ2luQ29udHJvbGxlcihjb25maWcpO1xuXHRcdH0sXG5cdFx0c2hlZXRBbmRHaWZCZ1N0eWxlKCkge1xuXHRcdFx0Y29uc3QgY29uZmlnID0gdWlDb25maWcuYnVpbGRTaGVldEFuZEdpZkJnKCk7XG5cdFx0XHRfcHJlc2VudExvZ2luQ29udHJvbGxlcihjb25maWcpO1xuXHRcdH0sXG5cdFx0ZnVsbHNjcmVlbkFuZFdlYnZpZXdCZ1N0eWxlKCkge1xuXHRcdFx0Y29uc3QgY29uZmlnID0gdWlDb25maWcuYnVpbGRGdWxsc2NyZWVuQW5kV2Vidmlld0JnKCk7XG5cdFx0XHRfcHJlc2VudExvZ2luQ29udHJvbGxlcihjb25maWcpO1xuXHRcdH0sXG5cdFx0ZnVsbHNjcmVlbkFuZFdlZXhWaWV3QmdTdHlsZSgpIHtcblx0XHRcdGNvbnN0IGNvbmZpZyA9IHVpQ29uZmlnLmJ1aWxkRnVsbHNjcmVlbkFuZFdlZXhWaWV3QmcoKTtcblx0XHRcdF9wcmVzZW50TG9naW5Db250cm9sbGVyKGNvbmZpZyk7XG5cdFx0fVxuXHR9LFxufVxuXG5mdW5jdGlvbiBfcHJlc2VudExvZ2luQ29udHJvbGxlcihjb25maWcpIHtcblx0dW5pLnNob3dMb2FkaW5nKHtcblx0XHRtYXNrOiB0cnVlLFxuXHR9KTtcblx0Ly8g6LCD55So6K+l5o6l5Y+j6aaW5YWI5Lya5by56LW35o6I5p2D6aG177yM54K55Ye75o6I5p2D6aG155qE55m75b2V5oyJ6ZKu6I635Y+WVG9rZW5cblx0YUxpU0RLTW9kdWxlLmdldExvZ2luVG9rZW4oXG5cdFx0NTAwMCxcblx0XHRjb25maWcsXG5cdFx0dG9rZW5SZXN1bHQgPT4ge1xuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2tlblJlc3VsdCkpO1xuXHRcdFx0aWYgKFwiNjAwMDAxXCIgPT0gdG9rZW5SZXN1bHQucmVzdWx0Q29kZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuaOiOadg+mhteaLiei1t+aIkOWKn1wiKTtcblx0XHRcdH0gZWxzZSBpZiAoXCI2MDAwMDBcIiA9PSB0b2tlblJlc3VsdC5yZXN1bHRDb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6I635Y+WVG9rZW7miJDlip/vvIzmjqXkuIvmnaXmi7/nnYDnu5Pmnpzph4zpnaLnmoRUb2tlbuWOu+acjeWKoeerr+aNouWPluaJi+acuuWPt+egge+8jFNES+acjeWKoeWIsOatpOe7k+adn1wiKTtcblx0XHRcdFx0Ly/miYvliqjlhbPpl63mjojmnYPpobVcblx0XHRcdFx0YUxpU0RLTW9kdWxlLnF1aXRMb2dpblBhZ2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8v5omL5Yqo5YWz6Zet5o6I5p2D6aG1XG5cdFx0XHRcdGFMaVNES01vZHVsZS5xdWl0TG9naW5QYWdlKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjbGlja1Jlc3VsdCA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjbGlja1Jlc3VsdCkpO1xuXHRcdFx0c3dpdGNoIChjbGlja1Jlc3VsdC5yZXN1bHRDb2RlKSB7XG5cdFx0XHRcdGNhc2UgXCI3MDAwMDBcIjpcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIueUqOaIt+eCueWHu+i/lOWbnuaMiemSrlwiKTtcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRjYXNlIFwiNzAwMDAxXCI6XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLnlKjmiLfliIfmjaLlhbbku5bnmbvlvZXmlrnlvI9cIik7XG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0Y2FzZSBcIjcwMDAwMlwiOlxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi55So5oi354K55Ye755m75b2V5oyJ6ZKuXCIpO1xuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdGNhc2UgXCI3MDAwMDNcIjpcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIueUqOaIt+eCueWHu2NoZWNrQm94XCIpO1xuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdGNhc2UgXCI3MDAwMDRcIjpcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIueUqOaIt+eCueWHu+WNj+iurlwiKTtcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3VzdG9tVWlSZXN1bHQgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCLngrnlh7vkuoboh6rlrprkuYnmjqfku7YgXCIgKyBKU09OLnN0cmluZ2lmeShjdXN0b21VaVJlc3VsdCkpO1xuXHRcdFx0aWYgKFwiY2xvc2VcIiA9PSBjdXN0b21VaVJlc3VsdC53aWRnZXRJZCkge1xuXHRcdFx0XHQvL+eCueWHu+S6huiHquWumuS5ieeahOWFs+mXreaOiOadg+mhteaMiemSrlxuXHRcdFx0XHRhTGlTREtNb2R1bGUucXVpdExvZ2luUGFnZSgpO1xuXHRcdFx0fSBcblx0XHR9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!***************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/common/ui-config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function buildFullscreen() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.screen.resolutionHeight;\n  var bodyWidth = plus.screen.resolutionWidth;\n  var designHeight = bodyHeight - 80;\n  var unit = parseInt(designHeight / 20);\n  var logoY = String(unit * 1 - 10);\n  var sloganY = String(unit * 5);\n  var numberY = String(unit * 6 + 20);\n  var loginBtnY = String(unit * 9);\n  var switchY = String(unit * 12);\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setStatusBarColor: \"#0faeff\",\n        setStatusBarLightColor: \"false\",\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#FFFFFF\",\n          bgColor: \"#0faeff\",\n          returnImgPath: \"static/nav_back.png\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setLogoUi: {\n          imgPath: \"static/mytel_app_launcher.png\",\n          offsetY: logoY },\n\n        setSloganUi: {\n          offsetY: sloganY },\n\n        setNumberUi: {\n          offsetY: numberY },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY },\n\n        setSwitchUi: {\n          textColor: \"#0faeff\",\n          offsetY: switchY },\n\n        setAppPrivacyOne: {\n          title: '用户协议',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyTwo: {\n          title: '隐私政策',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyThree: {\n          title: '服务协议',\n          url: \"https://www.taobao.com\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        preferredStatusBarStyle: \"1\",\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#FFFFFF\",\n          bgColor: \"#0faeff\",\n          returnImgPath: \"static/nav_back.png\",\n          returnImgY: \"10\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setLogoUi: {\n          imgPath: \"static/mytel_app_launcher.png\",\n          y: logoY },\n\n        setSloganUi: {\n          y: sloganY },\n\n        setNumberUi: {\n          textSize: \"28\",\n          y: numberY },\n\n        setLoginBtnUi: {\n          y: loginBtnY },\n\n        setSwitchUi: {\n          textColor: \"#0faeff\",\n          y: switchY },\n\n        setAppPrivacyOne: {\n          title: '用户协议',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyTwo: {\n          title: '隐私政策',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyThree: {\n          title: '服务协议',\n          url: \"https://www.taobao.com\" } } };\n\n\n\n  }\n  return config;\n}\n\nfunction buildAlert() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.display.resolutionHeight;\n  var bodyWidth = plus.display.resolutionWidth;\n  var dialogWidth = parseInt(bodyWidth * 0.8);\n  var dialogHeight = parseInt(dialogWidth / 0.618);\n  var unit = parseInt(dialogHeight / 10);\n  var logoY = String(Math.ceil(unit * 0.3));\n  var sloganY = String(Math.ceil(unit * 2.5));\n  var numberY = String(Math.ceil(unit * 3.2));\n  var loginBtnY = String(Math.ceil(unit * 4.3));\n  var switchY = String(Math.ceil(unit * 6.0));\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setDialogTheme: {\n          width: String(dialogWidth),\n          height: String(dialogHeight) },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#000000\",\n          returnImgPath: \"static/close_black.png\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setLogoUi: {\n          imgPath: \"static/mytel_app_launcher.png\",\n          offsetY: logoY },\n\n        setSloganUi: {\n          offsetY: sloganY },\n\n        setNumberUi: {\n          offsetY: numberY,\n          textSize: \"23\" },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY },\n\n        setSwitchUi: {\n          textColor: \"#0faeff\",\n          offsetY: switchY },\n\n        setAppPrivacyOne: {\n          title: '用户协议',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyTwo: {\n          title: '隐私政策',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyThree: {\n          title: '服务协议',\n          url: \"https://www.taobao.com\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        setDialogTheme: {\n          radius: [\"10\", \"10\", \"10\", \"10\"],\n          x: String((bodyWidth - dialogWidth) * 0.5),\n          y: String((bodyHeight - dialogHeight) * 0.5),\n          width: String(dialogWidth),\n          height: String(dialogHeight) },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#000000\",\n          bgColor: \"#00FFFFFF\",\n          returnImgPath: \"static/close_black.png\",\n          returnImgX: String(dialogWidth - 24 - 15),\n          returnImgY: \"5\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setLogoUi: {\n          imgPath: \"static/mytel_app_launcher.png\",\n          y: logoY },\n\n        setSloganUi: {\n          y: sloganY },\n\n        setNumberUi: {\n          y: numberY,\n          textSize: \"24\" },\n\n        setLoginBtnUi: {\n          y: loginBtnY },\n\n        setSwitchUi: {\n          textColor: \"#0faeff\",\n          y: switchY },\n\n        setAppPrivacyOne: {\n          title: '用户协议',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyTwo: {\n          title: '隐私政策',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyThree: {\n          title: '服务协议',\n          url: \"https://www.taobao.com\" } } };\n\n\n\n  }\n  return config;\n}\n\nfunction buildSheet() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.display.resolutionHeight;\n  var bodyWidth = plus.display.resolutionWidth;\n  var dialogWidth = bodyWidth;\n  var dialogHeight = 460;\n  var unit = parseInt(dialogHeight / 10);\n  var logoY = String(Math.ceil(unit * 0.3));\n  var sloganY = String(Math.ceil(unit * 2.5));\n  var numberY = String(Math.ceil(unit * 3.2));\n  var loginBtnY = String(Math.ceil(unit * 4.3));\n  var switchY = String(Math.ceil(unit * 6.0));\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setDialogTheme: {\n          width: String(dialogWidth),\n          height: String(dialogHeight),\n          isBottom: \"true\" },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#000000\",\n          returnImgPath: \"static/close_black.png\",\n          returnImgX: String(dialogWidth - 24 - 15),\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setLogoUi: {\n          imgPath: \"static/mytel_app_launcher.png\",\n          offsetY: logoY },\n\n        setSloganUi: {\n          offsetY: sloganY },\n\n        setNumberUi: {\n          offsetY: numberY,\n          textSize: \"23\" },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY },\n\n        setSwitchUi: {\n          textColor: \"#0faeff\",\n          offsetY: switchY },\n\n        setAppPrivacyOne: {\n          title: '用户协议',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyTwo: {\n          title: '隐私政策',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyThree: {\n          title: '服务协议',\n          url: \"https://www.taobao.com\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        setDialogTheme: {\n          radius: [\"10\", \"0\", \"0\", \"10\"],\n          x: String((bodyWidth - dialogWidth) * 0.5),\n          y: String(bodyHeight - dialogHeight),\n          width: String(dialogWidth),\n          height: String(dialogHeight) },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#000000\",\n          bgColor: \"#00FFFFFF\",\n          returnImgPath: \"static/close_black.png\",\n          returnImgX: String(dialogWidth - 24 - 15),\n          returnImgY: \"5\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setLogoUi: {\n          imgPath: \"static/mytel_app_launcher.png\",\n          y: logoY },\n\n        setSloganUi: {\n          y: sloganY },\n\n        setNumberUi: {\n          y: numberY,\n          textSize: \"24\" },\n\n        setLoginBtnUi: {\n          y: loginBtnY },\n\n        setSwitchUi: {\n          textColor: \"#0faeff\",\n          y: switchY },\n\n        setAppPrivacyOne: {\n          title: '用户协议',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyTwo: {\n          title: '隐私政策',\n          url: \"https://www.taobao.com\" },\n\n        setAppPrivacyThree: {\n          title: '服务协议',\n          url: \"https://www.taobao.com\" } } };\n\n\n\n  }\n  return config;\n}\n\nfunction buildFullscreenAndImageBg() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.screen.resolutionHeight;\n  var bodyWidth = plus.screen.resolutionWidth;\n  var designHeight = bodyHeight - 80;\n  var unit = parseInt(designHeight / 20);\n  var numberY = String(unit * 7);\n  var sloganY = String(unit * 9);\n  var loginBtnY = String(unit * 12);\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setStatusBarColor: \"#00FFFFFF\",\n        setStatusBarUIFlag: \"1\",\n        setStatusBarLightColor: \"false\",\n        setNavHidden: \"true\",\n        setLogoHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setBackgroundUi: {\n          backgroundColor: \"#081223\",\n          imagePath: \"static/web_background_1.jpeg\" },\n\n        setNumberUi: {\n          offsetY: numberY,\n          textColor: \"#FFFFFF\" },\n\n        setSloganUi: {\n          text: '阿里通信提供认证服务',\n          textColor: '#FFFFFF',\n          textSize: \"16\",\n          offsetY: String(unit * 9) },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY } },\n\n\n      widgets: {\n        widget1: {\n          widgetId: \"close\",\n          type: \"ImageView\",\n          left: \"25\",\n          top: \"0\",\n          width: \"24\",\n          height: \"24\",\n          backgroundImgPath: \"static/close_white.png\",\n          locate: \"0\" },\n\n        widget2: {\n          widgetId: \"line\",\n          type: \"TextView\",\n          textContent: \"-其他方式登录-\",\n          textSize: \"13\",\n          textColor: \"#FFFFFF\",\n          left: \"10\",\n          top: String(unit * 15),\n          width: String(bodyWidth - 20),\n          height: \"20\",\n          locate: \"0\" },\n\n        widget3: {\n          widgetId: \"alipay\",\n          type: \"ImageView\",\n          left: String(bodyWidth * 0.5 - 20 - 50),\n          top: String(unit * 16),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/alipay_icon.png\",\n          locate: \"0\" },\n\n        widget4: {\n          widgetId: \"taobao\",\n          type: \"ImageView\",\n          left: String(bodyWidth * 0.5 + 20),\n          top: String(unit * 16),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/taobao_icon.png\",\n          locate: \"0\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        preferredStatusBarStyle: \"1\",\n        setNavHidden: \"true\",\n        setLogoHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setBackgroundUi: {\n          backgroundColor: \"#081223\",\n          imagePath: \"static/web_background_1.jpeg\" },\n\n        setNumberUi: {\n          y: numberY,\n          textColor: \"#FFFFFF\" },\n\n        setSloganUi: {\n          text: \"阿里通信提供认证服务\",\n          textColor: \"#FFFFFF\",\n          textSize: \"17\",\n          y: sloganY },\n\n        setLoginBtnUi: {\n          y: loginBtnY } },\n\n\n      widgets: [{\n        widgetId: \"close\",\n        type: \"Button\",\n        x: \"25\",\n        y: \"64\", //注意刘海屏\n        width: \"24\",\n        height: \"24\",\n        backgroundImage: \"static/close_white.png\" },\n      {\n        widgetId: \"line\",\n        type: \"Label\",\n        alignment: \"1\",\n        textContent: \"-其他方式登录-\",\n        textSize: \"13\",\n        textColor: \"#FFFFFF\",\n        x: \"10\",\n        y: String(unit * 15),\n        width: String(bodyWidth - 20),\n        height: \"20\" },\n      {\n        widgetId: \"alipay\",\n        type: \"Button\",\n        x: String(bodyWidth * 0.5 - 20 - 50),\n        y: String(unit * 16),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/alipay_icon.png\" },\n      {\n        widgetId: \"taobao\",\n        type: \"Button\",\n        x: String(bodyWidth * 0.5 + 20),\n        y: String(unit * 16),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/taobao_icon.png\" }] };\n\n\n  }\n  return config;\n}\n\nfunction buildAlertAndImageBg() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.display.resolutionHeight;\n  var bodyWidth = plus.display.resolutionWidth;\n  var dialogWidth = parseInt(bodyWidth * 0.8);\n  var dialogHeight = parseInt(dialogWidth / 0.618);\n  var unit = parseInt(dialogHeight / 10);\n  var numberY = String(Math.ceil(unit * 2.0));\n  var loginBtnY = String(Math.ceil(unit * 4.3));\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setLogoHidden: \"true\",\n        setSloganHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setDialogTheme: {\n          width: String(dialogWidth),\n          height: String(dialogHeight) },\n\n        setBackgroundUi: {\n          backgroundColor: \"#0c141E\",\n          imagePath: \"static/web_background_2.jpeg\" },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#FFFFFF\",\n          returnImgPath: \"static/close_white.png\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setNumberUi: {\n          offsetY: numberY,\n          textColor: \"#FFFFFF\",\n          textSize: \"23\" },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY } },\n\n\n      widgets: {\n        widget1: {\n          widgetId: \"line\",\n          type: \"TextView\",\n          textContent: \"-其他方式登录-\",\n          textSize: \"13\",\n          textColor: \"#FFFFFF\",\n          left: \"10\",\n          top: String(Math.ceil(unit * 5.8)),\n          width: String(dialogWidth - 20),\n          height: \"20\",\n          locate: \"0\" },\n\n        widget2: {\n          widgetId: \"alipay\",\n          type: \"ImageView\",\n          left: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),\n          top: String(Math.ceil(unit * 6.3)),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/alipay_icon.png\",\n          locate: \"0\" },\n\n        widget3: {\n          widgetId: \"taobao\",\n          type: \"ImageView\",\n          left: String(Math.ceil(dialogWidth * 0.5 + 20)),\n          top: String(Math.ceil(unit * 6.3)),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/taobao_icon.png\",\n          locate: \"0\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        setLogoHidden: \"true\",\n        setSloganHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setDialogTheme: {\n          radius: [\"10\", \"10\", \"10\", \"10\"],\n          x: String((bodyWidth - dialogWidth) * 0.5),\n          y: String((bodyHeight - dialogHeight) * 0.5),\n          width: String(dialogWidth),\n          height: String(dialogHeight) },\n\n        setBackgroundUi: {\n          backgroundColor: \"#0c141E\",\n          imagePath: \"static/web_background_2.jpeg\" },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#FFFFFF\",\n          bgColor: \"#00FFFFFF\",\n          returnImgPath: \"static/close_white.png\",\n          returnImgX: String(dialogWidth - 24 - 15),\n          returnImgY: \"5\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setNumberUi: {\n          y: numberY,\n          textColor: \"#FFFFFF\",\n          textSize: \"24\" },\n\n        setLoginBtnUi: {\n          y: loginBtnY } },\n\n\n      widgets: [{\n        widgetId: \"line\",\n        type: \"Label\",\n        alignment: \"1\",\n        textContent: \"-其他方式登录-\",\n        textSize: \"13\",\n        textColor: \"#FFFFFF\",\n        x: \"10\",\n        y: String(Math.ceil(unit * 5.8)),\n        width: String(dialogWidth - 20),\n        height: \"20\" },\n      {\n        widgetId: \"alipay\",\n        type: \"Button\",\n        x: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),\n        y: String(Math.ceil(unit * 6.3)),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/alipay_icon.png\" },\n      {\n        widgetId: \"taobao\",\n        type: \"Button\",\n        x: String(Math.ceil(dialogWidth * 0.5 + 20)),\n        y: String(Math.ceil(unit * 6.3)),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/taobao_icon.png\" }] };\n\n\n  }\n  return config;\n}\n\nfunction buildSheetAndGifBg() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.display.resolutionHeight;\n  var bodyWidth = plus.display.resolutionWidth;\n  var dialogWidth = bodyWidth;\n  var dialogHeight = \"460\";\n  var unit = parseInt(dialogHeight / 10);\n  var numberY = String(Math.ceil(unit * 1.5));\n  var loginBtnY = String(Math.ceil(unit * 3.5));\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setLogoHidden: \"true\",\n        setSloganHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setBackgroundUi: {\n          backgroundColor: \"#256581\",\n          gifPath: \"static/background_gif.gif\" },\n\n        setDialogTheme: {\n          width: String(dialogWidth),\n          height: String(dialogHeight),\n          isBottom: \"true\" },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#FFFFFF\",\n          returnImgPath: \"static/close_white.png\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setNumberUi: {\n          offsetY: numberY,\n          textColor: \"#FFFFFF\",\n          textSize: \"24\" },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY } },\n\n\n      widgets: {\n        widget1: {\n          widgetId: \"line\",\n          type: \"TextView\",\n          textContent: \"-其他方式登录-\",\n          textSize: \"13\",\n          textColor: \"#FFFFFF\",\n          left: \"10\",\n          top: String(Math.ceil(unit * 5.2)),\n          width: String(dialogWidth - 20),\n          height: \"20\",\n          locate: \"0\" },\n\n        widget2: {\n          widgetId: \"alipay\",\n          type: \"ImageView\",\n          left: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),\n          top: String(Math.ceil(unit * 5.8)),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/alipay_icon.png\",\n          locate: \"0\" },\n\n        widget3: {\n          widgetId: \"taobao\",\n          type: \"ImageView\",\n          left: String(Math.ceil(dialogWidth * 0.5 + 20)),\n          top: String(Math.ceil(unit * 5.8)),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/taobao_icon.png\",\n          locate: \"0\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        setLogoHidden: \"true\",\n        setSloganHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setDialogTheme: {\n          radius: [\"10\", \"0\", \"0\", \"10\"],\n          x: String((bodyWidth - dialogWidth) * 0.5),\n          y: String(bodyHeight - dialogHeight),\n          width: String(dialogWidth),\n          height: String(dialogHeight) },\n\n        setBackgroundUi: {\n          backgroundColor: \"#256581\",\n          gifPath: \"static/background_gif.gif\" },\n\n        setNavUi: {\n          text: \"一键登录\",\n          textColor: \"#FFFFFF\",\n          bgColor: \"#00FFFFFF\",\n          returnImgPath: \"static/close_white.png\",\n          returnImgX: String(dialogWidth - 24 - 15),\n          returnImgY: \"5\",\n          returnImgWidth: \"24\",\n          returnImgHeight: \"24\" },\n\n        setNumberUi: {\n          y: numberY,\n          textColor: \"#FFFFFF\",\n          textSize: \"23\" },\n\n        setLoginBtnUi: {\n          y: loginBtnY } },\n\n\n      widgets: [{\n        widgetId: \"line\",\n        type: \"Label\",\n        alignment: \"1\",\n        textContent: \"-其他方式登录-\",\n        textSize: \"13\",\n        textColor: \"#FFFFFF\",\n        x: \"10\",\n        y: String(Math.ceil(unit * 5.2)),\n        width: String(dialogWidth - 20),\n        height: \"20\" },\n      {\n        widgetId: \"alipay\",\n        type: \"Button\",\n        x: String(Math.ceil(dialogWidth * 0.5 - 20 - 50)),\n        y: String(Math.ceil(unit * 5.8)),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/alipay_icon.png\" },\n      {\n        widgetId: \"taobao\",\n        type: \"Button\",\n        x: String(Math.ceil(dialogWidth * 0.5 + 20)),\n        y: String(Math.ceil(unit * 5.8)),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/taobao_icon.png\" }] };\n\n\n  }\n  return config;\n}\n\nfunction buildFullscreenAndWebviewBg() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.screen.resolutionHeight;\n  var bodyWidth = plus.screen.resolutionWidth;\n  var designHeight = bodyHeight - 80;\n  var unit = parseInt(designHeight / 20);\n  var numberY = String(unit * 7);\n  var sloganY = String(unit * 9);\n  var loginBtnY = String(unit * 12);\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setStatusBarColor: \"#00FFFFFF\",\n        setStatusBarUIFlag: \"1\",\n        setStatusBarLightColor: \"false\",\n        setNavHidden: \"true\",\n        setLogoHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setBackgroundUi: {\n          webviewPath: \"static/background_web.html\",\n          webviewJavaScriptEnabled: \"true\" },\n\n        setNumberUi: {\n          offsetY: numberY,\n          textColor: \"#FFFFFF\" },\n\n        setSloganUi: {\n          text: '阿里通信提供认证服务',\n          textColor: '#FFFFFF',\n          textSize: \"16\",\n          offsetY: String(unit * 9) },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY } },\n\n\n      widgets: {\n        widget1: {\n          widgetId: \"close\",\n          type: \"ImageView\",\n          left: \"25\",\n          top: \"0\",\n          width: \"24\",\n          height: \"24\",\n          backgroundImgPath: \"static/close_white.png\",\n          locate: \"0\" },\n\n        widget2: {\n          widgetId: \"line\",\n          type: \"TextView\",\n          textContent: \"-其他方式登录-\",\n          textSize: \"13\",\n          textColor: \"#FFFFFF\",\n          left: \"10\",\n          top: String(unit * 15),\n          width: String(bodyWidth - 20),\n          height: \"20\",\n          locate: \"0\" },\n\n        widget3: {\n          widgetId: \"alipay\",\n          type: \"ImageView\",\n          left: String(bodyWidth * 0.5 - 20 - 50),\n          top: String(unit * 16),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/alipay_icon.png\",\n          locate: \"0\" },\n\n        widget4: {\n          widgetId: \"taobao\",\n          type: \"ImageView\",\n          left: String(bodyWidth * 0.5 + 20),\n          top: String(unit * 16),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/taobao_icon.png\",\n          locate: \"0\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        preferredStatusBarStyle: \"1\",\n        setNavHidden: \"true\",\n        setLogoHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setBackgroundUi: {\n          webviewPath: \"static/background_web.html\" },\n\n        setNumberUi: {\n          y: numberY,\n          textColor: \"#FFFFFF\" },\n\n        setSloganUi: {\n          text: \"阿里通信提供认证服务\",\n          textColor: \"#FFFFFF\",\n          textSize: \"17\",\n          y: String(unit * 9) },\n\n        setLoginBtnUi: {\n          y: loginBtnY } },\n\n\n      widgets: [{\n        widgetId: \"close\",\n        type: \"Button\",\n        x: \"25\",\n        y: \"64\", //注意刘海屏\n        width: \"24\",\n        height: \"24\",\n        backgroundImage: \"static/close_white.png\" },\n      {\n        widgetId: \"line\",\n        type: \"Label\",\n        alignment: \"1\",\n        textContent: \"-其他方式登录-\",\n        textSize: \"13\",\n        textColor: \"#FFFFFF\",\n        x: \"10\",\n        y: String(unit * 15),\n        width: String(bodyWidth - 20),\n        height: \"20\" },\n      {\n        widgetId: \"alipay\",\n        type: \"Button\",\n        x: String(bodyWidth * 0.5 - 20 - 50),\n        y: String(unit * 16),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/alipay_icon.png\" },\n      {\n        widgetId: \"taobao\",\n        type: \"Button\",\n        x: String(bodyWidth * 0.5 + 20),\n        y: String(unit * 16),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/taobao_icon.png\" }] };\n\n\n  }\n  return config;\n}\n\nfunction buildFullscreenAndWeexViewBg() {\n  var platform = uni.getSystemInfoSync().platform;\n\n  var config = {};\n\n  var bodyHeight = plus.screen.resolutionHeight;\n  var bodyWidth = plus.screen.resolutionWidth;\n  var designHeight = bodyHeight - 80;\n  var unit = parseInt(designHeight / 20);\n  var numberY = String(unit * 7);\n  var sloganY = String(unit * 9);\n  var loginBtnY = String(unit * 12);\n\n  if (platform == 'android') {\n    config = {\n      uiConfig: {\n        setStatusBarColor: \"#00FFFFFF\",\n        setStatusBarUIFlag: \"1\",\n        setStatusBarLightColor: \"false\",\n        setNavHidden: \"true\",\n        setLogoHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setBackgroundUi: {\n          backgroundColor: \"#1E5372\",\n          weexJsPath: \"static/background_weex.js\" },\n\n        setNumberUi: {\n          textColor: \"#FFFFFF\",\n          offsetY: numberY },\n\n        setSloganUi: {\n          text: '阿里通信提供认证服务',\n          textColor: '#FFFFFF',\n          textSize: \"16\",\n          offsetY: String(unit * 9) },\n\n        setLoginBtnUi: {\n          offsetY: loginBtnY } },\n\n\n      widgets: {\n        widget1: {\n          widgetId: \"close\",\n          type: \"ImageView\",\n          left: \"25\",\n          top: \"0\",\n          width: \"24\",\n          height: \"24\",\n          backgroundImgPath: \"static/close_white.png\",\n          locate: \"0\" },\n\n        widget2: {\n          widgetId: \"line\",\n          type: \"TextView\",\n          textContent: \"-其他方式登录-\",\n          textSize: \"13\",\n          textColor: \"#FFFFFF\",\n          left: \"10\",\n          top: String(unit * 15),\n          width: String(bodyWidth - 20),\n          height: \"20\",\n          locate: \"0\" },\n\n        widget3: {\n          widgetId: \"alipay\",\n          type: \"ImageView\",\n          left: String(bodyWidth * 0.5 - 20 - 50),\n          top: String(unit * 16),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/alipay_icon.png\",\n          locate: \"0\" },\n\n        widget4: {\n          widgetId: \"taobao\",\n          type: \"ImageView\",\n          left: String(bodyWidth * 0.5 + 20),\n          top: String(unit * 16),\n          width: \"50\",\n          height: \"50\",\n          backgroundImgPath: \"static/taobao_icon.png\",\n          locate: \"0\" } } };\n\n\n\n  } else if (platform == 'ios') {\n    config = {\n      uiConfig: {\n        preferredStatusBarStyle: \"1\",\n        setNavHidden: \"true\",\n        setLogoHidden: \"true\",\n        setSwitchHidden: \"true\",\n        setBackgroundUi: {\n          backgroundColor: \"#1E5372\",\n          weexJsPath: \"static/background_weex.js\" },\n\n        setNumberUi: {\n          y: numberY,\n          textColor: \"#FFFFFF\" },\n\n        setSloganUi: {\n          text: \"阿里通信提供认证服务\",\n          textColor: \"#FFFFFF\",\n          textSize: \"17\",\n          y: String(unit * 9) },\n\n        setLoginBtnUi: {\n          y: loginBtnY } },\n\n\n      widgets: [{\n        widgetId: \"close\",\n        type: \"Button\",\n        x: \"25\",\n        y: \"64\", //注意刘海屏\n        width: \"24\",\n        height: \"24\",\n        backgroundImage: \"static/close_white.png\" },\n      {\n        widgetId: \"line\",\n        type: \"Label\",\n        alignment: \"1\",\n        textContent: \"-其他方式登录-\",\n        textSize: \"13\",\n        textColor: \"#FFFFFF\",\n        x: \"10\",\n        y: String(unit * 15),\n        width: String(bodyWidth - 20),\n        height: \"20\" },\n      {\n        widgetId: \"alipay\",\n        type: \"Button\",\n        x: String(bodyWidth * 0.5 - 20 - 50),\n        y: String(unit * 16),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/alipay_icon.png\" },\n      {\n        widgetId: \"taobao\",\n        type: \"Button\",\n        x: String(bodyWidth * 0.5 + 20),\n        y: String(unit * 16),\n        width: \"50\",\n        height: \"50\",\n        backgroundImage: \"static/taobao_icon.png\" }] };\n\n\n  }\n  return config;\n}\n\nmodule.exports = {\n  buildFullscreen: buildFullscreen,\n  buildAlert: buildAlert,\n  buildSheet: buildSheet,\n  buildFullscreenAndImageBg: buildFullscreenAndImageBg,\n  buildAlertAndImageBg: buildAlertAndImageBg,\n  buildSheetAndGifBg: buildSheetAndGifBg,\n  buildFullscreenAndWebviewBg: buildFullscreenAndWebviewBg,\n  buildFullscreenAndWeexViewBg: buildFullscreenAndWeexViewBg };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3VpLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJidWlsZEZ1bGxzY3JlZW4iLCJwbGF0Zm9ybSIsInVuaSIsImdldFN5c3RlbUluZm9TeW5jIiwiY29uZmlnIiwiYm9keUhlaWdodCIsInBsdXMiLCJzY3JlZW4iLCJyZXNvbHV0aW9uSGVpZ2h0IiwiYm9keVdpZHRoIiwicmVzb2x1dGlvbldpZHRoIiwiZGVzaWduSGVpZ2h0IiwidW5pdCIsInBhcnNlSW50IiwibG9nb1kiLCJTdHJpbmciLCJzbG9nYW5ZIiwibnVtYmVyWSIsImxvZ2luQnRuWSIsInN3aXRjaFkiLCJ1aUNvbmZpZyIsInNldFN0YXR1c0JhckNvbG9yIiwic2V0U3RhdHVzQmFyTGlnaHRDb2xvciIsInNldE5hdlVpIiwidGV4dCIsInRleHRDb2xvciIsImJnQ29sb3IiLCJyZXR1cm5JbWdQYXRoIiwicmV0dXJuSW1nV2lkdGgiLCJyZXR1cm5JbWdIZWlnaHQiLCJzZXRMb2dvVWkiLCJpbWdQYXRoIiwib2Zmc2V0WSIsInNldFNsb2dhblVpIiwic2V0TnVtYmVyVWkiLCJzZXRMb2dpbkJ0blVpIiwic2V0U3dpdGNoVWkiLCJzZXRBcHBQcml2YWN5T25lIiwidGl0bGUiLCJ1cmwiLCJzZXRBcHBQcml2YWN5VHdvIiwic2V0QXBwUHJpdmFjeVRocmVlIiwicHJlZmVycmVkU3RhdHVzQmFyU3R5bGUiLCJyZXR1cm5JbWdZIiwieSIsInRleHRTaXplIiwiYnVpbGRBbGVydCIsImRpc3BsYXkiLCJkaWFsb2dXaWR0aCIsImRpYWxvZ0hlaWdodCIsIk1hdGgiLCJjZWlsIiwic2V0RGlhbG9nVGhlbWUiLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsIngiLCJyZXR1cm5JbWdYIiwiYnVpbGRTaGVldCIsImlzQm90dG9tIiwiYnVpbGRGdWxsc2NyZWVuQW5kSW1hZ2VCZyIsInNldFN0YXR1c0JhclVJRmxhZyIsInNldE5hdkhpZGRlbiIsInNldExvZ29IaWRkZW4iLCJzZXRTd2l0Y2hIaWRkZW4iLCJzZXRCYWNrZ3JvdW5kVWkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWFnZVBhdGgiLCJ3aWRnZXRzIiwid2lkZ2V0MSIsIndpZGdldElkIiwidHlwZSIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kSW1nUGF0aCIsImxvY2F0ZSIsIndpZGdldDIiLCJ0ZXh0Q29udGVudCIsIndpZGdldDMiLCJ3aWRnZXQ0IiwiYmFja2dyb3VuZEltYWdlIiwiYWxpZ25tZW50IiwiYnVpbGRBbGVydEFuZEltYWdlQmciLCJzZXRTbG9nYW5IaWRkZW4iLCJidWlsZFNoZWV0QW5kR2lmQmciLCJnaWZQYXRoIiwiYnVpbGRGdWxsc2NyZWVuQW5kV2Vidmlld0JnIiwid2Vidmlld1BhdGgiLCJ3ZWJ2aWV3SmF2YVNjcmlwdEVuYWJsZWQiLCJidWlsZEZ1bGxzY3JlZW5BbmRXZWV4Vmlld0JnIiwid2VleEpzUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGVBQVQsR0FBMkI7QUFDMUIsTUFBSUMsUUFBUSxHQUFHQyxHQUFHLENBQUNDLGlCQUFKLEdBQXdCRixRQUF2Qzs7QUFFQSxNQUFJRyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxNQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxDQUFZQyxnQkFBL0I7QUFDQSxNQUFNQyxTQUFTLEdBQUdILElBQUksQ0FBQ0MsTUFBTCxDQUFZRyxlQUE5QjtBQUNBLE1BQU1DLFlBQVksR0FBR04sVUFBVSxHQUFHLEVBQWxDO0FBQ0EsTUFBTU8sSUFBSSxHQUFHQyxRQUFRLENBQUNGLFlBQVksR0FBRyxFQUFoQixDQUFyQjtBQUNBLE1BQU1HLEtBQUssR0FBR0MsTUFBTSxDQUFDSCxJQUFJLEdBQUcsQ0FBUCxHQUFXLEVBQVosQ0FBcEI7QUFDQSxNQUFNSSxPQUFPLEdBQUdELE1BQU0sQ0FBQ0gsSUFBSSxHQUFHLENBQVIsQ0FBdEI7QUFDQSxNQUFNSyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0gsSUFBSSxHQUFHLENBQVAsR0FB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QUFFLElBTk47QUFPRjBCLHVCQUFlLEVBQUUsd0JBUGYsRUEzQk0sQ0F4QkQsRUFBVDs7O0FBNkRBO0FBQ0QsU0FBTzVFLE1BQVA7QUFDQTs7QUFFRHVGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQjVGLGlCQUFlLEVBQUVBLGVBREQ7QUFFaEI4QyxZQUFVLEVBQUVBLFVBRkk7QUFHaEJZLFlBQVUsRUFBRUEsVUFISTtBQUloQkUsMkJBQXlCLEVBQUVBLHlCQUpYO0FBS2hCc0Isc0JBQW9CLEVBQUVBLG9CQUxOO0FBTWhCRSxvQkFBa0IsRUFBRUEsa0JBTko7QUFPaEJFLDZCQUEyQixFQUFFQSwyQkFQYjtBQVFoQkcsOEJBQTRCLEVBQUVBLDRCQVJkLEVBQWpCIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnVpbGRGdWxsc2NyZWVuKCkge1xyXG5cdGxldCBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xyXG5cclxuXHRsZXQgY29uZmlnID0ge307XHJcblxyXG5cdGNvbnN0IGJvZHlIZWlnaHQgPSBwbHVzLnNjcmVlbi5yZXNvbHV0aW9uSGVpZ2h0O1xyXG5cdGNvbnN0IGJvZHlXaWR0aCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25XaWR0aDtcclxuXHRjb25zdCBkZXNpZ25IZWlnaHQgPSBib2R5SGVpZ2h0IC0gODA7XHJcblx0Y29uc3QgdW5pdCA9IHBhcnNlSW50KGRlc2lnbkhlaWdodCAvIDIwKTtcclxuXHRjb25zdCBsb2dvWSA9IFN0cmluZyh1bml0ICogMSAtIDEwKTtcclxuXHRjb25zdCBzbG9nYW5ZID0gU3RyaW5nKHVuaXQgKiA1KTtcclxuXHRjb25zdCBudW1iZXJZID0gU3RyaW5nKHVuaXQgKiA2ICsgMjApO1xyXG5cdGNvbnN0IGxvZ2luQnRuWSA9IFN0cmluZyh1bml0ICogOSk7XHJcblx0Y29uc3Qgc3dpdGNoWSA9IFN0cmluZyh1bml0ICogMTIpO1xyXG5cclxuXHRpZiAocGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRjb25maWcgPSB7XHJcblx0XHRcdHVpQ29uZmlnOiB7XHJcblx0XHRcdFx0c2V0U3RhdHVzQmFyQ29sb3I6IFwiIzBmYWVmZlwiLFxyXG5cdFx0XHRcdHNldFN0YXR1c0JhckxpZ2h0Q29sb3I6IFwiZmFsc2VcIixcclxuXHRcdFx0XHRzZXROYXZVaToge1xyXG5cdFx0XHRcdFx0dGV4dDogXCLkuIDplK7nmbvlvZVcIixcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ0NvbG9yOiBcIiMwZmFlZmZcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1BhdGg6IFwic3RhdGljL25hdl9iYWNrLnBuZ1wiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nV2lkdGg6IFwiMjRcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ0hlaWdodDogXCIyNFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9nb1VpOiB7XHJcblx0XHRcdFx0XHRpbWdQYXRoOiBcInN0YXRpYy9teXRlbF9hcHBfbGF1bmNoZXIucG5nXCIsXHJcblx0XHRcdFx0XHRvZmZzZXRZOiBsb2dvWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldFNsb2dhblVpOiB7XHJcblx0XHRcdFx0XHRvZmZzZXRZOiBzbG9nYW5ZLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TnVtYmVyVWk6IHtcclxuXHRcdFx0XHRcdG9mZnNldFk6IG51bWJlclksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRMb2dpbkJ0blVpOiB7XHJcblx0XHRcdFx0XHRvZmZzZXRZOiBsb2dpbkJ0blksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTd2l0Y2hVaToge1xyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiMwZmFlZmZcIixcclxuXHRcdFx0XHRcdG9mZnNldFk6IHN3aXRjaFksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5T25lOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+eUqOaIt+WNj+iuricsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5VHdvOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+makOengeaUv+etlicsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5VGhyZWU6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5pyN5Yqh5Y2P6K6uJyxcclxuXHRcdFx0XHRcdHVybDogXCJodHRwczovL3d3dy50YW9iYW8uY29tXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0gZWxzZSBpZiAocGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdGNvbmZpZyA9IHtcclxuXHRcdFx0dWlDb25maWc6IHtcclxuXHRcdFx0XHRwcmVmZXJyZWRTdGF0dXNCYXJTdHlsZTogXCIxXCIsXHJcblx0XHRcdFx0c2V0TmF2VWk6IHtcclxuXHRcdFx0XHRcdHRleHQ6IFwi5LiA6ZSu55m75b2VXCIsXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdDb2xvcjogXCIjMGZhZWZmXCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdQYXRoOiBcInN0YXRpYy9uYXZfYmFjay5wbmdcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1k6IFwiMTBcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1dpZHRoOiBcIjI0XCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdIZWlnaHQ6IFwiMjRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ29VaToge1xyXG5cdFx0XHRcdFx0aW1nUGF0aDogXCJzdGF0aWMvbXl0ZWxfYXBwX2xhdW5jaGVyLnBuZ1wiLFxyXG5cdFx0XHRcdFx0eTogbG9nb1ksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTbG9nYW5VaToge1xyXG5cdFx0XHRcdFx0eTogc2xvZ2FuWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldE51bWJlclVpOiB7XHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIyOFwiLFxyXG5cdFx0XHRcdFx0eTogbnVtYmVyWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ2luQnRuVWk6IHtcclxuXHRcdFx0XHRcdHk6IGxvZ2luQnRuWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldFN3aXRjaFVpOiB7XHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiIzBmYWVmZlwiLFxyXG5cdFx0XHRcdFx0eTogc3dpdGNoWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldEFwcFByaXZhY3lPbmU6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn55So5oi35Y2P6K6uJyxcclxuXHRcdFx0XHRcdHVybDogXCJodHRwczovL3d3dy50YW9iYW8uY29tXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldEFwcFByaXZhY3lUd286IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6ZqQ56eB5pS/562WJyxcclxuXHRcdFx0XHRcdHVybDogXCJodHRwczovL3d3dy50YW9iYW8uY29tXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldEFwcFByaXZhY3lUaHJlZToge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmnI3liqHljY/orq4nLFxyXG5cdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vd3d3LnRhb2Jhby5jb21cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQWxlcnQoKSB7XHJcblx0bGV0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XHJcblxyXG5cdGxldCBjb25maWcgPSB7fTtcclxuXHJcblx0Y29uc3QgYm9keUhlaWdodCA9IHBsdXMuZGlzcGxheS5yZXNvbHV0aW9uSGVpZ2h0O1xyXG5cdGNvbnN0IGJvZHlXaWR0aCA9IHBsdXMuZGlzcGxheS5yZXNvbHV0aW9uV2lkdGg7XHJcblx0Y29uc3QgZGlhbG9nV2lkdGggPSBwYXJzZUludChib2R5V2lkdGggKiAwLjgpO1xyXG5cdGNvbnN0IGRpYWxvZ0hlaWdodCA9IHBhcnNlSW50KGRpYWxvZ1dpZHRoIC8gMC42MTgpO1xyXG5cdGNvbnN0IHVuaXQgPSBwYXJzZUludChkaWFsb2dIZWlnaHQgLyAxMCk7XHJcblx0Y29uc3QgbG9nb1kgPSBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiAwLjMpKTtcclxuXHRjb25zdCBzbG9nYW5ZID0gU3RyaW5nKE1hdGguY2VpbCh1bml0ICogMi41KSk7XHJcblx0Y29uc3QgbnVtYmVyWSA9IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDMuMikpO1xyXG5cdGNvbnN0IGxvZ2luQnRuWSA9IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDQuMykpO1xyXG5cdGNvbnN0IHN3aXRjaFkgPSBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiA2LjApKTtcclxuXHJcblx0aWYgKHBsYXRmb3JtID09ICdhbmRyb2lkJykge1xyXG5cdFx0Y29uZmlnID0ge1xyXG5cdFx0XHR1aUNvbmZpZzoge1xyXG5cdFx0XHRcdHNldERpYWxvZ1RoZW1lOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogU3RyaW5nKGRpYWxvZ1dpZHRoKSxcclxuXHRcdFx0XHRcdGhlaWdodDogU3RyaW5nKGRpYWxvZ0hlaWdodCksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROYXZVaToge1xyXG5cdFx0XHRcdFx0dGV4dDogXCLkuIDplK7nmbvlvZVcIixcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjMDAwMDAwXCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdQYXRoOiBcInN0YXRpYy9jbG9zZV9ibGFjay5wbmdcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1dpZHRoOiBcIjI0XCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdIZWlnaHQ6IFwiMjRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ29VaToge1xyXG5cdFx0XHRcdFx0aW1nUGF0aDogXCJzdGF0aWMvbXl0ZWxfYXBwX2xhdW5jaGVyLnBuZ1wiLFxyXG5cdFx0XHRcdFx0b2Zmc2V0WTogbG9nb1ksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTbG9nYW5VaToge1xyXG5cdFx0XHRcdFx0b2Zmc2V0WTogc2xvZ2FuWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldE51bWJlclVpOiB7XHJcblx0XHRcdFx0XHRvZmZzZXRZOiBudW1iZXJZLFxyXG5cdFx0XHRcdFx0dGV4dFNpemU6IFwiMjNcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9naW5CdG5VaToge1xyXG5cdFx0XHRcdFx0b2Zmc2V0WTogbG9naW5CdG5ZLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0U3dpdGNoVWk6IHtcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjMGZhZWZmXCIsXHJcblx0XHRcdFx0XHRvZmZzZXRZOiBzd2l0Y2hZLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QXBwUHJpdmFjeU9uZToge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfnlKjmiLfljY/orq4nLFxyXG5cdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vd3d3LnRhb2Jhby5jb21cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QXBwUHJpdmFjeVR3bzoge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfpmpDnp4HmlL/nrZYnLFxyXG5cdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vd3d3LnRhb2Jhby5jb21cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QXBwUHJpdmFjeVRocmVlOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+acjeWKoeWNj+iuricsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0gZWxzZSBpZiAocGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdGNvbmZpZyA9IHtcclxuXHRcdFx0dWlDb25maWc6IHtcclxuXHRcdFx0XHRzZXREaWFsb2dUaGVtZToge1xyXG5cdFx0XHRcdFx0cmFkaXVzOiBbXCIxMFwiLCBcIjEwXCIsIFwiMTBcIiwgXCIxMFwiXSxcclxuXHRcdFx0XHRcdHg6IFN0cmluZygoYm9keVdpZHRoIC0gZGlhbG9nV2lkdGgpICogMC41KSxcclxuXHRcdFx0XHRcdHk6IFN0cmluZygoYm9keUhlaWdodCAtIGRpYWxvZ0hlaWdodCkgKiAwLjUpLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFN0cmluZyhkaWFsb2dXaWR0aCksXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFN0cmluZyhkaWFsb2dIZWlnaHQpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TmF2VWk6IHtcclxuXHRcdFx0XHRcdHRleHQ6IFwi5LiA6ZSu55m75b2VXCIsXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiIzAwMDAwMFwiLFxyXG5cdFx0XHRcdFx0YmdDb2xvcjogXCIjMDBGRkZGRkZcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1BhdGg6IFwic3RhdGljL2Nsb3NlX2JsYWNrLnBuZ1wiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nWDogU3RyaW5nKGRpYWxvZ1dpZHRoIC0gMjQgLSAxNSksXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdZOiBcIjVcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1dpZHRoOiBcIjI0XCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdIZWlnaHQ6IFwiMjRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ29VaToge1xyXG5cdFx0XHRcdFx0aW1nUGF0aDogXCJzdGF0aWMvbXl0ZWxfYXBwX2xhdW5jaGVyLnBuZ1wiLFxyXG5cdFx0XHRcdFx0eTogbG9nb1ksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTbG9nYW5VaToge1xyXG5cdFx0XHRcdFx0eTogc2xvZ2FuWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldE51bWJlclVpOiB7XHJcblx0XHRcdFx0XHR5OiBudW1iZXJZLFxyXG5cdFx0XHRcdFx0dGV4dFNpemU6IFwiMjRcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9naW5CdG5VaToge1xyXG5cdFx0XHRcdFx0eTogbG9naW5CdG5ZLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0U3dpdGNoVWk6IHtcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjMGZhZWZmXCIsXHJcblx0XHRcdFx0XHR5OiBzd2l0Y2hZLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QXBwUHJpdmFjeU9uZToge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfnlKjmiLfljY/orq4nLFxyXG5cdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vd3d3LnRhb2Jhby5jb21cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QXBwUHJpdmFjeVR3bzoge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfpmpDnp4HmlL/nrZYnLFxyXG5cdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vd3d3LnRhb2Jhby5jb21cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QXBwUHJpdmFjeVRocmVlOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+acjeWKoeWNj+iuricsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHRyZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFNoZWV0KCkge1xyXG5cdGxldCBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xyXG5cclxuXHRsZXQgY29uZmlnID0ge307XHJcblxyXG5cdGNvbnN0IGJvZHlIZWlnaHQgPSBwbHVzLmRpc3BsYXkucmVzb2x1dGlvbkhlaWdodDtcclxuXHRjb25zdCBib2R5V2lkdGggPSBwbHVzLmRpc3BsYXkucmVzb2x1dGlvbldpZHRoO1xyXG5cdGNvbnN0IGRpYWxvZ1dpZHRoID0gYm9keVdpZHRoO1xyXG5cdGNvbnN0IGRpYWxvZ0hlaWdodCA9IDQ2MDtcclxuXHRjb25zdCB1bml0ID0gcGFyc2VJbnQoZGlhbG9nSGVpZ2h0IC8gMTApO1xyXG5cdGNvbnN0IGxvZ29ZID0gU3RyaW5nKE1hdGguY2VpbCh1bml0ICogMC4zKSk7XHJcblx0Y29uc3Qgc2xvZ2FuWSA9IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDIuNSkpO1xyXG5cdGNvbnN0IG51bWJlclkgPSBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiAzLjIpKTtcclxuXHRjb25zdCBsb2dpbkJ0blkgPSBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiA0LjMpKTtcclxuXHRjb25zdCBzd2l0Y2hZID0gU3RyaW5nKE1hdGguY2VpbCh1bml0ICogNi4wKSk7XHJcblxyXG5cdGlmIChwbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdGNvbmZpZyA9IHtcclxuXHRcdFx0dWlDb25maWc6IHtcclxuXHRcdFx0XHRzZXREaWFsb2dUaGVtZToge1xyXG5cdFx0XHRcdFx0d2lkdGg6IFN0cmluZyhkaWFsb2dXaWR0aCksXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFN0cmluZyhkaWFsb2dIZWlnaHQpLFxyXG5cdFx0XHRcdFx0aXNCb3R0b206IFwidHJ1ZVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROYXZVaToge1xyXG5cdFx0XHRcdFx0dGV4dDogXCLkuIDplK7nmbvlvZVcIixcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjMDAwMDAwXCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdQYXRoOiBcInN0YXRpYy9jbG9zZV9ibGFjay5wbmdcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1g6IFN0cmluZyhkaWFsb2dXaWR0aCAtIDI0IC0gMTUpLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nV2lkdGg6IFwiMjRcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ0hlaWdodDogXCIyNFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9nb1VpOiB7XHJcblx0XHRcdFx0XHRpbWdQYXRoOiBcInN0YXRpYy9teXRlbF9hcHBfbGF1bmNoZXIucG5nXCIsXHJcblx0XHRcdFx0XHRvZmZzZXRZOiBsb2dvWVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0U2xvZ2FuVWk6IHtcclxuXHRcdFx0XHRcdG9mZnNldFk6IHNsb2dhblksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROdW1iZXJVaToge1xyXG5cdFx0XHRcdFx0b2Zmc2V0WTogbnVtYmVyWSxcclxuXHRcdFx0XHRcdHRleHRTaXplOiBcIjIzXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRMb2dpbkJ0blVpOiB7XHJcblx0XHRcdFx0XHRvZmZzZXRZOiBsb2dpbkJ0blksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTd2l0Y2hVaToge1xyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiMwZmFlZmZcIixcclxuXHRcdFx0XHRcdG9mZnNldFk6IHN3aXRjaFksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5T25lOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+eUqOaIt+WNj+iuricsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5VHdvOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+makOengeaUv+etlicsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5VGhyZWU6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5pyN5Yqh5Y2P6K6uJyxcclxuXHRcdFx0XHRcdHVybDogXCJodHRwczovL3d3dy50YW9iYW8uY29tXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSBlbHNlIGlmIChwbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0Y29uZmlnID0ge1xyXG5cdFx0XHR1aUNvbmZpZzoge1xyXG5cdFx0XHRcdHNldERpYWxvZ1RoZW1lOiB7XHJcblx0XHRcdFx0XHRyYWRpdXM6IFtcIjEwXCIsIFwiMFwiLCBcIjBcIiwgXCIxMFwiXSxcclxuXHRcdFx0XHRcdHg6IFN0cmluZygoYm9keVdpZHRoIC0gZGlhbG9nV2lkdGgpICogMC41KSxcclxuXHRcdFx0XHRcdHk6IFN0cmluZyhib2R5SGVpZ2h0IC0gZGlhbG9nSGVpZ2h0KSxcclxuXHRcdFx0XHRcdHdpZHRoOiBTdHJpbmcoZGlhbG9nV2lkdGgpLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBTdHJpbmcoZGlhbG9nSGVpZ2h0KSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldE5hdlVpOiB7XHJcblx0XHRcdFx0XHR0ZXh0OiBcIuS4gOmUrueZu+W9lVwiLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiMwMDAwMDBcIixcclxuXHRcdFx0XHRcdGJnQ29sb3I6IFwiIzAwRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdQYXRoOiBcInN0YXRpYy9jbG9zZV9ibGFjay5wbmdcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1g6IFN0cmluZyhkaWFsb2dXaWR0aCAtIDI0IC0gMTUpLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nWTogXCI1XCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdXaWR0aDogXCIyNFwiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nSGVpZ2h0OiBcIjI0XCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRMb2dvVWk6IHtcclxuXHRcdFx0XHRcdGltZ1BhdGg6IFwic3RhdGljL215dGVsX2FwcF9sYXVuY2hlci5wbmdcIixcclxuXHRcdFx0XHRcdHk6IGxvZ29ZLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0U2xvZ2FuVWk6IHtcclxuXHRcdFx0XHRcdHk6IHNsb2dhblksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROdW1iZXJVaToge1xyXG5cdFx0XHRcdFx0eTogbnVtYmVyWSxcclxuXHRcdFx0XHRcdHRleHRTaXplOiBcIjI0XCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRMb2dpbkJ0blVpOiB7XHJcblx0XHRcdFx0XHR5OiBsb2dpbkJ0blksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTd2l0Y2hVaToge1xyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiMwZmFlZmZcIixcclxuXHRcdFx0XHRcdHk6IHN3aXRjaFksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5T25lOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+eUqOaIt+WNj+iuricsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5VHdvOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+makOengeaUv+etlicsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRBcHBQcml2YWN5VGhyZWU6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5pyN5Yqh5Y2P6K6uJyxcclxuXHRcdFx0XHRcdHVybDogXCJodHRwczovL3d3dy50YW9iYW8uY29tXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkRnVsbHNjcmVlbkFuZEltYWdlQmcoKSB7XHJcblx0bGV0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XHJcblxyXG5cdGxldCBjb25maWcgPSB7fTtcclxuXHJcblx0Y29uc3QgYm9keUhlaWdodCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25IZWlnaHQ7XHJcblx0Y29uc3QgYm9keVdpZHRoID0gcGx1cy5zY3JlZW4ucmVzb2x1dGlvbldpZHRoO1xyXG5cdGNvbnN0IGRlc2lnbkhlaWdodCA9IGJvZHlIZWlnaHQgLSA4MDtcclxuXHRjb25zdCB1bml0ID0gcGFyc2VJbnQoZGVzaWduSGVpZ2h0IC8gMjApO1xyXG5cdGNvbnN0IG51bWJlclkgPSBTdHJpbmcodW5pdCAqIDcpO1xyXG5cdGNvbnN0IHNsb2dhblkgPSBTdHJpbmcodW5pdCAqIDkpO1xyXG5cdGNvbnN0IGxvZ2luQnRuWSA9IFN0cmluZyh1bml0ICogMTIpO1xyXG5cclxuXHRpZiAocGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRjb25maWcgPSB7XHJcblx0XHRcdHVpQ29uZmlnOiB7XHJcblx0XHRcdFx0c2V0U3RhdHVzQmFyQ29sb3I6IFwiIzAwRkZGRkZGXCIsXHJcblx0XHRcdFx0c2V0U3RhdHVzQmFyVUlGbGFnOiBcIjFcIixcclxuXHRcdFx0XHRzZXRTdGF0dXNCYXJMaWdodENvbG9yOiBcImZhbHNlXCIsXHJcblx0XHRcdFx0c2V0TmF2SGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRMb2dvSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRTd2l0Y2hIaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldEJhY2tncm91bmRVaToge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiMwODEyMjNcIixcclxuXHRcdFx0XHRcdGltYWdlUGF0aDogXCJzdGF0aWMvd2ViX2JhY2tncm91bmRfMS5qcGVnXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROdW1iZXJVaToge1xyXG5cdFx0XHRcdFx0b2Zmc2V0WTogbnVtYmVyWSxcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTbG9nYW5VaToge1xyXG5cdFx0XHRcdFx0dGV4dDogJ+mYv+mHjOmAmuS/oeaPkOS+m+iupOivgeacjeWKoScsXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHRleHRTaXplOiBcIjE2XCIsXHJcblx0XHRcdFx0XHRvZmZzZXRZOiBTdHJpbmcodW5pdCAqIDkpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9naW5CdG5VaToge1xyXG5cdFx0XHRcdFx0b2Zmc2V0WTogbG9naW5CdG5ZLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkZ2V0czoge1xyXG5cdFx0XHRcdHdpZGdldDE6IHtcclxuXHRcdFx0XHRcdHdpZGdldElkOiBcImNsb3NlXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIkltYWdlVmlld1wiLFxyXG5cdFx0XHRcdFx0bGVmdDogXCIyNVwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjI0XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMjRcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWdQYXRoOiBcInN0YXRpYy9jbG9zZV93aGl0ZS5wbmdcIixcclxuXHRcdFx0XHRcdGxvY2F0ZTogXCIwXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHdpZGdldDI6IHtcclxuXHRcdFx0XHRcdHdpZGdldElkOiBcImxpbmVcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiVGV4dFZpZXdcIixcclxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBcIi3lhbbku5bmlrnlvI/nmbvlvZUtXCIsXHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIxM1wiLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGxlZnQ6IFwiMTBcIixcclxuXHRcdFx0XHRcdHRvcDogU3RyaW5nKHVuaXQgKiAxNSksXHJcblx0XHRcdFx0XHR3aWR0aDogU3RyaW5nKGJvZHlXaWR0aCAtIDIwKSxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIyMFwiLFxyXG5cdFx0XHRcdFx0bG9jYXRlOiBcIjBcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0d2lkZ2V0Mzoge1xyXG5cdFx0XHRcdFx0d2lkZ2V0SWQ6IFwiYWxpcGF5XCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIkltYWdlVmlld1wiLFxyXG5cdFx0XHRcdFx0bGVmdDogU3RyaW5nKGJvZHlXaWR0aCAqIDAuNSAtIDIwIC0gNTApLFxyXG5cdFx0XHRcdFx0dG9wOiBTdHJpbmcodW5pdCAqIDE2KSxcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjUwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWdQYXRoOiBcInN0YXRpYy9hbGlwYXlfaWNvbi5wbmdcIixcclxuXHRcdFx0XHRcdGxvY2F0ZTogXCIwXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHdpZGdldDQ6IHtcclxuXHRcdFx0XHRcdHdpZGdldElkOiBcInRhb2Jhb1wiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJJbWFnZVZpZXdcIixcclxuXHRcdFx0XHRcdGxlZnQ6IFN0cmluZyhib2R5V2lkdGggKiAwLjUgKyAyMCksXHJcblx0XHRcdFx0XHR0b3A6IFN0cmluZyh1bml0ICogMTYpLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFwiNTBcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCI1MFwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltZ1BhdGg6IFwic3RhdGljL3Rhb2Jhb19pY29uLnBuZ1wiLFxyXG5cdFx0XHRcdFx0bG9jYXRlOiBcIjBcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9IGVsc2UgaWYgKHBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRjb25maWcgPSB7XHJcblx0XHRcdHVpQ29uZmlnOiB7XHJcblx0XHRcdFx0cHJlZmVycmVkU3RhdHVzQmFyU3R5bGU6IFwiMVwiLFxyXG5cdFx0XHRcdHNldE5hdkhpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0TG9nb0hpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0U3dpdGNoSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRCYWNrZ3JvdW5kVWk6IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMDgxMjIzXCIsXHJcblx0XHRcdFx0XHRpbWFnZVBhdGg6IFwic3RhdGljL3dlYl9iYWNrZ3JvdW5kXzEuanBlZ1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TnVtYmVyVWk6IHtcclxuXHRcdFx0XHRcdHk6IG51bWJlclksXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0U2xvZ2FuVWk6IHtcclxuXHRcdFx0XHRcdHRleHQ6IFwi6Zi/6YeM6YCa5L+h5o+Q5L6b6K6k6K+B5pyN5YqhXCIsXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0dGV4dFNpemU6IFwiMTdcIixcclxuXHRcdFx0XHRcdHk6IHNsb2dhblksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRMb2dpbkJ0blVpOiB7XHJcblx0XHRcdFx0XHR5OiBsb2dpbkJ0blksXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWRnZXRzOiBbe1xyXG5cdFx0XHRcdHdpZGdldElkOiBcImNsb3NlXCIsXHJcblx0XHRcdFx0dHlwZTogXCJCdXR0b25cIixcclxuXHRcdFx0XHR4OiBcIjI1XCIsXHJcblx0XHRcdFx0eTogXCI2NFwiLCAvL+azqOaEj+WImOa1t+Wxj1xyXG5cdFx0XHRcdHdpZHRoOiBcIjI0XCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjI0XCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInN0YXRpYy9jbG9zZV93aGl0ZS5wbmdcIixcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdHdpZGdldElkOiBcImxpbmVcIixcclxuXHRcdFx0XHR0eXBlOiBcIkxhYmVsXCIsXHJcblx0XHRcdFx0YWxpZ25tZW50OiBcIjFcIixcclxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCIt5YW25LuW5pa55byP55m75b2VLVwiLFxyXG5cdFx0XHRcdHRleHRTaXplOiBcIjEzXCIsXHJcblx0XHRcdFx0dGV4dENvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHR4OiBcIjEwXCIsXHJcblx0XHRcdFx0eTogU3RyaW5nKHVuaXQgKiAxNSksXHJcblx0XHRcdFx0d2lkdGg6IFN0cmluZyhib2R5V2lkdGggLSAyMCksXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjIwXCIsXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHR3aWRnZXRJZDogXCJhbGlwYXlcIixcclxuXHRcdFx0XHR0eXBlOiBcIkJ1dHRvblwiLFxyXG5cdFx0XHRcdHg6IFN0cmluZyhib2R5V2lkdGggKiAwLjUgLSAyMCAtIDUwKSxcclxuXHRcdFx0XHR5OiBTdHJpbmcodW5pdCAqIDE2KSxcclxuXHRcdFx0XHR3aWR0aDogXCI1MFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCI1MFwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJzdGF0aWMvYWxpcGF5X2ljb24ucG5nXCIsXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHR3aWRnZXRJZDogXCJ0YW9iYW9cIixcclxuXHRcdFx0XHR0eXBlOiBcIkJ1dHRvblwiLFxyXG5cdFx0XHRcdHg6IFN0cmluZyhib2R5V2lkdGggKiAwLjUgKyAyMCksXHJcblx0XHRcdFx0eTogU3RyaW5nKHVuaXQgKiAxNiksXHJcblx0XHRcdFx0d2lkdGg6IFwiNTBcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwic3RhdGljL3Rhb2Jhb19pY29uLnBuZ1wiLFxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblx0cmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRBbGVydEFuZEltYWdlQmcoKSB7XHJcblx0bGV0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XHJcblxyXG5cdGxldCBjb25maWcgPSB7fTtcclxuXHJcblx0Y29uc3QgYm9keUhlaWdodCA9IHBsdXMuZGlzcGxheS5yZXNvbHV0aW9uSGVpZ2h0O1xyXG5cdGNvbnN0IGJvZHlXaWR0aCA9IHBsdXMuZGlzcGxheS5yZXNvbHV0aW9uV2lkdGg7XHJcblx0Y29uc3QgZGlhbG9nV2lkdGggPSBwYXJzZUludChib2R5V2lkdGggKiAwLjgpO1xyXG5cdGNvbnN0IGRpYWxvZ0hlaWdodCA9IHBhcnNlSW50KGRpYWxvZ1dpZHRoIC8gMC42MTgpO1xyXG5cdGNvbnN0IHVuaXQgPSBwYXJzZUludChkaWFsb2dIZWlnaHQgLyAxMCk7XHJcblx0Y29uc3QgbnVtYmVyWSA9IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDIuMCkpO1xyXG5cdGNvbnN0IGxvZ2luQnRuWSA9IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDQuMykpO1xyXG5cclxuXHRpZiAocGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRjb25maWcgPSB7XHJcblx0XHRcdHVpQ29uZmlnOiB7XHJcblx0XHRcdFx0c2V0TG9nb0hpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0U2xvZ2FuSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRTd2l0Y2hIaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldERpYWxvZ1RoZW1lOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogU3RyaW5nKGRpYWxvZ1dpZHRoKSxcclxuXHRcdFx0XHRcdGhlaWdodDogU3RyaW5nKGRpYWxvZ0hlaWdodCksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRCYWNrZ3JvdW5kVWk6IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMGMxNDFFXCIsXHJcblx0XHRcdFx0XHRpbWFnZVBhdGg6IFwic3RhdGljL3dlYl9iYWNrZ3JvdW5kXzIuanBlZ1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TmF2VWk6IHtcclxuXHRcdFx0XHRcdHRleHQ6IFwi5LiA6ZSu55m75b2VXCIsXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nUGF0aDogXCJzdGF0aWMvY2xvc2Vfd2hpdGUucG5nXCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdXaWR0aDogXCIyNFwiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nSGVpZ2h0OiBcIjI0XCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROdW1iZXJVaToge1xyXG5cdFx0XHRcdFx0b2Zmc2V0WTogbnVtYmVyWSxcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIyM1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9naW5CdG5VaToge1xyXG5cdFx0XHRcdFx0b2Zmc2V0WTogbG9naW5CdG5ZLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkZ2V0czoge1xyXG5cdFx0XHRcdHdpZGdldDE6IHtcclxuXHRcdFx0XHRcdHdpZGdldElkOiBcImxpbmVcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiVGV4dFZpZXdcIixcclxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBcIi3lhbbku5bmlrnlvI/nmbvlvZUtXCIsXHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIxM1wiLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGxlZnQ6IFwiMTBcIixcclxuXHRcdFx0XHRcdHRvcDogU3RyaW5nKE1hdGguY2VpbCh1bml0ICogNS44KSksXHJcblx0XHRcdFx0XHR3aWR0aDogU3RyaW5nKGRpYWxvZ1dpZHRoIC0gMjApLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjIwXCIsXHJcblx0XHRcdFx0XHRsb2NhdGU6IFwiMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR3aWRnZXQyOiB7XHJcblx0XHRcdFx0XHR3aWRnZXRJZDogXCJhbGlwYXlcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiSW1hZ2VWaWV3XCIsXHJcblx0XHRcdFx0XHRsZWZ0OiBTdHJpbmcoTWF0aC5jZWlsKGRpYWxvZ1dpZHRoICogMC41IC0gMjAgLSA1MCkpLFxyXG5cdFx0XHRcdFx0dG9wOiBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiA2LjMpKSxcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjUwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWdQYXRoOiBcInN0YXRpYy9hbGlwYXlfaWNvbi5wbmdcIixcclxuXHRcdFx0XHRcdGxvY2F0ZTogXCIwXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHdpZGdldDM6IHtcclxuXHRcdFx0XHRcdHdpZGdldElkOiBcInRhb2Jhb1wiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJJbWFnZVZpZXdcIixcclxuXHRcdFx0XHRcdGxlZnQ6IFN0cmluZyhNYXRoLmNlaWwoZGlhbG9nV2lkdGggKiAwLjUgKyAyMCkpLFxyXG5cdFx0XHRcdFx0dG9wOiBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiA2LjMpKSxcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjUwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWdQYXRoOiBcInN0YXRpYy90YW9iYW9faWNvbi5wbmdcIixcclxuXHRcdFx0XHRcdGxvY2F0ZTogXCIwXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSBlbHNlIGlmIChwbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0Y29uZmlnID0ge1xyXG5cdFx0XHR1aUNvbmZpZzoge1xyXG5cdFx0XHRcdHNldExvZ29IaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldFNsb2dhbkhpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0U3dpdGNoSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXREaWFsb2dUaGVtZToge1xyXG5cdFx0XHRcdFx0cmFkaXVzOiBbXCIxMFwiLCBcIjEwXCIsIFwiMTBcIiwgXCIxMFwiXSxcclxuXHRcdFx0XHRcdHg6IFN0cmluZygoYm9keVdpZHRoIC0gZGlhbG9nV2lkdGgpICogMC41KSxcclxuXHRcdFx0XHRcdHk6IFN0cmluZygoYm9keUhlaWdodCAtIGRpYWxvZ0hlaWdodCkgKiAwLjUpLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFN0cmluZyhkaWFsb2dXaWR0aCksXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFN0cmluZyhkaWFsb2dIZWlnaHQpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QmFja2dyb3VuZFVpOiB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzBjMTQxRVwiLFxyXG5cdFx0XHRcdFx0aW1hZ2VQYXRoOiBcInN0YXRpYy93ZWJfYmFja2dyb3VuZF8yLmpwZWdcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldE5hdlVpOiB7XHJcblx0XHRcdFx0XHR0ZXh0OiBcIuS4gOmUrueZu+W9lVwiLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnQ29sb3I6IFwiIzAwRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdQYXRoOiBcInN0YXRpYy9jbG9zZV93aGl0ZS5wbmdcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1g6IFN0cmluZyhkaWFsb2dXaWR0aCAtIDI0IC0gMTUpLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nWTogXCI1XCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdXaWR0aDogXCIyNFwiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nSGVpZ2h0OiBcIjI0XCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROdW1iZXJVaToge1xyXG5cdFx0XHRcdFx0eTogbnVtYmVyWSxcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIyNFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9naW5CdG5VaToge1xyXG5cdFx0XHRcdFx0eTogbG9naW5CdG5ZLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkZ2V0czogW3tcclxuXHRcdFx0XHR3aWRnZXRJZDogXCJsaW5lXCIsXHJcblx0XHRcdFx0dHlwZTogXCJMYWJlbFwiLFxyXG5cdFx0XHRcdGFsaWdubWVudDogXCIxXCIsXHJcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiLeWFtuS7luaWueW8j+eZu+W9lS1cIixcclxuXHRcdFx0XHR0ZXh0U2l6ZTogXCIxM1wiLFxyXG5cdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0eDogXCIxMFwiLFxyXG5cdFx0XHRcdHk6IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDUuOCkpLFxyXG5cdFx0XHRcdHdpZHRoOiBTdHJpbmcoZGlhbG9nV2lkdGggLSAyMCksXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjIwXCIsXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHR3aWRnZXRJZDogXCJhbGlwYXlcIixcclxuXHRcdFx0XHR0eXBlOiBcIkJ1dHRvblwiLFxyXG5cdFx0XHRcdHg6IFN0cmluZyhNYXRoLmNlaWwoZGlhbG9nV2lkdGggKiAwLjUgLSAyMCAtIDUwKSksXHJcblx0XHRcdFx0eTogU3RyaW5nKE1hdGguY2VpbCh1bml0ICogNi4zKSksXHJcblx0XHRcdFx0d2lkdGg6IFwiNTBcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwic3RhdGljL2FsaXBheV9pY29uLnBuZ1wiLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0d2lkZ2V0SWQ6IFwidGFvYmFvXCIsXHJcblx0XHRcdFx0dHlwZTogXCJCdXR0b25cIixcclxuXHRcdFx0XHR4OiBTdHJpbmcoTWF0aC5jZWlsKGRpYWxvZ1dpZHRoICogMC41ICsgMjApKSxcclxuXHRcdFx0XHR5OiBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiA2LjMpKSxcclxuXHRcdFx0XHR3aWR0aDogXCI1MFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCI1MFwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJzdGF0aWMvdGFvYmFvX2ljb24ucG5nXCIsXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHRyZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFNoZWV0QW5kR2lmQmcoKSB7XHJcblx0bGV0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XHJcblxyXG5cdGxldCBjb25maWcgPSB7fTtcclxuXHJcblx0Y29uc3QgYm9keUhlaWdodCA9IHBsdXMuZGlzcGxheS5yZXNvbHV0aW9uSGVpZ2h0O1xyXG5cdGNvbnN0IGJvZHlXaWR0aCA9IHBsdXMuZGlzcGxheS5yZXNvbHV0aW9uV2lkdGg7XHJcblx0Y29uc3QgZGlhbG9nV2lkdGggPSBib2R5V2lkdGg7XHJcblx0Y29uc3QgZGlhbG9nSGVpZ2h0ID0gXCI0NjBcIjtcclxuXHRjb25zdCB1bml0ID0gcGFyc2VJbnQoZGlhbG9nSGVpZ2h0IC8gMTApO1xyXG5cdGNvbnN0IG51bWJlclkgPSBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiAxLjUpKTtcclxuXHRjb25zdCBsb2dpbkJ0blkgPSBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiAzLjUpKTtcclxuXHJcblx0aWYgKHBsYXRmb3JtID09ICdhbmRyb2lkJykge1xyXG5cdFx0Y29uZmlnID0ge1xyXG5cdFx0XHR1aUNvbmZpZzoge1xyXG5cdFx0XHRcdHNldExvZ29IaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldFNsb2dhbkhpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0U3dpdGNoSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRCYWNrZ3JvdW5kVWk6IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMjU2NTgxXCIsXHJcblx0XHRcdFx0XHRnaWZQYXRoOiBcInN0YXRpYy9iYWNrZ3JvdW5kX2dpZi5naWZcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldERpYWxvZ1RoZW1lOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogU3RyaW5nKGRpYWxvZ1dpZHRoKSxcclxuXHRcdFx0XHRcdGhlaWdodDogU3RyaW5nKGRpYWxvZ0hlaWdodCksXHJcblx0XHRcdFx0XHRpc0JvdHRvbTogXCJ0cnVlXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldE5hdlVpOiB7XHJcblx0XHRcdFx0XHR0ZXh0OiBcIuS4gOmUrueZu+W9lVwiLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ1BhdGg6IFwic3RhdGljL2Nsb3NlX3doaXRlLnBuZ1wiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nV2lkdGg6IFwiMjRcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ0hlaWdodDogXCIyNFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TnVtYmVyVWk6IHtcclxuXHRcdFx0XHRcdG9mZnNldFk6IG51bWJlclksXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0dGV4dFNpemU6IFwiMjRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ2luQnRuVWk6IHtcclxuXHRcdFx0XHRcdG9mZnNldFk6IGxvZ2luQnRuWSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHdpZGdldHM6IHtcclxuXHRcdFx0XHR3aWRnZXQxOiB7XHJcblx0XHRcdFx0XHR3aWRnZXRJZDogXCJsaW5lXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIlRleHRWaWV3XCIsXHJcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCIt5YW25LuW5pa55byP55m75b2VLVwiLFxyXG5cdFx0XHRcdFx0dGV4dFNpemU6IFwiMTNcIixcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRsZWZ0OiBcIjEwXCIsXHJcblx0XHRcdFx0XHR0b3A6IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDUuMikpLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFN0cmluZyhkaWFsb2dXaWR0aCAtIDIwKSxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIyMFwiLFxyXG5cdFx0XHRcdFx0bG9jYXRlOiBcIjBcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0d2lkZ2V0Mjoge1xyXG5cdFx0XHRcdFx0d2lkZ2V0SWQ6IFwiYWxpcGF5XCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIkltYWdlVmlld1wiLFxyXG5cdFx0XHRcdFx0bGVmdDogU3RyaW5nKE1hdGguY2VpbChkaWFsb2dXaWR0aCAqIDAuNSAtIDIwIC0gNTApKSxcclxuXHRcdFx0XHRcdHRvcDogU3RyaW5nKE1hdGguY2VpbCh1bml0ICogNS44KSksXHJcblx0XHRcdFx0XHR3aWR0aDogXCI1MFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjUwXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1nUGF0aDogXCJzdGF0aWMvYWxpcGF5X2ljb24ucG5nXCIsXHJcblx0XHRcdFx0XHRsb2NhdGU6IFwiMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR3aWRnZXQzOiB7XHJcblx0XHRcdFx0XHR3aWRnZXRJZDogXCJ0YW9iYW9cIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiSW1hZ2VWaWV3XCIsXHJcblx0XHRcdFx0XHRsZWZ0OiBTdHJpbmcoTWF0aC5jZWlsKGRpYWxvZ1dpZHRoICogMC41ICsgMjApKSxcclxuXHRcdFx0XHRcdHRvcDogU3RyaW5nKE1hdGguY2VpbCh1bml0ICogNS44KSksXHJcblx0XHRcdFx0XHR3aWR0aDogXCI1MFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjUwXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1nUGF0aDogXCJzdGF0aWMvdGFvYmFvX2ljb24ucG5nXCIsXHJcblx0XHRcdFx0XHRsb2NhdGU6IFwiMFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0gZWxzZSBpZiAocGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdGNvbmZpZyA9IHtcclxuXHRcdFx0dWlDb25maWc6IHtcclxuXHRcdFx0XHRzZXRMb2dvSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRTbG9nYW5IaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldFN3aXRjaEhpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0RGlhbG9nVGhlbWU6IHtcclxuXHRcdFx0XHRcdHJhZGl1czogW1wiMTBcIiwgXCIwXCIsIFwiMFwiLCBcIjEwXCJdLFxyXG5cdFx0XHRcdFx0eDogU3RyaW5nKChib2R5V2lkdGggLSBkaWFsb2dXaWR0aCkgKiAwLjUpLFxyXG5cdFx0XHRcdFx0eTogU3RyaW5nKGJvZHlIZWlnaHQgLSBkaWFsb2dIZWlnaHQpLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFN0cmluZyhkaWFsb2dXaWR0aCksXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFN0cmluZyhkaWFsb2dIZWlnaHQpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0QmFja2dyb3VuZFVpOiB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzI1NjU4MVwiLFxyXG5cdFx0XHRcdFx0Z2lmUGF0aDogXCJzdGF0aWMvYmFja2dyb3VuZF9naWYuZ2lmXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROYXZVaToge1xyXG5cdFx0XHRcdFx0dGV4dDogXCLkuIDplK7nmbvlvZVcIixcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ0NvbG9yOiBcIiMwMEZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nUGF0aDogXCJzdGF0aWMvY2xvc2Vfd2hpdGUucG5nXCIsXHJcblx0XHRcdFx0XHRyZXR1cm5JbWdYOiBTdHJpbmcoZGlhbG9nV2lkdGggLSAyNCAtIDE1KSxcclxuXHRcdFx0XHRcdHJldHVybkltZ1k6IFwiNVwiLFxyXG5cdFx0XHRcdFx0cmV0dXJuSW1nV2lkdGg6IFwiMjRcIixcclxuXHRcdFx0XHRcdHJldHVybkltZ0hlaWdodDogXCIyNFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TnVtYmVyVWk6IHtcclxuXHRcdFx0XHRcdHk6IG51bWJlclksXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0dGV4dFNpemU6IFwiMjNcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ2luQnRuVWk6IHtcclxuXHRcdFx0XHRcdHk6IGxvZ2luQnRuWSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHdpZGdldHM6IFt7XHJcblx0XHRcdFx0d2lkZ2V0SWQ6IFwibGluZVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwiTGFiZWxcIixcclxuXHRcdFx0XHRhbGlnbm1lbnQ6IFwiMVwiLFxyXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIi3lhbbku5bmlrnlvI/nmbvlvZUtXCIsXHJcblx0XHRcdFx0dGV4dFNpemU6IFwiMTNcIixcclxuXHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdHg6IFwiMTBcIixcclxuXHRcdFx0XHR5OiBTdHJpbmcoTWF0aC5jZWlsKHVuaXQgKiA1LjIpKSxcclxuXHRcdFx0XHR3aWR0aDogU3RyaW5nKGRpYWxvZ1dpZHRoIC0gMjApLFxyXG5cdFx0XHRcdGhlaWdodDogXCIyMFwiLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0d2lkZ2V0SWQ6IFwiYWxpcGF5XCIsXHJcblx0XHRcdFx0dHlwZTogXCJCdXR0b25cIixcclxuXHRcdFx0XHR4OiBTdHJpbmcoTWF0aC5jZWlsKGRpYWxvZ1dpZHRoICogMC41IC0gMjAgLSA1MCkpLFxyXG5cdFx0XHRcdHk6IFN0cmluZyhNYXRoLmNlaWwodW5pdCAqIDUuOCkpLFxyXG5cdFx0XHRcdHdpZHRoOiBcIjUwXCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjUwXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInN0YXRpYy9hbGlwYXlfaWNvbi5wbmdcIixcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdHdpZGdldElkOiBcInRhb2Jhb1wiLFxyXG5cdFx0XHRcdHR5cGU6IFwiQnV0dG9uXCIsXHJcblx0XHRcdFx0eDogU3RyaW5nKE1hdGguY2VpbChkaWFsb2dXaWR0aCAqIDAuNSArIDIwKSksXHJcblx0XHRcdFx0eTogU3RyaW5nKE1hdGguY2VpbCh1bml0ICogNS44KSksXHJcblx0XHRcdFx0d2lkdGg6IFwiNTBcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwic3RhdGljL3Rhb2Jhb19pY29uLnBuZ1wiLFxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblx0cmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRGdWxsc2NyZWVuQW5kV2Vidmlld0JnKCkge1xyXG5cdGxldCBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xyXG5cclxuXHRsZXQgY29uZmlnID0ge307XHJcblxyXG5cdGNvbnN0IGJvZHlIZWlnaHQgPSBwbHVzLnNjcmVlbi5yZXNvbHV0aW9uSGVpZ2h0O1xyXG5cdGNvbnN0IGJvZHlXaWR0aCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25XaWR0aDtcclxuXHRjb25zdCBkZXNpZ25IZWlnaHQgPSBib2R5SGVpZ2h0IC0gODA7XHJcblx0Y29uc3QgdW5pdCA9IHBhcnNlSW50KGRlc2lnbkhlaWdodCAvIDIwKTtcclxuXHRjb25zdCBudW1iZXJZID0gU3RyaW5nKHVuaXQgKiA3KTtcclxuXHRjb25zdCBzbG9nYW5ZID0gU3RyaW5nKHVuaXQgKiA5KTtcclxuXHRjb25zdCBsb2dpbkJ0blkgPSBTdHJpbmcodW5pdCAqIDEyKTtcclxuXHJcblx0aWYgKHBsYXRmb3JtID09ICdhbmRyb2lkJykge1xyXG5cdFx0Y29uZmlnID0ge1xyXG5cdFx0XHR1aUNvbmZpZzoge1xyXG5cdFx0XHRcdHNldFN0YXR1c0JhckNvbG9yOiBcIiMwMEZGRkZGRlwiLFxyXG5cdFx0XHRcdHNldFN0YXR1c0JhclVJRmxhZzogXCIxXCIsXHJcblx0XHRcdFx0c2V0U3RhdHVzQmFyTGlnaHRDb2xvcjogXCJmYWxzZVwiLFxyXG5cdFx0XHRcdHNldE5hdkhpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0TG9nb0hpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0U3dpdGNoSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRCYWNrZ3JvdW5kVWk6IHtcclxuXHRcdFx0XHRcdHdlYnZpZXdQYXRoOiBcInN0YXRpYy9iYWNrZ3JvdW5kX3dlYi5odG1sXCIsXHJcblx0XHRcdFx0XHR3ZWJ2aWV3SmF2YVNjcmlwdEVuYWJsZWQ6IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TnVtYmVyVWk6IHtcclxuXHRcdFx0XHRcdG9mZnNldFk6IG51bWJlclksXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0U2xvZ2FuVWk6IHtcclxuXHRcdFx0XHRcdHRleHQ6ICfpmL/ph4zpgJrkv6Hmj5DkvpvorqTor4HmnI3liqEnLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIxNlwiLFxyXG5cdFx0XHRcdFx0b2Zmc2V0WTogU3RyaW5nKHVuaXQgKiA5KSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ2luQnRuVWk6IHtcclxuXHRcdFx0XHRcdG9mZnNldFk6IGxvZ2luQnRuWSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWRnZXRzOiB7XHJcblx0XHRcdFx0d2lkZ2V0MToge1xyXG5cdFx0XHRcdFx0d2lkZ2V0SWQ6IFwiY2xvc2VcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiSW1hZ2VWaWV3XCIsXHJcblx0XHRcdFx0XHRsZWZ0OiBcIjI1XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMjRcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIyNFwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltZ1BhdGg6IFwic3RhdGljL2Nsb3NlX3doaXRlLnBuZ1wiLFxyXG5cdFx0XHRcdFx0bG9jYXRlOiBcIjBcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0d2lkZ2V0Mjoge1xyXG5cdFx0XHRcdFx0d2lkZ2V0SWQ6IFwibGluZVwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJUZXh0Vmlld1wiLFxyXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiLeWFtuS7luaWueW8j+eZu+W9lS1cIixcclxuXHRcdFx0XHRcdHRleHRTaXplOiBcIjEzXCIsXHJcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0bGVmdDogXCIxMFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBTdHJpbmcodW5pdCAqIDE1KSxcclxuXHRcdFx0XHRcdHdpZHRoOiBTdHJpbmcoYm9keVdpZHRoIC0gMjApLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjIwXCIsXHJcblx0XHRcdFx0XHRsb2NhdGU6IFwiMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR3aWRnZXQzOiB7XHJcblx0XHRcdFx0XHR3aWRnZXRJZDogXCJhbGlwYXlcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiSW1hZ2VWaWV3XCIsXHJcblx0XHRcdFx0XHRsZWZ0OiBTdHJpbmcoYm9keVdpZHRoICogMC41IC0gMjAgLSA1MCksXHJcblx0XHRcdFx0XHR0b3A6IFN0cmluZyh1bml0ICogMTYpLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFwiNTBcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCI1MFwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltZ1BhdGg6IFwic3RhdGljL2FsaXBheV9pY29uLnBuZ1wiLFxyXG5cdFx0XHRcdFx0bG9jYXRlOiBcIjBcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0d2lkZ2V0NDoge1xyXG5cdFx0XHRcdFx0d2lkZ2V0SWQ6IFwidGFvYmFvXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIkltYWdlVmlld1wiLFxyXG5cdFx0XHRcdFx0bGVmdDogU3RyaW5nKGJvZHlXaWR0aCAqIDAuNSArIDIwKSxcclxuXHRcdFx0XHRcdHRvcDogU3RyaW5nKHVuaXQgKiAxNiksXHJcblx0XHRcdFx0XHR3aWR0aDogXCI1MFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjUwXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1nUGF0aDogXCJzdGF0aWMvdGFvYmFvX2ljb24ucG5nXCIsXHJcblx0XHRcdFx0XHRsb2NhdGU6IFwiMFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0gZWxzZSBpZiAocGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdGNvbmZpZyA9IHtcclxuXHRcdFx0dWlDb25maWc6IHtcclxuXHRcdFx0XHRwcmVmZXJyZWRTdGF0dXNCYXJTdHlsZTogXCIxXCIsXHJcblx0XHRcdFx0c2V0TmF2SGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRMb2dvSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRTd2l0Y2hIaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldEJhY2tncm91bmRVaToge1xyXG5cdFx0XHRcdFx0d2Vidmlld1BhdGg6IFwic3RhdGljL2JhY2tncm91bmRfd2ViLmh0bWxcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldE51bWJlclVpOiB7XHJcblx0XHRcdFx0XHR5OiBudW1iZXJZLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldFNsb2dhblVpOiB7XHJcblx0XHRcdFx0XHR0ZXh0OiBcIumYv+mHjOmAmuS/oeaPkOS+m+iupOivgeacjeWKoVwiLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdHRleHRTaXplOiBcIjE3XCIsXHJcblx0XHRcdFx0XHR5OiBTdHJpbmcodW5pdCAqIDkpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TG9naW5CdG5VaToge1xyXG5cdFx0XHRcdFx0eTogbG9naW5CdG5ZLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkZ2V0czogW3tcclxuXHRcdFx0XHR3aWRnZXRJZDogXCJjbG9zZVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwiQnV0dG9uXCIsXHJcblx0XHRcdFx0eDogXCIyNVwiLFxyXG5cdFx0XHRcdHk6IFwiNjRcIiwgLy/ms6jmhI/liJjmtbflsY9cclxuXHRcdFx0XHR3aWR0aDogXCIyNFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCIyNFwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJzdGF0aWMvY2xvc2Vfd2hpdGUucG5nXCIsXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHR3aWRnZXRJZDogXCJsaW5lXCIsXHJcblx0XHRcdFx0dHlwZTogXCJMYWJlbFwiLFxyXG5cdFx0XHRcdGFsaWdubWVudDogXCIxXCIsXHJcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiLeWFtuS7luaWueW8j+eZu+W9lS1cIixcclxuXHRcdFx0XHR0ZXh0U2l6ZTogXCIxM1wiLFxyXG5cdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0eDogXCIxMFwiLFxyXG5cdFx0XHRcdHk6IFN0cmluZyh1bml0ICogMTUpLFxyXG5cdFx0XHRcdHdpZHRoOiBTdHJpbmcoYm9keVdpZHRoIC0gMjApLFxyXG5cdFx0XHRcdGhlaWdodDogXCIyMFwiLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0d2lkZ2V0SWQ6IFwiYWxpcGF5XCIsXHJcblx0XHRcdFx0dHlwZTogXCJCdXR0b25cIixcclxuXHRcdFx0XHR4OiBTdHJpbmcoYm9keVdpZHRoICogMC41IC0gMjAgLSA1MCksXHJcblx0XHRcdFx0eTogU3RyaW5nKHVuaXQgKiAxNiksXHJcblx0XHRcdFx0d2lkdGg6IFwiNTBcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwic3RhdGljL2FsaXBheV9pY29uLnBuZ1wiLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0d2lkZ2V0SWQ6IFwidGFvYmFvXCIsXHJcblx0XHRcdFx0dHlwZTogXCJCdXR0b25cIixcclxuXHRcdFx0XHR4OiBTdHJpbmcoYm9keVdpZHRoICogMC41ICsgMjApLFxyXG5cdFx0XHRcdHk6IFN0cmluZyh1bml0ICogMTYpLFxyXG5cdFx0XHRcdHdpZHRoOiBcIjUwXCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjUwXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInN0YXRpYy90YW9iYW9faWNvbi5wbmdcIixcclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cdHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkRnVsbHNjcmVlbkFuZFdlZXhWaWV3QmcoKSB7XHJcblx0bGV0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XHJcblxyXG5cdGxldCBjb25maWcgPSB7fTtcclxuXHJcblx0Y29uc3QgYm9keUhlaWdodCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25IZWlnaHQ7XHJcblx0Y29uc3QgYm9keVdpZHRoID0gcGx1cy5zY3JlZW4ucmVzb2x1dGlvbldpZHRoO1xyXG5cdGNvbnN0IGRlc2lnbkhlaWdodCA9IGJvZHlIZWlnaHQgLSA4MDtcclxuXHRjb25zdCB1bml0ID0gcGFyc2VJbnQoZGVzaWduSGVpZ2h0IC8gMjApO1xyXG5cdGNvbnN0IG51bWJlclkgPSBTdHJpbmcodW5pdCAqIDcpO1xyXG5cdGNvbnN0IHNsb2dhblkgPSBTdHJpbmcodW5pdCAqIDkpO1xyXG5cdGNvbnN0IGxvZ2luQnRuWSA9IFN0cmluZyh1bml0ICogMTIpO1xyXG5cclxuXHRpZiAocGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRjb25maWcgPSB7XHJcblx0XHRcdHVpQ29uZmlnOiB7XHJcblx0XHRcdFx0c2V0U3RhdHVzQmFyQ29sb3I6IFwiIzAwRkZGRkZGXCIsXHJcblx0XHRcdFx0c2V0U3RhdHVzQmFyVUlGbGFnOiBcIjFcIixcclxuXHRcdFx0XHRzZXRTdGF0dXNCYXJMaWdodENvbG9yOiBcImZhbHNlXCIsXHJcblx0XHRcdFx0c2V0TmF2SGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRMb2dvSGlkZGVuOiBcInRydWVcIixcclxuXHRcdFx0XHRzZXRTd2l0Y2hIaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldEJhY2tncm91bmRVaToge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiMxRTUzNzJcIixcclxuXHRcdFx0XHRcdHdlZXhKc1BhdGg6IFwic3RhdGljL2JhY2tncm91bmRfd2VleC5qc1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0TnVtYmVyVWk6IHtcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRvZmZzZXRZOiBudW1iZXJZLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0U2xvZ2FuVWk6IHtcclxuXHRcdFx0XHRcdHRleHQ6ICfpmL/ph4zpgJrkv6Hmj5DkvpvorqTor4HmnI3liqEnLFxyXG5cdFx0XHRcdFx0dGV4dENvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIxNlwiLFxyXG5cdFx0XHRcdFx0b2Zmc2V0WTogU3RyaW5nKHVuaXQgKiA5KSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ2luQnRuVWk6IHtcclxuXHRcdFx0XHRcdG9mZnNldFk6IGxvZ2luQnRuWSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHdpZGdldHM6IHtcclxuXHRcdFx0XHR3aWRnZXQxOiB7XHJcblx0XHRcdFx0XHR3aWRnZXRJZDogXCJjbG9zZVwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJJbWFnZVZpZXdcIixcclxuXHRcdFx0XHRcdGxlZnQ6IFwiMjVcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHR3aWR0aDogXCIyNFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjI0XCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1nUGF0aDogXCJzdGF0aWMvY2xvc2Vfd2hpdGUucG5nXCIsXHJcblx0XHRcdFx0XHRsb2NhdGU6IFwiMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR3aWRnZXQyOiB7XHJcblx0XHRcdFx0XHR3aWRnZXRJZDogXCJsaW5lXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIlRleHRWaWV3XCIsXHJcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCIt5YW25LuW5pa55byP55m75b2VLVwiLFxyXG5cdFx0XHRcdFx0dGV4dFNpemU6IFwiMTNcIixcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRsZWZ0OiBcIjEwXCIsXHJcblx0XHRcdFx0XHR0b3A6IFN0cmluZyh1bml0ICogMTUpLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFN0cmluZyhib2R5V2lkdGggLSAyMCksXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMjBcIixcclxuXHRcdFx0XHRcdGxvY2F0ZTogXCIwXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHdpZGdldDM6IHtcclxuXHRcdFx0XHRcdHdpZGdldElkOiBcImFsaXBheVwiLFxyXG5cdFx0XHRcdFx0dHlwZTogXCJJbWFnZVZpZXdcIixcclxuXHRcdFx0XHRcdGxlZnQ6IFN0cmluZyhib2R5V2lkdGggKiAwLjUgLSAyMCAtIDUwKSxcclxuXHRcdFx0XHRcdHRvcDogU3RyaW5nKHVuaXQgKiAxNiksXHJcblx0XHRcdFx0XHR3aWR0aDogXCI1MFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjUwXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1nUGF0aDogXCJzdGF0aWMvYWxpcGF5X2ljb24ucG5nXCIsXHJcblx0XHRcdFx0XHRsb2NhdGU6IFwiMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR3aWRnZXQ0OiB7XHJcblx0XHRcdFx0XHR3aWRnZXRJZDogXCJ0YW9iYW9cIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiSW1hZ2VWaWV3XCIsXHJcblx0XHRcdFx0XHRsZWZ0OiBTdHJpbmcoYm9keVdpZHRoICogMC41ICsgMjApLFxyXG5cdFx0XHRcdFx0dG9wOiBTdHJpbmcodW5pdCAqIDE2KSxcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjUwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNTBcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWdQYXRoOiBcInN0YXRpYy90YW9iYW9faWNvbi5wbmdcIixcclxuXHRcdFx0XHRcdGxvY2F0ZTogXCIwXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSBlbHNlIGlmIChwbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0Y29uZmlnID0ge1xyXG5cdFx0XHR1aUNvbmZpZzoge1xyXG5cdFx0XHRcdHByZWZlcnJlZFN0YXR1c0JhclN0eWxlOiBcIjFcIixcclxuXHRcdFx0XHRzZXROYXZIaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldExvZ29IaWRkZW46IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdHNldFN3aXRjaEhpZGRlbjogXCJ0cnVlXCIsXHJcblx0XHRcdFx0c2V0QmFja2dyb3VuZFVpOiB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzFFNTM3MlwiLFxyXG5cdFx0XHRcdFx0d2VleEpzUGF0aDogXCJzdGF0aWMvYmFja2dyb3VuZF93ZWV4LmpzXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXROdW1iZXJVaToge1xyXG5cdFx0XHRcdFx0eTogbnVtYmVyWSxcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXRTbG9nYW5VaToge1xyXG5cdFx0XHRcdFx0dGV4dDogXCLpmL/ph4zpgJrkv6Hmj5DkvpvorqTor4HmnI3liqFcIixcclxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHR0ZXh0U2l6ZTogXCIxN1wiLFxyXG5cdFx0XHRcdFx0eTogU3RyaW5nKHVuaXQgKiA5KSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldExvZ2luQnRuVWk6IHtcclxuXHRcdFx0XHRcdHk6IGxvZ2luQnRuWSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHdpZGdldHM6IFt7XHJcblx0XHRcdFx0d2lkZ2V0SWQ6IFwiY2xvc2VcIixcclxuXHRcdFx0XHR0eXBlOiBcIkJ1dHRvblwiLFxyXG5cdFx0XHRcdHg6IFwiMjVcIixcclxuXHRcdFx0XHR5OiBcIjY0XCIsIC8v5rOo5oSP5YiY5rW35bGPXHJcblx0XHRcdFx0d2lkdGg6IFwiMjRcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMjRcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwic3RhdGljL2Nsb3NlX3doaXRlLnBuZ1wiLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0d2lkZ2V0SWQ6IFwibGluZVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwiTGFiZWxcIixcclxuXHRcdFx0XHRhbGlnbm1lbnQ6IFwiMVwiLFxyXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIi3lhbbku5bmlrnlvI/nmbvlvZUtXCIsXHJcblx0XHRcdFx0dGV4dFNpemU6IFwiMTNcIixcclxuXHRcdFx0XHR0ZXh0Q29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdHg6IFwiMTBcIixcclxuXHRcdFx0XHR5OiBTdHJpbmcodW5pdCAqIDE1KSxcclxuXHRcdFx0XHR3aWR0aDogU3RyaW5nKGJvZHlXaWR0aCAtIDIwKSxcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMjBcIixcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdHdpZGdldElkOiBcImFsaXBheVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwiQnV0dG9uXCIsXHJcblx0XHRcdFx0eDogU3RyaW5nKGJvZHlXaWR0aCAqIDAuNSAtIDIwIC0gNTApLFxyXG5cdFx0XHRcdHk6IFN0cmluZyh1bml0ICogMTYpLFxyXG5cdFx0XHRcdHdpZHRoOiBcIjUwXCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjUwXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInN0YXRpYy9hbGlwYXlfaWNvbi5wbmdcIixcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdHdpZGdldElkOiBcInRhb2Jhb1wiLFxyXG5cdFx0XHRcdHR5cGU6IFwiQnV0dG9uXCIsXHJcblx0XHRcdFx0eDogU3RyaW5nKGJvZHlXaWR0aCAqIDAuNSArIDIwKSxcclxuXHRcdFx0XHR5OiBTdHJpbmcodW5pdCAqIDE2KSxcclxuXHRcdFx0XHR3aWR0aDogXCI1MFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCI1MFwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJzdGF0aWMvdGFvYmFvX2ljb24ucG5nXCIsXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHRyZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRidWlsZEZ1bGxzY3JlZW46IGJ1aWxkRnVsbHNjcmVlbixcclxuXHRidWlsZEFsZXJ0OiBidWlsZEFsZXJ0LFxyXG5cdGJ1aWxkU2hlZXQ6IGJ1aWxkU2hlZXQsXHJcblx0YnVpbGRGdWxsc2NyZWVuQW5kSW1hZ2VCZzogYnVpbGRGdWxsc2NyZWVuQW5kSW1hZ2VCZyxcclxuXHRidWlsZEFsZXJ0QW5kSW1hZ2VCZzogYnVpbGRBbGVydEFuZEltYWdlQmcsXHJcblx0YnVpbGRTaGVldEFuZEdpZkJnOiBidWlsZFNoZWV0QW5kR2lmQmcsXHJcblx0YnVpbGRGdWxsc2NyZWVuQW5kV2Vidmlld0JnOiBidWlsZEZ1bGxzY3JlZW5BbmRXZWJ2aWV3QmcsXHJcblx0YnVpbGRGdWxsc2NyZWVuQW5kV2VleFZpZXdCZzogYnVpbGRGdWxsc2NyZWVuQW5kV2VleFZpZXdCZyxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/uni-stat.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 获取系统信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */
var sys = uni.getSystemInfoSync();

// 访问开始即启动小程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、在新的来源打开小程序；
var STAT_VERSION = "3.6.4";
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800; // 页面在前台无操作结束访问时间 单位s
var APP_PVER_TIME = 300; // 应用在后台结束访问时间 单位s
var OPERATING_TIME = 10; // 数据上报时间 单位s
var DIFF_TIME = 60 * 1000 * 60 * 24;

// 获取 manifest.json 中统计配置
var uniStatisticsConfig = {"enable":true};
var statConfig = {
  appid: "__UNI__4B0C5D0" };

var titleJsons = {};
var debug =  false || false;






// eslint-disable-next-line no-restricted-globals
var pagesTitle = __webpack_require__(/*! uni-pages?{"type":"style"} */ 21).default;
var pagesData = pagesTitle.pages;
for (var i in pagesData) {var _style$navigationBar;
  var style = pagesData[i];
  var titleText =
  // MP
  style.navigationBarTitleText ||
  // ali
  style.defaultTitle || (
  // H5 || App
  (_style$navigationBar = style.navigationBar) === null || _style$navigationBar === void 0 ? void 0 : _style$navigationBar.titleText) ||
  '';
  if (titleText) {
    titleJsons[i] = titleText;
  }
}


// TODO 在云函数中获取，暂时注释
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';
function getUuid() {
  var uuid = '';
  if (get_platform_name() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var get_uuid = function get_uuid(statData) {
  // 有可能不存在 deviceId（一般不存在就是出bug了），就自己生成一个
  return sys.deviceId || getUuid();
};

/**
    * 获取配置信息 如 appid
    */
var stat_config = statConfig;

var get_sgin = function get_sgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }

  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var get_encodeURIComponent_options = function get_encodeURIComponent_options(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

/**
    * 获取当前平台
    * 移动端  : 'n',
    * h5	  : 'h5',
    * 微信	  : 'wx',
    * 阿里	  : 'ali',
    * 百度	  : 'bd',
    * 头条	  : 'tt',
    * qq	  : 'qq',
    * 快应用  : 'qn',
    * 快手	  : 'ks',
    * 飞书	  : 'lark',
    * 快应用  : 'qw',
    * 钉钉	  : 'dt'
    */
var get_platform_name = function get_platform_name() {var _platformList;
  // 苹果审核代码中禁止出现 alipay 字样 ，需要特殊处理一下
  var aliArr = ['y', 'a', 'p', 'mp-ali'];
  var platformList = (_platformList = {
    app: 'n',
    'app-plus': 'n',
    h5: 'h5',
    'mp-weixin': 'wx' }, _defineProperty(_platformList,
  aliArr.reverse().join(''), 'ali'), _defineProperty(_platformList,
  'mp-baidu', 'bd'), _defineProperty(_platformList,
  'mp-toutiao', 'tt'), _defineProperty(_platformList,
  'mp-qq', 'qq'), _defineProperty(_platformList,
  'quickapp-native', 'qn'), _defineProperty(_platformList,
  'mp-kuaishou', 'ks'), _defineProperty(_platformList,
  'mp-lark', 'lark'), _defineProperty(_platformList,
  'quickapp-webview', 'qw'), _platformList);

  if (platformList["app-plus"] === 'ali') {
    if (my && my.env) {
      var clientName = my.env.clientName;
      if (clientName === 'ap') return 'ali';
      if (clientName === 'dingtalk') return 'dt';
      // TODO 缺少 ali 下的其他平台
    }
  }
  return platformList["app-plus"];
};

/**
    * 获取小程序 appid
    */
var get_pack_name = function get_pack_name() {
  var packName = '';
  if (get_platform_name() === 'wx' || get_platform_name() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  if (get_platform_name() === 'n') ;
  return packName;
};

/**
    * 应用版本
    */
var get_version = function get_version() {
  return get_platform_name() === 'n' ? plus.runtime.version : '';
};

/**
    * 获取渠道
    */
var get_channel = function get_channel() {
  var platformName = get_platform_name();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

/**
    * 获取小程序场景值
    * @param {Object} options 页面信息
    */
var get_scene = function get_scene(options) {
  var platformName = get_platform_name();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};

/**
    * 获取拼接参数
    */
var get_splicing = function get_splicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

/**
    * 获取页面url，不包含参数
    */
var get_route$1 = function get_route$1(pageVm) {
  var _self = pageVm || get_page_vm();
  if (get_platform_name() === 'bd') {
    var mp_route = _self.$mp && _self.$mp.page && _self.$mp.page.is;
    var scope_route = _self.$scope && _self.$scope.is;
    return mp_route || scope_route || '';
  } else {
    return (
      _self.route ||
      _self.$scope && _self.$scope.route ||
      _self.$mp && _self.$mp.page.route);

  }
};

/**
    * 获取页面url, 包含参数
    */
var get_page_route = function get_page_route(pageVm) {
  // 从 app 进入应用 ，没有 $page ,获取不到路由 ，需要获取页面 尝试从 getCurrentPages 获取也页面实例
  // FIXME 尽量不使用 getCurrentPages ，大部分获取路由是从 onHide 获取 ，这时可以获取到，如果是 onload ,则可能获取不到，比如 百度

  var page = pageVm && (pageVm.$page || pageVm.$scope && pageVm.$scope.$page);
  var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
  if (!page) return lastPageRoute || '';
  // 如果找不到 fullPath 就取 route 的值
  return page.fullPath === '/' ? page.route : page.fullPath || page.route;
};

/**
    * 获取页面实例
    */
var get_page_vm = function get_page_vm() {
  var pages = getCurrentPages();
  var $page = pages[pages.length - 1];
  if (!$page) return null;
  return $page.$vm;
};

/**
    * 获取页面类型
    */
var get_page_types = function get_page_types(self) {
  // XXX 百度有问题 ，获取的都是 componet ,等待修复
  if (
  self.mpType === 'page' ||
  self.$mpType === 'page' ||
  self.$mp && self.$mp.mpType === 'page' ||
  self.$options.mpType === 'page')
  {
    return 'page';
  }
  if (
  self.mpType === 'app' ||
  self.$mpType === 'app' ||
  self.$mp && self.$mp.mpType === 'app' ||
  self.$options.mpType === 'app')
  {
    return 'app';
  }
  return null;
};

/**
    * 处理上报参数
    * @param {Object}  需要处理的数据
    */
var handle_data = function handle_data(statData) {
  var firstArr = [];
  var contentArr = [];
  var lastArr = [];var _loop = function _loop(
  _i) {
    var rd = statData[_i];
    rd.forEach(function (elm) {
      var newData = '';
      {
        newData = get_splicing(elm);
      }
      if (_i === 0) {
        firstArr.push(newData);
      } else if (_i === 3) {
        lastArr.push(newData);
      } else {
        contentArr.push(newData);
      }
    });};for (var _i in statData) {_loop(_i);
  }

  firstArr.push.apply(firstArr, contentArr.concat(lastArr));
  // 参数需要处理成字符串，方便上传
  return JSON.stringify(firstArr);
};

/**
    * 自定义事件参数校验
    */
var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report Missing [eventName] parameter");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] Parameter type error, it can only be of type String");


    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] Parameter length cannot be greater than 255");


    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error(
    'uni.report [options] Parameter type error, Only supports String or Object type');

    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] Parameter length cannot be greater than 255");


    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error("uni.report [eventName] When the parameter is title, the [options] parameter can only be of type String");


    return true;
  }
};

var get_page_name = function get_page_name(routepath) {
  return titleJsons && titleJsons[routepath] || '';
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var is_report_data = function is_report_data() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref) {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2) {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }
  });
};

var requestData = function requestData(done) {
  var appid = "__UNI__4B0C5D0";
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var
      data = res.data;
      if (data.ret === 0) {
        typeof done === 'function' &&
        done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' &&
      done({
        enable: report_status_code });

    } });

};

/**
    * 是否开启 debug 模式
    */
var is_debug = debug;

/**
                       * 日志输出
                       * @param {*} data
                       */
var log = function log(data, type) {
  var msg_type = '';
  switch (data.lt) {
    case '1':
      msg_type = '应用启动';
      break;
    case '3':
      msg_type = '应用进入后台';
      break;

    case '11':
      msg_type = '页面切换';
      break;
    case '21':
      msg_type = '事件触发';
      break;
    case '31':
      msg_type = '应用错误';
      break;
    case '101':
      msg_type = 'PUSH';
      break;}



  // 在 app 中，日志转为 字符串
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }


  if (type) {
    console.log("=== \u7EDF\u8BA1\u961F\u5217\u6570\u636E\u4E0A\u62A5 ===");
    console.log(data);
    console.log("=== \u4E0A\u62A5\u7ED3\u675F ===");
    return;
  }

  if (msg_type) {
    console.log("=== \u7EDF\u8BA1\u6570\u636E\u91C7\u96C6\uFF1A".concat(msg_type, " ==="));
    console.log(data);
    console.log("=== \u91C7\u96C6\u7ED3\u675F ===");
  }
};

/**
    * 获取上报时间间隔
    * @param {*} defaultTime 默认上报间隔时间 单位s
    */
var get_report_Interval = function get_report_Interval(defaultTime) {
  var time = uniStatisticsConfig.reportInterval;
  // 如果上报时间配置为0 相当于立即上报
  if (Number(time) === 0) return 0;
  time = time || defaultTime;
  var reg = /(^[1-9]\d*$)/;
  // 如果不是整数，则默认为上报间隔时间
  if (!reg.test(time)) return defaultTime;
  return Number(time);
};

/**
    * 获取隐私协议配置
    */
var is_push_clientid = function is_push_clientid() {
  if (uniStatisticsConfig.collectItems) {
    var ClientID = uniStatisticsConfig.collectItems.uniPushClientID;
    return typeof ClientID === 'boolean' ? ClientID : false;
  }
  return false;
};

var appid = "__UNI__4B0C5D0"; // 做应用隔离
var dbSet = function dbSet(name, value) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};

  if (!data) {
    data = {};
  }
  data[name] = value;
  uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
};

var dbGet = function dbGet(name) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};
  if (!data[name]) {
    var dbdata = uni.getStorageSync('$$STAT__DBDATA:' + appid);
    if (!dbdata) {
      dbdata = {};
    }
    if (!dbdata[name]) {
      return undefined;
    }
    data[name] = dbdata[name];
  }
  return data[name];
};

var dbRemove = function dbRemove(name) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};
  if (data[name]) {
    delete data[name];
    uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
  } else {
    data = uni.getStorageSync('$$STAT__DBDATA:' + appid);
    if (data[name]) {
      delete data[name];
      uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
    }
  }
};

// 首次访问时间
var FIRST_VISIT_TIME_KEY = '__first__visit__time';
// 最后访问时间
var LAST_VISIT_TIME_KEY = '__last__visit__time';
/**
                                                  * 获取当前时间
                                                  */
var get_time = function get_time() {
  return parseInt(new Date().getTime() / 1000);
};

/**
    * 获取首次访问时间
    */
var get_first_visit_time = function get_first_visit_time() {
  var timeStorge = dbGet(FIRST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = get_time();
    dbSet(FIRST_VISIT_TIME_KEY, time);
    // 首次访问需要 将最后访问时间置 0
    dbRemove(LAST_VISIT_TIME_KEY);
  }
  return time;
};

/**
    * 最后访问时间
    */
var get_last_visit_time = function get_last_visit_time() {
  var timeStorge = dbGet(LAST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  }
  dbSet(LAST_VISIT_TIME_KEY, get_time());
  return time;
};

// 页面停留时间记录key
var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_Residence_Time = 0;
var Last_Page_Residence_Time = 0;

/**
                                   * 设置页面停留时间
                                   */
var set_page_residence_time = function set_page_residence_time() {
  First_Page_Residence_Time = get_time();
  dbSet(PAGE_RESIDENCE_TIME, First_Page_Residence_Time);
  return First_Page_Residence_Time;
};

/**
    * 获取页面停留时间
    */
var get_page_residence_time = function get_page_residence_time() {
  Last_Page_Residence_Time = get_time();
  First_Page_Residence_Time = dbGet(PAGE_RESIDENCE_TIME);
  return Last_Page_Residence_Time - First_Page_Residence_Time;
};

/**
    * 获取总访问次数
    */
var TOTAL_VISIT_COUNT = '__total__visit__count';
var get_total_visit_count = function get_total_visit_count() {
  var timeStorge = dbGet(TOTAL_VISIT_COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  dbSet(TOTAL_VISIT_COUNT, count);
  return count;
};


var FIRST_TIME = '__first_time';
/**
                                  * 设置页面首次访问时间，用户获取页面/应用停留时常
                                  */
var set_first_time = function set_first_time() {
  var time = new Date().getTime();
  var timeStorge = dbSet(FIRST_TIME, time);
  return timeStorge;
};

/**
    * 获取最后一次时间 ，暂时用不到，直接获取当前时间即可
    */
// export const get_last_time = () => {
// 	let time = new Date().getTime()
// 	Set__Last__Time = time
// 	return time
// }

/**
 * 获取页面 \ 应用停留时间
 */
var get_residence_time = function get_residence_time(type) {
  var residenceTime = 0;
  var first_time = dbGet(FIRST_TIME);
  var last_time = get_time();
  if (first_time !== 0) {
    residenceTime = last_time - first_time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }
  return {
    residenceTime: residenceTime };

};

var eport_Interval = get_report_Interval(OPERATING_TIME);
// 统计数据默认值
var statData = {
  uuid: get_uuid(), // 设备标识
  ak: stat_config.appid, // uni-app 应用 Appid
  p: sys.platform === 'android' ? 'a' : 'i', // 手机系统
  ut: get_platform_name(), // 平台类型
  mpn: get_pack_name(), // 原生平台包名、小程序 appid
  usv: STAT_VERSION, // 统计 sdk 版本
  v: get_version(), // 应用版本，仅app
  ch: get_channel(), // 渠道信息
  cn: '', // 国家
  pn: '', // 省份
  ct: '', // 城市
  t: get_time(), // 上报数据时的时间戳
  tt: '',
  brand: sys.brand || '', // 手机品牌
  md: sys.model, // 手机型号
  sv: sys.system.replace(/(Android|iOS)\s/, ''), // 手机系统版本
  mpsdk: sys.SDKVersion || '', // x程序 sdk version
  mpv: sys.version || '', // 小程序平台版本 ，如微信、支付宝
  lang: sys.language, // 语言
  pr: sys.pixelRatio, // pixelRatio 设备像素比
  ww: sys.windowWidth, // windowWidth 可使用窗口宽度
  wh: sys.windowHeight, // windowHeight 可使用窗口高度
  sw: sys.screenWidth, // screenWidth 屏幕宽度
  sh: sys.screenHeight // screenHeight 屏幕高度
};var
Report = /*#__PURE__*/function () {"use strict";
  function Report() {_classCallCheck(this, Report);
    // 页面实例
    this.self = '';
    // 进入应用标识
    this.__licationShow = false;
    // 离开应用标识
    this.__licationHide = false;
    // 统计默认值
    this.statData = statData;
    // 标题默认值
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };


    // 页面参数
    this._query = {};
    // 页面最后停留页面的 url
    // this._lastPageRoute = ''

    // 注册拦截器
    var registerInterceptor = typeof uni.addInterceptor === 'function';
    if (registerInterceptor) {
      this.addInterceptorInit();
      this.interceptLogin();
      this.interceptShare(true);
      this.interceptRequestPayment();
    }
  }_createClass(Report, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "_login", value: function _login()

    {
      this.sendEventRequest(
      {
        key: 'login' },

      0);

    } }, { key: "_share", value: function _share()

    {
      this.sendEventRequest(
      {
        key: 'share' },

      0);

    } }, { key: "_payment", value: function _payment(
    key) {
      this.sendEventRequest(
      {
        key: key },

      0);

    }

    /**
       * 进入应用触发
       */ }, { key: "applicationShow", value: function applicationShow()
    {
      // 通过 __licationHide 判断保证是进入后台后在次进入应用，避免重复上报数据
      if (this.__licationHide) {
        var time = get_residence_time('app');
        // 需要判断进入后台是否超过时限 ，默认是 30min ，是的话需要执行进入应用的上报
        if (time.overtime) {
          var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
          var options = {
            path: lastPageRoute,
            scene: this.statData.sc,
            cst: 2 };

          this.sendReportRequest(options);
        }
        // 状态重置
        this.__licationHide = false;
      }
    }

    /**
       * 离开应用触发
       * @param {Object} self
       * @param {Object} type
       */ }, { key: "applicationHide", value: function applicationHide(
    self, type) {
      if (!self) {
        // 表示应用切换到后台 ，此时需要从页面栈获取页面实例
        self = get_page_vm();
      }
      // 进入应用后台保存状态，方便进入前台后判断是否上报应用数据
      this.__licationHide = true;
      var time = get_residence_time();
      var route = get_page_route(self);
      uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
      this.sendHideRequest(
      {
        urlref: route,
        urlref_ts: time.residenceTime },

      type);

      // 更新页面首次访问时间
      set_first_time();
    }

    /**
       * 进入页面触发
       */ }, { key: "pageShow", value: function pageShow(
    self) {
      // 清空值 ，初始化 ，避免污染后面的上报数据
      this._navigationBarTitle = {
        config: '',
        page: '',
        report: '',
        lt: '' };


      var route = get_page_route(self);
      var routepath = get_route$1(self);

      this._navigationBarTitle.config = get_page_name(routepath);
      // 表示应用触发 ，页面切换不触发之后的逻辑
      if (this.__licationShow) {
        // 更新页面首次访问时间
        set_first_time();
        // this._lastPageRoute = route
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.__licationShow = false;
        return;
      }

      var time = get_residence_time('page');
      // 停留时间
      if (time.overtime) {
        var options = {
          path: route,
          scene: this.statData.sc,
          cst: 3 };

        this.sendReportRequest(options);
      }
      // 更新页面首次访问时间
      set_first_time();
    }

    /**
       * 离开页面触发
       */ }, { key: "pageHide", value: function pageHide(
    self) {
      if (!this.__licationHide) {
        var time = get_residence_time('page');
        var route = get_page_route(self);
        var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
        if (!lastPageRoute) {
          lastPageRoute = route;
        }
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.sendPageRequest({
          url: route,
          urlref: lastPageRoute,
          urlref_ts: time.residenceTime });

        // this._lastPageRoute = route
        return;
      }
    }

    /**
       * 发送请求,应用维度上报
       * @param {Object} options 页面信息
       * @param {Boolean} type 是否立即上报
       */ }, { key: "sendReportRequest", value: function sendReportRequest(
    options, type) {
      this._navigationBarTitle.lt = '1';
      this._navigationBarTitle.config = get_page_name(options.path);
      var is_opt = options.query && JSON.stringify(options.query) !== '{}';
      var query = is_opt ? '?' + JSON.stringify(options.query) : '';
      Object.assign(this.statData, {
        lt: '1',
        url: options.path + query || '',
        t: get_time(),
        sc: get_scene(options.scene),
        fvts: get_first_visit_time(),
        lvts: get_last_visit_time(),
        tvc: get_total_visit_count(),
        // create session type  上报类型 ，1 应用进入 2.后台30min进入 3.页面30min进入
        cst: options.cst || 1 });

      if (get_platform_name() === 'n') {
        this.getProperty(type);
      } else {
        this.getNetworkInfo(type);
      }
    }

    /**
       * 发送请求,页面维度上报
       * @param {Object} opt
       */ }, { key: "sendPageRequest", value: function sendPageRequest(
    opt) {var
      url = opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time() };

      this.request(options);
    }

    /**
       * 进入后台上报数据
       * @param {Object} opt
       * @param {Object} type
       */ }, { key: "sendHideRequest", value: function sendHideRequest(
    opt, type) {var
      urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time() };

      this.request(options, type);
    }

    /**
       * 自定义事件上报
       */ }, { key: "sendEventRequest", value: function sendEventRequest()
    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? '' : _ref3$value;
      var routepath = '';

      try {
        routepath = get_route$1();
      } catch (error) {
        var launch_options = dbGet('__launch_options');
        routepath = launch_options.path;
      }

      this._navigationBarTitle.config = get_page_name(routepath);
      this._navigationBarTitle.lt = '21';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '21',
        ut: this.statData.ut,
        url: routepath,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: get_time() };

      this.request(options);
    } }, { key: "sendPushRequest", value: function sendPushRequest(

    options, cid) {var _this = this;
      var time = get_time();

      var statData = {
        lt: '101',
        cid: cid,
        t: time,
        ut: this.statData.ut };


      // debug 打印打点信息
      if (is_debug) {
        log(statData);
      }

      var stat_data = handle_data({
        101: [statData] });

      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: stat_data };


      {
        if (statData.ut === 'h5') {
          this.imageRequest(optionsData);
          return;
        }
      }

      // XXX 安卓需要延迟上报 ，否则会有未知错误，需要验证处理
      if (get_platform_name() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this.sendRequest(optionsData);
        }, 200);
        return;
      }

      this.sendRequest(optionsData);
    }

    /**
       * 获取wgt资源版本
       */ }, { key: "getProperty", value: function getProperty(
    type) {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo(type);
      });
    }

    /**
       * 获取网络信息
       */ }, { key: "getNetworkInfo", value: function getNetworkInfo(
    type) {var _this3 = this;
      uni.getNetworkType({
        success: function success(result) {
          _this3.statData.net = result.networkType;
          _this3.getLocation(type);
        } });

    }

    /**
       * 获取位置信息
       */ }, { key: "getLocation", value: function getLocation(
    type) {var _this4 = this;
      if (stat_config.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this4.statData.cn = result.address.country;
              _this4.statData.pn = result.address.province;
              _this4.statData.ct = result.address.city;
            }

            _this4.statData.lat = result.latitude;
            _this4.statData.lng = result.longitude;
            _this4.request(_this4.statData, type);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData, type);
      }
    }

    /**
       * 发送请求
       * @param {Object} data 上报数据
       * @param {Object} type 类型
       */ }, { key: "request", value: function request(
    data, type) {var _this5 = this;
      var time = get_time();
      var title = this._navigationBarTitle;
      Object.assign(data, {
        ttn: title.page,
        ttpj: title.config,
        ttc: title.report });


      var uniStatData = dbGet('__UNI__STAT__DATA') || {};
      if (!uniStatData[data.lt]) {
        uniStatData[data.lt] = [];
      }
      // 加入队列
      uniStatData[data.lt].push(data);
      dbSet('__UNI__STAT__DATA', uniStatData);

      var page_residence_time = get_page_residence_time();
      // debug 打印打点信息
      if (is_debug) {
        log(data);
      }
      // 判断时候到达上报时间 ，默认 10 秒上报
      if (page_residence_time < eport_Interval && !type) return;

      // 时间超过，重新获取时间戳
      set_page_residence_time();
      var stat_data = handle_data(uniStatData);
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: stat_data };


      // 重置队列
      dbRemove('__UNI__STAT__DATA');

      {
        if (data.ut === 'h5') {
          this.imageRequest(optionsData);
          return;
        }
      }

      // XXX 安卓需要延迟上报 ，否则会有未知错误，需要验证处理
      if (get_platform_name() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this5.sendRequest(optionsData);
        }, 200);
        return;
      }

      this.sendRequest(optionsData);
    } }, { key: "getIsReportData", value: function getIsReportData()

    {
      return is_report_data();
    }

    /**
       * 数据上报
       * @param {Object} optionsData 需要上报的数据
       */ }, { key: "sendRequest", value: function sendRequest(
    optionsData) {var _this6 = this;

      {
        this.getIsReportData().then(function () {
          uni.request({
            url: STAT_URL,
            method: 'POST',
            data: optionsData,
            success: function success() {
              if (is_debug) {
                log(optionsData, true);
              }
            },
            fail: function fail(e) {
              if (++_this6._retry < 3) {
                if (is_debug) {
                  console.warn('=== 统计上报错误，尝试重新上报！');
                  console.error(e);
                }
                setTimeout(function () {
                  _this6.sendRequest(optionsData);
                }, 1000);
              }
            } });

        });
      }
    }

    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = get_sgin(get_encodeURIComponent_options(data)).options;
        image.src = STAT_H5_URL + '?' + options;
        if (is_debug) {
          log(data, true);
        }
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this.sendEventRequest(
      {
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },

      1);

    } }]);return Report;}();var


Stat = /*#__PURE__*/function (_Report) {"use strict";_inherits(Stat, _Report);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!uni.__stat_instance) {
        uni.__stat_instance = new Stat();
      }

      return uni.__stat_instance;
    } }]);
  function Stat() {_classCallCheck(this, Stat);return _super.call(this);

  }

  /**
     * 获取推送id
     */_createClass(Stat, [{ key: "pushEvent", value: function pushEvent(
    options) {var _this7 = this;
      var ClientID = is_push_clientid();
      if (uni.getPushClientId && ClientID) {
        uni.getPushClientId({
          success: function success(res) {
            var cid = res.cid || false;
            //  只有获取到才会上传
            if (cid) {
              _this7.sendPushRequest(options, cid);
            }
          } });

      }
    }

    /**
       * 进入应用
       * @param {Object} options 页面参数
       * @param {Object} self	当前页面实例
       */ }, { key: "launch", value: function launch(
    options, self) {
      // 初始化页面停留时间  start
      set_page_residence_time();
      this.__licationShow = true;
      dbSet('__launch_options', options);
      // 应用初始上报参数为1
      options.cst = 1;
      this.sendReportRequest(options, true);
    } }, { key: "load", value: function load(
    options, self) {
      this.self = self;
      this._query = options;
    } }, { key: "appHide", value: function appHide(

    self) {
      this.applicationHide(self, true);
    } }, { key: "appShow", value: function appShow(

    self) {
      this.applicationShow(self);
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageShow(self);
      }










      if (get_page_types(self) === 'app') {
        this.appShow();
      }

    } }, { key: "hide", value: function hide(

    self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageHide(self);
      }










      if (get_page_types(self) === 'app') {
        this.appHide();
      }

    } }, { key: "error", value: function error(

    em) {
      // 开发工具内不上报错误
      // if (this._platform === 'devtools') {
      //   if (process.env.NODE_ENV === 'development') {
      //     console.info('当前运行环境为开发者工具，不上报数据。')
      //     return
      //   }
      // }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }

      var route = '';
      try {
        route = get_route();
      } catch (e) {
        // 未获取到页面路径
        route = '';
      }

      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '31',
        url: route,
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: parseInt(new Date().getTime() / 1000) };

      this.request(options);
    } }]);return Stat;}(Report);

var Stat$1 = Stat;

var stat = Stat$1.getInstance();

// 用于判断是隐藏页面还是卸载页面
var isHide = false;

var lifecycle = {
  onLaunch: function onLaunch(options) {
    // 进入应用上报数据
    stat.launch(options, this);
    // 上报push推送id
    stat.pushEvent(options);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


// 加载统计代码
function load_stat() {



















  // eslint-disable-next-line no-restricted-globals
  var Vue = __webpack_require__(/*! vue */ 22);
  (Vue.default || Vue).mixin(lifecycle);
  uni.report = function (type, options) {
    stat.sendEvent(type, options);
  };

}

function main() {
  if (is_debug) {
    {

      console.log('=== uni统计开启,version:1.0 ===');

    }
    load_stat();
  } else {
    if (true) {
      uni.report = function (type, options) {};
    } else {}
  }
}

main();

/***/ }),
/* 21 */
/*!***********************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/pages.json?{"type":"style"} ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": {}, "globalStyle": {} };exports.default = _default;

/***/ }),
/* 22 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 23 */
/*!***************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/App.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdUs7QUFDdkssZ0JBQWdCLHVMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!****************************************************************!*\
  !*** D:/Project/阿里云号码认证SDK示例/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../Hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 25);\n/* harmony import */ var _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStpQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vSGJ1aWxkZXJ4L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL0hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi9IYnVpbGRlcngvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/阿里云号码认证SDK示例/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n//初始化\nvar aLiSDKModule = uni.requireNativePlugin('AliCloud-NirvanaPns');var _default =\n{\n  onLaunch: function onLaunch() {\n    var platform = uni.getSystemInfoSync().platform;\n    var sdkInfo = '';\n    //设置秘钥\n    if (platform == 'android') {\n      //开启SDK日志打印\n      aLiSDKModule.setLoggerEnable(true);\n      sdkInfo = '7KHffk2Cn1j17+QVA2zbJfdDteDSUDspB/s+FUoAhyXmQ/wueAQBcpMDOVLrp5lt5BDIGxDrCuTBZk7TcR4CxAQvHnJUPIaCI5dscbBFqHgHVI8Yoy0nYwsFo8Gyd2RZ6MbUAZr3lsnPQsA+UW1MZY9EP94x0TrXmwEJkU5xJgmOJfCSekYWHP5xNc0as/aWkTmNrjFyb5//93cAMwQllH0FFEFF+GEd7XMvm6ap/g4BD8676+z29MbePXPjoY6u3VrNTMkksQHW1EolxJkw+9Sa5pDsdOrQjXBz056J79PpNAFlTvPMZw==';\n    } else if (platform == 'ios') {\n      sdkInfo = 'kN/kJyM9prpJylbonn44x9VcVHM/xj94KaCSgxVJeWLN/7Vkv04f//7dQ+wJX2eOCNuy6sW4xAUPLLVu4ktbPlx40Z7gL5EIrwEcd+XNkjJCpZVD1ksiv8GT5vmhLPLSYtO9hikCnN4YrKEye99JB33ildDCoKY6h/a50VmuP2GHeMMjdlN99ztDb6lUlv34sKKXgCge35/oESpSqKJU8k8m9an8EGbCGmOVRVSkIByNMDMyniMw9af+R/8Iewe2l8MpgSlfqeNhKjU0T2BFh0l2rLSbSUwB';\n    }\n    aLiSDKModule.setAuthSDKInfo(sdkInfo);\n\n    __f__(\"log\", 'App Launch', \" at App.vue:18\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJhTGlTREtNb2R1bGUiLCJ1bmkiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwib25MYXVuY2giLCJwbGF0Zm9ybSIsImdldFN5c3RlbUluZm9TeW5jIiwic2RrSW5mbyIsInNldExvZ2dlckVuYWJsZSIsInNldEF1dGhTREtJbmZvIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQUosQ0FBd0IscUJBQXhCLENBQXJCLEM7QUFDZTtBQUNkQyxVQUFRLEVBQUUsb0JBQVc7QUFDcEIsUUFBSUMsUUFBUSxHQUFHSCxHQUFHLENBQUNJLGlCQUFKLEdBQXdCRCxRQUF2QztBQUNBLFFBQUlFLE9BQU8sR0FBRyxFQUFkO0FBQ0E7QUFDQSxRQUFHRixRQUFRLElBQUksU0FBZixFQUF5QjtBQUN4QjtBQUNBSixrQkFBWSxDQUFDTyxlQUFiLENBQTZCLElBQTdCO0FBQ0FELGFBQU8sR0FBRywwVEFBVjtBQUNBLEtBSkQsTUFJTSxJQUFHRixRQUFRLElBQUksS0FBZixFQUFxQjtBQUMxQkUsYUFBTyxHQUFHLGtTQUFWO0FBQ0E7QUFDRE4sZ0JBQVksQ0FBQ1EsY0FBYixDQUE0QkYsT0FBNUI7O0FBRUEsaUJBQVksWUFBWjtBQUNBLEdBZmEsRSIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy/liJ3lp4vljJZcbmNvbnN0IGFMaVNES01vZHVsZSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdBbGlDbG91ZC1OaXJ2YW5hUG5zJyk7XG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRsZXQgcGxhdGZvcm0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybTtcblx0XHRsZXQgc2RrSW5mbyA9ICcnO1xuXHRcdC8v6K6+572u56eY6ZKlXG5cdFx0aWYocGxhdGZvcm0gPT0gJ2FuZHJvaWQnKXtcblx0XHRcdC8v5byA5ZCvU0RL5pel5b+X5omT5Y2wXG5cdFx0XHRhTGlTREtNb2R1bGUuc2V0TG9nZ2VyRW5hYmxlKHRydWUpO1xuXHRcdFx0c2RrSW5mbyA9ICc3S0hmZmsyQ24xajE3K1FWQTJ6YkpmZER0ZURTVURzcEIvcytGVW9BaHlYbVEvd3VlQVFCY3BNRE9WTHJwNWx0NUJESUd4RHJDdVRCWms3VGNSNEN4QVF2SG5KVVBJYUNJNWRzY2JCRnFIZ0hWSThZb3kwbll3c0ZvOEd5ZDJSWjZNYlVBWnIzbHNuUFFzQStVVzFNWlk5RVA5NHgwVHJYbXdFSmtVNXhKZ21PSmZDU2VrWVdIUDV4TmMwYXMvYVdrVG1OcmpGeWI1Ly85M2NBTXdRbGxIMEZGRUZGK0dFZDdYTXZtNmFwL2c0QkQ4Njc2K3oyOU1iZVBYUGpvWTZ1M1ZyTlRNa2tzUUhXMUVvbHhKa3crOVNhNXBEc2RPclFqWEJ6MDU2Sjc5UHBOQUZsVHZQTVp3PT0nO1xuXHRcdH1lbHNlIGlmKHBsYXRmb3JtID09ICdpb3MnKXtcblx0XHRcdHNka0luZm8gPSAna04va0p5TTlwcnBKeWxib25uNDR4OVZjVkhNL3hqOTRLYUNTZ3hWSmVXTE4vN1ZrdjA0Zi8vN2RRK3dKWDJlT0NOdXk2c1c0eEFVUExMVnU0a3RiUGx4NDBaN2dMNUVJcndFY2QrWE5rakpDcFpWRDFrc2l2OEdUNXZtaExQTFNZdE85aGlrQ25ONFlyS0V5ZTk5SkIzM2lsZERDb0tZNmgvYTUwVm11UDJHSGVNTWpkbE45OXp0RGI2bFVsdjM0c0tLWGdDZ2UzNS9vRVNwU3FLSlU4azhtOWFuOEVHYkNHbU9WUlZTa0lCeU5NRE15bmlNdzlhZitSLzhJZXdlMmw4TXBnU2xmcWVOaEtqVTBUMkJGaDBsMnJMU2JTVXdCJztcblx0XHR9XG5cdFx0YUxpU0RLTW9kdWxlLnNldEF1dGhTREtJbmZvKHNka0luZm8pO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJyk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ })
],[[0,"app-config"]]]);