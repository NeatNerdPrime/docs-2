(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{166:function(t,s,o){"use strict";o.r(s);var e=o(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),o("h2",{attrs:{id:"horizon-is-not-working"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#horizon-is-not-working","aria-hidden":"true"}},[t._v("#")]),t._v(" Horizon is not working")]),t._v(" "),o("p",[t._v("This means that your permissions are wrong somewhere. Make sure that you have run "),o("code",[t._v("php artisan horizon")]),t._v(" as a user that has access to both your repo and to Redis.")]),t._v(" "),o("h2",{attrs:{id:"horizon-seems-to-be-working-but-it-s-still-showing-as-inactive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#horizon-seems-to-be-working-but-it-s-still-showing-as-inactive","aria-hidden":"true"}},[t._v("#")]),t._v(" Horizon seems to be working, but it's still showing as inactive.")]),t._v(" "),o("p",[t._v("Run either "),o("code",[t._v("php artisan package:discover")]),t._v(" or "),o("code",[t._v("composer install")]),t._v(", then run "),o("code",[t._v("php artisan horizon:install")]),t._v(" and "),o("code",[t._v("php artisan horizon:assets")]),t._v(" then "),o("code",[t._v("php artisan route:cache")]),t._v(". Restart your systemd service or restart Horizon. It should now show as active.")])])}],!1,null,null,null);i.options.__file="troubleshooting.md";s.default=i.exports}}]);