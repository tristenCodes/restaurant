(()=>{"use strict";var e={486:(e,n,o)=>{o.d(n,{Z:()=>f});var t=o(81),r=o.n(t),a=o(645),i=o.n(a),c=o(667),s=o.n(c),d=new URL(o(463),o.b),u=i()(r()),l=s()(d);u.push([e.id,":root {\n  padding: 0;\n  margin: 0;\n  --primary-text: #DCD7C9;\n  --secondary-text: #A27B5C;\n  --primary-bg-color: #2C3639;\n  --secondary-bg-color: #3F4E4F;\n  color: var(--primary-text);\n}\ndiv,\nnav,\nheader,\nbody {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: var(--primary-bg-color);\n}\nh2 {\n  font-size: 3.2rem;\n}\np {\n  font-size: 28px;\n  margin: 0;\n  line-height: 40px;\n}\na {\n  font-size: 1.3rem;\n  text-decoration: none;\n  color: var(--secondary-text);\n  padding: 10px;\n}\na:hover {\n  color: white;\n}\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--primary-text);\n  gap: 4rem;\n  height: min(75px, 50vh);\n}\n#content .content__intro {\n  background: url("+l+");\n  background-position-y: -150px;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.5);\n  font-size: 3rem;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#content .content__intro #hero-text {\n  color: whitesmoke;\n}\n.content__welcome {\n  margin-block: 2rem;\n  margin-inline: auto;\n  width: min(1400px, 80vw);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2rem;\n}\n.content__welcome p {\n  width: min(90%, 80vw);\n}\n.content__welcome h2 {\n  padding: 1rem;\n  margin: 1rem;\n}\n.content__whyUs {\n  background-color: #3F4E4F;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2rem;\n}\n.content__whyUs p {\n  width: min(70%, 80vw);\n}\n.content__whyUs h2 {\n  padding: 1rem;\n  margin: 1rem;\n}\nfooter {\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--primary-text);\n  height: min(60px, 10vh);\n  color: var(--secondary-text);\n  align-items: center;\n  font-size: 1.3rem;\n}\nfooter a {\n  text-decoration: none;\n  color: var(--secondary-text);\n}\n",""]);const f=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=e(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(e,o,t,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function o(e){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===e){o=t;break}return o}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var f=o(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=r(p,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(e,n){var o=n.domAPI(n);return o.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;o.update(e=n)}else o.remove()}}e.exports=function(e,r){var a=t(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=o(a[i]);n[c].references--}for(var s=t(e,r),d=0;d<a.length;d++){var u=o(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,o){var t=function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,o)=>{e.exports=function(e){var n=o.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(o){!function(e,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,r&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},463:(e,n,o)=>{e.exports=o.p+"b5ba4c415b029db2146f.jpg"}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,o),a.exports}o.m=e,o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o.b=document.baseURI||self.location.href,o.nc=void 0,(()=>{var e=o(379),n=o.n(e),t=o(795),r=o.n(t),a=o(569),i=o.n(a),c=o(565),s=o.n(c),d=o(216),u=o.n(d),l=o(589),f=o.n(l),p=o(486),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const y='\n      <div id="content">\n        <div class="content__intro">\n          <h1 id="hero-text">The Coffee Hut</h1>\n        </div>\n\n        <div class="content__welcome">\n          <h2>Experience the Benefits of Productivity</h2>\n          \x3c!-- <p id=\'motto\'>Level up your productivity with a cup of our freshly brewed coffee.</p> --\x3e\n          <p>\n            At The Coffee Hut, we believe that a great cup of coffee can do\n            wonders for productivity. Our expertly roasted and brewed coffee\n            beans are carefully selected to provide a smooth and balanced flavor\n            that will give you the energy and focus you need to tackle your day.\n            The caffeine in our coffee helps to improve mental alertness and\n            concentration, while the rich aroma and taste can also help to\n            reduce stress and increase motivation. Whether you\'re looking to\n            power through a workday, study for an exam, or simply need a\n            pick-me-up, our coffee is the perfect fuel for your productivity\n            needs.\n          </p>\n        </div>\n\n        <div class="content__whyUs">\n          <h2>Why Us?</h2>\n          \x3c!-- <p id=\'motto\'>Level up your productivity with a cup of our freshly brewed coffee.</p> --\x3e\n          <p>\n            At The Coffee Hut, we take great pride in providing our customers\n            with the best coffee experience possible. Here are some reasons why\n            you should choose us: Quality: We use only the finest coffee beans,\n            which are expertly roasted and brewed to ensure a rich and flavorful\n            cup every time. Variety: Our menu features a wide variety of coffee\n            drinks, from classic favorites like cappuccinos and lattes to more\n            unique options like cold brew and pour-overs. Atmosphere: Our cozy\n            and welcoming café provides the perfect setting to enjoy your coffee\n            and get some work done or catch up with friends. Service: Our\n            friendly and knowledgeable baristas are always happy to help you\n            find your new favorite drink or answer any questions you may have.\n            Convenience: We offer both dine-in and takeout options, so you can\n            enjoy our coffee on the go or in the comfort of our café. Overall,\n            choosing The Coffee Hut means choosing quality, variety, atmosphere,\n            service, and convenience. We are committed to providing our\n            customers with the best coffee experience possible, and we look\n            forward to serving you soon.\n          </p>\n        </div>\n      </div>\n',m='\n      <div id="content">\n        <div class="content__intro">\n          <h1 id="hero-text">ASDFASDFASDFt</h1>\n        </div>\n\n        <div class="content__welcome">\n          <h2>Menu</h2>\n          \x3c!-- <p id=\'motto\'>Level up your productivity with a cup of our freshly brewed coffee.</p> --\x3e\n          <p>\n            At The Coffee Hut, we believe that a great cup of coffee can do\n            wonders for productivity. Our expertly roasted and brewed coffee\n            beans are carefully selected to provide a smooth and balanced flavor\n            that will give you the energy and focus you need to tackle your day.\n            The caffeine in our coffee helps to improve mental alertness and\n            concentration, while the rich aroma and taste can also help to\n            reduce stress and increase motivation. Whether you\'re looking to\n            power through a workday, study for an exam, or simply need a\n            pick-me-up, our coffee is the perfect fuel for your productivity\n            needs.\n          </p>\n        </div>\n\n        <div class="content__whyUs">\n          <h2>Why Us?</h2>\n          \x3c!-- <p id=\'motto\'>Level up your productivity with a cup of our freshly brewed coffee.</p> --\x3e\n          <p>\n            At The Coffee Hut, we take great pride in providing our customers\n            with the best coffee experience possible. Here are some reasons why\n            you should choose us: Quality: We use only the finest coffee beans,\n            which are expertly roasted and brewed to ensure a rich and flavorful\n            cup every time. Variety: Our menu features a wide variety of coffee\n            drinks, from classic favorites like cappuccinos and lattes to more\n            unique options like cold brew and pour-overs. Atmosphere: Our cozy\n            and welcoming café provides the perfect setting to enjoy your coffee\n            and get some work done or catch up with friends. Service: Our\n            friendly and knowledgeable baristas are always happy to help you\n            find your new favorite drink or answer any questions you may have.\n            Convenience: We offer both dine-in and takeout options, so you can\n            enjoy our coffee on the go or in the comfort of our café. Overall,\n            choosing The Coffee Hut means choosing quality, variety, atmosphere,\n            service, and convenience. We are committed to providing our\n            customers with the best coffee experience possible, and we look\n            forward to serving you soon.\n          </p>\n        </div>\n\n      </div>\n',v=document.querySelector("#content");function g(e){"home"===e?(v.innerHTML="",v.innerHTML=(console.log("test"),y)):"menu"===e&&(v.innerHTML=(console.log("menu"),m))}g("home");const w=document.getElementById("home_button"),b=document.getElementById("menu_button"),x=document.getElementById("about_button");w.addEventListener("click",(()=>{g("home")})),b.addEventListener("click",(()=>{g("menu")})),x.addEventListener("click",(()=>{console.log("about button")}))})()})();