(()=>{"use strict";var n,e,t,r,o,i,a,c,s,d,p,u,l,m,f={426:(n,e,t)=>{t.d(e,{Z:()=>y});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(910),t.b),p=new URL(t(428),t.b),u=new URL(t(601),t.b),l=new URL(t(337),t.b),m=new URL(t(888),t.b),f=a()(o());f.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);var g=s()(d),h=s()(p),b=s()(u),v=s()(l),x=s()(m);f.push([n.id,"html{\n    font-size: 14px;\n    font-family: 'Bebas Neue', cursive;\n\n}\n\nbody{\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    background-color:#F7FEE7;\n\n}\n\nheader>nav{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 30px;\n\n    background-color: rgb(41, 33, 30, .1);\n    padding-left: 10vw;\n    padding-right: 10vw;\n}\n\nheader>nav>span{\n    \n    font-size: 2.5rem;\n    color: #F80000;\n\n\n}\n\na:link {\n    text-decoration: none;\n}\na:visited {\n    text-decoration: none;\n}\n\nheader>nav>ul{\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n\n}\n\nheader>nav>ul>li{\n    list-style: none;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    background-image: url("+g+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n#content>div{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n#content>p {\n    font-size: 6rem;\n    color: #FED201;\n    margin-top: 0;\n    margin-bottom: 50px;\n}\n#content>p>em{\n    color:#EA0100 ;\n}\n\n\n.items{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(115, 115, 115, .5);\n    height: 300px;\n    width: 300px;\n    border: 1px solid rgb(57, 50, 44);\n    border-radius: 50%;\n    transition: transform .300s ease-in-out, font-size .500s ease-in-out;\n\n}\n\n.items:hover{\n    transform: scale(1.1);\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.items>span{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n#item1{\n    background-image: url("+h+");\n}\n\n#item2{\n    background-image: url("+b+");\n    background-position: center;\n    background-size: cover;\n}\n\n#item3{\n    background-image: url("+v+");\n    background-position: center;\n    background-size: cover;\n}\n\n#item4{\n    background-image: url("+x+");\n    background-position: center;\n    background-size: cover;\n}\n\n.description {\n    height: 70px;\n    width: 300px;\n    background-color: rgb(248, 189, 1, .5);\n    border-radius: 10px;\n}\n\n\n\n@media only screen and (max-width: 650px) {\n    #content>p{\n        margin-top: 80px;\n        margin-bottom: 30px;\n        font-size: 3rem;\n    }\n    #content>div{\n        margin-top: 0;\n        gap: 10px;\n    }\n    .items{\n        height: 190px;\n        width: 190px;\n\n    }\n    .items:hover{\n        transform: scale(1.1);\n        font-size: 1.1rem;\n    }\n    .description {\n        height: 70px;\n        width: 300px;\n        background-color: rgb(248, 189, 1, .5);\n        border-radius: 20px;\n    }\n  }",""]);const y=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],p=i[d]||0,u="".concat(d," ").concat(p);i[d]=p+1;var l=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},428:(n,e,t)=>{n.exports=t.p+"81049528866a7474de99.png"},601:(n,e,t)=>{n.exports=t.p+"0deeb825cc9b48482967.jpg"},910:(n,e,t)=>{n.exports=t.p+"b02d0791b08f83c04f52.jpg"},337:(n,e,t)=>{n.exports=t.p+"e4b62d3d78c76e796983.jpg"},888:(n,e,t)=>{n.exports=t.p+"aaf59d6982427a2f1864.jpg"}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return f[n](t,t.exports,h),t.exports}h.m=f,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),i=h.n(o),a=h(565),c=h.n(a),s=h(216),d=h.n(s),p=h(589),u=h.n(p),l=h(426),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(l.Z,m),l.Z&&l.Z.locals&&l.Z.locals,function(){function n(){const n=document.createElement("span");return n.classList.add("description"),n}const e=document.getElementById("content"),t=document.createElement("div"),r=document.createElement("div");r.setAttribute("id","item1"),r.classList.add("items");const o=document.createElement("div");o.setAttribute("id","item2"),o.classList.add("items");const i=document.createElement("div");i.setAttribute("id","item3"),i.classList.add("items");const a=document.createElement("div");a.setAttribute("id","item4"),a.classList.add("items");const c=document.createElement("p");c.innerHTML="GOOD FOOD, <em>BETTER</em> COMPANY",r.appendChild(n()).textContent="Breakfast Set (Sausage, Rice, Eggs)",o.appendChild(n()).textContent="SALAD INSIDE AN AVOCADO",i.appendChild(n()).textContent="SLOPPY BURGER",a.appendChild(n()).textContent="SEAFOOD RAMEN",e.appendChild(c),e.appendChild(t),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a)}()})();