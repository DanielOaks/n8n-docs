(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1746:function(t,e,o){"use strict";o.r(e);var n=o(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"automizy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#automizy"}},[t._v("#")]),t._v(" Automizy")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://automizy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Automizy"),n("OutboundLink")],1),t._v(" is an email marketing automation software that offers AI-powered Subject Line Tester, AB testing, and email automation.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),n("p",[t._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Automizy/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.automizy"}}),t._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),n("p",[t._v("This workflow allows you to create a new list, add a new contact to that list, update the contact, and get all contacts in the list using the Automizy node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/720",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),n("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("Automizy")])])]),t._v(" "),n("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(772),alt:"A workflow with the Automizy node"}})]),t._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),n("p",[t._v("The Start node exists by default when you create a new workflow.")]),t._v(" "),n("h3",{attrs:{id:"_2-automizy-node-create-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-automizy-node-create-list"}},[t._v("#")]),t._v(" 2. Automizy node (create: list)")]),t._v(" "),n("p",[t._v("This node will create a new list called "),n("code",[t._v("n8n-docs")]),t._v(" in Automizy.")]),t._v(" "),n("ol",[n("li",[t._v("First of all, you'll have to enter credentials for the Automizy node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Automizy/"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("li",[t._v("Select 'List' from the "),n("em",[n("strong",[t._v("Resource")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Enter "),n("code",[t._v("n8n-docs")]),t._v(" in the "),n("em",[n("strong",[t._v("Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),n("p",[t._v("In the screenshot below, you will notice that the node creates a new list with the name "),n("code",[t._v("n8n-docs")]),t._v(".")]),t._v(" "),n("p",[n("img",{attrs:{src:o(773),alt:"Using the Automizy node to create a new list"}})]),t._v(" "),n("h3",{attrs:{id:"_3-automizy1-node-create-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-automizy1-node-create-contact"}},[t._v("#")]),t._v(" 3. Automizy1 node (create: contact)")]),t._v(" "),n("p",[t._v("This node creates a new contact and adds it to the list created in the previous node.")]),t._v(" "),n("div",{pre:!0},[n("ol",[n("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),n("li",[t._v("Enter the email address of the contact you want to add to the list in the "),n("em",[n("strong",[t._v("Email")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("List ID")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Automizy > Output Data > JSON > id. You can also add the following expression: "),n("code",[t._v('{{$node["Automizy"].json["id"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Add Field")])]),t._v(" and select 'Status' from the dropdown list.")]),t._v(" "),n("li",[t._v("Select 'Active' from the "),n("em",[n("strong",[t._v("Status")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[t._v("In the screenshot below, you will notice that the node creates a new contact with the email address "),n("code",[t._v("example@n8n.io")]),t._v(" and status "),n("code",[t._v("Active")]),t._v(" and adds it to the list "),n("code",[t._v("n8n-docs")]),t._v(" created in the previous node.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(774),alt:"Using the Automizy node to create a new contact and add it to the list"}})]),t._v(" "),n("h3",{attrs:{id:"_4-automizy2-node-update-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-automizy2-node-update-contact"}},[t._v("#")]),t._v(" 4. Automizy2 node (update: contact)")]),t._v(" "),n("p",[t._v("This node updates the contact that we created in the previous node by adding the tag "),n("code",[t._v("reviewer")]),t._v(" to it. Make sure that you create a tag in Automizy.")]),t._v(" "),n("div",{pre:!0},[n("ol",[n("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),n("li",[t._v("Select 'Update' from the "),n("em",[n("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Email")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Automizy1 > Output Data > JSON > email. You can also add the following expression: "),n("code",[t._v('{{$node["Automizy1"].json["email"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Add Field")])]),t._v(" and select 'Tags' from the dropdown list.")]),t._v(" "),n("li",[t._v("Select a tag from the "),n("em",[n("strong",[t._v("Tags")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[t._v("In the screenshot below, you will notice that the node updates the contact created in the previous node by adding the tag "),n("code",[t._v("reviewer")]),t._v(" to it.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(775),alt:"Using the Automizy node to update the contact by adding a tag"}})]),t._v(" "),n("h3",{attrs:{id:"_5-automizy3-node-getall-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-automizy3-node-getall-contact"}},[t._v("#")]),t._v(" 5. Automizy3 node (getAll: contact)")]),t._v(" "),n("p",[t._v("This node returns all the contacts of the "),n("code",[t._v("n8n-docs")]),t._v(" list that we created using the Automizy node.")]),t._v(" "),n("div",{pre:!0},[n("ol",[n("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),n("li",[t._v("Select 'Get All' from the "),n("em",[n("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("List ID")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Automizy > Output Data > JSON > id. You can also add the following expression: "),n("code",[t._v('{{$node["Automizy"].json["id"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Toggle "),n("em",[n("strong",[t._v("Return All")])]),t._v(" to true.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[t._v("In the screenshot below, you will notice that the node returns all the contacts that are present in the list "),n("code",[t._v("n8n-docs")]),t._v(".")]),t._v(" "),n("p",[n("img",{attrs:{src:o(776),alt:"Using the Automizy node to get all the contacts in a list"}})])],1)}),[],!1,null,null,null);e.default=a.exports},772:function(t,e,o){t.exports=o.p+"assets/img/workflow.fe7ad7f0.png"},773:function(t,e,o){t.exports=o.p+"assets/img/Automizy_node.7baa07d5.png"},774:function(t,e,o){t.exports=o.p+"assets/img/Automizy1_node.41354ee0.png"},775:function(t,e,o){t.exports=o.p+"assets/img/Automizy2_node.1d3d141d.png"},776:function(t,e,o){t.exports=o.p+"assets/img/Automizy3_node.39391838.png"}}]);