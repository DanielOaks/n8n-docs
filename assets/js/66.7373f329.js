(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1431:function(t,e,n){var a=n(1),s=n(1432);a({target:"Array",proto:!0,forced:s!==[].lastIndexOf},{lastIndexOf:s})},1432:function(t,e,n){"use strict";var a=n(12),s=n(53),c=n(15),r=n(34),i=Math.min,o=[].lastIndexOf,u=!!o&&1/[1].lastIndexOf(1,-0)<0,f=r("lastIndexOf"),l=u||!f;t.exports=l?function(t){if(u)return o.apply(this,arguments)||0;var e=a(this),n=c(e.length),r=n-1;for(arguments.length>1&&(r=i(r,s(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}:o},1433:function(t,e,n){"use strict";n(360)},1452:function(t,e,n){"use strict";n.r(e);var a,s=n(68),c=(n(111),n(11),n(33),n(72),n(37),n(1431),n(75),{data:function(){return{submitted:!1,message:"",url:"https://internal.users.n8n.cloud/webhook/d1b83b83-e584-45fe-a28c-a12a4272e472"}},watch:{$route:function(t,e){this.submitted=!1}},methods:{submitFeedback:(a=Object(s.a)(regeneratorRuntime.mark((function t(e){var n,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.submitted||(n=this.$page.path,fetch("https://www.cloudflare.com/cdn-cgi/trace",{headers:{"Content-Type":"text/plain; charset=uft-8"}}).then((function(t){return t.text()})).then((function(t){var s=t.replace(/[\r\n]+/g,'","').replace(/\=+/g,'":"');s='{"'+s.slice(0,s.lastIndexOf('","'))+'"}';var c=JSON.parse(s);fetch("".concat(a.url,"?feedback=").concat(e,"&path=").concat(n,"&ip=").concat(c.ip),{method:"GET"}).then((function(t){return a.submitted=!0,t.json()})).then((function(t){t.message&&(a.message=t.message)})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})}}),r=(n(1433),n(26)),i=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-nav"},[n("div",{staticClass:"text"},[t._v("Was this page helpful?")]),t._v(" "),t.submitted?n("div",[n("p",{staticStyle:{color:"#767676","margin-top":"0","font-size":"0.9em"}},[t._v(t._s(t.message))])]):n("div",[n("font-awesome-icon",{staticClass:"btn",staticStyle:{"margin-bottom":"7px"},attrs:{icon:"thumbs-up"},on:{click:function(e){return t.submitFeedback(1)}}}),t._v(" "),n("font-awesome-icon",{staticClass:"btn",staticStyle:{"margin-top":"7px"},attrs:{icon:"thumbs-down"},on:{click:function(e){return t.submitFeedback(-1)}}})],1)])}),[],!1,null,"7fadaef2",null);e.default=i.exports},360:function(t,e,n){}}]);