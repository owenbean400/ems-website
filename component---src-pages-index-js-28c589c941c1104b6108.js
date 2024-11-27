"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[678],{6947:function(e,t,n){var a=n(7294),l=n(1597);t.Z=function(){return a.createElement("footer",null,a.createElement("ul",null,[{link:"/",name:"Home"},{link:"/download",name:"Download"},{link:"/documentation",name:"Documentation"},{link:"/releases",name:"Releases"},{link:"/privacyPolicy",name:"Privacy Policy"},{link:"/elua",name:"End User License Agreement"}].map((function(e){return a.createElement("li",null,a.createElement(l.Link,{to:e.link},e.name))}))))}},318:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1597),c=n.p+"static/android-chrome-192x192-931197efaf1cc6080fc29ee0a024b22c.png",r=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1],i=e.links.map((function(e){return a.createElement("li",null,a.createElement(l.Link,{to:e.link},e.name))}));return a.createElement("div",null,a.createElement("div",{className:"hamburger-container",onClick:function(){return r(!n)}},a.createElement("div",{className:"hamburger-bar"}),a.createElement("div",{className:"hamburger-bar"}),a.createElement("div",{className:"hamburger-bar"})),a.createElement("div",{className:"side-menu",style:{right:n?"0":"-400px"}},a.createElement("div",{className:"side-menu-header"},a.createElement("img",{src:c,alt:"Response Time Track"}),a.createElement("div",{className:"close-x-container",onClick:function(){return r(!1)}},a.createElement("div",{className:"x-line"}),a.createElement("div",{className:"x-line"}))),a.createElement("ul",null,i)))},i=function(e){(0,a.useEffect)((function(){!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","white"),document.documentElement.style.setProperty("--secondColor","#dddddd")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e"))}),[]);var t=[{link:"/download",name:"Download"},{link:"/prices",name:"Price"},{link:"/documentation",name:"Docs"},{link:"/releases",name:"Releases"}],n=t.map((function(e){return a.createElement("li",null,a.createElement(l.Link,{to:e.link},e.name))}));return a.createElement("nav",null,a.createElement("h1",null,a.createElement(l.Link,{to:"/"},"Response Time Track")),a.createElement("ul",{style:{width:e.isPhone?"32px":"300px"}},e.isPhone?a.createElement(r,{links:t}):n))}},1973:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),l=n(1597),c=n(318),r=n(6947),i=n(3654),o=(n(8230),n.p+"static/call-8fa09ffd3a2e921b48a02a12437632e1.png"),m=n.p+"static/enroute-295f8ea3c64dd523a511799c0ba8fc0c.png",s=n.p+"static/scene-decd5ba0c7d4c3dc9d4cbc03b4cc3fd6.png",d=n.p+"static/transport-47ff270a3e822c3a2b3337d766cbc86f.png",u=n.p+"static/destination-94813a6895bc046b762eedd1b2473077.png",p=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],p=(0,a.useState)(""),E=p[0],f=p[1],k=(0,a.useState)(""),h=k[0],v=k[1],b=(0,a.useState)(""),y=b[0],g=b[1];(0,a.useEffect)((function(){function e(){n(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return a.createElement("div",{id:"main"},a.createElement(i.Z,{title:"Response Time Track",description:"Track response times effortlessly with the Response Time Tracker App, designed for EMTs, paramedics, and EMS professionals. Available now for Android and iOS, this app simplifies time recording with just a few taps."}),a.createElement(c.Z,{isPhone:t}),a.createElement("div",{className:"index-page"},a.createElement("div",{className:"title-container"},a.createElement("h1",null,"Effortless Time Tracking for EMS"),a.createElement(l.Link,{to:"/download"},"Download Now →")),a.createElement("div",{className:"screenshot-container"},t?a.createElement("div",null):a.createElement("img",{src:o}),a.createElement("img",{src:m}),a.createElement("img",{src:s}),a.createElement("img",{src:d}),t?a.createElement("div",null):a.createElement("img",{src:u})),a.createElement("div",{className:"documentation-container"},a.createElement("p",null,a.createElement(l.Link,{to:"/documentation"},"Read more about how our mobile app function in our documentation page →"))),a.createElement("div",{className:"displays-container"},a.createElement("div",{className:"display-container"},a.createElement("h2",null,"Premium Tracker"),a.createElement("p",null,a.createElement(l.Link,{to:"/prices"},"Get precise location tracking with time records and secure cloud storage to stay organized →"))),t?void 0:a.createElement("hr",null),a.createElement("div",{className:"display-container"},a.createElement("h2",null,"Releases"),a.createElement("p",null,a.createElement(l.Link,{to:"/releases"},'Our app keeps you updated with the newest releases, ensuring you"re always equipped with the latest enhancements →'))),t?void 0:a.createElement("hr",null),a.createElement("div",{className:"display-container"},a.createElement("h2",null,"Download"),a.createElement("p",null,a.createElement(l.Link,{to:"/download"},"Our app is available on Android and iOS →")))),a.createElement("div",{className:"feedback-container"},a.createElement("h2",null,"Feedback"),a.createElement("p",{className:"feedback-text"},"Love to hear feedback on our app and how we can improve it"),""!==y?a.createElement("p",{className:"feedback-response"},y):void 0,a.createElement("div",null,a.createElement("p",{className:"feedback-label"},"Email (Optional)"),a.createElement("input",{className:"email-input",maxlength:"100",type:"email",onChange:function(e){var t=e.target.value;f(t)}})),a.createElement("div",null,a.createElement("p",{className:"feedback-label"},"Comment"),a.createElement("textarea",{className:"comment-input","data-limit-rows":"true",maxlength:"100",rows:"5",onChange:function(e){var t=e.target.value;v(t)}})),a.createElement("button",{onClick:function(){return e={email:E,comment:h},void fetch("https://feedback-3tggii3mlq-uc.a.run.app/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.ok?g("Feedback sent!"):g("Error sending feedback.")})).catch((function(e){g("Error sending feedback.")}));var e}},"Send Feedback"))),a.createElement(r.Z,null))}},8230:function(e,t,n){t.Z=n.p+"static/download_android-da4e2e37b85639524c9da2a2d63bfb0c.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-28c589c941c1104b6108.js.map