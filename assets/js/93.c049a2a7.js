(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1820:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"kitemaker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kitemaker"}},[e._v("#")]),e._v(" Kitemaker")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.kitemaker.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kitemaker"),r("OutboundLink")],1),e._v(" is a collaboration tool built for designers, engineers, and product managers in remote software development teams.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Kitemaker/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.kitemaker"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create, update, and get a work item from Kitemaker. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/1048",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Kitemaker")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(984),alt:"A workflow with the Kitemaker node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-kitemaker-node-workitem-create"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-kitemaker-node-workitem-create"}},[e._v("#")]),e._v(" 2. Kitemaker node (workItem: create)")]),e._v(" "),r("p",[e._v("This node will create a work item in Kitemaker.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Kitemaker node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Kitemaker/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Create' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter a title in the "),r("em",[r("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Select 'In progress' from the "),r("em",[r("strong",[e._v("Status ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new work item in Kitemaker.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(985),alt:"Using the Kitemaker node to create a new work item"}})]),e._v(" "),r("h3",{attrs:{id:"_3-kitemaker1-node-workitem-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-kitemaker1-node-workitem-update"}},[e._v("#")]),e._v(" 3. Kitemaker1 node (workItem: update)")]),e._v(" "),r("p",[e._v("This node will update the status of the item that we created using the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous Kitemaker node.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Work Item ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select 'Status ID' from the dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Done' from the "),r("em",[r("strong",[e._v("Status ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node updates the status of the item that got created previously.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(986),alt:"Using the Kitemaker node to update a work item"}})]),e._v(" "),r("h3",{attrs:{id:"_4-kitemaker2-node-workitem-get"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-kitemaker2-node-workitem-get"}},[e._v("#")]),e._v(" 4. Kitemaker2 node (workItem: get)")]),e._v(" "),r("p",[e._v("This node will retrieve the information about the item that we created earlier.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous Kitemaker node.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Work Item ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node retrieves the information of the work item that we created earlier.")]),e._v(" "),r("p",[r("img",{pre:!0,attrs:{src:o(987),alt:"Using the Kitemaker node to retrieve the information of a work item"}})])])],1)}),[],!1,null,null,null);t.default=a.exports},984:function(e,t,o){e.exports=o.p+"assets/img/workflow.c9df4e29.png"},985:function(e,t,o){e.exports=o.p+"assets/img/Kitemaker_node.55a86b58.png"},986:function(e,t,o){e.exports=o.p+"assets/img/Kitemaker1_node.71e889a0.png"},987:function(e,t,o){e.exports=o.p+"assets/img/Kitemaker2_node.33a52219.png"}}]);