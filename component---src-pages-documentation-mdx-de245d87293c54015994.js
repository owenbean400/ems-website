"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[2413],{9983:function(e,t,n){var o=n(7294),r=n(7793),a=n(3654);t.Z=function(e){var t=e.children,n=(0,o.useState)(!1),i=n[0],c=n[1],s=(0,o.useState)(!1),l=s[0],u=s[1];return(0,o.useEffect)((function(){function e(){console.log(window.innerWidth),c(window.innerWidth>768),u(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),o.createElement("div",null,o.createElement(a.Z,{title:"Response Time Track Documentation"}),o.createElement("nav",null,o.createElement("div",{className:"nav-container-left"},l?o.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return c(!i)},onKeyDown:function(){return c(!i)}},o.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),o.createElement("div",{className:i?"x-line transition-bar":"hamburger-bar transition-bar"}),i?void 0:o.createElement("div",{className:"hamburger-bar"})):void 0,o.createElement("h1",null,l?"RTT":"Response Time Track"," Documentation"))),o.createElement("main",{class:"document-main"},o.createElement(r.Z,{isShown:i,onClickArrow:function(){return c(!i)},sourceDirectory:"documentation"}),o.createElement("div",{className:"article-container"},o.createElement("article",null,t))))}},7793:function(e,t,n){var o=n(7294),r=n(1597);t.Z=function(e){var t=(0,r.useStaticQuery)("2988636667"),n="api_documentation"===e.sourceDirectory?t.apiDocumentation:t.documentation;return o.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},o.createElement("ul",null,o.createElement("li",null,o.createElement(r.Link,{to:"/api_documentation"},"API Documentation")),n.nodes.map((function(e){return o.createElement("li",null,o.createElement(r.Link,{to:(t=e.absolutePath,t.substring(t.indexOf("/pages/")+6,t.indexOf(".")))},e.name.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")));var t}))),o.createElement(r.Link,{to:"/"},"< Back to Main Page"))}},3314:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return u}});var o=n(3366),r=(n(7294),n(4983)),a=n(9983),i=["components"],c={},s={_frontmatter:c},l=a.Z;function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Response Time Track App"),(0,r.kt)("h3",null,"Description"),(0,r.kt)("p",null,"The Response Time Track App's goal is to allow paramedics to focus more on the rescue and less time on keeping track of reports.\nIt keeps tracks of the times of receiving calls, going on enroute, on scene, transport, and destination.\nThis data is saved for any desired use of the data."),(0,r.kt)("h3",null,"Use"),(0,r.kt)("p",null,"The app will keep track of each rescue, specifically tracking the time of call, enroute, scene, transport, and destination.\nEach change in action of the rescue will only need a push of a button.\nAt the end of the trip, the mileage can be recorded for reporting.\nThese rescue records is saved on the phone, which can be saved as csv file, written down, or sent to a server."))}u.isMDXComponent=!0},3366:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-documentation-mdx-de245d87293c54015994.js.map