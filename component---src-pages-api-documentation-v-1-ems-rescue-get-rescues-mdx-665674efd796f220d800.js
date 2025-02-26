"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[3199],{376:function(e,t,n){var r=n(7294),a=n(1829),o=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],l=n[1],u=(0,r.useState)(!1),s=u[0],c=u[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),l(window.innerWidth>768),c(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(o.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},s?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return l(!i)},onKeyDown:function(){return l(!i)}},r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),i?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,s?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(a.Z,{isShown:i,onClickArrow:function(){return l(!i)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},1829:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(5785),a=n(7294),o=n(1597),i=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1];return a.createElement("div",null,a.createElement("li",{className:"section-title",onClick:function(){return r(!n)}},a.createElement("i",{className:n?"arrow down":"arrow right"}),e.title),a.createElement("ul",{style:n?{display:"block"}:{display:"none"},className:"list-drop"},e.children))};function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){var t=(0,o.useStaticQuery)("4144783580");function n(e,t,n){for(var r=e.split("/"),a=t.root,o=function(t){var o={isDirectory:t!=r.length-1,name:r[t],absolutePath:n+e},i=a.children.find((function(e){return e.nodeData.name==r[t]}));if(void 0===i){var l=a.add(o);a=l}else a=i},i=0;i<r.length;i++)o(i)}function r(){return("undefined"!=typeof window?window.location.href:"").split("/").find((function(e){return"api_documentation"===e}))}return a.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},a.createElement("ul",null,a.createElement("li",null,r()?a.createElement(o.Link,{to:"/api_documentation"},"API Documentation Page"):a.createElement(o.Link,{to:"/documentation"},"User Documentation Page")),function(e,t,r){var a=new c({isDirectory:!0,name:t}),o=new m;o.root=a;for(var i=0;i<e.length;i++)n(e[i].relativePath,o,r);return o}(r()?t.apiDocumentation.nodes:t.documentation.nodes,r()?"API Documentation":"User Documentation",r()?"api_documentation/":"documentation/").root.htmlRender()),a.createElement(o.Link,{to:"/"},"< Back to Main Page"))},c=function(){function e(e){this.nodeData=e,this.children=[]}var t=e.prototype;return t.add=function(t){var n=new e(t);return t.isDirectory?this.children.push(n):this.children.unshift(n),n},t.remove=function(e){this.children=this.children.filter((function(t){return t.nodeData!==e}))},t.htmlRender=function(){if(this.nodeData.isDirectory){for(var e,t=[],n=l(this.children);!(e=n()).done;){var r=e.value;t.push(r.htmlRender())}return a.createElement(i,{title:this.nodeData.name,children:t})}return a.createElement("li",null,a.createElement(o.Link,{to:(u=this.nodeData.absolutePath,"/"+u.replace(".mdx",""))},this.nodeData.name.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ").replace(".mdx","")));var u},e}(),m=function(){function e(){this.root=null}var t=e.prototype;return t.traverseBF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.push.apply(t,(0,r.Z)(n.children)),e(n)}},t.traverseDF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.unshift.apply(t,(0,r.Z)(n.children)),e(n)}},e}()},7680:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var r=n(3366),a=(n(7294),n(4983)),o=n(376),i=["components"],l={},u={_frontmatter:l},s=o.Z;function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(s,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Get Trucks"),(0,a.kt)("h2",null,"GET ",(0,a.kt)("inlineCode",{parentName:"h2"},"/v1/ems/rescue")),(0,a.kt)("p",null,"Gets a list of rescue through paging. Pagination allow for smaller set of data to be sent over through the api that helps prevent huge data transfer over the network."),(0,a.kt)("h3",null,"Request"),(0,a.kt)("p",null,"Headers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>"\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Query Parameters"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageNumber"),(0,a.kt)("td",{parentName:"tr",align:null},"The page number of fetching truck records. Must be an integer greater than 0. Default value to first page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of items in the list fetched from a page. Must be an integer between 1 and 20 inclusively. Default value is 5.")))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"200")),(0,a.kt)("p",null,"The rescue has been successfully fetched."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "pageSize": [number] The page size of the content,\n    "pageNumber": [number] The page number of the content,\n    "content": [\n        {\n            "id": [string] The ID of the record,\n            "call_date": [string] Call date time in ISO 8602,\n            "enroute_date": [string] Enroute date time in ISO 8602,\n            "scene_date": [string] Scene date time in ISO 8602,\n            "transportation": [string] Transportation date time in ISO 8602,\n            "destination_date" [string] Destination date time in ISO 8602,\n            "mileage": [number] Amount of mileage with rescue,\n            "notes": [string] Extra notes to the rescue,\n            "truck_id": [string] The ID of truck record,\n            "truck_id": [string | NULL] The ID of truck record.\n        },\n        ...\n    ]\n}\n')),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"400")),(0,a.kt)("p",null,"There was an issue with the query parameters."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "error": [string] error,\n    "message": [string] message about the error\n}\n')),(0,a.kt)("h4",null,"Messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pageNumber must be an int that is greater than 0.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The pageNumber query was not a whole number that is greater than 0."))),(0,a.kt)("li",{parentName:"ul"},"pageSize must be an int that is greater than 0 and less than or equal to 20.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The pageSize query was not a whole number that is greater than 0 and less than or equal to 20.")))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"401")),(0,a.kt)("p",null,"Authorization issue."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,a.kt)("h4",null,"Messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,a.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,a.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format.')))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"500")),(0,a.kt)("p",null,"Internal error with the server."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error"\n}\n')))}c.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-ems-rescue-get-rescues-mdx-665674efd796f220d800.js.map