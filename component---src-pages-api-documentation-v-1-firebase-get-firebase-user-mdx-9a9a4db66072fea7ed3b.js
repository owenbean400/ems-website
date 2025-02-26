"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[1498],{376:function(e,t,n){var r=n(7294),o=n(7793),a=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],l=n[1],s=(0,r.useState)(!1),u=s[0],c=s[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),l(window.innerWidth>768),c(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(a.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},u?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return l(!i)},onKeyDown:function(){return l(!i)}},r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),i?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,u?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(o.Z,{isShown:i,onClickArrow:function(){return l(!i)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},7793:function(e,t,n){var r=n(7294),o=n(1597);t.Z=function(e){var t=(0,o.useStaticQuery)("2988636667"),n="api_documentation"===e.sourceDirectory?t.apiDocumentation:t.documentation;return r.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{to:"/api_documentation"},"API Documentation")),n.nodes.map((function(e){return r.createElement("li",null,r.createElement(o.Link,{to:(t=e.absolutePath,t.substring(t.indexOf("/pages/")+6,t.indexOf(".")))},e.name.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")));var t})),r.createElement(SidebarSection,{props:[{name:"test",absolutePath:"test"}]})),r.createElement(o.Link,{to:"/"},"< Back to Main Page"))}},1669:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var r=n(3366),o=(n(7294),n(4983)),a=n(376),i=["components"],l={},s={_frontmatter:l},u=a.Z;function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(u,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Get Firebase uID"),(0,o.kt)("h2",null,"GET ",(0,o.kt)("inlineCode",{parentName:"h2"},"/v1/system/firebase/user")),(0,o.kt)("p",null,"Get the user ID from Response Time Track that is associated with the Firebase user. A user ID is created if it does not exist in Response Time Track data."),(0,o.kt)("h3",null,"Request"),(0,o.kt)("p",null,"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>"\n')),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"200")),(0,o.kt)("p",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "user_id": [string] EMS User ID\n}\n')),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"401")),(0,o.kt)("p",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,o.kt)("p",null,"Messages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,o.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,o.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format')))),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"500")),(0,o.kt)("p",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error",\n}\n')))}c.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-firebase-get-firebase-user-mdx-9a9a4db66072fea7ed3b.js.map