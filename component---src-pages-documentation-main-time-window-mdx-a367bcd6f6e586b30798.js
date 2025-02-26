"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[7950],{9983:function(A,e,t){var a=t(7294),n=t(1829),i=t(3654);e.Z=function(A){var e=A.children,t=(0,a.useState)(!1),r=t[0],o=t[1],c=(0,a.useState)(!1),l=c[0],s=c[1];return(0,a.useEffect)((function(){function A(){console.log(window.innerWidth),o(window.innerWidth>768),s(window.innerWidth<=768)}return window.addEventListener("resize",A),A(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",A)}}),[]),a.createElement("div",null,a.createElement(i.Z,{title:"Response Time Track Documentation"}),a.createElement("nav",null,a.createElement("div",{className:"nav-container-left"},l?a.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return o(!r)},onKeyDown:function(){return o(!r)}},a.createElement("div",{className:r?"x-line transition-bar":"hamburger-bar transition-bar"}),a.createElement("div",{className:r?"x-line transition-bar":"hamburger-bar transition-bar"}),r?void 0:a.createElement("div",{className:"hamburger-bar"})):void 0,a.createElement("h1",null,l?"RTT":"Response Time Track"," Documentation"))),a.createElement("main",{class:"document-main"},a.createElement(n.Z,{isShown:r,onClickArrow:function(){return o(!r)},sourceDirectory:"documentation"}),a.createElement("div",{className:"article-container"},a.createElement("article",null,e))))}},1829:function(A,e,t){t.d(e,{Z:function(){return l}});var a=t(5785),n=t(7294),i=t(1597),r=function(A){var e=(0,n.useState)(!1),t=e[0],a=e[1];return n.createElement("div",null,n.createElement("li",{className:"section-title",onClick:function(){return a(!t)}},n.createElement("i",{className:t?"arrow down":"arrow right"}),A.title),n.createElement("ul",{style:t?{display:"block"}:{display:"none"},className:"list-drop"},A.children))};function o(A,e){var t="undefined"!=typeof Symbol&&A[Symbol.iterator]||A["@@iterator"];if(t)return(t=t.call(A)).next.bind(t);if(Array.isArray(A)||(t=function(A,e){if(!A)return;if("string"==typeof A)return c(A,e);var t=Object.prototype.toString.call(A).slice(8,-1);"Object"===t&&A.constructor&&(t=A.constructor.name);if("Map"===t||"Set"===t)return Array.from(A);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(A,e)}(A))||e&&A&&"number"==typeof A.length){t&&(A=t);var a=0;return function(){return a>=A.length?{done:!0}:{done:!1,value:A[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(A,e){(null==e||e>A.length)&&(e=A.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=A[t];return a}var l=function(A){var e=(0,i.useStaticQuery)("4144783580");function t(A,e,t){for(var a=A.split("/"),n=e.root,i=function(e){var i={isDirectory:e!=a.length-1,name:a[e],absolutePath:t+A},r=n.children.find((function(A){return A.nodeData.name==a[e]}));if(void 0===r){var o=n.add(i);n=o}else n=r},r=0;r<a.length;r++)i(r)}function a(){return("undefined"!=typeof window?window.location.href:"").split("/").find((function(A){return"api_documentation"===A}))}return n.createElement("aside",{style:{left:A.isShown?"0px":"-260px"}},n.createElement("ul",null,n.createElement("li",null,a()?n.createElement(i.Link,{to:"/api_documentation"},"API Documentation Page"):n.createElement(i.Link,{to:"/documentation"},"User Documentation Page")),function(A,e,a){var n=new s({isDirectory:!0,name:e}),i=new d;i.root=n;for(var r=0;r<A.length;r++)t(A[r].relativePath,i,a);return i}(a()?e.apiDocumentation.nodes:e.documentation.nodes,a()?"API Documentation":"User Documentation",a()?"api_documentation/":"documentation/").root.htmlRender()),n.createElement(i.Link,{to:"/"},"< Back to Main Page"))},s=function(){function A(A){this.nodeData=A,this.children=[]}var e=A.prototype;return e.add=function(e){var t=new A(e);return e.isDirectory?this.children.push(t):this.children.unshift(t),t},e.remove=function(A){this.children=this.children.filter((function(e){return e.nodeData!==A}))},e.htmlRender=function(){if(this.nodeData.isDirectory){for(var A,e=[],t=o(this.children);!(A=t()).done;){var a=A.value;e.push(a.htmlRender())}return n.createElement(r,{title:this.nodeData.name,children:e})}return n.createElement("li",null,n.createElement(i.Link,{to:(c=this.nodeData.absolutePath,"/"+c.replace(".mdx",""))},this.nodeData.name.split("-").map((function(A){return A.charAt(0).toUpperCase()+A.substring(1)})).join(" ").replace(".mdx","")));var c},A}(),d=function(){function A(){this.root=null}var e=A.prototype;return e.traverseBF=function(A){for(var e=[this.root];e.length;){var t=e.shift();e.push.apply(e,(0,a.Z)(t.children)),A(t)}},e.traverseDF=function(A){for(var e=[this.root];e.length;){var t=e.shift();e.unshift.apply(e,(0,a.Z)(t.children)),A(t)}},A}()},4656:function(A,e,t){t.r(e),t.d(e,{_frontmatter:function(){return o},default:function(){return s}});var a=t(3366),n=(t(7294),t(4983)),i=t(9983),r=["components"],o={},c={_frontmatter:o},l=i.Z;function s(A){var e=A.components,t=(0,a.Z)(A,r);return(0,n.kt)(l,Object.assign({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"Time Window"),(0,n.kt)("p",null,"The time window is the tool that collects the time at which an action has happened.\nAt the end, the time window will ask for user to enter mileage traveled."),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"240px"}},"\n      ",(0,n.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/1072a71d01e1315480c6a4d06f899e85/7cc5e/time_screen.jpg",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,n.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUC/8QAGAEBAAMBAAAAAAAAAAAAAAAABAABAgP/2gAMAwEAAhADEAAAAdBarhoNwUCsuX0IlBJjp//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwAEEiEQERP/2gAIAQEAAQUCmmxIncFGzV9SVbg+ckQelttgdDn/xAAZEQADAQEBAAAAAAAAAAAAAAABAhEAAxD/2gAIAQMBAT8Bbo1ytRceak3z/8QAGREAAwEBAQAAAAAAAAAAAAAAAQIRAAMQ/9oACAECAQE/AV5rMwhmHRgJ5//EAB8QAAIBAgcAAAAAAAAAAAAAAAABEQJREBIgITGBkf/aAAgBAQAGPwLLScyShzfDsszerwhaP//EAB0QAQACAgIDAAAAAAAAAAAAAAEAERBBITFRYYH/2gAIAQEAAT8hXanbOeUeEgBuhYRTRX2XSNEc/fsgbJAAFBgx/9oADAMBAAIAAwAAABDLw/z/xAAYEQEAAwEAAAAAAAAAAAAAAAABABARIf/aAAgBAwEBPxBLdyMKJrh2v//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEh/9oACAECAQE/EAEzYahmAPK//8QAIBABAAICAQQDAAAAAAAAAAAAAQARMUEhEFFhgXGRwf/aAAgBAQABPxBZRuy6exCCW4H5MN+Q5HtAEWivzzGnKvaKsAk+iOlwlVLv5IixHkHL7gYBUBrpt0//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Time Screen",title:"Time Screen",src:"/static/1072a71d01e1315480c6a4d06f899e85/09b79/time_screen.jpg",srcSet:["/static/1072a71d01e1315480c6a4d06f899e85/59e87/time_screen.jpg 60w","/static/1072a71d01e1315480c6a4d06f899e85/e439a/time_screen.jpg 120w","/static/1072a71d01e1315480c6a4d06f899e85/09b79/time_screen.jpg 240w","/static/1072a71d01e1315480c6a4d06f899e85/158ba/time_screen.jpg 360w","/static/1072a71d01e1315480c6a4d06f899e85/7cc5e/time_screen.jpg 480w"],sizes:"(max-width: 240px) 100vw, 240px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    "),"\n",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"240px"}},"\n      ",(0,n.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/bc58d8ad6a41b2332b15aaf739dce6ef/7cc5e/time_nav.jpg",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,n.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"18.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHWsJAX/8QAFhAAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEBAAEFAhF//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAYEAADAQEAAAAAAAAAAAAAAAAAARExQf/aAAgBAQABPyFJJ1D0/9oADAMBAAIAAwAAABALz//EABURAQEAAAAAAAAAAAAAAAAAABAx/9oACAEDAQE/EIP/xAAVEQEBAAAAAAAAAAAAAAAAAAAQMf/aAAgBAgEBPxCj/8QAGBABAQEBAQAAAAAAAAAAAAAAAQARIVH/2gAIAQEAAT8QBBuD7NLq/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Time Navigation",title:"Time Navigation",src:"/static/bc58d8ad6a41b2332b15aaf739dce6ef/09b79/time_nav.jpg",srcSet:["/static/bc58d8ad6a41b2332b15aaf739dce6ef/59e87/time_nav.jpg 60w","/static/bc58d8ad6a41b2332b15aaf739dce6ef/e439a/time_nav.jpg 120w","/static/bc58d8ad6a41b2332b15aaf739dce6ef/09b79/time_nav.jpg 240w","/static/bc58d8ad6a41b2332b15aaf739dce6ef/158ba/time_nav.jpg 360w","/static/bc58d8ad6a41b2332b15aaf739dce6ef/7cc5e/time_nav.jpg 480w"],sizes:"(max-width: 240px) 100vw, 240px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,n.kt)("h2",null,"Time Actions"),(0,n.kt)("p",null,"Each action will have a button in the middle of the screen to push when switching to a different actions.\nBelow the button is a ",(0,n.kt)("inlineCode",{parentName:"p"},"Go Back")," text that is clickable.\nWhen clicked on, the action will go backwards and will override previous time when clicking on the button to go forward."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Call")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Push when the call has been retrieved."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Enroute")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Push after call ended and starting the drive to the scene."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Scene")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Push after arriving onto the scene."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Transport")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Push when leaving the scene."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Destination")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Push after arriving to destination.")))),(0,n.kt)("h2",null,"Mileage"),(0,n.kt)("p",null,"At the end of the actions is a place to enter the mileage traveled during the rescue.\nClick on the white box in the middle of the pop up box to display the keyboard.\nEnter the mileage in the white box. After typing out the mileage, hit ",(0,n.kt)("inlineCode",{parentName:"p"},"Complete")," to save the time record.\nIf nothing was typed in the box, the mileage will be saved as 0 miles.\nIf ",(0,n.kt)("inlineCode",{parentName:"p"},"Destination")," button was accidently clicked, there is a ",(0,n.kt)("inlineCode",{parentName:"p"},"Back")," text in the mileage display box to go backwards."),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"240px"}},"\n      ",(0,n.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/2977d53ee87a32e815a2d15166bf68c4/ec605/time_mileage_screen.jpg",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,n.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAejbTN55GwWEaAf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAgETFCBB/9oACAEBAAEFAqFgoUx0O6//xAAYEQADAQEAAAAAAAAAAAAAAAACE1EAEP/aAAgBAwEBPwFYzLGd/8QAGREAAgMBAAAAAAAAAAAAAAAAAlEAEBIT/9oACAECAQE/Adk50J3/AP/EABYQAQEBAAAAAAAAAAAAAAAAAEEAIP/aAAgBAQAGPwJmd//EABwQAAICAgMAAAAAAAAAAAAAAAABEUEgkSFh8P/aAAgBAQABPyGgn0eUHduc0JYsP//aAAwDAQACAAMAAAAQt/AA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxALf//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QGX//xAAfEAEAAgAGAwAAAAAAAAAAAAABABEgITFRYdFxsfD/2gAIAQEAAT8QvINetr2Tm+PEH63UUWHtcHMypZLcH//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Mileage Screen",title:"Mileage Screen",src:"/static/2977d53ee87a32e815a2d15166bf68c4/09b79/time_mileage_screen.jpg",srcSet:["/static/2977d53ee87a32e815a2d15166bf68c4/59e87/time_mileage_screen.jpg 60w","/static/2977d53ee87a32e815a2d15166bf68c4/e439a/time_mileage_screen.jpg 120w","/static/2977d53ee87a32e815a2d15166bf68c4/09b79/time_mileage_screen.jpg 240w","/static/2977d53ee87a32e815a2d15166bf68c4/158ba/time_mileage_screen.jpg 360w","/static/2977d53ee87a32e815a2d15166bf68c4/7cc5e/time_mileage_screen.jpg 480w","/static/2977d53ee87a32e815a2d15166bf68c4/ec605/time_mileage_screen.jpg 1125w"],sizes:"(max-width: 240px) 100vw, 240px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,n.kt)("h2",null,"Truck"),(0,n.kt)("p",null,"If enabled truck entry within setting windows, a truck entry will display after mileage input.\nTap on the selection box to choose the truck that was used during rescue.\nWhen finished, hit ",(0,n.kt)("inlineCode",{parentName:"p"},"Complete")," to finish the rescue time."),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"240px"}},"\n      ",(0,n.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/1361bba6ffe1ea47513b3ca24874bfec/ec605/time_truck_screen.jpg",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,n.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB6Oql5yLBoRoB/8QAGRAAAwADAAAAAAAAAAAAAAAAAAITFCAh/9oACAEBAAEFAoKQUx0O7f/EABgRAAMBAQAAAAAAAAAAAAAAAAITUQAQ/9oACAEDAQE/AVjMsZ3/xAAZEQACAwEAAAAAAAAAAAAAAAACUQAQEhP/2gAIAQIBAT8B2TnQnf8A/8QAFhABAQEAAAAAAAAAAAAAAAAAQQAg/9oACAEBAAY/AmZ3/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERIZEgMUFh8P/aAAgBAQABPyFKcZ0eUHdmbqIfIlo//9oADAMBAAIAAwAAABCEMAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EAt//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxARf//EACAQAQACAAUFAAAAAAAAAAAAAAEAESAhMUHRUWFxsfD/2gAIAQEAAT8QSAZ1KPUq3+PEG4nEQKhUt0F9ogZmD//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Truck Entry Screen",title:"Truck Entry Screen",src:"/static/1361bba6ffe1ea47513b3ca24874bfec/09b79/time_truck_screen.jpg",srcSet:["/static/1361bba6ffe1ea47513b3ca24874bfec/59e87/time_truck_screen.jpg 60w","/static/1361bba6ffe1ea47513b3ca24874bfec/e439a/time_truck_screen.jpg 120w","/static/1361bba6ffe1ea47513b3ca24874bfec/09b79/time_truck_screen.jpg 240w","/static/1361bba6ffe1ea47513b3ca24874bfec/158ba/time_truck_screen.jpg 360w","/static/1361bba6ffe1ea47513b3ca24874bfec/7cc5e/time_truck_screen.jpg 480w","/static/1361bba6ffe1ea47513b3ca24874bfec/ec605/time_truck_screen.jpg 1125w"],sizes:"(max-width: 240px) 100vw, 240px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,n.kt)("h2",null,"Notes"),(0,n.kt)("p",null,"If enabled notes within setting windows, a note entry will display after the mileage input or truck entry.\nEnter a note that you want to add with the rescue time.\nWhen finished, hit ",(0,n.kt)("inlineCode",{parentName:"p"},"Complete")," to finish the rescue time."),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"240px"}},"\n      ",(0,n.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/f3eb450f09bcf6f5785dced5c2d22dbe/ec605/notes_screen.jpg",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,n.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB6N1W88baKI0A/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAITAREUIEH/2gAIAQEAAQUCgUgUxlO3Kaf/xAAYEQACAwAAAAAAAAAAAAAAAAACEwAQUf/aAAgBAwEBPwFYxQZf/8QAGREAAQUAAAAAAAAAAAAAAAAAAgAQEhNR/9oACAECAQE/AZkrC1//xAAYEAACAwAAAAAAAAAAAAAAAAABECAxQf/aAAgBAQAGPwLVZn//xAAaEAADAAMBAAAAAAAAAAAAAAAAAREQYYGh/9oACAEBAAE/IUttXuG1+CaNmxWUx//aAAwDAQACAAMAAAAQDy88/8QAFREBAQAAAAAAAAAAAAAAAAAAIGH/2gAIAQMBAT8QiB//xAAVEQEBAAAAAAAAAAAAAAAAAAAgYf/aAAgBAgEBPxC43//EAB4QAQACAQQDAAAAAAAAAAAAAAEAEUEhUaHRYZHx/9oACAEBAAE/ENAAZsvifP6QK+Y6lGSreGDFleolFatcSjaU2JQYn//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Notes Entry Screen",title:"Notes Entry Screen",src:"/static/f3eb450f09bcf6f5785dced5c2d22dbe/09b79/notes_screen.jpg",srcSet:["/static/f3eb450f09bcf6f5785dced5c2d22dbe/59e87/notes_screen.jpg 60w","/static/f3eb450f09bcf6f5785dced5c2d22dbe/e439a/notes_screen.jpg 120w","/static/f3eb450f09bcf6f5785dced5c2d22dbe/09b79/notes_screen.jpg 240w","/static/f3eb450f09bcf6f5785dced5c2d22dbe/158ba/notes_screen.jpg 360w","/static/f3eb450f09bcf6f5785dced5c2d22dbe/7cc5e/notes_screen.jpg 480w","/static/f3eb450f09bcf6f5785dced5c2d22dbe/ec605/notes_screen.jpg 1125w"],sizes:"(max-width: 240px) 100vw, 240px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")))}s.isMDXComponent=!0},3366:function(A,e,t){function a(A,e){if(null==A)return{};var t,a,n={},i=Object.keys(A);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}t.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-documentation-main-time-window-mdx-a367bcd6f6e586b30798.js.map