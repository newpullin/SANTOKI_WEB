(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],f=0,v=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={notice_detail:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([6,"chunk-vendors"]),a()})({"402c":function(t,e,a){"use strict";var n=a("2b0e"),r=a("f309");n["a"].use(r["a"]),e["a"]=new r["a"]({})},6:function(t,e,a){t.exports=a("c350")},"7ca1":function(t,e,a){"use strict";a("a545")},"8f53":function(t,e,a){"use strict";a("9a5f")},"9a5f":function(t,e,a){},a545:function(t,e,a){},add6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{fixed:"",app:""}},[a("v-btn",{staticClass:"ma-2",attrs:{text:"",href:"/"}},[t._v(" Santoki ")]),a("v-btn",{staticClass:"ma-2",attrs:{text:"",href:"/rabbit/"}},[a("v-icon",{staticClass:"ma-1",attrs:{large:"",color:"green darken-2"}},[t._v(" mdi-rabbit ")]),t._v(" Rabbit ")],1),a("v-btn",{staticClass:"ma-2",attrs:{text:"",href:"/carrot/"}},[a("v-icon",{staticClass:"ma-1",attrs:{large:"",color:"red lighten-2"}},[t._v(" mdi-carrot ")]),t._v(" Carrot ")],1),a("v-btn",{staticClass:"ma-2",attrs:{text:"",href:"/dbox/"}},[t._v(" D-box ")]),a("v-btn",{staticClass:"ma-2",attrs:{text:"",href:"/about/"}},[t._v(" About ")]),a("v-btn",{staticClass:"ma-2",attrs:{text:"",href:"/notice/list/"}},[t._v(" Notice ")]),a("v-btn",{staticClass:"ma-2",attrs:{text:"",href:"https://shopping.naver.com/"}},[a("v-icon",{staticClass:"ma-1",attrs:{large:"",color:"red lighten-3"}},[t._v(" mdi-gift ")]),t._v(" Shop ")],1),a("v-spacer")],1)],1)},r=[],i={data:function(){return{}}},o=i,s=(a("8f53"),a("2877")),c=a("6544"),l=a.n(c),u=a("40dc"),f=a("8336"),v=a("132d"),d=a("2fa4"),p=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=p.exports;l()(p,{VAppBar:u["a"],VBtn:f["a"],VIcon:v["a"],VSpacer:d["a"]})},c350:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("MainMenu"),a("v-main",[a("NoticeDetail")],1),a("Footer",{attrs:{fluid:""}})],1)},i=[],o=a("add6"),s=a("fd2d"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h1",[t._v(t._s(t.notice.title))])]),a("v-col",{staticClass:"text-right"},[a("p",[t._v(t._s(t.notice.modify_dt))])])],1),a("v-divider"),a("v-row",{staticClass:"mt-6",attrs:{align:"start",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"pa-4",attrs:{"min-height":"500px",outlined:"",tile:""}},[a("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.notice.content))])])],1),a("v-col",{staticClass:"mb-0",attrs:{cols:"12"}},[a("v-card",{staticClass:"pa-2 mb-0"},[t.notice.prev.title?a("p",{staticClass:"my-hover",attrs:{tile:""},on:{click:function(e){return e.stopPropagation(),t.fetchPostDetail(t.notice.prev.id)}}},[a("strong",[t._v("이전")]),t._v(" "+t._s(t.notice.prev.title)+" ")]):t._e()])],1),a("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[a("v-card",{staticClass:"pa-2 mt-0",attrs:{tile:""}},[t.notice.next.title?a("p",{staticClass:"my-hover",on:{click:function(e){return e.stopPropagation(),t.fetchPostDetail(t.notice.next.id)}}},[a("strong",[t._v("다음")]),t._v(" "+t._s(t.notice.next.title)+" ")]):t._e()])],1)],1),a("v-btn",{staticClass:"my-4",attrs:{text:"",href:"/notice/list/",outlined:""}},[t._v(" 목록 ")])],1)},l=[],u=(a("ac1f"),a("1276"),a("bc3a")),f=a.n(u),v={data:function(){return{notice:{}}},created:function(){console.log("created()...");var t=location.pathname.split("/")[2];this.fetchPostDetail(t)},methods:{fetchPostDetail:function(t){var e=this;console.log("fetchPostDetail()...",t),f.a.get("/api/notice/".concat(t,"/")).then((function(t){console.log("POST DETAIL GET RES",t),e.notice=t.data})).catch((function(t){console.log("POST DETAIL GET ERR",t.response),alert(t.response.status+" "+t.response.statusText)}))}}},d=v,p=(a("7ca1"),a("2877")),h=a("6544"),b=a.n(h),_=a("8336"),m=a("b0af"),g=a("62ad"),x=a("a523"),C=a("ce7e"),y=a("0fd9"),w=Object(p["a"])(d,c,l,!1,null,"2fc0d3ad",null),V=w.exports;b()(w,{VBtn:_["a"],VCard:m["a"],VCol:g["a"],VContainer:x["a"],VDivider:C["a"],VRow:y["a"]});var O={components:{MainMenu:o["a"],Footer:s["a"],NoticeDetail:V},data:function(){return{}},created:function(){}},P=O,j=a("7496"),D=a("f6c4"),S=Object(p["a"])(P,r,i,!1,null,null,null),k=S.exports;b()(S,{VApp:j["a"],VMain:D["a"]});var T=a("402c");n["a"].config.productionTip=!1,new n["a"]({vuetify:T["a"],render:function(t){return t(k)}}).$mount("#app")},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-card",{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1),a("v-card-text",{staticClass:"white--text pt-1"},[t._v(" 산토끼 - 작고 빠른 IoT 시스템"),a("br"),t._v(" KostaEdu 경기도 성남시 분당구 삼평동 대왕판교로 670길 (삼평동 682번지) 유스페이스2 B동 8층"),a("br"),t._v(" 포트폴리오 용입니다. 이메일 newpullin@naver.com ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" Copylight ©"+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Santoki")])])],1)],1)],1)},r=[],i={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},o=i,s=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),f=a("b0af"),v=a("99d9"),d=a("a523"),p=a("ce7e"),h=a("553a"),b=a("132d"),_=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=_.exports;l()(_,{VBtn:u["a"],VCard:f["a"],VCardText:v["a"],VContainer:d["a"],VDivider:p["a"],VFooter:h["a"],VIcon:b["a"]})}});
//# sourceMappingURL=notice_detail.9025c08b.js.map