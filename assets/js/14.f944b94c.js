(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1488:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" Node")]),e._v(" "),r("p",[e._v("A "),r("RouterLink",{attrs:{to:"/reference/glossary.html#node"}},[e._v("node")]),e._v(" is an entry point for retrieving data, a function to process data, or an exit for sending data. The data process performed by nodes can include filtering, recomposing, and changing data.")],1),e._v(" "),r("p",[e._v("There may be one or several nodes for your API, service, or app. By connecting multiple nodes, you can create simple and complex workflows. When you add a node to the Editor UI, the node is automatically activated and requires you to configure it (by adding credentials, selecting operations, writing expressions, etc.).")]),e._v(" "),r("p",[e._v("There are three types of nodes:")]),e._v(" "),r("ul",[r("li",[e._v("Core Nodes")]),e._v(" "),r("li",[e._v("Regular Nodes")]),e._v(" "),r("li",[e._v("Trigger Nodes")])]),e._v(" "),r("h2",{attrs:{id:"core-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#core-nodes"}},[e._v("#")]),e._v(" Core nodes")]),e._v(" "),r("p",[e._v("Core nodes are functions or services that can be used to control how workflows are run or to provide generic API support.")]),e._v(" "),r("p",[e._v("Use the Start node when you want to manually trigger the workflow with the "),r("code",[e._v("Execute Workflow")]),e._v(" button at the bottom of the Editor UI. This way of starting the workflow is useful when creating and testing new workflows.")]),e._v(" "),r("p",[e._v("If an application you need does not have a dedicated Node yet, you can access the data by using the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request node")]),e._v(" or the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Webhook/"}},[e._v("Webhook node")]),e._v(". You can also read about "),r("RouterLink",{attrs:{to:"/nodes/creating-nodes/create-node.html"}},[e._v("creating nodes")]),e._v(" and make a node for your desired application.")],1),e._v(" "),r("h2",{attrs:{id:"regular-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regular-nodes"}},[e._v("#")]),e._v(" Regular nodes")]),e._v(" "),r("p",[e._v("Regular nodes perform an action, like fetching data or creating an entry in a calendar. Regular nodes are named for the application they represent and are listed under Regular Nodes in the Editor UI.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(457),alt:"Regular Nodes"}})]),e._v(" "),r("h3",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),r("p",[e._v("A "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleSheets/"}},[e._v("Google Sheets node")]),e._v(" can be used to retrieve or write data to a Google Sheet.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(458),alt:"Sheets_node"}})]),e._v(" "),r("h2",{attrs:{id:"trigger-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-nodes"}},[e._v("#")]),e._v(" Trigger nodes")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/reference/glossary.html#trigger"}},[e._v("Trigger nodes")]),e._v(" start workflows and supply the initial data.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(459),alt:"Trigger_nodes"}})]),e._v(" "),r("p",[e._v("Trigger nodes can be app or core nodes.")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Core Trigger nodes")]),e._v(" start the workflow at a specific time, at a time interval, or on a webhook call. For example, to get all users from a Postgres database every 10 minutes, use the Interval Trigger node with the Postgres node.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("App Trigger nodes")]),e._v(' start the workflow when an event happens in an app. App Trigger nodes are named like the application they represent followed by "Trigger" and are listed under Trigger Nodes in the Editor. For example, a '),r("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/TelegramTrigger/"}},[e._v("Telegram trigger node")]),e._v(" can be used to trigger a workflow when a message is sent in a Telegram chat.")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:o(460),alt:"Telegram trigger"}})]),e._v(" "),r("h2",{attrs:{id:"node-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-settings"}},[e._v("#")]),e._v(" Node settings")]),e._v(" "),r("p",[e._v("Nodes come with global "),r("strong",[e._v("operations")]),e._v(" and "),r("strong",[e._v("settings")]),e._v(", as well as app-specific "),r("strong",[e._v("parameters")]),e._v(" that can be configured.")]),e._v(" "),r("h3",{attrs:{id:"operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operations"}},[e._v("#")]),e._v(" Operations")]),e._v(" "),r("p",[e._v("The node operations are illustrated with icons that appear on top of the node when you hover on it:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Delete")]),e._v(": Remove the selected node from the workflow")]),e._v(" "),r("li",[r("strong",[e._v("Pause")]),e._v(": Deactivate the selected node")]),e._v(" "),r("li",[r("strong",[e._v("Copy")]),e._v(": Duplicate the selected node")]),e._v(" "),r("li",[r("strong",[e._v("Play")]),e._v(": Run the selected node")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(461),alt:"Node settings"}})]),e._v(" "),r("p",[e._v("To access the node parameters and settings, double-click on the node.")]),e._v(" "),r("h3",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v("The node parameters allow you to define the operations the node should perform. Find the available parameters of each node in the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/"}},[e._v("node reference")]),e._v(".")],1),e._v(" "),r("h3",{attrs:{id:"settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),r("p",[e._v("The node settings allow you to configure the look and execution of the node. The following options are available:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Notes")]),e._v(": Optional note to save with the node")]),e._v(" "),r("li",[r("strong",[e._v("Display note in flow")]),e._v(": If active, the note above will be displayed in the workflow as a subtitle")]),e._v(" "),r("li",[r("strong",[e._v("Node Color")]),e._v(": The color of the node in the workflow")]),e._v(" "),r("li",[r("strong",[e._v("Always Output Data")]),e._v(": If active, the node will return an empty item even if the node returns no data during an initial execution. Be careful setting this on IF nodes, as it could cause an infinite loop.")]),e._v(" "),r("li",[r("strong",[e._v("Execute Once")]),e._v(": If active, the node executes only once, with data from the first item it receives.")]),e._v(" "),r("li",[r("strong",[e._v("Retry On Fail")]),e._v(": If active, the node tries to execute a failed attempt multiple times until it succeeds")]),e._v(" "),r("li",[r("strong",[e._v("Continue On Fail")]),e._v(": If active, the workflow continues even if the execution of the node fails. When this happens, the node passes along input data from previous nodes, so the workflow should account for unexpected output data.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(462),alt:"Node parameters"}})]),e._v(" "),r("p",[e._v("If a node is not correctly configured or is missing some required information, a "),r("strong",[e._v("warning sign")]),e._v(" is displayed on the top right corner of the node. To see what parameters are incorrect, double-click on the node and have a look at fields marked with red and the error message displayed in the respective warning symbol.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(463),alt:"Node error"}})])])}),[],!1,null,null,null);t.default=a.exports},457:function(e,t,o){e.exports=o.p+"assets/img/Regular_nodes.d3cec3e9.png"},458:function(e,t,o){e.exports=o.p+"assets/img/Google_sheets.d9ee72a3.png"},459:function(e,t,o){e.exports=o.p+"assets/img/Trigger_nodes.5bd536aa.png"},460:function(e,t,o){e.exports=o.p+"assets/img/telegram_trigger.fae8dcd9.png"},461:function(e,t,o){e.exports=o.p+"assets/img/Node_settings.36ddf764.gif"},462:function(e,t,o){e.exports=o.p+"assets/img/Node_parameters.090b2d35.gif"},463:function(e,t,o){e.exports=o.p+"assets/img/Node_error.e189f05d.gif"}}]);