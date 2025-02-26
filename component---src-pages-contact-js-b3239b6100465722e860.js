"use strict";(self.webpackChunkems_documentation=self.webpackChunkems_documentation||[]).push([[5501],{1671:function(e,t,n){var a=n(7294);t.Z=function(e){var t=(0,a.useState)(""),n=t[0],l=t[1],r=(0,a.useState)(""),o=r[0],c=r[1],m=(0,a.useState)(""),i=m[0],s=m[1];return a.createElement("div",{className:"email-container"},""!==i?a.createElement("p",{className:"feedback-response"},i):void 0,a.createElement("div",null,a.createElement("p",{className:"email-label"},"Email (Optional)"),a.createElement("input",{className:"email-input",maxlength:"100",type:"email",onChange:function(e){var t=e.target.value;l(t)}})),a.createElement("div",null,a.createElement("p",{className:"email-label"},"Comment"),a.createElement("textarea",{className:"comment-input","data-limit-rows":"true",maxlength:"100",rows:"5",onChange:function(e){var t=e.target.value;c(t)}})),a.createElement("button",{onClick:function(){return e={email:n,comment:o},void fetch("https://feedback-3tggii3mlq-uc.a.run.app/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.ok?s("Feedback sent!"):s("Error sending feedback.")})).catch((function(e){s("Error sending feedback.")}));var e}},"Send Feedback"))}},6947:function(e,t,n){var a=n(7294),l=n(1597);t.Z=function(){return a.createElement("footer",null,a.createElement("ul",null,[{link:"/",name:"Home"},{link:"/download",name:"Download"},{link:"/documentation",name:"Documentation"},{link:"/releases",name:"Releases"},{link:"/privacyPolicy",name:"Privacy Policy"},{link:"/contact",name:"Contact"},{link:"/elua",name:"ELUA"},{link:"/google-delete",name:"Delete Account"}].map((function(e){return a.createElement("li",null,a.createElement(l.Link,{to:e.link},e.name))}))))}},318:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(1597),r=n.p+"static/android-chrome-192x192-931197efaf1cc6080fc29ee0a024b22c.png",o=function(e){var t=(0,a.useState)(!1),n=t[0],o=t[1],c=e.links.map((function(e){return a.createElement("li",null,a.createElement(l.Link,{to:e.link},e.name))}));return a.createElement("div",null,a.createElement("div",{className:"hamburger-container",role:"presentation",onClick:function(){return o(!n)},onKeyDown:function(){return o(!n)}},a.createElement("div",{className:"hamburger-bar"}),a.createElement("div",{className:"hamburger-bar"}),a.createElement("div",{className:"hamburger-bar"})),a.createElement("div",{className:"side-menu",style:{right:n?"0":"-400px"}},a.createElement("div",{className:"side-menu-header"},a.createElement("img",{src:r,alt:"Response Time Track"}),a.createElement("div",{className:"close-x-container",role:"presentation",onClick:function(){return o(!1)},onKeyDown:function(){return o(!1)}},a.createElement("div",{className:"x-line"}),a.createElement("div",{className:"x-line"}))),a.createElement("ul",null,c)))},c=function(e){(0,a.useEffect)((function(){!function(){if("undefined"!=typeof window&&void 0!==window.matchMedia){return window.matchMedia("(prefers-color-scheme: dark)").matches}return!1}()?(document.documentElement.style.setProperty("--primColor","#0099FF"),document.documentElement.style.setProperty("--textColor","#111"),document.documentElement.style.setProperty("--displayColor","white"),document.documentElement.style.setProperty("--bgColor","white"),document.documentElement.style.setProperty("--secondColor","#dddddd")):(document.documentElement.style.setProperty("--primColor","#0784b5"),document.documentElement.style.setProperty("--textColor","#c9c9c9"),document.documentElement.style.setProperty("--displayColor","#eee"),document.documentElement.style.setProperty("--bgColor","#050505"),document.documentElement.style.setProperty("--secondColor","#2e2e2e"))}),[]);var t=[{link:"/download",name:"Download"},{link:"/prices",name:"Price"},{link:"/documentation",name:"Docs"},{link:"/releases",name:"Releases"}],n=t.map((function(e){return a.createElement("li",null,a.createElement(l.Link,{to:e.link},e.name))}));return a.createElement("nav",null,a.createElement("h1",null,a.createElement(l.Link,{to:"/"},"Response Time Track")),a.createElement("ul",{style:{width:e.isPhone?"32px":"300px"}},e.isPhone?a.createElement(o,{links:t}):n))}},5791:function(e,t,n){n.r(t);var a=n(318),l=n(6947),r=n(3654),o=n(1671),c=n(7294);t.default=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return(0,c.useEffect)((function(){function e(){n(window.innerWidth<=768)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c.createElement("div",{id:"main"},c.createElement(a.Z,{isPhone:t}),c.createElement(r.Z,{title:"Response Time Track Contact",description:"Contact Response Time Track through obean@responsetimetrack.app"}),c.createElement("main",null,c.createElement("h1",null,"Contact"),c.createElement("div",{className:"contact-container"},c.createElement("div",{className:"contact-info-container"},c.createElement("p",null,"Feel free to contact through email obean@responsetimetrack.app or from our contact form. We do not have an available phone number."),c.createElement("p",{className:"contact-info-email"},"Email: obean@responsetimetrack.app")),c.createElement("div",{className:"contact-form-container"},c.createElement(o.Z,null)))),c.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-b3239b6100465722e860.js.map