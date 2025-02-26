"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[2778],{376:function(e,t,n){var r=n(7294),o=n(3421),a=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],l=n[1],u=(0,r.useState)(!1),c=u[0],s=u[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),l(window.innerWidth>768),s(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(a.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},c?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return l(!i)},onKeyDown:function(){return l(!i)}},r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),i?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,c?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(o.Z,{isShown:i,onClickArrow:function(){return l(!i)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},3421:function(e,t,n){n.d(t,{Z:function(){return l}});var r={};n.r(r);var o={};n.r(o);var a=n(7294),i=n(1597);var l=function(e){var t=(0,i.useStaticQuery)("4144783580");function n(e,t,n){for(var r=e.split("/"),o=t.root,a=function(t){var a={isDirectory:t!=r.length-1,name:r[t],absolutePath:n+e},i=o.children.find((function(e){return e.nodeData.name==r[t]}));if(void 0===i){var l=o.add(a);o=l}else o=i},i=0;i<r.length;i++)a(i)}function l(){return("undefined"!=typeof window?window.location.href:"").split("/").find((function(e){return"api_documentation"===e}))}return a.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},a.createElement("ul",null,a.createElement("li",null,l()?a.createElement(i.Link,{to:"/api_documentation"},"API Documentation Page"):a.createElement(i.Link,{to:"/documentation"},"User Documentation Page")),function(e,t,a){var i=new r.SidebarNode({isDirectory:!0,name:t}),l=new o.Tree;l.root=i;for(var u=0;u<e.length;u++)n(e[u].relativePath,l,a);return l}(l()?t.apiDocumentation.nodes:t.documentation.nodes,l()?"API Documentation":"User Documentation",l()?"api_documentation/":"documentation/").root.htmlRender()),a.createElement(i.Link,{to:"/"},"< Back to Main Page"))}},6365:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var r=n(3366),o=(n(7294),n(4983)),a=n(376),i=["components"],l={},u={_frontmatter:l},c=a.Z;function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(c,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Get Rescue by ID"),(0,o.kt)("h2",null,"GET ",(0,o.kt)("inlineCode",{parentName:"h2"},"/v1/ems/rescue/{id}")),(0,o.kt)("p",null,"Gets a rescue record from ID for the user."),(0,o.kt)("h3",null,"Request"),(0,o.kt)("p",null,"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>"\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Path Parameters"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the rescue.")))),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"200")),(0,o.kt)("p",null,"The truck has been successfully found and returned."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "id": [string] The ID of the record,\n    "call_date": [string] Call date time in ISO 8602,\n    "enroute_date": [string] Enroute date time in ISO 8602,\n    "scene_date": [string] Scene date time in ISO 8602,\n    "transportation": [string] Transportation date time in ISO 8602,\n    "destination_date" [string] Destination date time in ISO 8602,\n    "mileage": [number] Amount of mileage with rescue,\n    "notes": [string] Extra notes to the rescue,\n    "truck_id": [string] The ID of truck record,\n    "truck_id": [string | NULL] The ID of truck record.\n}\n')),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"401")),(0,o.kt)("p",null,"Authorization issue."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,o.kt)("h4",null,"Messages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,o.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,o.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format.')))),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"404")),(0,o.kt)("p",null,"A rescue was not found with that ID for the user."),(0,o.kt)("h3",null,"Response ",(0,o.kt)("inlineCode",{parentName:"h3"},"500")),(0,o.kt)("p",null,"Internal error with the server."),(0,o.kt)("h4",null,"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error"\n}\n')))}s.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-ems-rescue-get-rescue-mdx-8be1512c9ac10607a00e.js.map