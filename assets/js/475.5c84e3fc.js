(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{1496:function(e,n,t){"use strict";t.r(n);var o=t(26),s=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"using-the-node-dev-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-node-dev-cli"}},[e._v("#")]),e._v(" Using the Node Dev CLI")]),e._v(" "),t("p",[e._v("Using the Node Dev CLI makes sense if you do not want to ever share the node that you create. For example, for internal systems or something very specific to your internal tooling. Also, the CLI only works if there are no additional dependencies required by the node as it does not support installing additional node modules.")]),e._v(" "),t("p",[e._v("If that is not the case, it is best to do follow the "),t("RouterLink",{attrs:{to:"/nodes/creating-nodes/create-node.html"}},[e._v("creating your first node")]),e._v(" tutorial or create your own custom node-package.")],1),e._v(" "),t("h2",{attrs:{id:"create-the-first-basic-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-first-basic-node"}},[e._v("#")]),e._v(" Create the first basic node")]),e._v(" "),t("ol",[t("li",[e._v("Install the n8n-node-dev CLI: "),t("code",[e._v("npm install -g n8n-node-dev")])]),e._v(" "),t("li",[e._v("Create and go into the newly created folder in which you want to keep the code of the node")]),e._v(" "),t("li",[e._v("Use CLI to create boilerplate node code: "),t("code",[e._v("n8n-node-dev new")])]),e._v(" "),t("li",[e._v("Answer the questions (the “Execute” node type is the regular node type that you probably want to create).\nIt will then create the node in the current folder.")]),e._v(" "),t("li",[e._v("Program… Add the functionality to the node")]),e._v(" "),t("li",[e._v("Build the node and copy to correct location: "),t("code",[e._v("n8n-node-dev build")]),e._v("\nThat command will build the JavaScript version of the node from the TypeScript code and copy it to the user folder where custom nodes get read from "),t("code",[e._v("~/.n8n/custom/")])]),e._v(" "),t("li",[e._v("Restart n8n and refresh the window so that the new node gets displayed")])]),e._v(" "),t("h2",{attrs:{id:"create-own-custom-n8n-nodes-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-own-custom-n8n-nodes-module"}},[e._v("#")]),e._v(" Create own custom n8n-nodes-module")]),e._v(" "),t("p",[e._v("If you want to create multiple custom nodes which are either:")]),e._v(" "),t("ul",[t("li",[e._v("Only for yourself/your company")]),e._v(" "),t("li",[e._v("Are only useful for a small number of people")]),e._v(" "),t("li",[e._v("Require many or large dependencies")])]),e._v(" "),t("p",[e._v("It is best to create your own "),t("code",[e._v("n8n-nodes-module")]),e._v(" which can be installed separately.\nThat is an npm package that contains the nodes and is set up in a way\nthat n8n can automatically find and load them on startup.")]),e._v(" "),t("p",[e._v("When creating such a module the following rules have to be followed that n8n\ncan automatically find the nodes in the module:")]),e._v(" "),t("ul",[t("li",[e._v("The name of the module has to start with "),t("code",[e._v("n8n-nodes-")])]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("package.json")]),e._v(" file has to contain a key "),t("code",[e._v("n8n")]),e._v(" with the paths to nodes and credentials")]),e._v(" "),t("li",[e._v("The module has to be installed alongside n8n")])]),e._v(" "),t("p",[e._v("An example starter module which contains one node and credentials and implements\nthe above can be found here:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/n8n-io/n8n-nodes-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/n8n-io/n8n-nodes-starter"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"setup-to-use-n8n-nodes-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-to-use-n8n-nodes-module"}},[e._v("#")]),e._v(" Setup to use n8n-nodes-module")]),e._v(" "),t("p",[e._v("To use a custom "),t("code",[e._v("n8n-nodes-module")]),e._v(", it needs to be installed alongside n8n.\nFor example like this:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create folder for n8n installation")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" my-n8n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" my-n8n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install n8n")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" n8n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install custom nodes module")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" n8n-nodes-my-custom-nodes\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start n8n")]),e._v("\nn8n\n")])])]),t("h3",{attrs:{id:"development-testing-of-custom-n8n-nodes-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-testing-of-custom-n8n-nodes-module"}},[e._v("#")]),e._v(" Development/Testing of custom n8n-nodes-module")]),e._v(" "),t("p",[e._v("This works in the same way as for any other npm module.")]),e._v(" "),t("p",[e._v("Execute in the folder which contains the code of the custom "),t("code",[e._v("n8n-nodes-module")]),e._v("\nwhich should be loaded with n8n:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Build the code")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# "Publish" the package locally')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n")])])]),t("p",[e._v("Then in the folder in which n8n is installed:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# "Install" the above locally published module')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" n8n-nodes-my-custom-nodes\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start n8n")]),e._v("\nn8n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);