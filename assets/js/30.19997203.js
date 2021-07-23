(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1688:function(e,o,t){"use strict";t.r(o);var s=t(26),r=Object(s.a)({},(function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"compression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),s("p",[e._v("The Compression node is useful to compress and decompress files. You can either use the "),s("code",[e._v("gzip")]),e._v(" or "),s("code",[e._v("zip")]),e._v(" file format.")]),e._v(" "),s("h2",{attrs:{id:"node-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),s("ul",[s("li",[e._v("Operations\n"),s("ul",[s("li",[e._v("Compress")]),e._v(" "),s("li",[e._v("Decompress")])])]),e._v(" "),s("li",[e._v("Options\n"),s("ul",[s("li",[s("em",[s("strong",[e._v("Binary Property")])]),e._v(" field: This field allows you to specify the name of the binary property")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Output Prefix")])]),e._v(" field: This field allows you to specify a prefix for the name of the file that gets generated. This field gets displayed for the 'Decompress' operation and the 'gzip' output format for the 'Compress' operation")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Output Format")])]),e._v(" field: This field allows you to select an output format. This field is displayed when 'Compress' gets selected from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list. The following are the available formats:\n"),s("ul",[s("li",[e._v("gzip")]),e._v(" "),s("li",[e._v("zip")])])]),e._v(" "),s("li",[s("em",[s("strong",[e._v("File Name")])]),e._v(" field: This field allows you to specify a file name. This field is displayed when 'zip' gets selected from the "),s("em",[s("strong",[e._v("Output Format")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Binary Property Output")])]),e._v(" field: This field allows you to specify a name for the file that gets generated. This field is displayed when 'zip' gets selected from the "),s("em",[s("strong",[e._v("Output Format")])]),e._v(" dropdown list.")])])])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to compress binary files to zip format and upload them to Dropbox. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/908",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Compression")])]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Dropbox/"}},[e._v("Dropbox")])],1)]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(632),alt:"A workflow with the Edit Image node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-http-request-node-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),s("p",[e._v("This example workflow uses the HTTP Request node to fetch an image from a URL. You can also use the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node to read a file from the path you specify.")],1),e._v(" "),s("ol",[s("li",[e._v("Enter the URL of the image in the "),s("em",[s("strong",[e._v("URL")])]),e._v(" field. For example, "),s("code",[e._v("https://docs.n8n.io/assets/img/final-workflow.f380b957.png")]),e._v(".")]),e._v(" "),s("li",[e._v("Select 'File' from the "),s("em",[s("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("workflow_image")]),e._v(" in the "),s("em",[s("strong",[e._v("Binary Property")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the HTTP Request node fetches the image from the URL. This image gets passed on as binary data to the next node in the workflow.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(633),alt:"Using the HTTP Request node to fetch an image from a URL"}})]),e._v(" "),s("h3",{attrs:{id:"_3-http-request1-node-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request1-node-get"}},[e._v("#")]),e._v(" 3. HTTP Request1 node (GET)")]),e._v(" "),s("p",[e._v("This node fetches an image from a URL. You can also use the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node to read a file from the path you specify.")],1),e._v(" "),s("ol",[s("li",[e._v("Enter the URL of the image in the "),s("em",[s("strong",[e._v("URL")])]),e._v(" field. For example, "),s("code",[e._v("https://n8n.io/n8n-logo.png")]),e._v(".")]),e._v(" "),s("li",[e._v("Select 'File' from the "),s("em",[s("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("logo")]),e._v(" in the "),s("em",[s("strong",[e._v("Binary Property")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the HTTP Request node fetches the image from the URL. This image gets passed on as binary data to the next node in the workflow.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(634),alt:"Using the HTTP Request node to fetch an image from a URL"}})]),e._v(" "),s("h3",{attrs:{id:"_4-compression-node-compress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-compression-node-compress"}},[e._v("#")]),e._v(" 4. Compression node (compress)")]),e._v(" "),s("p",[e._v("This node compresses the binary file that we received from the HTTP Request nodes in a zip file. If you want to compress them in "),s("code",[e._v("gzip")]),e._v(" format, select that option instead.")]),e._v(" "),s("ol",[s("li",[e._v("Select 'Compress' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("logo,workflow_image")]),e._v(" in the "),s("em",[s("strong",[e._v("Binary Property")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Select 'zip' from the "),s("em",[s("strong",[e._v("Output Format")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("images.zip")]),e._v(" in the "),s("em",[s("strong",[e._v("File Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the node compresses the files and generates "),s("code",[e._v("images.zip")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:t(635),alt:"Using the Compression node to compress files"}})]),e._v(" "),s("h3",{attrs:{id:"_5-dropbox-node-upload-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-dropbox-node-upload-file"}},[e._v("#")]),e._v(" 5. Dropbox node (upload: file)")]),e._v(" "),s("p",[e._v("This node will upload the compressed file to your Dropbox account.")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Dropbox node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Dropbox/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("/images.zip")]),e._v(" in the "),s("em",[s("strong",[e._v("File Path")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Toggle "),s("em",[s("strong",[e._v("Binary Data")])]),e._v(" to "),s("code",[e._v("true")]),e._v(". This option allows us to upload binary data from the previous node.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the node uploads the compressed file that we generated in the previous node.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(636),alt:"Using the Dropbox node to upload a file"}})])])}),[],!1,null,null,null);o.default=r.exports},632:function(e,o,t){e.exports=t.p+"assets/img/workflow.0c2509fa.png"},633:function(e,o,t){e.exports=t.p+"assets/img/HTTPRequest_node.c2ddbb72.png"},634:function(e,o,t){e.exports=t.p+"assets/img/HTTPRequest1_node.390d7cd1.png"},635:function(e,o,t){e.exports=t.p+"assets/img/Compression_node.52f2a6b1.png"},636:function(e,o,t){e.exports=t.p+"assets/img/Dropbox_node.42a6bb0f.png"}}]);