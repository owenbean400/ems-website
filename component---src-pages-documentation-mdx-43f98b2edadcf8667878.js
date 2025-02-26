"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[2413],{9983:function(e,t,n){var r=n(7294),o=n(3421),i=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),a=n[0],c=n[1],l=(0,r.useState)(!1),s=l[0],u=l[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),c(window.innerWidth>768),u(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(i.Z,{title:"Response Time Track Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},s?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return c(!a)},onKeyDown:function(){return c(!a)}},r.createElement("div",{className:a?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:a?"x-line transition-bar":"hamburger-bar transition-bar"}),a?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,s?"RTT":"Response Time Track"," Documentation"))),r.createElement("main",{class:"document-main"},r.createElement(o.Z,{isShown:a,onClickArrow:function(){return c(!a)},sourceDirectory:"documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},3421:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),o=n(1597),i=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return r.createElement("div",null,r.createElement("li",{className:"section-title",onClick:function(){return o(!n)}},r.createElement("i",{className:n?"arrow down":"arrow right"}),e.title),r.createElement("ul",{style:n?{display:"block"}:{display:"none"},className:"list-drop"},e.children))};function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(){function e(e){this.nodeData=e,this.children=[]}var t=e.prototype;return t.add=function(t){var n=new e(t);return t.isDirectory?this.children.push(n):this.children.unshift(n),n},t.remove=function(e){this.children=this.children.filter((function(t){return t.nodeData!==e}))},t.absolutePathToLink=function(e){return"/"+e.replace(".mdx","")},t.nameToDisplay=function(e){return e.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ").replace(".mdx","")},t.htmlRender=function(){if(this.nodeData.isDirectory){for(var e,t=[],n=a(this.children);!(e=n()).done;){var c=e.value;t.push(c.htmlRender())}return r.createElement(i,{title:this.nodeData.name,children:t})}return r.createElement("li",null,r.createElement(o.Link,{to:this.absolutePathToLink(this.nodeData.absolutePath)},this.nameToDisplay(this.nodeData.name)))},e}(),s=n(5785),u=function(){function e(){this.root=null}var t=e.prototype;return t.traverseBF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.push.apply(t,(0,s.Z)(n.children)),e(n)}},t.traverseDF=function(e){for(var t=[this.root];t.length;){var n=t.shift();t.unshift.apply(t,(0,s.Z)(n.children)),e(n)}},e}(),d=function(e){var t=(0,o.useStaticQuery)("4144783580");function n(e,t,n){for(var r=e.split("/"),o=t.root,i=function(t){var i={isDirectory:t!=r.length-1,name:r[t],absolutePath:n+e},a=o.children.find((function(e){return e.nodeData.name==r[t]}));if(void 0===a){var c=o.add(i);o=c}else o=a},a=0;a<r.length;a++)i(a)}function i(){return("undefined"!=typeof window?window.location.href:"").split("/").find((function(e){return"api_documentation"===e}))}return r.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},r.createElement("ul",null,r.createElement("li",null,i()?r.createElement(o.Link,{to:"/api_documentation"},"API Documentation Page"):r.createElement(o.Link,{to:"/documentation"},"User Documentation Page")),function(e,t,r){var o=new l({isDirectory:!0,name:t}),i=new u;i.root=o;for(var a=0;a<e.length;a++)n(e[a].relativePath,i,r);return i}(i()?t.apiDocumentation.nodes:t.documentation.nodes,i()?"API Documentation":"User Documentation",i()?"api_documentation/":"documentation/").root.htmlRender()),r.createElement(o.Link,{to:"/"},"< Back to Main Page"))}},3314:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return u}});var r=n(3366),o=(n(7294),n(4983)),i=n(9983),a=["components"],c={},l={_frontmatter:c},s=i.Z;function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Response Time Track App"),(0,o.kt)("h3",null,"Description"),(0,o.kt)("p",null,"The Response Time Track App's goal is to allow paramedics to focus more on the rescue and less time on keeping track of reports.\nIt keeps tracks of the times of receiving calls, going on enroute, on scene, transport, and destination.\nThis data is saved for any desired use of the data."),(0,o.kt)("h3",null,"Use"),(0,o.kt)("p",null,"The app will keep track of each rescue, specifically tracking the time of call, enroute, scene, transport, and destination.\nEach change in action of the rescue will only need a push of a button.\nAt the end of the trip, the mileage can be recorded for reporting.\nThese rescue records is saved on the phone, which can be saved as csv file, written down, or sent to a server."))}u.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-documentation-mdx-43f98b2edadcf8667878.js.map