(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1708:function(e,t,o){"use strict";o.r(t);var a=o(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"move-binary-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#move-binary-data"}},[e._v("#")]),e._v(" Move Binary Data")]),e._v(" "),a("p",[e._v("The Move Binary Data node is useful to move data between binary and JSON properties.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Hint")]),e._v(" "),a("p",[e._v("If you need to convert an entire CSV file to JSON, use the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/SpreadsheetFile/"}},[e._v("Spreadsheet File")]),e._v(" node.")],1)]),e._v(" "),a("h2",{attrs:{id:"node-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[a("strong",[e._v("Mode:")])]),e._v(" This field specifies from where and to the data should be moved.")]),e._v(" "),a("ul",[a("li",[e._v("Binary to JSON")]),e._v(" "),a("li",[e._v("JSON to Binary")])])]),e._v(" "),a("li",[a("p",[a("em",[a("strong",[e._v("Set all Data:")])]),e._v(" If set to active, all JSON data is replaced with the data retrieved from binary key. If it is not set to active, the data will be written to a single key. This field is displayed when 'Binary to JSON' is selected from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.")])]),e._v(" "),a("li",[a("p",[a("em",[a("strong",[e._v("Source Key:")])]),e._v(" The name of the binary key to get data from. It is also possible to define deep keys by using dot-notation. For example, \"level1.level2.currentKey\". This field is displayed when 'Binary to JSON' is selected from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.")])]),e._v(" "),a("li",[a("p",[a("em",[a("strong",[e._v("Destination Key:")])]),e._v(" The name the JSON key to copy data to. It is also possible to define deep keys by using dot-notation. For example, \"level1.level2.newKey\". This field is displayed when 'Binary to JSON' is selected from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.")])]),e._v(" "),a("li",[a("p",[a("em",[a("strong",[e._v("Convert all Data:")])]),e._v(" If set to active all JSON data will be converted to binary. If it is not set to active only the data with one key will be converted. This field is displayed when 'JSON to Binary' is selected from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.")])]),e._v(" "),a("li",[a("p",[a("em",[a("strong",[e._v("Destination Key:")])]),e._v(" The name of the binary key to copy data to. It is also possible to define deep keys by using dot-notation. For example, \"level1.level2.newKey\". This field is displayed when 'JSON to Binary' is selected from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.")])]),e._v(" "),a("li",[a("p",[a("em",[a("strong",[e._v("Options")])])]),e._v(" "),a("ul",[a("li",[a("em",[a("strong",[e._v("Keep Source:")])]),e._v(" Keep the source key. By default it gets deleted.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("Encoding:")])]),e._v(" Set the encoding of the data stream.")]),e._v(" "),a("li",[e._v("The following are the options when 'Binary to JSON' is selected from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.\n"),a("ul",[a("li",[a("em",[a("strong",[e._v("JSON Parse:")])]),e._v(" Run JSON parse on the data to get proper object data. This field is displayed when "),a("em",[a("strong",[e._v("Set all Data")])]),e._v(" is set to 'false'.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("Keep As Base64:")])]),e._v(" Keeps the binary data as base64 string. This field is displayed when "),a("em",[a("strong",[e._v("Set all Data")])]),e._v(" is set to 'false'.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("Strip BOM:")])]),e._v(" Strip the byte order mark (BOM) from the string. This field is displayed when "),a("em",[a("strong",[e._v("Encoding")])]),e._v(" is selected.")])])]),e._v(" "),a("li",[e._v("The following are the options when 'JSON to Binary' is selected from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.\n"),a("ul",[a("li",[a("em",[a("strong",[e._v("Add BOM:")])]),e._v(" Add the byte order mark (BOM) to the string. This field is displayed when "),a("em",[a("strong",[e._v("Encoding")])]),e._v(" is selected.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("File Name:")])]),e._v(" The file name to set.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("Mime Type:")])]),e._v(" The mime-type to set. By default the JSON mime-type will be set.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("Use Raw Data:")])]),e._v(" Use data as is and do not stringify it.")]),e._v(" "),a("li",[a("em",[a("strong",[e._v("Data is Base64:")])]),e._v(" Keeps the binary data as base64 string. This field is displayed when "),a("em",[a("strong",[e._v("Convert all Data")])]),e._v(" is set to 'false'.")])])])])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to store the JSON data received from the "),a("a",{attrs:{href:"https://www.thecocktaildb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CocktailDB API"),a("OutboundLink")],1),e._v(" to your machine. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/652",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Move Binary Data")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/WriteBinaryFile/"}},[e._v("Write Binary Data")])],1)]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(683),alt:"A workflow with the Move Binary Data node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-http-request-node-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),a("ol",[a("li",[e._v("Enter "),a("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" in the "),a("em",[a("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(684),alt:"Get random cocktail data from CocktailDB API using the HTTP Request node"}})]),e._v(" "),a("h3",{attrs:{id:"_3-move-binary-data-node-json-to-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-move-binary-data-node-json-to-binary"}},[e._v("#")]),e._v(" 3. Move Binary Data node (JSON to Binary)")]),e._v(" "),a("ol",[a("li",[e._v("Select 'JSON to Binary' from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(685),alt:"Convert JSON to binary using the Move Binary Data node"}})]),e._v(" "),a("h3",{attrs:{id:"_4-write-binary-file-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-write-binary-file-node"}},[e._v("#")]),e._v(" 4. Write Binary File node")]),e._v(" "),a("ol",[a("li",[e._v("Enter the file name in the "),a("em",[a("strong",[e._v("File Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(686),alt:"Writing a file to the disk using the Write Binary File node"}})])])}),[],!1,null,null,null);t.default=s.exports},683:function(e,t,o){e.exports=o.p+"assets/img/workflow.c3d5b9c5.png"},684:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.b5cd6ff1.png"},685:function(e,t,o){e.exports=o.p+"assets/img/MoveBinaryData_node.e4f50bc8.png"},686:function(e,t,o){e.exports=o.p+"assets/img/WriteBinaryFile_node.d7c6da34.png"}}]);