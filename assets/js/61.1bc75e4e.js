(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1376:function(e,t,o){e.exports=o.p+"assets/img/workflow.fb96d025.png"},1377:function(e,t,o){e.exports=o.p+"assets/img/NotionTrigger_node.a032a5d3.png"},1378:function(e,t,o){e.exports=o.p+"assets/img/IF_node.d804acfb.png"},1379:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.ff420a60.png"},1380:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.18ae7364.png"},1968:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"notion-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notion-trigger"}},[e._v("#")]),e._v(" Notion Trigger")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://notion.so",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notion"),n("OutboundLink")],1),e._v(" is an all-in-one workspace for your notes, tasks, wikis, and databases.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Notion/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive a message on Mattermost when new meeting notes get added to the Notion. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/1089",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("Notion Trigger")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/IF/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1376),alt:"A workflow with the Notion Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-notion-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-notion-trigger-node"}},[e._v("#")]),e._v(" 1. Notion Trigger node")]),e._v(" "),n("p",[e._v("The Notion Trigger node will trigger the workflow when new data gets added to Notion.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Notion Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Notion/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Poll Time")])]),e._v(" and select 'Every Hour' from the "),n("em",[n("strong",[e._v("Mode")])]),e._v(" dropdown list. This will check Notion every hour for new meeting notes.")]),e._v(" "),n("li",[e._v("Select 'Record Added' from the "),n("em",[n("strong",[e._v("Event")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select the database that contains the meeting notes from the "),n("em",[n("strong",[e._v("Database")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns the new data from Notion. This output gets passed on to the next node in the workflow.")]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Make sure to add a field with the "),n("code",[e._v("Created Time")]),e._v(" property type in your Notion database.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1377),alt:"Using the Notion Trigger node to trigger the workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_2-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-if-node"}},[e._v("#")]),e._v(" 2. IF node")]),e._v(" "),n("p",[e._v("This node will check if the notes belong to the "),n("code",[e._v("Marketing")]),e._v(" team. If the team is "),n("code",[e._v("Marketing")]),e._v(" the node will return "),n("code",[e._v("true")]),e._v(", otherwise "),n("code",[e._v("false")]),e._v(".")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'String'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > properties > Team. You can also add the following expression: "),n("code",[e._v('{{$json["properties"]["Team"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Marketing")]),e._v(" in the "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node checks the team that we received from the previous node and returns "),n("code",[e._v("true")]),e._v(" if the value equals "),n("code",[e._v("Marketing")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1378),alt:"Using the IF node to check the team"}})]),e._v(" "),n("h3",{attrs:{id:"_3-mattermost-node-post-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-mattermost-node-post-message"}},[e._v("#")]),e._v(" 3. Mattermost node (post: message)")]),e._v(" "),n("p",[e._v("This node will send a message about the new data in the channel 'Marketing' in Mattermost. If you have a different channel, use that instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[e._v("Select a channel from the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter the following message in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field:")])]),e._v(" "),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[n("code",[e._v('New meeting notes got added.\nAgenda: {{$json["properties"]["Agenda"]["content"]}}\nDate: {{$json["properties"]["created time"]}}\n')])])]),n("ol",{pre:!0,attrs:{start:"5"}},[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends a message in Mattermost about the new data that got added to Notion.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1379),alt:"Using the Mattermost node to send a message"}})]),e._v(" "),n("h3",{attrs:{id:"_5-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(1380),alt:"Using the NoOp node"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Notion Trigger node.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);