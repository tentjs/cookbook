function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e=globalThis,r={},n={},o=e.parcelRequire27b0;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(e,r){function n(t,e){let r;let{state:n={},view:i,mounted:l}=e;if(null==t)return;let u={get:(t,e)=>"object"==typeof t[e]&&null!=t[e]?new Proxy(t[e],u):t[e],set(e,n,l){if(!e.hasOwnProperty(n))throw Error(`The property "${String(n)}" does not exist on the state object.`);if(e[n]===l)return!0;let u=Reflect.set(e,n,l);return function t(e,r){let n=Array.from(r.childNodes),o=Array.from(e.childNodes);(0!==o.length||0!==n.length)&&(a(e,r),e.nodeType!==Node.TEXT_NODE&&(o.length<n.length&&n.forEach((t,r)=>{null==o[r]&&e.append(function t(e,r){if(!e.$tent&&!r.$tent)return e;if(Object.keys(r.$tent.attributes).forEach(t=>e[t]=r.$tent.attributes[t]),e.hasChildNodes())for(let[n,o]of e.childNodes.entries())t(o,r.childNodes[n]);return e}(t.cloneNode(!0),t))}),o.length>n.length&&o.forEach((t,e)=>{null==n[e]&&t.remove()}),o.forEach((e,r)=>{let o=n[r];null!=o&&(e.tagName!==o.tagName&&e.replaceWith(o),a(e,o),t(e,o))})))}(r,i({state:s,el:t,attr:o(t)})),u}},s=new Proxy({...n},u);(r=i({state:s,el:t,attr:o(t)})).$tent={attributes:{},isComponent:!0},t.append(r),l?.({state:s,el:t,attr:o(t)})}function o(t){return e=>{let r=t.attributes.getNamedItem(e);if(r)return r.value}}function a(t,e){if(t.nodeType===Node.TEXT_NODE){t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue);return}e.attributes?.length&&Array.from(e.attributes).forEach(e=>{t.getAttribute(e.name)!==e.value&&t.setAttribute(e.name,e.value)}),t.attributes?.length&&Array.from(t.attributes).forEach(r=>{e.hasAttribute(r.name)||t.removeAttribute(r.name)})}t(e.exports,"mount",()=>n),t(e.exports,"tags",()=>i);let i={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(t=>i[t]=(e,r)=>(function t(e){let[r,n,o]=e,a=document.createElement(r);for(let e in a.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(e=>{a.append(Array.isArray(e)?t(e):e)}):a.append("number"==typeof n?n.toString():n),o)if(a.$tent.attributes[e]=o[e],e.startsWith("on")||/[A-Z]/.test(e))a[e]=o[e];else{let t=o[e];"boolean"==typeof t?t?a.setAttribute(e,""):a.removeAttribute(e):a.setAttribute(e,o[e])}return a})([t,e,r]))});var a=o("1Ovn3");const{button:i}=a.tags;(0,a.mount)(document.querySelector(".recipe"),{state:{count:0},view:({state:t})=>i(`Clicked ${t.count} times`,{onclick:()=>t.count++})});
//# sourceMappingURL=counter.27505448.js.map
