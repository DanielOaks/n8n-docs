(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1363:function(e,t,o){e.exports=o.p+"assets/img/workflow.c0f2af32.png"},1364:function(e,t,o){e.exports=o.p+"assets/img/LemlistTrigger_node.7d2e3552.png"},1365:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.2c757e49.png"},1962:function(e,t,o){"use strict";o.r(t);var s=o(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"lemlist-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lemlist-trigger"}},[e._v("#")]),e._v(" Lemlist Trigger")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://Lemlist.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lemlist"),s("OutboundLink")],1),e._v(" is an email outreach platform that allows you to automatically generate personalized images and videos and send personalized cold emails.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Lemlist/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),s("ul",[s("li",[e._v("Email Bounced")]),e._v(" "),s("li",[e._v("Email Clicked")]),e._v(" "),s("li",[e._v("Email Opened")]),e._v(" "),s("li",[e._v("Email Replied")]),e._v(" "),s("li",[e._v("Email Send Failed")]),e._v(" "),s("li",[e._v("Email Sent")]),e._v(" "),s("li",[e._v("Email Unsubscribed")])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to send a message on Mattermost when a lead replies to your email. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/984",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following node.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:""}},[e._v("Lemlist Trigger")])]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1363),alt:"A workflow with the Lemlist Trigger node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-lemlist-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-lemlist-trigger"}},[e._v("#")]),e._v(" 1. Lemlist Trigger")]),e._v(" "),s("p",[e._v("The Lemlist Trigger node will trigger the workflow when a lead sends a reply to the campaign "),s("code",[e._v("Docs campaign")]),e._v(". If you have a different campaign, use that instead.")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Lemlist Trigger node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Lemlist/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select 'Email Replied' from the "),s("em",[s("strong",[e._v("Events")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Add Field")])]),e._v(" and select 'Campaign ID'.")]),e._v(" "),s("li",[e._v("Select 'Docs campaign' from the "),s("em",[s("strong",[e._v("Campaign ID")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the node returns the information of the reply that was sent by a lead. This output is passed on to the next node in the workflow.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1364),alt:"Using the Lemlist Trigger node to trigger the workflow"}})]),e._v(" "),s("h2",{attrs:{id:"_2-mattermost-node-post-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-post-message"}},[e._v("#")]),e._v(" 2. Mattermost node (post: message)")]),e._v(" "),s("p",[e._v("This node will send a message to the "),s("code",[e._v("Leads")]),e._v(" channel in Mattermost. If you have a different channel, use that instead.")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to enter credentials for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select a channel from the "),s("em",[s("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Message")])]),e._v(" field click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),s("div",{pre:!0},[s("ol",{pre:!0,attrs:{start:"4"}},[s("li",[e._v("Enter the following message in the "),s("em",[s("strong",[e._v("Expression")])]),e._v(" field:")])]),e._v(" "),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[s("code",[e._v('{{$json["firstName"]}} has replied back to your {{$json["campaignName"]}}. Below is the reply:\n> {{$json["text"]}}\n')])])]),s("ol",{pre:!0,attrs:{start:"5"}},[s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),s("p",[e._v("In the screenshot below, you will notice that the node sends a message with a reply to the "),s("code",[e._v("Leads")]),e._v(" channel in Mattermost.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1365),alt:"Using the Mattermost node to send a message"}})]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),s("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Lemlist Trigger node.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);