"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[5957],{376:function(e,t,n){var r=n(7294),o=n(3421),i=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),a=n[0],l=n[1],u=(0,r.useState)(!1),c=u[0],s=u[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),l(window.innerWidth>768),s(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(i.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},c?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return l(!a)},onKeyDown:function(){return l(!a)}},r.createElement("div",{className:a?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:a?"x-line transition-bar":"hamburger-bar transition-bar"}),a?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,c?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(o.Z,{isShown:a,onClickArrow:function(){return l(!a)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},3421:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),o=n(1597),i=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return r.createElement("div",null,r.createElement("li",{className:"section-title",onClick:function(){return o(!n)}},r.createElement("i",{className:n?"arrow down":"arrow right"}),e.title),r.createElement("ul",{style:n?{display:"block"}:{display:"none"},className:"list-drop"},e.children))};function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){function e(e){this.nodeData=e,this.children=[]}var t=e.prototype;return t.add=function(t){var n=new e(t);return t.isDirectory?this.children.push(n):this.children.unshift(n),n},t.remove=function(e){this.children=this.children.filter((function(t){return t.nodeData!==e}))},t.absolutePathToLink=function(e){return"/"+e.replace(".mdx","")},t.nameToDisplay=function(e){return e.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ").replace(".mdx","")},t.htmlRender=function(){if(this.nodeData.isDirectory){for(var e,t=[],n=a(this.children);!(e=n()).done;){var l=e.value;t.push(l.htmlRender())}return r.createElement(i,{title:this.nodeData.name,children:t})}return r.createElement("li",null,r.createElement(o.Link,{to:this.absolutePathToLink(this.nodeData.absolutePath)},this.nameToDisplay(this.nodeData.name)))},e}(),c=n(5785),s=function(){function e(){this.root=null}var t=e.prototype;return t.traverseBF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.push.apply(t,(0,c.Z)(n.children)),e(n)}},t.traverseDF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.unshift.apply(t,(0,c.Z)(n.children)),e(n)}},e}(),d=function(e){var t=(0,o.useStaticQuery)("4144783580");function n(e,t,n){for(var r=e.split("/"),o=t.root,i=function(t){var i={isDirectory:t!=r.length-1,name:r[t],absolutePath:n+e},a=o.children.find((function(e){return e.nodeData.name==r[t]}));if(void 0===a){var l=o.add(i);o=l}else o=a},a=0;a<r.length;a++)i(a)}function i(){return("undefined"!=typeof window?window.location.href:"").split("/").find((function(e){return"api_documentation"===e}))}return r.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},r.createElement("ul",null,r.createElement("li",null,i()?r.createElement(o.Link,{to:"/api_documentation"},"API Documentation Page"):r.createElement(o.Link,{to:"/documentation"},"User Documentation Page")),function(e,t,r){var o=new u({isDirectory:!0,name:t}),i=new s;i.root=o;for(var a=0;a<e.length;a++)n(e[a].relativePath,i,r);return i}(i()?t.apiDocumentation.nodes:t.documentation.nodes,i()?"API Documentation":"User Documentation",i()?"api_documentation/":"documentation/").root.htmlRender()),r.createElement(o.Link,{to:"/"},"< Back to Main Page"))}},421:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var r=n(3366),o=(n(7294),n(4983)),i=n(376),a=["components"],l={},u={_frontmatter:l},c=i.Z;function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)(c,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Delete Invites"),(0,o.kt)("h2",null,"DELETE ",(0,o.kt)("inlineCode",{parentName:"h2"},"/v1/ems/organization/{org_id}/invite/{invite_id}")),(0,o.kt)("p",null,"Deletes the invite if have correct owner permission of organization to do so."),(0,o.kt)("h3",null,"Request"),(0,o.kt)("p",null,"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>" \n')),(0,o.kt)("p",null,"| Path Parameters | |\n| org_id | The organization ID |\n| invite_id | The invite ID |"),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"204")),(0,o.kt)("p",null,"The invite has been deleted."),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"401")),(0,o.kt)("p",null,"Authorization issue."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,o.kt)("h4",null,"Messages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,o.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,o.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format.')))),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"403")),(0,o.kt)("p",null,"Forbidden as only the owner can delete the invite code of an organization."),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"404")),(0,o.kt)("p",null,"The invite does not exist."),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"500")),(0,o.kt)("p",null,"Internal error with the server."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error"\n}\n')))}s.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-ems-organization-invite-delete-invite-mdx-f8686fb854402f06b787.js.map