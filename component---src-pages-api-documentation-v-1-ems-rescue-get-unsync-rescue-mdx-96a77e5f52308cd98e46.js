"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[8654],{376:function(e,t,n){var r=n(7294),a=n(3421),o=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],l=n[1],u=(0,r.useState)(!1),s=u[0],c=u[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),l(window.innerWidth>768),c(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(o.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},s?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return l(!i)},onKeyDown:function(){return l(!i)}},r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),i?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,s?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(a.Z,{isShown:i,onClickArrow:function(){return l(!i)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},3421:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),a=n(1597),o=function(e){var t=(0,r.useState)(!1),n=t[0],a=t[1];return r.createElement("div",null,r.createElement("li",{className:"section-title",onClick:function(){return a(!n)}},r.createElement("i",{className:n?"arrow down":"arrow right"}),e.title),r.createElement("ul",{style:n?{display:"block"}:{display:"none"},className:"list-drop"},e.children))};function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){function e(e){this.nodeData=e,this.children=[]}var t=e.prototype;return t.add=function(t){var n=new e(t);return t.isDirectory?this.children.push(n):this.children.unshift(n),n},t.remove=function(e){this.children=this.children.filter((function(t){return t.nodeData!==e}))},t.absolutePathToLink=function(e){return"/"+e.replace(".mdx","")},t.nameToDisplay=function(e){return e.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ").replace(".mdx","")},t.htmlRender=function(){if(this.nodeData.isDirectory){for(var e,t=[],n=i(this.children);!(e=n()).done;){var l=e.value;t.push(l.htmlRender())}return r.createElement(o,{title:this.nodeData.name,children:t})}return r.createElement("li",null,r.createElement(a.Link,{to:this.absolutePathToLink(this.nodeData.absolutePath)},this.nameToDisplay(this.nodeData.name)))},e}(),s=n(5785),c=function(){function e(){this.root=null}var t=e.prototype;return t.traverseBF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.push.apply(t,(0,s.Z)(n.children)),e(n)}},t.traverseDF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.unshift.apply(t,(0,s.Z)(n.children)),e(n)}},e}(),d=function(e){var t=(0,a.useStaticQuery)("4144783580");function n(e,t,n){for(var r=e.split("/"),a=t.root,o=function(t){var o={isDirectory:t!=r.length-1,name:r[t],absolutePath:n+e},i=a.children.find((function(e){return e.nodeData.name==r[t]}));if(void 0===i){var l=a.add(o);a=l}else a=i},i=0;i<r.length;i++)o(i)}function o(){return("undefined"!=typeof window?window.location.href:"").split("/").find((function(e){return"api_documentation"===e}))}return r.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},r.createElement("ul",null,r.createElement("li",null,o()?r.createElement(a.Link,{to:"/api_documentation"},"API Documentation Page"):r.createElement(a.Link,{to:"/documentation"},"User Documentation Page")),function(e,t,r){var a=new u({isDirectory:!0,name:t}),o=new c;o.root=a;for(var i=0;i<e.length;i++)n(e[i].relativePath,o,r);return o}(o()?t.apiDocumentation.nodes:t.documentation.nodes,o()?"API Documentation":"User Documentation",o()?"api_documentation/":"documentation/").root.htmlRender()),r.createElement(a.Link,{to:"/"},"< Back to Main Page"))}},5440:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var r=n(3366),a=(n(7294),n(4983)),o=n(376),i=["components"],l={},u={_frontmatter:l},s=o.Z;function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(s,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Get Unsync Rescue Records"),(0,a.kt)("h2",null,"GET ",(0,a.kt)("inlineCode",{parentName:"h2"},"/v1/ems/rescue/unsync/{device_id}")),(0,a.kt)("p",null,"Gets all the rescue records that are out of sync for the device with the cloud."),(0,a.kt)("h3",null,"Request"),(0,a.kt)("h4",null,"Headers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>"\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Path Parameters"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"device_id"),(0,a.kt)("td",{parentName:"tr",align:null},"The UUID of device.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Query Parameters"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageNumber"),(0,a.kt)("td",{parentName:"tr",align:null},"The page number of fetching unsync rescue records for device. Must be an integer greater than 0. Default value to first page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of items in the list fetched from a page. Must be an integer between 1 and 20 inclusively. Default value is 5.")))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"200")),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "pageSize": [number] The page size of the content,\n    "pageNumber": [number] The page number of the content,\n    "content": [\n        {\n            "rescue_id": [string] ID of rescue record,\n            "device_id": [string] UUID of device,\n            "action_state": [Action State Enum] The action the device should take on the rescue record,\n            "call_date": [string] Call date time in ISO 8602,\n            "enroute_date": [string] Enroute date time in ISO 8602,\n            "scene_date": [string] Scene date time in ISO 8602,\n            "transportation_date": [string] Transportation date time in ISO 8602,\n            "destination_date": [string] Destination date time in ISO 8602,\n            "mileage": [number] Amount of mileage with rescue,\n            "notes": [string] Extra notes to the rescue,\n            "truck_id": [string | NULL] The ID of truck record\n        },\n        ...\n    ]\n}\n')),(0,a.kt)("h4",null,"Action State Enum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE")," - Rescue record needs to update on device"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," - Rescue record needs to delete on device"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ADD")," - Rescue record needs to add on device"),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"400")),(0,a.kt)("p",null,"There was an issue with the query or path parameters."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "error": [string] error,\n    "message": [string] message about the error\n}\n')),(0,a.kt)("h4",null,"Messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Must have device ID parameter",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"No device UUID was set in the path id parameter."))),(0,a.kt)("li",{parentName:"ul"},"pageNumber must be an int that is greater than 0.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The pageNumber query was not a whole number that is greater than 0."))),(0,a.kt)("li",{parentName:"ul"},"pageSize must be an int that is greater than 0 and less than or equal to 20.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The pageSize query was not a whole number that is greater than 0 and less than or equal to 20.")))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"401")),(0,a.kt)("p",null,"Unauthorizated for the user from bearer token."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,a.kt)("h4",null,"Messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,a.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,a.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format.')))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"404")),(0,a.kt)("p",null,"No device ID was found."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{}\n")),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"500")),(0,a.kt)("p",null,"Internal error with the server."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error"\n}\n')))}c.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-ems-rescue-get-unsync-rescue-mdx-96a77e5f52308cd98e46.js.map