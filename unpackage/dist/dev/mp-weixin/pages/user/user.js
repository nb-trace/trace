require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{15:function(t,s,e){"use strict";var i=n(e(1)),a=n(e(16));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},16:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(18),a=e.n(i),n=e(19),l=!1;var r=function(t){l||e(17)},o=e(0)(a.a,n.a,r,null,null);o.options.__file="..\\..\\..\\Projects\\uni-app\\QrcodeManager\\pages\\user\\user.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions."),s.default=o.exports},17:function(t,s){},18:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{login:!1,avatarUrl:"../../static/images/headimg.png",uerInfo:{}}},methods:{goLogin:function(){this.login||console.log("点击前往登录")}}}},19:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"center"},[e("view",{staticClass:"logo",attrs:{"hover-class":t.login?"":"logo-hover",eventid:"hwq-0"},on:{click:t.goLogin}},[e("image",{staticClass:"logo-img",attrs:{src:t.login?t.uerInfo.avatarUrl:t.avatarUrl}}),e("view",{staticClass:"logo-title"},[e("text",{staticClass:"uer-name"},[t._v("Hi，"+t._s(t.login?t.uerInfo.name:"您未登录"))]),t.login?t._e():e("text",{staticClass:"go-login navigat-arrow"},[t._v("")])])]),t._m(0),t._m(1),t._m(2)])};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item border-bottom"},[s("text",{staticClass:"list-icon"},[this._v("")]),s("text",{staticClass:"list-text"},[this._v("帐号管理")]),s("text",{staticClass:"navigat-arrow"},[this._v("")])]),s("view",{staticClass:"center-list-item"},[s("text",{staticClass:"list-icon"},[this._v("")]),s("text",{staticClass:"list-text"},[this._v("新消息通知")]),s("text",{staticClass:"navigat-arrow"},[this._v("")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item border-bottom"},[s("text",{staticClass:"list-icon"},[this._v("")]),s("text",{staticClass:"list-text"},[this._v("帮助与反馈")]),s("text",{staticClass:"navigat-arrow"},[this._v("")])]),s("view",{staticClass:"center-list-item"},[s("text",{staticClass:"list-icon"},[this._v("")]),s("text",{staticClass:"list-text"},[this._v("服务条款及隐私")]),s("text",{staticClass:"navigat-arrow"},[this._v("")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item"},[s("text",{staticClass:"list-icon"},[this._v("")]),s("text",{staticClass:"list-text"},[this._v("关于应用")]),s("text",{staticClass:"navigat-arrow"},[this._v("")])])])}]};s.a=a}},[15]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map