(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1752:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"bitwarden"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bitwarden"}},[e._v("#")]),e._v(" Bitwarden")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.bitwarden.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitwarden"),r("OutboundLink")],1),e._v(" is an open-source password management solution for individuals, teams, and business organizations.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Bitwarden/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.bitwarden"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a group, add members to the group, and get the members of the group in Bitwarden. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/1001",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Bitwarden")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(788),alt:"A workflow with the Bitwarden node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-bitwarden-node-create-group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-bitwarden-node-create-group"}},[e._v("#")]),e._v(" 2. Bitwarden node (create: group)")]),e._v(" "),r("p",[e._v("This node will create a new group called "),r("code",[e._v("documentation")]),e._v(" in Bitwarden.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Bitwarden node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Bitwarden/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Group' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Create' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("documentation")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new group in Bitwarden.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(789),alt:"Using the Bitwarden node to create a new group"}})]),e._v(" "),r("h3",{attrs:{id:"_3-bitwarden1-node-getall-member"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-bitwarden1-node-getall-member"}},[e._v("#")]),e._v(" 3. Bitwarden1 node (getAll: member)")]),e._v(" "),r("p",[e._v("This node will get all the members from Bitwarden.")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Member' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Get All' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Return All")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node retrieves all the members from Bitwarden.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(790),alt:"Using the Bitwarden node to get all the members"}})]),e._v(" "),r("h3",{attrs:{id:"_4-bitwarden2-node-updatemembers-group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-bitwarden2-node-updatemembers-group"}},[e._v("#")]),e._v(" 4. Bitwarden2 node (updateMembers: group)")]),e._v(" "),r("p",[e._v("This node will update all the members in the group that we created earlier.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Group' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Update Members' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Group ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Bitwarden > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Bitwarden"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Member IDs")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node updates the members of the group.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(791),alt:"Using the Bitwarden node to update members in a group"}})]),e._v(" "),r("h3",{attrs:{id:"_5-bitwarden3-node-getmembers-group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-bitwarden3-node-getmembers-group"}},[e._v("#")]),e._v(" 5. Bitwarden3 node (getMembers: group)")]),e._v(" "),r("p",[e._v("This node will get all the members in the group that we created earlier.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Group' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Get Members' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Group ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Bitwarden > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Bitwarden"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node retrieves the members in the group.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(792),alt:"Using the Bitwarden node to get members in a group"}})])],1)}),[],!1,null,null,null);t.default=n.exports},788:function(e,t,o){e.exports=o.p+"assets/img/workflow.02678def.png"},789:function(e,t,o){e.exports=o.p+"assets/img/Bitwarden_node.e47f5187.png"},790:function(e,t,o){e.exports=o.p+"assets/img/Bitwarden1_node.92bcc528.png"},791:function(e,t,o){e.exports=o.p+"assets/img/Bitwarden2_node.b55e666b.png"},792:function(e,t,o){e.exports=o.p+"assets/img/Bitwarden3_node.5d59a41e.png"}}]);