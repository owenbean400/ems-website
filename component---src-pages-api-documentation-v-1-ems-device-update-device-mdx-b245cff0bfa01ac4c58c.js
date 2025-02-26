"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[808],{376:function(e,t,n){var r=n(7294),o=n(7793),a=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],l=n[1],u=(0,r.useState)(!1),c=u[0],s=u[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),l(window.innerWidth>768),s(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(a.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},c?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return l(!i)},onKeyDown:function(){return l(!i)}},r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),i?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,c?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(o.Z,{isShown:i,onClickArrow:function(){return l(!i)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},7793:function(e,t,n){var r=n(7294),o=n(1597);t.Z=function(e){var t=(0,o.useStaticQuery)("2988636667"),n="api_documentation"===e.sourceDirectory?t.apiDocumentation:t.documentation;return r.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{to:"/api_documentation"},"API Documentation")),n.nodes.map((function(e){return r.createElement("li",null,r.createElement(o.Link,{to:(t=e.absolutePath,t.substring(t.indexOf("/pages/")+6,t.indexOf(".")))},e.name.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")));var t}))),r.createElement(o.Link,{to:"/"},"< Back to Main Page"))}},1872:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var r=n(3366),o=(n(7294),n(4983)),a=n(376),i=["components"],l={},u={_frontmatter:l},c=a.Z;function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(c,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Update Truck"),(0,o.kt)("h2",null,"PATCH ",(0,o.kt)("inlineCode",{parentName:"h2"},"/v1/ems/device")),(0,o.kt)("p",null,"Update a device with values provided."),(0,o.kt)("h3",null,"Request"),(0,o.kt)("p",null,"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>"\n')),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "device_name": [string] Device name,\n    "os": [string] Device OS system\n}\n')),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"200")),(0,o.kt)("p",null,"Device has been successfully updated. Response is the newly updated device data."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "id": [string] ID of record,\n    "device_name": [string] Device name,\n    "device_id": [string] Generated device ID,\n    "os": [string] Device OS System\n}\n')),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"400")),(0,o.kt)("p",null,"Bad request from database update of device record."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": "Error updating database"\n}\n')),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"401")),(0,o.kt)("p",null,"Authorization issue."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,o.kt)("h4",null,"Messages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,o.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,o.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format.')))),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"500")),(0,o.kt)("p",null,"Internal error with the server."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error"\n}\n')))}s.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-ems-device-update-device-mdx-b245cff0bfa01ac4c58c.js.map