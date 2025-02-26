"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[8065],{9983:function(e,t,n){var a=n(7294),o=n(7793),i=n(3654);t.Z=function(e){var t=e.children,n=(0,a.useState)(!1),A=n[0],r=n[1],l=(0,a.useState)(!1),s=l[0],c=l[1];return(0,a.useEffect)((function(){function e(){console.log(window.innerWidth),r(window.innerWidth>768),c(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","#dddddd"),document.documentElement.style.setProperty("--secondColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e")),function(){return window.removeEventListener("resize",e)}}),[]),a.createElement("div",null,a.createElement(i.Z,{title:"Response Time Track Documentation"}),a.createElement("nav",null,a.createElement("div",{className:"nav-container-left"},s?a.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return r(!A)},onKeyDown:function(){return r(!A)}},a.createElement("div",{className:A?"x-line transition-bar":"hamburger-bar transition-bar"}),a.createElement("div",{className:A?"x-line transition-bar":"hamburger-bar transition-bar"}),A?void 0:a.createElement("div",{className:"hamburger-bar"})):void 0,a.createElement("h1",null,s?"RTT":"Response Time Track"," Documentation"))),a.createElement("main",{class:"document-main"},a.createElement(o.Z,{isShown:A,onClickArrow:function(){return r(!A)},sourceDirectory:"documentation"}),a.createElement("div",{className:"article-container"},a.createElement("article",null,t))))}},7793:function(e,t,n){var a=n(7294),o=n(1597);t.Z=function(e){var t=(0,o.useStaticQuery)("2988636667"),n="api_documentation"===e.sourceDirectory?t.apiDocumentation:t.documentation;return a.createElement("aside",{style:{left:e.isShown?"0px":"-260px"}},a.createElement("ul",null,a.createElement("li",null,a.createElement(o.Link,{to:"/api_documentation"},"API Documentation")),n.nodes.map((function(e){return a.createElement("li",null,a.createElement(o.Link,{to:(t=e.absolutePath,t.substring(t.indexOf("/pages/")+6,t.indexOf(".")))},e.name.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")));var t})),a.createElement(SidebarSection,{props:[{name:"test",absolutePath:"test"}]})),a.createElement(o.Link,{to:"/"},"< Back to Main Page"))}},8232:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return c}});var a=n(3366),o=(n(7294),n(4983)),i=n(9983),A=["components"],r={},l={_frontmatter:r},s=i.Z;function c(e){var t=e.components,n=(0,a.Z)(e,A);return(0,o.kt)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Settings"),(0,o.kt)("p",null,"Setting window allows for you to change specific setup and default values of Response Time Track."),(0,o.kt)("p",null,(0,o.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"240px"}},"\n      ",(0,o.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/f0f550aa8027387d07d937505ca2867f/ec605/setting_nav.jpg",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,o.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"203.33333333333331%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAApABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwEC/9oADAMBAAIQAxAAAAHfWiu5421qOqnSVA8c5uQP/8QAHhAAAQMEAwAAAAAAAAAAAAAAAAISEwEDEDIRFCD/2gAIAQEAAQUCgSQJOvTPPtw4cK1t7H//xAAYEQADAQEAAAAAAAAAAAAAAAACE1EAIP/aAAgBAwEBPwFYzKGc/wD/xAAYEQACAwAAAAAAAAAAAAAAAAACEwAgUf/aAAgBAgEBPwFhbGFX/8QAGBAAAgMAAAAAAAAAAAAAAAAAEEEAATD/2gAIAQEABj8CDi0s/wD/xAAfEAACAQMFAQAAAAAAAAAAAAAAARFBcZEQITFRoWH/2gAIAQEAAT8hSKvw+jwhVWptIldkDOBXE57RDnh5IILCwsPNq//aAAwDAQACAAMAAAAQxA4Ac8//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EFl//8QAFhEAAwAAAAAAAAAAAAAAAAAAACBh/9oACAECAQE/EBXX/8QAIhABAAIBAgYDAAAAAAAAAAAAAQARITFREEFhcZGhgcHw/9oACAEBAAE/ELQF7q+oYv2fEeKxbgRx4juWvmSrqmyxW3Mg6qejiUbNRKSV2ktt6ltvU588ddZqC/eA3eeFaPZ4f//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Settings Navigation",title:"Settings Navigation",src:"/static/f0f550aa8027387d07d937505ca2867f/09b79/setting_nav.jpg",srcSet:["/static/f0f550aa8027387d07d937505ca2867f/59e87/setting_nav.jpg 60w","/static/f0f550aa8027387d07d937505ca2867f/e439a/setting_nav.jpg 120w","/static/f0f550aa8027387d07d937505ca2867f/09b79/setting_nav.jpg 240w","/static/f0f550aa8027387d07d937505ca2867f/158ba/setting_nav.jpg 360w","/static/f0f550aa8027387d07d937505ca2867f/7cc5e/setting_nav.jpg 480w","/static/f0f550aa8027387d07d937505ca2867f/ec605/setting_nav.jpg 1125w"],sizes:"(max-width: 240px) 100vw, 240px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,o.kt)("h2",null,"Setting Items"),(0,o.kt)("h3",null,"Location Tracking"),(0,o.kt)("p",null,"Location tracking is used to calculate the mileage traveled during a rescue time.\nThis feature only displays for premium Response Time Trackers."),(0,o.kt)("h3",null,"History Information Layout"),(0,o.kt)("p",null,"History information layout determines the layout on first load into history window. The options are ",(0,o.kt)("inlineCode",{parentName:"p"},"card")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"grid"),"."),(0,o.kt)("h3",null,"CSV File Name"),(0,o.kt)("p",null,"When exporting csv file, the default name of CSV will have whatever text in settings added with the current date and time."),(0,o.kt)("h3",null,"Filter Record Duration displays"),(0,o.kt)("p",null,"Filter record duration displays is the default amount of days from today to filter rescue times in the history window."),(0,o.kt)("h3",null,"Purchase subscription"),(0,o.kt)("p",null,"For those who are not a premium Response Time Tracker, there is a place to purchase a subscription for no ads, cloud storage, and location tracking."),(0,o.kt)("h3",null,"Enable Notes Entry"),(0,o.kt)("p",null,"Enable notes entry will display a text box to add a note to rescue time at the end of tracking rescue time in time window."),(0,o.kt)("h3",null,"Trucks Info"),(0,o.kt)("p",null,"Window for setting up truck information for the app."),(0,o.kt)("h4",null,"Enable Truck Entry"),(0,o.kt)("p",null,"Enable truck entry to display truck selection towards the end of tracking rescue time in time window."),(0,o.kt)("h4",null,"Truck Default"),(0,o.kt)("p",null,"Select the default truck to be selected during the truck entry."),(0,o.kt)("h4",null,"Truck Information"),(0,o.kt)("p",null,"Setup all of the trucks that can be used for a selection.\nTap on the blue button to add a truck to the truck selection.\nHold and swipe left on record to display edit and delete options of truck selection."),(0,o.kt)("h3",null,"Delete Account"),(0,o.kt)("p",null,"Delete account will only display for those who are login. Delete account will delete account."),(0,o.kt)("h3",null,"Promote this App"),(0,o.kt)("p",null,"Allows for different ways to promote our app to others"),(0,o.kt)("h4",null,"Send Feedback"),(0,o.kt)("p",null,"Allows for feedback to be sent to us. Feel free to leave a comment, feedback, or suggestions about the app."),(0,o.kt)("h4",null,"Leave review on App Store/Google Play Store"),(0,o.kt)("p",null,"Depending on the phone, it will open Apple App Store or Google Play Console of the app."),(0,o.kt)("h4",null,"Share our website"),(0,o.kt)("p",null,"Opens up sharing options of our website."))}c.isMDXComponent=!0},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-documentation-main-setting-window-mdx-52ec230c808a74f1a5b7.js.map