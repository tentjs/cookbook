function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequire27b0;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(t,r){function n(e,t){let r;let{state:n={},view:i,mounted:l}=t;if(null==e)return;let s={get:(e,t)=>"object"==typeof e[t]&&null!==e[t]?new Proxy(e[t],s):e[t],set(e,t,n){if(!e.hasOwnProperty(t))throw Error(`The property "${String(t)}" does not exist on the state object.`);if(e[t]===n)return!0;let l=Reflect.set(e,t,n);return function e(t,r){let n=Array.from(r.children);o(t,r),t.children.length<n.length&&n.forEach((e,r)=>{t.children[r]||t.append(a(e.cloneNode(!0),e))}),Array.from(t.children).forEach((t,r)=>{let i=n[r];if(!(i?.$tent?.isComponent||t?.$tent?.isComponent)){if(!i){t.remove();return}if(t.tagName!==i.tagName&&t.replaceWith(i),t.children.length<i.children.length){let e=Array.from(t.children);Array.from(i.children).forEach((r,n)=>{e[n]||t.append(a(r.cloneNode(!0),r))})}if(t.children.length>i.children.length){let e=Array.from(i.children);Array.from(t.children).forEach((t,r)=>{e[r]||t.remove()})}o(t,i),e(t,i)}})}(r,i({state:c})),l}},c=new Proxy({...n},s);(r=i({state:c})).$tent={attributes:{},isComponent:!0},e.append(r),l?.({state:c})}function o(e,t){Array.from(t.attributes).forEach(t=>{e.getAttribute(t.name)!==t.value&&e.setAttribute(t.name,t.value)}),Array.from(e.attributes).forEach(r=>{t.hasAttribute(r.name)||e.removeAttribute(r.name)}),e.textContent!==t.textContent&&0===t.children.length&&0===e.children.length&&(e.textContent=t.textContent)}function a(e,t){if(!e.$tent&&!t.$tent)return e;if(Object.keys(t.$tent.attributes).forEach(r=>e[r]=t.$tent.attributes[r]),e.hasChildNodes())for(let[r,n]of e.childNodes.entries())a(n,t.childNodes[r]);return e}e(t.exports,"mount",()=>n),e(t.exports,"tags",()=>i);let i={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(e=>i[e]=(t,r)=>(function e(t){let[r,n,o]=t,a=document.createElement(r);for(let t in a.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(t=>a.append(Array.isArray(t)?e(t):t)):a.append("number"==typeof n?n.toString():n),o)if(a.$tent.attributes[t]=o[t],t.startsWith("on")||/[A-Z]/.test(t))a[t]=o[t];else{let e=o[t];"boolean"==typeof e?e?a.setAttribute(t,""):a.removeAttribute(t):a.setAttribute(t,o[t])}return a})([e,t,r]))});var a=o("1Ovn3");const{div:i,p:l,input:s}=a.tags;(0,a.mount)(document.querySelector(".recipe"),{state:{text:""},view:({state:e})=>i([i([s([],{oninput:({target:t})=>e.text=t.value,placeholder:"Your message..."}),l(e.text)],{className:"HXRpca_group"})])});
//# sourceMappingURL=input.1d7e47be.js.map
