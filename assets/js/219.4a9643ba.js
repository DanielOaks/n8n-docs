(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1453:function(e,t,n){"use strict";n.r(t);n(33),n(334);var i=n(328),l={data:function(){return{items:[]}},beforeMount:function(){var e=this.$page.path.split("/"),t=e[e.length-2],n=i.nodes[t],l=[];n&&n.codex&&(l=n.codex.data.resources.generic),this.$data.items=l}},r=n(26),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.items,(function(t){return n("li",{key:t.label},[n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.label)+" "+e._s(t.icon))])])})),0)}),[],!1,null,null,null);t.default=s.exports},334:function(e,t,n){"use strict";var i=n(180),l=n(178),r=n(7),s=n(21),u=n(104),a=n(181),c=n(15),o=n(182),h=n(77),g=n(179),p=n(2),f=g.UNSUPPORTED_Y,d=[].push,v=Math.min;i("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(s(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!l(e))return t.call(i,e,r);for(var u,a,c,o=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,f=new RegExp(e.source,g+"g");(u=h.call(f,i))&&!((a=f.lastIndex)>p&&(o.push(i.slice(p,u.index)),u.length>1&&u.index<i.length&&d.apply(o,u.slice(1)),c=u[0].length,p=a,o.length>=r));)f.lastIndex===u.index&&f.lastIndex++;return p===i.length?!c&&f.test("")||o.push(""):o.push(i.slice(p)),o.length>r?o.slice(0,r):o}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var l=s(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,l,n):i.call(String(l),t,n)},function(e,l){var s=n(i,this,e,l,i!==t);if(s.done)return s.value;var h=r(this),g=String(e),p=u(h,RegExp),d=h.unicode,x=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(f?"g":"y"),b=new p(f?"^(?:"+h.source+")":h,x),m=void 0===l?4294967295:l>>>0;if(0===m)return[];if(0===g.length)return null===o(b,g)?[g]:[];for(var w=0,_=0,y=[];_<g.length;){b.lastIndex=f?0:_;var k,I=o(b,f?g.slice(_):g);if(null===I||(k=v(c(b.lastIndex+(f?_:0)),g.length))===w)_=a(g,_,d);else{if(y.push(g.slice(w,_)),y.length===m)return y;for(var E=1;E<=I.length-1;E++)if(y.push(I[E]),y.length===m)return y;_=w=k}}return y.push(g.slice(w)),y}]}),!!p((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),f)}}]);