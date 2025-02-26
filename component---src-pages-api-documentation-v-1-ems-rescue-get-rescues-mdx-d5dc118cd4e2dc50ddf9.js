"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[3199],{376:function(e,t,n){var r=n(7294),a=n(7793),o=n(3654);t.Z=function(e){var t=e.children,n=(0,r.useState)(!1),l=n[0],i=n[1],u=(0,r.useState)(!1),s=u[0],m=u[1];return(0,r.useEffect)((function(){function e(){console.log(window.innerWidth),i(window.innerWidth>768),m(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",null,r.createElement(o.Z,{title:"Response Time Track API Documentation"}),r.createElement("nav",null,r.createElement("div",{className:"nav-container-left"},s?r.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return i(!l)},onKeyDown:function(){return i(!l)}},r.createElement("div",{className:l?"x-line transition-bar":"hamburger-bar transition-bar"}),r.createElement("div",{className:l?"x-line transition-bar":"hamburger-bar transition-bar"}),l?void 0:r.createElement("div",{className:"hamburger-bar"})):void 0,r.createElement("h1",null,s?"RTT":"Response Time Track"," API Doc"))),r.createElement("main",{class:"document-main"},r.createElement(a.Z,{isShown:l,onClickArrow:function(){return i(!l)},sourceDirectory:"api_documentation"}),r.createElement("div",{className:"article-container"},r.createElement("article",null,t))))}},7793:function(e,t,n){var r=n(7294),a=n(1597);t.Z=function(e){var t=(0,a.useStaticQuery)("2988636667"),n="api_documentation"===e.sourceDirectory?t.apiDocumentation:t.documentation;return r.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},r.createElement("ul",null,r.createElement("li",null,r.createElement(a.Link,{to:"/api_documentation"},"API Documentation")),n.nodes.map((function(e){return r.createElement("li",null,r.createElement(a.Link,{to:(t=e.absolutePath,t.substring(t.indexOf("/pages/")+6,t.indexOf(".")))},e.name.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")));var t}))),r.createElement(a.Link,{to:"/"},"< Back to Main Page"))}},7680:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return m}});var r=n(3366),a=(n(7294),n(4983)),o=n(376),l=["components"],i={},u={_frontmatter:i},s=o.Z;function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(s,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Get Trucks"),(0,a.kt)("h2",null,"GET ",(0,a.kt)("inlineCode",{parentName:"h2"},"/v1/ems/rescue")),(0,a.kt)("p",null,"Gets a list of rescue through paging. Pagination allow for smaller set of data to be sent over through the api that helps prevent huge data transfer over the network."),(0,a.kt)("h3",null,"Request"),(0,a.kt)("p",null,"Headers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <Token>"\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Query Parameters"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageNumber"),(0,a.kt)("td",{parentName:"tr",align:null},"The page number of fetching truck records. Must be an integer greater than 0. Default value to first page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of items in the list fetched from a page. Must be an integer between 1 and 20 inclusively. Default value is 5.")))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"200")),(0,a.kt)("p",null,"The rescue has been successfully fetched."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "pageSize": [number] The page size of the content,\n    "pageNumber": [number] The page number of the content,\n    "content": [\n        {\n            "id": [string] The ID of the record,\n            "call_date": [string] Call date time in ISO 8602,\n            "enroute_date": [string] Enroute date time in ISO 8602,\n            "scene_date": [string] Scene date time in ISO 8602,\n            "transportation": [string] Transportation date time in ISO 8602,\n            "destination_date" [string] Destination date time in ISO 8602,\n            "mileage": [number] Amount of mileage with rescue,\n            "notes": [string] Extra notes to the rescue,\n            "truck_id": [string] The ID of truck record,\n            "truck_id": [string | NULL] The ID of truck record.\n        },\n        ...\n    ]\n}\n')),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"400")),(0,a.kt)("p",null,"There was an issue with the query parameters."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "error": [string] error,\n    "message": [string] message about the error\n}\n')),(0,a.kt)("h4",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pageNumber must be an int that is greater than 0.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The pageNumber query was not a whole number that is greater than 0."))),(0,a.kt)("li",{parentName:"ul"},"pageSize must be an int that is greater than 0 and less than or equal to 20.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The pageSize query was not a whole number that is greater than 0 and less than or equal to 20.")))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"401")),(0,a.kt)("p",null,"Authorization issue."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "Error": "Unauthorized",\n    "message": [string] Authorization issue\n}\n')),(0,a.kt)("h4",null,"Messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are not authorized to access this resource",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The token from Firebase is invalid"))),(0,a.kt)("li",{parentName:"ul"},"Authorization header is missing",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'There is no "Authorization" in the header request.'))),(0,a.kt)("li",{parentName:"ul"},"Invalid authorization header format",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'The "Authorization" header does not have "Bearer Token" format.')))),(0,a.kt)("h3",null,"Response ",(0,a.kt)("inlineCode",{parentName:"h3"},"500")),(0,a.kt)("p",null,"Internal error with the server."),(0,a.kt)("h4",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "error": "Internal Server Error",\n    "message": "Internal Server Error"\n}\n')))}m.isMDXComponent=!0},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-api-documentation-v-1-ems-rescue-get-rescues-mdx-d5dc118cd4e2dc50ddf9.js.map