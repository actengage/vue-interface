module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0097":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f057';
var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimesCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "0649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c26");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "09d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d5d1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0b35":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'far';
var iconName = 'image';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f03e';
var svgPathData = 'M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faImage = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "0c26":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0cf3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1187":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnFile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("868f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnFile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnFile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnFile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "118b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropzone_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("39c6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropzone_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropzone_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropzone_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1790":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardProgress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c320");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardProgress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardProgress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardProgress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "17db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7667");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1b45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b0f2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1c0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2277":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("72ba");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2651":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("89cf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2868":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'exclamation';
var width = 192;
var height = 512;
var ligatures = [];
var unicode = 'f12a';
var svgPathData = 'M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faExclamation = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "28a0":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "2cfd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f30e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3022":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = Object({"NODE_ENV":"production","BASE_URL":"/"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("d60a");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("28a0");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("f28c")))

/***/ }),

/***/ "3662":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "39c6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a79":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "40e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4342":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4aa7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'file-video';
var width = 384;
var height = 512;
var ligatures = [];
var unicode = 'f1c8';
var svgPathData = 'M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM224 136V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248c-13.2 0-24-10.8-24-24zm96 144.016v111.963c0 21.445-25.943 31.998-40.971 16.971L224 353.941V392c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V280c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v38.059l55.029-55.013c15.011-15.01 40.971-4.491 40.971 16.97z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faFileVideo = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "4ab7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightSwitchField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4dae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightSwitchField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightSwitchField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightSwitchField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4c54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f111';
var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "4dae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5030":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8653");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "51d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e6f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5965":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5d01":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'certificate';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f0a3';
var svgPathData = 'M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCertificate = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "5e6f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "601e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimateCss_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb3e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimateCss_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimateCss_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimateCss_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "622d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5965");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "665e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "67e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6a5f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'long-arrow-alt-left';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f30a';
var svgPathData = 'M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faLongArrowAltLeft = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "6d3e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "721f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "72ba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7315":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7667":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b304");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7d27":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8015":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'long-arrow-alt-right';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f30b';
var svgPathData = 'M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faLongArrowAltRight = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "82d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("67e2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8560":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'exclamation-triangle';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f071';
var svgPathData = 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faExclamationTriangle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "8653":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "868f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "89cf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8f89":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "906a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ed4e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9791":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f89");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9cb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'sort-down';
var width = 320;
var height = 512;
var ligatures = [];
var unicode = 'f0dd';
var svgPathData = 'M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSortDown = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "9e0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a2a7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'file-alt';
var width = 384;
var height = 512;
var ligatures = [];
var unicode = 'f15c';
var svgPathData = 'M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faFileAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "a3c2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a5b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d3e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "abe7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3662");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ad3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontAwesomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FontAwesomeLayers; });
/* unused harmony export FontAwesomeLayersText */
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ecee");


var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (false) {} else if ( true && module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    acc[prop] = value;

    return acc;
  }, {});
}

function classToObject(cls) {
  return cls.split(/\s+/).reduce(function (acc, c) {
    acc[c] = true;

    return acc;
  }, {});
}

function combineClassObjects() {
  for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return objs.reduce(function (acc, obj) {
    if (Array.isArray(obj)) {
      acc = acc.concat(obj);
    } else {
      acc.push(obj);
    }

    return acc;
  }, []);
}

function convert(h, element) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var children = (element.children || []).map(convert.bind(null, h));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc['class'] = classToObject(val);
        break;
      case 'style':
        acc['style'] = styleToObject(val);
        break;
      default:
        acc.attrs[key] = val;
    }

    return acc;
  }, { 'class': {}, style: {}, attrs: {} });

  var _data$class = data.class,
      dClass = _data$class === undefined ? {} : _data$class,
      _data$style = data.style,
      dStyle = _data$style === undefined ? {} : _data$style,
      _data$attrs = data.attrs,
      dAttrs = _data$attrs === undefined ? {} : _data$attrs,
      remainingData = objectWithoutProperties(data, ['class', 'style', 'attrs']);


  if (typeof element === 'string') {
    return element;
  } else {
    return h(element.tag, _extends({
      class: combineClassObjects(mixins.class, dClass),
      style: _extends({}, mixins.style, dStyle),
      attrs: _extends({}, mixins.attrs, dAttrs)
    }, remainingData, {
      props: props
    }), children);
  }
}

var PRODUCTION = false;

try {
  PRODUCTION = "production" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function addStaticClass(to, what) {
  var val = (to || '').length === 0 ? [] : [to];

  return val.concat(what).join(' ');
}

function normalizeIconArgs(icon$$1) {
  if (icon$$1 === null) {
    return null;
  }

  if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
    return icon$$1;
  }

  if (Array.isArray(icon$$1) && icon$$1.length === 2) {
    return { prefix: icon$$1[0], iconName: icon$$1[1] };
  }

  if (typeof icon$$1 === 'string') {
    return { prefix: 'fas', iconName: icon$$1 };
  }
}

var FontAwesomeIcon = {
  name: 'FontAwesomeIcon',

  functional: true,

  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['right', 'left'].indexOf(value) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function validator(value) {
        return [90, 180, 270].indexOf(parseInt(value, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;
    var iconArgs = props.icon,
        maskArgs = props.mask,
        symbol = props.symbol,
        title = props.title;

    var icon$$1 = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', classList(props));
    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* parse */ "d"].transform(props.transform) : props.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

    var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* icon */ "b"])(icon$$1, _extends({}, classes, transform, mask, { symbol: symbol, title: title }));

    if (!renderedIcon) {
      return log('Could not find one or more icon(s)', icon$$1, mask);
    }

    var abstract = renderedIcon.abstract;

    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};

var FontAwesomeLayers = {
  name: 'FontAwesomeLayers',

  functional: true,

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  render: function render(createElement, context) {
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].familyPrefix;
    var staticClass = context.data.staticClass;


    var classes = [familyPrefix + '-layers'].concat(toConsumableArray(context.props.fixedWidth ? [familyPrefix + '-fw'] : []));

    return createElement('div', _extends({}, context.data, {
      staticClass: addStaticClass(staticClass, classes)
    }), context.children);
  }
};

var FontAwesomeLayersText = {
  name: 'FontAwesomeLayersText',

  functional: true,

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;

    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* parse */ "d"].transform(props.transform) : props.transform);

    var renderedText = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* text */ "e"])(props.value.toString(), _extends({}, transform));

    var abstract = renderedText.abstract;


    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ae2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a3c2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b0f2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b304":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b7db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9e0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bdb3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c029":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0cf3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c320":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c32d":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "c3a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7d27");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbnailListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c6d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d2e0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cb3e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = require("Axios");

/***/ }),

/***/ "d2e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d457":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'cloud-upload-alt';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f382';
var svgPathData = 'M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCloudUploadAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "d523":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'sort-up';
var width = 320;
var height = 512;
var ligatures = [];
var unicode = 'f0de';
var svgPathData = 'M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSortUp = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "d530":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fabd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d5d1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d60a":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "dbbc":
/***/ (function(module, exports) {

module.exports = require("Popper");

/***/ }),

/***/ "e223":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bdb3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e5b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardSuccess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("665e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardSuccess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardSuccess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardSuccess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ecb4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a79");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ecee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return icon; });
/* unused harmony export noAuto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* unused harmony export toHtml */
/* unused harmony export layer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return text; });
/* unused harmony export counter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return library; });
/* unused harmony export dom */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parse; });
/* unused harmony export findIconDefinition */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "production" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.11.2\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ed4e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f01e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'check';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f00c';
var svgPathData = 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCheck = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "f28c":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "f30e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f457":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fdc9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f53c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScrolling_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("40e3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScrolling_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScrolling_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScrolling_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f58b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardImg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("721f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardImg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardImg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardImg_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fabd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Components_namespaceObject = {};
__webpack_require__.r(Components_namespaceObject);
__webpack_require__.d(Components_namespaceObject, "ActivityIndicator", function() { return Components_ActivityIndicator; });
__webpack_require__.d(Components_namespaceObject, "Alert", function() { return Components_Alert; });
__webpack_require__.d(Components_namespaceObject, "AlertClose", function() { return AlertClose; });
__webpack_require__.d(Components_namespaceObject, "AlertHeading", function() { return AlertHeading; });
__webpack_require__.d(Components_namespaceObject, "AlertLink", function() { return AlertLink; });
__webpack_require__.d(Components_namespaceObject, "AnimateCss", function() { return Components_AnimateCss; });
__webpack_require__.d(Components_namespaceObject, "Badge", function() { return Components_Badge; });
__webpack_require__.d(Components_namespaceObject, "BaseForm", function() { return Components_BaseForm; });
__webpack_require__.d(Components_namespaceObject, "Breadcrumb", function() { return Components_Breadcrumb; });
__webpack_require__.d(Components_namespaceObject, "BreadcrumbItem", function() { return BreadcrumbItem; });
__webpack_require__.d(Components_namespaceObject, "Btn", function() { return Components_Btn; });
__webpack_require__.d(Components_namespaceObject, "BtnActivity", function() { return Components_BtnActivity; });
__webpack_require__.d(Components_namespaceObject, "BtnFile", function() { return Components_BtnFile; });
__webpack_require__.d(Components_namespaceObject, "BtnGroup", function() { return Components_BtnGroup; });
__webpack_require__.d(Components_namespaceObject, "BtnGroupToggle", function() { return BtnGroupToggle; });
__webpack_require__.d(Components_namespaceObject, "BtnToolbar", function() { return BtnToolbar; });
__webpack_require__.d(Components_namespaceObject, "BtnDropdown", function() { return Components_BtnDropdown; });
__webpack_require__.d(Components_namespaceObject, "Card", function() { return Components_Card; });
__webpack_require__.d(Components_namespaceObject, "CardBody", function() { return CardBody; });
__webpack_require__.d(Components_namespaceObject, "CardBtnGroup", function() { return CardBtnGroup; });
__webpack_require__.d(Components_namespaceObject, "CardDeck", function() { return CardDeck; });
__webpack_require__.d(Components_namespaceObject, "CardFooter", function() { return CardFooter; });
__webpack_require__.d(Components_namespaceObject, "CardHeader", function() { return CardHeader; });
__webpack_require__.d(Components_namespaceObject, "CardImg", function() { return CardImg; });
__webpack_require__.d(Components_namespaceObject, "CardImgTop", function() { return CardImgTop; });
__webpack_require__.d(Components_namespaceObject, "CardImgBottom", function() { return CardImgBottom; });
__webpack_require__.d(Components_namespaceObject, "CardImgOverlay", function() { return CardImgOverlay; });
__webpack_require__.d(Components_namespaceObject, "CardLink", function() { return CardLink; });
__webpack_require__.d(Components_namespaceObject, "CardSubtitle", function() { return CardSubtitle; });
__webpack_require__.d(Components_namespaceObject, "CardTitle", function() { return CardTitle; });
__webpack_require__.d(Components_namespaceObject, "CheckboxField", function() { return Components_CheckboxField; });
__webpack_require__.d(Components_namespaceObject, "Container", function() { return Components_Container; });
__webpack_require__.d(Components_namespaceObject, "DropdownMenu", function() { return Components_DropdownMenu; });
__webpack_require__.d(Components_namespaceObject, "DropdownMenuItem", function() { return DropdownMenuItem; });
__webpack_require__.d(Components_namespaceObject, "DropdownMenuHeader", function() { return DropdownMenuHeader; });
__webpack_require__.d(Components_namespaceObject, "DropdownMenuDivider", function() { return DropdownMenuDivider; });
__webpack_require__.d(Components_namespaceObject, "Dropzone", function() { return Components_Dropzone; });
__webpack_require__.d(Components_namespaceObject, "FileField", function() { return Components_FileField; });
__webpack_require__.d(Components_namespaceObject, "FilePreview", function() { return Components_FilePreview; });
__webpack_require__.d(Components_namespaceObject, "FormControl", function() { return Components_FormControl; });
__webpack_require__.d(Components_namespaceObject, "FormFeedback", function() { return Components_FormFeedback; });
__webpack_require__.d(Components_namespaceObject, "FormGroup", function() { return Components_FormGroup; });
__webpack_require__.d(Components_namespaceObject, "FormLabel", function() { return Components_FormLabel; });
__webpack_require__.d(Components_namespaceObject, "HelpText", function() { return Components_HelpText; });
__webpack_require__.d(Components_namespaceObject, "InfiniteScrolling", function() { return Components_InfiniteScrolling; });
__webpack_require__.d(Components_namespaceObject, "InputField", function() { return Components_InputField; });
__webpack_require__.d(Components_namespaceObject, "InputGroup", function() { return Components_InputGroup; });
__webpack_require__.d(Components_namespaceObject, "InputGroupAppend", function() { return InputGroupAppend; });
__webpack_require__.d(Components_namespaceObject, "InputGroupPrepend", function() { return InputGroupPrepend; });
__webpack_require__.d(Components_namespaceObject, "InputGroupText", function() { return InputGroupText; });
__webpack_require__.d(Components_namespaceObject, "InputList", function() { return Components_InputList; });
__webpack_require__.d(Components_namespaceObject, "LightSwitchField", function() { return Components_LightSwitchField; });
__webpack_require__.d(Components_namespaceObject, "ListGroup", function() { return Components_ListGroup; });
__webpack_require__.d(Components_namespaceObject, "ListGroupItem", function() { return ListGroupItem; });
__webpack_require__.d(Components_namespaceObject, "Navbar", function() { return Components_Navbar; });
__webpack_require__.d(Components_namespaceObject, "NavbarBrand", function() { return NavbarBrand; });
__webpack_require__.d(Components_namespaceObject, "NavbarCollapse", function() { return NavbarCollapse; });
__webpack_require__.d(Components_namespaceObject, "NavbarNav", function() { return NavbarNav; });
__webpack_require__.d(Components_namespaceObject, "NavbarText", function() { return NavbarText; });
__webpack_require__.d(Components_namespaceObject, "NavbarToggler", function() { return NavbarToggler; });
__webpack_require__.d(Components_namespaceObject, "NavbarTogglerIcon", function() { return NavbarTogglerIcon; });
__webpack_require__.d(Components_namespaceObject, "Modal", function() { return Components_Modal; });
__webpack_require__.d(Components_namespaceObject, "ModalBackdrop", function() { return ModalBackdrop; });
__webpack_require__.d(Components_namespaceObject, "ModalBody", function() { return ModalBody; });
__webpack_require__.d(Components_namespaceObject, "ModalContent", function() { return ModalContent; });
__webpack_require__.d(Components_namespaceObject, "ModalDialog", function() { return ModalDialog; });
__webpack_require__.d(Components_namespaceObject, "ModalFooter", function() { return ModalFooter; });
__webpack_require__.d(Components_namespaceObject, "ModalHeader", function() { return ModalHeader; });
__webpack_require__.d(Components_namespaceObject, "ModalTitle", function() { return ModalTitle; });
__webpack_require__.d(Components_namespaceObject, "Navigation", function() { return Components_Navigation; });
__webpack_require__.d(Components_namespaceObject, "NavigationError", function() { return NavigationError; });
__webpack_require__.d(Components_namespaceObject, "NavigationItem", function() { return NavigationItem; });
__webpack_require__.d(Components_namespaceObject, "NavigationLink", function() { return NavigationLink; });
__webpack_require__.d(Components_namespaceObject, "NavigationDropdown", function() { return NavigationDropdown; });
__webpack_require__.d(Components_namespaceObject, "Overlay", function() { return Components_Overlay; });
__webpack_require__.d(Components_namespaceObject, "Pagination", function() { return Components_Pagination; });
__webpack_require__.d(Components_namespaceObject, "Popover", function() { return Components_Popover; });
__webpack_require__.d(Components_namespaceObject, "PopoverBody", function() { return PopoverBody; });
__webpack_require__.d(Components_namespaceObject, "PopoverHeader", function() { return PopoverHeader; });
__webpack_require__.d(Components_namespaceObject, "ProgressBar", function() { return Components_ProgressBar; });
__webpack_require__.d(Components_namespaceObject, "RadioField", function() { return Components_RadioField; });
__webpack_require__.d(Components_namespaceObject, "SelectField", function() { return Components_SelectField; });
__webpack_require__.d(Components_namespaceObject, "SlideDeck", function() { return Components_SlideDeck; });
__webpack_require__.d(Components_namespaceObject, "Slides", function() { return Slides; });
__webpack_require__.d(Components_namespaceObject, "SliderField", function() { return Components_SliderField; });
__webpack_require__.d(Components_namespaceObject, "TableView", function() { return Components_TableView; });
__webpack_require__.d(Components_namespaceObject, "TextareaField", function() { return Components_TextareaField; });
__webpack_require__.d(Components_namespaceObject, "ThumbnailList", function() { return Components_ThumbnailList; });
__webpack_require__.d(Components_namespaceObject, "ThumbnailListItem", function() { return ThumbnailListItem; });
__webpack_require__.d(Components_namespaceObject, "UploadField", function() { return Components_UploadField; });
__webpack_require__.d(Components_namespaceObject, "Wizard", function() { return Components_Wizard; });
__webpack_require__.d(Components_namespaceObject, "WizardButtons", function() { return WizardButtons; });
__webpack_require__.d(Components_namespaceObject, "WizardHeader", function() { return WizardHeader; });
__webpack_require__.d(Components_namespaceObject, "WizardProgress", function() { return WizardProgress; });
__webpack_require__.d(Components_namespaceObject, "WizardStep", function() { return WizardStep; });
__webpack_require__.d(Components_namespaceObject, "WizardSuccess", function() { return WizardSuccess; });
var Directives_namespaceObject = {};
__webpack_require__.r(Directives_namespaceObject);
__webpack_require__.d(Directives_namespaceObject, "Autogrow", function() { return Directives_Autogrow; });
__webpack_require__.d(Directives_namespaceObject, "Collapse", function() { return Directives_Collapse; });
__webpack_require__.d(Directives_namespaceObject, "InputList", function() { return Directives_InputList; });
__webpack_require__.d(Directives_namespaceObject, "Lazy", function() { return Directives_Lazy; });
__webpack_require__.d(Directives_namespaceObject, "Slug", function() { return Directives_Slug; });
var Filters_namespaceObject = {};
__webpack_require__.r(Filters_namespaceObject);
__webpack_require__.d(Filters_namespaceObject, "DateFilter", function() { return DateFilter; });
__webpack_require__.d(Filters_namespaceObject, "MomentFilter", function() { return MomentFilter; });
var Helpers_namespaceObject = {};
__webpack_require__.r(Helpers_namespaceObject);
__webpack_require__.d(Helpers_namespaceObject, "blob", function() { return Helpers_Blob; });
__webpack_require__.d(Helpers_namespaceObject, "breakpoints", function() { return Breakpoints; });
__webpack_require__.d(Helpers_namespaceObject, "elapsed", function() { return Elapsed; });
__webpack_require__.d(Helpers_namespaceObject, "EventEmitter", function() { return Helpers_EventEmitter; });
__webpack_require__.d(Helpers_namespaceObject, "hash", function() { return Hash; });
__webpack_require__.d(Helpers_namespaceObject, "instantiate", function() { return Instantiate; });
__webpack_require__.d(Helpers_namespaceObject, "prefix", function() { return Prefix; });
__webpack_require__.d(Helpers_namespaceObject, "readFile", function() { return ReadFile; });
__webpack_require__.d(Helpers_namespaceObject, "script", function() { return Script; });
__webpack_require__.d(Helpers_namespaceObject, "scrollTo", function() { return ScrollTo; });
__webpack_require__.d(Helpers_namespaceObject, "transition", function() { return Transition; });
__webpack_require__.d(Helpers_namespaceObject, "uuid", function() { return Uuid; });
__webpack_require__.d(Helpers_namespaceObject, "wait", function() { return Wait; });
var Http_namespaceObject = {};
__webpack_require__.r(Http_namespaceObject);
__webpack_require__.d(Http_namespaceObject, "Model", function() { return Http_Model; });
__webpack_require__.d(Http_namespaceObject, "Request", function() { return Http_Request; });
__webpack_require__.d(Http_namespaceObject, "Response", function() { return Response_Response; });
var Mixins_namespaceObject = {};
__webpack_require__.r(Mixins_namespaceObject);
__webpack_require__.d(Mixins_namespaceObject, "Colorable", function() { return Mixins_Colorable; });
__webpack_require__.d(Mixins_namespaceObject, "FormControlMixin", function() { return Mixins_FormControl; });
__webpack_require__.d(Mixins_namespaceObject, "HasSlots", function() { return Mixins_HasSlots; });
__webpack_require__.d(Mixins_namespaceObject, "MergeClasses", function() { return Mixins_MergeClasses; });
__webpack_require__.d(Mixins_namespaceObject, "Proxy", function() { return Mixins_Proxy; });
__webpack_require__.d(Mixins_namespaceObject, "Screenreaders", function() { return Mixins_Screenreaders; });
__webpack_require__.d(Mixins_namespaceObject, "Sizeable", function() { return Mixins_Sizeable; });
__webpack_require__.d(Mixins_namespaceObject, "Triggerable", function() { return Mixins_Triggerable; });
__webpack_require__.d(Mixins_namespaceObject, "Variant", function() { return Mixins_Variant; });
var Plugins_namespaceObject = {};
__webpack_require__.r(Plugins_namespaceObject);
__webpack_require__.d(Plugins_namespaceObject, "modal", function() { return Plugins_Modal; });
__webpack_require__.d(Plugins_namespaceObject, "overlay", function() { return Plugins_Overlay; });
__webpack_require__.d(Plugins_namespaceObject, "popover", function() { return Plugins_Popover; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/Helpers/Functions/camelCase.js
function camelCase(string) {
  string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function (match) {
    return match.charAt(match.length - 1).toUpperCase();
  });
  return string.charAt(0).toLowerCase() + string.substring(1);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/chunk.js
function chunk(arr, chunkSize, cache = []) {
  const tmp = [...arr];

  while (tmp.length) cache.push(tmp.splice(0, chunkSize));

  return cache;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/extend.js
function extend(...args) {
  return Object.assign(...args);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isNull.js
function isNull(value) {
  return value === null;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isArray.js
function isArray(value) {
  return Array.isArray(value);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isObject.js


function isObject(value) {
  return typeof value === 'object' && !isNull(value) && !isArray(value);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/deepExtend.js


/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
*/

function deepExtend(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) extend(target, {
          [key]: {}
        });
        deepExtend(target[key], source[key]);
      } else {
        extend(target, {
          [key]: source[key]
        });
      }
    }
  }

  return deepExtend(target, ...sources);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/cloneDeep.js

function cloneDeep(...args) {
  return deepExtend({}, ...args);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/concatMap.js
function concatMap(fn) {
  return x => {
    return x.map(fn).reduce((x, y) => x.concat(y), []);
  };
}
// CONCATENATED MODULE: ./src/Helpers/Functions/now.js
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return Date.now();
};

/* harmony default export */ var Functions_now = (now);
// CONCATENATED MODULE: ./src/Helpers/Functions/isSymbol.js
function isString(value) {
  return typeof value === 'symbol';
}
// CONCATENATED MODULE: ./src/Helpers/Functions/toNumber.js


/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isString(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/* harmony default export */ var Functions_toNumber = (toNumber);
// CONCATENATED MODULE: ./src/Helpers/Functions/debounce.js



/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = Functions_toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Functions_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = Functions_now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Functions_now());
  }

  function debounced() {
    var time = Functions_now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ var Functions_debounce = (debounce);
// CONCATENATED MODULE: ./src/Helpers/Functions/deepFlatten.js


function deepFlatten(x) {
  return concatMap(x => isArray(x) ? deepFlatten(x) : x)(x);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isNumber.js
function isNumber(value) {
  return typeof value === 'number' || (value ? value.toString() === '[object Number]' : false);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isNumeric.js


function isNumeric(value) {
  return isNumber(value) || !!value && !isArray(value) && !!value.toString().match(/^-?[\d.,]+$/);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/key.js

function key_key(value) {
  return isNumeric(value) ? parseFloat(value) : value;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/each.js

function each(subject, fn) {
  for (const i in subject) {
    fn(subject[i], key_key(i));
  }
}
// CONCATENATED MODULE: ./src/Helpers/Functions/first.js
function first(array) {
  return array && array.length ? array[0] : undefined;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/matches.js

function matches(properties) {
  return subject => {
    for (const i in properties) {
      if (isObject(properties[i])) {
        return subject[i] ? matches(properties[i])(subject[i]) : false;
      } else if (!subject || subject[i] !== properties[i]) {
        return false;
      }
    }

    return true;
  };
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isString.js
function isString_isString(value) {
  return typeof value === 'string';
}
// CONCATENATED MODULE: ./src/Helpers/Functions/get.js


function get(object, path) {
  return (isString_isString(path) ? path.split('.') : !isArray(path) ? [path] : path).reduce((a, b) => a[b], object);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/property.js

function property(path) {
  return object => {
    return get(object, path);
  };
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isFunction.js
function isFunction(value) {
  return value instanceof Function;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/matchesProperty.js

function matchesProperty(path, value) {
  return subject => {
    return get(subject, path) === value;
  };
}
// CONCATENATED MODULE: ./src/Helpers/Functions/predicate.js






function predicate_predicate(value) {
  if (isObject(value)) {
    value = matches(value);
  } else if (isArray(value)) {
    value = matchesProperty(value[0], value[1]);
  } else if (!isFunction(value)) {
    value = property(value);
  }

  return value;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/find.js


function find(subject, value) {
  return first(subject.filter(object => predicate_predicate(value)(object)));
}
// CONCATENATED MODULE: ./src/Helpers/Functions/findIndex.js


function findIndex(subject, value) {
  for (const i in subject) {
    if (predicate_predicate(value)(subject[i])) {
      return key_key(i);
    }
  }

  return -1;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/findKey.js


function findKey_findIndex(object, value) {
  return first(Object.keys(object).filter(key => predicate_predicate(value)(object[key])));
}
// CONCATENATED MODULE: ./src/Helpers/Functions/flatten.js

function flatten(x) {
  return concatMap(x => x)(x);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isBoolean.js
function isBoolean(value) {
  return value === true || value === false;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isUndefined.js
function isUndefined(value) {
  return typeof value === 'undefined';
}
// CONCATENATED MODULE: ./src/Helpers/Functions/isEmpty.js




function isEmpty(value) {
  if (isArray(value)) {
    return value.length === 0;
  } else if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return value === '' || isNull(value) || isUndefined(value);
}
// CONCATENATED MODULE: ./src/Helpers/Functions/kebabCase.js
function kebabCase(str) {
  return str && str.replace ? str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').replace(/_/g, '-').toLowerCase() : null;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/map.js

function map(object, fn) {
  const mapped = {};
  each(object, (value, key) => {
    mapped[key] = fn(value, key);
  });
  return mapped;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/mapKeys.js

function mapKeys(object, fn) {
  const mapped = {};
  each(object, (value, key) => {
    mapped[fn(value, key)] = value;
  });
  return mapped;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/negate.js

function negate(fn) {
  return (...args) => isFunction(fn) ? !fn(...args) : !fn;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/noop.js
function noop() {}
// CONCATENATED MODULE: ./src/Helpers/Functions/pickBy.js


function pickBy(object, match) {
  const subject = {};
  each(object, (value, key) => {
    if (predicate_predicate(match)(value)) {
      subject[key] = value;
    }
  });
  return subject;
}
// CONCATENATED MODULE: ./src/Helpers/Functions/omitBy.js


function omitBy(object, fn) {
  return pickBy(object, negate(fn));
}
// CONCATENATED MODULE: ./src/Helpers/Functions/remove.js


function remove(array, match) {
  const indexes = [];

  for (const i in array) {
    if (predicate_predicate(match)(array[i])) {
      indexes.push(key_key(i));
    }
  }

  return array.filter((value, i) => {
    return indexes.indexOf(i) !== -1;
  });
}
// CONCATENATED MODULE: ./src/Helpers/Functions/throttle.js


/** Error message constants. */

var throttle_FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */

function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(throttle_FUNC_ERROR_TEXT);
  }

  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return Functions_debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ var Functions_throttle = (throttle);
// CONCATENATED MODULE: ./src/Helpers/Functions/unit.js
/* harmony default export */ var unit = (function (value, defaultValue = 'px') {
  return isFinite(value) ? value + defaultValue : value;
});
// CONCATENATED MODULE: ./src/Helpers/Functions/value.js
/* harmony default export */ var Functions_value = (function (value, ...args) {
  return typeof value === 'function' ? value(...args) : value;
});
;
// CONCATENATED MODULE: ./src/Helpers/Functions/wrap.js

function wrap(subject, fn) {
  return (...args) => {
    return isFunction(fn) ? fn(subject, ...args) : args;
  };
}
;
// CONCATENATED MODULE: ./src/Helpers/Functions/index.js













































// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=57d9f8ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.center)?_c('div',{staticClass:"center-wrapper",class:{'position-relative': _vm.relative, 'position-fixed': _vm.fixed},style:(_vm.style)},[_c('div',{staticClass:"center-content d-flex flex-column align-items-center"},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)]):_c('div',{staticClass:"d-flex flex-column justify-content-center align-items-center",style:(_vm.style)},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=57d9f8ee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=3303a898&
var BaseTypevue_type_template_id_3303a898_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-indicator",class:_vm.classes},_vm._l((_vm.nodes),function(i){return _c('div',{key:i})}),0)}
var BaseTypevue_type_template_id_3303a898_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=3303a898&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var BaseTypevue_type_script_lang_js_ = ({
  props: {
    nodes: {
      type: Number,
      default: 3
    },
    size: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: 'activity-indicator-'
    }
  },
  computed: {
    classes: function () {
      const classes = {};
      const name = kebabCase(this.$options.name);
      classes[name] = !!name;
      classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_BaseTypevue_type_script_lang_js_ = (BaseTypevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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

// CONCATENATED MODULE: ./src/Components/ActivityIndicator/Types/BaseType.vue





/* normalize component */

var component = normalizeComponent(
  Types_BaseTypevue_type_script_lang_js_,
  BaseTypevue_type_template_id_3303a898_render,
  BaseTypevue_type_template_id_3303a898_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseType = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&

/* harmony default export */ var Dotsvue_type_script_lang_js_ = ({
  name: 'ActivityIndicatorDots',
  extends: BaseType
});
// CONCATENATED MODULE: ./src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Dotsvue_type_script_lang_js_ = (Dotsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/ActivityIndicator/Types/Dots.vue?vue&type=style&index=0&lang=scss&
var Dotsvue_type_style_index_0_lang_scss_ = __webpack_require__("ae2a");

// CONCATENATED MODULE: ./src/Components/ActivityIndicator/Types/Dots.vue
var Dots_render, Dots_staticRenderFns





/* normalize component */

var Dots_component = normalizeComponent(
  Types_Dotsvue_type_script_lang_js_,
  Dots_render,
  Dots_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dots = (Dots_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&


/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({
  name: 'ActivityIndicatorSpinner',
  extends: BaseType,
  props: extend({}, BaseType.props, {
    nodes: {
      type: Number,
      default: 12
    }
  })
});
// CONCATENATED MODULE: ./src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=style&index=0&lang=scss&
var Spinnervue_type_style_index_0_lang_scss_ = __webpack_require__("a5b6");

// CONCATENATED MODULE: ./src/Components/ActivityIndicator/Types/Spinner.vue
var Spinner_render, Spinner_staticRenderFns





/* normalize component */

var Spinner_component = normalizeComponent(
  Types_Spinnervue_type_script_lang_js_,
  Spinner_render,
  Spinner_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Spinner = (Spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var ActivityIndicatorvue_type_script_lang_js_ = ({
  name: 'ActivityIndicator',
  components: {
    ActivityIndicatorDots: Dots,
    ActivityIndicatorSpinner: Spinner
  },
  extends: BaseType,
  props: {
    center: Boolean,
    fixed: Boolean,
    label: String,
    relative: Boolean,
    type: {
      type: String,
      default: 'dots'
    },
    height: [String, Number],
    maxHeight: [String, Number],
    minHeight: [String, Number],
    width: [String, Number],
    maxWidth: [String, Number],
    minWidth: [String, Number]
  },
  computed: {
    style() {
      return {
        width: unit(this.width),
        maxWidth: unit(this.maxWidth),
        minWidth: unit(this.minWidth),
        height: unit(this.height),
        maxHeight: unit(this.maxHeight),
        minHeight: unit(this.minHeight)
      };
    },

    component() {
      return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
    }

  }
});
// CONCATENATED MODULE: ./src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_ = (ActivityIndicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=style&index=0&lang=scss&
var ActivityIndicatorvue_type_style_index_0_lang_scss_ = __webpack_require__("b7db");

// CONCATENATED MODULE: ./src/Components/ActivityIndicator/ActivityIndicator.vue






/* normalize component */

var ActivityIndicator_component = normalizeComponent(
  ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ActivityIndicator = (ActivityIndicator_component.exports);
// CONCATENATED MODULE: ./src/Components/ActivityIndicator/index.js

/* harmony default export */ var Components_ActivityIndicator = (ActivityIndicator);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/Alert.vue?vue&type=template&id=3cf630b9&
var Alertvue_type_template_id_3cf630b9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert",class:_vm.mergeClasses(_vm.variantClass, {show: _vm.isVisible, fade: _vm.fade}),attrs:{"role":"alert"}},[(_vm.dismissible)?_c('alert-close',{on:{"click":function($event){return _vm.dismiss()}}}):_vm._e(),(_vm.title || _vm.heading)?_c('alert-heading',[_vm._v("\n        "+_vm._s(_vm.title || _vm.heading)+"\n    ")]):_vm._e(),_vm._t("default"),(typeof _vm.show === 'number')?_c('progress-bar',{staticClass:"my-3",attrs:{"variant":_vm.variant,"height":5,"value":_vm.dismissCount,"max":_vm.show}}):_vm._e()],2)}
var Alertvue_type_template_id_3cf630b9_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Alert/Alert.vue?vue&type=template&id=3cf630b9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/AlertClose.vue?vue&type=template&id=5883ba20&
var AlertClosevue_type_template_id_5883ba20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"alert","aria-label":"Close"},on:{"click":_vm.onClick}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("\n        ×\n    ")])])}
var AlertClosevue_type_template_id_5883ba20_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Alert/AlertClose.vue?vue&type=template&id=5883ba20&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/AlertClose.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var AlertClosevue_type_script_lang_js_ = ({
  name: 'AlertClose',
  methods: {
    onClick(event) {
      this.$emit('click', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Alert/AlertClose.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_AlertClosevue_type_script_lang_js_ = (AlertClosevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Alert/AlertClose.vue





/* normalize component */

var AlertClose_component = normalizeComponent(
  Alert_AlertClosevue_type_script_lang_js_,
  AlertClosevue_type_template_id_5883ba20_render,
  AlertClosevue_type_template_id_5883ba20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AlertClose = (AlertClose_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/AlertHeading.vue?vue&type=template&id=8e4802cc&
var AlertHeadingvue_type_template_id_8e4802cc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',{staticClass:"alert-heading"},[_vm._t("default")],2)}
var AlertHeadingvue_type_template_id_8e4802cc_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Alert/AlertHeading.vue?vue&type=template&id=8e4802cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/AlertHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var AlertHeadingvue_type_script_lang_js_ = ({
  name: 'AlertHeading'
});
// CONCATENATED MODULE: ./src/Components/Alert/AlertHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_AlertHeadingvue_type_script_lang_js_ = (AlertHeadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Alert/AlertHeading.vue





/* normalize component */

var AlertHeading_component = normalizeComponent(
  Alert_AlertHeadingvue_type_script_lang_js_,
  AlertHeadingvue_type_template_id_8e4802cc_render,
  AlertHeadingvue_type_template_id_8e4802cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AlertHeading = (AlertHeading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ProgressBar/ProgressBar.vue?vue&type=template&id=1932e1d4&
var ProgressBarvue_type_template_id_1932e1d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({'height': _vm.formattedHeight})},[_c('div',{staticClass:"progress-bar",class:_vm.mergeClasses(_vm.progressClasses, _vm.variantClass),style:(_vm.styles),attrs:{"role":"progressbar","aria-valuenow":_vm.offsetValue,"aria-valuemin":_vm.min,"aria-valuemax":_vm.max}},[(!!_vm.label)?_c('span',[(_vm.label !== true)?[_vm._v("\n                "+_vm._s(_vm.label)+"\n            ")]:_vm._e(),_vm._v(" "+_vm._s(_vm.offsetValue)+"%\n        ")],2):_c('span',[_vm._t("default")],2)])])}
var ProgressBarvue_type_template_id_1932e1d4_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ProgressBar/ProgressBar.vue?vue&type=template&id=1932e1d4&

// CONCATENATED MODULE: ./src/Helpers/Prefix/Prefix.js

function Prefix_prefix(subject, prefix, delimeter = '-') {
  const prefixer = (value, key) => {
    const string = (key || value).replace(new RegExp(`^${prefix}${delimeter}?`), '');
    return [prefix, string].filter(value => !!value).join(delimeter);
  };

  if (isBoolean(subject)) {
    return subject;
  }

  if (isObject(subject)) {
    return mapKeys(subject, prefixer);
  }

  return prefixer(subject);
}
// CONCATENATED MODULE: ./src/Mixins/Variant/Variant.js


/* harmony default export */ var Variant = ({
  props: {
    /**
     * The variant attribute
     *
     * @property String
     */
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    variantClassPrefix() {
      return kebabCase(this.$options.name);
    },

    variantClass() {
      return Prefix_prefix(this.variant, this.variantClassPrefix);
    }

  }
});
// CONCATENATED MODULE: ./src/Mixins/Variant/index.js

/* harmony default export */ var Mixins_Variant = (Variant);
// CONCATENATED MODULE: ./src/Mixins/MergeClasses/MergeClasses.js

/* harmony default export */ var MergeClasses = ({
  methods: {
    mergeClasses() {
      let classes = {};
      each([].slice.call(arguments), arg => {
        if (isObject(arg)) {
          extend(classes, arg);
        } else if (isArray(arg)) {
          classes = classes.concat(arg);
        } else if (arg) {
          classes[arg] = true;
        }
      });
      return classes;
    }

  }
});
// CONCATENATED MODULE: ./src/Mixins/MergeClasses/index.js

/* harmony default export */ var Mixins_MergeClasses = (MergeClasses);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ProgressBar/ProgressBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ProgressBarvue_type_script_lang_js_ = ({
  name: 'ProgressBar',
  mixins: [Mixins_Variant, Mixins_MergeClasses],
  props: {
    /**
     * A custom color to be applied inline in the styles vs a contextual
     * variant.
     *
     * @property String
     */
    color: String,

    /**
     * The progress bar percentage value
     *
     * @property String
     */
    value: {
      type: Number,
      required: true
    },

    /**
     * The height of the progress bar
     *
     * @property String
     */
    height: [Number, String],

    /**
     * Show the progress bar value as a label inside the bar
     *
     * @property String
     */
    label: [String, Boolean],

    /**
     * Should the progress bar appear with stripes
     *
     * @property String
     */
    striped: Boolean,

    /**
     * Should the progress bar appear with animated stripes
     *
     * @property String
     */
    animated: Boolean,

    /**
     * The minimum value
     *
     * @property String
     */
    min: {
      type: Number,
      default: 0
    },

    /**
     * The max value
     *
     * @property String
     */
    max: {
      type: Number,
      default: 100
    }
  },
  computed: {
    variantClassPrefix() {
      return 'bg';
    },

    offsetValue() {
      return this.value / this.max * 100;
    },

    formattedHeight() {
      return this.height ? unit(this.height) : null;
    },

    progressClasses() {
      return {
        'progress-bar-striped': this.striped,
        'progress-bar-animated': this.animated
      };
    },

    styles() {
      return {
        width: `${this.offsetValue}%`,
        background: `${this.color} !important`
      };
    }

  }
});
// CONCATENATED MODULE: ./src/Components/ProgressBar/ProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var ProgressBar_ProgressBarvue_type_script_lang_js_ = (ProgressBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/ProgressBar/ProgressBar.vue





/* normalize component */

var ProgressBar_component = normalizeComponent(
  ProgressBar_ProgressBarvue_type_script_lang_js_,
  ProgressBarvue_type_template_id_1932e1d4_render,
  ProgressBarvue_type_template_id_1932e1d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProgressBar = (ProgressBar_component.exports);
// CONCATENATED MODULE: ./src/Components/ProgressBar/index.js

/* harmony default export */ var Components_ProgressBar = (ProgressBar);
// CONCATENATED MODULE: ./src/Helpers/Transition/Transition.js
function duration(el) {
  const duration = getComputedStyle(el).transitionDuration;
  const numeric = parseFloat(duration, 10) || 0;
  const unit = duration.match(/m?s/);

  switch (unit[0]) {
    case 's':
      return numeric * 1000;

    case 'ms':
      return numeric;
  }
}

function transition(el) {
  return new Promise((resolve, reject) => {
    try {
      const delay = duration(el);
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } catch (e) {
      reject(e);
    }
  });
}
// CONCATENATED MODULE: ./src/Helpers/Transition/index.js

/* harmony default export */ var Transition = (transition);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/Alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Alertvue_type_script_lang_js_ = ({
  name: 'Alert',
  components: {
    AlertClose: AlertClose,
    AlertHeading: AlertHeading,
    ProgressBar: Components_ProgressBar
  },
  mixins: [Mixins_Variant, Mixins_MergeClasses],
  props: {
    /**
     * Is the alert dismissible
     *
     * @property Boolean
     */
    dismissible: Boolean,

    /**
     * The alert's title/heading
     *
     * @property Boolean
     */
    heading: String,

    /**
     * The alert's title/heading
     *
     * @property Boolean
     */
    title: String,

    /**
     * Should the alert fade when hidden
     *
     * @property Boolean
     */
    fade: {
      type: Boolean,
      default: true
    },

    /**
     * Should the alert be visible by default. If passed a number, alert
     * will be shown for the number of seconds that are passed.
     *
     * @property Boolean
     */
    show: {
      type: [Number, Boolean],
      default: true
    }
  },

  data() {
    return {
      dismissCount: this.show,
      isVisible: this.show
    };
  },

  mounted() {
    if (typeof this.show === 'number') {
      const el = this.$el.querySelector('.progress-bar');
      this.$emit('dismiss-countdown', this.dismissCount = this.show);
      const interval = setInterval(() => {
        this.$emit('dismiss-countdown', this.dismissCount -= 1);

        if (!this.dismissCount) {
          clearInterval(interval);
          Transition(el).then(delay => this.dismiss());
        }
      }, 1000);
    }
  },

  methods: {
    dismiss() {
      this.isVisible = false;
      Transition(this.$el).then(delay => {
        this.$emit('dismiss');
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Alert/Alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_Alertvue_type_script_lang_js_ = (Alertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Alert/Alert.vue





/* normalize component */

var Alert_component = normalizeComponent(
  Alert_Alertvue_type_script_lang_js_,
  Alertvue_type_template_id_3cf630b9_render,
  Alertvue_type_template_id_3cf630b9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Alert = (Alert_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/AlertLink.vue?vue&type=template&id=1f472a28&
var AlertLinkvue_type_template_id_1f472a28_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"alert-link"},[_vm._t("default")],2)}
var AlertLinkvue_type_template_id_1f472a28_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Alert/AlertLink.vue?vue&type=template&id=1f472a28&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Alert/AlertLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var AlertLinkvue_type_script_lang_js_ = ({
  name: 'AlertLink'
});
// CONCATENATED MODULE: ./src/Components/Alert/AlertLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_AlertLinkvue_type_script_lang_js_ = (AlertLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Alert/AlertLink.vue





/* normalize component */

var AlertLink_component = normalizeComponent(
  Alert_AlertLinkvue_type_script_lang_js_,
  AlertLinkvue_type_template_id_1f472a28_render,
  AlertLinkvue_type_template_id_1f472a28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AlertLink = (AlertLink_component.exports);
// CONCATENATED MODULE: ./src/Components/Alert/index.js





/* harmony default export */ var Components_Alert = (Alert);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/AnimateCss/AnimateCss.vue?vue&type=template&id=01fb7b3a&
var AnimateCssvue_type_template_id_01fb7b3a_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"mode":_vm.mode,"duration":_vm.duration,"enter-class":_vm.enterClass,"enter-to-class":_vm.enterToClass,"enter-active-class":_vm.enterActiveClassName,"leave-class":_vm.leaveClass,"leave-to-class":_vm.leaveToClass,"leave-active-class":_vm.leaveActiveClassName},on:{"before-enter":function () {
	var ref;

	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];
	return (ref = this$1).$emit.apply(ref, [ 'before-enter' ].concat( args ));
},"enter":function () {
	var ref;

	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];
	return (ref = this$1).$emit.apply(ref, [ 'enter' ].concat( args ));
},"after-enter":function () {
	var ref;

	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];
	return (ref = this$1).$emit.apply(ref, [ 'after-enter' ].concat( args ));
},"before-leave":function () {
	var ref;

	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];
	return (ref = this$1).$emit.apply(ref, [ 'before-leave' ].concat( args ));
},"leave":function () {
	var ref;

	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];
	return (ref = this$1).$emit.apply(ref, [ 'leave' ].concat( args ));
},"after-leave":function () {
	var ref;

	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];
	return (ref = this$1).$emit.apply(ref, [ 'after-leave' ].concat( args ));
}}},[_vm._t("default")],2)}
var AnimateCssvue_type_template_id_01fb7b3a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/AnimateCss/AnimateCss.vue?vue&type=template&id=01fb7b3a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/AnimateCss/AnimateCss.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AnimateCssvue_type_script_lang_js_ = ({
  props: {
    delay: [String, Number, Function],
    duration: [Object, String, Number],
    mode: String,
    enter: String,
    enterClass: String,
    leave: String,
    enterToClass: String,
    enterActiveClass: String,
    leaveClass: String,
    leaveToClass: String,
    leaveActiveClass: String,
    x: Boolean,
    y: Boolean,
    big: Boolean,
    up: Boolean,
    down: Boolean,
    left: Boolean,
    right: Boolean,
    animated: {
      type: Boolean,
      default: true
    },
    name: String,
    direction: {
      type: String,

      default() {
        return this.x && 'x' || this.y && 'y' || this.up && 'up' || this.down && 'down' || this.left && 'left' || this.right && 'right' || undefined;
      },

      validate(value) {
        return ['up', 'down', 'left', 'right'].indexOf(value.toLowerCase()) !== -1;
      }

    },
    directionEffects: {
      type: Array,
      default: () => ['bounce', 'fade', 'flip', 'lightspeed', 'rotate', 'roll', 'slide', 'zoom']
    },
    special: {
      type: Boolean,

      default() {
        return this.name && this.directionEffects.indexOf(this.name.toLowerCase()) === -1;
      }

    }
  },
  computed: {
    enterActiveClassName() {
      return this.enter && `${this.enter} ${this.animated && 'animated'}` || this.activeClass('in', this.enterActiveClass);
    },

    leaveActiveClassName() {
      return this.leave && `${this.leave} ${this.animated && 'animated'}` || this.activeClass('out', this.leaveActiveClass);
    }

  },
  methods: {
    activeClass(key, ...classes) {
      return [camelCase([this.name, !this.special && key, this.direction, this.big && 'big'].filter(value => !!value).join(' '))].concat([this.animated && 'animated']).concat(classes).join(' ');
    }

  },

  updated() {
    const delay = this.delay instanceof Function ? this.delay() : this.delay;

    if (delay && this.$slots.default && this.$slots.default.length) {
      const el = this.$slots.default[0].elm;

      if (el.style.animatedDelay !== delay) {
        el.style.animationDelay = delay;
      }
    }
  }

});
// CONCATENATED MODULE: ./src/Components/AnimateCss/AnimateCss.vue?vue&type=script&lang=js&
 /* harmony default export */ var AnimateCss_AnimateCssvue_type_script_lang_js_ = (AnimateCssvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/AnimateCss/AnimateCss.vue?vue&type=style&index=0&lang=scss&
var AnimateCssvue_type_style_index_0_lang_scss_ = __webpack_require__("601e");

// CONCATENATED MODULE: ./src/Components/AnimateCss/AnimateCss.vue






/* normalize component */

var AnimateCss_component = normalizeComponent(
  AnimateCss_AnimateCssvue_type_script_lang_js_,
  AnimateCssvue_type_template_id_01fb7b3a_render,
  AnimateCssvue_type_template_id_01fb7b3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AnimateCss = (AnimateCss_component.exports);
// CONCATENATED MODULE: ./src/Components/AnimateCss/index.js

/* harmony default export */ var Components_AnimateCss = (AnimateCss);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Badge/Badge.vue?vue&type=template&id=653b4a0e&
var Badgevue_type_template_id_653b4a0e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.href)?_c('a',{staticClass:"badge",class:_vm.mergeClasses(_vm.classes, _vm.variantClass),attrs:{"href":_vm.href}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_c('span',{staticClass:"sr-only",domProps:{"innerHTML":_vm._s(_vm.accessibility)}})],2):_c('span',{staticClass:"badge",class:_vm.mergeClasses(_vm.classes, _vm.variantClass)},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_c('span',{staticClass:"sr-only",domProps:{"innerHTML":_vm._s(_vm.accessibility)}})],2)}
var Badgevue_type_template_id_653b4a0e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Badge/Badge.vue?vue&type=template&id=653b4a0e&

// CONCATENATED MODULE: ./src/Helpers/Prefix/index.js

/* harmony default export */ var Prefix = (Prefix_prefix);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Badge/Badge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Badgevue_type_script_lang_js_ = ({
  name: 'Badge',
  mixins: [Mixins_Variant, Mixins_MergeClasses],
  props: {
    /**
     * The screen reader accessibility label.
     *
     * @property String
     */
    accessibility: String,

    /**
     * If an href attribute is passed, the badge becomes an anchor.
     *
     * @property String
     */
    href: String,

    /**
     * The badge appear as pill shaped.
     *
     * @property String
     */
    pill: Boolean,

    /**
     * The badge label.
     *
     * @property String
     */
    label: [Number, String],

    /**
     * The badge appear as secondary in size to the parent element.
     *
     * @property String
     */
    secondary: Boolean
  },
  computed: {
    classes() {
      return Prefix({
        'pill': this.pill,
        'secondary': this.secondary
      }, kebabCase(this.$options.name));
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Badge/Badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var Badge_Badgevue_type_script_lang_js_ = (Badgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Badge/Badge.vue





/* normalize component */

var Badge_component = normalizeComponent(
  Badge_Badgevue_type_script_lang_js_,
  Badgevue_type_template_id_653b4a0e_render,
  Badgevue_type_template_id_653b4a0e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Badge = (Badge_component.exports);
// CONCATENATED MODULE: ./src/Components/Badge/index.js

/* harmony default export */ var Components_Badge = (Badge);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BaseForm/BaseForm.vue?vue&type=template&id=7e86fe1a&
var BaseFormvue_type_template_id_7e86fe1a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{class:{'form-inline': _vm.inline},attrs:{"novalidate":_vm.novalidate},on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_vm._t("default")],2)}
var BaseFormvue_type_template_id_7e86fe1a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BaseForm/BaseForm.vue?vue&type=template&id=7e86fe1a&

// EXTERNAL MODULE: external "Axios"
var external_Axios_ = __webpack_require__("cebe");
var external_Axios_default = /*#__PURE__*/__webpack_require__.n(external_Axios_);

// CONCATENATED MODULE: ./src/Support/BaseClass.js

class BaseClass_BaseClass {
  constructor(attributes) {
    this.setAttribute(attributes);
  }

  getAttribute(key) {
    return this.hasOwnProperty(key) ? this[key] : null;
  }

  getAttributes() {
    const attributes = {};
    Object.getOwnPropertyNames(this).forEach(key => {
      attributes[key] = this.getAttribute(key);
    });
    return attributes;
  }

  getPublicAttributes() {
    return Object.keys(this.getAttributes()).filter(key => {
      return !key.match(/^\$/);
    }).reduce((obj, key) => {
      obj[key] = this.getAttribute(key);
      return obj;
    }, {});
  }

  setAttribute(key, value) {
    if (isObject(key)) {
      this.setAttributes(key);
    } else {
      this[key] = value;
    }
  }

  setAttributes(values) {
    for (const i in values) {
      this.setAttribute(i, values[i]);
    }
  }

}
// CONCATENATED MODULE: ./src/Http/Request/Response.js


class Response_Response extends BaseClass_BaseClass {
  constructor(data) {
    if (data instanceof Error) {
      data = Object.assign({
        error: data
      }, data.response);
    }

    super(extend({
      date: new Date()
    }, data));
  }

  get data() {
    return this.$data;
  }

  set data(value) {
    this.$data = value;
  }

  get error() {
    return this.$error;
  }

  set error(value) {
    this.$error = value;
  }

  get request() {
    return this.$request;
  }

  set request(value) {
    this.$request = value;
  }

  get date() {
    return this.$date;
  }

  set date(value) {
    this.$date = value;
  }

  get success() {
    return this.status >= 200 && this.status < 300;
  }

  get failed() {
    return !this.success;
  }

}
// CONCATENATED MODULE: ./src/Http/Request/Request.js




const DEFAULTS = {
  transformRequest: [],
  transformResponse: []
};
class Request_Request extends BaseClass_BaseClass {
  constructor(method, url, attributes) {
    super({
      options: {},
      data: {},
      headers: {},
      params: {},
      url: url,
      method: method
    });

    if (isObject(attributes)) {
      this.setAttribute(attributes);
    }
  }

  send(attributes) {
    this.sentAt = new Date();
    this.setAttributes(attributes);
    return new Promise((resolve, reject) => {
      external_Axios_default()(this.options).then(response => resolve(this.response = new Response_Response(response)), error => reject(this.response = new Response_Response(error)));
    });
  }

  set cancel(value) {
    this.$cancel = value;
  }

  get cancel() {
    return this.$cancel || (() => {
      throw new Error('The request has not been sent yet.');
    });
  }

  get options() {
    const defaults = pickBy(DEFAULTS, value => {
      if (typeof value === 'array') {
        return !!value.length;
      } else if (typeof value === 'object') {
        return !!Object.entries(value).length;
      } else {
        return !!value;
      }
    });
    const merged = deepExtend({
      cancelToken: new external_Axios_default.a.CancelToken(cancel => {
        this.cancel = cancel;
        return cancel;
      })
    }, defaults, this.getPublicAttributes());

    if (this.data instanceof FormData) {
      merged.data = this.data;
    }

    return merged;
  }

  set options(attributes) {
    this.setAttribute(attributes);
  }

  get response() {
    return this.$response;
  }

  set response(value) {
    this.$response = value;
  }

  get error() {
    return this.$error;
  }

  set error(value) {
    this.$error = value;
  }

  get passed() {
    return !!this.response && !this.error;
  }

  get failed() {
    return !!this.response && !!this.error;
  }

  static get transform() {
    return {
      request: this.transformRequest,
      response: this.transformResponse
    };
  }

  static get defaults() {
    return DEFAULTS;
  }

  static set defaults(value) {
    Object.assign(DEFAULTS, value);
  }

  static transformRequest(fn) {
    DEFAULTS.transformRequest.push(fn);
  }

  static transformResponse(fn) {
    DEFAULTS.transformResponse.push(fn);
  }

  static get(url, attributes) {
    return this.make('get', url).send(attributes);
  }

  static post(url, attributes) {
    return this.make('post', url, attributes).send();
  }

  static put(url, attributes) {
    return this.make('put', url, attributes).send();
  }

  static patch(url, attributes) {
    return this.make('path', url, attributes).send();
  }

  static delete(url, attributes) {
    return this.make('delete', url, attributes).send();
  }

  static make(method, url, attributes) {
    return new this(method, url, attributes);
  }

}
// CONCATENATED MODULE: ./src/Http/Request/index.js



/* harmony default export */ var Http_Request = (Request_Request);
// CONCATENATED MODULE: ./src/Http/Model/Model.js


class Model_Model {
  /**
   * Construct the model instance
   *
   * @param data object
   * @return void
   */
  constructor(data = {}, params = {}) {
    this.$request = null;
    this.$key = this.key();
    this.$files = this.files();
    this.$properties = this.properties();
    each(params, (value, key) => {
      this[key] = value;
    });
    this.initialize(data);
  }
  /**
   * Initialize the model with the given data without considering the data
   * as "changed".
   *
   * @param data object
   * @return this
   */


  initialize(data) {
    this.$exists = false;
    this.$changed = {};
    this.$attributes = {};
    this.fill(data);
    this.$initialized = true;
    return this;
  }
  /**
   * Define the corresponding API endpoint slug
   *
   * @return string
   */


  endpoint() {} //

  /**
   * Define the corresponding uri schema.
   *
   * @return string
   */


  uri() {
    return [this.endpoint() || '', this.exists() ? this.id() : null].filter(value => !!value).concat([].slice.call(arguments)).map(part => {
      Object.entries(this.attributes).forEach(([key, value]) => {
        part = part.toString().replace(new RegExp(`\:${key}`), value);
      });
      return part;
    }).join('/');
  }
  /**
   * Return the primary key value for the model
   *
   * @return {Number}
   */


  id() {
    return this.get(this.key());
  }
  /**
   * Define a primary key. This is used to determine if the model exists and
   * which endpoint to use.
   *
   * @return string
   */


  key() {
    return 'id';
  }
  /**
   * Return an array of properties that are sent to the API. If no properties
   * are defined, then all the attributes will be included in the request.
   *
   * @return array
   */


  properties() {
    return [];
  }
  /**
   * Return an array of file properties that are sent to the API. If no fies
   * are defined, then request will always be sent with JSON vs. multipart.
   *
   * @return array
   */


  files() {
    return [];
  }
  /**
   * Set the attributes in the model with the data given.
   *
   * @param data object
   * @return this
   */


  fill(data) {
    this.setAttributes(data);
    return this;
  }
  /**
   * Get one or more attributes from the model.
   *
   * @param data string|array
   * @return array|mixed
   */


  get(key) {
    if (isArray(key)) {
      return this.getAttributes().filter((value, i) => {
        return key.indexOf(i) !== -1;
      });
    } else {
      return this.getAttribute(key);
    }
  }
  /**
   * Alias for setAttributes() except this method returns `this`. This method
   * also accepts an array of values or key/value pair.
   *
   * @return this
   */


  set(key, value = undefined) {
    if (isArray(key) || isObject(key)) {
      this.setAttributes(key);
    } else {
      this.setAttribute(key, value);
    }

    return this;
  }
  /**
   * Get all the defined attributes.
   *
   * @return array
   */


  get attributes() {
    return this.$attributes;
  }
  /**
   * Get all the defined attributes.
   *
   * @return array
   */


  getAttributes() {
    return this.attributes;
  }
  /**
   * Get the changed attributes
   *
   * @return array
   */


  getChangedAttributes() {
    return Object.keys(this.$changed);
  }
  /**
   * Get the changed attributes
   *
   * @return array
   */


  getOriginalValue(key) {
    return this.$changed[key] || this.$attributes[key];
  }
  /**
   * Get the Request object.
   *
   * @return {mixed}
   */


  getRequest() {
    return this.$request;
  }
  /**
   * Get the unchanged attributes
   *
   * @return array
   */


  getUnchangedAttributes() {
    return Object.keys(this.$attributes).filter(key => !(key in this.$changed));
  }
  /**
   * Get an attribute with a given key. If no key is defined
   *
   * @param key string
   * @param default undefined|mixed
   * @return array
   */


  getAttribute(key, value = undefined) {
    return this.$attributes[key] || value;
  }
  /**
   * Set the attributes property.
   *
   * @return array
   */


  set attributes(value) {
    return this.$attributes = value;
  }
  /**
   * Set an array or object of data as attributes.
   *
   * @param attributes array|object
   * @return void
   */


  setAttributes(data) {
    if (isArray(data) || isObject(data)) {
      each(data, (value, key) => {
        this.setAttribute(key, value);
      });
    }
  }
  /**
   * Set an attribute with a given key/value pair. This will track the changes
   * in the model within the `this.$changed` property. If the primary key
   * is set, it will also change the `this.$exists` property.
   *
   * @param key string
   * @param value mixed
   * @return void
   */


  setAttribute(key, value) {
    this.handleAttributeChange(key, value);

    if (isUndefined(value)) {
      delete this.$attributes[key];
    } else {
      this.$attributes[key] = value;
    }
  }
  /**
   * Revert the model to its original state.
   *
   * @return bool
   */


  revert() {
    each(this.$changed, (value, key) => {
      if (!isUndefined(value)) {
        this.$attributes[key] = value;
      } else {
        delete this.$attributes[key];
      }
    });
    this.$changed = {};
  }
  /**
   * Returns if the model has a primary key set.
   *
   * @return bool
   */


  exists() {
    return !!this.$exists;
  }
  /**
   * Returns the model been changed or not.
   *
   * @return bool
   */


  hasChanged(key) {
    return !key ? this.getChangedAttributes().length > 0 : !isUndefined(this.$changed[key]);
  }
  /**
   * Does the model have any File objects. If so, need to send as multipart.
   *
   * @return bool
   */


  hasFiles() {
    function count(files, total = 0) {
      return Object.keys(files).reduce((carry, key) => {
        const value = files[key];

        if (isArray(value)) {
          return carry + count(value, total);
        } else if (value instanceof File || value instanceof FileList) {
          return carry + 1;
        } else {
          return carry;
        }
      }, total);
    }

    return count(this.toJSON()) !== 0;
  }
  /**
   * Handle settings the $changed attributes when an attribute value is set.
   *
   * @param key string
   * @param value mixed
   * @return void
   */


  handleAttributeChange(key, value) {
    if (this.$initialized) {
      if (this.$changed[key] === value) {
        delete this.$changed[key];
      } else if (!(key in this.$changed)) {
        this.$changed[key] = this.getAttribute(key);
      }
    }

    this.handlePrimaryKeyChange(key, value);
  }
  /**
   * Set an array or object of data as attributes.
   *
   * @param key string
   * @param value mixed
   * @return void
   */


  handlePrimaryKeyChange(key, value) {
    if (this.$key === key) {
      this.$exists = !isUndefined(value) && !isNull(value);
    }
  }
  /**
   * Save the model to the database
   *
   * @param data object
   * @return bool
   */


  save(fill = {}, config = {}) {
    this.fill(fill);
    return new Promise((resolve, reject) => {
      const data = !this.hasFiles() ? this.toJSON() : this.toFormData();
      const method = config.method || (!this.exists() || this.hasFiles() ? 'post' : 'put');
      this.$request = this.constructor.request(method, config.uri || this.uri(), config);

      if (this.hasFiles()) {
        this.$request.headers['Content-Type'] = 'multipart/form-data';
      }

      this.$request.send({
        data
      }).then(response => {
        resolve(this.fill(response.data));
      }, reject);
    });
  }
  /**
   * Delete an existing model
   *
   * @param  {object} config
   * @return {bool}
   */


  delete(config = {}) {
    return new Promise((resolve, reject) => {
      if (!this.exists()) {
        reject(new Error('The model must have a primary key before it can be delete.'));
      }

      this.$request = this.constructor.request('delete', config.uri || this.uri(), config);
      this.$request.send().then(response => {
        resolve(response);
      }, reject);
    });
  }
  /**
   * Cancel the current HTTP request if one exists.
   *
   * @return {self}
   */


  cancel() {
    if (this.$request) {
      this.$request.cancel();
    }

    return this;
  }
  /**
   * Convert the Model instance to a FormData instance
   *
   * @return Object
   */


  toFormData() {
    const form = new FormData();
    each(this.toJSON(), (value, key) => {
      if (isArray(value)) {
        each(value, item => {
          if (!(item instanceof Blob) && (isObject(item) || isArray(item))) {
            item = JSON.stringify(item);
          }

          form.append(key.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
        });
      } else if (!(value instanceof Blob) && isObject(value)) {
        form.append(key, JSON.stringify(value));
      } else if (!isNull(value)) {
        form.append(key, value);
      }
    });
    return form;
  }
  /**
   * Convert the instance to JSON payload
   *
   * @return Object
   */


  toJSON() {
    return pickBy(this.$attributes, (value, key) => {
      return !this.$properties.length || key === this.key() || this.$properties.indexOf(key) !== -1;
    });
  }
  /**
   * Convert the model to a string
   *
   * @return String
   */


  toString() {
    return JSON.stringify(this.toJSON());
  }
  /**
   * Alias for toJSON
   *
   * @return Object
   */


  toJson() {
    return this.toJSON();
  }
  /**
   * Search for a collection of models
   *
   * @param data object
   * @return bool
   */


  static search(query = {}, config = {}) {
    const model = new this();
    config = Object.assign({
      params: query
    }, config);
    return new Promise((resolve, reject) => {
      model.$request = this.request('get', config.uri || model.uri(), config);
      model.$request.send().then(response => {
        resolve(response);
      }, errors => {
        reject(errors);
      });
    });
  }
  /**
   * Find an existing model by id
   *
   * @param data object
   * @return bool
   */


  static find(data, config = {}) {
    return new Promise((resolve, reject) => {
      const model = new this();
      model.fill(typeof data === 'object' ? data : {
        [new this().key()]: data
      });
      model.$request = this.request('get', config.uri || model.uri(), config);
      model.$request.send().then(response => {
        resolve(model.initialize(response.data));
      }, error => {
        reject(error);
      });
    });
  }
  /**
   * Create a request from the model data
   *
   * @param data object
   * @return bool
   */


  static request(method, url, config = {}) {
    return Http_Request.make(method, url, config);
  }

}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BaseForm/BaseForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var BaseFormvue_type_script_lang_js_ = ({
  props: {
    /**
     * The Model method used to send the request.
     *
     * @property Boolean
     */
    method: {
      type: String,
      default: 'save',

      validate(value) {
        return this.model && isFunction(this.model[value]);
      }

    },

    /**
     * An object of form data
     *
     * @property Object
     */
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },

    /**
     * A JSON object of request headers
     *
     * @property Object
     */
    headers: Object,

    /**
     * A JSON object of default request object
     *
     * @property Object
     */
    request: {
      type: Object,

      default() {
        return {};
      }

    },

    /**
     * Display the form fields inline
     *
     * @property Object
     */
    model: {
      type: Object,

      validate(value) {
        return value instanceof Model_Model;
      }

    },

    /**
     * Display the form fields inline
     *
     * @property Boolean
     */
    inline: Boolean,

    /**
     * A callback function for the `submit` event
     *
     * @property Boolean
     */
    novalidate: {
      type: Boolean,
      default: true
    },

    /**
     * A JSON object of key/value pairs to build the query string.
     *
     * @property Object
     */
    query: Object,

    /**
     * A URI or URL used to redirect user after form submits successfully.
     *
     * @property Function|String
     */
    redirect: [Object, String, Function],

    /**
     * The submit function
     *
     * @property Function
     */
    submit: {
      type: Function,

      default(event) {
        if (this.model) {
          this.$emit('submit', event, this.model);
          return this.model[this.method](this.data, pickBy(deepExtend(this.request, {
            params: this.query,
            headers: this.headers,
            onUploadProgress: event => {
              this.$emit('submit:progress', event);
              this.$emit('submit-progress', event);
            }
          }), value => !!value)).then(data => {
            this.onSubmitSuccess(event, data);
          }, errors => {
            this.onSubmitFailed(event, errors);
          });
        }
      }

    }
  },

  data() {
    return {
      errors: {}
    };
  },

  methods: {
    /**
     * A callback function for the `submit` event
     *
     * @property Function
     */
    onSubmit(event) {
      this.submit(event);
    },

    /**
     * A callback function for the `submit:success` event
     *
     * @property Function
     */
    onSubmitSuccess(event, data) {
      this.$emit('submit:success', event, data);
      this.$emit('submit-success', event, data);
      this.$emit('submit:complete', event, true, data);
      this.$emit('submit-complete', event, true, data);

      if (this.redirect && isFunction(this.redirect)) {
        this.redirect(this);
      } else if (this.redirect && this.$router) {
        this.$router.push(this.redirect);
      }
    },

    /**
     * A callback function for the `submit:success` event
     *
     * @property Function
     */
    onSubmitFailed(event, errors) {
      this.$emit('submit:failed', event, errors);
      this.$emit('submit-failed', event, errors);
      this.$emit('submit:complete', event, false, errors);
      this.$emit('submit-complete', event, false, errors);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/BaseForm/BaseForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var BaseForm_BaseFormvue_type_script_lang_js_ = (BaseFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/BaseForm/BaseForm.vue





/* normalize component */

var BaseForm_component = normalizeComponent(
  BaseForm_BaseFormvue_type_script_lang_js_,
  BaseFormvue_type_template_id_7e86fe1a_render,
  BaseFormvue_type_template_id_7e86fe1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseForm = (BaseForm_component.exports);
// CONCATENATED MODULE: ./src/Components/BaseForm/index.js

/* harmony default export */ var Components_BaseForm = (BaseForm);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Breadcrumb/Breadcrumb.vue?vue&type=template&id=34104505&
var Breadcrumbvue_type_template_id_34104505_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"breadcrumb"}},[_c('ol',{staticClass:"breadcrumb"},[_vm._l((_vm.items),function(item,i){return _c('breadcrumb-item',_vm._b({key:i,attrs:{"current":i === item.length - 1}},'breadcrumb-item',item,false))}),_vm._t("default")],2)])}
var Breadcrumbvue_type_template_id_34104505_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Breadcrumb/Breadcrumb.vue?vue&type=template&id=34104505&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Breadcrumb/BreadcrumbItem.vue?vue&type=template&id=ac2d5988&
var BreadcrumbItemvue_type_template_id_ac2d5988_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"breadcrumb-item",class:{'active': _vm.active},attrs:{"aria-current":_vm.active ? 'page' : false}},[(!_vm.active && _vm.href)?_c('a',{attrs:{"href":_vm.href}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):(!_vm.active && _vm.to)?_c('router-link',{attrs:{"to":_vm.to}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):[_vm._t("default",[_vm._v(_vm._s(_vm.label))])]],2)}
var BreadcrumbItemvue_type_template_id_ac2d5988_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Breadcrumb/BreadcrumbItem.vue?vue&type=template&id=ac2d5988&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Breadcrumb/BreadcrumbItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BreadcrumbItemvue_type_script_lang_js_ = ({
  name: 'BreadcrumbItem',
  props: {
    /**
     * Is the item active?
     *
     * @prop {Boolean}
     */
    active: Boolean,

    /**
     * An href attribute
     *
     * @prop {String}
     */
    href: String,

    /**
     * An breadcrumb label
     *
     * @prop {String}
     */
    label: String,

    /**
     * The to attribute which is passed to the <router-link> component.
     *
     * @prop {Object}
     */
    to: [String, Object]
  }
});
// CONCATENATED MODULE: ./src/Components/Breadcrumb/BreadcrumbItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_BreadcrumbItemvue_type_script_lang_js_ = (BreadcrumbItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Breadcrumb/BreadcrumbItem.vue





/* normalize component */

var BreadcrumbItem_component = normalizeComponent(
  Breadcrumb_BreadcrumbItemvue_type_script_lang_js_,
  BreadcrumbItemvue_type_template_id_ac2d5988_render,
  BreadcrumbItemvue_type_template_id_ac2d5988_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BreadcrumbItem = (BreadcrumbItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  name: 'Breadcrumb',
  components: {
    BreadcrumbItem: BreadcrumbItem
  },
  props: {
    /**
     * An array of breadcrumbs
     *
     * @prop {Array}
     */
    items: {
      type: Array,

      default() {
        return [];
      }

    }
  }
});
// CONCATENATED MODULE: ./src/Components/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Breadcrumb/Breadcrumb.vue





/* normalize component */

var Breadcrumb_component = normalizeComponent(
  Breadcrumb_Breadcrumbvue_type_script_lang_js_,
  Breadcrumbvue_type_template_id_34104505_render,
  Breadcrumbvue_type_template_id_34104505_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Breadcrumb = (Breadcrumb_component.exports);
// CONCATENATED MODULE: ./src/Components/Breadcrumb/index.js



/* harmony default export */ var Components_Breadcrumb = (Breadcrumb);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Btn/Btn.vue?vue&type=template&id=3f1fa84d&
var Btnvue_type_template_id_3f1fa84d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.to)?_c('router-link',{class:_vm.classes,attrs:{"to":_vm.to,"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):(_vm.href)?_c('a',{class:_vm.classes,attrs:{"href":_vm.href,"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):(_vm.label)?_c('label',{class:_vm.classes,attrs:{"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):_c('button',{class:_vm.classes,attrs:{"type":_vm.type,"disabled":_vm.disabled},on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var Btnvue_type_template_id_3f1fa84d_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Btn/Btn.vue?vue&type=template&id=3f1fa84d&

// CONCATENATED MODULE: ./src/Mixins/Sizeable/Sizeable.js


/* harmony default export */ var Sizeable = ({
  props: {
    /**
     * The size of the form control
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md',
      validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
    }
  },
  computed: {
    sizeableClassPrefix() {
      return kebabCase(this.$options.name);
    },

    sizeableClass() {
      return Prefix_prefix(this.size, this.sizeableClassPrefix);
    }

  }
});
// CONCATENATED MODULE: ./src/Mixins/Sizeable/index.js

/* harmony default export */ var Mixins_Sizeable = (Sizeable);
// CONCATENATED MODULE: ./src/Mixins/Colorable/Colorable.js
/* harmony default export */ var Colorable = ({
  computed: {
    colorableClasses() {
      const classes = {};

      for (let i in this.$attrs) {
        if (i.match(/^bg|text|border|bg-gradient-/) && !!this.$attrs[i] || this.$attrs[i] === undefined) {
          classes[i] = true;
        }
      }

      return classes;
    }

  }
});
// CONCATENATED MODULE: ./src/Mixins/Colorable/index.js

/* harmony default export */ var Mixins_Colorable = (Colorable);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Btn/Btn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Btnvue_type_script_lang_js_ = ({
  name: 'Btn',
  mixins: [Mixins_Variant, Mixins_Sizeable, Mixins_Colorable, Mixins_MergeClasses],
  props: {
    /**
     * Display button with active state
     *
     * @property String
     */
    active: Boolean,

    /**
     * Display button with blocked state
     *
     * @property String
     */
    block: Boolean,

    /**
     * Display button with disabled state
     *
     * @property String
     */
    disabled: Boolean,

    /**
     * If an href is passed, button is an router-link element
     *
     * @property Boolean
     */
    href: String,

    /**
     * Should use <label> as the element for the button. Used for inputs
     * wrappers (toggles).
     *
     * @property Boolean
     */
    label: Boolean,

    /**
     * Display as an outline button
     *
     * @property String
     */
    outline: Boolean,

    /**
     * If an to is passed, button is an router-link element
     *
     * @property Boolean
     */
    to: [Object, String],

    /**
     * The type attribute for the button. Not applied if an anchor
     *
     * @property String
     */
    type: String
  },
  computed: {
    variantClassPrefix() {
      return kebabCase(this.$options.name) + (this.outline ? '-outline' : '');
    },

    classes() {
      return this.mergeClasses('btn', this.variantClass, this.sizeableClass, this.colorableClasses, this.block ? 'btn-block' : '', this.active ? 'active' : '');
    }

  },
  methods: {
    onClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      } else {
        event.preventDefault();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Btn/Btn.vue?vue&type=script&lang=js&
 /* harmony default export */ var Btn_Btnvue_type_script_lang_js_ = (Btnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Btn/Btn.vue?vue&type=style&index=0&lang=scss&
var Btnvue_type_style_index_0_lang_scss_ = __webpack_require__("622d");

// CONCATENATED MODULE: ./src/Components/Btn/Btn.vue






/* normalize component */

var Btn_component = normalizeComponent(
  Btn_Btnvue_type_script_lang_js_,
  Btnvue_type_template_id_3f1fa84d_render,
  Btnvue_type_template_id_3f1fa84d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Btn = (Btn_component.exports);
// CONCATENATED MODULE: ./src/Components/Btn/index.js

/* harmony default export */ var Components_Btn = (Btn);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnActivity/BtnActivity.vue?vue&type=template&id=8e4e706e&
var BtnActivityvue_type_template_id_8e4e706e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:_vm.classes,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label)+"\n    "),_vm._t("default"),_c('activity-indicator',_vm._b({},'activity-indicator',_vm.indicatorProps,false))],2)}
var BtnActivityvue_type_template_id_8e4e706e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BtnActivity/BtnActivity.vue?vue&type=template&id=8e4e706e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnActivity/BtnActivity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



const convertAnimationDelayToInt = function (delay) {
  const num = parseFloat(delay, 10);
  const matches = delay.match(/m?s/);
  const unit = matches ? matches[0] : false;
  let milliseconds;

  switch (unit) {
    case 's':
      // seconds
      milliseconds = num * 1000;
      break;

    case 'ms':
    default:
      milliseconds = num;
      break;
  }

  return milliseconds || 0;
};

const animated = function (el, callback) {
  const defaultView = (el.ownerDocument || document).defaultView;
  setTimeout(() => {
    callback.apply();
  }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};

/* harmony default export */ var BtnActivityvue_type_script_lang_js_ = ({
  name: 'BtnActivity',
  components: {
    ActivityIndicator: Components_ActivityIndicator
  },
  props: {
    /**
     * Make the button appear with the active state.
     *
     * @property {Boolea}n}
     */
    active: Boolean,

    /**
     * Show the activity indicator inside the button.
     *
     * @property {Boolea}n}
     */
    activity: Boolean,

    /**
     * Display the button as block width.
     *
     * @property {Boolea}n}
     */
    block: Boolean,

    /**
     * Make the button appear with the disabled state.
     *
     * @property {Boolea}n}
     */
    disabled: Boolean,

    /**
     * The button label. If not passed as a property, label must be passed
     * inside the element's html.
     *
     * @property {String}
     */
    label: String,

    /**
     * The button icon
     *
     * @property {String}
     */
    icon: String,

    /**
     * The `type` attribute for the button element.
     *
     * @property {String}
     */
    type: String,

    /**
     * The size of the button.
     *
     * @property {String}
     */
    size: {
      type: String,
      default: 'md'
    },

    /**
     * The variant of the button.
     *
     * @property {String}
     */
    variant: {
      type: String,
      default: 'primary'
    },

    /**
     * The type of activity indicator inside the button.
     *
     * @property {String}
     */
    indicator: {
      type: [Object, String],
      default: 'spinner'
    },

    /**
     * The orientation of the activity button inside the button.
     *
     * @property {String}
     */
    orientation: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    /**
     * An object of classes to append to the button.
     *
     * @return void
     */
    classes() {
      const classes = {
        'disabled': this.disabled,
        'active': this.active,
        'btn-block': this.block,
        'btn-activity': this.activity
      };
      classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
      classes['btn-' + this.variant.replace('btn-', '')] = !!this.variant;
      classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
      classes['btn-activity-indicator-' + this.indicatorProps.type.replace('btn-activity-indicator-', '')] = !!this.indicatorProps.type;
      return classes;
    },

    indicatorProps() {
      return Object.assign({
        type: 'spinner'
      }, (isString_isString(this.indicator) ? {
        type: this.indicator
      } : this.indicator) || {});
    }

  },
  watch: {
    activity(value) {
      if (value) {
        this.showActivity();
      } else {
        this.hideActivity();
      }
    }

  },
  methods: {
    /**
     * Disable the button.
     *
     * @return void
     */
    disable() {
      this.$el.disabled = true;
    },

    /**
     * Enable the button.
     *
     * @return void
     */
    enable() {
      this.$el.disabled = false;
    },

    /**
     * Show the activity indicator inside the button.
     *
     * @return void
     */
    showActivity() {
      this.disable();
      animated(this.$el, () => {
        this.$el.classList.add('btn-activity');
        this.$emit('show-activity');
      });
    },

    /**
     * Hide the activity indicator inside the button.
     *
     * @return void
     */
    hideActivity() {
      this.$el.classList.add('btn-hide-activity');
      animated(this.$el, () => {
        this.enable();
        this.$el.classList.remove('btn-activity', 'btn-hide-activity');
        this.$emit('hide-activity');
      });
    },

    /**
     * The click callback function
     *
     * @return void
     */
    onClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      } else {
        event.preventDefault();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/BtnActivity/BtnActivity.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnActivity_BtnActivityvue_type_script_lang_js_ = (BtnActivityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/BtnActivity/BtnActivity.vue?vue&type=style&index=0&lang=scss&
var BtnActivityvue_type_style_index_0_lang_scss_ = __webpack_require__("e223");

// CONCATENATED MODULE: ./src/Components/BtnActivity/BtnActivity.vue






/* normalize component */

var BtnActivity_component = normalizeComponent(
  BtnActivity_BtnActivityvue_type_script_lang_js_,
  BtnActivityvue_type_template_id_8e4e706e_render,
  BtnActivityvue_type_template_id_8e4e706e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnActivity = (BtnActivity_component.exports);
// CONCATENATED MODULE: ./src/Components/BtnActivity/index.js

/* harmony default export */ var Components_BtnActivity = (BtnActivity);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnFile/BtnFile.vue?vue&type=template&id=6ec55397&
var BtnFilevue_type_template_id_6ec55397_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('btn',{staticClass:"btn-file",attrs:{"type":_vm.type,"variant":_vm.variant,"block":_vm.block,"size":_vm.size,"disabled":_vm.disabled,"active":_vm.active}},[_vm._t("default"),_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],attrs:{"type":"file"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('change', _vm.multiple ? $event.target.files : $event.target.files[0])}}},'input',_vm.controlAttributes,false))],2)}
var BtnFilevue_type_template_id_6ec55397_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BtnFile/BtnFile.vue?vue&type=template&id=6ec55397&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FileField/FileField.vue?vue&type=template&id=17dd773c&
var FileFieldvue_type_template_id_17dd773c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{class:_vm.labelClass,attrs:{"for":_vm.$attrs.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()]),_c('div',{staticClass:"custom-file"},[_vm._t("placeholder",[_c('form-label',{class:_vm.mergeClasses(_vm.colorableClasses, 'custom-file-label'),attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.$attrs.placeholder || 'Choose file')}})]),_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",attrs:{"type":"file"},domProps:{"value":_vm.value},on:{"change":function($event){return _vm.$emit('change', $event.target.files)}}},'input',_vm.controlAttributes,false)),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()]),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)],2)}
var FileFieldvue_type_template_id_17dd773c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/FileField/FileField.vue?vue&type=template&id=17dd773c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/HelpText/HelpText.vue?vue&type=template&id=0ddc87f1&
var HelpTextvue_type_template_id_0ddc87f1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('small',{staticClass:"form-text",class:_vm.classes},[_vm._t("default")],2)}
var HelpTextvue_type_template_id_0ddc87f1_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/HelpText/HelpText.vue?vue&type=template&id=0ddc87f1&

// CONCATENATED MODULE: ./src/Mixins/Screenreaders/Screenreaders.js
/* harmony default export */ var Screenreaders = ({
  props: {
    /**
     * Should show only for screenreaders
     *
     * @property Boolean
     */
    srOnly: Boolean,

    /**
     * Should be focusable for screenreaders
     *
     * @property Boolean
     */
    srOnlyFocusable: Boolean
  },
  computed: {
    screenreaderClasses() {
      return {
        'sr-only': this.srOnly,
        'sr-only-focusable': this.srOnlyFocusable
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var HelpTextvue_type_script_lang_js_ = ({
  name: 'HelpText',
  mixins: [Colorable, Screenreaders],
  computed: {
    classes() {
      return extend({}, this.screenreaderClasses, this.colorableClasses);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
 /* harmony default export */ var HelpText_HelpTextvue_type_script_lang_js_ = (HelpTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/HelpText/HelpText.vue





/* normalize component */

var HelpText_component = normalizeComponent(
  HelpText_HelpTextvue_type_script_lang_js_,
  HelpTextvue_type_template_id_0ddc87f1_render,
  HelpTextvue_type_template_id_0ddc87f1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HelpText = (HelpText_component.exports);
// CONCATENATED MODULE: ./src/Components/HelpText/index.js

/* harmony default export */ var Components_HelpText = (HelpText);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormGroup/FormGroup.vue?vue&type=template&id=91e8426a&
var FormGroupvue_type_template_id_91e8426a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'form-group': !!_vm.group}},[_vm._t("default")],2)}
var FormGroupvue_type_template_id_91e8426a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/FormGroup/FormGroup.vue?vue&type=template&id=91e8426a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var FormGroupvue_type_script_lang_js_ = ({
  name: 'FormGroup',
  props: {
    group: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormGroup_FormGroupvue_type_script_lang_js_ = (FormGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/FormGroup/FormGroup.vue?vue&type=style&index=0&lang=scss&
var FormGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("51d4");

// CONCATENATED MODULE: ./src/Components/FormGroup/FormGroup.vue






/* normalize component */

var FormGroup_component = normalizeComponent(
  FormGroup_FormGroupvue_type_script_lang_js_,
  FormGroupvue_type_template_id_91e8426a_render,
  FormGroupvue_type_template_id_91e8426a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormGroup = (FormGroup_component.exports);
// CONCATENATED MODULE: ./src/Components/FormGroup/index.js

/* harmony default export */ var Components_FormGroup = (FormGroup);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormLabel/FormLabel.vue?vue&type=template&id=77d3c7c8&
var FormLabelvue_type_template_id_77d3c7c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classes},[_vm._t("default")],2)}
var FormLabelvue_type_template_id_77d3c7c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/FormLabel/FormLabel.vue?vue&type=template&id=77d3c7c8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var FormLabelvue_type_script_lang_js_ = ({
  name: 'FormLabel',
  mixins: [Colorable, Screenreaders],
  computed: {
    classes() {
      return extend({}, this.screenreaderClasses, this.colorableClasses);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormLabel_FormLabelvue_type_script_lang_js_ = (FormLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/FormLabel/FormLabel.vue





/* normalize component */

var FormLabel_component = normalizeComponent(
  FormLabel_FormLabelvue_type_script_lang_js_,
  FormLabelvue_type_template_id_77d3c7c8_render,
  FormLabelvue_type_template_id_77d3c7c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormLabel = (FormLabel_component.exports);
// CONCATENATED MODULE: ./src/Components/FormLabel/index.js

/* harmony default export */ var Components_FormLabel = (FormLabel);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=6841f31c&
var FormFeedbackvue_type_template_id_6841f31c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.label || typeof _vm.label === 'string')?_c('div',{class:_vm.classes},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()}
var FormFeedbackvue_type_template_id_6841f31c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=6841f31c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var FormFeedbackvue_type_script_lang_js_ = ({
  name: 'FormFeedback',
  mixins: [Colorable],
  props: {
    /**
     * The value of label element. If no value, no label will appear.
     *
     * @property String
     */
    label: [Boolean, String],

    /**
     * Should the feedback marked as invalid
     *
     * @property String
     */
    invalid: Boolean,

    /**
     * Should the feedback marked as invalid
     *
     * @property String
     */
    valid: Boolean
  },
  computed: {
    classes() {
      return {
        'invalid-feedback': this.invalid,
        'valid-feedback': this.valid && !this.invalid
      };
    }

  }
});
// CONCATENATED MODULE: ./src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormFeedback_FormFeedbackvue_type_script_lang_js_ = (FormFeedbackvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/FormFeedback/FormFeedback.vue





/* normalize component */

var FormFeedback_component = normalizeComponent(
  FormFeedback_FormFeedbackvue_type_script_lang_js_,
  FormFeedbackvue_type_template_id_6841f31c_render,
  FormFeedbackvue_type_template_id_6841f31c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormFeedback = (FormFeedback_component.exports);
// CONCATENATED MODULE: ./src/Components/FormFeedback/index.js

/* harmony default export */ var Components_FormFeedback = (FormFeedback);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputField/InputField.vue?vue&type=template&id=46008168&
var InputFieldvue_type_template_id_46008168_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{ref:"label",class:_vm.labelClass,attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{staticClass:"form-group-inner"},[_vm._t("control",[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'input',_vm.controlAttributes,false))]),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)])],2),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"label":_vm.validFeedback,"valid":""}}):(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"label":_vm.invalidFeedback,"invalid":""}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{ref:"help",domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var InputFieldvue_type_template_id_46008168_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/InputField/InputField.vue?vue&type=template&id=46008168&

// CONCATENATED MODULE: ./src/Mixins/FormControl/FormControl.js








const EMPTY_CLASS = 'is-empty';
const FOCUS_CLASS = 'has-focus';
const CHANGED_CLASS = 'has-changed';
const CUSTOM_PREFIX = 'custom';

function addClass(el, vnode, css) {
  // el.classList.add(css);
  vnode.context.$el.classList.add(css);
}

function removeClass(el, vnode, css) {
  // el.classList.remove(css);
  vnode.context.$el.classList.remove(css);
}

function addEmptyClass(el, vnode) {
  if (isEmpty(el.value) || el.tagName === 'SELECT' && el.selectedIndex === -1) {
    addClass(el, vnode, EMPTY_CLASS);
  }
}

/* harmony default export */ var FormControl = ({
  inheritAttrs: false,
  mixins: [Mixins_Colorable, Mixins_MergeClasses],
  props: {
    /**
     * Show type activity indicator.
     *
     * @property Boolean
     */
    activity: {
      type: Boolean,
      default: false
    },

    /**
     * Is the form control a custom styled component.
     *
     * @property Boolean
     */
    custom: {
      type: Boolean,
      default: false
    },

    /**
     * The value of label element. If no value, no label will appear.
     *
     * @property String
     */
    label: [Number, String],

    /**
     * The field id attribute value.
     *
     * @property String
     */
    value: {
      default: null
    },

    /**
     * Add form-group wrapper to input
     *
     * @property String
     */
    group: {
      type: Boolean,
      default: true
    },

    /**
     * An inline field validation error.
     *
     * @property String|Boolean
     */
    error: [Boolean, String],

    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     *
     * @property Object|Boolean
     */
    errors: {
      type: Object,

      default() {
        return {};
      }

    },

    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     *
     * @property String
     */
    feedback: [String, Array],

    /**
     * An array of event names that correlate with callback functions
     *
     * @property Function
     */
    bindEvents: {
      type: Array,

      default() {
        return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
      }

    },

    /**
     * The default class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'form-control'
    },

    /**
     * The default label class assigned to the label element
     *
     * @property String
     */
    labelClass: [Object, String],

    /**
     * Hide the label for browsers, but leave it for screen readers.
     *
     * @property String
     */
    hideLabel: Boolean,

    /**
     * The invalid property
     *
     * @property String
     */
    invalid: Boolean,

    /**
     * The valid property
     *
     * @property String
     */
    valid: Boolean,

    /**
     * Additional margin/padding classes for fine control of spacing
     *
     * @property String
     */
    spacing: String,

    /**
     * The size of the form control
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md',
      validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
    },

    /**
     * Display the form field inline
     *
     * @property String
     */
    inline: Boolean,

    /**
     * Some instructions to appear under the field label
     *
     * @property String
     */
    helpText: [Number, String]
  },
  directives: {
    bindEvents: {
      bind(el, binding, vnode) {
        function changedValue(el, value) {
          addClass(el, vnode, CHANGED_CLASS);

          if (!isEmpty(value) || el.selectedIndex && el.selectedIndex > -1) {
            removeClass(el, vnode, EMPTY_CLASS);
          } else if (!el.classList.contains(CHANGED_CLASS)) {
            addClass(el, vnode, EMPTY_CLASS);
          }

          if (el.tagName === 'SELECT' && el.querySelector('[value=""]')) {
            el.querySelector('[value=""]').selected = !value;
          }
        }

        vnode.context.$watch('value', value => {
          changedValue(vnode.context.$el, value);
        });
        el.addEventListener('blur', event => {
          if (el.classList.contains(EMPTY_CLASS)) {
            removeClass(el, vnode, CHANGED_CLASS);
          }

          removeClass(el, vnode, FOCUS_CLASS);
        });
        /*                
        el.addEventListener('input', event => {
            changedValue(event.target, event.target.value);
        });
        */

        el.addEventListener('change', event => {
          changedValue(event.target, event.target.value);
        }); // Add/remove the has-focus class from the form control

        el.addEventListener('focus', event => {
          addClass(el, vnode, FOCUS_CLASS);
        }); // Bubble the native events up to the vue component.

        each(vnode.context.bindEvents, name => {
          el.addEventListener(name, event => {
            vnode.context.$emit(name, event);
          });
        });

        if (el.selectedIndex >= 0) {
          el.setAttribute('data-selected-index', el.selectedIndex);
        }
      },

      inserted(el, binding, vnode) {
        addEmptyClass(el, vnode);

        if (typeof el.selectedIndex === 'number' && el.selectedIndex > -1) {// addClass(el, vnode, CHANGED_CLASS);
        }
      },

      update(el, binding, vnode) {
        addEmptyClass(el, vnode);
      }

    }
  },
  methods: {
    blur() {
      if (this.getInputField()) {
        this.getInputField().blur();
      }
    },

    focus() {
      if (this.getInputField()) {
        this.getInputField().focus();
      }
    },

    getInputField() {
      return this.$el.querySelector('.form-control, input, select, textarea');
    },

    getFieldErrors() {
      let errors = this.error || this.errors;

      if (isObject(this.errors)) {
        errors = this.errors[this.$attrs.name || this.$attrs.id];
      }

      return !errors || isArray(errors) || isObject(errors) ? errors : [errors];
    }

  },
  computed: {
    controlAttributes() {
      return Object.keys(this.$attrs).concat([['class', this.controlClasses]]).reduce((carry, key) => {
        if (isArray(key)) {
          carry[key[0]] = key[1];
        } else {
          carry[key] = this[key] || this.$attrs[key];
        }

        return carry;
      }, {});
    },

    controlClass() {
      return this.custom ? this.customControlClass : this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
    },

    controlSizeClass() {
      return Prefix(this.size, this.controlClass);
    },

    customControlClass() {
      return 'custom-control';
    },

    formGroupClasses() {
      const name = Prefix(kebabCase(this.$options.name), this.custom ? CUSTOM_PREFIX : '');
      return this.mergeClasses(name, Prefix(this.size, name), {
        'has-activity': this.activity,
        'is-valid': !!(this.valid || this.validFeedback),
        'is-invalid': !!(this.invalid || this.invalidFeedback)
      });
    },

    controlClasses() {
      return this.mergeClasses(this.controlClass, this.colorableClasses, this.controlSizeClass, this.spacing || '', this.valid || this.validFeedback ? 'is-valid' : '', this.invalid || this.invalidFeedback ? 'is-invalid' : '');
    },

    hasDefaultSlot() {
      return !!this.$slots.default;
    },

    invalidFeedback() {
      if (this.error) {
        return this.error;
      }

      const errors = this.getFieldErrors();
      return isArray(errors) ? errors.filter(error => {
        return error && typeof error === 'string';
      }).join('<br>') : errors;
    },

    validFeedback() {
      return isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
    }

  }
});
// CONCATENATED MODULE: ./src/Mixins/FormControl/index.js

/* harmony default export */ var Mixins_FormControl = (FormControl);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputField/InputField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var InputFieldvue_type_script_lang_js_ = ({
  name: 'InputField',
  components: {
    HelpText: Components_HelpText,
    FormGroup: Components_FormGroup,
    FormLabel: Components_FormLabel,
    FormFeedback: Components_FormFeedback,
    ActivityIndicator: Components_ActivityIndicator
  },
  mixins: [Mixins_Colorable, Mixins_FormControl]
});
// CONCATENATED MODULE: ./src/Components/InputField/InputField.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputField_InputFieldvue_type_script_lang_js_ = (InputFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/InputField/InputField.vue?vue&type=style&index=0&lang=scss&
var InputFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("ecb4");

// CONCATENATED MODULE: ./src/Components/InputField/InputField.vue






/* normalize component */

var InputField_component = normalizeComponent(
  InputField_InputFieldvue_type_script_lang_js_,
  InputFieldvue_type_template_id_46008168_render,
  InputFieldvue_type_template_id_46008168_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputField = (InputField_component.exports);
// CONCATENATED MODULE: ./src/Components/InputField/index.js

/* harmony default export */ var Components_InputField = (InputField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FileField/FileField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var FileFieldvue_type_script_lang_js_ = ({
  name: 'FileField',
  components: {
    HelpText: Components_HelpText,
    FormGroup: Components_FormGroup,
    FormLabel: Components_FormLabel,
    FormFeedback: Components_FormFeedback
  },
  extends: Components_InputField,
  mixins: [Mixins_MergeClasses],
  model: {
    event: 'change'
  },
  props: {
    /**
     * An array of event names that correlate with callback functions
     *
     * @property Function
     */
    bindEvents: {
      type: Array,

      default() {
        return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
      }

    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'custom-file-input'
    },

    /**
     * An array of valid extensions
     *
     * @property String
     */
    extensions: Array,

    /**
     * The type attribute
     *
     * @property String
     */
    multiple: Boolean,

    /**
     * The height attribute for the control element
     *
     * @property String
     */
    height: [Number, String],

    /**
     * The width attribute for the control element
     *
     * @property String
     */
    width: [Number, String]
  }
});
// CONCATENATED MODULE: ./src/Components/FileField/FileField.vue?vue&type=script&lang=js&
 /* harmony default export */ var FileField_FileFieldvue_type_script_lang_js_ = (FileFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/FileField/FileField.vue





/* normalize component */

var FileField_component = normalizeComponent(
  FileField_FileFieldvue_type_script_lang_js_,
  FileFieldvue_type_template_id_17dd773c_render,
  FileFieldvue_type_template_id_17dd773c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FileField = (FileField_component.exports);
// CONCATENATED MODULE: ./src/Components/FileField/index.js

/* harmony default export */ var Components_FileField = (FileField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnFile/BtnFile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BtnFilevue_type_script_lang_js_ = ({
  name: 'BtnFile',
  components: {
    Btn: Components_Btn
  },
  extends: Components_Btn,
  mixins: [Components_FileField],
  model: {
    event: 'change'
  },
  props: {
    /**
     * The type attribute for the button. Not applied if an anchor
     *
     * @property String
     */
    type: {
      type: String,
      default: 'button'
    }
  }
});
// CONCATENATED MODULE: ./src/Components/BtnFile/BtnFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnFile_BtnFilevue_type_script_lang_js_ = (BtnFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/BtnFile/BtnFile.vue?vue&type=style&index=0&lang=scss&
var BtnFilevue_type_style_index_0_lang_scss_ = __webpack_require__("1187");

// CONCATENATED MODULE: ./src/Components/BtnFile/BtnFile.vue






/* normalize component */

var BtnFile_component = normalizeComponent(
  BtnFile_BtnFilevue_type_script_lang_js_,
  BtnFilevue_type_template_id_6ec55397_render,
  BtnFilevue_type_template_id_6ec55397_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnFile = (BtnFile_component.exports);
// CONCATENATED MODULE: ./src/Components/BtnFile/index.js

/* harmony default export */ var Components_BtnFile = (BtnFile);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnGroup/BtnGroup.vue?vue&type=template&id=0bee1d3c&
var BtnGroupvue_type_template_id_0bee1d3c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,attrs:{"data-toggle":_vm.toggle ? 'buttons' : false,"role":"group"}},[(_vm.buttons)?_vm._l((_vm.buttons),function(button,i){return _c('btn',_vm._b({key:i},'btn',button,false))}):_vm._e(),_vm._t("default")],2)}
var BtnGroupvue_type_template_id_0bee1d3c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnGroup.vue?vue&type=template&id=0bee1d3c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnGroup/BtnGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BtnGroupvue_type_script_lang_js_ = ({
  name: 'BtnGroup',
  components: {
    Btn: Components_Btn
  },
  mixins: [Mixins_Sizeable, Mixins_Colorable, Mixins_MergeClasses],
  props: {
    /**
     * An array of buttons
     *
     * @type {Array}
     */
    buttons: Array,

    /**
     * Denote the button group as toggle buttons
     *
     * @type {Boolean}
     */
    toggle: Boolean,

    /**
     * Display the buttons vertically
     *
     * @type {Boolean}
     */
    vertical: Boolean
  },
  computed: {
    classes() {
      return this.mergeClasses(this.colorableClasses, {
        'btn-group': !this.vertical,
        'btn-group-toggle': this.toggle,
        'btn-group-vertical': this.vertical
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnGroup_BtnGroupvue_type_script_lang_js_ = (BtnGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnGroup.vue





/* normalize component */

var BtnGroup_component = normalizeComponent(
  BtnGroup_BtnGroupvue_type_script_lang_js_,
  BtnGroupvue_type_template_id_0bee1d3c_render,
  BtnGroupvue_type_template_id_0bee1d3c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnGroup = (BtnGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=template&id=656e44ec&
var BtnGroupTogglevue_type_template_id_656e44ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-group-toggle",attrs:{"data-toggle":"buttons"}},[_vm._t("default")],2)}
var BtnGroupTogglevue_type_template_id_656e44ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=template&id=656e44ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BtnGroupTogglevue_type_script_lang_js_ = ({
  name: 'BtnGroupToggle'
});
// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnGroup_BtnGroupTogglevue_type_script_lang_js_ = (BtnGroupTogglevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnGroupToggle.vue





/* normalize component */

var BtnGroupToggle_component = normalizeComponent(
  BtnGroup_BtnGroupTogglevue_type_script_lang_js_,
  BtnGroupTogglevue_type_template_id_656e44ec_render,
  BtnGroupTogglevue_type_template_id_656e44ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnGroupToggle = (BtnGroupToggle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnGroup/BtnToolbar.vue?vue&type=template&id=396455dc&
var BtnToolbarvue_type_template_id_396455dc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-toolbar",attrs:{"role":"toolbar"}},[_vm._t("default")],2)}
var BtnToolbarvue_type_template_id_396455dc_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnToolbar.vue?vue&type=template&id=396455dc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnGroup/BtnToolbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BtnToolbarvue_type_script_lang_js_ = ({
  name: 'BtnToolbar'
});
// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnToolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnGroup_BtnToolbarvue_type_script_lang_js_ = (BtnToolbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/BtnGroup/BtnToolbar.vue





/* normalize component */

var BtnToolbar_component = normalizeComponent(
  BtnGroup_BtnToolbarvue_type_script_lang_js_,
  BtnToolbarvue_type_template_id_396455dc_render,
  BtnToolbarvue_type_template_id_396455dc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnToolbar = (BtnToolbar_component.exports);
// CONCATENATED MODULE: ./src/Components/BtnGroup/index.js




/* harmony default export */ var Components_BtnGroup = (BtnGroup);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnDropdown/BtnDropdown.vue?vue&type=template&id=3b87ce4c&
var BtnDropdownvue_type_template_id_3b87ce4c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.split)?_c('btn-group',[(!_vm.dropleft)?[(_vm.href)?_c('a',{class:_vm.actionClasses,attrs:{"href":_vm.href},on:{"click":_vm.onClick}},[_vm._t("icon",[(_vm.icon)?_c('icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon}}):_vm._e()]),_vm._t("label",[[_vm._v(_vm._s(_vm.label))]])],2):_c('button',{class:_vm.actionClasses,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[_vm._t("icon",[(_vm.icon)?_c('icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon}}):_vm._e()]),_vm._t("label",[[_vm._v(_vm._s(_vm.label))]])],2)]:_vm._e(),_c('btn-group',{class:{'dropup': _vm.dropup, 'dropright': _vm.dropright, 'dropleft': _vm.dropleft}},[_c('button',{class:_vm.toggleClasses,attrs:{"id":_vm.$attrs.id,"type":"button","aria-haspopup":"true","aria-expanded":_vm.isDropdownShowing},on:{"click":function($event){$event.preventDefault();!_vm.isDropdownShowing ? _vm.show() : _vm.hide()},"blur":_vm.onBlur}}),_c('dropdown-menu',{attrs:{"id":_vm.$attrs.id,"align":_vm.align,"show":_vm.isDropdownShowing},on:{"update:show":function($event){_vm.isDropdownShowing=$event},"click":_vm.onMenuClick,"item:click":_vm.onItemClick}},[_vm._t("default")],2)],1),(_vm.dropleft)?[(_vm.href)?_c('a',{class:_vm.actionClasses,attrs:{"href":_vm.href},on:{"click":_vm.onClick}},[_vm._t("icon",[(_vm.icon)?_c('icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon}}):_vm._e()]),_vm._t("label",[[_vm._v(_vm._s(_vm.label))]])],2):_c('button',{class:_vm.actionClasses,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[_vm._t("icon",[(_vm.icon)?_c('icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon}}):_vm._e()]),_vm._t("label",[[_vm._v(_vm._s(_vm.label))]])],2)]:_vm._e()],2):_c('btn-group',{class:{'dropup': _vm.dropup, 'dropright': _vm.dropright, 'dropleft': _vm.dropleft},on:{"click":_vm.onClick}},[_c('button',{class:_vm.toggleClasses,attrs:{"id":_vm.$attrs.id,"aria-haspopup":"true","aria-expanded":_vm.isDropdownShowing,"type":_vm.type},on:{"click":function($event){$event.preventDefault();!_vm.isDropdownShowing ? _vm.show() : _vm.hide()},"blur":_vm.onBlur}},[_vm._t("icon",[(_vm.icon)?_c('icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon}}):_vm._e()]),_vm._t("label",[[_vm._v(_vm._s(_vm.label))]])],2),_c('dropdown-menu',{attrs:{"id":_vm.$attrs.id,"align":_vm.align,"show":_vm.isDropdownShowing},on:{"update:show":function($event){_vm.isDropdownShowing=$event},"click":_vm.onMenuClick,"item:click":_vm.onItemClick}},[_vm._t("default")],2)],1)}
var BtnDropdownvue_type_template_id_3b87ce4c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BtnDropdown/BtnDropdown.vue?vue&type=template&id=3b87ce4c&

// EXTERNAL MODULE: external "Popper"
var external_Popper_ = __webpack_require__("dbbc");
var external_Popper_default = /*#__PURE__*/__webpack_require__.n(external_Popper_);

// CONCATENATED MODULE: ./src/Helpers/Uuid/Uuid.js
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
// CONCATENATED MODULE: ./src/Helpers/Uuid/index.js

/* harmony default export */ var Uuid = (uuid);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenu.vue?vue&type=template&id=e4d2e656&
var DropdownMenuvue_type_template_id_e4d2e656_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-menu",class:{'dropdown-menu-right': _vm.align === 'right', 'show': _vm.show},attrs:{"aria-labelledby":_vm.id,"tabindex":"-1"},on:{"click":_vm.onClick}},[_vm._l((_vm.items),function(item,i){return _c(_vm.prefix(item.type || 'item', 'dropdown-menu'),_vm._b({key:i,tag:"component"},'component',item,false))}),_vm._t("default")],2)}
var DropdownMenuvue_type_template_id_e4d2e656_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenu.vue?vue&type=template&id=e4d2e656&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenuItem.vue?vue&type=template&id=5a190cc3&
var DropdownMenuItemvue_type_template_id_5a190cc3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",staticClass:"dropdown-item",class:{'active': _vm.active},attrs:{"to":_vm.to,"href":_vm.href || (_vm.component === 'a' ? '#' : false),"type":_vm.component === 'button' ? 'button' : false},on:{"click":_vm.onClick}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)}
var DropdownMenuItemvue_type_template_id_5a190cc3_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuItem.vue?vue&type=template&id=5a190cc3&

// CONCATENATED MODULE: ./src/Mixins/Proxy/Proxy.js

/* harmony default export */ var Proxy = ({
  methods: {
    proxy(callback, event) {
      if (isFunction(callback)) {
        callback.apply(this, [].slice.call(arguments).splice(1));
        event.preventDefault();
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DropdownMenuItemvue_type_script_lang_js_ = ({
  name: 'DropdownMenuItem',
  mixins: [Proxy],
  props: {
    /**
     * Is the menu item active.
     *
     * @property Object
     */
    active: Boolean,

    /**
     * Is the menu item a button
     *
     * @property Object
     */
    button: Boolean,

    /**
     * The `element` attribute.
     *
     * @property Object
     */
    element: String,

    /**
     * The `href` attribute.
     *
     * @property Object
     */
    href: String,

    /**
     * The icon of the dropdown menu item.
     *
     * @property Object
     */
    icon: String,

    /**
     * The label of the dropdown menu item.
     *
     * @property Object
     */
    label: String,

    /**
     * If an to is passed, button is an router-link element
     *
     * @property Boolean
     */
    to: [Object, String]
  },
  computed: {
    component() {
      return this.element || (this.to ? 'router-link' : this.button ? 'button' : 'a');
    }

  },
  methods: {
    /**
     * A callback function for the `click` event.
     *
     * @property Object
     */
    onClick(event) {
      this.$emit('click', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var DropdownMenu_DropdownMenuItemvue_type_script_lang_js_ = (DropdownMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/DropdownMenu/DropdownMenuItem.vue?vue&type=style&index=0&lang=scss&
var DropdownMenuItemvue_type_style_index_0_lang_scss_ = __webpack_require__("2651");

// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuItem.vue






/* normalize component */

var DropdownMenuItem_component = normalizeComponent(
  DropdownMenu_DropdownMenuItemvue_type_script_lang_js_,
  DropdownMenuItemvue_type_template_id_5a190cc3_render,
  DropdownMenuItemvue_type_template_id_5a190cc3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownMenuItem = (DropdownMenuItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenuHeader.vue?vue&type=template&id=564404c2&
var DropdownMenuHeadervue_type_template_id_564404c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h5',{staticClass:"dropdown-header"},[_vm._t("default",[_vm._v(_vm._s(_vm.header))])],2)}
var DropdownMenuHeadervue_type_template_id_564404c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuHeader.vue?vue&type=template&id=564404c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenuHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var DropdownMenuHeadervue_type_script_lang_js_ = ({
  name: 'DropdownMenuHeader',
  props: {
    /**
     * The value of the header
     *
     * @property Object
     */
    header: String
  }
});
// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var DropdownMenu_DropdownMenuHeadervue_type_script_lang_js_ = (DropdownMenuHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuHeader.vue





/* normalize component */

var DropdownMenuHeader_component = normalizeComponent(
  DropdownMenu_DropdownMenuHeadervue_type_script_lang_js_,
  DropdownMenuHeadervue_type_template_id_564404c2_render,
  DropdownMenuHeadervue_type_template_id_564404c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownMenuHeader = (DropdownMenuHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenuDivider.vue?vue&type=template&id=47fbd2d0&
var DropdownMenuDividervue_type_template_id_47fbd2d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-divider"})}
var DropdownMenuDividervue_type_template_id_47fbd2d0_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuDivider.vue?vue&type=template&id=47fbd2d0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenuDivider.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var DropdownMenuDividervue_type_script_lang_js_ = ({
  name: 'DropdownMenuDivider'
});
// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var DropdownMenu_DropdownMenuDividervue_type_script_lang_js_ = (DropdownMenuDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenuDivider.vue





/* normalize component */

var DropdownMenuDivider_component = normalizeComponent(
  DropdownMenu_DropdownMenuDividervue_type_script_lang_js_,
  DropdownMenuDividervue_type_template_id_47fbd2d0_render,
  DropdownMenuDividervue_type_template_id_47fbd2d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownMenuDivider = (DropdownMenuDivider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/DropdownMenu/DropdownMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//






/* harmony default export */ var DropdownMenuvue_type_script_lang_js_ = ({
  name: 'DropdownMenu',
  components: {
    DropdownMenuItem: DropdownMenuItem,
    DropdownMenuHeader: DropdownMenuHeader,
    DropdownMenuDivider: DropdownMenuDivider
  },
  props: {
    /**
     * The `id` attribute on the toggle button and aria label. If no `id` is
     * defined, then a UUID will be generated instead.
     *
     * @property Object
     */
    id: {
      type: String,
      default: Uuid
    },

    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
      type: String,
      default: 'left',

      validate(value) {
        return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
      }

    },

    /**
     * The default visibility of the dropdown menu.
     *
     * @property Object
     */
    show: Boolean,

    /**
     * An array of dropdown items. If an key/value pair isn't defined, the
     * default value will be used. If no items are defined, then the slot
     * named "items" can be used to define the options with HTML.
     *
     * [{
     *      type: 'item', // String [item|header|divider]
     *      href: '#', // String
     *      label: 'Some label', // String
     *      onClick: (event) => {} // Function
     * }]
     *
     * @property Array
     */
    items: Array
  },

  mounted() {
    each(this.$children, child => {
      child.$on('click', event => {
        this.onItemClick(event, child);
      });
    });
  },

  methods: {
    prefix: Prefix,

    /**
     * A callback function for the `click` event.
     *
     * @param Object event
     * @param Object item
     * @return void
     */
    onClick(event) {
      this.$emit('click', event);
    },

    /**
     * A callback function for the `click` event.
     *
     * @param Object event
     * @param Object item
     * @return void
     */
    onItemClick(event, item) {
      this.$emit('item:click', event, item);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var DropdownMenu_DropdownMenuvue_type_script_lang_js_ = (DropdownMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/DropdownMenu/DropdownMenu.vue





/* normalize component */

var DropdownMenu_component = normalizeComponent(
  DropdownMenu_DropdownMenuvue_type_script_lang_js_,
  DropdownMenuvue_type_template_id_e4d2e656_render,
  DropdownMenuvue_type_template_id_e4d2e656_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownMenu = (DropdownMenu_component.exports);
// CONCATENATED MODULE: ./src/Components/DropdownMenu/index.js





/* harmony default export */ var Components_DropdownMenu = (DropdownMenu);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BtnDropdown/BtnDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const TAB_KEYCODE = 9;
const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 39;
const UP_ARROW_KEYCODE = 38;
const DOWN_ARROW_KEYCODE = 40;
let ignoreBlurEvent = false;
/* harmony default export */ var BtnDropdownvue_type_script_lang_js_ = ({
  name: 'BtnDropdown',
  components: {
    BtnGroup: Components_BtnGroup,
    DropdownMenu: Components_DropdownMenu
  },
  extends: Components_Btn,
  props: {
    /**
     * The button icon that appears before the label.
     *
     * @property String
     */
    autoclose: Boolean,

    /**
     * The button icon that appears before the label.
     *
     * @property String
     */
    icon: String,

    /**
     * The toggle button's label. If not defined as an attribute,
     * you can override with the component's slot (inner html).
     *
     * @property String
     */
    label: String,

    /**
     * The `id` attribute on the toggle button and aria label. If no `id` is
     * defined, then a UUID will be generated instead.
     *
     * @property String
     */
    id: {
      type: String,
      default: Uuid
    },

    /**
     * The button type attribute.
     *
     * @property String
     */
    type: {
      type: String,
      default: 'button'
    },

    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
      type: String,
      default: 'left',

      validate(value) {
        return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
      }

    },

    /**
     * Display the dropdown button with a split toggle button.
     *
     * @property Boolean
     */
    split: {
      type: Boolean,
      default: false
    },

    /**
     * Display as a dropup instead of a dropdown.
     *
     * @property Boolean
     */
    dropup: {
      type: Boolean,
      default: false
    },

    /**
     * Display as a dropright instead of a dropdown.
     *
     * @property Boolean
     */
    dropright: {
      type: Boolean,
      default: false
    },

    /**
     * Display as a dropleft instead of a dropdown.
     *
     * @property Boolean
     */
    dropleft: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isDropdownShowing: false
    };
  },

  computed: {
    variantClassPrefix() {
      return 'btn' + (this.outline ? '-outline' : '');
    },

    sizeableClassPrefix() {
      return 'btn';
    },

    actionClasses() {
      return ['btn', Prefix(this.size, 'btn'), Prefix(this.variant, 'btn')].join(' ');
    },

    toggleClasses() {
      return ['btn', 'dropdown-toggle', this.variantClass, this.sizeableClass, this.active ? 'active' : '', this.block ? 'btn-block' : '', this.split ? 'dropdown-toggle-split' : ''].join(' ');
    }

  },

  mounted() {
    each(this.$el.querySelectorAll('[type=submit], input, select, textarea, [tabindex]:not([tabindex="-1"]'), el => {
      if (el && el.addEventListener) {
        el.addEventListener('blur', event => {
          if (!ignoreBlurEvent) {
            this.focus();
          }

          ignoreBlurEvent = false;
        });
        el.addEventListener('focus', event => {
          ignoreBlurEvent = false;
        });
        el.addEventListener('keydown', event => {
          const ignore = [LEFT_ARROW_KEYCODE, RIGHT_ARROW_KEYCODE, UP_ARROW_KEYCODE, DOWN_ARROW_KEYCODE, TAB_KEYCODE];

          if (ignore.indexOf(event.keyCode) !== -1) {
            ignoreBlurEvent = true;
          }
        });
        el.addEventListener('mousedown', event => {
          ignoreBlurEvent = true;
        });
      }
    });
  },

  methods: {
    /**
     * Focus on the the dropdown toggle button
     *
     * @return void
     */
    focus() {
      this.$el.querySelector('.dropdown-toggle').focus();
    },

    /**
     * Focus on the the dropdown toggle button
     *
     * @return void
     */
    queryFocusable() {
      return this.$el.querySelector('.dropdown-menu').querySelectorAll('label, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    },

    /**
     * Method to check if the given element is focusable.
     *
     * @return void
     */
    isFocusable(element) {
      const nodes = this.queryFocusable();

      for (let i in nodes) {
        if (element === nodes[i]) {
          return true;
        }
      }

      return false;
    },

    /**
     * Toggle the dropdown menu
     *
     * @return void
     */
    toggle() {
      !this.isDropdownShowing ? this.show() : this.hide();
    },

    /**
     * Show the dropdown menu
     *
     * @return void
     */
    show() {
      this.$emit('toggle', this.isDropdownShowing = true);
      this.$emit('show');
    },

    /**
     * Hide the dropdown menu
     *
     * @return void
     */
    hide() {
      this.$emit('toggle', this.isDropdownShowing = false);
      this.$emit('hide');
    },

    /**
     * A callback function for the `click` event for the action button
     *
     * @return void
     */
    onClick(event) {
      this.hide();
      this.$emit('click', event);
    },

    /**
     * A callback function for the `blur` event for the action button
     *
     * @return void
     */
    onBlur(event) {
      if (!this.$el.contains(event.relatedTarget)) {
        this.hide();
      }
    },

    /**
     * A callback function for the `item:click` event for the action button
     *
     * @return void
     */
    onMenuClick(event, item) {
      if (event.target === this.$el.querySelector('.dropdown-menu')) {
        this.focus();
      }
    },

    /**
     * A callback function for the `item:click` event for the action button
     *
     * @return void
     */
    onItemClick(event, item) {
      if (!this.isFocusable(event.target)) {
        this.hide();
      }

      this.$emit('item:click', event, item);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/BtnDropdown/BtnDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnDropdown_BtnDropdownvue_type_script_lang_js_ = (BtnDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/BtnDropdown/BtnDropdown.vue





/* normalize component */

var BtnDropdown_component = normalizeComponent(
  BtnDropdown_BtnDropdownvue_type_script_lang_js_,
  BtnDropdownvue_type_template_id_3b87ce4c_render,
  BtnDropdownvue_type_template_id_3b87ce4c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnDropdown = (BtnDropdown_component.exports);
// CONCATENATED MODULE: ./src/Components/BtnDropdown/index.js

/* harmony default export */ var Components_BtnDropdown = (BtnDropdown);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/Card.vue?vue&type=template&id=245a244c&
var Cardvue_type_template_id_245a244c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)}
var Cardvue_type_template_id_245a244c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/Card.vue?vue&type=template&id=245a244c&

// CONCATENATED MODULE: ./src/Mixins/HasSlots/HasSlots.js
/* harmony default export */ var HasSlots = ({
  methods: {
    getSlot(slot) {
      return this.$slots[slot];
    },

    hasSlot(slot) {
      return !!this.$slots[slot];
    },

    hasSlots(slots) {
      for (let i in slots) {
        if (!this.hasSlot(slots[i])) {
          return false;
        }
      }
    }

  },
  computed: {
    hasDefaultSlot() {
      return this.hasSlot('default');
    }

  }
});
// CONCATENATED MODULE: ./src/Mixins/HasSlots/index.js

/* harmony default export */ var Mixins_HasSlots = (HasSlots);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//




/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: 'Card',
  mixins: [Mixins_HasSlots, Mixins_Colorable, Mixins_MergeClasses],
  computed: {
    className() {
      return kebabCase(this.$options.name);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Card/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/Card.vue





/* normalize component */

var Card_component = normalizeComponent(
  Card_Cardvue_type_script_lang_js_,
  Cardvue_type_template_id_245a244c_render,
  Cardvue_type_template_id_245a244c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Card = (Card_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardBody.vue?vue&type=script&lang=js&

/* harmony default export */ var CardBodyvue_type_script_lang_js_ = ({
  name: 'CardBody',
  extends: Card
});
// CONCATENATED MODULE: ./src/Components/Card/CardBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardBodyvue_type_script_lang_js_ = (CardBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardBody.vue
var CardBody_render, CardBody_staticRenderFns




/* normalize component */

var CardBody_component = normalizeComponent(
  Card_CardBodyvue_type_script_lang_js_,
  CardBody_render,
  CardBody_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardBody = (CardBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardBtnGroup.vue?vue&type=template&id=0a482ef7&
var CardBtnGroupvue_type_template_id_0a482ef7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('btn-group',{staticClass:"card-btn-group"},[_vm._t("default")],2)}
var CardBtnGroupvue_type_template_id_0a482ef7_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/CardBtnGroup.vue?vue&type=template&id=0a482ef7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardBtnGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var CardBtnGroupvue_type_script_lang_js_ = ({
  name: 'CardBtnGroup',
  extends: Card
});
// CONCATENATED MODULE: ./src/Components/Card/CardBtnGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardBtnGroupvue_type_script_lang_js_ = (CardBtnGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Card/CardBtnGroup.vue?vue&type=style&index=0&lang=scss&
var CardBtnGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("fe24");

// CONCATENATED MODULE: ./src/Components/Card/CardBtnGroup.vue






/* normalize component */

var CardBtnGroup_component = normalizeComponent(
  Card_CardBtnGroupvue_type_script_lang_js_,
  CardBtnGroupvue_type_template_id_0a482ef7_render,
  CardBtnGroupvue_type_template_id_0a482ef7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardBtnGroup = (CardBtnGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardDeck.vue?vue&type=template&id=9af6b4e6&
var CardDeckvue_type_template_id_9af6b4e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-deck"},[_vm._t("default")],2)}
var CardDeckvue_type_template_id_9af6b4e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/CardDeck.vue?vue&type=template&id=9af6b4e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardDeck.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CardDeckvue_type_script_lang_js_ = ({
  name: 'CardDeck'
});
// CONCATENATED MODULE: ./src/Components/Card/CardDeck.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardDeckvue_type_script_lang_js_ = (CardDeckvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardDeck.vue





/* normalize component */

var CardDeck_component = normalizeComponent(
  Card_CardDeckvue_type_script_lang_js_,
  CardDeckvue_type_template_id_9af6b4e6_render,
  CardDeckvue_type_template_id_9af6b4e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardDeck = (CardDeck_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardHeader.vue?vue&type=template&id=26c201a7&
var CardHeadervue_type_template_id_26c201a7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)}
var CardHeadervue_type_template_id_26c201a7_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/CardHeader.vue?vue&type=template&id=26c201a7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var CardHeadervue_type_script_lang_js_ = ({
  name: 'CardHeader',
  extends: Card,
  mixins: [Mixins_MergeClasses],
  props: {
    /**
     * The component's HTML tag name
     *
     * @property String
     */
    tag: {
      type: String,
      default: 'h5'
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Card/CardHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardHeadervue_type_script_lang_js_ = (CardHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardHeader.vue





/* normalize component */

var CardHeader_component = normalizeComponent(
  Card_CardHeadervue_type_script_lang_js_,
  CardHeadervue_type_template_id_26c201a7_render,
  CardHeadervue_type_template_id_26c201a7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardHeader = (CardHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardFooter.vue?vue&type=script&lang=js&

/* harmony default export */ var CardFootervue_type_script_lang_js_ = ({
  name: 'CardFooter',
  extends: CardHeader,
  props: {
    /**
     * The component's HTML tag name
     *
     * @property String
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Card/CardFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardFootervue_type_script_lang_js_ = (CardFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardFooter.vue
var CardFooter_render, CardFooter_staticRenderFns




/* normalize component */

var CardFooter_component = normalizeComponent(
  Card_CardFootervue_type_script_lang_js_,
  CardFooter_render,
  CardFooter_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardFooter = (CardFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardImg.vue?vue&type=template&id=03649367&
var CardImgvue_type_template_id_03649367_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center align-items-center",class:_vm.mergeClasses(_vm.className),style:({height: _vm.unit(_vm.height)})},[(_vm.background)?_c('div',{staticClass:"card-img-bg",style:({background: _vm.background ? ("url(" + _vm.src + ")") : null, overflow: _vm.blur ? 'hidden' : 'inherit', filter: _vm.blur ? ("blur(" + (_vm.unit(_vm.blur)) + ")") : null})}):_vm._e(),(!_vm.background && _vm.src)?_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.src,"alt":_vm.alt}}):_vm._e(),_c('div',{staticClass:"card-img-content",class:{'text-truncate': _vm.textTruncate}},[_vm._t("default")],2)])}
var CardImgvue_type_template_id_03649367_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/CardImg.vue?vue&type=template&id=03649367&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardImg.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CardImgvue_type_script_lang_js_ = ({
  name: 'CardImg',
  extends: Card,
  mixins: [Mixins_MergeClasses],
  props: {
    /**
     * The alt attribute
     *
     * @property String
     */
    alt: String,

    /**
     * Display the image as a background image fit with CSS cover.
     *
     * @property String
     */
    background: Boolean,

    /**
     * The amount to blur the background image.
     *
     * @property String
     */
    blur: [Number, String],

    /**
     * The height attribute
     *
     * @property String
     */
    height: [Number, String],

    /**
     * Truncate the text in the content
     *
     * @property String
     */
    textTruncate: Boolean,

    /**
     * The src attribute
     *
     * @property String
     */
    src: String
  },
  methods: {
    unit(value) {
      return unit(value);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Card/CardImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardImgvue_type_script_lang_js_ = (CardImgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Card/CardImg.vue?vue&type=style&index=0&lang=scss&
var CardImgvue_type_style_index_0_lang_scss_ = __webpack_require__("f58b");

// CONCATENATED MODULE: ./src/Components/Card/CardImg.vue






/* normalize component */

var CardImg_component = normalizeComponent(
  Card_CardImgvue_type_script_lang_js_,
  CardImgvue_type_template_id_03649367_render,
  CardImgvue_type_template_id_03649367_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardImg = (CardImg_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardImgTop.vue?vue&type=script&lang=js&

/* harmony default export */ var CardImgTopvue_type_script_lang_js_ = ({
  name: 'CardImgTop',
  extends: CardImg
});
// CONCATENATED MODULE: ./src/Components/Card/CardImgTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardImgTopvue_type_script_lang_js_ = (CardImgTopvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardImgTop.vue
var CardImgTop_render, CardImgTop_staticRenderFns




/* normalize component */

var CardImgTop_component = normalizeComponent(
  Card_CardImgTopvue_type_script_lang_js_,
  CardImgTop_render,
  CardImgTop_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardImgTop = (CardImgTop_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardImgBottom.vue?vue&type=script&lang=js&

/* harmony default export */ var CardImgBottomvue_type_script_lang_js_ = ({
  name: 'CardImgBottom',
  extends: CardImg
});
// CONCATENATED MODULE: ./src/Components/Card/CardImgBottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardImgBottomvue_type_script_lang_js_ = (CardImgBottomvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardImgBottom.vue
var CardImgBottom_render, CardImgBottom_staticRenderFns




/* normalize component */

var CardImgBottom_component = normalizeComponent(
  Card_CardImgBottomvue_type_script_lang_js_,
  CardImgBottom_render,
  CardImgBottom_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardImgBottom = (CardImgBottom_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardImgOverlay.vue?vue&type=script&lang=js&

/* harmony default export */ var CardImgOverlayvue_type_script_lang_js_ = ({
  name: 'CardImgOverlay',
  extends: Card
});
// CONCATENATED MODULE: ./src/Components/Card/CardImgOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardImgOverlayvue_type_script_lang_js_ = (CardImgOverlayvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardImgOverlay.vue
var CardImgOverlay_render, CardImgOverlay_staticRenderFns




/* normalize component */

var CardImgOverlay_component = normalizeComponent(
  Card_CardImgOverlayvue_type_script_lang_js_,
  CardImgOverlay_render,
  CardImgOverlay_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardImgOverlay = (CardImgOverlay_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardLink.vue?vue&type=template&id=a20764f4&
var CardLinkvue_type_template_id_a20764f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses),attrs:{"to":_vm.href},on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var CardLinkvue_type_template_id_a20764f4_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/CardLink.vue?vue&type=template&id=a20764f4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var CardLinkvue_type_script_lang_js_ = ({
  name: 'CardLink',
  extends: Card,
  mixins: [Mixins_MergeClasses],
  props: {
    /**
     * The alt attribute
     *
     * @property String
     */
    alt: String,

    /**
     * The href attribute
     *
     * @property String
     */
    href: String,

    /**
     * The to attribute
     *
     * @property String
     */
    to: [Object, String]
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Card/CardLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardLinkvue_type_script_lang_js_ = (CardLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardLink.vue





/* normalize component */

var CardLink_component = normalizeComponent(
  Card_CardLinkvue_type_script_lang_js_,
  CardLinkvue_type_template_id_a20764f4_render,
  CardLinkvue_type_template_id_a20764f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardLink = (CardLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardSubtitle.vue?vue&type=template&id=8d5cff92&
var CardSubtitlevue_type_template_id_8d5cff92_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h6',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)}
var CardSubtitlevue_type_template_id_8d5cff92_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/CardSubtitle.vue?vue&type=template&id=8d5cff92&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardSubtitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var CardSubtitlevue_type_script_lang_js_ = ({
  name: 'CardSubtitle',
  extends: Card,
  mixins: [Mixins_MergeClasses]
});
// CONCATENATED MODULE: ./src/Components/Card/CardSubtitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardSubtitlevue_type_script_lang_js_ = (CardSubtitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardSubtitle.vue





/* normalize component */

var CardSubtitle_component = normalizeComponent(
  Card_CardSubtitlevue_type_script_lang_js_,
  CardSubtitlevue_type_template_id_8d5cff92_render,
  CardSubtitlevue_type_template_id_8d5cff92_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardSubtitle = (CardSubtitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardTitle.vue?vue&type=template&id=836c4098&
var CardTitlevue_type_template_id_836c4098_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h5',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)}
var CardTitlevue_type_template_id_836c4098_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Card/CardTitle.vue?vue&type=template&id=836c4098&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Card/CardTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var CardTitlevue_type_script_lang_js_ = ({
  name: 'CardTitle',
  mixins: [Card, Mixins_MergeClasses]
});
// CONCATENATED MODULE: ./src/Components/Card/CardTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardTitlevue_type_script_lang_js_ = (CardTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Card/CardTitle.vue





/* normalize component */

var CardTitle_component = normalizeComponent(
  Card_CardTitlevue_type_script_lang_js_,
  CardTitlevue_type_template_id_836c4098_render,
  CardTitlevue_type_template_id_836c4098_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardTitle = (CardTitle_component.exports);
// CONCATENATED MODULE: ./src/Components/Card/index.js














/* harmony default export */ var Components_Card = (Card);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/CheckboxField/CheckboxField.vue?vue&type=template&id=3351d55a&
var CheckboxFieldvue_type_template_id_3351d55a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.custom ? 'custom-checkbox' : '', _vm.controlClass, _vm.inline ? _vm.inlineClass : '')},[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",attrs:{"type":"checkbox","id":_vm.$attrs.id || _vm.hash},domProps:{"value":_vm.value,"checked":_vm.checked || _vm.isChecked(_vm.value)},on:{"input":_vm.update}},'input',_vm.controlAttributes,false)),_c('label',{class:_vm.mergeClasses(_vm.computedLabelClass, _vm.labelClass),attrs:{"for":_vm.$attrs.id || _vm.hash}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var CheckboxFieldvue_type_template_id_3351d55a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/CheckboxField/CheckboxField.vue?vue&type=template&id=3351d55a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/RadioField/RadioField.vue?vue&type=template&id=88320974&
var RadioFieldvue_type_template_id_88320974_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.custom ? 'custom-radio' : '', _vm.controlClass, _vm.inline ? _vm.inlineClass : '')},[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",attrs:{"type":"radio","id":_vm.$attrs.id || _vm.hash},domProps:{"value":_vm.value,"checked":_vm.checkedValue === _vm.value},on:{"change":_vm.update}},'input',_vm.controlAttributes,false)),_c('label',{class:_vm.mergeClasses(_vm.computedLabelClass, _vm.labelClass),attrs:{"for":_vm.$attrs.id || _vm.hash}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var RadioFieldvue_type_template_id_88320974_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/RadioField/RadioField.vue?vue&type=template&id=88320974&

// CONCATENATED MODULE: ./src/Helpers/Hash/Hash.js
function hash(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
}
// CONCATENATED MODULE: ./src/Helpers/Hash/index.js

/* harmony default export */ var Hash = (hash);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/RadioField/RadioField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var RadioFieldvue_type_script_lang_js_ = ({
  name: 'RadioField',
  components: {
    HelpText: Components_HelpText,
    FormFeedback: Components_FormFeedback
  },
  mixins: [Mixins_Colorable, Mixins_FormControl, Mixins_MergeClasses],
  model: {
    prop: 'checkedValue',
    event: 'change'
  },
  props: {
    /**
     * An array of event names that correlate with callback functions
     *
     * @property Function
     */
    bindEvents: {
      type: Array,

      default() {
        return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
      }

    },

    /**
     * The checked values
     *
     * @property String
     */
    checked: Boolean,

    /**
     * The checked value
     *
     * @property String
     */
    checkedValue: [Boolean, Number, String, Object],

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'form-check'
    },

    /**
     * Display the form field and label inline
     *
     * @property Function
     */
    inline: Boolean
  },
  computed: {
    controlClasses() {
      return this.mergeClasses(this.spacing || '', this.inputClass, this.valid || this.validFeedback ? 'is-valid' : '', this.invalid || this.invalidFeedback ? 'is-invalid' : '');
    },

    hash() {
      return Hash(this._uid.toString());
    },

    computedLabelClass() {
      return Prefix('label', this.controlClass);
    },

    inputClass() {
      return Prefix('input', this.controlClass);
    },

    inlineClass() {
      return this.inline ? Prefix('inline', this.controlClass) : '';
    }

  },
  methods: {
    update(event) {
      this.$emit('change', event.target.value);
      this.$emit('input', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/RadioField/RadioField.vue?vue&type=script&lang=js&
 /* harmony default export */ var RadioField_RadioFieldvue_type_script_lang_js_ = (RadioFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/RadioField/RadioField.vue





/* normalize component */

var RadioField_component = normalizeComponent(
  RadioField_RadioFieldvue_type_script_lang_js_,
  RadioFieldvue_type_template_id_88320974_render,
  RadioFieldvue_type_template_id_88320974_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioField = (RadioField_component.exports);
// CONCATENATED MODULE: ./src/Components/RadioField/index.js

/* harmony default export */ var Components_RadioField = (RadioField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/CheckboxField/CheckboxField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CheckboxFieldvue_type_script_lang_js_ = ({
  name: 'CheckboxField',
  extends: Components_RadioField,
  mixins: [Mixins_MergeClasses],
  model: {
    prop: 'checkedValues',
    event: 'change'
  },
  props: {
    checked: Boolean,

    /**
     * The checked values
     *
     * @property String
     */
    checkedValues: {
      type: Array,

      default() {
        return [];
      }

    },
    transform: {
      type: Function,
      default: value => value
    },

    /**
     * Determine if the value is checked.
     *
     * @property String
     */
    isChecked: {
      type: Function,

      default(value) {
        if (this.checkedValues.indexOf(value) !== -1) {
          return true;
        }

        const matches = this.checkedValues.filter(checkedValue => {
          if (this.compareValues(this.transform(value), checkedValue)) {
            return true;
          }
        });
        return matches.length > 0;
      }

    }
  },
  methods: {
    stringify(value) {
      try {
        return JSON.stringify(value);
      } catch {
        return value;
      }
    },

    compareValues(a, b) {
      if (typeof a === 'object') {
        a = this.stringify(a);
      }

      if (typeof b === 'object') {
        b = this.stringify(b);
      }

      return a === b;
    },

    update(event) {
      const value = this.transform(event.target.value);
      const checked = this.checkedValues.slice(0);
      const index = this.checkedValues.findIndex(item => {
        return this.compareValues(value, item);
      });

      if (index === -1) {
        checked.push(value);
      } else {
        checked.splice(index, 1);
      }

      this.$emit('change', checked);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/CheckboxField/CheckboxField.vue?vue&type=script&lang=js&
 /* harmony default export */ var CheckboxField_CheckboxFieldvue_type_script_lang_js_ = (CheckboxFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/CheckboxField/CheckboxField.vue





/* normalize component */

var CheckboxField_component = normalizeComponent(
  CheckboxField_CheckboxFieldvue_type_script_lang_js_,
  CheckboxFieldvue_type_template_id_3351d55a_render,
  CheckboxFieldvue_type_template_id_3351d55a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckboxField = (CheckboxField_component.exports);
// CONCATENATED MODULE: ./src/Components/CheckboxField/index.js

/* harmony default export */ var Components_CheckboxField = (CheckboxField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Container/Container.vue?vue&type=template&id=cc11532a&
var Containervue_type_template_id_cc11532a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._t("default")],2)}
var Containervue_type_template_id_cc11532a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Container/Container.vue?vue&type=template&id=cc11532a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Container/Container.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Containervue_type_script_lang_js_ = ({
  name: 'Container'
});
// CONCATENATED MODULE: ./src/Components/Container/Container.vue?vue&type=script&lang=js&
 /* harmony default export */ var Container_Containervue_type_script_lang_js_ = (Containervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Container/Container.vue





/* normalize component */

var Container_component = normalizeComponent(
  Container_Containervue_type_script_lang_js_,
  Containervue_type_template_id_cc11532a_render,
  Containervue_type_template_id_cc11532a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Container = (Container_component.exports);
// CONCATENATED MODULE: ./src/Components/Container/index.js

/* harmony default export */ var Components_Container = (Container);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Dropzone/Dropzone.vue?vue&type=template&id=745ee484&
var Dropzonevue_type_template_id_745ee484_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropzone",class:{'is-dragging': _vm.isDragging},on:{"drop":function($event){$event.preventDefault();return _vm.onDrop($event)},"dragover":function($event){$event.preventDefault();return _vm.onDragover($event)},"dragenter":function($event){$event.preventDefault();return _vm.onDragenter($event)},"dragleave":function($event){$event.preventDefault();return _vm.onDragleave($event)}}},[_vm._t("placeholder",[_c('div',{staticClass:"dropzone-placeholder text-center"},[_c('card',[_c('card-body',[_c('h1',{staticClass:"mt-4"},[_vm._v("\n                        Drag & Drop\n                    ")]),_c('p',[_vm._v("Drag and drop your files here to upload them!")]),_c('div',{staticClass:"mt-3"},[_c('font-awesome-icon',{attrs:{"icon":['far', 'image'],"size":"4x"}})],1)])],1)],1)]),_vm._t("default")],2)}
var Dropzonevue_type_template_id_745ee484_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Dropzone/Dropzone.vue?vue&type=template&id=745ee484&

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/faImage.js
var faImage = __webpack_require__("0b35");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Dropzone/Dropzone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





index_es["c" /* library */].add(faImage["faImage"]);
/* harmony default export */ var Dropzonevue_type_script_lang_js_ = ({
  name: 'Dropzone',
  components: {
    Card: Components_Card,
    CardBody: CardBody,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },

  data() {
    return {
      files: null,
      isDragging: false
    };
  },

  methods: {
    onDrop(event) {
      this.isDragging = false;
      this.$emit('drop', event);
    },

    onDragover(event) {
      this.isDragging = true;
      this.$emit('dragover', event);
    },

    onDragenter(event) {
      this.isDragging = true;
      this.$emit('dragenter', event);
      this.onDragover(event);
    },

    onDragleave(event) {
      this.isDragging = false;
      this.$emit('dragleave', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Dropzone/Dropzone.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dropzone_Dropzonevue_type_script_lang_js_ = (Dropzonevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Dropzone/Dropzone.vue?vue&type=style&index=0&lang=scss&
var Dropzonevue_type_style_index_0_lang_scss_ = __webpack_require__("118b");

// CONCATENATED MODULE: ./src/Components/Dropzone/Dropzone.vue






/* normalize component */

var Dropzone_component = normalizeComponent(
  Dropzone_Dropzonevue_type_script_lang_js_,
  Dropzonevue_type_template_id_745ee484_render,
  Dropzonevue_type_template_id_745ee484_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dropzone = (Dropzone_component.exports);
// CONCATENATED MODULE: ./src/Components/Dropzone/index.js

/* harmony default export */ var Components_Dropzone = (Dropzone);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FilePreview/FilePreview.vue?vue&type=template&id=15224d15&
var FilePreviewvue_type_template_id_15224d15_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"file-preview",class:{'has-image': !!_vm.image}},[_c('div',{staticClass:"file-preview-inner"},[(!_vm.hideClose)?_c('a',{staticClass:"file-preview-close",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('close', _vm.file)}}},[_c('font-awesome-icon',{attrs:{"icon":"times-circle"}})],1):_vm._e(),(!!_vm.poster || _vm.isImage)?_c('div',{staticClass:"file-preview-image"},[(!!_vm.poster || !!_vm.image)?_c('img',{staticClass:"file-preview-thumbnail",attrs:{"src":_vm.poster || _vm.image},on:{"load":_vm.onLoad}}):_vm._e()]):_c('div',{directives:[{name:"ready",rawName:"v-ready",value:(function () { return this$1.$emit('loaded'); }),expression:"() => this.$emit('loaded')"}],staticClass:"file-preview-icon"},[_c('font-awesome-icon',{attrs:{"icon":_vm.isVideo ? 'file-video' : 'file-alt'}})],1),(_vm.progress || _vm.isImage && _vm.loaded !== false)?_c('progress-bar',{directives:[{name:"ready",rawName:"v-ready",value:(_vm.readFile),expression:"readFile"}],staticClass:"mt-3",attrs:{"value":_vm.progress || _vm.loaded || 0,"height":10}}):_vm._e(),_c('div',{staticClass:"file-preview-filename",domProps:{"innerHTML":_vm._s(_vm.name)}}),_c('div',{staticClass:"file-preview-filesize"},[_vm._v("\n            ("+_vm._s(_vm.size)+")\n        ")])],1)])}
var FilePreviewvue_type_template_id_15224d15_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/FilePreview/FilePreview.vue?vue&type=template&id=15224d15&

// CONCATENATED MODULE: ./src/Helpers/ReadFile/ReadFile.js

function readFile(file, progress) {
  if (!(file instanceof Blob)) {
    throw new Error('The first argument be an instance of Blob object.');
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (isFunction(progress)) {
      reader.onprogress = e => progress(e, reader);
    }

    reader.onload = e => resolve(e);

    reader.onerror = e => reject(e);

    reader.onabort = e => reject(e);

    reader.readAsDataURL(file);
  });
}
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faFileAlt.js
var faFileAlt = __webpack_require__("a2a7");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faFileVideo.js
var faFileVideo = __webpack_require__("4aa7");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faTimesCircle.js
var faTimesCircle = __webpack_require__("0097");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FilePreview/FilePreview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








index_es["c" /* library */].add(faFileAlt["faFileAlt"]);
index_es["c" /* library */].add(faFileVideo["faFileVideo"]);
index_es["c" /* library */].add(faTimesCircle["faTimesCircle"]);
/* harmony default export */ var FilePreviewvue_type_script_lang_js_ = ({
  name: 'FilePreview',
  components: {
    ProgressBar: Components_ProgressBar,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  directives: {
    ready: {
      inserted(el, binding, vnode) {
        if (isFunction(binding.value)) {
          vnode.context.$nextTick(binding.value);
        }
      }

    }
  },
  props: {
    /**
     * Hide the close button for the preview
     *
     * @property Object
     */
    hideClose: Boolean,

    /**
     * The uploaded File object
     *
     * @property Object
     */
    file: {
      type: [Object, Blob],
      required: true
    },

    /**
     * An image URL to instead of using the file reader.
     * @property {String}
     */
    poster: String,

    /**
     * Progress that can be passed from a parent comparent, for instance
     * use to show an ajax request with a single progress bar. If a progress
     * value is passed, even a 0, the progress bar will not be used to show
     * the progress of the file reader.
     * @property {Number}
     */
    progress: {
      type: Number,
      default: undefined
    }
  },

  data() {
    return {
      image: this.file.url,
      loaded: this.file instanceof Blob ? 0 : false
    };
  },

  computed: {
    /**
     * Get the file name
     *
     * @property String
     */
    name() {
      return this.file instanceof Blob ? this.file.name : this.file.orig_filename;
    },

    /**
     * Get the file extension
     *
     * @property String
     */
    extension() {
      return this.file instanceof Blob ? this.file.name.split('.').pop().toLowerCase() : this.file.extension;
    },

    /**
     * Get the file formatted size
     *
     * @property String
     */
    size() {
      return this.bytesToSize(this.file.size);
    },

    /**
     * Get the file type
     *
     * @property String
     */
    type() {
      return this.file instanceof Blob ? this.file.type : this.file.mime;
    },

    /**
     * Check to see if the file is an image.
     *
     * @property String
     */
    isImage() {
      return !!this.type.match(/^image/);
    },

    /**
     * Check to see if the file is a video.
     *
     * @property String
     */
    isVideo() {
      return !!this.type.match(/^video/);
    },

    /**
     * Get the last time the file was modified (as timestamp)
     *
     * @property String
     */
    lastModified() {
      return this.file instanceof Blob ? this.file.lastModified : null;
    },

    /**
     * Get the last time the file was modified (as Date)
     *
     * @property String
     */
    lastModifiedDate() {
      return this.file instanceof Blob ? this.file.lastModifiedDate : null;
    }

  },
  methods: {
    readFile() {
      if (this.file instanceof Blob) {
        const start = new Date().getTime();
        this.loaded = 0;
        this.$nextTick(() => {
          readFile(this.file, e => {
            if (e.lengthComputable) {
              this.$emit('progress', this.loaded = parseInt(e.loaded / e.total * 100, 10));
            }
          }).then(event => {
            this.$emit('read', event);
            setTimeout(() => {
              this.image = event.target.result;
              this.$nextTick(() => {
                this.loaded = false;
              });
            }, 500 - (new Date().getTime() - start) / 1000);
          }, error => {
            this.$emit('error', error);
          });
        });
      }
    },

    bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },

    onLoad(event) {
      this.$emit('loaded');
    }

  }
});
// CONCATENATED MODULE: ./src/Components/FilePreview/FilePreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var FilePreview_FilePreviewvue_type_script_lang_js_ = (FilePreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/FilePreview/FilePreview.vue?vue&type=style&index=0&lang=scss&
var FilePreviewvue_type_style_index_0_lang_scss_ = __webpack_require__("f457");

// CONCATENATED MODULE: ./src/Components/FilePreview/FilePreview.vue






/* normalize component */

var FilePreview_component = normalizeComponent(
  FilePreview_FilePreviewvue_type_script_lang_js_,
  FilePreviewvue_type_template_id_15224d15_render,
  FilePreviewvue_type_template_id_15224d15_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FilePreview = (FilePreview_component.exports);
// CONCATENATED MODULE: ./src/Components/FilePreview/index.js

/* harmony default export */ var Components_FilePreview = (FilePreview);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormControl/FormControl.vue?vue&type=template&id=5778b6a0&
var FormControlvue_type_template_id_5778b6a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.element,_vm._b({tag:"component",attrs:{"aria-label":_vm.label || _vm.name || _vm.id,"aria-describedby":_vm.id || _vm.name},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'component',_vm.$attrs,false),[_vm._t("default")],2)}
var FormControlvue_type_template_id_5778b6a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/FormControl/FormControl.vue?vue&type=template&id=5778b6a0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/FormControl/FormControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FormControlvue_type_script_lang_js_ = ({
  name: 'FormControl',
  mixins: [Mixins_Colorable, Mixins_FormControl],
  props: {
    element: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/Components/FormControl/FormControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormControl_FormControlvue_type_script_lang_js_ = (FormControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/FormControl/FormControl.vue





/* normalize component */

var FormControl_component = normalizeComponent(
  FormControl_FormControlvue_type_script_lang_js_,
  FormControlvue_type_template_id_5778b6a0_render,
  FormControlvue_type_template_id_5778b6a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormControl_FormControl = (FormControl_component.exports);
// CONCATENATED MODULE: ./src/Components/FormControl/index.js

/* harmony default export */ var Components_FormControl = (FormControl_FormControl);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InfiniteScrolling/InfiniteScrolling.vue?vue&type=template&id=13cc9235&
var InfiniteScrollingvue_type_template_id_13cc9235_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"infinite-scrolling",style:({height: _vm.heightUnit, background: _vm.background})},[(_vm.activity)?_c('activity-indicator',{attrs:{"size":_vm.size,"type":_vm.type,"center":""}}):_vm._e()],1)}
var InfiniteScrollingvue_type_template_id_13cc9235_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/InfiniteScrolling/InfiniteScrolling.vue?vue&type=template&id=13cc9235&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InfiniteScrolling/InfiniteScrolling.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var InfiniteScrollingvue_type_script_lang_js_ = ({
  name: 'InfiniteScrolling',
  components: {
    ActivityIndicator: Components_ActivityIndicator
  },
  props: {
    /**
     * Is the activity indicator showing
     *
     * @property String
     */
    activity: Boolean,

    /**
     * The activity indicator background style
     *
     * @property String
     */
    background: String,

    /**
     * The activity indicator size
     *
     * @property String
     */
    height: {
      type: Number,
      default: 100
    },

    /**
     * The activity indicator size
     *
     * @property String
     */
    size: String,

    /**
     * The activity indicator type
     *
     * @property String
     */
    type: String,

    /**
     * The scroll observer threshold for when an element is considered
     * into view. Must be a validate between 0 and 1, and is a percentage.
     *
     * @property Number
     */
    threshold: {
      type: Number,
      default: 0.75,

      validate(value) {
        return value >= 0 && value <= 1;
      }

    }
  },

  data() {
    return {
      hasScrolledIntoViewport: false
    };
  },

  computed: {
    heightUnit() {
      return unit(this.height);
    }

  },

  mounted() {
    this.$nextTick(() => {
      new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasScrolledIntoViewport) {
            this.scrollIntoViewport(entry, observer);
            this.hasScrolledIntoViewport = true;
          } else if (this.hasScrolledIntoViewport) {
            this.scrollOutViewport(entry, observer);
            this.hasScrolledIntoViewport = false;
          }
        });
      }, {
        threshold: this.threshold
      }).observe(this.$el);
    });
  },

  methods: {
    scrollIntoViewport(entry) {
      this.$emit('scroll:in', entry);

      if (!this.activity) {
        this.$emit('load', entry);
      }
    },

    scrollOutViewport(entry) {
      this.$emit('scroll:out', entry);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/InfiniteScrolling/InfiniteScrolling.vue?vue&type=script&lang=js&
 /* harmony default export */ var InfiniteScrolling_InfiniteScrollingvue_type_script_lang_js_ = (InfiniteScrollingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/InfiniteScrolling/InfiniteScrolling.vue?vue&type=style&index=0&lang=scss&
var InfiniteScrollingvue_type_style_index_0_lang_scss_ = __webpack_require__("f53c");

// CONCATENATED MODULE: ./src/Components/InfiniteScrolling/InfiniteScrolling.vue






/* normalize component */

var InfiniteScrolling_component = normalizeComponent(
  InfiniteScrolling_InfiniteScrollingvue_type_script_lang_js_,
  InfiniteScrollingvue_type_template_id_13cc9235_render,
  InfiniteScrollingvue_type_template_id_13cc9235_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InfiniteScrolling = (InfiniteScrolling_component.exports);
// CONCATENATED MODULE: ./src/Components/InfiniteScrolling/index.js

/* harmony default export */ var Components_InfiniteScrolling = (InfiniteScrolling);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroup.vue?vue&type=template&id=1b2e6a28&
var InputGroupvue_type_template_id_1b2e6a28_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group",class:_vm.mergeClasses(_vm.colorableClasses, _vm.sizeableClass)},[_vm._t("prepend",[(_vm.prepend instanceof Array)?[_c('input-group-prepend',_vm._l((_vm.prepend),function(value){return _c('input-group-text',{key:value,domProps:{"innerHTML":_vm._s(value)}})}),1)]:(_vm.prepend)?[_c('input-group-prepend',{attrs:{"text":""}},[_vm._v("\n                "+_vm._s(_vm.prepend)+"\n            ")])]:_vm._e()]),_vm._t("default"),_vm._t("append",[(_vm.append instanceof Array)?[_c('input-group-append',_vm._l((_vm.append),function(value){return _c('input-group-text',{key:value,domProps:{"innerHTML":_vm._s(value)}})}),1)]:(_vm.append)?[_c('input-group-append',{attrs:{"text":""}},[_vm._v("\n                "+_vm._s(_vm.append)+"\n            ")])]:_vm._e()])],2)}
var InputGroupvue_type_template_id_1b2e6a28_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroup.vue?vue&type=template&id=1b2e6a28&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroupText.vue?vue&type=template&id=f69feed0&
var InputGroupTextvue_type_template_id_f69feed0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"input-group-text"},[_vm._t("default")],2)}
var InputGroupTextvue_type_template_id_f69feed0_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupText.vue?vue&type=template&id=f69feed0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroupText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var InputGroupTextvue_type_script_lang_js_ = ({
  name: 'InputGroupText'
});
// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupText.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupTextvue_type_script_lang_js_ = (InputGroupTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupText.vue





/* normalize component */

var InputGroupText_component = normalizeComponent(
  InputGroup_InputGroupTextvue_type_script_lang_js_,
  InputGroupTextvue_type_template_id_f69feed0_render,
  InputGroupTextvue_type_template_id_f69feed0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroupText = (InputGroupText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroupAppend.vue?vue&type=template&id=4ddba418&
var InputGroupAppendvue_type_template_id_4ddba418_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-append"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)}
var InputGroupAppendvue_type_template_id_4ddba418_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupAppend.vue?vue&type=template&id=4ddba418&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroupAppend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var InputGroupAppendvue_type_script_lang_js_ = ({
  name: 'InputGroupAppend',
  components: {
    InputGroupText: InputGroupText
  },
  props: {
    /**
     * The type attribute
     *
     * @property String
     */
    text: Boolean
  }
});
// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupAppend.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupAppendvue_type_script_lang_js_ = (InputGroupAppendvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupAppend.vue





/* normalize component */

var InputGroupAppend_component = normalizeComponent(
  InputGroup_InputGroupAppendvue_type_script_lang_js_,
  InputGroupAppendvue_type_template_id_4ddba418_render,
  InputGroupAppendvue_type_template_id_4ddba418_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroupAppend = (InputGroupAppend_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroupPrepend.vue?vue&type=template&id=062cc8b0&
var InputGroupPrependvue_type_template_id_062cc8b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-prepend"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)}
var InputGroupPrependvue_type_template_id_062cc8b0_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupPrepend.vue?vue&type=template&id=062cc8b0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroupPrepend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var InputGroupPrependvue_type_script_lang_js_ = ({
  name: 'InputGroupPrepend',
  components: {
    InputGroupText: InputGroupText
  },
  props: {
    /**
     * The type attribute
     *
     * @property String
     */
    text: Boolean
  }
});
// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupPrepend.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupPrependvue_type_script_lang_js_ = (InputGroupPrependvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroupPrepend.vue





/* normalize component */

var InputGroupPrepend_component = normalizeComponent(
  InputGroup_InputGroupPrependvue_type_script_lang_js_,
  InputGroupPrependvue_type_template_id_062cc8b0_render,
  InputGroupPrependvue_type_template_id_062cc8b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroupPrepend = (InputGroupPrepend_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputGroup/InputGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var InputGroupvue_type_script_lang_js_ = ({
  name: 'InputGroup',
  components: {
    InputGroupText: InputGroupText,
    InputGroupAppend: InputGroupAppend,
    InputGroupPrepend: InputGroupPrepend
  },
  mixins: [Mixins_HasSlots, Mixins_Sizeable, Mixins_Colorable, Mixins_MergeClasses],
  props: {
    append: [Array, Number, String],
    prepend: [Array, Number, String]
  }
});
// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupvue_type_script_lang_js_ = (InputGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/InputGroup/InputGroup.vue?vue&type=style&index=0&lang=scss&
var InputGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("2277");

// CONCATENATED MODULE: ./src/Components/InputGroup/InputGroup.vue






/* normalize component */

var InputGroup_component = normalizeComponent(
  InputGroup_InputGroupvue_type_script_lang_js_,
  InputGroupvue_type_template_id_1b2e6a28_render,
  InputGroupvue_type_template_id_1b2e6a28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroup = (InputGroup_component.exports);
// CONCATENATED MODULE: ./src/Components/InputGroup/index.js





/* harmony default export */ var Components_InputGroup = (InputGroup);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputList/InputList.vue?vue&type=template&id=4ec4e066&
var InputListvue_type_template_id_4ec4e066_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-list"},_vm._l((_vm.computedItems),function(value,i){return _c('div',{directives:[{name:"bind-events",rawName:"v-bind-events"}],key:i},[_vm._t("default",null,{"index":i,"isOdd":i % 2 === 1,"isEven":i % 2 === 0,"isFirstRow":i === 0,"isLastRow":i === _vm.computedItems.length - 1})],2)}),0)}
var InputListvue_type_template_id_4ec4e066_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/InputList/InputList.vue?vue&type=template&id=4ec4e066&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/InputList/InputList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

const TAB = 9;
/* harmony default export */ var InputListvue_type_script_lang_js_ = ({
  directives: {
    bindEvents: {
      inserted(el, binding, vnode) {
        const children = Array.from(vnode.elm.children);
        children.forEach(child => {
          if (isUndefined(child.value)) {
            child.querySelectorAll('input, textarea, select').forEach(input => {
              vnode.context.bindEvents(input, el);
            });
          } else {
            vnode.context.bindEvents(child, el);
          }
        });
      }

    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 1
    },
    validate: {
      type: Function,

      default(el, parent) {
        const nodes = parent.querySelectorAll('input, textarea, select');
        return Array.from(nodes).reduce((carry, input) => {
          return !input.value ? false : carry;
        }, true);
      }

    },
    validateEmpty: {
      type: Function,

      default(el, parent) {
        const nodes = Array.from(parent.querySelectorAll('input, textarea, select')); // If one item left in the list, it should not be removed.

        if (parent.parentElement.children.length === 1) {
          return false;
        }

        return nodes.reduce((carry, input) => {
          return input.value ? false : carry;
        }, true);
      }

    }
  },

  data() {
    const computedItems = [].concat(this.items);

    for (let i = computedItems.length; i < this.total; i++) {
      computedItems.push(i.toString());
    }

    return {
      computedItems
    };
  },

  methods: {
    indexOf(el) {
      return [...el.parentElement.children].indexOf(el);
    },

    isLastChild(el) {
      return this.indexOf(el) === el.parentElement.children.length - 1;
    },

    isFirstChild(el) {
      return this.indexOf(el) === 0;
    },

    bindEvents(input, parent) {
      this.bindBlurEvent(input, parent);
      this.bindKeydownEvent(input, parent);
    },

    bindBlurEvent(input, parent) {
      input.addEventListener('blur', e => {
        const i = this.indexOf(parent);

        if (!this.isLastChild(parent) && this.validateEmpty(input, parent)) {
          this.computedItems.splice(i, 1);
          input.dispatchEvent(new Event('remove'));
          parent.querySelector('input, select, textarea').focus();
          this.$emit('remove', parent, i);
        }
      });
    },

    bindKeydownEvent(input, parent) {
      input.addEventListener('keydown', e => {
        const i = this.indexOf(parent);
        const nodes = Array.from(parent.querySelectorAll('input, select, textarea')); // If the keycode is not a tab, or the shift key is held
        // then ignore the event.

        if (e.shiftKey || e.keyCode !== TAB) {
          return false;
        }

        if (this.isLastChild(parent) && this.validate(input, parent)) {
          if (this.computedItems.indexOf(i + 1) === -1) {
            this.computedItems.push(this.computedItems.length.toString());
          }
        }
      });
    },

    add(input, parent) {
      return new Promise((resolve, reject) => {
        const i = this.indexOf(parent);
        this.$nextTick(() => {
          this.$emit('add', parent.nextSiblingElement, i + 1);
          this.$nextTick(() => resolve(parent.nextSibling));
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Components/InputList/InputList.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputList_InputListvue_type_script_lang_js_ = (InputListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/InputList/InputList.vue





/* normalize component */

var InputList_component = normalizeComponent(
  InputList_InputListvue_type_script_lang_js_,
  InputListvue_type_template_id_4ec4e066_render,
  InputListvue_type_template_id_4ec4e066_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputList = (InputList_component.exports);
// CONCATENATED MODULE: ./src/Components/InputList/index.js

/* harmony default export */ var Components_InputList = (InputList);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/LightSwitchField/LightSwitchField.vue?vue&type=template&id=367b2362&
var LightSwitchFieldvue_type_template_id_367b2362_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{class:_vm.labelClass,attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{class:_vm.controlClasses,attrs:{"tabindex":"0"},on:{"click":function($event){return _vm.toggle()},"keyup":[function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==32){ return null; }return _vm.toggle()},function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==37){ return null; }return _vm.toggle(_vm.offValue)},function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==39){ return null; }return _vm.toggle(_vm.onValue)}]}},[_c('div',{staticClass:"light-switch-handle"}),_c('div',{staticClass:"light-switch-container"},[_c('div',{staticClass:"light-switch-label on-value"}),_c('div',{staticClass:"light-switch-label off-value"})])]),_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",staticClass:"d-none",domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'input',_vm.controlAttributes,false)),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var LightSwitchFieldvue_type_template_id_367b2362_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/LightSwitchField/LightSwitchField.vue?vue&type=template&id=367b2362&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/LightSwitchField/LightSwitchField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var LightSwitchFieldvue_type_script_lang_js_ = ({
  name: 'LightSwitchField',
  components: {
    HelpText: Components_HelpText,
    FormGroup: Components_FormGroup,
    FormLabel: Components_FormLabel,
    FormFeedback: Components_FormFeedback
  },
  mixins: [Mixins_FormControl],
  props: {
    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'form-control light-switch'
    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    activeClass: {
      type: String,
      default: 'on'
    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    onValue: {
      type: [String, Number, Boolean, Object, Array],
      default: 1
    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    offValue: {
      type: [String, Number, Boolean, Object, Array],
      default: 0
    }
  },

  data() {
    return {
      dragging: false
    };
  },

  computed: {
    isActive: function () {
      return this.value === this.onValue;
    },

    controlClasses() {
      return [this.controlClass, this.controlSizeClass, this.spacing || '', this.invalidFeedback ? 'is-invalid' : '', this.dragging ? 'is-dragging' : '', this.isActive ? 'is-active' : ''].join(' ');
    }

  },
  watch: {
    value() {
      this.dragging = true;
      setTimeout(() => {
        this.dragging = false;
      }, this.getTransitionInMilliseconds());
    }

  },
  methods: {
    getTransitionInMilliseconds() {
      const duration = getComputedStyle(this.$el.querySelector('.light-switch-handle')).transitionDuration;
      const numeric = parseFloat(duration, 10);
      const unit = duration.match(/m?s/);

      switch (unit[0]) {
        case 's':
          return numeric * 1000;

        case 'ms':
          return numeric;
      }

      throw new Error(`"${unit[0]}" is not a valid unit of measure. Unit must be "s" (seconds) or "ms" (milliseconds).`);
    },

    toggle(value) {
      this.$emit('input', !isUndefined(value) ? value : this.isActive ? this.offValue : this.onValue);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/LightSwitchField/LightSwitchField.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightSwitchField_LightSwitchFieldvue_type_script_lang_js_ = (LightSwitchFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/LightSwitchField/LightSwitchField.vue?vue&type=style&index=0&lang=scss&
var LightSwitchFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("4ab7");

// CONCATENATED MODULE: ./src/Components/LightSwitchField/LightSwitchField.vue






/* normalize component */

var LightSwitchField_component = normalizeComponent(
  LightSwitchField_LightSwitchFieldvue_type_script_lang_js_,
  LightSwitchFieldvue_type_template_id_367b2362_render,
  LightSwitchFieldvue_type_template_id_367b2362_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LightSwitchField = (LightSwitchField_component.exports);
// CONCATENATED MODULE: ./src/Components/LightSwitchField/index.js

/* harmony default export */ var Components_LightSwitchField = (LightSwitchField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ListGroup/ListGroup.vue?vue&type=template&id=6770d09e&
var ListGroupvue_type_template_id_6770d09e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-group",class:_vm.classes},[_vm._t("default")],2)}
var ListGroupvue_type_template_id_6770d09e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ListGroup/ListGroup.vue?vue&type=template&id=6770d09e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ListGroup/ListGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var ListGroupvue_type_script_lang_js_ = ({
  props: {
    /**
     * The list group appear flush (without some borders).
     *
     * @property Boolean
     */
    flush: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return Prefix_prefix({
        'flush': this.flush
      }, 'list-group');
    }

  },

  mounted() {
    this.bindEventsToChildren();
  },

  updated() {
    this.bindEventsToChildren();
  },

  methods: {
    bindEventsToChildren() {
      each(this.$children, child => {
        child.$off('click', event => this.onClickItem(event, child));
        child.$on('click', event => this.onClickItem(event, child));
      });
    },

    /**
     * The callback function for the `click` event.
     *
     * @return void
     */
    onClick(event) {
      this.$emit('click', event);
    },

    /**
     * The callback function for the child `click` events.
     *
     * @return void
     */
    onClickItem(event, child) {
      this.$emit('item:click', event, child);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/ListGroup/ListGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var ListGroup_ListGroupvue_type_script_lang_js_ = (ListGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/ListGroup/ListGroup.vue





/* normalize component */

var ListGroup_component = normalizeComponent(
  ListGroup_ListGroupvue_type_script_lang_js_,
  ListGroupvue_type_template_id_6770d09e_render,
  ListGroupvue_type_template_id_6770d09e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListGroup = (ListGroup_component.exports);
// CONCATENATED MODULE: ./src/Components/ListGroup/index.js

/* harmony default export */ var Components_ListGroup = (ListGroup);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ListGroup/ListGroupItem.vue?vue&type=template&id=0b88b830&
var ListGroupItemvue_type_template_id_0b88b830_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.to)?_c('router-link',{class:_vm.classes,attrs:{"to":_vm.to},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),(_vm.badge)?_c('badge',_vm._b({},'badge',_vm.badgeOptions,false)):_vm._e()],2):(_vm.href)?_c('a',{class:_vm.classes,attrs:{"href":_vm.href},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),(_vm.badge)?_c('badge',_vm._b({},'badge',_vm.badgeOptions,false)):_vm._e()],2):(_vm.action)?_c('button',{class:_vm.classes,attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('click', $event)}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),(_vm.badge)?_c('badge',_vm._b({},'badge',_vm.badgeOptions,false)):_vm._e()],2):_c('div',{class:_vm.classes,on:{"click":function($event){return _vm.$emit('click', $event)}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),(_vm.badge)?_c('badge',_vm._b({},'badge',_vm.badgeOptions,false)):_vm._e()],2)}
var ListGroupItemvue_type_template_id_0b88b830_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ListGroup/ListGroupItem.vue?vue&type=template&id=0b88b830&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ListGroup/ListGroupItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ListGroupItemvue_type_script_lang_js_ = ({
  components: {
    Badge: Components_Badge
  },
  props: {
    /**
     * The badge label (if number or string) or object of options to pass to
     * the component.
     *
     * @property String|Object
     */
    badge: [Number, String, Object],

    /**
     * The list group item href attribute.
     *
     * @property String
     */
    href: String,

    /**
     * The list group item variant.
     *
     * @property String
     */
    variant: String,

    /**
     * Optionally pass the item as a object to use programmatically later.
     *
     * @property String
     */
    item: Object,

    /**
     * The list group item an action, or clickable item.
     *
     * @property Boolean
     */
    action: {
      type: Boolean,
      default: false
    },

    /**
     * The list group item active.
     *
     * @property Boolean
     */
    active: {
      type: Boolean,
      default: false
    },

    /**
     * The list group item disabled.
     *
     * @property Boolean
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * The list item label.
     *
     * @property Object
     */
    label: {
      type: [Number, String],
      value: null
    },

    /**
     * The to attribute to be passed to a <router-link> component.
     *
     * @property String
     */
    to: [String, Object]
  },
  computed: {
    classes() {
      const classes = Prefix_prefix({
        'action': this.action
      }, 'list-group-item');
      classes['list-group-item'] = true;
      classes['active'] = this.active;
      classes['disabled'] = this.disabled;

      if (this.variant) {
        classes[Prefix_prefix(this.variant, 'list-group-item')] = true;
      }

      return classes;
    },

    badgeOptions() {
      return isObject(this.badge) ? this.badge : {
        label: this.badge
      };
    }

  },
  watch: {
    active(value, prevValue) {
      this.$emit('toggle', value);
      this.$emit(value ? 'activate' : 'deactivate');
    }

  }
});
// CONCATENATED MODULE: ./src/Components/ListGroup/ListGroupItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var ListGroup_ListGroupItemvue_type_script_lang_js_ = (ListGroupItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/ListGroup/ListGroupItem.vue





/* normalize component */

var ListGroupItem_component = normalizeComponent(
  ListGroup_ListGroupItemvue_type_script_lang_js_,
  ListGroupItemvue_type_template_id_0b88b830_render,
  ListGroupItemvue_type_template_id_0b88b830_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListGroupItem = (ListGroupItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/Modal.vue?vue&type=template&id=72478be6&
var Modalvue_type_template_id_72478be6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal",class:_vm.triggerableClasses,style:({display: _vm.isDisplaying ? 'block' : 'none'}),attrs:{"tabindex":"-1","role":"dialog"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cancel($event)}}},[_vm._t("backdrop",[_vm._v("\n        "+_vm._s(_vm.isShowing ? 1 : 0)+"\n        "),_c('modal-backdrop',{ref:"backdrop",attrs:{"show":_vm.isShowing}})]),_c('modal-dialog',{class:{'modal-dialog-centered': _vm.center}},[_c('modal-content',[_vm._t("header",[(_vm.title)?_c('modal-header',{on:{"close":_vm.cancel}},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                ")]):_vm._e()]),_vm._t("body",[_c(!_vm.flush ? 'modal-body' : 'div',{tag:"component",staticClass:"child-component"},[_vm._t("default")],2)]),_vm._t("footer",[(_vm.type)?_c('modal-footer',[(_vm.type === 'alert')?[_c('btn-activity',{attrs:{"activity":_vm.activity,"variant":"primary"},on:{"click":_vm.confirm}},[_vm._v("\n                            "+_vm._s(_vm.okLabel)+"\n                        ")])]:[_c('btn',{attrs:{"type":"button","variant":"secondary"},domProps:{"innerHTML":_vm._s(_vm.cancelLabel)},on:{"click":_vm.cancel}}),_c('btn-activity',{attrs:{"activity":_vm.activity,"variant":"primary"},on:{"click":_vm.confirm}},[_vm._v("\n                            "+_vm._s(_vm.okLabel)+"\n                        ")])]],2):_vm._e()])],2)],1)],2)}
var Modalvue_type_template_id_72478be6_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/Modal.vue?vue&type=template&id=72478be6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalBody.vue?vue&type=template&id=4aa66a04&
var ModalBodyvue_type_template_id_4aa66a04_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-body"},[_vm._t("default")],2)}
var ModalBodyvue_type_template_id_4aa66a04_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/ModalBody.vue?vue&type=template&id=4aa66a04&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalBody.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ModalBodyvue_type_script_lang_js_ = ({
  name: 'ModalBody'
});
// CONCATENATED MODULE: ./src/Components/Modal/ModalBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ModalBodyvue_type_script_lang_js_ = (ModalBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Modal/ModalBody.vue





/* normalize component */

var ModalBody_component = normalizeComponent(
  Modal_ModalBodyvue_type_script_lang_js_,
  ModalBodyvue_type_template_id_4aa66a04_render,
  ModalBodyvue_type_template_id_4aa66a04_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalBody = (ModalBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalDialog.vue?vue&type=template&id=d420fa6c&
var ModalDialogvue_type_template_id_d420fa6c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_vm._t("default")],2)}
var ModalDialogvue_type_template_id_d420fa6c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/ModalDialog.vue?vue&type=template&id=d420fa6c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ModalDialogvue_type_script_lang_js_ = ({
  name: 'ModalDialog'
});
// CONCATENATED MODULE: ./src/Components/Modal/ModalDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ModalDialogvue_type_script_lang_js_ = (ModalDialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Modal/ModalDialog.vue





/* normalize component */

var ModalDialog_component = normalizeComponent(
  Modal_ModalDialogvue_type_script_lang_js_,
  ModalDialogvue_type_template_id_d420fa6c_render,
  ModalDialogvue_type_template_id_d420fa6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalDialog = (ModalDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalHeader.vue?vue&type=template&id=58f14015&
var ModalHeadervue_type_template_id_58f14015_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_vm._t("title",[_c('modal-title',[_vm._t("default")],2)]),_vm._t("close-button",[(_vm.closeable)?_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"ariaLabel"},on:{"click":function($event){return _vm.$emit('close')}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("\n                ×\n            ")])]):_vm._e()])],2)}
var ModalHeadervue_type_template_id_58f14015_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/ModalHeader.vue?vue&type=template&id=58f14015&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalTitle.vue?vue&type=template&id=cabd34b8&
var ModalTitlevue_type_template_id_cabd34b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h5',{staticClass:"modal-title"},[_vm._t("default")],2)}
var ModalTitlevue_type_template_id_cabd34b8_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/ModalTitle.vue?vue&type=template&id=cabd34b8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ModalTitlevue_type_script_lang_js_ = ({
  name: 'ModalTitle'
});
// CONCATENATED MODULE: ./src/Components/Modal/ModalTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ModalTitlevue_type_script_lang_js_ = (ModalTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Modal/ModalTitle.vue





/* normalize component */

var ModalTitle_component = normalizeComponent(
  Modal_ModalTitlevue_type_script_lang_js_,
  ModalTitlevue_type_template_id_cabd34b8_render,
  ModalTitlevue_type_template_id_cabd34b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalTitle = (ModalTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ModalHeadervue_type_script_lang_js_ = ({
  name: 'ModalHeader',
  components: {
    ModalTitle: ModalTitle
  },
  props: {
    ariaLabel: {
      type: String,
      default: 'Close'
    },
    closeable: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Modal/ModalHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ModalHeadervue_type_script_lang_js_ = (ModalHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Modal/ModalHeader.vue





/* normalize component */

var ModalHeader_component = normalizeComponent(
  Modal_ModalHeadervue_type_script_lang_js_,
  ModalHeadervue_type_template_id_58f14015_render,
  ModalHeadervue_type_template_id_58f14015_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalHeader = (ModalHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalFooter.vue?vue&type=template&id=5fc9908b&
var ModalFootervue_type_template_id_5fc9908b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-footer"},[_vm._t("default")],2)}
var ModalFootervue_type_template_id_5fc9908b_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/ModalFooter.vue?vue&type=template&id=5fc9908b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ModalFootervue_type_script_lang_js_ = ({
  name: 'ModalFooter'
});
// CONCATENATED MODULE: ./src/Components/Modal/ModalFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ModalFootervue_type_script_lang_js_ = (ModalFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Modal/ModalFooter.vue





/* normalize component */

var ModalFooter_component = normalizeComponent(
  Modal_ModalFootervue_type_script_lang_js_,
  ModalFootervue_type_template_id_5fc9908b_render,
  ModalFootervue_type_template_id_5fc9908b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalFooter = (ModalFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalContent.vue?vue&type=template&id=ca4039a6&
var ModalContentvue_type_template_id_ca4039a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-content"},[_vm._t("default")],2)}
var ModalContentvue_type_template_id_ca4039a6_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/ModalContent.vue?vue&type=template&id=ca4039a6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ModalContentvue_type_script_lang_js_ = ({
  name: 'ModalContent'
});
// CONCATENATED MODULE: ./src/Components/Modal/ModalContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ModalContentvue_type_script_lang_js_ = (ModalContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Modal/ModalContent.vue





/* normalize component */

var ModalContent_component = normalizeComponent(
  Modal_ModalContentvue_type_script_lang_js_,
  ModalContentvue_type_template_id_ca4039a6_render,
  ModalContentvue_type_template_id_ca4039a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalContent = (ModalContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalBackdrop.vue?vue&type=template&id=89ede902&
var ModalBackdropvue_type_template_id_89ede902_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-backdrop",class:{'fade': _vm.fade, 'show': _vm.show}},[_vm._t("default")],2)}
var ModalBackdropvue_type_template_id_89ede902_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Modal/ModalBackdrop.vue?vue&type=template&id=89ede902&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/ModalBackdrop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ModalBackdropvue_type_script_lang_js_ = ({
  name: 'ModalBackdrop',
  props: {
    /**
     * Show the modal with a fade effect.
     *
     * @property Boolean
     */
    fade: {
      type: Boolean,
      default: true
    },

    /**
     * Is the modal showing.
     *
     * @property Boolean
     */
    show: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isShowing: false
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.isShowing = this.show;
    });
  }

});
// CONCATENATED MODULE: ./src/Components/Modal/ModalBackdrop.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ModalBackdropvue_type_script_lang_js_ = (ModalBackdropvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Modal/ModalBackdrop.vue





/* normalize component */

var ModalBackdrop_component = normalizeComponent(
  Modal_ModalBackdropvue_type_script_lang_js_,
  ModalBackdropvue_type_template_id_89ede902_render,
  ModalBackdropvue_type_template_id_89ede902_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalBackdrop = (ModalBackdrop_component.exports);
// CONCATENATED MODULE: ./src/Mixins/Triggerable/Triggerable.js


/* harmony default export */ var Triggerable = ({
  props: {
    /**
     * Show the triggerable element with a animated fade effect.
     *
     * @type {Boolean}
     */
    animation: {
      type: Boolean,
      default: true
    },

    /**
     * Is the triggerable element showing.
     *
     * @property Boolean
     */
    show: {
      type: Boolean,
      defaut: false
    },

    /**
     * The target element used to position the popover.
     *
     * @type {String|Element|Boolean}
     */
    target: {
      type: [Function, String, Element, Boolean],
      default: false
    },

    /**
     * How the modal is triggered - click | hover | focus | manual. You may
     * pass multiple triggers; separate them with a space. `manual` cannot
     * be combined with any other trigger.
     *
     * @type {String}
     */
    trigger: {
      type: [String, Array],
      default: 'click'
    }
  },
  methods: {
    /**
     * Initialize the trigger event for the specified elements
     *
     * @param  {Element} el
     * @return {void}
     */
    initializeTrigger(el) {
      each(isString_isString(this.trigger) ? this.trigger.split(' ') : this.trigger, trigger => {
        el.addEventListener(trigger, event => {
          this.toggle();
        });
      });
    },

    /**
     * Initialize the event triggers
     *
     * @return void
     */
    initializeTarget() {
      if (this.target && this.trigger !== 'manual') {
        if (isFunction(this.target)) {
          this.initializeTrigger(this.target(this));
        } else if (this.target instanceof Element) {
          this.initializeTrigger(this.target);
        } else {
          (this.$parent.$el || document).querySelectorAll(this.target).forEach(el => {
            this.initializeTrigger(el);
          });
        }
      }
    },

    /**
     * Focus on the first field in the modal (if exists).
     *
     * @return this
     */
    focus() {
      this.$nextTick(() => {
        const el = this.$el.querySelector('.form-control, input, select, textarea');

        if (el) {
          el.focus();
        } else {
          this.$el.focus();
        }
      });
      return this;
    },

    /**
     * Open the triggereable element
     *
     * @return this
     */
    open() {
      this.isDisplaying = true;
      this.$nextTick(() => {
        Transition(this.$el).then(delay => {
          this.isShowing = true;
          this.$emit('open');
        });
      });
      return this;
    },

    /**
     * Close the triggereable element
     *
     * @return this
     */
    close(event) {
      Transition(this.$el).then(delay => {
        this.isDisplaying = false;
        this.$emit('close', event);
      });
      this.isShowing = false;
      return this;
    },

    /**
     * Toggle the triggereable element's open/close method.
     *
     * @return this
     */
    toggle() {
      if (!this.isShowing) {
        this.open();
      } else {
        this.close();
      }

      return this;
    }

  },
  computed: {
    triggerableClasses() {
      return {
        'fade': this.animation,
        'show': this.isShowing
      };
    }

  },
  watch: {
    isShowing(value) {
      if (value) {
        this.focus();
      }
    },

    show(value) {
      this.isShowing = value;
    }

  },

  mounted() {
    this.initializeTarget();
  },

  data() {
    return {
      isShowing: false,
      isDisplaying: false
    };
  }

});
// CONCATENATED MODULE: ./src/Mixins/Triggerable/index.js

/* harmony default export */ var Mixins_Triggerable = (Triggerable);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Modal/Modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: 'Modal',
  components: {
    Btn: Components_Btn,
    BtnActivity: Components_BtnActivity,
    ModalBody: ModalBody,
    ModalBackdrop: ModalBackdrop,
    ModalContent: ModalContent,
    ModalDialog: ModalDialog,
    ModalHeader: ModalHeader,
    ModalFooter: ModalFooter
  },
  mixins: [Mixins_Triggerable],
  props: {
    /**
     * Show the modal activity indicator.
     *
     * @type {Boolean}
     */
    activity: Boolean,

    /**
     * Show the modal with a backdrop.
     *
     * @type {Boolean}
     */
    backdrop: {
      type: Boolean,
      default: true
    },

    /**
     * Is the modal centered in the screen.
     *
     * @type {Boolean}
     */
    center: Boolean,

    /**
     * Is the modal content fixed position
     *
     * @type {Boolean}
     */
    closeable: {
      type: Boolean,
      default: true
    },

    /**
     * Is the modal content flush with the modal edges? If true, no modal-body
     * will be used to wrap the content.
     *
     * @type {Boolean}
     */
    flush: Boolean,

    /**
     * The ok label text.
     *
     * @type {String}
     */
    okLabel: {
      type: String,
      default: 'Ok'
    },

    /**
     * The cancel label text.
     *
     * @type {String}
     */
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },

    /**
     * The modal title.
     *
     * @type {String}
     */
    title: String,

    /**
     * Is the modal type.
     *
     * @type {Boolean}
     */
    type: {
      type: [Boolean, String],
      default: false,

      validate(value) {
        return ['alert', 'confirm', 'prompt'].indexOf(value) !== -1;
      }

    }
  },
  watch: {
    isShowing(value) {
      document.querySelector('body').classList[value ? 'add' : 'remove']('modal-open');
      this.$emit('update:show', value);
    }

  },

  mounted() {
    if (this.show) {
      this.$nextTick(() => {
        this.initializeTarget();
        this.isDisplaying = true;
        setTimeout(() => {
          this.isShowing = this.show;
        }, 50);
      });
    }
  },

  methods: {
    /**
     * Cancel the modal
     *
     * @return {void}
     */
    cancel(event) {
      this.$emit('cancel', event);
      this.close(event);
    },

    /**
     * Confirm the modal
     *
     * @return {void}
     */
    confirm(event) {
      this.$emit('confirm', event);
    },

    /**
     * A callback for the escape function.
     *
     * @return {void}
     */
    onEsc(event) {
      this.type === 'confirm' || this.type === 'prompt' ? this.cancel(event) : this.close(event);
    }

  },

  beforeRouteLeave(to, from, next) {
    this.close();
  }

});
// CONCATENATED MODULE: ./src/Components/Modal/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Modal/Modal.vue?vue&type=style&index=0&lang=scss&
var Modalvue_type_style_index_0_lang_scss_ = __webpack_require__("17db");

// CONCATENATED MODULE: ./src/Components/Modal/Modal.vue






/* normalize component */

var Modal_component = normalizeComponent(
  Modal_Modalvue_type_script_lang_js_,
  Modalvue_type_template_id_72478be6_render,
  Modalvue_type_template_id_72478be6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Modal = (Modal_component.exports);
// CONCATENATED MODULE: ./src/Components/Modal/index.js








/* harmony default export */ var Components_Modal = (Modal);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/Navbar.vue?vue&type=template&id=435a8940&
var Navbarvue_type_template_id_435a8940_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{class:_vm.classes},[_vm._t("default")],2)}
var Navbarvue_type_template_id_435a8940_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navbar/Navbar.vue?vue&type=template&id=435a8940&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//





/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  name: 'Navbar',
  mixins: [Mixins_Variant, Mixins_Colorable, Mixins_MergeClasses],
  props: {
    /**
     * Expand the navbar. If true, applies to all size, otherwise pass a string.
     *
     * @property Object
     */
    expand: {
      type: [Boolean, String],
      default: 'lg',

      validate(value) {
        ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1 || isBoolean(value);
      }

    },

    /**
     * The should the navbar be fixed at the top.
     *
     * @property String
     */
    fixed: {
      type: [String, Boolean],

      validate(value) {
        ['top', 'bottom'].indexOf(value) !== -1 || isBoolean(value);
      }

    },

    /**
     * The should the navbar be stickied at the top.
     *
     * @property String
     */
    sticky: {
      type: [String, Boolean],

      validate(value) {
        ['top', 'bottom'].indexOf(value) !== -1 || isBoolean(value);
      }

    },

    /**
     * The variant attribute
     *
     * @property String
     */
    variant: {
      type: String,
      default: 'light',

      validate(value) {
        return ['light', 'dark'].indexOf(value) !== -1;
      }

    }
  },

  data() {
    return {};
  },

  computed: {
    expandedClass() {
      if (isBoolean(this.expand)) {
        return this.expand;
      }

      return Prefix(Prefix(this.expand, 'expand'), 'navbar');
    },

    classes() {
      return this.mergeClasses('navbar', Prefix(this.sticky === true ? 'top' : this.sticky, 'sticky'), Prefix(this.fixed === true ? 'top' : this.fixed, 'fixed'), this.expandedClass, this.variantClass, this.colorableClasses);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Navbar/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navbar/Navbar.vue





/* normalize component */

var Navbar_component = normalizeComponent(
  Navbar_Navbarvue_type_script_lang_js_,
  Navbarvue_type_template_id_435a8940_render,
  Navbarvue_type_template_id_435a8940_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navbar = (Navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarBrand.vue?vue&type=template&id=d74aabac&
var NavbarBrandvue_type_template_id_d74aabac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",staticClass:"navbar-brand",class:{'h1': _vm.h1},attrs:{"to":_vm.to,"href":_vm.href || '#'}},[(_vm.src)?_c('img',{staticClass:"d-inline-block align-center",attrs:{"src":_vm.src,"width":_vm.unit(_vm.width),"height":_vm.unit(_vm.height),"alt":_vm.alt}}):_vm._e(),_vm._t("default")],2)}
var NavbarBrandvue_type_template_id_d74aabac_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navbar/NavbarBrand.vue?vue&type=template&id=d74aabac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarBrand.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NavbarBrandvue_type_script_lang_js_ = ({
  props: {
    /**
     * The img `alt` attribute. `src` must be define before this prop has
     * any affect.
     *
     * @property Object
     */
    alt: String,

    /**
     * The HTML wrapping tag.
     *
     * @property Object
     */
    tag: String,

    /**
     * The img `width` attribute. `src` must be define before this prop has
     * any affect.
     *
     * @property Object
     */
    width: [Number, String],

    /**
     * The img `height` attribute. `src` must be define before this prop has
     * any affect.
     *
     * @property Object
     */
    height: [Number, String],

    /**
     * The `to` attribute that is passed to the component.
     *
     * @property Object
     */
    to: [Object, String],

    /**
     * The `href` attribute that is passed to the component.
     *
     * @property Object
     */
    href: String,

    /**
     * Append the `h1` class to increase the display size
     *
     * @property Object
     */
    h1: Boolean,

    /**
     * If a `src` attribute is passed, then use it to add an img tag
     *
     * @property Object
     */
    src: String
  },
  computed: {
    component() {
      return this.tag || (this.to ? 'router-link' : this.href ? 'a' : 'span');
    }

  },
  methods: {
    unit(value) {
      return unit(value);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_NavbarBrandvue_type_script_lang_js_ = (NavbarBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarBrand.vue





/* normalize component */

var NavbarBrand_component = normalizeComponent(
  Navbar_NavbarBrandvue_type_script_lang_js_,
  NavbarBrandvue_type_template_id_d74aabac_render,
  NavbarBrandvue_type_template_id_d74aabac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavbarBrand = (NavbarBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarCollapse.vue?vue&type=template&id=e4f5ff3e&
var NavbarCollapsevue_type_template_id_e4f5ff3e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-collapse",class:{'collapse': _vm.collapse},attrs:{"id":"navbarCollapse"}},[_vm._t("default")],2)}
var NavbarCollapsevue_type_template_id_e4f5ff3e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navbar/NavbarCollapse.vue?vue&type=template&id=e4f5ff3e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarCollapse.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var NavbarCollapsevue_type_script_lang_js_ = ({
  name: 'NavbarCollapse',
  props: {
    collapse: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarCollapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_NavbarCollapsevue_type_script_lang_js_ = (NavbarCollapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarCollapse.vue





/* normalize component */

var NavbarCollapse_component = normalizeComponent(
  Navbar_NavbarCollapsevue_type_script_lang_js_,
  NavbarCollapsevue_type_template_id_e4f5ff3e_render,
  NavbarCollapsevue_type_template_id_e4f5ff3e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavbarCollapse = (NavbarCollapse_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarNav.vue?vue&type=template&id=9cb2342a&
var NavbarNavvue_type_template_id_9cb2342a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"navbar-nav",attrs:{"role":"nav"}},[_vm._t("default")],2)}
var NavbarNavvue_type_template_id_9cb2342a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navbar/NavbarNav.vue?vue&type=template&id=9cb2342a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var NavbarNavvue_type_script_lang_js_ = ({
  name: 'NavbarNav'
});
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_NavbarNavvue_type_script_lang_js_ = (NavbarNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarNav.vue





/* normalize component */

var NavbarNav_component = normalizeComponent(
  Navbar_NavbarNavvue_type_script_lang_js_,
  NavbarNavvue_type_template_id_9cb2342a_render,
  NavbarNavvue_type_template_id_9cb2342a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavbarNav = (NavbarNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarText.vue?vue&type=template&id=4f682f76&
var NavbarTextvue_type_template_id_4f682f76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"navbar-text"},[_vm._t("default")],2)}
var NavbarTextvue_type_template_id_4f682f76_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navbar/NavbarText.vue?vue&type=template&id=4f682f76&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var NavbarTextvue_type_script_lang_js_ = ({
  name: 'NavbarText'
});
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarText.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_NavbarTextvue_type_script_lang_js_ = (NavbarTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarText.vue





/* normalize component */

var NavbarText_component = normalizeComponent(
  Navbar_NavbarTextvue_type_script_lang_js_,
  NavbarTextvue_type_template_id_4f682f76_render,
  NavbarTextvue_type_template_id_4f682f76_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavbarText = (NavbarText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarToggler.vue?vue&type=template&id=8866adca&
var NavbarTogglervue_type_template_id_8866adca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler",attrs:{"type":"button","data-toggle":"collapse","data-target":_vm.target,"aria-controls":_vm.target,"aria-expanded":_vm.expanded,"aria-label":_vm.label},on:{"click":_vm.onClick}},[_vm._t("default",[_c('navbar-toggler-icon')])],2)}
var NavbarTogglervue_type_template_id_8866adca_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navbar/NavbarToggler.vue?vue&type=template&id=8866adca&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarTogglerIcon.vue?vue&type=template&id=90927698&
var NavbarTogglerIconvue_type_template_id_90927698_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"navbar-toggler-icon"},[_vm._t("default")],2)}
var NavbarTogglerIconvue_type_template_id_90927698_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navbar/NavbarTogglerIcon.vue?vue&type=template&id=90927698&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarTogglerIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var NavbarTogglerIconvue_type_script_lang_js_ = ({
  name: 'NavbarTogglerIcon'
});
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarTogglerIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_NavbarTogglerIconvue_type_script_lang_js_ = (NavbarTogglerIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarTogglerIcon.vue





/* normalize component */

var NavbarTogglerIcon_component = normalizeComponent(
  Navbar_NavbarTogglerIconvue_type_script_lang_js_,
  NavbarTogglerIconvue_type_template_id_90927698_render,
  NavbarTogglerIconvue_type_template_id_90927698_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavbarTogglerIcon = (NavbarTogglerIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navbar/NavbarToggler.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NavbarTogglervue_type_script_lang_js_ = ({
  name: 'NavbarToggler',
  components: {
    NavbarTogglerIcon: NavbarTogglerIcon
  },
  props: {
    expanded: Boolean,
    label: {
      type: String,
      default: 'Toggle navigation'
    },
    target: {
      type: String,
      default: '.navbar-collapse'
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarToggler.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_NavbarTogglervue_type_script_lang_js_ = (NavbarTogglervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navbar/NavbarToggler.vue





/* normalize component */

var NavbarToggler_component = normalizeComponent(
  Navbar_NavbarTogglervue_type_script_lang_js_,
  NavbarTogglervue_type_template_id_8866adca_render,
  NavbarTogglervue_type_template_id_8866adca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavbarToggler = (NavbarToggler_component.exports);
// CONCATENATED MODULE: ./src/Components/Navbar/index.js








/* harmony default export */ var Components_Navbar = (Navbar);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/Navigation.vue?vue&type=template&id=9915521c&
var Navigationvue_type_template_id_9915521c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"nav",class:_vm.classes,attrs:{"role":_vm.role}},[_vm._t("default")],2)}
var Navigationvue_type_template_id_9915521c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navigation/Navigation.vue?vue&type=template&id=9915521c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/Navigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  name: 'Navigation',
  mixins: [Mixins_Colorable, Mixins_MergeClasses],
  props: {
    /**
     * Helper to add the justify-content-X class.
     *
     * @prop {Array}
     */
    align: String,

    /**
     * An array of buttons
     *
     * @prop {Array}
     */
    buttons: Array,

    /**
     * The navigation inside a card
     *
     * @prop {Boolean}
     */
    card: Boolean,

    /**
     * Justify nav items to fill the width equally (using flex).
     *
     * @prop {Array}
     */
    fill: Boolean,

    /**
     * Add `nav-justified` class to the component.
     *
     * @prop {Array}
     */
    justified: Boolean,

    /**
     * Display items as pill shapes
     *
     * @prop {Array}
     */
    pills: Boolean,

    /**
     * Display items as tab shapes
     *
     * @prop {Array}
     */
    tabs: Boolean,

    /**
     * Display the buttons vertically
     *
     * @prop {Boolean}
     */
    vertical: Boolean,

    /**
     * The role attribute
     *
     * @prop {String}
     */
    role: String
  },

  data() {
    return {
      isCard: this.card
    };
  },

  computed: {
    classes() {
      return this.mergeClasses(this.align ? Prefix(this.align, 'justify-content') : null, this.colorableClasses, {
        'card-header-tabs': this.isCard && this.tabs,
        'card-header-pills': this.isCard && this.pills,
        'nav-justified': this.justified,
        'nav-fill': this.fill,
        'nav-pills': this.pills,
        'nav-tabs': this.tabs,
        'flex-column': this.vertical
      });
    }

  },

  updated() {
    if (!this.isCard) {
      this.isCard = this.$parent.$el.classList.contains('card-header');
    }
  }

});
// CONCATENATED MODULE: ./src/Components/Navigation/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navigation/Navigation.vue





/* normalize component */

var Navigation_component = normalizeComponent(
  Navigation_Navigationvue_type_script_lang_js_,
  Navigationvue_type_template_id_9915521c_render,
  Navigationvue_type_template_id_9915521c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navigation = (Navigation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationError.vue?vue&type=template&id=62caeef9&
var NavigationErrorvue_type_template_id_62caeef9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"navigation-error fa-stack fa-md",attrs:{"title":_vm.error}},[_c('font-awesome-layers',[_c('font-awesome-icon',{attrs:{"icon":"certificate","size":"2x"}}),_c('font-awesome-icon',{attrs:{"icon":"exclamation"}})],1)],1)}
var NavigationErrorvue_type_template_id_62caeef9_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navigation/NavigationError.vue?vue&type=template&id=62caeef9&

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faCertificate.js
var faCertificate = __webpack_require__("5d01");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faExclamation.js
var faExclamation = __webpack_require__("2868");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationError.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




index_es["c" /* library */].add(faCertificate["faCertificate"]);
index_es["c" /* library */].add(faExclamation["faExclamation"]);
/* harmony default export */ var NavigationErrorvue_type_script_lang_js_ = ({
  name: 'NavigationError',
  components: {
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    FontAwesomeLayers: vue_fontawesome_index_es["b" /* FontAwesomeLayers */]
  },
  props: {
    error: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Navigation/NavigationError.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_NavigationErrorvue_type_script_lang_js_ = (NavigationErrorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Navigation/NavigationError.vue?vue&type=style&index=0&lang=scss&
var NavigationErrorvue_type_style_index_0_lang_scss_ = __webpack_require__("abe7");

// CONCATENATED MODULE: ./src/Components/Navigation/NavigationError.vue






/* normalize component */

var NavigationError_component = normalizeComponent(
  Navigation_NavigationErrorvue_type_script_lang_js_,
  NavigationErrorvue_type_template_id_62caeef9_render,
  NavigationErrorvue_type_template_id_62caeef9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavigationError = (NavigationError_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationItem.vue?vue&type=template&id=13972408&
var NavigationItemvue_type_template_id_13972408_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",class:_vm.classes,on:{"click":function($event){return _vm.$emit('click', $event)}}},[_vm._t("default")],2)}
var NavigationItemvue_type_template_id_13972408_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navigation/NavigationItem.vue?vue&type=template&id=13972408&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationLink.vue?vue&type=template&id=244f59e0&
var NavigationLinkvue_type_template_id_244f59e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",class:_vm.classes,attrs:{"href":_vm.href || (_vm.to ? '#' : null),"to":_vm.to},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_vm._t("default"),(_vm.error)?_c('navigation-error',{attrs:{"error":_vm.error}}):_vm._e()],2)}
var NavigationLinkvue_type_template_id_244f59e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navigation/NavigationLink.vue?vue&type=template&id=244f59e0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var NavigationLinkvue_type_script_lang_js_ = ({
  name: 'NavigationLink',
  components: {
    NavigationError: NavigationError
  },
  props: {
    /**
     * Is the navigation item active
     *
     * @prop {Boolean}
     */
    active: Boolean,

    /**
     * Is the navigation item disabled
     *
     * @prop {Boolean}
     */
    disabled: Boolean,

    /**
     * The error string.
     *
     * @prop {String}
     */
    error: String,

    /**
     * The href attribute
     *
     * @prop {String}
     */
    href: String,

    /**
     * The component HTML tag
     *
     * @prop {String}
     */
    tag: String,

    /**
     * The to attribute, will be passed to router-link.
     *
     * @prop {String}
     */
    to: [Object, String],

    /**
     * Add the nav-item class to the link
     *
     * @prop {Boolean}
     */
    item: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    component() {
      return this.tag || (this.to ? 'router-link' : 'a');
    },

    classes() {
      return {
        'nav-link': true,
        'nav-item': !!this.item,
        'active': this.active,
        'disabled': this.disabled
      };
    }

  },

  updated() {
    if (!this.isItem) {
      this.isItem = !this.$parent.$el.classList.contains('nav-item');
    }
  }

});
// CONCATENATED MODULE: ./src/Components/Navigation/NavigationLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_NavigationLinkvue_type_script_lang_js_ = (NavigationLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navigation/NavigationLink.vue





/* normalize component */

var NavigationLink_component = normalizeComponent(
  Navigation_NavigationLinkvue_type_script_lang_js_,
  NavigationLinkvue_type_template_id_244f59e0_render,
  NavigationLinkvue_type_template_id_244f59e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavigationLink = (NavigationLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NavigationItemvue_type_script_lang_js_ = ({
  name: 'NavigationItem',
  extends: NavigationLink,
  props: {
    /**
     * The HTML element
     *
     * @prop {String}
     */
    element: String,

    /**
     * Is the component a list element
     *
     * @prop {Boolean}
     */
    list: Boolean,

    /**
     * Add the nav-item class to the link
     *
     * @prop {Boolean}
     */
    item: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    component() {
      if (this.element) {
        return this.element;
      } else if (this.href) {
        return 'a';
      } else if (this.list) {
        return 'li';
      }

      return 'div';
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Navigation/NavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_NavigationItemvue_type_script_lang_js_ = (NavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navigation/NavigationItem.vue





/* normalize component */

var NavigationItem_component = normalizeComponent(
  Navigation_NavigationItemvue_type_script_lang_js_,
  NavigationItemvue_type_template_id_13972408_render,
  NavigationItemvue_type_template_id_13972408_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavigationItem = (NavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationDropdown.vue?vue&type=template&id=2b023768&
var NavigationDropdownvue_type_template_id_2b023768_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('navigation-item',{staticClass:"dropdown"},[_vm._t("toggle-button",[_c('navigation-link',{staticClass:"dropdown-toggle",attrs:{"href":"#","data-toggle":"dropdown","role":"button","aria-haspopup":"true","aria-expanded":_vm.isDropdownShowing},on:{"blur":_vm.onBlur},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggle()}}},[_vm._v("\n            "+_vm._s(_vm.label)+"\n        ")])]),_vm._t("dropdown-menu",[_c('dropdown-menu',{attrs:{"id":_vm.$attrs.id,"align":_vm.align,"show":_vm.isDropdownShowing},on:{"update:show":function($event){_vm.isDropdownShowing=$event},"item:click":_vm.onItemClick}},[_vm._t("default")],2)])],2)}
var NavigationDropdownvue_type_template_id_2b023768_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Navigation/NavigationDropdown.vue?vue&type=template&id=2b023768&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Navigation/NavigationDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var NavigationDropdownvue_type_script_lang_js_ = ({
  name: 'NavigationDropdown',
  components: {
    DropdownMenu: Components_DropdownMenu,
    NavigationItem: NavigationItem,
    NavigationLink: NavigationLink
  },
  extends: Components_BtnDropdown
});
// CONCATENATED MODULE: ./src/Components/Navigation/NavigationDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_NavigationDropdownvue_type_script_lang_js_ = (NavigationDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Navigation/NavigationDropdown.vue





/* normalize component */

var NavigationDropdown_component = normalizeComponent(
  Navigation_NavigationDropdownvue_type_script_lang_js_,
  NavigationDropdownvue_type_template_id_2b023768_render,
  NavigationDropdownvue_type_template_id_2b023768_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavigationDropdown = (NavigationDropdown_component.exports);
// CONCATENATED MODULE: ./src/Components/Navigation/index.js






/* harmony default export */ var Components_Navigation = (Navigation);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Overlay/Overlay.vue?vue&type=template&id=64292d26&
var Overlayvue_type_template_id_64292d26_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overlay",class:_vm.triggerableClasses,style:({'background': _vm.background}),attrs:{"role":"dialog","tabindex":"-1"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.onEsc($event)}}},[(_vm.closeable && !_vm.hideCloseButton)?_c('button',{staticClass:"btn btn-link overlay-close",attrs:{"type":"button"},on:{"click":_vm.onClickClose}},[_c('font-awesome-icon',{attrs:{"icon":"times-circle"}})],1):_vm._e(),_c('overlay-content',{class:{'overlay-content-fixed': _vm.fixedContent, 'overlay-content-center': _vm.center},style:({minHeight: _vm.minHeight})},[_vm._t("body",[_c('overlay-body',{staticClass:"my-4"},[_vm._t("default")],2)])],2)],1)}
var Overlayvue_type_template_id_64292d26_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Overlay/Overlay.vue?vue&type=template&id=64292d26&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Overlay/OverlayBody.vue?vue&type=template&id=13a1d844&
var OverlayBodyvue_type_template_id_13a1d844_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overlay-body"},[_vm._t("default")],2)}
var OverlayBodyvue_type_template_id_13a1d844_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Overlay/OverlayBody.vue?vue&type=template&id=13a1d844&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Overlay/OverlayBody.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var OverlayBodyvue_type_script_lang_js_ = ({
  name: 'OverlayBody'
});
// CONCATENATED MODULE: ./src/Components/Overlay/OverlayBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var Overlay_OverlayBodyvue_type_script_lang_js_ = (OverlayBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Overlay/OverlayBody.vue





/* normalize component */

var OverlayBody_component = normalizeComponent(
  Overlay_OverlayBodyvue_type_script_lang_js_,
  OverlayBodyvue_type_template_id_13a1d844_render,
  OverlayBodyvue_type_template_id_13a1d844_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OverlayBody = (OverlayBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Overlay/OverlayContent.vue?vue&type=template&id=0f1dc258&
var OverlayContentvue_type_template_id_0f1dc258_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('container',{staticClass:"overlay-content"},[_vm._t("default")],2)}
var OverlayContentvue_type_template_id_0f1dc258_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Overlay/OverlayContent.vue?vue&type=template&id=0f1dc258&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Overlay/OverlayContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var OverlayContentvue_type_script_lang_js_ = ({
  name: 'OverlayContent',
  components: {
    Container: Components_Container
  }
});
// CONCATENATED MODULE: ./src/Components/Overlay/OverlayContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var Overlay_OverlayContentvue_type_script_lang_js_ = (OverlayContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Overlay/OverlayContent.vue?vue&type=style&index=0&lang=scss&
var OverlayContentvue_type_style_index_0_lang_scss_ = __webpack_require__("4342");

// CONCATENATED MODULE: ./src/Components/Overlay/OverlayContent.vue






/* normalize component */

var OverlayContent_component = normalizeComponent(
  Overlay_OverlayContentvue_type_script_lang_js_,
  OverlayContentvue_type_template_id_0f1dc258_render,
  OverlayContentvue_type_template_id_0f1dc258_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OverlayContent = (OverlayContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Overlay/Overlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






index_es["c" /* library */].add(faTimesCircle["faTimesCircle"]);
/* harmony default export */ var Overlayvue_type_script_lang_js_ = ({
  name: 'Overlay',
  components: {
    OverlayBody: OverlayBody,
    OverlayContent: OverlayContent,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  mixins: [Mixins_Triggerable],
  props: {
    /**
     * The overlay background color.
     *
     * @property String
     */
    background: {
      type: String,
      default: 'rgba(255, 255, 255, .925)'
    },

    /**
     * Is the overlay content fixed position
     *
     * @property Boolean
     */
    closeable: {
      type: Boolean,
      default: true
    },

    /**
     * Center the overlay content on the screen using flex box.
     *
     * @type {Boolean}
     */
    center: {
      type: Boolean,
      default: true
    },

    /**
     * Is the overlay content fixed position
     *
     * @property Boolean
     */
    fixedContent: Boolean,

    /**
     * Is the overlay close button hidden but still closeable.
     *
     * @property Boolean
     */
    hideCloseButton: Boolean,

    /**
     * Is the overlay content minimum height.
     *
     * @property Boolean
     */
    minHeight: [String, Number]
  },
  methods: {
    /**
     * The callback for the `click` event on the close button.
     *
     * @return void
     */
    onClickClose(event) {
      this.$emit('click:close', event);
      this.close();
    },

    onEsc(event) {
      this.closeable && this.close();
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Overlay/Overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var Overlay_Overlayvue_type_script_lang_js_ = (Overlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Overlay/Overlay.vue?vue&type=style&index=0&lang=scss&
var Overlayvue_type_style_index_0_lang_scss_ = __webpack_require__("9791");

// CONCATENATED MODULE: ./src/Components/Overlay/Overlay.vue






/* normalize component */

var Overlay_component = normalizeComponent(
  Overlay_Overlayvue_type_script_lang_js_,
  Overlayvue_type_template_id_64292d26_render,
  Overlayvue_type_template_id_64292d26_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Overlay = (Overlay_component.exports);
// CONCATENATED MODULE: ./src/Components/Overlay/index.js




/* harmony default export */ var Components_Overlay = (Overlay);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Pagination/Pagination.vue?vue&type=template&id=85daec60&
var Paginationvue_type_template_id_85daec60_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"Page navigation example"}},[_c('ul',{staticClass:"pagination mb-0",class:_vm.classes},[_c('li',{staticClass:"page-item",class:{'disabled': _vm.currentPage === 1}},[_c('a',{staticClass:"page-link",attrs:{"href":"#","aria-label":"Previous"},on:{"click":function($event){$event.preventDefault();return _vm.prev($event)}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("\n                    «\n                ")])])]),_vm._l((_vm.pages),function(item,i){return _c('li',{key:i,staticClass:"page-item",class:{'active': item.page === _vm.currentPage, 'disabled': !!item.divider},attrs:{"data-page":item.page}},[_vm._t("default",[(item.divider)?_c('a',{staticClass:"page-link"},[_vm._v("\n                    …\n                ")]):_c('a',{staticClass:"page-link",class:item.class,attrs:{"href":"#","data-label":item.label},on:{"click":function($event){$event.preventDefault();return _vm.paginate(item.page, $event)}}},[(item.label)?_c('span',{attrs:{"aria-hidden":"true"},domProps:{"innerHTML":_vm._s(item.label)}}):_vm._e(),(item.page)?_c('span',{attrs:{"aria-hidden":"true"},domProps:{"innerHTML":_vm._s(item.page)}}):_vm._e()])],{"item":item})],2)}),_c('li',{staticClass:"page-item",class:{'disabled': _vm.currentPage >= _vm.totalPages}},[_c('a',{staticClass:"page-link",attrs:{"href":"#","aria-label":"Next"},on:{"click":function($event){$event.preventDefault();return _vm.next($event)}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("\n                    »\n                ")])])])],2)])}
var Paginationvue_type_template_id_85daec60_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Pagination/Pagination.vue?vue&type=template&id=85daec60&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Pagination/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  props: {
    /**
     * The alignment of the pagination component.
     *
     * @prop String
     */
    align: {
      type: String,
      validate: value => {
        return ['start', 'end', 'center'].indexOf(value) !== -1;
      }
    },

    /**
     * The page on which the paginator should start.
     *
     * @prop String
     */
    page: {
      type: Number,
      default: 1
    },

    /**
     * The total number of pages in the paginator.
     *
     * @prop String
     */
    totalPages: {
      type: Number,
      default: 1
    },

    /**
     * The number of pages to show when the total number of pages is
     * greater than the number of pages that should be shown.
     *
     * @prop String
     */
    showPages: {
      type: Number,
      default: 6
    }
  },

  data() {
    return {
      currentPage: this.page
    };
  },

  computed: {
    pages() {
      return this.generate();
    },

    classes() {
      const classes = {};
      classes['justify-content-' + this.align] = true;
      return classes;
    }

  },
  methods: {
    next(event) {
      this.paginate(this.currentPage >= this.totalPages ? this.currentPage : this.currentPage + 1, event);
    },

    prev(event) {
      this.paginate(this.currentPage <= 1 ? this.currentPage : this.currentPage - 1, event);
    },

    paginate(page, event) {
      if (event.currentTarget.parentNode.classList.contains('disabled')) {
        return;
      }

      this.setActivePage(page);
      this.$emit('paginate', page, event);
    },

    setActivePage(page) {
      if (this.currentPage !== page) {
        this.currentPage = page;
      }
    },

    generate() {
      const pages = [];
      const showPages = this.showPages % 2 ? this.showPages + 1 : this.showPages;
      let startPage = this.currentPage >= showPages ? this.currentPage - showPages / 2 : 1;
      const startOffset = showPages + startPage;
      const endPage = this.totalPages < startOffset ? this.totalPages : startOffset;
      const diff = startPage - endPage + showPages;
      startPage -= startPage - diff > 0 ? diff : 0;

      if (startPage > 1) {
        pages.push({
          page: 1
        });
      }

      if (startPage > 2) {
        pages.push({
          divider: true
        });
      }

      for (let i = startPage; i < endPage; i++) {
        pages.push({
          page: i
        });
      }

      if (endPage <= this.totalPages) {
        if (this.totalPages - 1 > endPage) {
          pages.push({
            divider: true
          });
        }

        pages.push({
          page: this.totalPages
        });
      }

      return pages;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Pagination/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pagination_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Pagination/Pagination.vue





/* normalize component */

var Pagination_component = normalizeComponent(
  Pagination_Paginationvue_type_script_lang_js_,
  Paginationvue_type_template_id_85daec60_render,
  Paginationvue_type_template_id_85daec60_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagination = (Pagination_component.exports);
// CONCATENATED MODULE: ./src/Components/Pagination/index.js

/* harmony default export */ var Components_Pagination = (Pagination);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Popover/Popover.vue?vue&type=template&id=7b765a5d&
var Popovervue_type_template_id_7b765a5d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDisplaying),expression:"isDisplaying"}],staticClass:"popover",class:_vm.mergeClasses(_vm.triggerableClasses, _vm.classes),attrs:{"role":"tooltip"}},[_c('div',{staticClass:"arrow"}),(_vm.title)?_c('popover-header',{domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_c('popover-body',[_vm._t("default")],2)],1)}
var Popovervue_type_template_id_7b765a5d_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Popover/Popover.vue?vue&type=template&id=7b765a5d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Popover/Popover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Popovervue_type_script_lang_js_ = ({
  name: 'Popover',
  mixins: [Mixins_Triggerable, Mixins_MergeClasses],
  props: {
    /**
     * Apply a CSS fade transition to the popover
     *
     * @type {Boolean}
     */
    animation: {
      type: Boolean,
      default: true
    },

    /**
     * Overflow constraint boundary of the popover. Accepts the values of
     * 'viewport', 'window', 'scrollParent', or an HTMLElement reference
     * (JavaScript only). For more information refer to Popper.js's
     * preventOverflow docs.
     *
     * @type {Object}
     */
    boundary: {
      type: [String, Array],
      default: 'scrollParent',

      validate(value) {
        return ['viewport', 'window', 'viewport'].indexOf(value) !== -1;
      }

    },

    /**
     * Appends the popover to a specific element.
     *
     * Example: container: 'body'.
     *
     * This option is particularly useful in that it allows you to position
     * the popover in the flow of the document near the triggering element -
     * which will prevent the popover from floating away from thetriggering
     * element during a window resize.
     *
     * @type {String|Element|Boolean}
     */
    container: {
      type: [String, Element, Boolean],
      default: false
    },

    /**
     * Delay closeing and hiding the popover (ms) - does not apply to manual trigger type
     *
     * If a number is supplied, delay is applied to both open/close
     *
     * Object structure is: delay: { "close": 500, "open": 100 }
     *
     * @type {Number|Object}
     */
    delay: {
      type: [Number, Object],
      default: 0
    },

    /**
     * Allow to specify which position Popper will use on fallback. For more
     * information refer to Popper.js's behavior docs
     *
     * @type {String|Array}
     */
    fallbackPlacement: {
      type: [String, Array],
      default: 'flip'
    },

    /**
     * Offset of the popover relative to its target. For more information
     * refer to Popper.js's offset docs.
     *
     * @type {Number|String}
     */
    offset: {
      type: [Number, String],
      default: 0
    },

    /**
     * How to position the popover - auto | top | bottom | left | right.
     *
     * When auto is specified, it will dynamically reorient the popover.
     *
     * When a function is used to determine the placement, it is called with
     * the popover DOM node as its first argument and the triggering element
     * DOM node as its second. The this context is set to the popover
     * instance.
     *
     * @type {String|Function}
     */
    placement: {
      type: [String, Function],
      default: 'top',

      validate(value) {
        return ['auto', 'top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
      }

    },

    /**
     * If this property is passed, it will force the popover to be visible
     * by default.
     *
     * @type {Boolean}
     */
    show: Boolean,

    /**
     * If a selector is provided, popover objects will be delegated to the
     * specified targets. In practice, this is used to enable dynamic HTML
     * content to have popovers added. See this and an informative example.
     *
     * @type {Boolean|String}
     */
    selector: {
      type: [Boolean, String],
      default: false
    },

    /**
     * The target element used to position the popover.
     *
     * @type {String|Element|Boolean}
     */
    target: {
      type: [String, Element, Boolean],
      default: false
    },

    /**
     * The popover title
     *
     * @type {String}
     */
    title: String,

    /**
     * How popover is triggered - click | hover | focus | manual. You may
     * pass multiple triggers; separate them with a space. `manual` cannot
     * be combined with any other trigger.
     *
     * @type {String}
     */
    trigger: {
      type: [String, Array],
      default: 'click'
    }
  },
  computed: {
    classes() {
      return Prefix({
        'top': this.placement === 'top',
        'bottom': this.placement === 'bottom',
        'left': this.placement === 'left',
        'right': this.placement === 'right'
      }, 'bs-popover');
    }

  },
  watch: {
    isShowing(value) {
      this.$nextTick(() => {
        this.align();

        if (value) {
          this.focus();
        }
      });
    }

  },

  beforeCreate() {
    if (!this.$poppers) {
      this.$poppers = {};
    }
  },

  methods: {
    align() {
      each(this.$poppers, el => {
        el.popper.update();
      });
    },

    createPopper(el) {
      return new external_Popper_default.a(el, this.$el, {
        offset: this.offset,
        placement: this.placement,
        modifiers: {
          flip: {
            boundariesElement: this.container,
            behavior: this.fallbackPlacement
          },
          offset: {
            enabled: !!this.offset,
            offset: this.offset
          },
          arrow: {
            enable: true,
            element: this.$el.querySelector('.arrow')
          }
        }
      });
    },

    getArrowElement() {
      return this.$el.querySelector('.arrow');
    },

    /**
     * Initialize the trigger event for the specified elements
     *
     * @param  {Element} el
     * @return {void}
     */
    initializeTrigger(el) {
      this.$poppers[el] = {
        trigger: isString_isString(this.trigger) ? this.trigger.split(' ') : this.trigger,
        popper: this.createPopper(el),
        event: event => {
          this.toggle();
          this.$poppers[el].popper.update();
        }
      };
      each(this.$poppers[el].trigger, trigger => {
        el.addEventListener(trigger, this.$poppers[el].event);
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Popover/Popover.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popover_Popovervue_type_script_lang_js_ = (Popovervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Popover/Popover.vue





/* normalize component */

var Popover_component = normalizeComponent(
  Popover_Popovervue_type_script_lang_js_,
  Popovervue_type_template_id_7b765a5d_render,
  Popovervue_type_template_id_7b765a5d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Popover = (Popover_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Popover/PopoverBody.vue?vue&type=template&id=b3309c78&
var PopoverBodyvue_type_template_id_b3309c78_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popover-body"},[_vm._t("default")],2)}
var PopoverBodyvue_type_template_id_b3309c78_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Popover/PopoverBody.vue?vue&type=template&id=b3309c78&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Popover/PopoverBody.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var PopoverBodyvue_type_script_lang_js_ = ({
  name: 'PopoverBody'
});
// CONCATENATED MODULE: ./src/Components/Popover/PopoverBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popover_PopoverBodyvue_type_script_lang_js_ = (PopoverBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Popover/PopoverBody.vue





/* normalize component */

var PopoverBody_component = normalizeComponent(
  Popover_PopoverBodyvue_type_script_lang_js_,
  PopoverBodyvue_type_template_id_b3309c78_render,
  PopoverBodyvue_type_template_id_b3309c78_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PopoverBody = (PopoverBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Popover/PopoverHeader.vue?vue&type=template&id=14944b1a&
var PopoverHeadervue_type_template_id_14944b1a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"popover-header"},[_vm._t("default")],2)}
var PopoverHeadervue_type_template_id_14944b1a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Popover/PopoverHeader.vue?vue&type=template&id=14944b1a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Popover/PopoverHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var PopoverHeadervue_type_script_lang_js_ = ({
  name: 'PopoverHeader',
  props: {
    /**
     * The component HTML element
     *
     * @type {String}
     */
    tag: {
      type: String,
      default: 'h3'
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Popover/PopoverHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popover_PopoverHeadervue_type_script_lang_js_ = (PopoverHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Popover/PopoverHeader.vue





/* normalize component */

var PopoverHeader_component = normalizeComponent(
  Popover_PopoverHeadervue_type_script_lang_js_,
  PopoverHeadervue_type_template_id_14944b1a_render,
  PopoverHeadervue_type_template_id_14944b1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PopoverHeader = (PopoverHeader_component.exports);
// CONCATENATED MODULE: ./src/Components/Popover/index.js




/* harmony default export */ var Components_Popover = (Popover);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SelectField/SelectField.vue?vue&type=template&id=e1850d20&
var SelectFieldvue_type_template_id_e1850d20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{class:_vm.labelClass,attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{staticClass:"form-group-inner"},[_vm._t("control",[_c('select',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'select',_vm.controlAttributes,false),[_vm._t("default")],2)]),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)])],2),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"label":_vm.validFeedback}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"label":_vm.invalidFeedback,"invalid":""}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var SelectFieldvue_type_template_id_e1850d20_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/SelectField/SelectField.vue?vue&type=template&id=e1850d20&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SelectField/SelectField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








const CUSTOM_SELECT_PREFIX = 'custom-select-';
/* harmony default export */ var SelectFieldvue_type_script_lang_js_ = ({
  name: 'SelectField',
  components: {
    ActivityIndicator: Components_ActivityIndicator,
    HelpText: Components_HelpText,
    FormGroup: Components_FormGroup,
    FormLabel: Components_FormLabel,
    FormFeedback: Components_FormFeedback
  },
  mixins: [Mixins_Colorable, Mixins_MergeClasses, Mixins_FormControl],
  computed: {
    controlClass() {
      const controlClass = this.custom ? 'custom-select' : this.defaultControlClass;
      return this.plaintext ? `${controlClass}-plaintext` : controlClass;
    },

    customSelectClasses() {
      return [CUSTOM_SELECT_PREFIX.replace(/-$/, '') + (this.plaintext ? '-plaintext' : ''), this.customSelectSizeClass, this.spacing || ''].join(' ');
    }

  }
});
// CONCATENATED MODULE: ./src/Components/SelectField/SelectField.vue?vue&type=script&lang=js&
 /* harmony default export */ var SelectField_SelectFieldvue_type_script_lang_js_ = (SelectFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/SelectField/SelectField.vue?vue&type=style&index=0&lang=scss&
var SelectFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("82d2");

// CONCATENATED MODULE: ./src/Components/SelectField/SelectField.vue






/* normalize component */

var SelectField_component = normalizeComponent(
  SelectField_SelectFieldvue_type_script_lang_js_,
  SelectFieldvue_type_template_id_e1850d20_render,
  SelectFieldvue_type_template_id_e1850d20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SelectField = (SelectField_component.exports);
// CONCATENATED MODULE: ./src/Components/SelectField/index.js

/* harmony default export */ var Components_SelectField = (SelectField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SlideDeck/Slides.vue?vue&type=script&lang=js&

/* harmony default export */ var Slidesvue_type_script_lang_js_ = ({
  name: 'Slides',
  props: {
    /**
     * The active slide index or key.
     *
     * @type {String|Number}
     */
    active: {
      type: [String, Number],
      default: 0
    }
  },

  data() {
    return {
      lastSlide: null,
      currentSlide: this.active
    };
  },

  watch: {
    active(value, oldValue) {
      this.lastSlide = oldValue;
      this.currentSlide = value;
    }

  },
  methods: {
    /**
     * Get the HTML nodes from the default slots (exluding children without tags).
     *
     * @return {Array}
     */
    slides() {
      return this.$slots.default.filter((vnode, i) => {
        return !!vnode.tag;
      }).map((vnode, i) => {
        if (!vnode.key || !vnode.data && !vnode.data.key) {
          vnode.data = extend(vnode.data, {
            key: vnode.key = i
          });
        }

        return vnode;
      });
    },

    /**
     * Get a slide by index.
     *
     * @return {Array}
     */
    slide(index) {
      return this.findSlideByKey(index) || this.findSlideByIndex(index) || this.findSlideByIndex(0);
    },

    /**
     * Find a slide by a given key or return null if non found.
     *
     * @param  {Number|String} key
     * @return {VNode|null}
     */
    findSlideByKey(key) {
      return first(this.slides().filter((vnode, i) => {
        if (vnode.key === key) {
          return vnode;
        } else if (vnode.data && vnode.data.key === key) {
          return vnode;
        }

        return null;
      }));
    },

    /**
     * Find a slide by a given index or return null if non found.
     *
     * @param  {Number|String} key
     * @return {VNode|null}
     */
    findSlideByIndex(index) {
      return this.slides()[index] || null;
    },

    /**
     * Get the slide index for a give slide object or key
     *
     * @param  {Number|String} slide
     * @return {VNode|null}
     */
    getSlideIndex(slide) {
      let key = slide;

      if (slide && !isUndefined(slide.data)) {
        key = slide.data.key;
      } else if (slide && slide.key) {
        key = slide.key;
      }

      return findIndex(this.slides(), (vnode, i) => {
        if (slide === vnode) {
          return true;
        } else if (vnode.data && vnode.data.key === key) {
          return true;
        } else if (vnode.key && vnode.key === key) {
          return true;
        } else if (i === slide) {
          return true;
        }

        return false;
      });
    }

  },

  render(h) {
    return this.slide(this.currentSlide);
  }

});
// CONCATENATED MODULE: ./src/Components/SlideDeck/Slides.vue?vue&type=script&lang=js&
 /* harmony default export */ var SlideDeck_Slidesvue_type_script_lang_js_ = (Slidesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/SlideDeck/Slides.vue
var Slides_render, Slides_staticRenderFns




/* normalize component */

var Slides_component = normalizeComponent(
  SlideDeck_Slidesvue_type_script_lang_js_,
  Slides_render,
  Slides_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Slides = (Slides_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SlideDeck/SlideDeck.vue?vue&type=template&id=608aeb30&
var SlideDeckvue_type_template_id_608aeb30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-deck",class:{'slide-deck-flex': _vm.center, 'is-sliding': _vm.isSliding}},[_vm._t("top"),_c('div',{ref:"content",staticClass:"slide-deck-content",style:({width: _vm.width, height: _vm.height})},[_c('keep-alive',[_c('transition',{attrs:{"name":("slide-" + _vm.direction)},on:{"after-enter":_vm.onSlideAfterEnter,"before-enter":_vm.onSlideBeforeEnter,"enter":_vm.onSlideEnter,"after-leave":_vm.onSlideAfterLeave,"before-leave":_vm.onSlideBeforeLeave,"leave":_vm.onSlideLeave}},[_c('slides',{key:_vm.currentSlide,ref:"slides",attrs:{"active":_vm.currentSlide}},[_vm._t("default")],2)],1)],1)],1),_vm._t("middle"),_vm._t("controls",[(_vm.controls)?_c('slide-deck-controls',{ref:"controls",attrs:{"slides":_vm.slides(),"active":_vm.currentSlide},on:{"click":_vm.onClickControl}}):_vm._e()],{"slides":_vm.slides(),"active":_vm.currentSlide}),_vm._t("bottom")],2)}
var SlideDeckvue_type_template_id_608aeb30_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/SlideDeck/SlideDeck.vue?vue&type=template&id=608aeb30&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SlideDeck/SlideDeckControls.vue?vue&type=template&id=60760168&
var SlideDeckControlsvue_type_template_id_60760168_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-deck-controls"},_vm._l((_vm.slides),function(slide,i){return _c('a',{key:i,staticClass:"slide-deck-control-icon",class:{'is-active': (slide.data ? slide.data.key : slide.key) === _vm.active},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.onClick($event, slide)}}},[_c('font-awesome-icon',{attrs:{"icon":"circle"}})],1)}),0)}
var SlideDeckControlsvue_type_template_id_60760168_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/SlideDeck/SlideDeckControls.vue?vue&type=template&id=60760168&

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faCircle.js
var faCircle = __webpack_require__("4c54");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SlideDeck/SlideDeckControls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



index_es["c" /* library */].add(faCircle["faCircle"]);
/* harmony default export */ var SlideDeckControlsvue_type_script_lang_js_ = ({
  name: 'SlideDeckControls',
  components: {
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  props: {
    /**
     * The slide key or index that should show.
     *
     * @type {Number}
     */
    active: {
      type: [String, Number],
      default: 0
    },

    /**
     * An array of slide vnodes
     *
     * @type {Number}
     */
    slides: {
      type: Array,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: {},
  methods: {
    onClick(event, slide) {
      this.$emit('click', event, slide);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/SlideDeck/SlideDeckControls.vue?vue&type=script&lang=js&
 /* harmony default export */ var SlideDeck_SlideDeckControlsvue_type_script_lang_js_ = (SlideDeckControlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/SlideDeck/SlideDeckControls.vue?vue&type=style&index=0&lang=scss&
var SlideDeckControlsvue_type_style_index_0_lang_scss_ = __webpack_require__("7c1d");

// CONCATENATED MODULE: ./src/Components/SlideDeck/SlideDeckControls.vue






/* normalize component */

var SlideDeckControls_component = normalizeComponent(
  SlideDeck_SlideDeckControlsvue_type_script_lang_js_,
  SlideDeckControlsvue_type_template_id_60760168_render,
  SlideDeckControlsvue_type_template_id_60760168_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SlideDeckControls = (SlideDeckControls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SlideDeck/SlideDeck.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SlideDeckvue_type_script_lang_js_ = ({
  name: 'SlideDeck',
  components: {
    Slides: Slides,
    SlideDeckControls: SlideDeckControls
  },
  props: {
    /**
     * The slide key or index that should show.
     *
     * @type {Number}
     */
    active: {
      type: [String, Number],
      default: 0
    },

    /**
     * Center the slide-deck.
     *
     * @type Boolean
     */
    center: {
      type: Boolean,
      default: true
    },

    /**
     * Show the slide-deck controls to change the slide.
     *
     * @type Boolean
     */
    controls: Boolean,

    /**
     * Flex the content within the popover.
     *
     * @type Boolean
     */
    flex: {
      type: Boolean,
      default: true
    },

    /**
     * Give a selector or Element to use apply a hidden overflow. If false,
     * no overflow will be applied. Defaults to the slide deck's container.
     *
     * @type {String|Element|Boolean}
     */
    overflow: {
      type: [Object, String, Element, Boolean],
      default: true
    },

    /**
     * The mode determines how the popover content will flex based on the
     * varying heights of the slides.
     *
     * @type Boolean
     */
    resizeMode: {
      type: [Function, Boolean, String],
      default: 'auto',

      validate(value) {
        return ['auto', 'initial', 'inherit'].indexOf(value) !== 1;
      }

    }
  },

  data() {
    return {
      height: null,
      width: null,
      lastSlide: null,
      isSliding: false,
      currentSlide: this.active,
      direction: 'forward'
    };
  },

  computed: {
    overflowElement() {
      if (this.overflow === true) {
        return this.$el;
      } else if (this.overflow instanceof Element) {
        return this.overflow;
      } else if (this.overflow && this.overflow.elm) {
        return this.overflow.elm;
      } else if (this.overflow) {
        return document.querySelector(this.overflow);
      }

      return null;
    },

    nodes() {
      return this.$slots.default;
    }

  },
  watch: {
    active(value, oldValue) {
      this.lastSlide = oldValue;
      this.currentSlide = value;
    },

    isSliding(value) {
      if (this.overflowElement) {
        this.overflowElement.style.overflow = value ? 'hidden' : 'inherit';
      }
    },

    currentSlide(value, oldValue) {
      this.direction = this.$refs.slides.getSlideIndex(oldValue) > this.$refs.slides.getSlideIndex(value) ? 'backward' : 'forward';
    }

  },
  methods: {
    resize(el) {
      if (isFunction(this.resizeMode)) {
        this.resizeMode(el || this.$el);
      } else {
        const style = getComputedStyle(el);

        if (!el.style.width) {
          el.width = el.style.width = `calc(${style.width} + ${style.marginLeft} + ${style.marginRight})`;
        }

        if (!el.style.height) {
          el.height = el.style.height = `calc(${style.height} + ${style.marginTop} + ${style.marginBottom})`;
        }
      }
    },

    slides() {
      return this.$refs.slides ? this.$refs.slides.slides() : [];
    },

    slide(index) {
      return this.$refs.slides ? this.$refs.slides.slide(index || this.active) : null;
    },

    onClickControl(event, vnode) {
      this.currentSlide = vnode.data ? vnode.data.key : vnode.key;
    },

    onSlideAfterEnter(el) {
      if (el.width) {
        el.width = el.style.width = null;
      }

      if (el.height) {
        el.height = el.style.height = null;
      }

      this.width = null;
      this.height = null;

      if (this.$refs.slides) {
        this.$emit('after-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide));
      }
    },

    onSlideBeforeEnter(el) {
      this.isSliding = true;

      if (this.$refs.slides) {
        this.$emit('before-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide));
      }
    },

    onSlideEnter(el, done) {
      this.resize(el);
      this.width = el.style.width;
      this.height = el.style.height;
      Transition(el).then(delay => {
        this.isSliding = false;
        this.$nextTick(done);
      });

      if (this.$refs.slides) {
        this.$emit('enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide));
      }
    },

    onSlideAfterLeave(el) {
      if (el.width) {
        el.width = el.style.width = null;
      }

      if (el.height) {
        el.height = el.style.height = null;
      }

      this.$nextTick(() => {
        if (this.$refs.slides) {
          this.$emit('after-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide));
        }
      });
    },

    onSlideBeforeLeave(el) {
      this.resize(el);

      if (this.$refs.slides) {
        this.$emit('before-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide));
      }
    },

    onSlideLeave(el, done) {
      Transition(el).then(delay => {
        this.$nextTick(done);
      });

      if (this.$refs.slides) {
        this.$emit('leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide));
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/SlideDeck/SlideDeck.vue?vue&type=script&lang=js&
 /* harmony default export */ var SlideDeck_SlideDeckvue_type_script_lang_js_ = (SlideDeckvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/SlideDeck/SlideDeck.vue?vue&type=style&index=0&lang=scss&
var SlideDeckvue_type_style_index_0_lang_scss_ = __webpack_require__("d530");

// CONCATENATED MODULE: ./src/Components/SlideDeck/SlideDeck.vue






/* normalize component */

var SlideDeck_component = normalizeComponent(
  SlideDeck_SlideDeckvue_type_script_lang_js_,
  SlideDeckvue_type_template_id_608aeb30_render,
  SlideDeckvue_type_template_id_608aeb30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SlideDeck = (SlideDeck_component.exports);
// CONCATENATED MODULE: ./src/Components/SlideDeck/index.js




/* harmony default export */ var Components_SlideDeck = (SlideDeck);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SliderField/SliderField.vue?vue&type=template&id=37a0e632&
var SliderFieldvue_type_template_id_37a0e632_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{class:_vm.labelClass,attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{class:_vm.controlClasses},[_c('div',{staticClass:"slider-rail"},[_c('div',{staticClass:"slider-rail-active"})]),_c('div',{directives:[{name:"drag-handle",rawName:"v-drag-handle"}],staticClass:"slider-handle slider-min-value",attrs:{"tabindex":"0"}}),_c('div',{directives:[{name:"drag-handle",rawName:"v-drag-handle"}],staticClass:"slider-handle slider-max-value",attrs:{"tabindex":"0"}}),_c('div',{directives:[{name:"drag-handle",rawName:"v-drag-handle"}],staticClass:"slider-handle slider-value",attrs:{"tabindex":"0"}})]),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var SliderFieldvue_type_template_id_37a0e632_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/SliderField/SliderField.vue?vue&type=template&id=37a0e632&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/SliderField/SliderField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SliderFieldvue_type_script_lang_js_ = ({
  name: 'SliderField',
  components: {
    HelpText: Components_HelpText,
    FormGroup: Components_FormGroup,
    FormLabel: Components_FormLabel,
    FormFeedback: Components_FormFeedback
  },
  directives: {
    dragHandle: {
      inserted(el, binding, vnode) {
        let initialX;
        let initialY;
        let currentX;
        let currentY;
        let isDragging = false;

        const isTouch = e => {
          return e.type.match(/^touch/);
        };

        const clientX = e => {
          return isTouch(e) ? e.touches[0].clientX : e.clientX;
        };

        const clientY = e => {
          return isTouch(e) ? e.touches[0].clientX : e.clientX;
        };

        const dragStart = e => {
          if (e.target === el) {
            isDragging = true;
            initialX = clientX(e);
            initialY = clientY(e);
          }
        };

        const dragEnd = e => {
          isDragging = false;
        };

        const drag = e => {
          if (isDragging) {
            currentX = clientX(e);
            console.log(currentX);
            el.style.transform = `translateX(${currentX - initialX}px)`;
          }
        };

        window.addEventListener('touchstart', dragStart, false);
        window.addEventListener('touchend', dragEnd, false);
        window.addEventListener('touchmove', drag, false);
        window.addEventListener('mousedown', dragStart, false);
        window.addEventListener('mouseup', dragEnd, false);
        window.addEventListener('mousemove', drag, false);
      }

    }
  },
  mixins: [Mixins_FormControl],
  props: {
    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'form-control slider-field'
    }
  }
});
// CONCATENATED MODULE: ./src/Components/SliderField/SliderField.vue?vue&type=script&lang=js&
 /* harmony default export */ var SliderField_SliderFieldvue_type_script_lang_js_ = (SliderFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/SliderField/SliderField.vue?vue&type=style&index=0&lang=scss&
var SliderFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("09d5");

// CONCATENATED MODULE: ./src/Components/SliderField/SliderField.vue






/* normalize component */

var SliderField_component = normalizeComponent(
  SliderField_SliderFieldvue_type_script_lang_js_,
  SliderFieldvue_type_template_id_37a0e632_render,
  SliderFieldvue_type_template_id_37a0e632_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SliderField = (SliderField_component.exports);
// CONCATENATED MODULE: ./src/Components/SliderField/index.js


/* harmony default export */ var Components_SliderField = (SliderField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TableView/Table.vue?vue&type=template&id=6fab6e74&
var Tablevue_type_template_id_6fab6e74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table",class:{'table-hover': _vm.hover && !_vm.loading && _vm.data.length}},[_c('thead',{attrs:{"slot":"thead"},slot:"thead"},[(_vm.columns.length || _vm.$slots.columns)?_c('tr',{attrs:{"slot":"columns"},slot:"columns"},_vm._l((_vm.tableColumns),function(column,key){return _c('table-view-header',_vm._g(_vm._b({key:key,attrs:{"request":_vm.request},on:{"order":function (id) { return _vm.$emit('order', id); }}},'table-view-header',column.props || column,false),column.events))}),1):_vm._e()]),_c('tbody',[(_vm.loading)?_c('tr',[_c('td',{staticClass:"position-relative",style:({'height': _vm.height(_vm.minHeight)}),attrs:{"colspan":_vm.tableColumns.length}},[_c('activity-indicator',{attrs:{"center":true}})],1)]):(!_vm.data.length)?_c('tr',[_c('td',{staticClass:"position-relative",attrs:{"colspan":_vm.tableColumns.length}},[_c('alert',{staticClass:"my-3",attrs:{"variant":"warning"}},[_c('font-awesome-icon',{attrs:{"icon":"exclamation-triangle"}}),_vm._v(" There are no results found.\n                ")],1)],1)]):_vm._t("default",_vm._l((_vm.data),function(row,x){return _c('tr',{key:x},_vm._l((_vm.tableColumns),function(column,y){return _c('td',{key:y,domProps:{"innerHTML":_vm._s(row[column.id] || row[column.name])}})}),0)}),{"data":_vm.data,"columns":_vm.tableColumns})],2),_vm._t("tfoot",[(_vm.paginate && _vm.response)?_c('tfoot',[_c('td',{staticClass:"table-view-footer",attrs:{"colspan":_vm.tableColumns.length || 1}},[_vm._t("pagination",[_c('pagination',{attrs:{"align":"center","page":_vm.response.current_page,"total-pages":_vm.response.last_page},on:{"paginate":function (page, event) { return _vm.$emit('paginate', page, event); }}})])],2)]):_vm._e()])],2)}
var Tablevue_type_template_id_6fab6e74_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/TableView/Table.vue?vue&type=template&id=6fab6e74&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TableView/TableViewHeader.vue?vue&type=template&id=4ea8d7e8&
var TableViewHeadervue_type_template_id_4ea8d7e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{attrs:{"scope":"col"}},[(_vm.id && _vm.request)?[_c('a',{staticClass:"sort",attrs:{"href":"#","data-id":_vm.id},on:{"click":function($event){$event.preventDefault();return _vm.$emit('order', _vm.id)}}},[(!_vm.$slots.default)?[_vm._v("\n                "+_vm._s(_vm.label || _vm.name || _vm.id)+"\n            ")]:_vm._e(),_vm._t("default")],2),(_vm.request.params.order === _vm.id && _vm.request.params.sort === 'asc')?_c('font-awesome-icon',{staticClass:"sort-icon",attrs:{"icon":"sort-up"}}):_vm._e(),(_vm.request.params.order === _vm.id && _vm.request.params.sort === 'desc')?_c('font-awesome-icon',{staticClass:"sort-icon",attrs:{"icon":"sort-down"}}):_vm._e()]:[(!_vm.$slots.default)?[_vm._v("\n            "+_vm._s(_vm.label || _vm.name || _vm.id)+"\n        ")]:_vm._e(),_vm._t("default")]],2)}
var TableViewHeadervue_type_template_id_4ea8d7e8_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/TableView/TableViewHeader.vue?vue&type=template&id=4ea8d7e8&

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faSortUp.js
var faSortUp = __webpack_require__("d523");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faSortDown.js
var faSortDown = __webpack_require__("9cb7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TableView/TableViewHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




index_es["c" /* library */].add(faSortUp["faSortUp"]);
index_es["c" /* library */].add(faSortDown["faSortDown"]);
/* harmony default export */ var TableViewHeadervue_type_script_lang_js_ = ({
  name: 'TableViewHeader',
  components: {
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  props: {
    id: [Number, String],
    label: [Number, String],
    name: [Number, String],
    request: Object
  }
});
// CONCATENATED MODULE: ./src/Components/TableView/TableViewHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var TableView_TableViewHeadervue_type_script_lang_js_ = (TableViewHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/TableView/TableViewHeader.vue





/* normalize component */

var TableViewHeader_component = normalizeComponent(
  TableView_TableViewHeadervue_type_script_lang_js_,
  TableViewHeadervue_type_template_id_4ea8d7e8_render,
  TableViewHeadervue_type_template_id_4ea8d7e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableViewHeader = (TableViewHeader_component.exports);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faExclamationTriangle.js
var faExclamationTriangle = __webpack_require__("8560");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TableView/Table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









index_es["c" /* library */].add(faExclamationTriangle["faExclamationTriangle"]);
/* harmony default export */ var Tablevue_type_script_lang_js_ = ({
  components: {
    Alert: Components_Alert,
    Pagination: Components_Pagination,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    TableViewHeader: TableViewHeader,
    ActivityIndicator: Components_ActivityIndicator
  },
  props: {
    // (array) An array of table column
    // [{id: 'database_id', name: 'Database id', width: '20%'}]
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    data: {
      type: Array,
      required: true
    },
    // (string) Add table-hover to the table element
    hover: {
      type: Boolean,
      default: true
    },
    loading: Boolean,
    // (integer) The minimum height of the row when loading data
    minHeight: {
      type: Number,
      default: 400
    },
    // (bool) Should show the pagination for this table
    paginate: {
      type: Boolean,
      default: true
    },
    // (bool) The HTTP request
    request: Object,
    // (bool) The HTTP request
    response: Object
  },
  computed: {
    tableColumns() {
      let columns = this.columns;

      if (!columns || !columns.length) {
        columns = Object.keys(this.data[0]);
      }

      return columns.filter(value => !!value).map(column => {
        return isObject(column) ? column : {
          name: column
        };
      });
    }

  },
  methods: {
    height(min) {
      const elements = [this.$el.querySelector('tbody')];
      let height = 0;
      each(elements, el => {
        height += el.getBoundingClientRect().height;
      });
      return unit(Math.max(min, height));
    }

  }
});
// CONCATENATED MODULE: ./src/Components/TableView/Table.vue?vue&type=script&lang=js&
 /* harmony default export */ var TableView_Tablevue_type_script_lang_js_ = (Tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/TableView/Table.vue





/* normalize component */

var Table_component = normalizeComponent(
  TableView_Tablevue_type_script_lang_js_,
  Tablevue_type_template_id_6fab6e74_render,
  Tablevue_type_template_id_6fab6e74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Table = (Table_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TableView/TableView.vue?vue&type=template&id=67341068&
var TableViewvue_type_template_id_67341068_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-view"},[(_vm.heading || _vm.description || _vm.$slots.buttons)?_c('div',{staticClass:"d-flex justify-content-between align-items-center"},[_vm._t("heading",[(_vm.heading)?_c('h2',{staticClass:"font-weight-light mb-3"},[_vm._v(_vm._s(_vm.heading))]):_vm._e()]),_vm._t("description",[(_vm.description)?_c('p',{domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e()]),(_vm.$slots.buttons)?_c('div',{staticClass:"ml-auto"},[_vm._t("buttons")],2):_vm._e()],2):_vm._e(),(_vm.card)?_c('card',[_c('base-table',{attrs:{"request":_vm.request,"response":_vm.response,"columns":_vm.columns,"data":_vm.data,"hover":_vm.hover,"loading":_vm.loading,"min-height":_vm.minHeight,"paginate":_vm.paginate},on:{"paginate":_vm.onPaginate,"order":function (id) { return _vm.orderBy(id); }}},[_vm._t("default",null,{"data":_vm.data,"columns":_vm.columns})],2)],1):_c('base-table',{attrs:{"request":_vm.request,"response":_vm.response,"columns":_vm.columns,"data":_vm.data,"hover":_vm.hover,"loading":_vm.loading,"min-height":_vm.minHeight,"paginate":_vm.paginate},on:{"paginate":_vm.onPaginate,"order":function (id) { return _vm.orderBy(id); }}},[_vm._t("default",null,{"data":_vm.data,"columns":_vm.columns})],2)],1)}
var TableViewvue_type_template_id_67341068_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/TableView/TableView.vue?vue&type=template&id=67341068&

// CONCATENATED MODULE: ./src/Mixins/Proxy/index.js

/* harmony default export */ var Mixins_Proxy = (Proxy);
// CONCATENATED MODULE: ./src/Http/Transformer/Transformer.js

class Transformer_Transformer {
  /**
   * Initialize the transformer instance using an HTTP response object.
   *
   * @param data object
   * @return void
   */
  constructor(response) {
    if (!isObject(this.$originalResponse = response)) {
      throw new Error('The transformer must be instantiated with a response object.');
    }

    if (!isArray(this.$required = this.required()) || !this.$required.length) {
      throw new Error('A transformer must have at least one required property.');
    }

    this.$transformedResponse = this.transform(response);
    this.validate();
    this.initialize();
  }
  /**
   * A method to override to perform logic to finished initializing.
   *
   * @return void
   */


  initialize() {} //

  /**
   * Define an array of required properties with at least one value.
   *
   * @return void
   */


  required() {} //

  /**
   * Tranform the Response object
   *
   * @property String
   */


  transform(response) {
    return response.data;
  }
  /**
   * Get the tranformed response
   *
   * @property String
   */


  response() {
    return this.$transformedResponse;
  }
  /**
   * Validate the tranformed response.
   *
   * @return void
   */


  validate() {
    if (!isObject(this.$transformedResponse)) {
      throw new Error('The transformed response must be an object.');
    }

    each(this.$required, key => {
      if (!(key in this.$transformedResponse)) {
        throw new Error(`"${key}" is a required property and does not exist in the tranformed response.`);
      }
    });
  }

}
// CONCATENATED MODULE: ./src/Http/Transformer/index.js

/* harmony default export */ var Http_Transformer = (Transformer_Transformer);
// CONCATENATED MODULE: ./src/Http/TableViewTransformer/TableViewTransformer.js


class TableViewTransformer_TableViewTransformer extends Http_Transformer {
  required() {
    return [// The end of the count of the paginated list.
    'to', // The start of the count of the paginated list.
    'from', // The total number of items (not just included in the pagination)
    'total', // The number of items per page
    'per_page', // The last page number (or total pages)
    'last_page', // The current page number
    'current_page', // The actual response data to appear in the table
    'data'];
  }

  data() {
    return this.$transformedResponse.data;
  }

  initialize() {
    if (!isArray(this.data())) {
      throw new Error('The data property must be an array.');
    }
  }

}
// CONCATENATED MODULE: ./src/Http/TableViewTransformer/index.js

/* harmony default export */ var Http_TableViewTransformer = (TableViewTransformer_TableViewTransformer);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TableView/TableView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var TableViewvue_type_script_lang_js_ = ({
  name: 'TableView',
  components: {
    Card: Components_Card,
    BaseTable: Table
  },
  mixins: [Mixins_Proxy],
  props: {
    // (boolean) Show the table in a card.
    card: Boolean,
    // (string) A relative or absolute endpoint URL used to fetch data
    url: {
      type: String,
      required: true
    },
    // (integer) The starting page of the table
    page: {
      type: Number,
      default: 1
    },
    // (integer) The total number of results per page
    limit: {
      type: Number,
      default: 20
    },
    // (string) The column used to order the data
    order: String,
    // (string) The sort direction (asc|desc)
    sort: {
      type: String,
      validate: value => {
        return ['asc', 'desc'].indexOf(value) !== -1;
      }
    },
    // (integer) The minimum height of the row when loading data
    minHeight: {
      type: Number,
      default: 400
    },
    // (array) An array of button objects
    // [{href: 'test-123', label: 'Test 123'}]
    buttons: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // (array) An array of table column
    // [{id: 'database_id', name: 'Database id', width: '20%'}]
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // (string) The table heading
    heading: String,
    // (string) The default sort value
    defaultSort: {
      type: String,
      default: 'desc'
    },
    // (string) The HTTP method used to send the request.
    method: {
      type: String,
      default: 'get',

      validate(value) {
        return ['get', 'post', 'put', 'delete'].indexOf(value) !== -1;
      }

    },
    // (string) Add table-hover to the table element
    hover: {
      type: Boolean,
      default: true
    },
    // (string) The table description
    description: String,
    // (bool) Should show the pagination for this table
    paginate: {
      type: Boolean,
      default: true
    },
    // (object) The HTTP response transformer instance
    transformer: {
      type: Object,
      validate: value => {
        return value instanceof Http_TableViewTransformer;
      }
    },
    // (bool) The request headers
    headers: {
      type: Object,

      default() {
        return {};
      }

    },
    // (bool) The request URL parameters
    params: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  data() {
    return {
      // (array) The dataset for the table
      data: this.$attrs.data || [],
      // (bool) Is the table currently loading data
      loading: false,
      // (null|object) The response object
      response: null,
      // (object) The HTTP request object
      request: {
        headers: Object.assign({}, this.headers),
        params: Object.assign({
          page: this.page,
          limit: this.limit,
          order: this.order,
          sort: this.sort
        }, this.params)
      }
    };
  },

  mounted() {
    this.fetch();
  },

  beforeDestroy() {
    this.$off();
  },

  methods: {
    orderBy(order) {
      const currentSort = this.getRequestParam('sort');
      const currentOrder = this.getRequestParam('order');
      this.setRequestParam('order', order);
      this.setRequestParam('sort', currentOrder !== order || !currentSort ? this.defaultSort : currentSort === this.defaultSort ? 'asc' : null);
      this.fetch();
    },

    getRequestHeader(key, defaultValue) {
      return this.request.headers[key] || defaultValue;
    },

    setRequestHeader(key, value) {
      this.request.headers = Object.assign(this.request.headers, {
        [key]: value
      });
    },

    setRequestHeaders(value) {
      Object.assign(this.request.headers, value);
    },

    getRequestParam(key, defaultValue) {
      return this.request.params[key] || defaultValue;
    },

    getRequestParams() {
      return this.request.params;
    },

    setRequestParam(key, value) {
      this.request.params = Object.assign(this.request.params, {
        [key]: value
      });
    },

    setRequestParams(value) {
      Object.assign(this.request.params, value);
    },

    getRequestData(key, defaultValue) {
      return this.request.data[key] || defaultValue;
    },

    setRequestData(key, value) {
      if (value === undefined) {
        this.request.data = Object.assign(this.request.data, {
          [key]: value
        });
      } else {
        Object.assign(this.request.data, value);
      }
    },

    fetch(page = 1, params = {}) {
      this.setRequestParams(params);
      this.setRequestParam('page', page);
      this.loading = true;
      this.$emit('fetch');
      return Http_Request[this.method](this.url, this.request).then(response => {
        const transformer = this.transformer || new Http_TableViewTransformer(response);
        this.loading = false;
        this.data = transformer.data();
        this.response = transformer.response();
        this.$emit('fetch-success', response, this.request);
        this.$emit('fetch-complete', true, response, this.request);
      }, error => {
        this.loading = false;
        this.$emit('fetch-failed', error, this.request);
        this.$emit('fetch-complete', false, error, this.request);
      });
    },

    onPaginate(page) {
      this.fetch(page);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/TableView/TableView.vue?vue&type=script&lang=js&
 /* harmony default export */ var TableView_TableViewvue_type_script_lang_js_ = (TableViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/TableView/TableView.vue?vue&type=style&index=0&lang=scss&
var TableViewvue_type_style_index_0_lang_scss_ = __webpack_require__("5030");

// CONCATENATED MODULE: ./src/Components/TableView/TableView.vue






/* normalize component */

var TableView_component = normalizeComponent(
  TableView_TableViewvue_type_script_lang_js_,
  TableViewvue_type_template_id_67341068_render,
  TableViewvue_type_template_id_67341068_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableView = (TableView_component.exports);
// CONCATENATED MODULE: ./src/Components/TableView/index.js




/* harmony default export */ var Components_TableView = (TableView);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TextareaField/TextareaField.vue?vue&type=template&id=1bcc50b0&
var TextareaFieldvue_type_template_id_1bcc50b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{ref:"label",class:_vm.labelClass,attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_vm._t("control",[_c('div',{staticClass:"position-relative"},[_c('textarea',_vm._b({directives:[{name:"autogrow",rawName:"v-autogrow",value:(_vm.autogrow),expression:"autogrow"},{name:"bind-events",rawName:"v-bind-events"}],ref:"field",domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'textarea',_vm.controlAttributes,false)),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)]),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var TextareaFieldvue_type_template_id_1bcc50b0_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/TextareaField/TextareaField.vue?vue&type=template&id=1bcc50b0&

// CONCATENATED MODULE: ./src/Directives/Autogrow/Autogrow.js
const STYLE_ATTRIBUTES = ['font', 'fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontVariantCaps', 'fontVariantNumeric', 'fontVariantEastAsian', 'fontWeight', 'lineHeight', 'letterSpacing', 'padding', 'margin', 'textAlign', 'textAlignLast', 'textDecoration', 'textDecorationLine', 'textDecorationStyle', 'textDecorationColor', 'textDecorationSkipInk', 'textDecorationPosition', 'textIndent', 'textRendering', 'textShadow', 'textSizeAdjust', 'textOverflow', 'textTransform', 'width', 'wordBreak', 'wordSpacing', 'wordWrap'];

function Autogrow_escape(html) {
  const el = document.createElement('textarea');
  el.textContent = html;
  return el.innerHTML;
}

function Autogrow_unescape(html) {
  const el = document.createElement('textarea');
  el.innerHTML = html;
  return el.textContent;
}

function Autogrow_int(str) {
  if (typeof str === 'number') {
    return str;
  } else if (!str || !str.replace) {
    return 0;
  }

  return parseInt(str.replace(/[^\d.]+/g, '')) || 0;
}

function Autogrow_input(div, el, minHeight, maxHeight) {
  div.innerHTML = Autogrow_escape(el.value).replace(/(?:\r\n|\r|\n)/g, '<br />') + '&nbsp;';
  let dynamicHeight = Math.max(minHeight, Autogrow_height(div));

  if (div.innerHTML.match(/(<br\s?\/?\>)+/)) {
    dynamicHeight += Autogrow_int(style(el, 'lineHeight'));
  }

  el.style.height = (!maxHeight || dynamicHeight < maxHeight ? dynamicHeight : maxHeight) + 'px';
}

function Autogrow_height(el) {
  return Autogrow_int(style(el, 'height'));
}

function style(el, attr) {
  return window.getComputedStyle(el)[attr];
}

function mimic(el, minHeight) {
  const div = document.createElement('div');
  const styles = window.getComputedStyle(el);
  div.style.position = 'absolute';
  div.style.zIndex = -1;
  div.style.visibility = 'hidden'; // div.style.minHeight = `${minHeight}px`;

  el.parentNode.insertBefore(div, el.nextSibling);
  STYLE_ATTRIBUTES.forEach(key => div.style[key] = styles[key]);
  return div;
}

function init(el, binding, vnode) {
  const minHeight = Autogrow_height(el);
  const div = mimic(el, minHeight);
  const maxHeight = binding.value !== true ? binding.value : 0;
  el.addEventListener('input', event => {
    Autogrow_input(div, event.target, minHeight, maxHeight);
  });
  Autogrow_input(div, el, minHeight, maxHeight);
  return;
}

/* harmony default export */ var Autogrow = ({
  inserted(el, binding, vnode) {
    const elm = el;

    if (binding.value === false) {
      return;
    }

    if (el.tagName !== 'TEXTAREA') {
      el = el.querySelector('textarea');
    }

    if (!el) {
      throw new Error('A textarea is required for the v-autogrow directive.');
    }

    init(el, binding, vnode);

    el.resize = function () {
      vnode.context.$nextTick(() => {
        el.dispatchEvent(new Event('input'));
      });
    };
  }

});
// CONCATENATED MODULE: ./src/Directives/Autogrow/index.js

/* harmony default export */ var Directives_Autogrow = (Autogrow);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/TextareaField/TextareaField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var TextareaFieldvue_type_script_lang_js_ = ({
  name: 'TextareaField',
  components: {
    HelpText: Components_HelpText,
    FormGroup: Components_FormGroup,
    FormLabel: Components_FormLabel,
    FormFeedback: Components_FormFeedback
  },
  directives: {
    autogrow: Directives_Autogrow
  },
  mixins: [Mixins_Colorable, Mixins_FormControl, Mixins_MergeClasses],
  props: {
    /**
     * The autogrow attribute
     *
     * @property Boolean
     */
    autogrow: [Number, String, Boolean]
  }
});
// CONCATENATED MODULE: ./src/Components/TextareaField/TextareaField.vue?vue&type=script&lang=js&
 /* harmony default export */ var TextareaField_TextareaFieldvue_type_script_lang_js_ = (TextareaFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/TextareaField/TextareaField.vue





/* normalize component */

var TextareaField_component = normalizeComponent(
  TextareaField_TextareaFieldvue_type_script_lang_js_,
  TextareaFieldvue_type_template_id_1bcc50b0_render,
  TextareaFieldvue_type_template_id_1bcc50b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextareaField = (TextareaField_component.exports);
// CONCATENATED MODULE: ./src/Components/TextareaField/index.js

/* harmony default export */ var Components_TextareaField = (TextareaField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ThumbnailList/ThumbnailList.vue?vue&type=template&id=6f75b008&
var ThumbnailListvue_type_template_id_6f75b008_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thumbnail-list",class:_vm.classes},[(!!_vm.images)?_vm._l((_vm.images),function(image){return _c('thumbnail-list-item',{key:image,attrs:{"src":image,"width":_vm.width}})}):_vm._e(),_vm._t("default")],2)}
var ThumbnailListvue_type_template_id_6f75b008_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ThumbnailList/ThumbnailList.vue?vue&type=template&id=6f75b008&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ThumbnailList/ThumbnailListItem.vue?vue&type=template&id=0121b974&
var ThumbnailListItemvue_type_template_id_0121b974_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"thumbnail-list-item",style:(_vm.style),attrs:{"href":_vm.src || '#'},on:{"click":_vm.onClick}},[(_vm.src)?_c('img',{class:{'img-fluid': _vm.fluid},attrs:{"src":_vm.src,"alt":_vm.alt}}):_vm._e(),_vm._t("default")],2)}
var ThumbnailListItemvue_type_template_id_0121b974_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ThumbnailList/ThumbnailListItem.vue?vue&type=template&id=0121b974&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ThumbnailList/ThumbnailListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var ThumbnailListItemvue_type_script_lang_js_ = ({
  props: {
    alt: String,
    src: String,
    width: [String, Number],
    minWidth: [String, Number],
    maxWidth: [String, Number],
    height: [String, Number],
    minHeight: [String, Number],
    maxHeight: [String, Number],
    fluid: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style() {
      return {
        height: unit(this.height),
        width: unit(this.width),
        minHeight: unit(this.minHeight),
        maxHeight: unit(this.maxHeight),
        minWidth: unit(this.minWidth),
        maxWidth: unit(this.maxWidth)
      };
    }

  },
  methods: {
    onClick(event) {
      if (this.preventDefault) {
        event.preventDefault();
      }

      this.$emit('click', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/ThumbnailList/ThumbnailListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var ThumbnailList_ThumbnailListItemvue_type_script_lang_js_ = (ThumbnailListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/ThumbnailList/ThumbnailListItem.vue?vue&type=style&index=0&lang=scss&
var ThumbnailListItemvue_type_style_index_0_lang_scss_ = __webpack_require__("c3a2");

// CONCATENATED MODULE: ./src/Components/ThumbnailList/ThumbnailListItem.vue






/* normalize component */

var ThumbnailListItem_component = normalizeComponent(
  ThumbnailList_ThumbnailListItemvue_type_script_lang_js_,
  ThumbnailListItemvue_type_template_id_0121b974_render,
  ThumbnailListItemvue_type_template_id_0121b974_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThumbnailListItem = (ThumbnailListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ThumbnailList/ThumbnailList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ThumbnailListvue_type_script_lang_js_ = ({
  components: {
    ThumbnailListItem: ThumbnailListItem
  },
  props: {
    fill: Boolean,
    flex: Boolean,
    noFlex: Boolean,
    grid: Boolean,
    wrap: Boolean,
    images: Array,
    width: {
      type: [String, Number],
      default: 75
    }
  },
  computed: {
    classes() {
      return {
        'thumbnail-list-fill': this.fill,
        'thumbnail-list-flex': this.flex,
        'thumbnail-list-noflex': this.noFlex,
        'thumbnail-list-grid': this.grid,
        'thumbnail-list-wrap': this.wrap
      };
    }

  }
});
// CONCATENATED MODULE: ./src/Components/ThumbnailList/ThumbnailList.vue?vue&type=script&lang=js&
 /* harmony default export */ var ThumbnailList_ThumbnailListvue_type_script_lang_js_ = (ThumbnailListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/ThumbnailList/ThumbnailList.vue?vue&type=style&index=0&lang=scss&
var ThumbnailListvue_type_style_index_0_lang_scss_ = __webpack_require__("c029");

// CONCATENATED MODULE: ./src/Components/ThumbnailList/ThumbnailList.vue






/* normalize component */

var ThumbnailList_component = normalizeComponent(
  ThumbnailList_ThumbnailListvue_type_script_lang_js_,
  ThumbnailListvue_type_template_id_6f75b008_render,
  ThumbnailListvue_type_template_id_6f75b008_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThumbnailList = (ThumbnailList_component.exports);
// CONCATENATED MODULE: ./src/Components/ThumbnailList/index.js



/* harmony default export */ var Components_ThumbnailList = (ThumbnailList);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/UploadField/UploadField.vue?vue&type=template&id=c1fc9a9a&
var UploadFieldvue_type_template_id_c1fc9a9a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.mergeClasses(_vm.formGroupClasses, {'is-dragging': _vm.isDragging, 'enable-dropzone': _vm.dropzone, 'enable-multiple': _vm.multiple}),attrs:{"group":_vm.group}},[_c('dropzone',{on:{"drop":_vm.onDrop,"dragover":_vm.onDragOver,"dragenter":_vm.onDragEnter,"dragleave":_vm.onDragLeave}},[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{ref:"label",class:_vm.labelClass,attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),(_vm.multiple && (!_vm.maxUploads || _vm.maxUploads > _vm.value.length) || !_vm.multiple && !_vm.value)?_c('file-field',_vm._b({ref:"field",attrs:{"help-text":_vm.helpText,"value":_vm.value},on:{"change":_vm.onChange}},'file-field',_vm.controlAttributes,false)):_vm._e(),(_vm.files && _vm.files.length)?_c('thumbnail-list',{staticClass:"mt-4",attrs:{"wrap":""}},_vm._l((_vm.files),function(file,key){return _c('thumbnail-list-item',{key:file.lastModified + '-' + file.lastModifiedDate + '-' + file.size + '-' + file.type + '-' + file.name,class:{'uploading': !!_vm.progressBars[key]},attrs:{"width":_vm.width,"min-width":_vm.minWidth,"max-width":_vm.maxWidth,"height":_vm.height,"min-height":_vm.minHeight,"max-height":_vm.maxHeight}},[_c('file-preview',{attrs:{"file":file,"progress":_vm.progressBars[key] || 0},on:{"loaded":_vm.onLoadedPreview,"close":function($event){return _vm.removeFile(file)}}}),_vm._t("default",null,{"file":file})],2)}),1):_vm._e(),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):(_vm.invalidFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),(_vm.isDragging)?_c('div',{staticClass:"upload-field-dropzone",style:({'min-height': _vm.dropzoneMinHeight}),on:{"drop":function($event){$event.preventDefault();return _vm.onDrop($event)}}},[_c('font-awesome-icon',{attrs:{"icon":"cloud-upload-alt"}}),_c('div',[_vm._v("Drag and drop files to upload")])],1):_vm._e()],2)],1)}
var UploadFieldvue_type_template_id_c1fc9a9a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/UploadField/UploadField.vue?vue&type=template&id=c1fc9a9a&

// CONCATENATED MODULE: ./src/Http/Model/index.js

/* harmony default export */ var Http_Model = (Model_Model);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faCloudUploadAlt.js
var faCloudUploadAlt = __webpack_require__("d457");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/UploadField/UploadField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














index_es["c" /* library */].add(faCloudUploadAlt["faCloudUploadAlt"]);
/* harmony default export */ var UploadFieldvue_type_script_lang_js_ = ({
  name: 'UploadField',
  components: {
    Dropzone: Components_Dropzone,
    FormGroup: Components_FormGroup,
    FileField: Components_FileField,
    FormLabel: Components_FormLabel,
    FilePreview: Components_FilePreview,
    ThumbnailList: Components_ThumbnailList,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    ThumbnailListItem: ThumbnailListItem
  },
  mixins: [Mixins_FormControl, Mixins_MergeClasses],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
     * Can user upload multiple files
     *
     * @property String
     */
    multiple: Boolean,

    /**
     * The maximum number of files that a user can upload
     *
     * @property String
     */
    maxUploads: Number,

    /**
     * The height attribute for the control element
     *
     * @property String
     */
    height: [Number, String],

    /**
     * The minimum height attribute for the control element
     *
     * @property String
     */
    minHeight: [Number, String],

    /**
     * The maximum height attribute for the control element
     *
     * @property String
     */
    maxHeight: [Number, String],

    /**
     * The width attribute for the control element
     *
     * @property String
     */
    width: [Number, String],

    /**
     * The minimum width attribute for the control element
     *
     * @property String
     */
    minWidth: [Number, String],

    /**
     * The maximum width attribute for the control element
     *
     * @property String
     */
    maxWidth: [Number, String],

    /**
     * Can user drag/drop files into browser to upload them.
     *
     * @property String
     */
    dropzoneMinHeight: [Number, String],

    /**
     * Can user drag/drop files into browser to upload them.
     *
     * @property String
     */
    dropzone: {
      type: Boolean,
      default: true
    },

    /**
     * The data attribute
     *
     * @property File|FileList|Array
     */
    value: {
      type: [Object, File, FileList, Array],

      default() {
        return !this.multiple ? null : [];
      }

    },

    /**
     * An HTTP Model used to send the request
     *
     * @type Model
     */
    model: [Http_Model, Function],
    request: Object
  },

  data() {
    return {
      progressBars: {},
      isDragging: false,
      files: !this.value ? [] : this.multiple ? Array.from(this.value) : [this.value]
    };
  },

  computed: {
    showDropElement() {
      return this.isDragging;
    }

  },
  methods: {
    removeFile(data) {
      this.files.splice(this.files.indexOf(data), 1);

      if (data.request && data.request.cancel) {
        data.request.cancel();
      }

      if (this.multiple) {
        this.$emit('change', this.files);
      } else {
        this.$emit('change', null);
      }
    },

    addFile(file, subject) {
      const data = {
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        size: file.size,
        type: file.type
      };

      if (this.multiple) {
        if ((!this.maxUploads || this.maxUploads > this.files.length) && this.files.indexOf(data) === -1) {
          this.files.splice(this.files.length, 0, file);
          this.$emit('change', this.files);
          this.upload(file);
        }
      } else {
        this.files = [file];
        this.$emit('change', file);
        this.upload(file);
      }
    },

    addFiles(files) {
      Array.from(files).forEach(file => {
        this.addFile(file);
      });
      event.target.value = null;
    },

    /**
     * Upload function that handles auto-uploading fields asynchronously.
     * This is designed to work with REST API's and replace the file Object
     * with the RESTful returned by the server.
     *
     * @type Object
     */
    upload(file) {
      // Stop upload silently if no model is defined.
      if (!this.model) {
        return Promise.resolve();
      }

      let model = this.model;

      if (!(this.model instanceof Http_Model)) {
        const Model = this.model;
        model = new Model();
      }

      if (this.$attrs.name) {
        model.set(this.$attrs.name, file);
      }

      this.$emit('uploading', model);
      this.$set(this.progressBars, this.multiple ? this.value ? this.value.length : 0 : 0, 0);
      return model.save(null, extend({
        onUploadProgress: e => {
          if (!file.index) {
            file.index = this.files.indexOf(file);
          }

          if (!file.request) {
            file.request = model.getRequest();
          }

          this.$set(this.progressBars, file.index, parseInt(e.loaded / e.total * 100, 10));
          this.$emit('progress', model, this.progressBars[file.index]);
        }
      }, this.request)).then(response => {
        this.$nextTick(() => {
          this.$emit('upload', model);
          this.progressBars[file.index] = false;
        });
        return response;
      });
    },

    /**
     * The `change` event callback.
     *
     * @type Object
     */
    onChange(files) {
      if (files instanceof FileList) {
        this.addFiles(files);
      } else {
        this.addFile(files);
      }
    },

    /**
     * The `dragover` event callback.
     *
     * @type Object
     */
    onDragOver(event) {
      this.isDragging = true;
      this.$emit('drag-over', event);
    },

    /**
     * The `dragover` event callback.
     *
     * @type Object
     */
    onDragEnter(event) {
      console.log('onDragEnter');
      this.isDragging = true;
      this.$emit('drag-enter', event);
    },

    /**
     * The `dragleave` event callback.
     *
     * @type Object
     */
    onDragLeave(event) {
      console.log('onDragEnter');
      this.isDragging = false;
      this.$emit('drag-leave', event);
    },

    /**
     * The `drop` event callback.
     *
     * @property String
     */
    onDrop(event) {
      this.isDragging = false;
      this.addFiles(event.dataTransfer.files);
      this.$emit('update:dragging', false);
      this.$emit('drop', event);
    },

    /**
     * The `loaded` event callback.
     *
     * @type Object
     */
    onLoadedPreview(event) {
      this.$emit('loaded', event);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/UploadField/UploadField.vue?vue&type=script&lang=js&
 /* harmony default export */ var UploadField_UploadFieldvue_type_script_lang_js_ = (UploadFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/UploadField/UploadField.vue?vue&type=style&index=0&lang=scss&
var UploadFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("c6d3");

// CONCATENATED MODULE: ./src/Components/UploadField/UploadField.vue






/* normalize component */

var UploadField_component = normalizeComponent(
  UploadField_UploadFieldvue_type_script_lang_js_,
  UploadFieldvue_type_template_id_c1fc9a9a_render,
  UploadFieldvue_type_template_id_c1fc9a9a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UploadField = (UploadField_component.exports);
// CONCATENATED MODULE: ./src/Components/UploadField/index.js

/* harmony default export */ var Components_UploadField = (UploadField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/Wizard.vue?vue&type=template&id=ba6c2b86&
var Wizardvue_type_template_id_ba6c2b86_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard"},[(_vm.header && !_vm.isFinished)?_c('wizard-header',{ref:"header",domProps:{"innerHTML":_vm._s(_vm.header)}}):_vm._e(),(!_vm.isFinished)?_c('wizard-progress',{ref:"progress",attrs:{"active":_vm.currentStep,"highest-step":_vm.highestStep,"steps":_vm.steps},on:{"click":_vm.onProgressClick}}):_vm._e(),_c('div',{ref:"content",staticClass:"wizard-content"},[(!_vm.isFinished)?_vm._t("content"):_vm._e(),(!_vm.isFinished)?_c('slide-deck',{ref:"slideDeck",attrs:{"active":_vm.currentStep,"resize-model":_vm.resizeMode},on:{"before-enter":_vm.onBeforeEnter,"enter":_vm.onEnter,"leave":_vm.onLeave}},[_vm._t("default")],2):(_vm.isFinished && !_vm.hasFailed)?_vm._t("success",[_c('wizard-success',{ref:"success"})]):(_vm.isFinished && _vm.hasFailed)?_vm._t("error",[_c('wizard-error',{ref:"error",attrs:{"errors":_vm.errors},on:{"back":_vm.onClickTest}})]):_vm._e()],2),(_vm.buttons && !_vm.isFinished)?_vm._t("buttons",[_c('hr'),_c('wizard-buttons',{ref:"buttons",attrs:{"size":"lg","steps":_vm.steps,"active":_vm.currentStep,"activity":_vm.activity,"back-button":!_vm.isBackButtonDisabled,"next-button":!_vm.isNextButtonDisabled,"finish-button":!_vm.isFinishButtonDisabled},on:{"click:back":_vm.onClickBack,"click:finish":_vm.onClickFinish,"click:next":_vm.onClickNext}})]):_vm._e()],2)}
var Wizardvue_type_template_id_ba6c2b86_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Wizard/Wizard.vue?vue&type=template&id=ba6c2b86&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardButtons.vue?vue&type=template&id=79b100f1&
var WizardButtonsvue_type_template_id_79b100f1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-buttons"},[_c('btn-group',{ref:"left",staticClass:"wizard-buttons-left"},[_vm._t("buttons-left"),_c('btn',{ref:"back",attrs:{"type":"button","variant":_vm.backVariant,"disabled":_vm.backButton === false || (_vm.active === 0 && _vm.backButton !== true),"size":_vm.sizeableClass},on:{"click":_vm.onClickBack}},[_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-left"}}),_vm._v(" "+_vm._s(_vm.backLabel || 'Back')+"\n        ")],1)],2),_c('btn-group',{ref:"right",staticClass:"wizard-buttons-right"},[_vm._t("buttons-right"),(_vm.active === _vm.steps.length - 1)?_c('btn-activity',{ref:"finish",attrs:{"activity":_vm.activity,"size":_vm.sizeableClass,"variant":_vm.finishVariant,"disabled":_vm.finishButton === false,"type":"button"},on:{"click":_vm.onClickFinish}},[_vm._v("\n            "+_vm._s(_vm.finishLabel || 'Finish')+"\n        ")]):_c('btn-activity',{ref:"next",attrs:{"activity":_vm.activity,"size":_vm.sizeableClass,"variant":_vm.nextVariant,"disabled":_vm.nextButton === false,"type":"button"},on:{"click":_vm.onClickNext}},[_vm._v("\n            "+_vm._s(_vm.nextLabel || 'Next')+" "),_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-right"}})],1)],2)],1)}
var WizardButtonsvue_type_template_id_79b100f1_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Wizard/WizardButtons.vue?vue&type=template&id=79b100f1&

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js
var faCheck = __webpack_require__("f01e");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faLongArrowAltLeft.js
var faLongArrowAltLeft = __webpack_require__("6a5f");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faLongArrowAltRight.js
var faLongArrowAltRight = __webpack_require__("8015");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardButtons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









index_es["c" /* library */].add(faCheck["faCheck"]);
index_es["c" /* library */].add(faLongArrowAltLeft["faLongArrowAltLeft"]);
index_es["c" /* library */].add(faLongArrowAltRight["faLongArrowAltRight"]);
/* harmony default export */ var WizardButtonsvue_type_script_lang_js_ = ({
  name: 'WizardButtons',
  components: {
    Btn: Components_Btn,
    BtnGroup: Components_BtnGroup,
    BtnActivity: Components_BtnActivity,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  mixins: [Mixins_Sizeable],
  props: {
    /**
     * The index or key of the active step.
     *
     * @type {String|Number}
     */
    active: {
      type: [String, Number],
      default: 0
    },

    /**
     * Show the activity indicator in the next or finish button.
     *
     * @type {Boolean}
     */
    activity: Boolean,

    /**
     * Show should the "Back" button.
     *
     * @type {Boolean}
     */
    backButton: Boolean,

    /**
     * Override the "Back" button label.
     *
     * @type {String}
     */
    backLabel: String,

    /**
     * The "Back" button variable.
     *
     * @type {String}
     */
    backVariant: {
      type: String,
      default: 'secondary'
    },

    /**
     * Show should the "Finish" button.
     *
     * @type {Boolean}
     */
    finishButton: Boolean,

    /**
     * Override the "Finish" button label.
     *
     * @type {String}
     */
    finishLabel: String,

    /**
     * The "Finish" button variable.
     *
     * @type {String}
     */
    finishVariant: {
      type: String,
      default: 'success'
    },

    /**
     * Show should the "Next" button.
     *
     * @type {Boolean}
     */
    nextButton: Boolean,

    /**
     * Override the "Next" button label.
     *
     * @type {String}
     */
    nextLabel: String,

    /**
     * The "Next" button variable.
     *
     * @type {String}
     */
    nextVariant: {
      type: String,
      default: 'primary'
    },

    /**
     * An array of steps passed from the parent.
     *
     * @type {Array}
     */
    steps: {
      type: Array,
      required: true
    }
  },
  computed: {
    /**
     * Override the class prefix with an empty string...
     * @return {String}
     */
    sizeableClassPrefix() {
      return '';
    }

  },
  methods: {
    onClickBack(event) {
      if (this.backButton !== false) {
        this.$emit('click:back', event);
      }
    },

    onClickFinish(event) {
      if (this.finishButton !== false) {
        this.$emit('click:finish', event);
      }
    },

    onClickNext(event) {
      if (this.nextButton !== false) {
        this.$emit('click:next', event);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Wizard/WizardButtons.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_WizardButtonsvue_type_script_lang_js_ = (WizardButtonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Wizard/WizardButtons.vue?vue&type=style&index=0&lang=scss&
var WizardButtonsvue_type_style_index_0_lang_scss_ = __webpack_require__("0649");

// CONCATENATED MODULE: ./src/Components/Wizard/WizardButtons.vue






/* normalize component */

var WizardButtons_component = normalizeComponent(
  Wizard_WizardButtonsvue_type_script_lang_js_,
  WizardButtonsvue_type_template_id_79b100f1_render,
  WizardButtonsvue_type_template_id_79b100f1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardButtons = (WizardButtons_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardError.vue?vue&type=template&id=2dea5eb5&
var WizardErrorvue_type_template_id_2dea5eb5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-error"},[(_vm.icon)?_c('div',{staticClass:"wizard-error-icon"},[_c('i',{class:_vm.icon,attrs:{"size":"3x"}})]):_vm._e(),(_vm.title)?_c('h3',{staticClass:"wizard-error-title",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._t("default"),_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-sm-6"},[(_vm.errors)?_c('div',{staticClass:"my-5"},[_c('ul',{staticClass:"mb-0 text-left"},_vm._l((_vm.errors),function(error,i){return _c('li',{key:i},[_vm._v("\n                        "+_vm._s(error[0])+"\n                    ")])}),0)]):_vm._e(),_c('btn',{attrs:{"size":"lg","variant":"danger","block":""},on:{"click":function($event){return _vm.$emit('back')}}},[_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-left"}}),_vm._v(" Go Back\n            ")],1)],1)])],2)}
var WizardErrorvue_type_template_id_2dea5eb5_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Wizard/WizardError.vue?vue&type=template&id=2dea5eb5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardStep.vue?vue&type=script&lang=js&

/* harmony default export */ var WizardStepvue_type_script_lang_js_ = ({
  name: 'WizardStep',
  props: {
    /**
     * The step's label in the progress bar.
     *
     * @type {String}
     */
    label: String,

    /**
     * A predicate function to determine if the back button should show.
     * Can also be a boolean value.
     *
     * @type {Function|Boolean}
     */
    backButton: {
      type: [Function, Boolean],

      default() {
        return null;
      }

    },

    /**
     * Validate if the data input for the step is valid. Required Boolean
     * or a predicate function.
     *
     * @type {Function|Boolean}
     */
    validate: {
      type: [Function, Boolean],

      default() {
        return true;
      }

    }
  },

  updated() {
    this.$nextTick(this.performValidityChecks);
  },

  mounted() {
    this.$nextTick(this.performValidityChecks);
  },

  methods: {
    checkValidity(prop) {
      let value = isFunction(this[prop]) ? this[prop](this) : this[prop]; // Validate the property for the step first.

      if (value === false) {
        return false;
      } // Then validate the property of the wizard, this is the global validator


      if (this.$refs.wizard) {
        value = isFunction(this.$refs.wizard[prop]) ? this.$refs.wizard[prop](this) : this.$refs.wizard[prop];

        if (value === false) {
          return false;
        }
      }

      return true;
    },

    performValidityChecks() {
      this.checkValidity('validate') ? this.enable() : this.disable();
      this.checkValidity('backButton') ? this.$refs.wizard.enableBackButton() : this.$refs.wizard.disableBackButton();
    },

    disable() {
      if (this.$refs.wizard) {
        this.$refs.wizard.disableNextButton();
        this.$refs.wizard.disableFinishButton();
      }
    },

    enable() {
      if (this.$refs.wizard) {
        this.$refs.wizard.enableNextButton();
        this.$refs.wizard.enableFinishButton();
      }
    }

  },

  render(h) {
    if (this.$slots.default.length !== 1) {
      throw new Error('The <wizard-slot> must contain a single parent DOM node.');
    }

    return this.$slots.default[0];
  }

});
// CONCATENATED MODULE: ./src/Components/Wizard/WizardStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_WizardStepvue_type_script_lang_js_ = (WizardStepvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Wizard/WizardStep.vue
var WizardStep_render, WizardStep_staticRenderFns




/* normalize component */

var WizardStep_component = normalizeComponent(
  Wizard_WizardStepvue_type_script_lang_js_,
  WizardStep_render,
  WizardStep_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardStep = (WizardStep_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardError.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






index_es["c" /* library */].add(faCheck["faCheck"]);
index_es["c" /* library */].add(faLongArrowAltLeft["faLongArrowAltLeft"]);
/* harmony default export */ var WizardErrorvue_type_script_lang_js_ = ({
  name: 'WizardError',
  components: {
    Btn: Components_Btn,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  extends: WizardStep,
  props: {
    icon: {
      type: String,
      default: 'check'
    },
    title: {
      type: String,
      default: 'Error!'
    },
    errors: [Array, Object]
  }
});
// CONCATENATED MODULE: ./src/Components/Wizard/WizardError.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_WizardErrorvue_type_script_lang_js_ = (WizardErrorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Wizard/WizardError.vue?vue&type=style&index=0&lang=scss&
var WizardErrorvue_type_style_index_0_lang_scss_ = __webpack_require__("1b45");

// CONCATENATED MODULE: ./src/Components/Wizard/WizardError.vue






/* normalize component */

var WizardError_component = normalizeComponent(
  Wizard_WizardErrorvue_type_script_lang_js_,
  WizardErrorvue_type_template_id_2dea5eb5_render,
  WizardErrorvue_type_template_id_2dea5eb5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardError = (WizardError_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardHeader.vue?vue&type=template&id=b591cb9c&
var WizardHeadervue_type_template_id_b591cb9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"wizard-header",class:{'text-center': _vm.center}},[_vm._t("default")],2)}
var WizardHeadervue_type_template_id_b591cb9c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Wizard/WizardHeader.vue?vue&type=template&id=b591cb9c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var WizardHeadervue_type_script_lang_js_ = ({
  name: 'WizardHeader',
  props: {
    center: {
      type: Boolean,
      default: true
    },

    /**
     * The HTML tag
     *
     * @type {String}
     */
    tag: {
      type: String,
      default: 'h2'
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Wizard/WizardHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_WizardHeadervue_type_script_lang_js_ = (WizardHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Wizard/WizardHeader.vue?vue&type=style&index=0&lang=scss&
var WizardHeadervue_type_style_index_0_lang_scss_ = __webpack_require__("906a");

// CONCATENATED MODULE: ./src/Components/Wizard/WizardHeader.vue






/* normalize component */

var WizardHeader_component = normalizeComponent(
  Wizard_WizardHeadervue_type_script_lang_js_,
  WizardHeadervue_type_template_id_b591cb9c_render,
  WizardHeadervue_type_template_id_b591cb9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardHeader = (WizardHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardProgress.vue?vue&type=template&id=7a155f8c&
var WizardProgressvue_type_template_id_7a155f8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-progress"},_vm._l((_vm.steps),function(step,i){return _c('a',{key:i,staticClass:"wizard-step",class:{'active': i === _vm.active, 'disabled': i > _vm.highestStep, 'complete': i + 1 <= _vm.highestStep},style:({width: ((100 / _vm.steps.length) + "%")}),attrs:{"href":"#","data-step":i,"title":step.label || step.title},on:{"click":function($event){$event.preventDefault();return _vm.onClick($event, step)}}},[(step.componentOptions && step.componentOptions.propsData.label)?_c('span',{staticClass:"wizard-step-label",domProps:{"innerHTML":_vm._s(step.componentOptions.propsData.label)}}):(step.componentOptions && step.componentOptions.propsData.title)?_c('span',{staticClass:"wizard-step-label",domProps:{"innerHTML":_vm._s(step.componentOptions.propsData.title)}}):_vm._e()])}),0)}
var WizardProgressvue_type_template_id_7a155f8c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Wizard/WizardProgress.vue?vue&type=template&id=7a155f8c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardProgress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WizardProgressvue_type_script_lang_js_ = ({
  name: 'WizardProgress',
  props: {
    /**
     * The index or key of the active step.
     *
     * @type {String|Number}
     */
    active: {
      type: [String, Number],
      default: 0
    },

    /**
     * The wizard highest available to the user.
     *
     * @type {Array}
     */
    highestStep: {
      type: Number,
      required: true
    },

    /**
     * The wizard steps
     *
     * @type {Array}
     */
    steps: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      isActive: false
    };
  },

  methods: {
    onClick(event, step) {
      if (!event.target.classList.contains('disabled')) {
        this.$emit('click', event, step);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Wizard/WizardProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_WizardProgressvue_type_script_lang_js_ = (WizardProgressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Wizard/WizardProgress.vue?vue&type=style&index=0&lang=scss&
var WizardProgressvue_type_style_index_0_lang_scss_ = __webpack_require__("1790");

// CONCATENATED MODULE: ./src/Components/Wizard/WizardProgress.vue






/* normalize component */

var WizardProgress_component = normalizeComponent(
  Wizard_WizardProgressvue_type_script_lang_js_,
  WizardProgressvue_type_template_id_7a155f8c_render,
  WizardProgressvue_type_template_id_7a155f8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardProgress = (WizardProgress_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d67d5e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardSuccess.vue?vue&type=template&id=6a174578&
var WizardSuccessvue_type_template_id_6a174578_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-success"},[(_vm.icon)?_c('div',{staticClass:"wizard-success-icon"},[_c('font-awesome-icon',{attrs:{"icon":_vm.icon}})],1):_vm._e(),(_vm.title)?_c('h3',{staticClass:"wizard-success-title",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._t("default")],2)}
var WizardSuccessvue_type_template_id_6a174578_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Wizard/WizardSuccess.vue?vue&type=template&id=6a174578&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/WizardSuccess.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//




index_es["c" /* library */].add(faCheck["faCheck"]);
/* harmony default export */ var WizardSuccessvue_type_script_lang_js_ = ({
  name: 'WizardSuccess',
  components: {
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  extends: WizardStep,
  props: {
    icon: {
      type: String,
      default: 'check'
    },
    title: {
      type: String,
      default: 'Success!'
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Wizard/WizardSuccess.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_WizardSuccessvue_type_script_lang_js_ = (WizardSuccessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Wizard/WizardSuccess.vue?vue&type=style&index=0&lang=scss&
var WizardSuccessvue_type_style_index_0_lang_scss_ = __webpack_require__("e5b4");

// CONCATENATED MODULE: ./src/Components/Wizard/WizardSuccess.vue






/* normalize component */

var WizardSuccess_component = normalizeComponent(
  Wizard_WizardSuccessvue_type_script_lang_js_,
  WizardSuccessvue_type_template_id_6a174578_render,
  WizardSuccessvue_type_template_id_6a174578_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardSuccess = (WizardSuccess_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Wizard/Wizard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Wizardvue_type_script_lang_js_ = ({
  name: 'Wizard',
  components: {
    SlideDeck: Components_SlideDeck,
    WizardButtons: WizardButtons,
    WizardError: WizardError,
    WizardHeader: WizardHeader,
    WizardProgress: WizardProgress,
    WizardSuccess: WizardSuccess
  },
  props: {
    /**
     * The index or key of the active step.
     *
     * @type {String|Number}
     */
    active: {
      type: [String, Number],
      default: 0
    },

    /**
     * Show the activity indicator in the next or finish button.
     *
     * @type {Boolean}
     */
    activity: Boolean,

    /**
     * Show the wizard button container.
     *
     * @type {Boolean}
     */
    buttons: {
      type: Boolean,
      default: true
    },

    /**
     * The the index or key of the max completed step.
     *
     * @type {String|Number}
     */
    completed: [String, Number],

    /**
     * Pass a header as a string.
     *
     * @type {String}
     */
    header: String,

    /**
     * Show should the "Back" button.
     *
     * @type {Boolean}
     */
    backButton: Boolean,

    /**
     * Show should the "Next" button.
     *
     * @type {Boolean}
     */
    nextButton: Boolean,

    /**
     * Show should the "Finish" button.
     *
     * @type {Boolean}
     */
    finishButton: Boolean,

    /**
     * The mode determines how the popover content will flex based on the
     * varying heights of the slides.
     *
     * @type Boolean
     */
    resizeMode: {
      type: [Function, Boolean, String],
      default: 'auto',

      validate(value) {
        return ['auto', 'initial', 'inherit'].indexOf(value) !== 1;
      }

    },

    /**
     * Validate if the data input for the step is valid. Required Boolean
     * or a predicate function.
     *
     * @type {Function|Boolean}
     */
    validate: {
      type: [Function, Boolean],

      default() {
        return true;
      }

    }
  },

  data() {
    return {
      steps: [],
      errors: null,
      hasFailed: false,
      isFinished: false,
      currentStep: this.index(),
      highestStep: this.index(this.completed),
      isBackButtonDisabled: this.backButton === false,
      isNextButtonDisabled: this.nextButton === false,
      isFinishButtonDisabled: this.finishButton === false
    };
  },

  watch: {
    active() {
      this.currentStep = this.index();
    },

    currentStep(value) {
      this.$emit('update:active', value);
    }

  },

  mounted() {
    const slide = this.$refs.slideDeck.slide(this.currentStep);

    if (slide) {
      (slide.componentInstance || slide.context).$refs.wizard = this;
      (slide.componentInstance || slide.context).$emit('enter');
      this.$emit('enter', slide);
    }

    this.steps = this.$refs.slideDeck.slides();
  },

  methods: {
    back() {
      this.currentStep = Math.max(this.currentStep - 1, 0);
    },

    disableButtons() {
      this.isBackButtonDisabled = true;
      this.isFinishButtonDisabled = true;
      this.isNextButtonDisabled = true;
    },

    disableBackButton() {
      this.isBackButtonDisabled = true;
    },

    disableFinishButton() {
      this.isFinishButtonDisabled = true;
    },

    disableNextButton() {
      this.isNextButtonDisabled = true;
    },

    emitBubbleEvent(key, ...args) {
      this.$refs.slideDeck.slide(this.currentStep).componentInstance.$emit.apply(this.$refs.slideDeck.slide(this.currentStep).componentInstance, args = [key].concat(args));
      this.$emit.apply(this, args);
    },

    enableButtons() {
      this.isBackButtonDisabled = false;
      this.isFinishButtonDisabled = false;
      this.isNextButtonDisabled = false;
    },

    enableBackButton() {
      this.isBackButtonDisabled = false;
    },

    enableFinishButton() {
      this.isFinishButtonDisabled = false;
    },

    enableNextButton() {
      this.isNextButtonDisabled = false;
    },

    finish(status, errors = null) {
      this.errors = errors;
      this.hasFailed = status === false;
      this.isFinished = true;
    },

    index(key = null) {
      return Math.max(0, this.$slots.default.indexOf(find(this.$slots.default, ['key', key || this.active]) || this.$slots.default[key || this.active]));
    },

    next() {
      this.$emit('update:active', this.currentStep = Math.min(this.currentStep + 1, this.$refs.slideDeck.slides().length - 1));
    },

    onBeforeEnter(slide, prev) {
      slide.context.$emit('before-enter', slide, prev);
      this.$emit('before-enter', slide, prev);
    },

    onClickTest(event) {
      this.isFinished = false;
    },

    onClickBack(event) {
      this.emitBubbleEvent('back', event);

      if (event.defaultPrevented !== true) {
        this.back();
      }
    },

    onClickFinish(event) {
      this.emitBubbleEvent('finish', event);

      if (event.defaultPrevented !== true) {
        this.finish(true);
      }
    },

    onClickNext(event) {
      this.emitBubbleEvent('next', event);

      if (event.defaultPrevented !== true) {
        this.next();
      }
    },

    onEnter(slide, prev) {
      this.highestStep = Math.max(this.highestStep, this.$refs.slideDeck.$refs.slides.getSlideIndex(slide));
      slide.componentInstance.$refs.wizard = this;
      slide.context.$emit('enter', slide, prev);
      this.$emit('enter', slide, prev);
    },

    onLeave(slide, prev) {
      slide.context.$emit('leave', slide, prev);
      this.$emit('leave', slide, prev);
    },

    onProgressClick(event, slide) {
      if (this.$refs.slideDeck) {
        this.currentStep = this.$refs.slideDeck.$refs.slides.getSlideIndex(slide);
      } else {
        this.isFinished = false;
        this.currentStep = this.index(slide.key);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Wizard/Wizard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_Wizardvue_type_script_lang_js_ = (Wizardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Wizard/Wizard.vue?vue&type=style&index=0&lang=scss&
var Wizardvue_type_style_index_0_lang_scss_ = __webpack_require__("2cfd");

// CONCATENATED MODULE: ./src/Components/Wizard/Wizard.vue






/* normalize component */

var Wizard_component = normalizeComponent(
  Wizard_Wizardvue_type_script_lang_js_,
  Wizardvue_type_template_id_ba6c2b86_render,
  Wizardvue_type_template_id_ba6c2b86_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Wizard = (Wizard_component.exports);
// CONCATENATED MODULE: ./src/Components/Wizard/index.js








/* harmony default export */ var Components_Wizard = (Wizard);
// CONCATENATED MODULE: ./src/Components/index.js

































































































// CONCATENATED MODULE: ./src/Directives/Collapse/Collapse.js



function Collapse_height(el) {
  const style = getComputedStyle(el);
  let height = el.offsetHeight;
  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

function show(el, target, vnode) {
  target.classList.remove('collapse');
  target.classList.add('show');
  target.$collapsedHeight = `${Collapse_height(target)}px`;
  target.classList.add('collapsing');
  vnode.context.$nextTick(() => {
    target.style.height = target.$collapsedHeight;
  });
  Transition(target).then(delay => {
    target.style.height = null;
    target.classList.add('collapse');
    target.classList.remove('collapsing');
    el.classList.remove('collapsed');
  });
}

function hide(el, target, vnode) {
  target.style.height = target.$collapsedHeight;
  target.classList.add('collapsing');
  vnode.context.$nextTick(() => {
    target.style.height = 0;
  });
  Transition(target).then(delay => {
    target.style.height = null;
    target.classList.add('collapse');
    target.classList.remove('show', 'collapsing');
    el.classList.add('collapsed');
  });
}

function toggle(el, target, vnode) {
  if (!target.classList.contains('show')) {
    show(el, target, vnode);
  } else {
    hide(el, target, vnode);
  }
}

/* harmony default export */ var Collapse = ({
  inserted(el, binding, vnode) {
    // If the binding value is `false`, then do nothing.
    if (binding.value === false) {
      return;
    } // Get the collapsable target.


    const target = isFunction(binding.value) ? binding.value(el, binding, vnode) : el.getAttribute('data-target') || el.getAttribute('href');
    const targets = isString_isString(target) ? document.querySelectorAll(target) : !isArray(target) ? [target] : target; // Set the class and attribute so it matches the Boostrap 4 spec.
    // el.classList.add('collapsed');

    el.setAttribute('data-toggle', 'collapse'); // Bind the toggle

    el.addEventListener('click', event => {
      targets.forEach(element => toggle(el, element, vnode));
      event.preventDefault();
    });
    targets.forEach(target => {
      if (target.classList.contains('show')) {
        target.$collapsedHeight = `${Collapse_height(target)}px`;
      } else {
        target.classList.add('collapse');
      }
    });
  }

});
// CONCATENATED MODULE: ./src/Directives/Collapse/index.js

/* harmony default export */ var Directives_Collapse = (Collapse);
// EXTERNAL MODULE: ./node_modules/util/util.js
var util = __webpack_require__("3022");

// CONCATENATED MODULE: ./src/Directives/InputList/InputList.js


const InputList_TAB = 9;

function InputList_input(child) {
  if (child.elm || child.$el) {
    child = child.elm || child.$el;
  }

  if (isUndefined(child.value)) {
    return child.querySelector('input, select, textarea');
  }

  return child;
}

function bindEvents(child, items, defaultValue, vnode) {
  const el = InputList_input(child);
  el.addEventListener('blur', e => {
    const index = Array.prototype.indexOf.call(child.parentNode.childNodes, child);

    if (isEmpty(e.target.value) && items.length > 1 && index < items.length - 1) {
      items.splice(index, 1);
    } else if (!isNull(items[items.length - 1])) {
      items.push(defaultValue);
    }
  });
  el.addEventListener('keydown', e => {
    if (e.keyCode === InputList_TAB) {
      if (!event.shiftKey && !isNull(items[items.length - 1])) {
        items.push(defaultValue);
      }
    }
  });
  child.$inputListControl = true;
  return new Promise(resolve => {
    vnode.context.$nextTick(() => resolve(el));
  });
}

/* harmony default export */ var InputList_InputList = ({
  inserted(el, binding, vnode) {
    let items = binding.value;
    let defaultValue = null;
    let expression = binding.expression;

    if (Object(util["isObject"])(items)) {
      if (items.items) {
        items = items.items;
        expression = 'items';
      }

      if (items.defaultValue) {
        defaultValue = items.defaultValue;
      }
    }

    if (!isArray(items)) {
      throw Error('The v-input-list directive requires an array.');
    }

    vnode.context.$nextTick(() => {
      vnode.elm.childNodes.forEach(child => {
        bindEvents(child, items, defaultValue, vnode);
      });

      if (!items.length) {
        vnode.context.$nextTick(() => items.push(defaultValue));
      }

      vnode.context.$watch(expression, value => {
        Array.from(vnode.elm.childNodes).filter(child => !child.$inputListControl).forEach(child => {
          bindEvents(child, value, defaultValue, vnode).then(() => focus());
        });
      });
    });
  }

});
// CONCATENATED MODULE: ./src/Directives/InputList/index.js

/* harmony default export */ var Directives_InputList = (InputList_InputList);
// CONCATENATED MODULE: ./src/Directives/Lazy/Lazy.js
/* harmony default export */ var Lazy = ({
  inserted(el, binding, vnode) {
    if (!el.getAttribute('src') && el.getAttribute('data-src')) {
      if (el.getAttribute('data-src').match(/data\:/)) {
        el.src = el.getAttribute('data-src');
        el.removeAttribute('data-src');
      } else {
        const img = document.createElement('img');
        img.src = el.getAttribute('data-src');
        img.addEventListener('load', e => {
          el.src = img.src;

          if (binding.value instanceof Function) {
            binding.value(img);
          }
        });
      }
    }
  }

});
// CONCATENATED MODULE: ./src/Directives/Lazy/index.js

/* harmony default export */ var Directives_Lazy = (Lazy);
// CONCATENATED MODULE: ./src/Directives/Slug/Slug.js

/* harmony default export */ var Slug = ({
  inserted(el, binding, vnode) {
    const input = el.querySelector('input, textarea') || el;
    const value = get(vnode.context, binding.expression);
    let editable = !input.value;

    const update = value => {
      if (editable) {
        input.value = kebabCase(value);
        input.dispatchEvent(new Event('input'));
      }
    };

    vnode.context.$watch(binding.expression, update);
    input.addEventListener('keyup', event => {
      input.value = kebabCase(event.target.value) + (event.target.value.match(/\s$/) ? ' ' : '');
    });
    input.addEventListener('input', event => {
      if (event instanceof InputEvent) {
        editable = !event.target.value;
      }
    });
    input.addEventListener('blur', event => {
      input.value = kebabCase(event.target.value || binding.expression.split('.').reduce((o, i) => o[i], vnode.context));
      input.dispatchEvent(new Event('input'));
    });
    !input.value && update(value);
  }

});
// CONCATENATED MODULE: ./src/Directives/Slug/index.js

/* harmony default export */ var Directives_Slug = (Slug);
// CONCATENATED MODULE: ./src/Directives/index.js






// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("c32d");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/Filters/Date/DateFilter.js

/* harmony default export */ var DateFilter = (function (value, format) {
  if (value) {
    return external_moment_default()(String(value)).format(format);
  }

  return '';
});
// CONCATENATED MODULE: ./src/Filters/Date/MomentFilter.js

/* harmony default export */ var MomentFilter = (function (value, format) {
  return value ? external_moment_default()(String(value)) : null;
});
// CONCATENATED MODULE: ./src/Filters/Date/index.js



/* harmony default export */ var Filters_Date = (function (Vue, options) {
  Vue.filter('date', DateFilter);
  Vue.filter('moment', MomentFilter);
});
;
// CONCATENATED MODULE: ./src/Filters/index.js


// CONCATENATED MODULE: ./src/Helpers/Blob/Blob.js

function blob(url, progress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    if (isFunction(progress)) {
      xhr.onprogress = e => progress(e, xhr);
    }

    xhr.onerror = e => reject(e);

    xhr.onabort = e => reject(e);

    xhr.onload = function (e) {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(e);
      }
    };

    xhr.send();
  });
}
// CONCATENATED MODULE: ./src/Helpers/Blob/index.js

/* harmony default export */ var Helpers_Blob = (blob);
// CONCATENATED MODULE: ./src/Helpers/Breakpoints/Breakpoints.js


function onResize(wait) {
  return Functions_debounce(event => {
    console.log(event);
  }, wait);
}

const defaultOptions = {
  wait: 250
};
function breakpoints(container, breakpoints, options) {
  if (!(container instanceof HTMLElement)) {
    breakpoints = container;
  }

  options = Object.assign({}, defaultOptions, options);
  window.addEventListener('resize', onResize(options.wait)); // window.removeEventListener('resize', onResize);
}
// CONCATENATED MODULE: ./src/Helpers/Breakpoints/index.js

/* harmony default export */ var Breakpoints = (breakpoints);
// CONCATENATED MODULE: ./src/Helpers/Elapsed/Elapsed.js

function elapsed(milliseconds, callback, elapsedCallback) {
  let hasElapsed = false;

  function start() {
    return setTimeout(() => {
      hasElapsed = true;

      if (isFunction(elapsedCallback)) {
        elapsedCallback();
      }
    }, milliseconds);
  }

  function stop() {
    clearTimeout(interval);
  }

  const interval = start();
  const promise = new Promise((resolve, reject) => {
    function resolver(resolver, response) {
      return resolver(response || hasElapsed);
    }

    ;
    callback(wrap(resolve, resolver), wrap(reject, resolver));
  });
  return promise.finally(stop, stop);
}
// CONCATENATED MODULE: ./src/Helpers/Elapsed/index.js

/* harmony default export */ var Elapsed = (elapsed);
// CONCATENATED MODULE: ./src/Helpers/EventEmitter/EventEmitter.js

class EventEmitter_EventEmitter {
  constructor() {
    this.reset();
  }

  on(key, fn) {
    if (!this.events[key]) {
      this.events[key] = [];
    }

    this.events[key].push(fn);
  }

  once(key, fn) {
    const wrapper = wrap(fn, (fn, ...args) => {
      fn(...args);
      this.off(key, wrapper);
    });
    this.on(key, wrapper);
  }

  off(key, fn) {
    if (this.events[key] && fn) {
      this.events[key] = this.events[key].filter(event => event !== fn);
    } else {
      this.events[key] = [];
    }
  }

  emit(key, ...args) {
    if (this.events[key]) {
      this.events[key].forEach(fn => fn(...args));
    }
  }

  reset() {
    this.events = {};
  }

  set events(data) {
    this.$events = data || {};
  }

  get events() {
    return this.$events;
  }

}
// CONCATENATED MODULE: ./src/Helpers/EventEmitter/index.js

/* harmony default export */ var Helpers_EventEmitter = (EventEmitter_EventEmitter);
// CONCATENATED MODULE: ./src/Helpers/Instantiate/Instantiate.js

function instantiate(Vue, Component, options) {
  if (Component instanceof Vue) {
    return Component;
  }

  if (isObject(Component)) {
    Component = Vue.extend(Component);
  } else if (isString_isString(Component)) {
    const string = Component;
    Component = Vue.extend({
      functional: true,

      render(h, context) {
        return this._v(string);
      }

    });
  }

  return new Component(options);
}
// CONCATENATED MODULE: ./src/Helpers/Instantiate/index.js

/* harmony default export */ var Instantiate = (instantiate);
// CONCATENATED MODULE: ./src/Helpers/ReadFile/index.js

/* harmony default export */ var ReadFile = (readFile);
// CONCATENATED MODULE: ./src/Helpers/Script/Script.js
const LOADED_SCRIPTS = {};

function Script_element(url) {
  const script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('charset', 'utf-8');
  return script;
}

function append(script) {
  if (document.querySelector('head')) {
    document.querySelector('head').appendChild(script);
  } else {
    document.querySelector('body').appendChild(script);
  }

  return script;
}

function script(url) {
  if (LOADED_SCRIPTS[url] instanceof Promise) {
    return LOADED_SCRIPTS[url];
  } else if (LOADED_SCRIPTS[url] || document.querySelector(`script[src="${url}"]`)) {
    return new Promise((resolve, reject) => {
      resolve(LOADED_SCRIPTS[url]);
    });
  }

  LOADED_SCRIPTS[url] = new Promise((resolve, reject) => {
    try {
      append(Script_element(url)).addEventListener('load', event => {
        resolve(LOADED_SCRIPTS[url] = event);
      });
    } catch (e) {
      reject(e);
    }
  });
  return LOADED_SCRIPTS[url];
}
// CONCATENATED MODULE: ./src/Helpers/Script/index.js

/* harmony default export */ var Script = (script);
// CONCATENATED MODULE: ./src/Helpers/ScrollTo/ScrollTo.js
const easings = {
  linear(t) {
    return t;
  },

  easeInQuad(t) {
    return t * t;
  },

  easeOutQuad(t) {
    return t * (2 - t);
  },

  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },

  easeInCubic(t) {
    return t * t * t;
  },

  easeOutCubic(t) {
    return --t * t * t + 1;
  },

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },

  easeInQuart(t) {
    return t * t * t * t;
  },

  easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },

  easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },

  easeInQuint(t) {
    return t * t * t * t * t;
  },

  easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },

  easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }

};
function scrollTo(destination, duration = 1000, easing = 'easeInQuad', viewport = false) {
  if (!viewport) {
    viewport = document.querySelector('body');
  }

  const viewportBounds = viewport.getBoundingClientRect();
  const destinationBounds = destination.getBoundingClientRect();
  const destinationOffsetToScroll = Math.ceil(destinationBounds.top + document.documentElement.scrollTop);

  function isScrollBottom() {
    return document.documentElement.scrollTop >= Math.floor(viewportBounds.height) - window.innerHeight;
  }

  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    const isStartingBottom = isScrollBottom();

    function scroll() {
      const start = document.documentElement.scrollTop;
      const time = Math.min(1, (performance.now() - startTime) / duration);
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

      if (document.documentElement.scrollTop === destinationOffsetToScroll || isScrollBottom() && !isStartingBottom) {
        resolve();
        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  });
}
// CONCATENATED MODULE: ./src/Helpers/ScrollTo/index.js

/* harmony default export */ var ScrollTo = (scrollTo);
// CONCATENATED MODULE: ./src/Helpers/Wait/Wait.js

const CALLBACKS = {};

function id(callback) {
  return findKey_findIndex(CALLBACKS, compare => {
    return callback.toString() === compare.toString();
  });
}

function restart(callback, milliseconds) {
  Wait_stop(id(callback));
  Wait_start(callback, milliseconds);
}

function Wait_stop(id) {
  clearTimeout(id);
  delete CALLBACKS[id];
}

function Wait_start(callback, milliseconds) {
  CALLBACKS[setTimeout(callback, milliseconds)] = callback;
}

function Wait_wait(milliseconds, callback) {
  return new Promise((resolve, reject) => {
    function resolver(resolver, response) {
      return resolver(response);
    }

    ;
    restart(wrap(callback, callback => {
      return callback(wrap(resolve, resolver), wrap(reject, resolver));
    }), milliseconds);
  });
}
// CONCATENATED MODULE: ./src/Helpers/Wait/index.js

/* harmony default export */ var Wait = (Wait_wait);
// CONCATENATED MODULE: ./src/Helpers/index.js














// CONCATENATED MODULE: ./src/Http/index.js




// CONCATENATED MODULE: ./src/Mixins/Screenreaders/index.js

/* harmony default export */ var Mixins_Screenreaders = (Screenreaders);
// CONCATENATED MODULE: ./src/Mixins/index.js










// CONCATENATED MODULE: ./src/Plugins/Modal/Modal.js



/* harmony default export */ var Modal_Modal = (function (Vue, options) {
  Vue.prototype.$modal = function (Component, options) {
    if (!isObject(options)) {
      options = {};
    }

    const instance = Instantiate(Vue, Components_Modal, deepExtend({
      propsData: {
        show: true
      }
    }, options.modal));
    instance.$content = Instantiate(Vue, Component, options.content);
    instance.$slots.default = [instance.$content.$mount()._vnode];
    instance.$mount(document.body.appendChild(document.createElement('div')));

    if (options.content && options.content.on) {
      each(options.content.on, (fn, key) => {
        instance.$content.$on(key, fn);
      });
    }

    return instance;
  };

  Vue.prototype.$alert = function (title, Component, options) {
    return new Promise((resolve, reject) => {
      const modal = this.$modal(Component, deepExtend({
        modal: {
          propsData: {
            title: title,
            type: 'alert'
          }
        }
      }, options));
      modal.$on('confirm', event => {
        modal.close();
      });
      modal.$on('close', event => {
        resolve(modal);
      });
    });
  };

  Vue.prototype.$confirm = function (title, Component, options) {
    return new Promise((resolve, reject) => {
      const modal = this.$modal(Component || title, deepExtend({
        modal: {
          propsData: {
            title: Component ? title : null,
            type: 'confirm'
          }
        }
      }, options));
      modal.$on('cancel', event => {
        reject(modal);
      });
      modal.$on('confirm', event => {
        resolve(modal.close());
      });
    });
  };

  Vue.prototype.$prompt = function (title, Component, options, predicate) {
    return new Promise((resolve, reject) => {
      if (isFunction(options)) {
        predicate = options;
        options = {};
      } else if (isObject(options) && isFunction(options.predicate)) {
        predicate = options.predicate;
      } else if (!isFunction(predicate)) {
        predicate = () => true;
      }

      const modal = this.$modal(Component, deepExtend({
        modal: {
          propsData: {
            title: title,
            type: 'prompt'
          }
        }
      }, options));
      modal.$on('cancel', event => {
        reject(modal);
      });
      modal.$on('confirm', event => {
        const succeed = () => resolve(modal.close());

        const fail = () => reject(modal.close());

        if (predicate(modal, succeed, fail) === true) {
          succeed();
        }
      });
    });
  };
});
// CONCATENATED MODULE: ./src/Plugins/Modal/index.js

/* harmony default export */ var Plugins_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./src/Plugins/Overlay/Overlay.js



/* harmony default export */ var Overlay_Overlay = (function (Vue, options) {
  Vue.prototype.$overlay = function (target, Component, options) {
    if (!isObject(options)) {
      options = {};
    }

    if (!target.$overlay) {
      target.$overlay = Instantiate(Vue, Components_Overlay, deepExtend(options.overlay, {
        propsData: {
          target: target
        }
      }));
      target.$overlay.$mount(document.body.appendChild(document.createElement('div')));
      target.$overlay.$content = Instantiate(Vue, Component, options.content);
      target.$overlay.$slots.default = [target.$overlay.$content.$mount()._vnode];
      target.$overlay.$nextTick(() => {
        target.$overlay.open();
      });
    }

    return target.$overlay;
  };
});
// CONCATENATED MODULE: ./src/Plugins/Overlay/index.js

/* harmony default export */ var Plugins_Overlay = (Overlay_Overlay);
// CONCATENATED MODULE: ./src/Plugins/Popover/Popover.js



/* harmony default export */ var Popover_Popover = (function (Vue, options) {
  Vue.prototype.$popover = function (target, Component, options) {
    if (!isObject(options)) {
      options = {};
    }

    if (!target.$popover) {
      target.$popover = Instantiate(Vue, Components_Popover, deepExtend(options.popover, {
        propsData: {
          target: target
        }
      }));
      target.$popover.$mount(document.body.appendChild(document.createElement('div')));
      const content = Instantiate(Vue, Component, options.content);
      target.$popover.$slots.default = [content.$mount()._vnode];
      target.$popover.$nextTick(() => {
        target.$popover.open();
      });
    }

    return target.$popover;
  };
});
// CONCATENATED MODULE: ./src/Plugins/Popover/index.js

/* harmony default export */ var Plugins_Popover = (Popover_Popover);
// CONCATENATED MODULE: ./src/Plugins/index.js




// CONCATENATED MODULE: ./src/install.js









function install(Vue) {
  each(Components_namespaceObject, (component, key) => {
    Vue.component(key, component);
  });
  each(Directives_namespaceObject, (directive, key) => {
    Vue.directive(key, directive);
  });
  each(Filters_namespaceObject, (filter, key) => {
    Vue.filter(key, filter);
  });
  each(Plugins_namespaceObject, plugin => {
    Vue.use(plugin);
  });
}

if (window && window.Vue) {
  window.Vue.use(install);
}

/* harmony default export */ var src_install = ({
  Components: Components_namespaceObject,
  Directives: Directives_namespaceObject,
  Filters: Filters_namespaceObject,
  Helpers: Helpers_namespaceObject,
  Http: Http_namespaceObject,
  Mixins: Mixins_namespaceObject,
  Plugins: Plugins_namespaceObject
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_install);



/***/ }),

/***/ "fdc9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fe24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBtnGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7315");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBtnGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBtnGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBtnGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ })["default"];
//# sourceMappingURL=VueInterface.common.js.map