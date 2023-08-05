"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[35],{6947:function(e,t,n){var l=n(7294),a=n(1597);t.Z=function(){return l.createElement("footer",null,l.createElement("ul",null,[{link:"/",name:"Home"},{link:"/download",name:"Download"},{link:"/documentation",name:"Documentation"},{link:"/releases",name:"Releases"},{link:"/privacyPolicy",name:"Privacy Policy"},{link:"/elua",name:"End User License Agreement"}].map((function(e){return l.createElement("li",null,l.createElement(a.Link,{to:e.link},e.name))}))))}},8161:function(e,t,n){var l=n(7294),a=n(1597);t.Z=function(e){return(0,l.useEffect)((function(){!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","white")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"))}),[]),l.createElement("nav",null,l.createElement("h1",null,l.createElement(a.Link,{to:"/"},e.isPhone?"RTT":"Response Time Track"," App")),l.createElement("ul",null,l.createElement("li",null,l.createElement(a.Link,{to:"/download"},"Download")),l.createElement("li",null,l.createElement(a.Link,{to:"/documentation"},"Docs")),l.createElement("li",null,l.createElement(a.Link,{to:"/releases"},"Releases"))))}},561:function(e,t,n){n.r(t);var l=n(7294),a=n(1597),r=n(8161),o=n(6947),i=n(3654);t.default=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1];return(0,l.useEffect)((function(){function e(){n(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),l.createElement("div",{id:"main"},l.createElement(r.Z,{isPhone:t}),l.createElement(i.Z,{title:"Response Time Track - 1.02 Release"}),l.createElement("main",null,l.createElement("h1",null,"1.02 Release Notes"),l.createElement("p",null,"1.02 release is an update to add mileage travel tracking and Firebase integration. The mileage travel allows users to let the app track the mileage traveled and automatically fill out mileage. Firebase integration include crashlytics for monitoring app crashes. App crashes is not pleasant to experience as a user. Firebase analytics has been added for tracking how people utilize the app. This will allow to understand what features users love to use and what features users don't use. Lastly, there has been code refactoring in the app to prepare for cloud storage."),l.createElement("h3",null,"Changes"),l.createElement("ul",null,l.createElement("li",null,"Distance mileage tracker during time tracking for automatic mileage traveled calculation"),l.createElement("li",null,"Add settings page"),l.createElement("ul",null,l.createElement("li",null,"Includes option to turn on/off location mileage tracking feature"),l.createElement("li",null,"Default layout setting for history page")),l.createElement("li",null,"Firebase Crashlytics for monitoring crash message"),l.createElement("li",null,"Firebase Analytics for understanding how users interact with app")),l.createElement("h3",null,"Future Plans"),l.createElement("p",null,"Next plan is to allow option for cloud storage of records at a monthly service cost. This allows users to have logins and ability to store their time records in the cloud. Users will be able to fetch these records on other devices or have user use multiple devices at the same time."),l.createElement("p",null,l.createElement(a.Link,{to:"/releases"},l.createElement("p",{className:"release-link"},"Back to releases")))),l.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-releases-1-02-js-8784200bf9a358cd0a0e.js.map