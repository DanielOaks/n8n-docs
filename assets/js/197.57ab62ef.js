(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1445:function(t,e,n){"use strict";n.r(e);var a=n(115),r=(n(50),n(51),n(74),n(27),n(192),n(191),n(326),n(76),n(71),n(328)),s={notionOAuth2Api:"n8n-nodes-base.notion",twakeServerApi:"n8n-nodes-base.twake"};Object.keys(s).forEach((function(t){var e=s[t];r.nodes[e]&&(s[t]=r.nodes[e])}));var i={methods:{filterCreds:function(t){if(Object.keys(t.codex).length&&t.codex.data.resources.credentialDocumentation)return t},checkCreds:function(t){return t.filter(this.filterCreds)}},computed:{credentialPages:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/credentials/")}))}},data:function(){var t=Object.values(r.nodes).reduce((function(t,e){return e.credentials?(e.credentials.forEach((function(n){t[n.name]||(t[n.name]=e)})),t):t}),{});return t=Object(a.a)(Object(a.a)({},t),s),{items:[],creds:Object.values(r.credentials).reduce((function(e,n){var a="/credentials/".concat(n.documentationUrl||n.name,"/").toLowerCase(),r=t[n.name];return r||(console.log("Could not find node relevant to cred",n.name),r={displayName:n.name}),e[a]={name:n.name,displayName:n.displayName,node:r,path:a},e}),{})}},mounted:function(){var t=this,e=this.credentialPages.filter((function(e){return!!t.$data.creds[e.path.toLowerCase()]||(console.log("Could not find cred for page",e.title,e.path),!1)})).map((function(e){return Object(a.a)(Object(a.a)({},t.$data.creds[e.path.toLowerCase()]),{},{displayName:e.title,path:e.path})}));this.$data.items=e}},o=n(26),c=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#credentials"}},[this._v("#")]),this._v(" Credentials")]),this._v(" "),e("p",[this._v("This section contains step-by-step information about authenticating the different nodes in n8n.")]),this._v(" "),e("CredCards",{attrs:{items:this.items}})],1)}),[],!1,null,null,null);e.default=c.exports},326:function(t,e,n){var a=n(1),r=n(327).values;a({target:"Object",stat:!0},{values:function(t){return r(t)}})},327:function(t,e,n){var a=n(6),r=n(49),s=n(12),i=n(73).f,o=function(t){return function(e){for(var n,o=s(e),c=r(o),u=c.length,d=0,l=[];u>d;)n=c[d++],a&&!i.call(o,n)||l.push(t?[n,o[n]]:o[n]);return l}};t.exports={entries:o(!0),values:o(!1)}}}]);