"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[3003],{376:function(e,t,n){var r=n(7294),o=n(1829),a=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],l=n[1],u=(0,r.useState)(!1),c=u[0],s=u[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),l(window.innerWidth>768),s(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(a.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},c?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return l(!i)},onKeyDown:function(){return l(!i)}},r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),i?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,c?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(o.Z,{isShown:i,onClickArrow:function(){return l(!i)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},1829:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(5785),o=n(7294),a=n(1597),i=function(e){var t=(0,o.useState)(!1),n=t[0],r=t[1];return o.createElement("div",null,o.createElement("li",{className:"section-title",onClick:function(){return r(!n)}},o.createElement("i",{className:n?"arrow down":"arrow right"}),e.title),o.createElement("ul",{style:n?{display:"block"}:{display:"none"},className:"list-drop"},e.children))};function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e){var t=(0,a.useStaticQuery)("4144783580");function n(e,t,n){for(var r=e.split("/"),o=t.root,a=function(t){var a={isDirectory:t!=r.length-1,name:r[t],absolutePath:n+e},i=o.children.find((function(e){return e.nodeData.name==r[t]}));if(void 0===i){var l=o.add(a);o=l}else o=i},i=0;i<r.length;i++)a(i)}function r(){return("undefined"!=typeof window?window.location.href:"").split("/").find((function(e){return"api_documentation"===e}))}return o.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},o.createElement("ul",null,o.createElement("li",null,r()?o.createElement(a.Link,{to:"/api_documentation"},"API Documentation Page"):o.createElement(a.Link,{to:"/documentation"},"User Documentation Page")),function(e,t,r){var o=new s({isDirectory:!0,name:t}),a=new m;a.root=o;for(var i=0;i<e.length;i++)n(e[i].relativePath,a,r);return a}(r()?t.apiDocumentation.nodes:t.documentation.nodes,r()?"API Documentation":"User Documentation",r()?"api_documentation/":"documentation/").root.htmlRender()),o.createElement(a.Link,{to:"/"},"< Back to Main Page"))},s=function(){function e(e){this.nodeData=e,this.children=[]}var t=e.prototype;return t.add=function(t){var n=new e(t);return t.isDirectory?this.children.push(n):this.children.unshift(n),n},t.remove=function(e){this.children=this.children.filter((function(t){return t.nodeData!==e}))},t.htmlRender=function(){if(this.nodeData.isDirectory){for(var e,t=[],n=l(this.children);!(e=n()).done;){var r=e.value;t.push(r.htmlRender())}return o.createElement(i,{title:this.nodeData.name,children:t})}return o.createElement("li",null,o.createElement(a.Link,{to:(u=this.nodeData.absolutePath,"/"+u.replace(".mdx",""))},this.nodeData.name.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ").replace(".mdx","")));var u},e}(),m=function(){function e(){this.root=null}var t=e.prototype;return t.traverseBF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.push.apply(t,(0,r.Z)(n.children)),e(n)}},t.traverseDF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.unshift.apply(t,(0,r.Z)(n.children)),e(n)}},e}()},3363:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var r=n(3366),o=(n(7294),n(4983)),a=n(376),i=["components"],l={},u={_frontmatter:l},c=a.Z;function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(c,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Get Truck by ID"),(0,o.kt)("h2",null,"GET ",(0,o.kt)("inlineCode",{parentName:"h2"},"/v1/ems/truck/{id}")),(0,o.kt)("p",null,"Gets a truck record from ID for the user."),(0,o.kt)("h3",null,"Request"),(0,o.kt)("p",null,"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>"\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Path Parameters"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the truck.")))),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"200")),(0,o.kt)("p",null,"The truck has been successfully found and returned."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "id": [string] ID of record,\n    "name": [string] Truck name,\n    "license": [string] Truck license number\n}\n')),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"401")),(0,o.kt)("p",null,"Authorization issue."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,o.kt)("h4",null,"Messages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,o.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,o.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format.')))),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"404")),(0,o.kt)("p",null,"A truck was not found with that ID for the user."),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"500")),(0,o.kt)("p",null,"Internal error with the server."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error"\n}\n')))}s.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-ems-truck-get-truck-mdx-1f470070c5ed9b5add73.js.map